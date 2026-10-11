---
title: "数理统计"
description: "介绍数理统计的基础知识。"
summary: "介绍数理统计的基础知识"
date: 2026-10-11
lastmod: 2026-10-11
draft: false
weight: 50
categories: [数学]
tags: ["数理统计"]
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

---

## 第6章 数理统计的基本概念

### 6.1 一些基本概念

#### 6.1.1 总体和个体

**总体（Population）**：在数理统计中，总体是我们研究对象的全体。更精确地说，总体是指所研究对象的某个**数量指标**的所有取值的集合。这个数量指标可以用一个随机变量 $X$ 来描述，因此总体也等同于随机变量 $X$ 的**概率分布**。

- **有限总体**：包含有限个个体，如一批共1000件产品。
- **无限总体**：包含无限个个体，如某生产线上源源不断生产的产品。

**个体（Individual）**：组成总体的每一个基本单元称为个体。在数量指标的意义下，个体就是随机变量 $X$ 的一次观测值。

**核心思想**：统计学的目的是通过研究总体 $X$ 的分布规律来了解总体的特征。但在实际问题中，总体的分布往往是未知的，这就是需要统计推断的原因。

---

#### 6.1.2 样本和样本分布

**样本（Sample）**：从总体中按一定规则抽取的一部分个体称为样本。若从总体中抽取 $n$ 个个体，记为 $X_1, X_2, \ldots, X_n$，则称这 $n$ 个随机变量为一个**样本**，$n$ 称为**样本容量**。

**简单随机样本**：如果 $X_1, X_2, \ldots, X_n$ 满足以下两个条件：
1. **独立性**：$X_1, X_2, \ldots, X_n$ 相互独立；
2. **同分布性**：每个 $X_i$ 与总体 $X$ 具有相同的分布；

则称 $X_1, X_2, \ldots, X_n$ 为来自总体 $X$ 的**简单随机样本**。

**样本的联合分布**：
- 若总体 $X$ 为离散型，概率分布为 $P(X = x) = p(x)$，则样本的联合概率分布为：
$$P(X_1 = x_1, \ldots, X_n = x_n) = \prod_{i=1}^{n} p(x_i)$$

- 若总体 $X$ 为连续型，概率密度为 $f(x)$，则样本的联合概率密度为：
$$f(x_1, \ldots, x_n) = \prod_{i=1}^{n} f(x_i)$$

**样本观测值**：样本 $X_1, \ldots, X_n$ 在一次具体抽样后得到的实际数值 $x_1, \ldots, x_n$，称为样本观测值（样本值）。

---

#### 6.1.3 参数空间和分布族（选学部分）

**分布族（Family of Distributions）**：在许多实际问题中，总体分布的形式（类型）是已知的，但分布中含有未知的参数。例如，总体服从正态分布 $N(\mu, \sigma^2)$，其中 $\mu$ 和 $\sigma^2$ 未知。所有可能的分布构成的集合称为**分布族**。

**参数（Parameter）**：分布中未知的常数称为参数，通常用 $\theta$ 表示（可以是向量形式 $\theta = (\theta_1, \ldots, \theta_k)^T$）。

**参数空间（Parameter Space）**：参数 $\theta$ 所有可能取值的集合，记为 $\Theta$。

**参数分布族**的记法：
$$\mathcal{P} = \{F(x; \theta) : \theta \in \Theta\}$$

或对于密度/概率函数：
$$\mathcal{P} = \{f(x; \theta) : \theta \in \Theta\}$$

**示例**：
- 正态分布族：$\mathcal{P} = \{N(\mu, \sigma^2) : \mu \in \mathbb{R}, \sigma^2 > 0\}$，参数空间 $\Theta = \mathbb{R} \times (0, +\infty)$。
- 泊松分布族：$\mathcal{P} = \{P(\lambda) : \lambda > 0\}$，参数空间 $\Theta = (0, +\infty)$。

**统计推断的核心任务**：在已知分布族 $\mathcal{P}$ 的前提下，根据样本信息对未知参数 $\theta$ 进行估计或检验。

---

### 6.2 统计量和抽样分布

#### 6.2.1 统计量

**统计量（Statistic）**：设 $X_1, X_2, \ldots, X_n$ 是来自总体的一个样本，$T(X_1, \ldots, X_n)$ 是样本的函数。如果 $T$ 中**不含任何未知参数**，则称 $T$ 为一个统计量。

**关键点**：统计量只依赖于样本，不含未知参数，因此一旦有了样本观测值，统计量的值就可以被计算出来。

**常用统计量**：

1. **样本均值（Sample Mean）**：
$$\bar{X} = \frac{1}{n}\sum_{i=1}^{n} X_i$$
样本均值反映了样本的"中心位置"，是对总体均值 $E(X)$ 的自然估计。

2. **样本方差（Sample Variance）**：
$$S^2 = \frac{1}{n-1}\sum_{i=1}^{n}(X_i - \bar{X})^2$$
样本方差反映了样本的"离散程度"，是对总体方差 $D(X)$ 的自然估计。分母用 $n-1$ 而非 $n$，是为了保证 $E(S^2) = D(X)$（无偏性）。

3. **样本标准差**：
$$S = \sqrt{S^2} = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(X_i - \bar{X})^2}$$

4. **样本 $k$ 阶原点矩**：
$$A_k = \frac{1}{n}\sum_{i=1}^{n}X_i^k, \quad k = 1, 2, \ldots$$

5. **样本 $k$ 阶中心矩**：
$$B_k = \frac{1}{n}\sum_{i=1}^{n}(X_i - \bar{X})^k, \quad k = 1, 2, \ldots$$

6. **样本极差**：
$$R = X_{(n)} - X_{(1)}$$
其中 $X_{(1)} \leq X_{(2)} \leq \cdots \leq X_{(n)}$ 为样本的**顺序统计量**（排序后的样本值）。

**顺序统计量**：将样本 $X_1, \ldots, X_n$ 按从小到大排列得到的 $X_{(1)}, X_{(2)}, \ldots, X_{(n)}$。其中 $X_{(1)}$ 为最小值，$X_{(n)}$ 为最大值。

---

#### 6.2.2 抽样分布

**抽样分布（Sampling Distribution）**：统计量是样本的函数，而样本是随机变量，因此统计量本身也是一个随机变量。统计量的概率分布称为该统计量的**抽样分布**（或称统计量的分布）。

抽样分布是统计推断的理论基础。以下是几个最重要的抽样分布：

---

##### ① $\chi^2$ 分布（卡方分布）

**定义**：设 $Z_1, Z_2, \ldots, Z_n$ 相互独立，且都服从标准正态分布 $N(0,1)$，则随机变量
$$\chi^2 = \sum_{i=1}^{n} Z_i^2$$
服从自由度为 $n$ 的 $\chi^2$ 分布，记为 $\chi^2 \sim \chi^2(n)$。

**性质**：
- 期望：$E(\chi^2) = n$
- 方差：$D(\chi^2) = 2n$
- **可加性**：若 $\chi_1^2 \sim \chi^2(n_1)$，$\chi_2^2 \sim \chi^2(n_2)$，且相互独立，则 $\chi_1^2 + \chi_2^2 \sim \chi^2(n_1 + n_2)$。

---

##### ② $t$ 分布（学生氏分布）

**定义**：设 $Z \sim N(0,1)$，$Y \sim \chi^2(n)$，且 $Z$ 与 $Y$ 相互独立，则随机变量
$$T = \frac{Z}{\sqrt{Y/n}}$$
服从自由度为 $n$ 的 $t$ 分布，记为 $T \sim t(n)$。

**性质**：
- 概率密度关于 $t = 0$ 对称，形状类似于标准正态分布，但尾部更厚。
- 当 $n \to \infty$ 时，$t(n)$ 趋近于标准正态分布 $N(0,1)$。
- $E(T) = 0$（当 $n > 1$），$D(T) = \frac{n}{n-2}$（当 $n > 2$）。

---

##### ③ $F$ 分布

**定义**：设 $U \sim \chi^2(n_1)$，$V \sim \chi^2(n_2)$，且 $U$ 与 $V$ 相互独立，则随机变量
$$F = \frac{U/n_1}{V/n_2}$$
服从自由度为 $(n_1, n_2)$ 的 $F$ 分布，记为 $F \sim F(n_1, n_2)$。

**性质**：
- 若 $F \sim F(n_1, n_2)$，则 $\frac{1}{F} \sim F(n_2, n_1)$。
- 若 $T \sim t(n)$，则 $T^2 \sim F(1, n)$。

---

##### ④ 正态总体下的抽样分布定理（重点）

设 $X_1, X_2, \ldots, X_n$ 是来自正态总体 $N(\mu, \sigma^2)$ 的简单随机样本，$\bar{X}$ 和 $S^2$ 分别为样本均值和样本方差，则有：

**定理1**：样本均值服从正态分布
$$\bar{X} \sim N\!\left(\mu, \frac{\sigma^2}{n}\right)$$

**定理2**：
$$\frac{(n-1)S^2}{\sigma^2} = \frac{1}{\sigma^2}\sum_{i=1}^{n}(X_i - \bar{X})^2 \sim \chi^2(n-1)$$

**定理3**：$\bar{X}$ 与 $S^2$ 相互独立。

**定理4**：
$$\frac{\bar{X} - \mu}{S/\sqrt{n}} \sim t(n-1)$$

这四个定理是后续参数估计（置信区间）和假设检验的理论基础。

---

# 第7章 参数估计

参数估计是统计推断的核心内容之一。在已知总体分布类型（如正态分布）但含有未知参数（如 $\mu, \sigma^2$）的前提下，利用样本信息对这些未知参数进行估计。

参数估计分为两类：**点估计**（用一个数值估计参数）和**区间估计**（用一个区间范围估计参数）。

---

## 7.1 点估计

### 7.1.1 参数的点估计问题

**问题描述**：设总体 $X$ 的分布函数为 $F(x;\theta)$，其中 $\theta$ 是未知参数（可以是向量 $\theta = (\theta_1, \theta_2, \ldots, \theta_k)^T$）。$X_1, X_2, \ldots, X_n$ 是来自该总体的样本，$x_1, x_2, \ldots, x_n$ 是对应的样本观测值。

**点估计的任务**：构造一个统计量 $\hat{\theta} = \hat{\theta}(X_1, X_2, \ldots, X_n)$，用它作为未知参数 $\theta$ 的估计值。

- $\hat{\theta}$ 称为 $\theta$ 的**点估计量**（估计量是随机变量）。
- $\hat{\theta}(x_1, x_2, \ldots, x_n)$ 称为 $\theta$ 的**点估计值**（估计值是具体的数值）。

**常用的点估计方法**有两种：
1. **矩估计法**（Moment Method）
2. **最大似然估计法**（Maximum Likelihood Method）

---

### 7.1.2 矩估计

**基本思想**：用**样本矩**代替**总体矩**，建立方程求解未知参数。其依据是大数定律——当样本容量足够大时，样本矩依概率收敛于对应的总体矩。

**操作步骤**：

1. 设总体含有 $k$ 个未知参数 $\theta_1, \theta_2, \ldots, \theta_k$。
2. 计算总体的前 $k$ 阶原点矩：
   $$\mu_j = E(X^j), \quad j = 1, 2, \ldots, k$$
   这些总体矩是未知参数 $\theta_1, \ldots, \theta_k$ 的函数。
3. 计算样本的前 $k$ 阶原点矩：
   $$A_j = \frac{1}{n}\sum_{i=1}^{n}X_i^j, \quad j = 1, 2, \ldots, k$$
4. 令总体矩等于样本矩，建立方程组：
   $$\mu_j(\theta_1, \ldots, \theta_k) = A_j, \quad j = 1, 2, \ldots, k$$
5. 解此方程组，得到 $\hat{\theta}_1, \hat{\theta}_2, \ldots, \hat{\theta}_k$，即为矩估计量。

**典型示例——正态总体**：

设 $X \sim N(\mu, \sigma^2)$，有两个未知参数 $\mu$ 和 $\sigma^2$。

- 一阶总体矩：$\mu_1 = E(X) = \mu$
- 二阶总体矩：$\mu_2 = E(X^2) = D(X) + [E(X)]^2 = \sigma^2 + \mu^2$

令总体矩 = 样本矩：
$$\begin{cases} \mu = A_1 = \bar{X} \\ \sigma^2 + \mu^2 = A_2 = \frac{1}{n}\sum X_i^2 \end{cases}$$

解得矩估计量：
$$\hat{\mu} = \bar{X}, \quad \hat{\sigma}^2 = A_2 - A_1^2 = \frac{1}{n}\sum_{i=1}^{n}X_i^2 - \bar{X}^2 = \frac{1}{n}\sum_{i=1}^{n}(X_i - \bar{X})^2$$

> **注意**：矩估计中 $\sigma^2$ 的估计分母是 $n$，而样本方差 $S^2$ 的分母是 $n-1$。矩估计不一定具有无偏性。

**矩估计的优点**：简单直观，不需要知道总体的具体分布类型。
**矩估计的缺点**：没有充分利用总体分布的信息，精度通常不如最大似然估计。

---

### 7.1.3 最大似然估计

**基本思想**：在一次试验中，某个事件发生了，我们有理由认为这个事件发生的概率应该是最大的。反过来，既然样本观测值 $x_1, \ldots, x_n$ 已经出现了，就应该选择使这一组观测值出现概率最大的参数值作为估计。

**似然函数（Likelihood Function）**：

- **离散型总体**：$P(X = x) = p(x; \theta)$
  $$L(\theta) = \prod_{i=1}^{n} p(x_i; \theta)$$

- **连续型总体**：总体密度为 $f(x; \theta)$
  $$L(\theta) = \prod_{i=1}^{n} f(x_i; \theta)$$

$L(\theta)$ 表示在参数为 $\theta$ 时，样本 $(x_1, \ldots, x_n)$ 出现的"可能性"（概率或联合密度）。

**最大似然估计的步骤**：

1. 写出似然函数 $L(\theta)$。
2. 取对数（因为乘积求导不方便）：
   $$\ln L(\theta) = \sum_{i=1}^{n} \ln f(x_i; \theta)$$
3. 对 $\theta$ 求导，令导数为零（似然方程）：
   $$\frac{d\ln L(\theta)}{d\theta} = 0$$
4. 解方程得到 $\hat{\theta}$，即为最大似然估计量。

**典型示例——正态总体**：

设 $X \sim N(\mu, \sigma^2)$，$x_1, \ldots, x_n$ 为样本观测值。

似然函数：
$$L(\mu, \sigma^2) = \prod_{i=1}^{n} \frac{1}{\sqrt{2\pi\sigma^2}} \exp\!\left(-\frac{(x_i-\mu)^2}{2\sigma^2}\right) = (2\pi\sigma^2)^{-n/2} \exp\!\left(-\frac{1}{2\sigma^2}\sum_{i=1}^{n}(x_i-\mu)^2\right)$$

对数似然函数：
$$\ln L(\mu, \sigma^2) = -\frac{n}{2}\ln(2\pi) - \frac{n}{2}\ln\sigma^2 - \frac{1}{2\sigma^2}\sum_{i=1}^{n}(x_i-\mu)^2$$

分别对 $\mu$ 和 $\sigma^2$ 求偏导：
$$\frac{\partial \ln L}{\partial \mu} = \frac{1}{\sigma^2}\sum_{i=1}^{n}(x_i - \mu) = 0 \implies \hat{\mu} = \bar{x}$$

$$\frac{\partial \ln L}{\partial \sigma^2} = -\frac{n}{2\sigma^2} + \frac{1}{2(\sigma^2)^2}\sum_{i=1}^{n}(x_i-\mu)^2 = 0 \implies \hat{\sigma}^2 = \frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2$$

**最大似然估计的重要性质——不变性原理**：
若 $\hat{\theta}$ 是 $\theta$ 的最大似然估计，且 $g(\cdot)$ 是一个单值函数（一一映射），则 $g(\hat{\theta})$ 是 $g(\theta)$ 的最大似然估计。

例如：$\hat{\sigma}^2 = \frac{1}{n}\sum(X_i-\bar{X})^2$ 是 $\sigma^2$ 的最大似然估计，则 $\hat{\sigma} = \sqrt{\frac{1}{n}\sum(X_i-\bar{X})^2}$ 是 $\sigma$ 的最大似然估计。

---

## 7.2 估计量的评价标准

同一个参数可能有多种估计方法，需要有一套标准来评价估计量的优劣。

---

### 7.2.1 无偏性

**定义**：设 $\hat{\theta} = \hat{\theta}(X_1, \ldots, X_n)$ 是 $\theta$ 的估计量。若对一切 $\theta \in \Theta$，有
$$E(\hat{\theta}) = \theta$$
则称 $\hat{\theta}$ 是 $\theta$ 的**无偏估计量**。

**直观含义**：用 $\hat{\theta}$ 估计 $\theta$ 没有系统偏差（反复抽样时，估计量的平均值恰好等于真实参数值）。

**常见结论**：
- 样本均值 $\bar{X}$ 是总体均值 $\mu$ 的无偏估计：$E(\bar{X}) = \mu$ ✓
- 样本方差 $S^2 = \frac{1}{n-1}\sum(X_i-\bar{X})^2$ 是总体方差 $\sigma^2$ 的无偏估计：$E(S^2) = \sigma^2$ ✓
- 但 $\frac{1}{n}\sum(X_i-\bar{X})^2$（分母为 $n$）**不是**无偏估计

**渐近无偏**：若 $\lim_{n\to\infty} E(\hat{\theta}) = \theta$，则称 $\hat{\theta}$ 是 $\theta$ 的**渐近无偏估计**。

---

### 7.2.2 有效性

**背景**：在无偏估计量中，可能有多个候选者，我们希望选方差最小的那个——因为方差越小，估计值越集中在真实参数附近。

**定义**：设 $\hat{\theta}_1$ 和 $\hat{\theta}_2$ 都是 $\theta$ 的无偏估计量。若
$$D(\hat{\theta}_1) < D(\hat{\theta}_2)$$
则称 $\hat{\theta}_1$ 比 $\hat{\theta}_2$ **更有效**。

**有效估计量**：若 $\hat{\theta}^*$ 是 $\theta$ 的无偏估计量，且对 $\theta$ 的任意无偏估计量 $\hat{\theta}$ 都有
$$D(\hat{\theta}^*) \leq D(\hat{\theta})$$
则称 $\hat{\theta}^*$ 为 $\theta$ 的**最小方差无偏估计量**（最优无偏估计）。

**Cramér-Rao 不等式**（信息量下界）：
在正则条件下，任何无偏估计量 $\hat{\theta}$ 的方差满足：
$$D(\hat{\theta}) \geq \frac{1}{nI(\theta)}$$
其中 $I(\theta)$ 为**Fisher信息量**：
$$I(\theta) = E\!\left[\left(\frac{\partial \ln f(X;\theta)}{\partial \theta}\right)^2\right] = -E\!\left[\frac{\partial^2 \ln f(X;\theta)}{\partial \theta^2}\right]$$

若某无偏估计量的方差恰好达到这个下界，则称其为**有效估计量**。

---

### 7.2.3 相合性（一致性）

**定义**：设 $\hat{\theta}_n$ 是基于样本容量 $n$ 的估计量。若对任意 $\varepsilon > 0$，有
$$\lim_{n\to\infty} P\!\left(|\hat{\theta}_n - \theta| < \varepsilon\right) = 1$$
即 $\hat{\theta}_n \xrightarrow{P} \theta$（依概率收敛于 $\theta$），则称 $\hat{\theta}_n$ 是 $\theta$ 的**相合估计量**（一致估计量）。

**直观含义**：样本容量越大，估计值越接近真实参数值。这是对估计量的最基本要求。

**常用判别法**：
若 $\hat{\theta}_n$ 满足：
$$\lim_{n\to\infty} E(\hat{\theta}_n) = \theta \quad \text{且} \quad \lim_{n\to\infty} D(\hat{\theta}_n) = 0$$
则 $\hat{\theta}_n$ 是 $\theta$ 的相合估计。

**相合性结论**：
- 矩估计量一般都是相合估计。
- 在一定条件下，最大似然估计量也是相合估计。

---

## 7.3 区间估计

点估计只给出参数的一个数值，但无法反映估计的可靠程度。区间估计则给出一个区间，并给出该区间包含真实参数的概率（置信度）。

---

### 7.3.1 区间估计的基本概念和枢轴量法

**置信区间的定义**：
设 $\theta$ 为总体的未知参数，$X_1, \ldots, X_n$ 为样本。若存在两个统计量 $\underline{\theta}$ 和 $\overline{\theta}$，使得对给定的 $\alpha$（$0 < \alpha < 1$），有
$$P\!\left(\underline{\theta} \leq \theta \leq \overline{\theta}\right) \geq 1 - \alpha$$
则称随机区间 $[\underline{\theta}, \overline{\theta}]$ 为 $\theta$ 的**置信水平为 $1-\alpha$ 的置信区间**。

- $1-\alpha$ 称为**置信水平**（置信度），常用值：$0.95$（$\alpha=0.05$）、$0.99$（$\alpha=0.01$）、$0.90$（$\alpha=0.10$）。
- $\underline{\theta}$ 和 $\overline{\theta}$ 分别称为置信下限和置信上限。

**正确理解**：置信水平 $1-\alpha$ 表示——如果重复抽样很多次，每次构造一个置信区间，则这些区间中大约有 $(1-\alpha)\times 100\%$ 包含真实参数 $\theta$。

---

**枢轴量法（Pivotal Quantity Method）**：

构造置信区间的通用方法，步骤如下：

1. **构造枢轴量**：找到一个包含待估参数 $\theta$ 和样本的函数 $G(X_1, \ldots, X_n; \theta)$，满足：
   - $G$ 的分布**完全已知**，不依赖任何未知参数。
   - $G$ 中只含一个未知参数 $\theta$。

2. **确定分位点**：对给定的置信水平 $1-\alpha$，找到常数 $c_1, c_2$ 使得：
   $$P(c_1 \leq G \leq c_2) = 1 - \alpha$$

3. **等价变形**：从不等式 $c_1 \leq G(X_1, \ldots, X_n; \theta) \leq c_2$ 中解出 $\theta$，得到：
   $$P(\underline{\theta} \leq \theta \leq \overline{\theta}) = 1 - \alpha$$

---

### 7.3.2 单个正态总体均值与方差的区间估计

设 $X_1, \ldots, X_n$ 是来自正态总体 $N(\mu, \sigma^2)$ 的简单随机样本，置信水平为 $1-\alpha$。

#### 情形一：$\sigma^2$ 已知，求 $\mu$ 的置信区间

**枢轴量**：
$$\frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \sim N(0, 1)$$

由标准正态分布的分位数：
$$P\!\left(-z_{\alpha/2} \leq \frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \leq z_{\alpha/2}\right) = 1 - \alpha$$

解出 $\mu$：
$$\boxed{\mu \in \left[\bar{X} - z_{\alpha/2}\frac{\sigma}{\sqrt{n}},\ \bar{X} + z_{\alpha/2}\frac{\sigma}{\sqrt{n}}\right]}$$

#### 情形二：$\sigma^2$ 未知，求 $\mu$ 的置信区间

**枢轴量**：
$$\frac{\bar{X} - \mu}{S/\sqrt{n}} \sim t(n-1)$$

$$\boxed{\mu \in \left[\bar{X} - t_{\alpha/2}(n-1)\frac{S}{\sqrt{n}},\ \bar{X} + t_{\alpha/2}(n-1)\frac{S}{\sqrt{n}}\right]}$$

#### 情形三：$\mu$ 已知，求 $\sigma^2$ 的置信区间

**枢轴量**：
$$\frac{\sum_{i=1}^{n}(X_i-\mu)^2}{\sigma^2} \sim \chi^2(n)$$

$$\boxed{\sigma^2 \in \left[\frac{\sum(X_i-\mu)^2}{\chi^2_{\alpha/2}(n)},\ \frac{\sum(X_i-\mu)^2}{\chi^2_{1-\alpha/2}(n)}\right]}$$

#### 情形四：$\mu$ 未知，求 $\sigma^2$ 的置信区间（最常见）

**枢轴量**：
$$\frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$$

$$\boxed{\sigma^2 \in \left[\frac{(n-1)S^2}{\chi^2_{\alpha/2}(n-1)},\ \frac{(n-1)S^2}{\chi^2_{1-\alpha/2}(n-1)}\right]}$$

---

### 7.3.3 两个正态总体均值差和方差比的置信区间

设 $X_1, \ldots, X_{n_1}$ 来自 $N(\mu_1, \sigma_1^2)$，$Y_1, \ldots, Y_{n_2}$ 来自 $N(\mu_2, \sigma_2^2)$，两样本相互独立，置信水平为 $1-\alpha$。

#### 情形一：求 $\mu_1 - \mu_2$ 的置信区间

**（a）$\sigma_1^2$ 和 $\sigma_2^2$ 已知**：

枢轴量：
$$\frac{(\bar{X}-\bar{Y}) - (\mu_1-\mu_2)}{\sqrt{\sigma_1^2/n_1 + \sigma_2^2/n_2}} \sim N(0,1)$$

$$\mu_1 - \mu_2 \in \left[(\bar{X}-\bar{Y}) \pm z_{\alpha/2}\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}\right]$$

**（b）$\sigma_1^2 = \sigma_2^2 = \sigma^2$ 未知（但相等）**：

枢轴量：
$$\frac{(\bar{X}-\bar{Y}) - (\mu_1-\mu_2)}{S_w\sqrt{1/n_1 + 1/n_2}} \sim t(n_1+n_2-2)$$

其中 $S_w^2 = \frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1+n_2-2}$ 为**合并样本方差**。

$$\mu_1 - \mu_2 \in \left[(\bar{X}-\bar{Y}) \pm t_{\alpha/2}(n_1+n_2-2) \cdot S_w\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}\right]$$

#### 情形二：求方差比 $\sigma_1^2/\sigma_2^2$ 的置信区间

**枢轴量**：
$$\frac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2} = \frac{S_1^2}{S_2^2} \cdot \frac{\sigma_2^2}{\sigma_1^2} \sim F(n_1-1, n_2-1)$$

$$\boxed{\frac{\sigma_1^2}{\sigma_2^2} \in \left[\frac{S_1^2}{S_2^2}\cdot\frac{1}{F_{\alpha/2}(n_1-1, n_2-1)},\ \frac{S_1^2}{S_2^2}\cdot\frac{1}{F_{1-\alpha/2}(n_1-1, n_2-1)}\right]}$$

利用 $F_{1-\alpha/2}(n_1-1, n_2-1) = \frac{1}{F_{\alpha/2}(n_2-1, n_1-1)}$，上式可改写为：
$$\frac{\sigma_1^2}{\sigma_2^2} \in \left[\frac{S_1^2}{S_2^2}\cdot\frac{1}{F_{\alpha/2}(n_1-1, n_2-1)},\ \frac{S_1^2}{S_2^2}\cdot F_{\alpha/2}(n_2-1, n_1-1)\right]$$

---

### 7.3.4 非正态总体参数的区间估计（选学）

当总体不服从正态分布时，上述基于精确分布（$\chi^2, t, F$）的区间估计方法不再适用。主要有以下两种处理方法：

#### 方法一：大样本近似法（中心极限定理）

当样本容量 $n$ 较大（一般 $n \geq 30$）时，无论总体是什么分布，由中心极限定理：
$$\frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \xrightarrow{d} N(0, 1)$$

当 $\sigma^2$ 未知时，可用样本方差 $S^2$ 代替 $\sigma^2$：
$$\frac{\bar{X} - \mu}{S/\sqrt{n}} \approx N(0, 1)$$

因此 $\mu$ 的近似 $1-\alpha$ 置信区间为：
$$\mu \in \left[\bar{X} \pm z_{\alpha/2}\frac{S}{\sqrt{n}}\right]$$

#### 方法二：0-1 分布（比例）的区间估计

设总体服从 0-1 分布（伯努利分布），$P(X=1) = p$，$p$ 未知。样本容量 $n$ 较大时：
$$\hat{p} = \frac{1}{n}\sum X_i = \text{样本中"成功"的比例}$$

由中心极限定理：
$$\frac{\hat{p} - p}{\sqrt{p(1-p)/n}} \approx N(0,1)$$

用 $\hat{p}$ 替代分母中的 $p$，得 $p$ 的近似置信区间：
$$p \in \left[\hat{p} \pm z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}\right]$$

---

## 本章核心公式速览

| 参数 | 条件 | 枢轴量 | 分布 |
|------|------|--------|------|
| $\mu$ | $\sigma^2$ 已知 | $\dfrac{\bar{X}-\mu}{\sigma/\sqrt{n}}$ | $N(0,1)$ |
| $\mu$ | $\sigma^2$ 未知 | $\dfrac{\bar{X}-\mu}{S/\sqrt{n}}$ | $t(n-1)$ |
| $\sigma^2$ | $\mu$ 未知 | $\dfrac{(n-1)S^2}{\sigma^2}$ | $\chi^2(n-1)$ |
| $\mu_1-\mu_2$ | $\sigma_1^2=\sigma_2^2$ 未知 | $\dfrac{(\bar{X}-\bar{Y})-(\mu_1-\mu_2)}{S_w\sqrt{1/n_1+1/n_2}}$ | $t(n_1+n_2-2)$ |
| $\sigma_1^2/\sigma_2^2$ | $\mu_1,\mu_2$ 未知 | $\dfrac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2}$ | $F(n_1-1,n_2-1)$ |


---

# 第8章 假设检验

假设检验是统计推断的另一大核心。与参数估计不同，假设检验是先对总体参数提出一个假设，然后利用样本信息来判断这个假设是否合理。

---

## 8.1 假设检验

### 8.1.1 假设检验的基本概念

**两类假设**：
1. **原假设（零假设，记为 $H_0$）**：研究者想收集证据予以反对的假设（通常包含等号，如 $H_0: \mu = \mu_0$）。
2. **备择假设（记为 $H_1$ 或 $H_a$）**：与原假设对立的假设，是研究者想收集证据予以支持的假设（如 $H_1: \mu \neq \mu_0$）。

**两类错误**：
由于样本是随机的，根据样本做出的判断可能会犯错误：
- **第一类错误（拒真错误）**：当 $H_0$ 为真时，却拒绝了 $H_0$。犯第一类错误的概率记为 $\alpha$（称为**显著性水平**）。
- **第二类错误（取伪错误）**：当 $H_0$ 不真（$H_1$ 为真）时，却接受了 $H_0$。犯第二类错误的概率记为 $\beta$。

在样本容量 $n$ 固定时，$\alpha$ 和 $\beta$ 不能同时减小。统计学中通常采用**奈曼-皮尔逊（Neyman-Pearson）原则**：控制犯第一类错误的概率 $\alpha$ 不超过某个给定的值（如 $0.05$ 或 $0.01$），在此前提下尽量减小 $\beta$。

**显著性水平 $\alpha$**：即允许犯第一类错误的最大概率。

---

### 8.1.2 假设检验的基本步骤

假设检验的一般步骤如下：

1. **提出假设**：根据实际问题提出原假设 $H_0$ 和备择假设 $H_1$。
   - *双侧检验*：$H_0: \theta = \theta_0 \quad \text{vs} \quad H_1: \theta \neq \theta_0$
   - *右侧检验*：$H_0: \theta \le \theta_0 \quad \text{vs} \quad H_1: \theta > \theta_0$
   - *左侧检验*：$H_0: \theta \ge \theta_0 \quad \text{vs} \quad H_1: \theta < \theta_0$
2. **构造检验统计量**：在 $H_0$ 成立的条件下，构造一个只含样本和已知参数的统计量 $T$，并确定其分布。
3. **确定拒绝域**：对给定的显著性水平 $\alpha$，根据 $H_1$ 的形式，由统计量的分布确定临界值和拒绝域 $W$（满足 $P(T \in W \mid H_0) = \alpha$）。
4. **做出判断**：由样本观测值计算统计量 $T$ 的值。若 $T \in W$，则拒绝 $H_0$；否则接受（不拒绝）$H_0$。

---

## 8.2 单个正态总体均值与方差的假设检验

设 $X_1, \ldots, X_n$ 是来自正态总体 $N(\mu, \sigma^2)$ 的样本，显著性水平为 $\alpha$。

### 8.2.1 方差 $\sigma^2$ 已知，均值 $\mu$ 的假设检验（$Z$ 检验）

**检验统计量**：
$$Z = \frac{\bar{X} - \mu_0}{\sigma/\sqrt{n}} \sim N(0, 1) \quad (\text{当 } H_0 \text{ 成立时})$$

| 假设类型 | $H_0$ vs $H_1$ | 拒绝域 |
| :--- | :--- | :--- |
| 双侧 | $H_0: \mu = \mu_0 \quad H_1: \mu \neq \mu_0$ | $|Z| \ge z_{\alpha/2}$ |
| 右侧 | $H_0: \mu \le \mu_0 \quad H_1: \mu > \mu_0$ | $Z \ge z_{\alpha}$ |
| 左侧 | $H_0: \mu \ge \mu_0 \quad H_1: \mu < \mu_0$ | $Z \le -z_{\alpha}$ |

---

### 8.2.2 方差 $\sigma^2$ 未知，均值 $\mu$ 的假设检验（$t$ 检验）

用样本方差 $S^2$ 代替 $\sigma^2$。

**检验统计量**：
$$T = \frac{\bar{X} - \mu_0}{S/\sqrt{n}} \sim t(n-1) \quad (\text{当 } H_0 \text{ 成立时})$$

| 假设类型 | $H_0$ vs $H_1$ | 拒绝域 |
| :--- | :--- | :--- |
| 双侧 | $H_0: \mu = \mu_0 \quad H_1: \mu \neq \mu_0$ | $|T| \ge t_{\alpha/2}(n-1)$ |
| 右侧 | $H_0: \mu \le \mu_0 \quad H_1: \mu > \mu_0$ | $T \ge t_{\alpha}(n-1)$ |
| 左侧 | $H_0: \mu \ge \mu_0 \quad H_1: \mu < \mu_0$ | $T \le -t_{\alpha}(n-1)$ |

---

### 8.2.3 均值 $\mu$ 未知，方差 $\sigma^2$ 的假设检验（$\chi^2$ 检验）

**检验统计量**：
$$\chi^2 = \frac{(n-1)S^2}{\sigma_0^2} \sim \chi^2(n-1) \quad (\text{当 } H_0 \text{ 成立时})$$

| 假设类型 | $H_0$ vs $H_1$ | 拒绝域 |
| :--- | :--- | :--- |
| 双侧 | $H_0: \sigma^2 = \sigma_0^2 \quad H_1: \sigma^2 \neq \sigma_0^2$ | $\chi^2 \le \chi^2_{1-\alpha/2}(n-1)$ 或 $\chi^2 \ge \chi^2_{\alpha/2}(n-1)$ |
| 右侧 | $H_0: \sigma^2 \le \sigma_0^2 \quad H_1: \sigma^2 > \sigma_0^2$ | $\chi^2 \ge \chi^2_{\alpha}(n-1)$ |
| 左侧 | $H_0: \sigma^2 \ge \sigma_0^2 \quad H_1: \sigma^2 < \sigma_0^2$ | $\chi^2 \le \chi^2_{1-\alpha}(n-1)$ |

---

### 8.2.4 均值 $\mu$ 已知，方差 $\sigma^2$ 的假设检验

当 $\mu$ 已知时，应使用总体真实均值 $\mu$ 构造统计量，以获得更高的检验功效。

**检验统计量**：
$$\chi^2 = \frac{\sum_{i=1}^{n}(X_i - \mu)^2}{\sigma_0^2} \sim \chi^2(n)$$

对应的双侧拒绝域为：$\chi^2 \le \chi^2_{1-\alpha/2}(n)$ 或 $\chi^2 \ge \chi^2_{\alpha/2}(n)$。

---

## 8.3 两个正态总体均值差与方差比的假设检验

设两独立样本分别来自 $N(\mu_1, \sigma_1^2)$（容量 $n_1$）和 $N(\mu_2, \sigma_2^2)$（容量 $n_2$）。

### 8.3.1 两个正态总体均值差 $\mu_1 - \mu_2$ 的假设检验

#### 情形一：$\sigma_1^2, \sigma_2^2$ 已知
- **检验统计量**：
  $$Z = \frac{(\bar{X} - \bar{Y}) - (\mu_1 - \mu_2)_0}{\sqrt{\sigma_1^2/n_1 + \sigma_2^2/n_2}} \sim N(0,1)$$

#### 情形二：$\sigma_1^2 = \sigma_2^2 = \sigma^2$ 未知（双样本 $t$ 检验）
- **检验统计量**：
  $$T = \frac{(\bar{X} - \bar{Y}) - (\mu_1 - \mu_2)_0}{S_w\sqrt{1/n_1 + 1/n_2}} \sim t(n_1+n_2-2)$$
  其中合并方差 $S_w^2 = \frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1+n_2-2}$。

- **双侧检验拒绝域**：$|T| \ge t_{\alpha/2}(n_1+n_2-2)$。

---

### 8.3.2 两个正态总体方差比 $\sigma_1^2 / \sigma_2^2$ 的假设检验（$F$ 检验）

设两总体均值 $\mu_1, \mu_2$ 均未知。

- **检验统计量**：
  $$F = \frac{S_1^2 / \sigma_1^2}{S_2^2 / \sigma_2^2} = \frac{S_1^2}{S_2^2} \cdot \frac{\sigma_2^2}{\sigma_1^2} \sim F(n_1-1, n_2-1)$$

**双侧检验**：$H_0: \sigma_1^2 = \sigma_2^2 \quad \text{vs} \quad H_1: \sigma_1^2 \neq \sigma_2^2$

- **拒绝域**：
  $$F \le F_{1-\alpha/2}(n_1-1, n_2-1) \quad \text{或} \quad F \ge F_{\alpha/2}(n_1-1, n_2-1)$$

---

## 8.4 非正态总体参数的假设检验

当总体不服从正态分布时，若样本容量 $n$ 足够大（通常 $n \ge 30$），可利用**中心极限定理**进行大样本近似检验。

### 8.4.1 指数分布参数的假设检验
若总体服从指数分布 $E(\lambda)$，其均值为 $1/\lambda$。
- 在大样本下，样本均值 $\bar{X}$ 近似服从正态分布。利用指数分布的均值和方差关系，通过构造标准化变量进行近似 $Z$ 检验。

### 8.4.2 两点分布（0-1分布）参数的假设检验
设总体服从 $B(1, p)$，即成功概率为 $p$。样本成功率为 $\hat{p} = \frac{1}{n}\sum X_i$。
在大样本下（$np \ge 5$ 且 $n(1-p) \ge 5$）：
- **检验统计量**：
  $$Z = \frac{\hat{p} - p_0}{\sqrt{p_0(1-p_0)/n}} \approx N(0,1)$$
- 双侧拒绝域：$|Z| \ge z_{\alpha/2}$。

---

## 8.5 假设检验与置信区间的关系

**双侧检验与置信区间存在一一对应的对偶关系**：

对于显著性水平为 $\alpha$ 的双侧假设检验：
$$H_0: \theta = \theta_0 \quad \text{vs} \quad H_1: \theta \neq \theta_0$$

- 若参数 $\theta$ 的置信水平为 $1-\alpha$ 的**置信区间包含 $\theta_0$**，则在显著性水平 $\alpha$ 下**接受 $H_0$**；
- 若置信区间**不包含 $\theta_0$**，则**拒绝 $H_0$**。

*例如*：$\mu$ 的 $95\%$ 置信区间为 $[2.5, 3.8]$。若检验 $H_0: \mu = 3.0$（$\alpha=0.05$），由于 $3.0 \in [2.5, 3.8]$，故接受 $H_0$。

---

## 8.6 非参数假设检验

非参数检验不对总体分布的具体形式做严格假定（如不要求正态分布）。

### 8.6.1 拟合优度检验（$\chi^2$ 拟合优度检验）
**目的**：检验总体分布是否服从某种已知的理论分布 $F_0(x)$。
- **步骤**：
  1. 将样本空间分成 $k$ 个互不相交的区间（或类别）。
  2. 统计各组的实际频数 $O_i$（观察频数）。
  3. 根据理论分布计算各组的理论频数 $E_i = n \cdot p_i$。
  4. 构造统计量：
     $$\chi^2 = \sum_{i=1}^{k} \frac{(O_i - E_i)^2}{E_i}$$
  5. 在 $H_0$ 成立且 $n$ 很大时，$\chi^2 \sim \chi^2(k - 1 - r)$，其中 $r$ 为估计的参数个数。若统计量过大则拒绝 $H_0$。

---

### 8.6.2 独立性检验（列联表分析）
**目的**：检验两个分类变量是否相互独立。
- 构造 $r \times c$ 列联表，统计量形式与拟合优度检验相同：
  $$\chi^2 = \sum_{i=1}^{r}\sum_{j=1}^{c} \frac{(O_{ij} - E_{ij})^2}{E_{ij}} \sim \chi^2((r-1)(c-1))$$
- 拒绝域：$\chi^2 \ge \chi^2_{\alpha}((r-1)(c-1))$。

---

### 8.6.3 符号检验（Sign Test）
**目的**：用于单样本或配对样本，检验总体的中位数是否等于某个特定值。
- 不依赖总体分布，只利用观测值与中位数假设值之差的正负符号。
- 在 $H_0$ 成立时，正号和负号出现的概率均为 $0.5$，服从二项分布 $B(n, 0.5)$。

---

### 8.6.4 秩和检验（Wilcoxon秩和检验 / Mann-Whitney U检验）
**目的**：两独立样本的位置参数检验，用于替代两样本 $t$ 检验（当总体不满足正态性时）。
- 将两组样本混合并按大小排序（赋予秩次）。
- 比较两组样本的秩和。若两总体分布相同，则两组的秩和应相近；若秩和差异过大，则拒绝 $H_0$。

---



# 第9章 回归分析

回归分析是研究变量之间**相关关系**的统计方法。与前面几章研究"一个变量的分布"不同，回归分析研究的是**多个变量之间的关系**。

---

## 9.1 回归分析概述

### 9.1.1 回归名称的由来

"回归（Regression）"一词最早由英国生物学家兼统计学家**弗朗西斯·高尔顿（Francis Galton）**于1886年提出。他在研究父代与子代身高关系时发现：

- 高个子父亲的儿子平均来说比父亲矮一些；
- 矮个子父亲的儿子平均来说比父亲高一些。

即后代的身高有向总体平均身高**"回归（退回）"**的趋势，高尔顿称之为"向均数回归（Regression to the Mean）"。

后来，"回归"一词被推广为描述变量之间依赖关系的统计方法的总称。

---

### 9.1.2 回归分析研究的内容

#### 变量关系的两种类型

1. **确定性关系（函数关系）**：变量之间有精确的数学表达式，如 $y = \pi r^2$（圆面积与半径的关系）。
2. **非确定性关系（相关关系）**：变量之间存在某种趋势性联系，但不是精确的函数关系。例如身高与体重、广告投入与销售额等。

#### 回归分析的核心任务

回归分析是研究**相关关系**的数学工具，主要解决以下问题：

1. **建立回归方程**：从样本数据出发，确定变量之间经验公式（回归方程）的形式和参数。
2. **显著性检验**：检验回归方程是否显著（即变量之间的关系是否真实存在，而非随机波动）。
3. **预测和控制**：利用回归方程，由自变量的取值预测因变量的值，或反过来确定自变量的取值范围。

#### 回归分析的分类

| 分类维度 | 类型 |
|:---|:---|
| 按自变量个数 | 一元回归、多元回归 |
| 按回归函数形式 | 线性回归、非线性回归 |
| 按因变量类型 | 普通回归（因变量为连续型）、Logistic回归（因变量为分类型） |

---

## 9.2 一元线性回归

一元线性回归是最简单的回归模型，只包含**一个自变量 $x$** 和**一个因变量 $y$**，且两者之间假设为**线性关系**。

---

### 9.2.1 一元线性回归模型

#### 模型设定

设因变量 $y$ 与自变量 $x$ 之间存在如下关系：

$$y = \beta_0 + \beta_1 x + \varepsilon$$

其中：
- $\beta_0$：**截距项**（回归常数），表示当 $x=0$ 时 $y$ 的期望值。
- $\beta_1$：**回归系数**（斜率），表示 $x$ 每变动一个单位时，$y$ 的平均变动量。
- $\varepsilon$：**随机误差项**，包含了除 $x$ 以外所有对 $y$ 有影响的因素。

#### 基本假设

对随机误差项 $\varepsilon$ 作如下假设：

$$\varepsilon \sim N(0, \sigma^2)$$

即 $\varepsilon$ 服从均值为零、方差为 $\sigma^2$ 的正态分布，且各次观测的误差相互独立。

等价地，因变量 $y$ 满足：
$$y \sim N(\beta_0 + \beta_1 x, \sigma^2)$$

#### 回归函数

因变量 $y$ 的**条件期望**（即在给定 $x$ 的条件下 $y$ 的期望值）为：

$$E(y|x) = \beta_0 + \beta_1 x$$

这条直线称为**总体回归线**（或理论回归线），它是未知的，需要通过样本数据来估计。

#### 样本数据

设有 $n$ 组观测数据：
$$(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)$$

对应的模型为：
$$y_i = \beta_0 + \beta_1 x_i + \varepsilon_i, \quad i = 1, 2, \ldots, n$$

其中 $\varepsilon_i \sim N(0, \sigma^2)$，且 $\varepsilon_1, \ldots, \varepsilon_n$ 相互独立。

---

### 9.2.2 未知参数的估计

模型中有三个未知参数：$\beta_0$、$\beta_1$ 和 $\sigma^2$。

#### 最小二乘法（Ordinary Least Squares, OLS）

**基本思想**：寻找 $\beta_0$ 和 $\beta_1$ 的估计值 $\hat{\beta}_0$ 和 $\hat{\hat{\beta}}_1$，使得**残差平方和**达到最小。

**残差**：第 $i$ 个观测值的实际值 $y_i$ 与其拟合值 $\hat{y}_i$ 之差：
$$e_i = y_i - \hat{y}_i = y_i - (\hat{\beta}_0 + \hat{\beta}_1 x_i)$$

**残差平方和**：
$$Q(\beta_0, \beta_1) = \sum_{i=1}^{n} (y_i - \beta_0 - \beta_1 x_i)^2$$

对 $\beta_0$ 和 $\beta_1$ 分别求偏导并令其为零（正规方程组）：
$$\begin{cases} \dfrac{\partial Q}{\partial \beta_0} = -2\sum(y_i - \beta_0 - \beta_1 x_i) = 0 \$$1em] \dfrac{\partial Q}{\partial \beta_1} = -2\sum x_i(y_i - \beta_0 - \beta_1 x_i) = 0 \end{cases}$$

**解得**：

$$\boxed{\hat{\beta}_1 = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{n}(x_i - \bar{x})^2} = \frac{S_{xy}}{S_{xx}}}$$

$$\boxed{\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}}$$

其中：
- $\bar{x} = \frac{1}{n}\sum x_i$，$\bar{y} = \frac{1}{n}\sum y_i$
- $S_{xx} = \sum(x_i - \bar{x})^2 = \sum x_i^2 - n\bar{x}^2$
- $S_{xy} = \sum(x_i - \bar{x})(y_i - \bar{y}) = \sum x_i y_i - n\bar{x}\bar{y}$
- $S_{yy} = \sum(y_i - \bar{y})^2 = \sum y_i^2 - n\bar{y}^2$

#### 经验回归方程

将估计值代入，得到**样本回归方程**（经验回归方程）：

$$\hat{y} = \hat{\beta}_0 + \hat{\beta}_1 x$$

这条直线称为**经验回归线**，它一定经过点 $(\bar{x}, \bar{y})$。

#### 随机误差方差 $\sigma^2$ 的估计

$$\boxed{\hat{\sigma}^2 = \frac{SSE}{n-2} = \frac{\sum_{i=1}^{n}(y_i - \hat{y}_i)^2}{n-2}}$$

其中 $SSE = \sum e_i^2$ 为残差平方和。分母为 $n-2$ 是因为估计了两个参数 $\beta_0$ 和 $\beta_1$，损失了2个自由度。

可以证明 $\hat{\sigma}^2$ 是 $\sigma^2$ 的**无偏估计**。

#### 最小二乘估计的性质（高斯-马尔可夫定理）

在模型的基本假设下，最小二乘估计 $\hat{\beta}_0$ 和 $\hat{\beta}_1$ 是所有**线性无偏估计**中方差最小的（即**最佳线性无偏估计，BLUE**）。

此外，由于 $\varepsilon_i \sim N(0, \sigma^2)$：
$$\hat{\beta}_1 \sim N\!\left(\beta_1, \frac{\sigma^2}{S_{xx}}\right)$$

$$\hat{\beta}_0 \sim N\!\left(\beta_0, \sigma^2\left(\frac{1}{n} + \frac{\bar{x}^2}{S_{xx}}\right)\right)$$

---

### 9.2.3 显著性检验

建立了经验回归方程后，需要检验 $y$ 与 $x$ 之间是否真的存在显著的线性关系，即检验：

$$H_0: \beta_1 = 0 \quad \text{vs} \quad H_1: \beta_1 \neq 0$$

若 $H_0$ 成立，说明 $x$ 对 $y$ 没有线性影响。

#### 方差分析（ANOVA）方法——$F$ 检验

**平方和分解**：

总离差平方和可以分解为回归平方和与残差平方和：

$$SST = SSR + SSE$$

$$\sum_{i=1}^{n}(y_i - \bar{y})^2 = \sum_{i=1}^{n}(\hat{y}_i - \bar{y})^2 + \sum_{i=1}^{n}(y_i - \hat{y}_i)^2$$

| 方差来源 | 平方和 | 自由度 | 均方 |
|:---|:---|:---|:---|
| 回归（解释部分） | $SSR = \hat{\beta}_1^2 S_{xx}$ | 1 | $MSR = SSR/1$ |
| 残差（未解释部分） | $SSE = S_{yy} - \hat{\beta}_1 S_{xy}$ | $n-2$ | $MSE = SSE/(n-2)$ |
| 总计 | $SST = S_{yy}$ | $n-1$ | — |

**检验统计量**：
$$F = \frac{MSR}{MSE} = \frac{SSR/1}{SSE/(n-2)} \sim F(1, n-2)$$

**拒绝域**：$F \geq F_{\alpha}(1, n-2)$，则拒绝 $H_0$，认为线性关系显著。

#### $t$ 检验法

由于 $\hat{\beta}_1 \sim N(\beta_1, \sigma^2/S_{xx})$，用 $\hat{\sigma}^2$ 代替 $\sigma^2$ 后：

$$T = \frac{\hat{\beta}_1 - \beta_1}{\hat{\sigma}/\sqrt{S_{xx}}} \sim t(n-2)$$

在 $H_0: \beta_1 = 0$ 下：
$$T = \frac{\hat{\beta}_1}{\hat{\sigma}/\sqrt{S_{xx}}} \sim t(n-2)$$

**拒绝域**：$|T| \geq t_{\alpha/2}(n-2)$。

> **注**：在一元线性回归中，$F$ 检验与 $t$ 检验等价，$F = T^2$。

#### 相关系数检验（$r$ 检验）

**样本相关系数**：
$$r = \frac{S_{xy}}{\sqrt{S_{xx} S_{yy}}}$$

$r$ 的取值范围为 $[-1, 1]$：
- $|r|$ 越接近 1，线性关系越强；
- $r > 0$ 为正相关，$r < 0$ 为负相关。

可以证明：
$$r^2 = \frac{SSR}{SST}$$

$r^2$ 称为**判定系数**（可决系数），表示 $y$ 的总变异中能被回归方程解释的比例。

---

### 9.2.4 预测和控制

#### 预测（Prediction）

**问题**：当 $x = x_0$ 时，预测对应的 $y_0$ 的值。

**点预测**：
$$\hat{y}_0 = \hat{\beta}_0 + \hat{\beta}_1 x_0$$

**区间预测**（置信水平 $1-\alpha$）：

$$y_0 \in \left[\hat{y}_0 \pm t_{\alpha/2}(n-2) \cdot \hat{\sigma} \sqrt{1 + \frac{1}{n} + \frac{(x_0 - \bar{x})^2}{S_{xx}}}\right]$$

> 注意：预测区间比均值的置信区间宽（多了一个"1"），因为还要考虑单个观测值的随机误差。

**$y_0$ 的均值 $E(y_0)$ 的置信区间**：
$$E(y_0) \in \left[\hat{y}_0 \pm t_{\alpha/2}(n-2) \cdot \hat{\sigma} \sqrt{\frac{1}{n} + \frac{(x_0 - \bar{x})^2}{S_{xx}}}\right]$$

#### 控制（Control）

**问题**：要使 $y$ 落在指定区间 $[y_L, y_U]$ 内，自变量 $x$ 应控制在什么范围？

控制是预测的**逆问题**。近似地，由：
$$y_L \approx \hat{\beta}_0 + \hat{\beta}_1 x_L, \quad y_U \approx \hat{\beta}_0 + \hat{\beta}_1 x_U$$

反解出 $x$ 的控制范围（假设 $\hat{\beta}_1 > 0$）：
$$x_L \approx \frac{y_L - \hat{\beta}_0}{\hat{\beta}_1}, \quad x_U \approx \frac{y_U - \hat{\beta}_0}{\hat{\beta}_1}$$

---

## 9.3 多元线性回归

当因变量 $y$ 受**多个自变量** $x_1, x_2, \ldots, x_p$ 的影响时，需要建立多元线性回归模型。

---

### 9.3.1 多元线性回归模型

#### 模型设定

$$y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \cdots + \beta_p x_p + \varepsilon$$

其中：
- $\beta_0$：截距项；
- $\beta_j$（$j=1,2,\ldots,p$）：偏回归系数，表示在**其他自变量保持不变**的条件下，$x_j$ 每变动一个单位时 $y$ 的平均变动量；
- $\varepsilon \sim N(0, \sigma^2)$，且各次观测独立。

#### 矩阵表示

令：
$$\boldsymbol{y} = \begin{pmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{pmatrix}, \quad \boldsymbol{X} = \begin{pmatrix} 1 & x_{11} & x_{12} & \cdots & x_{1p} \\ 1 & x_{21} & x_{22} & \cdots & x_{2p} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & x_{n1} & x_{n2} & \cdots & x_{np} \end{pmatrix}, \quad \boldsymbol{\beta} = \begin{pmatrix} \beta_0 \\ \beta_1 \\ \vdots \\ \beta_p \end{pmatrix}, \quad \boldsymbol{\varepsilon} = \begin{pmatrix} \varepsilon_1 \\ \varepsilon_2 \\ \vdots \\ \varepsilon_n \end{pmatrix}$$

则模型可简洁地写为：
$$\boldsymbol{y} = \boldsymbol{X}\boldsymbol{\beta} + \boldsymbol{\varepsilon}$$

其中 $\boldsymbol{X}$ 称为**设计矩阵**（design matrix），大小为 $n \times (p+1)$。假设 $\boldsymbol{X}$ 列满秩（即 $\text{rank}(\boldsymbol{X}) = p+1$，要求 $n > p$）。

---

### 9.3.2 未知参数的估计

#### 最小二乘估计

残差平方和（矩阵形式）：
$$Q(\boldsymbol{\beta}) = (\boldsymbol{y} - \boldsymbol{X}\boldsymbol{\beta})^T(\boldsymbol{y} - \boldsymbol{X}\boldsymbol{\beta})$$

对 $\boldsymbol{\beta}$ 求导并令其为零，得到**正规方程**：
$$\boldsymbol{X}^T\boldsymbol{X}\boldsymbol{\beta} = \boldsymbol{X}^T\boldsymbol{y}$$

**解得**：
$$\boxed{\hat{\boldsymbol{\beta}} = (\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}}$$

#### 估计量的性质

- **无偏性**：$E(\hat{\boldsymbol{\beta}}) = \boldsymbol{\beta}$
- **协方差矩阵**：$\text{Cov}(\hat{\boldsymbol{\beta}}) = \sigma^2(\boldsymbol{X}^T\boldsymbol{X})^{-1}$
- **分布**：$\hat{\boldsymbol{\beta}} \sim N_{p+1}\!\left(\boldsymbol{\beta}, \sigma^2(\boldsymbol{X}^T\boldsymbol{X})^{-1}\right)$

#### $\sigma^2$ 的估计

$$\hat{\sigma}^2 = \frac{SSE}{n - p - 1} = \frac{(\boldsymbol{y} - \boldsymbol{X}\hat{\boldsymbol{\beta}})^T(\boldsymbol{y} - \boldsymbol{X}\hat{\boldsymbol{\beta}})}{n - p - 1}$$

其中分母 $n - p - 1$ 为残差自由度（总共 $n$ 个观测，估计了 $p+1$ 个参数）。

---

### 9.3.3 回归方程的显著性检验（$F$ 检验）

**检验目的**：检验所有自变量作为一个整体是否对 $y$ 有显著的线性影响。

**假设**：
$$H_0: \beta_1 = \beta_2 = \cdots = \beta_p = 0 \quad \text{vs} \quad H_1: \text{至少有一个 } \beta_j \neq 0$$

#### 方差分析表

| 方差来源 | 平方和 | 自由度 | 均方 |
|:---|:---|:---|:---|
| 回归 | $SSR = \hat{\boldsymbol{\beta}}^T\boldsymbol{X}^T\boldsymbol{y} - n\bar{y}^2$ | $p$ | $MSR = SSR/p$ |
| 残差 | $SSE = \boldsymbol{y}^T\boldsymbol{y} - \hat{\boldsymbol{\beta}}^T\boldsymbol{X}^T\boldsymbol{y}$ | $n-p-1$ | $MSE = SSE/(n-p-1)$ |
| 总计 | $SST = \boldsymbol{y}^T\boldsymbol{y} - n\bar{y}^2$ | $n-1$ | — |

**检验统计量**：
$$F = \frac{MSR}{MSE} \sim F(p, n-p-1)$$

**拒绝域**：$F \geq F_{\alpha}(p, n-p-1)$，则拒绝 $H_0$，认为回归方程整体显著。

**判定系数**：
$$R^2 = \frac{SSR}{SST}$$

$R^2$ 越接近1，说明回归方程对数据的拟合程度越好。

**调整判定系数**（考虑自变量个数的惩罚）：
$$\bar{R}^2 = 1 - \frac{SSE/(n-p-1)}{SST/(n-1)} = 1 - (1-R^2)\frac{n-1}{n-p-1}$$

---

### 9.3.4 回归系数的显著性检验（$t$ 检验）

**检验目的**：在回归方程整体显著的基础上，进一步检验**每个自变量**对 $y$ 的影响是否显著。

对第 $j$ 个回归系数 $\beta_j$（$j = 1, 2, \ldots, p$）：

**假设**：
$$H_0: \beta_j = 0 \quad \text{vs} \quad H_1: \beta_j \neq 0$$

**检验统计量**：
$$T_j = \frac{\hat{\beta}_j}{\hat{\sigma}\sqrt{c_{jj}}} \sim t(n-p-1)$$

其中 $c_{jj}$ 是矩阵 $(\boldsymbol{X}^T\boldsymbol{X})^{-1}$ 的第 $j$ 个对角元（即 $\hat{\beta}_j$ 的方差中除去 $\sigma^2$ 后的部分）。

**拒绝域**：$|T_j| \geq t_{\alpha/2}(n-p-1)$。

> **注意**：方程整体显著（$F$ 检验通过）并不意味着每个自变量都显著。如果某个 $\beta_j$ 不显著，说明该自变量对 $y$ 的线性贡献不大，可以考虑从模型中剔除。

---

## 本章核心公式速览

| 内容 | 公式 |
|:---|:---|
| 一元回归斜率 | $\hat{\beta}_1 = \dfrac{S_{xy}}{S_{xx}}$ |
| 一元回归截距 | $\hat{\beta}_0 = \bar{y} - \hat{\beta}_1\bar{x}$ |
| 残差方差估计 | $\hat{\sigma}^2 = \dfrac{SSE}{n-2}$ |
| $F$ 检验统计量 | $F = \dfrac{SSR/1}{SSE/(n-2)}$ |
| $t$ 检验统计量 | $T = \dfrac{\hat{\beta}_1}{\hat{\sigma}/\sqrt{S_{xx}}}$ |
| 多元回归系数估计 | $\hat{\boldsymbol{\beta}} = (\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}$ |
| 判定系数 | $R^2 = \dfrac{SSR}{SST}$ |


---

# 第10章 方差分析

方差分析（Analysis of Variance, ANOVA）是一种用于检验**多个总体均值是否相等**的统计方法。它由英国统计学家**费希尔（R.A. Fisher）**创立，核心思想是通过比较不同来源的**变异（方差）**，判断某个（或某些）因素对试验结果是否有显著影响。

> **关键认识**：方差分析虽然名为"方差"分析，但其目的是**比较均值**。"方差"是手段，"均值"是目的。

---

## 10.1 单因素方差分析

单因素方差分析研究的是**一个因素**（自变量）对试验指标（因变量）的影响是否显著。

---

### 10.1.1 因素与水平

- **因素（Factor）**：在试验中可能影响试验结果的**自变量**（条件）。例如：温度、施肥量、教学方法等。
- **水平（Level）**：因素在试验中所取的**具体状态或数值**。例如"施肥量"这一因素，取了3个水平：低、中、高。

**示例**：研究三种不同肥料（A、B、C）对作物产量的影响。
- 因素：肥料类型（共1个因素）
- 水平：A、B、C（共3个水平，记为 $r = 3$）

**基本假设**：在每个水平下，总体服从**正态分布**，且各总体的**方差相等**（方差齐性）。

---

### 10.1.2 数学模型

#### 数据结构

设因素有 $r$ 个水平（记为 $A_1, A_2, \ldots, A_r$），在第 $i$ 个水平下做 $n_i$ 次独立重复试验，得到数据：

$$x_{ij}: \text{第 } i \text{ 个水平下的第 } j \text{ 个观测值}, \quad j = 1, 2, \ldots, n_i, \quad i = 1, 2, \ldots, r$$

总试验次数：$n = \sum_{i=1}^{r} n_i$（称为**总样本容量**）。

#### 模型表达式

$$x_{ij} = \mu_i + \varepsilon_{ij}$$

其中：
- $\mu_i$：第 $i$ 个水平下总体的**均值**。
- $\varepsilon_{ij}$：随机误差项，满足 $\varepsilon_{ij} \stackrel{\text{i.i.d.}}{\sim} N(0, \sigma^2)$。

即每个水平下的数据服从正态分布：
$$x_{ij} \sim N(\mu_i, \sigma^2)$$

#### 效应模型（参数化表示）

引入**总平均** $\mu$ 和**效应** $\alpha_i$：

$$\mu = \frac{1}{n}\sum_{i=1}^{r} n_i \mu_i$$

$$\alpha_i = \mu_i - \mu \quad (\text{第 } i \text{ 个水平的效应})$$

则模型可重写为：
$$x_{ij} = \mu + \alpha_i + \varepsilon_{ij}$$

满足约束条件：$\sum_{i=1}^{r} n_i \alpha_i = 0$（若各水平重复次数相同 $n_1 = n_2 = \cdots = n_r$，则简化为 $\sum_{i=1}^{r}\alpha_i = 0$）。

#### 方差分析的假设检验

**原假设**：各水平下总体均值相等（即因素无显著影响）
$$H_0: \mu_1 = \mu_2 = \cdots = \mu_r \quad \text{等价于} \quad \alpha_1 = \alpha_2 = \cdots = \alpha_r = 0$$

**备择假设**：至少有两个均值不相等
$$H_1: \mu_1, \mu_2, \ldots, \mu_r \text{ 不全相等}$$

---

### 10.1.3 统计分析

#### 平方和分解

**总平方和（SST, Total Sum of Squares）**：反映全部观测值的总变异。

$$SST = \sum_{i=1}^{r}\sum_{j=1}^{n_i}(x_{ij} - \bar{x})^2$$

其中 $\bar{x} = \frac{1}{n}\sum_{i=1}^{r}\sum_{j=1}^{n_i} x_{ij}$ 为**总平均值**。

**组间平方和（SSA, Sum of Squares Between Groups / 因素平方和）**：反映不同水平之间的差异（由因素引起的变异）。

$$SSA = \sum_{i=1}^{r} n_i(\bar{x}_{i\cdot} - \bar{x})^2$$

其中 $\bar{x}_{i\cdot} = \frac{1}{n_i}\sum_{j=1}^{n_i} x_{ij}$ 为第 $i$ 个水平的**样本均值**。

**组内平方和（SSE, Sum of Squares Within Groups / 误差平方和）**：反映同一水平内部的随机波动（由误差引起的变异）。

$$SSE = \sum_{i=1}^{r}\sum_{j=1}^{n_i}(x_{ij} - \bar{x}_{i\cdot})^2$$

**平方和分解公式**：
$$\boxed{SST = SSA + SSE}$$

#### 自由度分解

| 方差来源 | 平方和 | 自由度 |
|:---|:---|:---|
| 组间（因素） | $SSA$ | $r - 1$ |
| 组内（误差） | $SSE$ | $n - r$ |
| 总计 | $SST$ | $n - 1$ |

#### 均方（Mean Square）

均方 = 平方和 ÷ 自由度：
- **组间均方**：$MSA = \dfrac{SSA}{r-1}$
- **组内均方**：$MSE = \dfrac{SSE}{n-r}$

#### 检验统计量（F 统计量）

在 $H_0$ 成立时：
$$F = \frac{MSA}{MSE} = \frac{SSA/(r-1)}{SSE/(n-r)} \sim F(r-1, n-r)$$

**直观解释**：
- 若 $H_0$ 成立（各水平无差异），则 $MSA$ 和 $MSE$ 都是 $\sigma^2$ 的无偏估计，$F \approx 1$。
- 若 $H_0$ 不成立（各水平有差异），则 $MSA$ 会显著大于 $MSE$，$F$ 值偏大。

**拒绝域**：$F \geq F_{\alpha}(r-1, n-r)$，则拒绝 $H_0$，认为因素有显著影响。

#### 方差分析表（ANOVA Table）

| 方差来源 | 平方和 | 自由度 | 均方 | F值 |
|:---|:---|:---|:---|:---|
| 组间（因素A） | $SSA$ | $r-1$ | $MSA$ | $\dfrac{MSA}{MSE}$ |
| 组内（误差） | $SSE$ | $n-r$ | $MSE$ | |
| 总计 | $SST$ | $n-1$ | | |

#### 多重比较（事后检验）

当 $F$ 检验拒绝 $H_0$ 时，只能说明"各水平均值不全相等"，但不知道具体哪些水平之间有差异。**多重比较**就是逐对比较各水平均值，找出差异来源。

常用的方法是 **Tukey（HSD）法** 和 **LSD（最小显著差异）法**。

---

## 10.2 双因素方差分析

双因素方差分析研究的是**两个因素**对试验指标的**联合影响**，包括每个因素的**主效应**以及两个因素之间的**交互效应**。

---

### 10.2.1 数学模型

#### 数据结构

设因素 A 有 $r$ 个水平，因素 B 有 $s$ 个水平。每种组合 $(A_i, B_j)$ 下做 $t$ 次重复试验：

$$x_{ijk}: \text{因素 A 取第 } i \text{ 水平、因素 B 取第 } j \text{ 水平下的第 } k \text{ 个观测值}$$
$$i = 1,\ldots,r; \quad j = 1,\ldots,s; \quad k = 1,\ldots,t$$

总试验次数：$n = rst$。

#### 无交互作用的双因素模型（$t = 1$ 时）

当每种组合只做一次试验（$t = 1$）时，无法估计交互效应，模型为：

$$x_{ij} = \mu + \alpha_i + \beta_j + \varepsilon_{ij}$$

其中：
- $\mu$：总平均；
- $\alpha_i$：因素 A 第 $i$ 水平的效应（$\sum_{i=1}^{r}\alpha_i = 0$）；
- $\beta_j$：因素 B 第 $j$ 水平的效应（$\sum_{j=1}^{s}\beta_j = 0$）；
- $\varepsilon_{ij} \stackrel{\text{i.i.d.}}{\sim} N(0, \sigma^2)$。

**检验问题**：
- 检验因素 A：$H_{0A}: \alpha_1 = \alpha_2 = \cdots = \alpha_r = 0$
- 检验因素 B：$H_{0B}: \beta_1 = \beta_2 = \cdots = \beta_s = 0$

#### 有交互作用的双因素模型（$t \geq 2$ 时）

$$x_{ijk} = \mu + \alpha_i + \beta_j + (\alpha\beta)_{ij} + \varepsilon_{ijk}$$

其中新增：
- $(\alpha\beta)_{ij}$：因素 A 第 $i$ 水平与因素 B 第 $j$ 水平之间的**交互效应**，满足 $\sum_i(\alpha\beta)_{ij} = 0$（对每个 $j$），$\sum_j(\alpha\beta)_{ij} = 0$（对每个 $i$）。
- $\varepsilon_{ijk} \stackrel{\text{i.i.d.}}{\sim} N(0, \sigma^2)$。

**检验问题**：
- 检验因素 A：$H_{0A}: \alpha_1 = \cdots = \alpha_r = 0$
- 检验因素 B：$H_{0B}: \beta_1 = \cdots = \beta_s = 0$
- 检验交互效应：$H_{0AB}: (\alpha\beta)_{ij} = 0$（对所有 $i, j$）

---

### 10.2.2 统计分析

#### 无交互作用的方差分析（$t = 1$）

**平方和分解**：

$$SST = SSA + SSB + SSE$$

| 方差来源 | 平方和 | 自由度 |
|:---|:---|:---|
| 因素 A | $SSA = s\sum_{i=1}^{r}(\bar{x}_{i\cdot} - \bar{x})^2$ | $r-1$ |
| 因素 B | $SSB = r\sum_{j=1}^{s}(\bar{x}_{\cdot j} - \bar{x})^2$ | $s-1$ |
| 误差 | $SSE = \sum_{i=1}^{r}\sum_{j=1}^{s}(x_{ij} - \bar{x}_{i\cdot} - \bar{x}_{\cdot j} + \bar{x})^2$ | $(r-1)(s-1)$ |
| 总计 | $SST = \sum_{i=1}^{r}\sum_{j=1}^{s}(x_{ij} - \bar{x})^2$ | $rs-1$ |

**检验统计量**：
$$F_A = \frac{MSA}{MSE} = \frac{SSA/(r-1)}{SSE/[(r-1)(s-1)]} \sim F(r-1, (r-1)(s-1))$$

$$F_B = \frac{MSB}{MSE} = \frac{SSB/(s-1)}{SSE/[(r-1)(s-1)]} \sim F(s-1, (r-1)(s-1))$$

**方差分析表**：

| 方差来源 | 平方和 | 自由度 | 均方 | F值 |
|:---|:---|:---|:---|:---|
| 因素 A | $SSA$ | $r-1$ | $MSA$ | $MSA/MSE$ |
| 因素 B | $SSB$ | $s-1$ | $MSB$ | $MSB/MSE$ |
| 误差 | $SSE$ | $(r-1)(s-1)$ | $MSE$ | |
| 总计 | $SST$ | $rs-1$ | | |

---

#### 有交互作用的方差分析（$t \geq 2$）

**平方和分解**：

$$SST = SSA + SSB + SSAB + SSE$$

| 方差来源 | 平方和 | 自由度 |
|:---|:---|:---|
| 因素 A | $SSA = st\sum_{i=1}^{r}(\bar{x}_{i\cdot\cdot} - \bar{x})^2$ | $r-1$ |
| 因素 B | $SSB = rt\sum_{j=1}^{s}(\bar{x}_{\cdot j\cdot} - \bar{x})^2$ | $s-1$ |
| 交互作用 A×B | $SSAB = t\sum_{i=1}^{r}\sum_{j=1}^{s}(\bar{x}_{ij\cdot} - \bar{x}_{i\cdot\cdot} - \bar{x}_{\cdot j\cdot} + \bar{x})^2$ | $(r-1)(s-1)$ |
| 误差 | $SSE = \sum_{i=1}^{r}\sum_{j=1}^{s}\sum_{k=1}^{t}(x_{ijk} - \bar{x}_{ij\cdot})^2$ | $rs(t-1)$ |
| 总计 | $SST = \sum_{i=1}^{r}\sum_{j=1}^{s}\sum_{k=1}^{t}(x_{ijk} - \bar{x})^2$ | $rst-1$ |

**检验统计量**：
$$F_A = \frac{MSA}{MSE} \sim F(r-1, rs(t-1))$$

$$F_B = \frac{MSB}{MSE} \sim F(s-1, rs(t-1))$$

$$F_{AB} = \frac{MSAB}{MSE} \sim F((r-1)(s-1), rs(t-1))$$

**方差分析表**：

| 方差来源 | 平方和 | 自由度 | 均方 | F值 |
|:---|:---|:---|:---|:---|
| 因素 A | $SSA$ | $r-1$ | $MSA$ | $MSA/MSE$ |
| 因素 B | $SSB$ | $s-1$ | $MSB$ | $MSB/MSE$ |
| 交互 A×B | $SSAB$ | $(r-1)(s-1)$ | $MSAB$ | $MSAB/MSE$ |
| 误差 | $SSE$ | $rs(t-1)$ | $MSE$ | |
| 总计 | $SST$ | $rst-1$ | | |

---

## 本章核心公式速览

| 内容 | 公式 |
|:---|:---|
| 单因素总平方和 | $SST = \sum_{i=1}^{r}\sum_{j=1}^{n_i}(x_{ij} - \bar{x})^2$ |
| 组间平方和 | $SSA = \sum_{i=1}^{r} n_i(\bar{x}_{i\cdot} - \bar{x})^2$ |
| 组内平方和 | $SSE = SST - SSA$ |
| 单因素 F 统计量 | $F = \dfrac{SSA/(r-1)}{SSE/(n-r)}$ |
| 双因素（有交互）F_A | $F_A = \dfrac{MSA}{MSE}$ |
| 交互效应 F_AB | $F_{AB} = \dfrac{MSAB}{MSE}$ |

---


