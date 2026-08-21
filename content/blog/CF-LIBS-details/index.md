---
title: "CF-LIBS详细步骤"
description: "介绍实现CF-LIBS的详细步骤"
summary: "介绍实现CF-LIBS的详细步骤"
date: 2026-08-17
lastmod: 2026-08-17
draft: false
weight: 50
categories: ["LIBS"]
tags: ["LIBS"]
contributors: []
pinned: false
homepage: false
params:
  seo:
    title: ""
    description: ""
    canonical: ""
    robots: ""
---

## CF-LIBS 执行步骤逐步拆解

CF-LIBS（Calibration-Free LIBS）的核心逻辑位于 `models/cf_libs.py` 的 `CFLIBS` 类中。整个流程由 `predict_composition()` 编排，依次调用以下 5 个核心方法。

### Step 1: Boltzmann 测温
**方法**: `_estimate_temperature(X)`

- **物理原理**：LTE 假设下，同一元素多条谱线强度遵循 Boltzmann 分布：
  $$ \ln\left(\frac{I_j}{g_j A_j}\right) = \ln\left(\frac{F n_s}{Z_s(T)}\right) - \frac{E_j}{kT} $$
  对 Fe I 多条谱线做 $\ln(I/gA)$ vs $E$ 线性回归，斜率 $= -1/(kT)$，由此解出等离子体温度 $T$。
- **代码流程**：
  1. 加载测温元素（默认 Fe I）谱线，要求 ≥ 2 条。
  2. 调用 `_multi_line_net_and_snr()` 提取净强度、SNR、对比度。
  3. 计算 $y = \ln(\text{net} / gA)$，逐样本线性回归。
  4. **谱线过滤**：仅保留 SNR ≥ 5.0 且对比度 ≥ 2.0 的谱线；不足时放宽为仅 SNR 过滤。
  5. **能量跨度预检**：$\Delta E < 1.5\,\text{eV}$ 时回退（斜率对误差过度敏感）。
  6. **迭代异常值移除**：贪心逐点移除，直到 $R^2$ 增量 < 0.01。
  7. **质量门控**：$R^2 \geq 0.5$、斜率 < 0、$T \leq 15000\,\text{K}$，任一不满足则回退 $T_{\text{ref}} = 10000\,\text{K}$。

### Step 2: 电子密度估计
**方法**: `_estimate_electron_density(X, T)`

- **物理原理**：$N_e$ 是 Saha 方程的必需输入。因设备波长范围不含 Hα 656.2 nm，改用范围内孤立线的 Stark 展宽法。
- **代码流程**（`electron_density.py` → `estimate_ne()`）：
  1. 逐候选线做 Voigt + 线性背景拟合，取 Lorentzian FWHM。
  2. 扣除仪器展宽（Olivero 1977 近似反卷积）。
  3. 计算 $N_e = 10^{16} \cdot \text{FWHM}_{\text{Stark}} / (2 w_f)$。
  4. **自吸收检测**：同多重态两线强度比偏离理论值 > 40% → 弃用。
  5. **分层取值**：非共振线优先 → 通过自吸收检测的共振线 → 回退 $10^{17}\,\text{cm}^{-3}$。

### Step 3: 谱线强度提取与三重过滤
**方法**: `_multi_line_net_and_snr()` + 过滤逻辑

此步嵌入在第 4 步循环中，但逻辑独立。

- **强度提取**：
  - 峰值：窄窗口（±window_nm）内最大值
  - 背景：宽窗口中位数（排除峰中心）
  - 噪声：宽窗口 IQR / 1.349（对退化分布鲁棒）
  - 净强度：`area` 模式取积分面积，`max` 模式取 peak − bg
  - 峰对比度：peak / shoulder_median

- **三重过滤判据**：

  | 过滤器 | 阈值 | 物理依据 |
  | :--- | :--- | :--- |
  | SNR | ≥ 5.0 | 过滤噪声峰 |
  | 峰对比度 | ≥ 2.0 | 过滤连续背景伪峰 |
  | 动态 SNR 备选 | ≥ 3.0 + 对比度达标 | 恢复 Fe 密集区被高背景拖低 SNR 的真实强峰 |
  | 激发能上限 | E ≤ 12 eV | 高激发能线 Boltzmann 因子极小，放大噪声 |
  | gA·boltz 下限 | ≥ 2×10⁶ | 防弱跃迁线分母极小致浓度失真 |

- **光谱干扰检测**：窗内波长重叠直接判定；近邻强线用实测强度比 > 10 判定。

### Step 4: 浓度计算与 Saha 合并
**方法**: `_compute_relative_concentrations(X, T, N_e)`

- **核心公式**：$q = \text{net} / (gA \cdot e^{-E/kT})$，理论上 $q = F \cdot C_{s,\text{ion}} / Z_{s,\text{ion}}(T)$。
- **逐元素流程**：
  1. 枚举可用电离态（I + II）。
  2. 提取谱线 → 三重过滤 → 干扰排除 → 计算 q 矩阵。
  3. **主路径**：有效线 ≥ 4 条 → 取 75 百分位（优先受自吸收影响最小的线）。
  4. **降级路径**（痕量元素）：
     - 1–3 条有效线 → 50 百分位
     - 0 条有效线但有非弱线 → 推算检测下限 $q \times (3/\text{SNR})$
     - 全部为弱线 → 赋 floor × 100
  5. **配分函数**：优先 NIST 温度依赖表插值，回退固定值。
  6. **Saha 合并**：两态均有谱线时直接相加；仅参考态有时用 Saha 方程推算另一态。
- **归一化**：$C_s = C_{\text{raw},s} / \sum C_{\text{raw}}$ 消除实验因子 F。降级元素施加浓度上限后重新归一化。

### Step 5: 成分转换与输出
**方法**: `atomic_to_composition()` + 诊断

- **转换流程**（`composition.py`）：
  1. 原子摩尔分数 → 元素质量分数（含化学计量配氧）。
  2. 元素质量分数 → 氧化物 wt%（乘化学计量因子，如 Ti × 1.668 = TiO₂）。
  3. TFe = w_Fe（全铁元素形态）；S/P 为元素形态不配氧。
  4. FeO = w_Fe × feo_fe_ratio × 1.2865。
- **诊断输出**：
  - McWhirter LTE 判据校验
  - 温度回退警告
  - 干扰排除统计、痕量元素降级标记
  - 误差估计（多组用组间 σ，单组用蒙特卡洛扰动法）

### 最终输出组分
> TiO₂ · TFe · SiO₂ · S · P · MnO · MgO · FeO · CaO · Al₂O₃

---

## 总结

CF-LIBS 的精妙之处在于通过 **Boltzmann 图测温 → Stark 展宽测 Nₑ → Saha 合并电离态 → 归一化消 F** 这条物理链路，从单条光谱直接得到 10 组分浓度，无需任何标准样品。

但其前提假设严格（LTE、光学薄、谱线净强度无干扰），代码中大量的过滤门控和降级路径正是为了在真实复杂光谱（Fe 密集区、痕量元素弱线、光谱干扰）下尽可能逼近这些理想假设。



