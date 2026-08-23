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
## CF-LIBS 执行流程详细拆解

CF-LIBS（Calibration-Free LIBS，GB/T 38257—2019 第 9.2.3 条）的核心逻辑位于 `libs_analysis/src/libs_analyzer/models/cf_libs.py` 的 `CFLIBS` 类中。整个多元素全成分输出由 `predict_composition()` 编排，依次执行以下 **5 个核心步骤** + **1 个后处理步骤**。

---

### Step 1: Boltzmann 图测温
**方法**: `_estimate_temperature(X)`

**物理原理**: LTE 假设下，同一元素多条谱线强度遵循 Boltzmann 分布。对目标元素（默认 Fe I）的各谱线取对数：

$$\ln\left(\frac{I_j}{g_j \cdot A_j}\right) = \ln\left(\frac{F \cdot n_s}{Z_s(T)}\right) - \frac{E_j}{k_B T}$$

以 $E_j$ 为自变量做线性回归，斜率 $= -1/(k_B T) \Rightarrow T$。

**代码流程**:

1. **加载测温谱线**: 取 `temp_element`（默认 Fe）`temp_ion`（默认 I）的谱线表；若 `temp_min_wl_nm > 0`（默认 400nm），剔除紫外区谱线（避免 Fe 密集谱区宽窗背景被邻线抬高导致 T 虚高）。
2. **要求 ≥ `max(min_lines_for_boltzmann, 4)` 条线**: 4 条是统计稳定的下限（2 点拟合 R² 恒为 1，门控失效）。不足则全部样品回退 `t_ref_k`。
3. **调用 `_multi_line_net_and_snr()` 提取净强度/SNR/对比度**:
   - **净强度 net**: 窗内峰值（或面积）减去宽窗中位数背景。
   - **噪声**: 背景区 IQR / 1.349（对 clip(≥0) 退化分布鲁棒，不用 MAD）。
   - **SNR**: `(peak − bg) / noise`。
   - **对比度**: `peak / shoulder_median`，shoulder 为紧邻峰窗两侧的局部中位强度，用于过滤连续背景上的伪峰。
4. **计算** $y = \ln(\text{net} / gA)$，**逐样本线性回归**。
5. **谱线过滤**:
   - 主过滤：SNR ≥ `snr_threshold`（默认 5.0）且对比度 ≥ `min_peak_contrast`（默认 2.0）。
   - 放宽：不足时退化为仅 SNR ≥ 5.0；仍不足则回退 T_ref。
6. **强线自吸收规避**: 取净强度 ≤ `temp_line_quantile`（默认 0.3，即最弱 30%）分位数的弱线子集。物理依据：线光学深 τ ∝ 线强，强线被自吸收压低 → Boltzmann 斜率变浅 → T 虚高 5000–10000K。弱线不足 4 条时回退全部有效线。
7. **能量跨度预检**: $\Delta E = \max(E) - \min(E) < $ `min_boltzmann_delta_e_ev`（默认 1.2 eV）时回退（斜率对误差过度敏感）。
8. **初拟合**: `_boltzmann_fit(E, y)` → (slope, R², intercept)。
9. **向下离群点移除（自吸收）**: 迭代移除残差最低的点（残差 $< -$ `self_absorb_sigma` × RMSE），最多移除 30% 且移除后 ≥ 4 条。**仅移除向下偏离**（自吸收只压低强度），不删向上离群点（避免旧贪心算法过拟合到 2 点拟合的退化问题）。
10. **移除端点后复检 ΔE**（可能缩小）。
11. **斜率方向检查**: slope 需为负（$-1/kT < 0$）。
12. **R² 显著性门控**: 用 F 检验 95% 临界值动态调整 R² 下限（n=4 需 R²≥0.90，n=5 需 0.77，n=6 需 0.66），取 `max(min_boltzmann_r2, r2_sig)`。scipy 缺失时退化为固定门槛。
13. **温度合理性**: $T \in [$ `t_min_k`, `t_boltzmann_max_k` $]$（默认 [3000, 20000] K）。**此判定在删线结束后才执行**，不参与删线决策，避免"删线直到温度过线"的过拟合。
14. **不满足任一条件的样品回退 `t_ref_k`（默认 10000 K）**。
15. **最终裁剪**到 `[t_min_k, t_max_k]`。

---

### Step 2: 电子密度估计（Stark 展宽法）
**方法**: `_estimate_electron_density(X, T)` → 调用 `electron_density.estimate_ne()`

**物理原理**: 等离子体中带电粒子间的电场导致谱线 Stark 展宽，Lorentzian 分量 FWHM 与电子密度成正比：

$$N_e = 10^{17} \times \frac{\text{FWHM}_{\text{Stark}}}{w} \quad (\text{cm}^{-3})$$

其中 $w$ 为 Stark 展宽参数（nm）。

**代码流程**:

1. **优先级判定**:
   - `electron_density` 为 float → 用户指定固定值（最高优先，不受 `enable_stark_density` 开关影响）。
   - `enable_stark_density=False`（消融实验）→ 固定 `DEFAULT_NE_CM3 = 1×10^{17}` cm⁻³。
   - 否则 → Stark 展宽法自动估计。
2. **Stark 展宽法自动估计** (`estimate_ne()`):
   - **加载 Stark 表**: 从 YAML 读取候选谱线的波长、Stark 参数 $w$、共振标志、多重线信息。
   - **Voigt 拟合**: 对每条候选线、每个样品，在 ±`fit_window_nm`（默认 1.0nm）窗内拟合 Voigt + 线性背景（`_voigt_bg()`），提取 Lorentzian HWHM $\gamma$。
   - **仪器展宽扣除**: 用 Olivero-Longbothom 1977 近似反卷积，从观测 Voigt FWHM 中扣除仪器高斯展宽（`instrument_width_nm`，默认 0.08nm），得到纯 Stark FWHM。
   - **逐线计算 $N_e$**: $N_e = 10^{17} \times \text{FWHM}_{\text{Stark}} / w$。
   - **自吸收检测**: 对共振线（如 Mg II 279/280、Ca II 393/396）检查多重线强度比偏离理论值的程度，超过 `self_absorption_tolerance`（默认 0.4）的样品标记为自吸收，该线不参与 $N_e$ 计算。
   - **中位数聚合**: 非共振线中位数优先 → 通过自吸收检查的共振线中位数 → 回退 `1×10^{17}`。
   - **物理合理性裁剪**: $N_e \in [10^{15}, 10^{19}]$ cm⁻³。
3. **失败回退**: 异常时回退 `1×10^{17}` cm⁻³。
4. **返回**: `(Ne (n,), diagnostics: {ne_source, per_line, n_lines_used, ...})`。

---

### Step 3: 配分函数计算
**方法**: `_Z(element, ion, T)` → 调用 `partition_function.partition_function()`

**物理原理**: 配分函数 $Z_{s,\text{ion}}(T)$ 是元素在不同能级上布居的统计权重之和，是 CF-LIBS 浓度公式中消去 $F$ 后唯一与温度相关的修正因子。不同元素、不同电离态的 $Z(T)$ 差异显著（如 Fe I 在 10000K ≈ 28，Fe II ≈ 42）。

**代码流程**:

1. **优先级判定**:
   - 用户提供了 `partition_functions`（旧格式 `{Fe: 8.0}` 固定值）且未指定 `partition_functions_path` → 直接返回固定值，忽略 ion 与 T（向后兼容）。
   - 否则 → 调用 NIST 表插值。
2. **NIST 表插值** (`partition_function()`):
   - **加载表**: `load_partition_table()` 从 `configs/partition_functions.yaml` 读取 `{T_points: [...], elements: {elem: {ion: {T: Z}}}}`，校验 Z ∈ [0.5, 1000] 且随温度单调递增。
   - **线性插值**: 对输入 T（可为数组）在 NIST 离散温度点上做线性插值。T 超出表范围时用边界值外推。
   - **缺失回退**: 元素/电离态不在表中时返回 `fallback=1.0`。
3. **返回**: 与 T 同 shape 的 `ndarray`。

---

### Step 4: Saha 电离平衡合并
**方法**: 在 `_compute_relative_concentrations()` 内部执行 → 调用 `saha.saha_ratio()`

**物理原理**: Saha 方程描述相邻电离态的浓度比：

$$\frac{n_{s,\text{II}}}{n_{s,\text{I}}} = \frac{2}{N_e} \cdot \frac{Z_{s,\text{II}}(T)}{Z_{s,\text{I}}(T)} \cdot \left(\frac{2\pi m_e k_B T}{h^2}\right)^{3/2} \cdot \exp\left(-\frac{E_{\text{ion}}}{k_B T}\right)$$

CF-LIBS 浓度公式对每个电离态分别给出 $q_{\text{ion}} = F \cdot C_{s,\text{ion}} / Z_{s,\text{ion}}(T)$，需合并得到元素总浓度 $C_s = C_{s,\text{I}} + C_{s,\text{II}}$。

**代码流程**（在 `_compute_relative_concentrations()` 中对每个元素执行）:

1. **枚举可用电离态**: `_available_ions(elem)` 返回原子参数表中存在的 I/II 态（跳过 III 及以上，LIBS 温度下占比 <1%）。
2. **各电离态分别计算 $q_{\text{ion}}$**: 对每个 ion，取谱线表 → 提取 net/SNR/contrast → 多重过滤 → 计算 $q = \text{net} / (gA \cdot \exp(-E/k_BT))$。
3. **选择参考电离态**: `_pick_reference_ion(ions)` 优先选 I（中性原子谱线更全），单态则直接用。
4. **合并策略（`enable_saha_merge=True` 时）**:
   - **两态均有谱线**: $C_{\text{total}} = C_{\text{ref}} + C_{\text{other}}$（直接相加，$F$ 相同在归一化时消去）。
   - **仅参考态有谱线**: 用 Saha 方程推算另一态。
     - 参考态为 I → $C_{\text{total}} = C_{\text{I}} \times (1 + \text{saha\_ratio})$
     - 参考态为 II → $C_{\text{total}} = C_{\text{II}} \times (1 + 1/\text{saha\_ratio})$
   - **放大钳位**: `saha_max_amplification`（默认 $10^4$）。T 过高/Ne 过低时放大倍数可达 $10^3$–$10^4$，超限时钳位并记录诊断（`saha_clipped`）。
5. **单电离态或 Saha 关闭**: 直接 $C_{\text{raw}} = q \times Z(T)$，跳过合并。

---

### Step 5: 多重谱线过滤 + 相对浓度计算 + 归一化
**方法**: `_compute_relative_concentrations(X, T, Ne)`

这是整个流程中最复杂的步骤，包含谱线质量筛选、浓度计算、降级检测和归一化。

**物理原理**:

$$C_s \propto Z_s(T) \cdot \left\langle \frac{I_j}{g_j \cdot A_j \cdot \exp(-E_j / k_B T)} \right\rangle_{j \in s}$$

归一化消去总比例因子 $F$：$x_s = C_{s,\text{raw}} / \sum_{s'} C_{s',\text{raw}}$。

**代码流程**:

#### 5a. 逐元素、逐电离态的谱线质量过滤

对每个元素的每个电离态，执行以下 **五层过滤**（每层可由 `enable_*` 开关独立关闭，用于消融实验）：

| 层 | 过滤 | 物理目的 |
|---|---|---|
| ① 高激发能过滤 | $E \leq$ `max_E_ev`（默认 12.0 eV） | 高 E 线在典型温度下 Boltzmann 因子极小（<10⁻⁷），1/boltz 放大噪声致浓度虚高 |
| ② 三重过滤（SNR + 对比度 + 备选通道） | SNR ≥ 5.0 且 contrast ≥ 2.0；备选：SNR ≥ 3.0 且 contrast ≥ 1.3 | 过滤噪声峰和连续背景伪峰，恢复 Fe 密集区真实强峰 |
| ③ 光谱干扰检测 | 两级：窗内混合（\|Δλ\|≤window_nm）+ 近邻强线（实测强度比 > ratio） | 排除被其他元素近邻线污染的线（如 Na D 线污染 S I 589.6nm） |
| ④ 弱线过滤 | $gA \cdot \exp(-E/k_BT) \geq$ `min_gA_boltz`（默认 2×10⁶） | gA·boltz 过小时 1/(gA·boltz) 放大因子过大，噪声被放大致浓度失真 |
| ⑤ 相对强度过滤 | net ≥ `min_line_intensity` × 全谱最大值（默认 1%） | 过除低于检测限的极弱噪声线 |

#### 5b. 浓度 $q$ 计算（三条路径）

对每个样品 $i$，统计通过所有过滤的有效线数 $n_{\text{valid}}$：

| 路径 | 条件 | 计算方式 |
|---|---|---|
| **主路径** | $n_{\text{valid}} \geq$ `min_lines_for_concentration`（默认 4） | $q = \text{percentile}_{75}(q_{\text{all, valid}})$（上四分位，规避自吸收压低的强线） |
| **降级路径 1** | 1–3 条有效线 | $q = \text{percentile}_{50}(q_{\text{all, valid}})$（中位数，少量线时更鲁棒） |
| **降级路径 2** | 0 条有效线但有非弱线 | 从非弱线中 gA·boltz 最大的最灵敏线推算检测下限：$q_{\text{limit}} = q_{\text{measured}} \times \min(1, 3/\text{SNR})$ |
| **降级路径 3** | 所有线均为弱线 | 赋占位值 `floor × 100`（代表"低于检测下限"） |

#### 5c. Saha 合并（见 Step 4）

#### 5d. 降级元素浓度上限

对走了降级路径的元素（且未被任一电离态主路径覆盖的样品），施加地质合理浓度上限（`trace_concentration_caps`，如 Mn ≤ 0.5%、S ≤ 0.8% 等），防止噪声/干扰放大致过估。**仅约束降级元素，主量元素不受影响。** 钳位后重新归一化保持总和为 1。

#### 5e. 归一化

$x_s = C_{s,\text{raw}} / \sum_{s'} C_{s',\text{raw}}$，消去未知总比例因子 $F$，得到各元素原子摩尔分数。

---

### Step 6（后处理）: LTE 校验 + 原子浓度转氧化物质量分数
**方法**: `mcwhirter_check()` + `atomic_to_composition()`

#### 6a. McWhirter LTE 判据校验
**调用**: `mcwhirter_check(Ne, T, delta_E)`

**物理原理**: LTE 假设成立需满足 McWhirter 判据：

$$N_e \geq 1.6 \times 10^{12} \times T^{1/2} \times \Delta E^3 \quad (\text{cm}^{-3})$$

其中 $\Delta E$ 取参与浓度计算的谱线中最大上能级 $E_{\text{upper}}$（保守上界，因跃迁能量 ≤ $E_{\text{upper}}$）。

**代码流程**:
- 计算各样品的阈值并与实测 $N_e$ 比较。
- 返回 `{satisfied: (n,) bool, threshold: (n,), min_ne: float, delta_E_ev: float}`。
- 不满足的样品不代表结果一定错误，但置信度降低（国标要求报告此判据）。

#### 6b. 原子摩尔分数 → 氧化物质量分数
**调用**: `atomic_to_composition(C_atomic, feo_fe_ratio)`

**物理原理**: CF-LIBS 输出原子摩尔分数，但铁矿石分析报告要求氧化物/元素质量分数。转换需：
1. 摩尔分数 × 原子量 → 元素质量。
2. 按化学计量比配氧（如 Si → SiO₂ 需 2 个 O 原子）。
3. 归一化到全氧化样品总质量（金属 + 氧 = 100%）。
4. 乘以氧化物转换因子（如 Si → SiO₂ 的 $M_{\text{SiO}_2}/M_{\text{Si}} = 2.1392$）。
5. P 和 S 以元素形式报告（铁矿石国标惯例）。
6. FeO 估算：$\text{FeO} = \text{Fe}^{2+} \times M_{\text{FeO}} / M_{\text{Fe}}$，其中 $\text{Fe}^{2+} = \text{Fe}_{\text{total}} \times $ `feo_fe_ratio`（磁铁矿 ≈ 0.333，赤铁矿 ≈ 0）。

**代码流程**:
1. `atomic_to_element_mass()`: 原子摩尔分数 → 含氧元素质量分数（氧按化学计量比分配到各金属元素的分母中）。
2. `element_mass_to_composition()`: 元素质量分数 → 10 组分 wt% 报告（TFe、FeO、SiO₂、Al₂O₃、CaO、MgO、TiO₂、MnO、P、S）。

---

### 总流程总结

```
predict_composition(X)
  │
  ├── Step 1: _estimate_temperature(X)
  │     Boltzmann 图法逐样品测温 → T (n,)
  │     核心机制：弱线选择规避自吸收 + 向下离群点移除 + F 检验 R² 门控
  │
  ├── Step 2: _estimate_electron_density(X, T)
  │     Stark 展宽法估计 → Ne (n,)
  │     核心机制：Voigt 拟合 + 仪器展宽扣除 + 共振线自吸收检测 + 中位数聚合
  │
  ├── Step 3: _Z(element, ion, T)  [在 Step 5 内逐元素调用]
  │     NIST 表插值 → Z(T) (n,)
  │     核心机制：离散温度点线性插值，缺失回退 1.0
  │
  ├── Step 4: Saha 合并  [在 Step 5 内逐元素执行]
  │     saha_ratio() → C_II/C_I → C_total
  │     核心机制：两态直接相加 or 单态 Saha 推算 + 放大钳位
  │
  ├── Step 5: _compute_relative_concentrations(X, T, Ne)
  │     五层过滤 + 三条浓度路径 + Saha 合并 + 降级上限 + 归一化
  │     → {element: 原子摩尔分数 (n,)}
  │
  └── Step 6: 后处理
        ├── mcwhirter_check(Ne, T, ΔE)  → LTE 判据
        └── atomic_to_composition(C_atomic) → 10 组分 wt% 报告
```

---

### calibrated 模式（可选）

若 `calibrated=True`，在 `fit(X, y)` 阶段用已知浓度 $y$ 对目标元素（默认 Fe）的相对浓度 $c_{\text{rel}}$ 做线性校正 $y = a \cdot c_{\text{rel}} + b$。`predict_composition()` 中以该校正比等比缩放全部元素后重新归一化——即国标 9.2.3 允许的"单点/多点定标 CF-LIBS"模式。
