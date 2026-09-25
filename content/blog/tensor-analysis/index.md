---
title: "张量分析"
description: "介绍张量分析的基础知识。"
summary: "介绍张量分析的基础知识"
date: 2026-09-21
lastmod: 2026-09-21
draft: false
weight: 50
categories: [数学]
tags: ["张量分析"]
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

**爱因斯坦求和约定**是张量分析中最基础也最强大的记法工具，核心思想是：**当一个项中同一个指标作为上标和下标同时出现（即"哑指标"）时，自动表示对该指标从1到$n$（通常$n=3$）求和，无需写求和符号$\sum$。**

---

### 基本规则

| 规则 | 说明 |
|------|------|
| 哑指标必须一上一下 | 同一项中重复出现的指标，一个为逆变（上标），一个为协变（下标） |
| 哑指标字母可任意替换 | $a^i b_i = a^j b_j = a^k b_k$（求和结果不变） |
| 每项中同一指标最多出现两次 | 出现三次以上属非法记法 |
| 自由指标不参与求和 | 每项中只出现一次的指标为自由指标，等式两边自由指标必须一致 |
| 哑指标在等式两边可独立更换 | $a^i b_i = c^j d_j$ 完全合法 |

---

### 核心概念

#### 哑指标（Dummy Index）
在同一项中重复出现（一上一下）的指标，代表求和运算。哑指标只是"占位符"，换什么字母结果都一样：
$$a^i b_i = \sum_{i=1}^3 a^i b_i = a^1 b_1 + a^2 b_2 + a^3 b_3$$

#### 自由指标（Free Index）
在每一项中只出现一次的指标，不被求和，代表该等式对指标的每个取值（1、2、3）都成立：
$$a^i = T^i_{\ j} b^j$$
这是一个等式组，等价于3个等式（$i=1,2,3$各一个），$j$是哑指标被求和。

---

### 典型示例

#### 矢量点积
$$\boldsymbol{a}\cdot\boldsymbol{b} = g_{ij} a^i b^j = a_i b^i = a^i b_i$$
三种写法等价，哑指标$i$、$j$自动从1求和到3。

#### 度量张量升降指标
$$a_i = g_{ij} a^j, \quad a^i = g^{ij} a_j$$
$i$为自由指标，$j$为哑指标（对$j$求和）。

#### 矩阵乘法（二阶张量点积）
$$(AB)^i_{\ j} = A^i_{\ k} B^k_{\ j}$$
$k$为哑指标，表示对$k$求和；$i$和$j$为自由指标，结果仍是二阶张量。

#### 克罗内克尔符号$\delta^i_j$
$$\delta^i_j a^j = a^i$$
哑指标$j$与$\delta$的下指标$j$匹配，当$j=i$时$\delta=1$，其余为0，因此结果就是$a^i$本身——这是$\delta^i_j$的"指标替换"功能。

#### 置换符号与行列式
$$\varepsilon^{ijk} a_i b_j c_k = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}$$
$i,j,k$全部为哑指标，自动对三个指标从1到3各求和（共$3^3=27$项，但仅当$i,j,k$互不相同时才非零，实际只有6项非零）。

---

### 注意事项与常见错误

| 错误类型 | 错误示例 | 正确写法 |
|----------|----------|----------|
| 哑指标两次都在上或都在下 | $a^i b^i$ | $a^i b_i$ |
| 同一项中指标出现三次 | $a^i b_i c_i$ | 需区分不同哑指标，如$a^i b_i c_j$ |
| 等式两边自由指标不匹配 | $a^i = T^i_{\ j} b^k$ | $a^i = T^i_{\ j} b^j$ |
| 哑指标在等式两边未独立更换 | $a^i b_i = c^i d_i$（容易混淆） | $a^i b_i = c^j d_j$ |
| 误将自由指标当作哑指标 | $T^i_{\ i}$ | 这是缩并（结果为标量），不是自由指标 |

---

### $\varepsilon\sim\delta$恒等式

这是爱因斯坦求和约定中最常用的工具之一：
$$\varepsilon^{ijk} \varepsilon_{lmk} = \delta^i_{\ l} \delta^j_{\ m} - \delta^i_{\ m} \delta^j_{\ l}$$
哑指标$k$被求和消去，左边6个自由指标$i,j,l,m$转化为右边由$\delta$构成的组合，三重矢积展开等运算全靠这个等式。

---

矢量的三种基本乘法运算——**点积、叉积、混合积**——是张量分析的起点，它们分别对应不同的几何意义，也是后续定义张量代数运算的"原型"。

---

## 一、点积（内积 / 标积）

### 1. 定义

两个矢量 $\boldsymbol{a}$ 和 $\boldsymbol{b}$ 的点积定义为：

$$\boldsymbol{a} \cdot \boldsymbol{b} = |\boldsymbol{a}|\,|\boldsymbol{b}|\,\cos\theta$$

其中 $\theta$ 是两矢量之间的夹角（$0 \leq \theta \leq \pi$），结果是一个**标量**（0阶张量）。

### 2. 几何意义

- $\boldsymbol{a}\cdot\boldsymbol{b}$ 等于 $\boldsymbol{a}$ 的模长乘以 $\boldsymbol{b}$ 在 $\boldsymbol{a}$ 方向上的投影 $|\boldsymbol{b}|\cos\theta$
- 当 $\theta = 90°$ 时，$\cos\theta = 0$，两矢量**正交**（垂直），点积为0
- 当 $\theta = 0°$ 时，点积取最大值 $|\boldsymbol{a}||\boldsymbol{b}|$；当 $\theta = 180°$ 时取最小值 $-|\boldsymbol{a}||\boldsymbol{b}|$
- 矢量自身的点积等于其模长的平方：$\boldsymbol{a}\cdot\boldsymbol{a} = |\boldsymbol{a}|^2$

### 3. 代数性质

| 性质 | 表达式 |
|------|--------|
| **交换律** | $\boldsymbol{a}\cdot\boldsymbol{b} = \boldsymbol{b}\cdot\boldsymbol{a}$ |
| **分配律** | $\boldsymbol{a}\cdot(\boldsymbol{b}+\boldsymbol{c}) = \boldsymbol{a}\cdot\boldsymbol{b} + \boldsymbol{a}\cdot\boldsymbol{c}$ |
| **与标量相乘** | $(\lambda\boldsymbol{a})\cdot\boldsymbol{b} = \lambda(\boldsymbol{a}\cdot\boldsymbol{b})$ |
| **正定性** | $\boldsymbol{a}\cdot\boldsymbol{a} \geq 0$，等号仅当 $\boldsymbol{a}=\boldsymbol{0}$ 时成立 |
| **柯西-施瓦茨不等式** | $|\boldsymbol{a}\cdot\boldsymbol{b}| \leq |\boldsymbol{a}|\,|\boldsymbol{b}|$ |

### 4. 直角坐标系下的分量表达式

设 $\boldsymbol{a} = a_1\boldsymbol{i} + a_2\boldsymbol{j} + a_3\boldsymbol{k}$，$\boldsymbol{b} = b_1\boldsymbol{i} + b_2\boldsymbol{j} + b_3\boldsymbol{k}$，利用单位正交基 $\boldsymbol{i}\cdot\boldsymbol{i} = \boldsymbol{j}\cdot\boldsymbol{j} = \boldsymbol{k}\cdot\boldsymbol{k} = 1$，$\boldsymbol{i}\cdot\boldsymbol{j} = 0$ 等性质：

$$\boldsymbol{a}\cdot\boldsymbol{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 = \sum_{i=1}^3 a_i b_i$$

用爱因斯坦求和约定简写为：

$$\boldsymbol{a}\cdot\boldsymbol{b} = a_i b_i$$

引入**克罗内克尔符号** $\delta_{ij}$：

$$\delta_{ij} = \begin{cases} 1, & i = j \\ 0, & i \neq j \end{cases}$$

则 $\boldsymbol{a}\cdot\boldsymbol{b} = \delta_{ij} a_i b_j$。

### 5. 一般坐标系下的推广

在斜角系或曲线系下，基矢量不正交，点积表达式需用**度量张量** $g_{ij}$：

$$\boldsymbol{a}\cdot\boldsymbol{b} = g_{ij} a^i b^j = a_i b^i = a^i b_i$$

度量张量分量 $g_{ij} = \boldsymbol{g}_i \cdot \boldsymbol{g}_j$ 包含了坐标系的全部几何信息。

---

## 二、叉积（外积 / 向量积）

### 1. 定义

两个矢量 $\boldsymbol{a}$ 和 $\boldsymbol{b}$ 的叉积定义为一个新的矢量 $\boldsymbol{c} = \boldsymbol{a}\times\boldsymbol{b}$：

- **模长**：$|\boldsymbol{a}\times\boldsymbol{b}| = |\boldsymbol{a}|\,|\boldsymbol{b}|\,\sin\theta$（即以 $\boldsymbol{a}$、$\boldsymbol{b}$ 为邻边的平行四边形的面积）
- **方向**：同时垂直于 $\boldsymbol{a}$ 和 $\boldsymbol{b}$，由**右手定则**确定（右手四指从 $\boldsymbol{a}$ 弯向 $\boldsymbol{b}$，大拇指指向即为叉积方向）

### 2. 几何意义

- 叉积的模长等于 $\boldsymbol{a}$ 和 $\boldsymbol{b}$ 所张成的**平行四边形的面积**
- 当 $\boldsymbol{a}$ 与 $\boldsymbol{b}$ **共线**（平行）时，$\sin\theta = 0$，叉积为零矢量 $\boldsymbol{0}$
- 叉积结果 $\boldsymbol{a}\times\boldsymbol{b}$ 与原矢量 $\boldsymbol{a}$、$\boldsymbol{b}$ 都正交：$(\boldsymbol{a}\times\boldsymbol{b})\cdot\boldsymbol{a} = 0$，$(\boldsymbol{a}\times\boldsymbol{b})\cdot\boldsymbol{b} = 0$

### 3. 代数性质

| 性质 | 表达式 |
|------|--------|
| **反交换律** | $\boldsymbol{a}\times\boldsymbol{b} = -\boldsymbol{b}\times\boldsymbol{a}$ |
| **分配律** | $\boldsymbol{a}\times(\boldsymbol{b}+\boldsymbol{c}) = \boldsymbol{a}\times\boldsymbol{b} + \boldsymbol{a}\times\boldsymbol{c}$ |
| **与标量相乘** | $(\lambda\boldsymbol{a})\times\boldsymbol{b} = \lambda(\boldsymbol{a}\times\boldsymbol{b})$ |
| **自身叉积为零** | $\boldsymbol{a}\times\boldsymbol{a} = \boldsymbol{0}$ |
| **共线判定** | $\boldsymbol{a}\times\boldsymbol{b} = \boldsymbol{0} \iff \boldsymbol{a}$ 与 $\boldsymbol{b}$ 共线 |

⚠️ **叉积不满足结合律**：$(\boldsymbol{a}\times\boldsymbol{b})\times\boldsymbol{c} \neq \boldsymbol{a}\times(\boldsymbol{b}\times\boldsymbol{c})$

### 4. 直角坐标系下的分量表达式

利用单位正交基的叉积关系 $\boldsymbol{i}\times\boldsymbol{j}=\boldsymbol{k}$、$\boldsymbol{j}\times\boldsymbol{k}=\boldsymbol{i}$、$\boldsymbol{k}\times\boldsymbol{i}=\boldsymbol{j}$：

$$\boldsymbol{a}\times\boldsymbol{b} = \begin{vmatrix} \boldsymbol{i} & \boldsymbol{j} & \boldsymbol{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix} = (a_2 b_3 - a_3 b_2)\boldsymbol{i} + (a_3 b_1 - a_1 b_3)\boldsymbol{j} + (a_1 b_2 - a_2 b_1)\boldsymbol{k}$$

引入 **Levi-Civita 置换符号** $\varepsilon_{ijk}$：

$$\varepsilon_{ijk} = \begin{cases} +1, & (i,j,k)\text{为}(1,2,3)\text{的偶置换} \\ -1, & (i,j,k)\text{为}(1,2,3)\text{的奇置换} \\ 0, & \text{有重复指标} \end{cases}$$

则叉积的简洁张量形式为：

$$(\boldsymbol{a}\times\boldsymbol{b})_i = \varepsilon_{ijk} a_j b_k$$

这里 $j$ 和 $k$ 为哑指标，对它们各从1到3求和（共9项，仅6项非零）。

### 5. 一般坐标系下的推广

在一般曲线坐标系下，叉积需用**置换张量**（而非简单的置换符号）：

$$(\boldsymbol{a}\times\boldsymbol{b})^i = \varepsilon^{ijk} a_j b_k$$

其中 $\varepsilon^{ijk} = \frac{1}{\sqrt{g}}\varepsilon_{ijk}$（$g$ 是度量张量行列式），这样叉积才能满足张量变换规则。

---

## 三、混合积（三重标积）

### 1. 定义

三个矢量 $\boldsymbol{a}$、$\boldsymbol{b}$、$\boldsymbol{c}$ 的混合积定义为：

$$(\boldsymbol{a}\ \boldsymbol{b}\ \boldsymbol{c}) = \boldsymbol{a}\cdot(\boldsymbol{b}\times\boldsymbol{c})$$

先做叉积得到一个矢量，再与第三个矢量做点积，结果是**标量**。

### 2. 几何意义

- 混合积的绝对值等于以 $\boldsymbol{a}$、$\boldsymbol{b}$、$\boldsymbol{c}$ 为三条邻棱构成的**平行六面体的体积**：

$$V = |\boldsymbol{a}\cdot(\boldsymbol{b}\times\boldsymbol{c})|$$

- **符号判定**：若 $\boldsymbol{a}$、$\boldsymbol{b}$、$\boldsymbol{c}$ 构成**右手系**，混合积为正；若构成**左手系**，混合积为负
- 混合积为0 $\iff$ 三个矢量**共面**（或至少有一个为零矢量）

### 3. 代数性质

| 性质 | 说明 |
|------|------|
| **循环对称性** | $\boldsymbol{a}\cdot(\boldsymbol{b}\times\boldsymbol{c}) = \boldsymbol{b}\cdot(\boldsymbol{c}\times\boldsymbol{a}) = \boldsymbol{c}\cdot(\boldsymbol{a}\times\boldsymbol{b})$ |
| **交换点叉位置** | $\boldsymbol{a}\cdot(\boldsymbol{b}\times\boldsymbol{c}) = (\boldsymbol{a}\times\boldsymbol{b})\cdot\boldsymbol{c}$（结果相同，括号可省略） |
| **交换两个矢量改变符号** | $\boldsymbol{a}\cdot(\boldsymbol{b}\times\boldsymbol{c}) = -\boldsymbol{b}\cdot(\boldsymbol{a}\times\boldsymbol{c})$（奇置换变号） |
| **共面判定** | $\boldsymbol{a}\cdot(\boldsymbol{b}\times\boldsymbol{c}) = 0 \iff \boldsymbol{a}$、$\boldsymbol{b}$、$\boldsymbol{c}$ 共面 |

### 4. 行列式表达式

混合积可写为三阶行列式：

$$\boldsymbol{a}\cdot(\boldsymbol{b}\times\boldsymbol{c}) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}$$

用置换符号表示：

$$\boldsymbol{a}\cdot(\boldsymbol{b}\times\boldsymbol{c}) = \varepsilon_{ijk} a_i b_j c_k$$

三个指标 $i,j,k$ 均为哑指标，展开后共27项，仅当 $i,j,k$ 互不相同时（即1、2、3的排列）才非零，实际有效项为6项。

---
## 度量张量与指标升降关系

这是张量分析中最核心的概念之一，它解决了"如何在一般坐标系下测量长度、角度、体积"的问题，同时提供了"协变分量"和"逆变分量"之间相互转换的数学工具。

---

## 一、为什么要引入度量张量？

### 问题背景

在**直角坐标系**下，矢量 $\boldsymbol{a}$ 的长度计算非常简单：

$$|\boldsymbol{a}|^2 = a_1^2 + a_2^2 + a_3^2$$

但这是因为直角坐标系的基矢量 $\boldsymbol{i}$、$\boldsymbol{j}$、$\boldsymbol{k}$ 是**正交单位**的。一旦换到**斜角坐标系**或**曲线坐标系**，基矢量既不正交、也不一定归一，上面的公式就不再成立。

**度量张量**就是用来描述"当前坐标系的基矢量之间的几何关系"的工具。

---

## 二、度量张量的定义

### 1. 协变度量张量 $g_{ij}$

定义：

$$\boxed{g_{ij} = \boldsymbol{g}_i \cdot \boldsymbol{g}_j}$$

即第 $i$ 个协变基矢量与第 $j$ 个协变基矢量的**点积**。

由于点积满足交换律，$g_{ij} = g_{ji}$，所以协变度量张量是**对称张量**（二阶对称协变张量）。

写成矩阵形式（三维空间）：

$$[g_{ij}] = \begin{bmatrix} g_{11} & g_{12} & g_{13} \\ g_{21} & g_{22} & g_{23} \\ g_{31} & g_{32} & g_{33} \end{bmatrix} = \begin{bmatrix} \boldsymbol{g}_1\cdot\boldsymbol{g}_1 & \boldsymbol{g}_1\cdot\boldsymbol{g}_2 & \boldsymbol{g}_1\cdot\boldsymbol{g}_3 \\ \boldsymbol{g}_2\cdot\boldsymbol{g}_1 & \boldsymbol{g}_2\cdot\boldsymbol{g}_2 & \boldsymbol{g}_2\cdot\boldsymbol{g}_3 \\ \boldsymbol{g}_3\cdot\boldsymbol{g}_1 & \boldsymbol{g}_3\cdot\boldsymbol{g}_2 & \boldsymbol{g}_3\cdot\boldsymbol{g}_3 \end{bmatrix}$$

- **对角元** $g_{ii}$：第 $i$ 个基矢量模长的平方
- **非对角元** $g_{ij}$（$i\neq j$）：第 $i$ 和第 $j$ 个基矢量夹角的余弦乘以两者模长

### 2. 逆变度量张量 $g^{ij}$

定义：

$$\boxed{g^{ij} = \boldsymbol{g}^i \cdot \boldsymbol{g}^j}$$

即逆变基矢量之间的点积。同样满足 $g^{ij} = g^{ji}$（二阶对称逆变张量）。

---

## 三、度量张量的核心性质

### 性质1：互逆关系

协变度量张量与逆变度量张量**互为逆矩阵**：

$$\boxed{g^{ik} g_{kj} = \delta^i_{\ j}}$$

即它们的矩阵乘积是单位矩阵（克罗内克尔符号 $\delta^i_{\ j}$ 就是单位矩阵的元素表示）。

**证明思路**：
$$g^{ik} g_{kj} = (\boldsymbol{g}^i\cdot\boldsymbol{g}^k)(\boldsymbol{g}_k\cdot\boldsymbol{g}_j)$$
利用对偶关系 $\boldsymbol{g}^i\cdot\boldsymbol{g}_k = \delta^i_{\ k}$：
$$g^{ik} g_{kj} = \boldsymbol{g}^i \cdot (\delta^k_{\ k} \boldsymbol{g}_j) = \boldsymbol{g}^i \cdot \boldsymbol{g}_j = \delta^i_{\ j}$$

### 性质2：行列式

记度量张量的行列式为 $g$：

$$g = \det[g_{ij}] = \begin{vmatrix} g_{11} & g_{12} & g_{13} \\ g_{21} & g_{22} & g_{23} \\ g_{31} & g_{32} & g_{33} \end{vmatrix}$$

- $g > 0$（正定对称矩阵）
- 基矢量共面 $\iff g = 0$（此时坐标系退化）
- $\det[g^{ij}] = 1/g$

### 性质3：直角坐标系下的特殊情况

在直角坐标系下，基矢量为正交单位矢量 $\boldsymbol{e}_1, \boldsymbol{e}_2, \boldsymbol{e}_3$：

$$g_{ij} = \boldsymbol{e}_i \cdot \boldsymbol{e}_j = \delta_{ij} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

此时协变和逆变度量张量都是单位矩阵，两者相同，协变分量和逆变分量也相同——这就是为什么在直角坐标系下我们不需要区分上下标。

---

## 四、指标升降机制

### 1. 为什么需要升降指标？

任意矢量 $\boldsymbol{a}$ 可以用**两套基底**展开：

$$\boldsymbol{a} = a^i \boldsymbol{g}_i \quad \text{（逆变分量）}$$
$$\boldsymbol{a} = a_i \boldsymbol{g}^i \quad \text{（协变分量）}$$

两套分量是**同一个矢量**在不同基底下的表示，物理上完全等价，但数学上数值不同。指标升降就是这两套分量之间的**转换公式**。

### 2. 降指标公式

**协变分量** = 度量张量 $\times$ **逆变分量**：

$$\boxed{a_i = g_{ij} a^j}$$

展开写就是：
$$a_1 = g_{11}a^1 + g_{12}a^2 + g_{13}a^3$$
$$a_2 = g_{21}a^1 + g_{22}a^2 + g_{23}a^3$$
$$a_3 = g_{31}a^1 + g_{32}a^2 + g_{33}a^3$$

**证明**：
$$a_i = \boldsymbol{a}\cdot\boldsymbol{g}_i = (a^j \boldsymbol{g}_j)\cdot\boldsymbol{g}_i = a^j(\boldsymbol{g}_j\cdot\boldsymbol{g}_i) = g_{ji}a^j = g_{ij}a^j \quad \blacksquare$$

### 3. 升指标公式

**逆变分量** = 逆度量张量 $\times$ **协变分量**：

$$\boxed{a^i = g^{ij} a_j}$$

**证明**：利用 $g^{ik}g_{kj} = \delta^i_{\ j}$
$$g^{ij} a_j = g^{ij}(g_{jk} a^k) = (g^{ij} g_{jk}) a^k = \delta^i_{\ k} a^k = a^i \quad \blacksquare$$

### 4. 记忆口诀

| 操作 | 公式 | 说明 |
|------|------|------|
| **降**指标 | $a_i = g_{ij} a^j$ | 用 $g_{ij}$（下标）把上标"拉"下来 |
| **升**指标 | $a^i = g^{ij} a_j$ | 用 $g^{ij}$（上标）把下标"推"上去 |

> "下标用 $g_{ij}$ 降，上标用 $g^{ij}$ 升"——升降符号的上下位置与被操作的指标**相反**。

### 5. 张量分量的指标升降

不仅矢量，任意高阶张量的任何指标都可以独立升降：

$$T^{ij}_{\ \ k} = g^{im} T_{mk}^{\ \ \ j}$$
$$T_{ij}^{\ \ k} = g_{im} g_{jn} T^{mnk}$$

每个指标独立升降，每降一个指标就乘一个 $g_{ij}$，每升一个指标就乘一个 $g^{ij}$。

---

## 五、度量张量的几何应用

### 应用1：计算矢量的长度

$$\boxed{|\boldsymbol{a}|^2 = \boldsymbol{a}\cdot\boldsymbol{a} = g_{ij} a^i a^j = g^{ij} a_i a_j = a^i a_i}$$

这是度量张量最基本的用途——它"度量"了矢量的长度。

### 应用2：计算两个矢量的夹角

$$\cos\theta = \frac{\boldsymbol{a}\cdot\boldsymbol{b}}{|\boldsymbol{a}|\,|\boldsymbol{b}|} = \frac{g_{ij} a^i b^j}{\sqrt{g_{kl} a^k a^l}\,\sqrt{g_{mn} b^m b^n}}$$

### 应用3：计算空间线元（距离微元）

设位置矢量 $\boldsymbol{r}(q^1, q^2, q^3)$，相邻两点的距离微元：

$$d\boldsymbol{r} = \boldsymbol{g}_i \,dq^i$$
$$(ds)^2 = d\boldsymbol{r}\cdot d\boldsymbol{r} = g_{ij}\, dq^i dq^j$$

这是微分几何中**第一基本形式**的张量表示，度量张量也因此被称为"**度量**"。

### 应用4：计算体积元

三个协变基矢量构成的平行六面体的体积为：

$$V = \sqrt{g}$$

其中 $g = \det[g_{ij}]$。因此三维空间中体积微元为：

$$dV = \sqrt{g}\, dq^1 dq^2 dq^3$$

---

## 六、具体坐标系实例

### 例1：二维斜角坐标系

设两个坐标轴夹角为 $\alpha$，基矢量 $\boldsymbol{g}_1$、$\boldsymbol{g}_2$ 的模长分别为 $h_1$、$h_2$：

$$[g_{ij}] = \begin{bmatrix} h_1^2 & h_1 h_2 \cos\alpha \\ h_1 h_2 \cos\alpha & h_2^2 \end{bmatrix}$$

行列式 $g = h_1^2 h_2^2(1 - \cos^2\alpha) = h_1^2 h_2^2 \sin^2\alpha$。

逆度量张量：

$$[g^{ij}] = \frac{1}{h_1^2 h_2^2 \sin^2\alpha} \begin{bmatrix} h_2^2 & -h_1 h_2 \cos\alpha \\ -h_1 h_2 \cos\alpha & h_1^2 \end{bmatrix}$$

### 例2：柱坐标系 $(r, \theta, z)$

位置矢量 $\boldsymbol{r} = r\cos\theta\,\boldsymbol{i} + r\sin\theta\,\boldsymbol{j} + z\,\boldsymbol{k}$

协变基矢量：
$$\boldsymbol{g}_r = \frac{\partial\boldsymbol{r}}{\partial r} = \cos\theta\,\boldsymbol{i} + \sin\theta\,\boldsymbol{j}, \quad |\boldsymbol{g}_r| = 1$$
$$\boldsymbol{g}_\theta = \frac{\partial\boldsymbol{r}}{\partial\theta} = -r\sin\theta\,\boldsymbol{i} + r\cos\theta\,\boldsymbol{j}, \quad |\boldsymbol{g}_\theta| = r$$
$$\boldsymbol{g}_z = \frac{\partial\boldsymbol{r}}{\partial z} = \boldsymbol{k}, \quad |\boldsymbol{g}_z| = 1$$

度量张量（对角矩阵，因为正交）：

$$[g_{ij}] = \begin{bmatrix} 1 & 0 & 0 \\ 0 & r^2 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

逆度量张量：

$$[g^{ij}] = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1/r^2 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

线元：$(ds)^2 = (dr)^2 + r^2(d\theta)^2 + (dz)^2$

体积元：$dV = \sqrt{g}\, dr\, d\theta\, dz = r\, dr\, d\theta\, dz$

### 例3：球坐标系 $(r, \theta, \phi)$

度量张量：

$$[g_{ij}] = \begin{bmatrix} 1 & 0 & 0 \\ 0 & r^2 & 0 \\ 0 & 0 & r^2\sin^2\theta \end{bmatrix}$$

$g = r^4\sin^2\theta$，体积元 $dV = r^2\sin\theta\, dr\, d\theta\, d\phi$

---

## 七、Lamé常数与度量张量的关系

对于**正交曲线坐标系**（基矢量互相垂直但不一定归一），度量张量是对角矩阵：

$$[g_{ij}] = \begin{bmatrix} H_1^2 & 0 & 0 \\ 0 & H_2^2 & 0 \\ 0 & 0 & H_3^2 \end{bmatrix}$$

其中对角元 $g_{ii} = H_i^2$，$H_i$ 就是 **Lamé常数（标度因子）**：

$$H_i = |\boldsymbol{g}_i| = \sqrt{g_{ii}}$$

此时逆变度量张量也是对角矩阵：

$$[g^{ij}] = \begin{bmatrix} 1/H_1^2 & 0 & 0 \\ 0 & 1/H_2^2 & 0 \\ 0 & 0 & 1/H_3^2 \end{bmatrix}$$

指标升降变得非常简单：

$$a_i = H_i^2 a^i, \quad a^i = \frac{a_i}{H_i^2} \quad \text{（不求和）}$$

---

## 八、总结

| 概念 | 数学表达 | 物理意义 |
|------|----------|----------|
| 协变度量张量 | $g_{ij} = \boldsymbol{g}_i\cdot\boldsymbol{g}_j$ | 协变基之间的几何关系 |
| 逆度量张量 | $g^{ij} = \boldsymbol{g}^i\cdot\boldsymbol{g}^j$ | 逆变基之间的几何关系 |
| 互逆性 | $g^{ik}g_{kj} = \delta^i_{\ j}$ | 两套基底的对偶性 |
| 降指标 | $a_i = g_{ij} a^j$ | 逆变分量 → 协变分量 |
| 升指标 | $a^i = g^{ij} a_j$ | 协变分量 → 逆变分量 |
| 长度计算 | $\|\boldsymbol{a}\|^2 = g_{ij}a^i a^j$ | 度量张量的"度量"功能 |
| 线元 | $(ds)^2 = g_{ij} dq^i dq^j$ | 空间距离的度量 |
| 体积元 | $dV = \sqrt{g}\, dq^1 dq^2 dq^3$ | 空间体积的度量 |

度量张量本质上就是空间的"**尺子**"——它编码了坐标系的全部几何信息，有了它，一切矢量运算（长度、角度、体积、投影）都可以在任意坐标系下进行。

---

## 坐标转换：从一个坐标系到另一个坐标系的变换规则

坐标转换的核心问题是：**同一个几何对象（矢量、张量），在不同坐标系下有不同的分量表示，它们之间如何相互转换？**

答案的关键是：**基矢量的变换决定了分量的变换。**

---

## 一、坐标变换的基本设定

### 新旧坐标系

设空间中有两套坐标系：

- **旧坐标系**：$x^i$（$i=1,2,3$），基矢量为 $\boldsymbol{g}_i$
- **新坐标系**：$x'^i$（$i=1,2,3$），基矢量为 $\boldsymbol{g}'_i$

两套坐标之间存在**可逆的变换关系**：

$$x'^i = x'^i(x^1, x^2, x^3) \quad \text{（新坐标用旧坐标表示）}$$
$$x^i = x^i(x'^1, x'^2, x'^3) \quad \text{（旧坐标用新坐标表示）}$$

可逆性要求**雅可比行列式不为零**：

$$J = \det\left[\frac{\partial x'^i}{\partial x^j}\right] \neq 0$$

### 转换系数（雅可比矩阵）

定义两类偏导数矩阵：

| 转换系数 | 定义 | 含义 |
|----------|------|------|
| **逆变转换系数** | $\frac{\partial x'^i}{\partial x^j}$ | 新坐标对旧坐标的偏导 |
| **协变转换系数** | $\frac{\partial x^j}{\partial x'^i}$ | 旧坐标对新坐标的偏导 |

两者互为逆矩阵（链式法则）：

$$\frac{\partial x'^i}{\partial x^k} \frac{\partial x^k}{\partial x'^j} = \delta^i_{\ j}$$

> 这是坐标变换可逆性的数学表达，也是后续所有变换规则的基础。

---

## 二、基矢量的变换（核心中的核心）

### 协变基矢量的变换

根据定义，协变基矢量是位置矢量对坐标的偏导数：$\boldsymbol{g}_i = \frac{\partial\boldsymbol{r}}{\partial x^i}$

新坐标系下的协变基：

$$\boldsymbol{g}'_i = \frac{\partial\boldsymbol{r}}{\partial x'^i} = \frac{\partial x^k}{\partial x'^i} \frac{\partial\boldsymbol{r}}{\partial x^k}$$

由此得到**协变基矢量的变换公式**：

$$\boxed{\boldsymbol{g}'_i = \frac{\partial x^k}{\partial x'^i} \boldsymbol{g}_k}$$

用转换系数简写（设 $A^k_{\ i} = \frac{\partial x^k}{\partial x'^i}$）：

$$\boldsymbol{g}'_i = A^k_{\ i} \boldsymbol{g}_k$$

> **关键结论**：协变基矢量随坐标变换的系数是 $\frac{\partial x^k}{\partial x'^i}$（旧坐标对新坐标的偏导），即"协变"——与坐标变换方向**相同**。

### 逆变基矢量的变换

逆变基满足对偶关系 $\boldsymbol{g}^i \cdot \boldsymbol{g}_j = \delta^i_{\ j}$，由此可推导出逆变基的变换：

$$\boxed{\boldsymbol{g}'^i = \frac{\partial x'^i}{\partial x^k} \boldsymbol{g}^k}$$

> **关键结论**：逆变基矢量的变换系数是 $\frac{\partial x'^i}{\partial x^k}$（新坐标对旧坐标的偏导），即"逆变"——与坐标变换方向**相反**。

### 两套基变换的对比

| 变换对象 | 变换公式 | 系数 |
|----------|----------|------|
| 协变基 $\boldsymbol{g}_i$ | $\boldsymbol{g}'_i = \frac{\partial x^k}{\partial x'^i} \boldsymbol{g}_k$ | $\frac{\partial x^k}{\partial x'^i}$（旧对新） |
| 逆变基 $\boldsymbol{g}^i$ | $\boldsymbol{g}'^i = \frac{\partial x'^i}{\partial x^k} \boldsymbol{g}^k$ | $\frac{\partial x'^i}{\partial x^k}$（新对旧） |

两者所用的系数矩阵互为**转置逆矩阵**。

---

## 三、矢量分量的变换

### 基本思想

同一个矢量 $\boldsymbol{a}$，在两套坐标系下的**几何实体**相同：

$$\boldsymbol{a} = a^i \boldsymbol{g}_i = a'^j \boldsymbol{g}'_j$$

但由于基变了，分量必须跟着变，才能保证矢量本身不变。

### 逆变分量的变换

将 $\boldsymbol{g}'_j = \frac{\partial x^k}{\partial x'^j} \boldsymbol{g}_k$ 代入：

$$\boldsymbol{a} = a'^j \boldsymbol{g}'_j = a'^j \frac{\partial x^k}{\partial x'^j} \boldsymbol{g}_k$$

与 $\boldsymbol{a} = a^k \boldsymbol{g}_k$ 对比，系数对应相等：

$$a^k = \frac{\partial x^k}{\partial x'^j} a'^j$$

反过来写（用旧分量表示新分量）：

$$\boxed{a'^i = \frac{\partial x'^i}{\partial x^k} a^k}$$

> **逆变分量**的变换系数是 $\frac{\partial x'^i}{\partial x^k}$（新对旧的偏导），与**逆变基**的变换系数**相同**，与**协变基**的变换系数**相反**。

### 协变分量的变换

类似地，从 $\boldsymbol{a} = a_i \boldsymbol{g}^i = a'_j \boldsymbol{g}'^j$ 出发：

$$\boxed{a'_i = \frac{\partial x^k}{\partial x'^i} a_k}$$

> **协变分量**的变换系数是 $\frac{\partial x^k}{\partial x'^i}$（旧对新的偏导），与**协变基**的变换系数**相同**。

### 总结：矢量分量的两套变换规则

| 分量类型 | 变换公式 | 系数类型 | 命名原因 |
|----------|----------|----------|----------|
| **逆变**分量 $a^i$ | $a'^i = \frac{\partial x'^i}{\partial x^k} a^k$ | 新对旧的偏导 | 与坐标变换方向**同向** |
| **协变**分量 $a_i$ | $a'_i = \frac{\partial x^k}{\partial x'^i} a_k$ | 旧对新的偏导 | 与坐标变换方向**反向** |

---

## 四、度量张量的变换

度量张量是二阶协变张量，其变换规则是协变基变换的"自然延伸"。

### 协变度量张量的变换

$$g'_{ij} = \boldsymbol{g}'_i \cdot \boldsymbol{g}'_j = \left(\frac{\partial x^k}{\partial x'^i} \boldsymbol{g}_k\right) \cdot \left(\frac{\partial x^l}{\partial x'^j} \boldsymbol{g}_l\right)$$

$$\boxed{g'_{ij} = \frac{\partial x^k}{\partial x'^i} \frac{\partial x^l}{\partial x'^j} g_{kl}}$$

### 逆度量张量的变换

$$\boxed{g'^{ij} = \frac{\partial x'^i}{\partial x^k} \frac{\partial x'^j}{\partial x^l} g^{kl}}$$

可以看出：每个协变指标对应一个 $\frac{\partial x}{\partial x'}$ 因子，每个逆变指标对应一个 $\frac{\partial x'}{\partial x}$ 因子。

---

## 五、任意阶张量的变换规则（一般公式）

有了以上铺垫，任意 $(r+s)$ 阶混合张量的变换规则就是前面规则的**直接推广**：

$$\boxed{T'^{i_1 i_2 \cdots i_r}_{\ \ \ \ j_1 j_2 \cdots j_s} = \frac{\partial x'^{i_1}}{\partial x^{k_1}} \frac{\partial x'^{i_2}}{\partial x^{k_2}} \cdots \frac{\partial x'^{i_r}}{\partial x^{k_r}} \frac{\partial x^{l_1}}{\partial x'^{j_1}} \frac{\partial x^{l_2}}{\partial x'^{j_2}} \cdots \frac{\partial x^{l_s}}{\partial x'^{j_s}} T^{k_1 k_2 \cdots k_r}_{\ \ \ \ \ \ l_1 l_2 \cdots l_s}}$$

### 变换规则的结构

$$T' = \underbrace{\left(\frac{\partial x'}{\partial x}\right) \cdots \left(\frac{\partial x'}{\partial x}\right)}_{r\text{ 个因子，对应 }r\text{ 个上标（逆变）}} \underbrace{\left(\frac{\partial x}{\partial x'}\right) \cdots \left(\frac{\partial x}{\partial x'}\right)}_{s\text{ 个因子，对应 }s\text{ 个下标（协变）}} T$$

> 每个**上标**贡献一个 $\frac{\partial x'}{\partial x}$（新对旧的偏导）
> 每个**下标**贡献一个 $\frac{\partial x}{\partial x'}$（旧对新的偏导）

### 具体例子

| 张量 | 阶数 | 变换公式 |
|------|------|----------|
| 标量 $\phi$ | $(0,0)$ | $\phi' = \phi$（不变） |
| 逆变矢量 $a^i$ | $(1,0)$ | $a'^i = \frac{\partial x'^i}{\partial x^k} a^k$ |
| 协变矢量 $a_i$ | $(0,1)$ | $a'_i = \frac{\partial x^k}{\partial x'^i} a_k$ |
| 二阶逆变张量 $A^{ij}$ | $(2,0)$ | $A'^{ij} = \frac{\partial x'^i}{\partial x^k}\frac{\partial x'^j}{\partial x^l} A^{kl}$ |
| 二阶协变张量 $A_{ij}$ | $(0,2)$ | $A'_{ij} = \frac{\partial x^k}{\partial x'^i}\frac{\partial x^l}{\partial x'^j} A_{kl}$ |
| 混合张量 $A^i_{\ j}$ | $(1,1)$ | $A'^i_{\ j} = \frac{\partial x'^i}{\partial x^k}\frac{\partial x^l}{\partial x'^j} A^k_{\ l}$ |

---

## 六、具体实例：直角系到柱坐标系的转换

### 坐标变换关系

$$\text{直角} \to \text{柱}：\quad x = r\cos\theta, \quad y = r\sin\theta, \quad z = z$$
$$\text{柱} \to \text{直角}：\quad r = \sqrt{x^2+y^2}, \quad \theta = \arctan\frac{y}{x}, \quad z = z$$

### 雅可比矩阵（转换系数）

$\frac{\partial(x,y,z)}{\partial(r,\theta,z)}$：

$$\begin{bmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial\theta} & \frac{\partial x}{\partial z} \$$4pt] \frac{\partial y}{\partial r} & \frac{\partial y}{\partial\theta} & \frac{\partial y}{\partial z} \$$4pt] \frac{\partial z}{\partial r} & \frac{\partial z}{\partial\theta} & \frac{\partial z}{\partial z} \end{bmatrix} = \begin{bmatrix} \cos\theta & -r\sin\theta & 0 \\ \sin\theta & r\cos\theta & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

### 矢量逆变分量的变换

设直角系下矢量 $\boldsymbol{a} = a_x \boldsymbol{i} + a_y \boldsymbol{j} + a_z \boldsymbol{k}$，转换到柱坐标下的逆变分量：

$$a^r = \frac{\partial r}{\partial x} a_x + \frac{\partial r}{\partial y} a_y = \frac{x}{\sqrt{x^2+y^2}} a_x + \frac{y}{\sqrt{x^2+y^2}} a_y = a_x \cos\theta + a_y \sin\theta$$

$$a^\theta = \frac{\partial\theta}{\partial x} a_x + \frac{\partial\theta}{\partial y} a_y = -\frac{y}{x^2+y^2} a_x + \frac{x}{x^2+y^2} a_y = \frac{-a_x \sin\theta + a_y \cos\theta}{r}$$

$$a^z = a_z$$

注意 $a^\theta$ 有 $1/r$ 的因子——这正是因为 $\theta$ 是角度（无量纲），其逆变分量的量纲与直角分量不同。

### 度量张量的变换

用变换公式 $g'_{ij} = \frac{\partial x^k}{\partial x'^i}\frac{\partial x^l}{\partial x'^j} g_{kl}$，直角系下 $g_{kl} = \delta_{kl}$：

$$g'_{rr} = \left(\frac{\partial x}{\partial r}\right)^2 + \left(\frac{\partial y}{\partial r}\right)^2 = \cos^2\theta + \sin^2\theta = 1$$
$$g'_{\theta\theta} = \left(\frac{\partial x}{\partial\theta}\right)^2 + \left(\frac{\partial y}{\partial\theta}\right)^2 = (-r\sin\theta)^2 + (r\cos\theta)^2 = r^2$$
$$g'_{zz} = 1, \quad g'_{r\theta} = g'_{\theta r} = 0, \cdots$$

$$[g'_{ij}] = \begin{bmatrix} 1 & 0 & 0 \\ 0 & r^2 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

与直接计算柱坐标协变基的点积结果完全一致，验证了变换公式的正确性。

---

## 七、变换中的不变量

虽然分量在不同坐标系下不同，但某些量是**与坐标系无关**的（标量不变量）：

| 不变量 | 表达式 | 说明 |
|--------|--------|------|
| 矢量长度平方 | $|\boldsymbol{a}|^2 = g_{ij} a^i a^j$ | 不随坐标系改变 |
| 矢量点积 | $\boldsymbol{a}\cdot\boldsymbol{b} = g_{ij} a^i b^j$ | 不随坐标系改变 |
| 二阶张量的迹 | $A^i_{\ i}$ | 缩并后为标量 |
| 度量张量行列式 | $g = \det[g_{ij}]$ | 变换时乘以雅可比行列式的平方 |

这些不变量的存在，恰恰说明了：**坐标变换只是"换了个视角看同一个几何对象"，对象本身的几何属性不会变。**

---

## 八、坐标变换的"记忆框架"

整个坐标变换的逻辑链条可以浓缩为：

```
坐标变换 x → x'
    ↓
基矢量变换（由偏导数决定）
    ↓
分量变换（保证矢量实体不变）
    ↓
度量张量变换（由基变换自然导出）
    ↓
任意张量变换（每上标一个标一个∂x'/∂x，每下标一个下标一个∂x/∂x'）
```

> **一句话总结**：坐标变换的本质是基的变换，分量的变换是基变换的"补偿"——基怎么变，分量就反着变，保证几何对象本身不变。

---

### 一、什么是并矢

#### 1. 从"两个矢量拼在一起"说起

矢量乘法有三种常见形式：点积（得标量）、叉积（得矢量）。如果把两个矢量**直接并列放置、中间不写任何运算符号**，就得到第三种运算结果——**并矢**（dyad）：

$$\boldsymbol{T} = \boldsymbol{a}\boldsymbol{b}$$

读作"a 并 b"。它是**二阶张量最原始、最直观的构造方式**，可以理解为把两个一阶量"外搭"成一个二阶量。

> ⚠️ 注意区分三个长得像的东西：
> - $\boldsymbol{a}\cdot\boldsymbol{b}$ —— 点积，结果是**标量**
> - $\boldsymbol{a}\times\boldsymbol{b}$ —— 叉积，结果是**矢量**
> - $\boldsymbol{a}\boldsymbol{b}$ —— 并积，结果是**二阶张量（并矢）**

#### 2. 并矢式（dyadic）

单个并矢能表示的对象有限，**若干个并矢的线性组合**称为**并矢式**：

$$\boldsymbol{T} = \sum_k \alpha_k\,\boldsymbol{a}_k\boldsymbol{b}_k = \alpha_1\boldsymbol{a}_1\boldsymbol{b}_1 + \alpha_2\boldsymbol{a}_2\boldsymbol{b}_2 + \cdots$$

其中 $\alpha_k$ 是标量系数。并矢式才是工程中实际使用的形式（应力张量、惯性张量等都是并矢式，而不是单个并矢）。

---

### 二、并矢的基本性质

#### 1. 不可交换

$$\boldsymbol{a}\boldsymbol{b} \neq \boldsymbol{b}\boldsymbol{a} \quad (\text{除非 }\boldsymbol{a}\parallel\boldsymbol{b})$$

这是并矢与点积最根本的区别。并矢有"先后顺序"，$\boldsymbol{a}$ 叫**前矢量**，$\boldsymbol{b}$ 叫**后矢量**。这个顺序决定了它作为线性算子时"从哪边作用"。

#### 2. 对标量的结合性

$$\lambda(\boldsymbol{a}\boldsymbol{b}) = (\lambda\boldsymbol{a})\boldsymbol{b} = \boldsymbol{a}(\lambda\boldsymbol{b})$$

标量可以随意进出，因此 $\alpha_k\boldsymbol{a}_k\boldsymbol{b}_k = (\sqrt{\alpha_k}\boldsymbol{a}_k)(\sqrt{\alpha_k}\boldsymbol{b}_k)$ 这类写法都合法。

#### 3. 对加法的分配律

$$(\boldsymbol{a}+\boldsymbol{b})(\boldsymbol{c}+\boldsymbol{d}) = \boldsymbol{a}\boldsymbol{c} + \boldsymbol{a}\boldsymbol{d} + \boldsymbol{b}\boldsymbol{c} + \boldsymbol{b}\boldsymbol{d}$$

展开规则和普通多项式乘法完全一样——这正是并矢记法的优势所在。

#### 4. 零并矢

$\boldsymbol{a}\boldsymbol{b}=\boldsymbol{0}$ 当且仅当 $\boldsymbol{a}=\boldsymbol{0}$ 或 $\boldsymbol{b}=\boldsymbol{0}$。

---

### 三、并矢的基底展开（连接分量表示）

设空间有一组协变基 $\boldsymbol{g}_i$ 和逆变基 $\boldsymbol{g}^i$，任意并矢式可展开为：

$$\boldsymbol{T} = T^{ij}\,\boldsymbol{g}_i\boldsymbol{g}_j = T^i_{\ j}\,\boldsymbol{g}_i\boldsymbol{g}^j = T_i^{\ j}\,\boldsymbol{g}^i\boldsymbol{g}_j = T_{ij}\,\boldsymbol{g}^i\boldsymbol{g}^j$$

这里有四个要点：

| 要点 | 说明 |
|------|------|
| **9个独立分量** | 三维空间中 $i,j$ 各取 1~3，共 $3\times3=9$ 个分量，可排成 $3\times3$ 矩阵 |
| **四种指标位置** | $T^{ij}$（二阶逆变）、$T_{ij}$（二阶协变）、$T^i_{\ j}$、$T_i^{\ j}$（混合），对应不同的基并置方式 |
| **分量提取公式** | $T^{ij} = \boldsymbol{g}^i\cdot\boldsymbol{T}\cdot\boldsymbol{g}^j$，即用对偶基从两边"点"出来 |
| **与矩阵的对应** | $[T] = [T^{ij}]$，但并矢式本身是**与坐标系无关的几何实体**，矩阵只是它在某组基下的"照片" |

在直角坐标系下（$\boldsymbol{e}_i\cdot\boldsymbol{e}_j=\delta_{ij}$）：

$$\boldsymbol{T} = T_{ij}\,\boldsymbol{e}_i\boldsymbol{e}_j,\qquad T_{ij} = \boldsymbol{e}_i\cdot\boldsymbol{T}\cdot\boldsymbol{e}_j$$

此时四种写法合一，这也是直角系下并矢看起来特别简单的原因。

---

### 四、并矢的运算

#### 1. 缩并（Contraction）

把并置的两个基矢量做点积，**阶数降2阶**：

$$\text{缩并}(\boldsymbol{a}\boldsymbol{b}) = \boldsymbol{a}\cdot\boldsymbol{b} \quad (\text{标量})$$

对并矢式逐项缩并求和，就是二阶张量的**迹**：

$$\text{tr}\,\boldsymbol{T} = T^i_{\ i} = g_{ij}T^{ij}$$

#### 2. 点积（单点积）

并矢与矢量的点积分**左乘**和**右乘**，结果不同：

$$(\boldsymbol{a}\boldsymbol{b})\cdot\boldsymbol{c} = \boldsymbol{a}\,(\boldsymbol{b}\cdot\boldsymbol{c}) = (\boldsymbol{b}\cdot\boldsymbol{c})\,\boldsymbol{a} \quad \leftarrow \text{结果是 }\boldsymbol{a}\text{ 方向的矢量}$$
$$\boldsymbol{c}\cdot(\boldsymbol{a}\boldsymbol{b}) = (\boldsymbol{c}\cdot\boldsymbol{a})\,\boldsymbol{b} \quad \leftarrow \text{结果是 }\boldsymbol{b}\text{ 方向的矢量}$$

**物理意义**：并矢 $\boldsymbol{a}\boldsymbol{b}$ 是一个**线性变换算子**——它把输入矢量 $\boldsymbol{c}$ 先投影到 $\boldsymbol{b}$ 方向（取 $\boldsymbol{b}\cdot\boldsymbol{c}$），再沿 $\boldsymbol{a}$ 方向输出。右乘时"后矢量吃输入"，左乘时"前矢量吃输入"。

并矢与并矢的点积（中间两个矢量相点）：

$$(\boldsymbol{a}\boldsymbol{b})\cdot(\boldsymbol{c}\boldsymbol{d}) = \boldsymbol{a}\,(\boldsymbol{b}\cdot\boldsymbol{c})\,\boldsymbol{d} = (\boldsymbol{b}\cdot\boldsymbol{c})\,\boldsymbol{a}\boldsymbol{d} \quad (\text{结果仍是并矢})$$

分量形式：$(\boldsymbol{T}\cdot\boldsymbol{S})^i_{\ j} = T^{ik}S_{kj}$ —— 这就是**矩阵乘法**。

#### 3. 双点积（Double dot）

两个并矢的双点积结果是**标量**，有两种常用定义（不同教材记号不同，需注意区分）：

| 类型 | 定义 | 结果 |
|------|------|------|
| **并联式**（常用 $:$） | $(\boldsymbol{a}\boldsymbol{b}):(\boldsymbol{c}\boldsymbol{d}) = (\boldsymbol{a}\cdot\boldsymbol{c})(\boldsymbol{b}\cdot\boldsymbol{d})$ | 前与前点、后与后点 |
| **串联式** | $(\boldsymbol{a}\boldsymbol{b})\cdot(\boldsymbol{c}\boldsymbol{d}) = (\boldsymbol{b}\cdot\boldsymbol{c})(\boldsymbol{a}\cdot\boldsymbol{d})$ | 中间两个相点、两头两个相点 |

分量形式：
$$\boldsymbol{T}:\boldsymbol{S} = T^{ij}S_{ij}, \qquad \text{串联式} = T^{ij}S_{ji}$$

> **重要推论**：若 $\boldsymbol{T}$ 或 $\boldsymbol{S}$ 至少有一个是对称张量，则两种双点积**相等**（因为 $S_{ij}=S_{ji}$）。弹性力学中应变能密度 $W=\tfrac12\boldsymbol{\sigma}:\boldsymbol{\varepsilon}$ 用的是并联式。

#### 4. 转置

对调前后矢量：

$$(\boldsymbol{a}\boldsymbol{b})^{\mathrm{T}} = \boldsymbol{b}\boldsymbol{a}$$

对并矢式：$\boldsymbol{T}^{\mathrm{T}} = T^{ij}\boldsymbol{g}_j\boldsymbol{g}_i$，分量上就是 $[T]^{\mathrm{T}}$（行列互换）。

由此定义：
- **对称张量**：$\boldsymbol{T}^{\mathrm{T}}=\boldsymbol{T}$，即 $T^{ij}=T^{ji}$（如应力、应变、惯性张量）
- **反对称张量**：$\boldsymbol{T}^{\mathrm{T}}=-\boldsymbol{T}$，即 $T^{ij}=-T^{ji}$（如角速度、旋度对应的张量）

任意二阶张量可**唯一分解**：

$$\boldsymbol{T} = \underbrace{\tfrac12(\boldsymbol{T}+\boldsymbol{T}^{\mathrm{T}})}_{\text{对称部分}} + \underbrace{\tfrac12(\boldsymbol{T}-\boldsymbol{T}^{\mathrm{T}})}_{\text{反对称部分}}$$

#### 5. 单位并矢（单位二阶张量 / 恒等算子）

$$\boldsymbol{I} = \boldsymbol{e}_1\boldsymbol{e}_1 + \boldsymbol{e}_2\boldsymbol{e}_2 + \boldsymbol{e}_3\boldsymbol{e}_3 = \delta_{ij}\,\boldsymbol{e}_i\boldsymbol{e}_j = g^{ij}\boldsymbol{g}_i\boldsymbol{g}_j = g_{ij}\boldsymbol{g}^i\boldsymbol{g}^j$$

它的核心性质是**对任何矢量都不改变它**：

$$\boldsymbol{I}\cdot\boldsymbol{a} = \boldsymbol{a}\cdot\boldsymbol{I} = \boldsymbol{a}$$

对任意张量：$\boldsymbol{I}\cdot\boldsymbol{T} = \boldsymbol{T}\cdot\boldsymbol{I} = \boldsymbol{T}$。$\boldsymbol{I}$ 的迹为 3（三维空间），双点积 $\boldsymbol{I}:\boldsymbol{I}=3$。

---

### 五、并矢的物理意义：为什么需要它

#### 1. 它是"线性映射"的自然语言

很多物理定律本质上是**把一个矢量线性地映射成另一个矢量**，这种映射必然由一个二阶张量描述，而二阶张量天然写成并矢式：

| 物理量 | 并矢式表达 | 含义 |
|--------|-----------|------|
| 应力张量 | $\boldsymbol{\sigma} = \sigma^{ij}\boldsymbol{g}_i\boldsymbol{g}_j$ | 法向 $\boldsymbol{n}$ → 面力 $\boldsymbol{t}=\boldsymbol{n}\cdot\boldsymbol{\sigma}$ |
| 变形梯度 | $\boldsymbol{F} = \dfrac{\partial x^i}{\partial X^J}\boldsymbol{g}_i\boldsymbol{G}^J$ | 物质线元 $\mathrm{d}\boldsymbol{X}$ → 空间线元 $\mathrm{d}\boldsymbol{x}=\boldsymbol{F}\cdot\mathrm{d}\boldsymbol{X}$ |
| 速度梯度 | $\boldsymbol{L} = \nabla\boldsymbol{v}$ | $\mathrm{d}\boldsymbol{v} = \boldsymbol{L}\cdot\mathrm{d}\boldsymbol{x}$ |
| 惯性张量 | $\boldsymbol{J} = \int\rho[(\boldsymbol{r}\cdot\boldsymbol{r})\boldsymbol{I}-\boldsymbol{r}\boldsymbol{r}]\,\mathrm{d}V$ | 角速度 $\boldsymbol{\omega}$ → 角动量 $\boldsymbol{L}=\boldsymbol{J}\cdot\boldsymbol{\omega}$ |

注意最后一行里出现了 $\boldsymbol{r}\boldsymbol{r}$ 这种单个并矢——它是"沿 $\boldsymbol{r}$ 方向的投影算子"乘以 $r^2$。

#### 2. 投影算子

沿单位矢量 $\boldsymbol{n}$ 方向的**投影算子**就是单个并矢：

$$\boldsymbol{P}_{\parallel} = \boldsymbol{n}\boldsymbol{n}, \qquad \boldsymbol{P}_{\parallel}\cdot\boldsymbol{a} = (\boldsymbol{n}\cdot\boldsymbol{a})\boldsymbol{n}$$

垂直于 $\boldsymbol{n}$ 的投影算子是并矢式：

$$\boldsymbol{P}_{\perp} = \boldsymbol{I} - \boldsymbol{n}\boldsymbol{n}$$

且 $\boldsymbol{P}_{\parallel} + \boldsymbol{P}_{\perp} = \boldsymbol{I}$。这是并矢记法最干净的应用之一。

#### 3. 分解定理

三维空间中**任意**二阶张量都可以写成**至多 3 个并矢之和**；对称张量还可以进一步主轴化：

$$\boldsymbol{T} = \lambda_1\boldsymbol{n}_1\boldsymbol{n}_1 + \lambda_2\boldsymbol{n}_2\boldsymbol{n}_2 + \lambda_3\boldsymbol{n}_3\boldsymbol{n}_3$$

其中 $\lambda_i$ 是主值，$\boldsymbol{n}_i$ 是互相正交的主方向（应力主应力、应变主应变、惯性主轴都是这个形式）。

---

### 六、几个典型例子

**例1：单个并矢的作用**

设 $\boldsymbol{a}=2\boldsymbol{e}_1$，$\boldsymbol{b}=\boldsymbol{e}_1+\boldsymbol{e}_2$，$\boldsymbol{c}=3\boldsymbol{e}_2$：

$$(\boldsymbol{a}\boldsymbol{b})\cdot\boldsymbol{c} = \boldsymbol{a}(\boldsymbol{b}\cdot\boldsymbol{c}) = 2\boldsymbol{e}_1\,(1\times3) = 6\boldsymbol{e}_1$$
$$\boldsymbol{c}\cdot(\boldsymbol{a}\boldsymbol{b}) = (\boldsymbol{c}\cdot\boldsymbol{a})\boldsymbol{b} = 0\cdot\boldsymbol{b} = \boldsymbol{0}$$

同一个并矢，左右乘结果完全不同（甚至一边为零）。

**例2：并矢式的迹**

$\boldsymbol{T} = 3\boldsymbol{e}_1\boldsymbol{e}_1 + 2\boldsymbol{e}_1\boldsymbol{e}_2 - \boldsymbol{e}_2\boldsymbol{e}_2$，则 $\text{tr}\,\boldsymbol{T} = 3 + 0 - 1 = 2$（只取同指标项缩并）。

**例3：验证 $\boldsymbol{I}$ 的不变性**

$$\boldsymbol{I}\cdot\boldsymbol{a} = (\delta_{ij}\boldsymbol{e}_i\boldsymbol{e}_j)\cdot(a_k\boldsymbol{e}_k) = \delta_{ij}a_k\boldsymbol{e}_i(\boldsymbol{e}_j\cdot\boldsymbol{e}_k) = \delta_{ij}a_k\delta_{jk}\boldsymbol{e}_i = a_i\boldsymbol{e}_i = \boldsymbol{a} \quad\blacksquare$$

---

### 七、并矢与张量的关系（概念定位）

| 概念 | 关系 |
|------|------|
| 并矢 $\boldsymbol{a}\boldsymbol{b}$ | 二阶张量的**基本构件**（"原子"） |
| 并矢式 $\sum\boldsymbol{a}_k\boldsymbol{b}_k$ | 一般二阶张量的**实体表示** |
| $T^{ij}\boldsymbol{g}_i\boldsymbol{g}_j$ | 并矢式的**基底展开**，$T^{ij}$ 是分量 |
| $[T^{ij}]$ | 该张量在某组基下的**矩阵表示** |

换言之：**并矢式 = 二阶张量的实体（坐标无关）表示；带指标的数组 = 它的分量（坐标相关）表示。** 前者适合理论推导，后者适合具体计算，两者通过基底展开互相转换。

---

### 八、常见误区提醒

1. **$\boldsymbol{a}\boldsymbol{b}$ 不是乘法省略**，它是一种独立的乘积运算，不能像数那样随意交换次序。
2. **并矢没有"除法"**，不能说 $\boldsymbol{a}\boldsymbol{b}/\boldsymbol{b}=\boldsymbol{a}$。
3. **不是每个二阶张量都是单个并矢**：单个并矢的矩阵秩为 1（行列式为 0），而一般的二阶张量秩可达 3。
4. **双点积有两种定义**，看书时一定要先确认作者用的是并联式还是串联式，否则弹性力学里的 $\boldsymbol{\sigma}:\boldsymbol{\varepsilon}$ 会算错。
5. **物理分量 vs 张量分量**：在曲线坐标系下，工程上用的"物理分量"（单位基下的数值）与并矢展开的逆变/协变分量差一个 Lamé 常数因子，混用会导致 $r$、$1/r$ 等因子错位。

---

### 一、先立规矩：张量运算的三条铁律

在具体列出运算之前，必须先明确三条贯穿始终的原则。违背任何一条都会导致表达式失去数学意义。

**1. 封闭性**：合法运算的结果仍是张量（且阶、型确定）。这是张量代数存在的理由——保证算完之后还是“客观量”。

**2. 同型性**：只有**阶数相同、上下标位置完全对应**的张量才能相加减。$T^{ij}+S^{ij}$ 合法；$T^{ij}+S_{ij}$、$T^i+S^{ij}$ 均不合法（除非先用度量张量升降指标）。

**3. 指标平衡**：等式两边**自由指标**（未被求和的指标）的种类与位置必须完全一致；**哑指标**（求和指标）只能成对出现且一上一下。
$$A^{ik}B_{kj}=C^i_{\ j}\quad\checkmark\qquad A^{ik}B_{kj}=C_{ij}\quad\times\qquad A^{ii}=B^i\quad\times$$

---

### 二、基本运算（任意阶通用）

#### 1. 相等

$\boldsymbol{A}=\boldsymbol{B}$ 当且仅当它们在**同一组基**下所有对应分量相等：$A^{i_1\cdots}_{j_1\cdots}=B^{i_1\cdots}_{j_1\cdots}$。

> 重要推论：若两个张量在一组基下相等，则在**所有**坐标系下都相等。因此证明张量恒等式时，可以**挑选最方便的坐标系**（如主轴系）进行验证。

#### 2. 加法 / 减法

同型张量对应分量相加减，结果同型：

$$C^{ij}=A^{ij}\pm B^{ij},\qquad \boldsymbol{C}=\boldsymbol{A}\pm\boldsymbol{B}$$

几何上无特别含义，主要是线性空间结构的体现（$(r,s)$ 型张量全体构成线性空间）。

#### 3. 数乘

标量 $\lambda$ 乘张量，每个分量同乘，阶型不变：

$$(\lambda \boldsymbol{A})^{i}_{\ j}=\lambda A^i_{\ j}$$

注意：**标量必须是真标量（不变量）**。若 $\lambda$ 是赝标量，则乘积的赝性会改变。

#### 4. 张量积（并乘、外积、dyadic product）

**最基础的构造性运算**。把两个张量“并列放置”，阶数相加，分量直接相乘（不求和）：

$$\boxed{(\boldsymbol{A}\otimes\boldsymbol{B})^{i_1\cdots i_r k_1\cdots k_p}_{\ \ \ \ \ \ j_1\cdots j_s l_1\cdots l_q}=A^{i_1\cdots i_r}_{\ \ \ \ \ j_1\cdots j_s}\,B^{k_1\cdots k_p}_{\ \ \ \ \ l_1\cdots l_q}}$$

实体写法：$(\boldsymbol{a}\boldsymbol{b})\otimes(\boldsymbol{c}\boldsymbol{d})=\boldsymbol{a}\boldsymbol{b}\boldsymbol{c}\boldsymbol{d}$（四阶）。

| 例子 | 结果 | 阶 |
|---|---|---|
| $\lambda\otimes\mu$ | $\lambda\mu$ | 0 |
| $\boldsymbol{a}\otimes\boldsymbol{b}$ | $a^i b^j$ | 2 |
| $\boldsymbol{a}\otimes\boldsymbol{T}$ | $a^i T^{jk}$ | 3 |
| $\boldsymbol{T}\otimes\boldsymbol{S}$ | $T^{ij}S^{kl}$ | 4 |

性质：满足结合律、分配律，但**不满足交换律**（$\boldsymbol{a}\otimes\boldsymbol{b}\neq\boldsymbol{b}\otimes\boldsymbol{a}$，仅在同阶且对称等特殊情形下可交换）。

> **关键事实**：任意 $(r,s)$ 型张量都可以写成若干基并矢的线性组合，即若干个低阶张量之积的和。这就是“并矢是二阶张量的原子”的严格表述。

#### 5. 缩并（Contraction）——核心运算

**选一个上标和一个下标令其相等并按 Einstein 约定求和**，结果阶数**降 2**：

$$C^{ik}_{\ \ lm}=A^{ijk}_{\ \ \ lmj}\quad(\text{对 }j\text{ 缩并})$$

实体写法：对 $\boldsymbol{T}=T^{ij}\boldsymbol{g}_i\boldsymbol{g}_j$ 缩并得 $T^{ii}$（实际是 $T^i_{\ i}$）。

**为什么必须一上一下？** 因为只有这样变换时的雅可比因子才会配对成 $\dfrac{\partial x'^i}{\partial x^k}\dfrac{\partial x^k}{\partial x'^j}=\delta^i_j$，从而真正消掉。$T^{ii}$（两个上标求和）**一般不是张量**（除非在正交变换范围内）。

**特例**：
- 二阶混合张量缩并 → **迹**（标量）：$\mathrm{tr}\,\boldsymbol{T}=T^i_{\ i}$
- 矢量与对偶矢量缩并 → 标量：$a^i b_i=\boldsymbol{a}\cdot\boldsymbol{b}$
- 完全缩并（所有指标都配对）→ **标量不变量**

缩并是产生一切不变量的机器。

#### 6. 内积（点积）= 张量积 + 一次缩并

把两个张量先并乘，再缩并一对**邻接**的指标：

$$(\boldsymbol{A}\cdot\boldsymbol{B})^{i\ \ k}_{\ j}=A^{im}_{\ \ j}B_{m}^{\ k}\quad\Longleftrightarrow\quad (\boldsymbol{A}\cdot\boldsymbol{B})^i_{\ j}=A^{ik}B_{kj}$$

| 情形 | 结果 | 说明 |
|---|---|---|
| $\boldsymbol{a}\cdot\boldsymbol{b}=a^ib_i$ | 标量 | 就是缩并 |
| $\boldsymbol{T}\cdot\boldsymbol{a}$ | 矢量 | 二阶张量作用于矢量（线性映射） |
| $\boldsymbol{a}\cdot\boldsymbol{T}$ | 矢量 | 左作用，与右作用不同（除非 $\boldsymbol{T}$ 对称） |
| $\boldsymbol{A}\cdot\boldsymbol{B}$ | 二阶 | 分量形式即**矩阵乘法** |
| $\boldsymbol{A}\cdot\boldsymbol{B}\cdot\boldsymbol{C}$ | 二阶 | 结合律成立 |

> **矩阵乘法的本质**：$(AB)^i_{\ j}=A^i_{\ k}B^k_{\ j}$ —— 矩阵乘法不是人为规定，而是“张量点积在基底下的分量表现”。这也解释了为什么矩阵乘法不可交换：因为张量点积不可交换。

#### 7. 双点积（Double contraction）

缩并**两对**指标，结果为标量。**有两种常用定义，必须事先确认**：

| 名称 | 定义（并矢基元） | 分量式 |
|---|---|---|
| **并联式**（colon，常用） | $(\boldsymbol{a}\boldsymbol{b}):(\boldsymbol{c}\boldsymbol{d})=(\boldsymbol{a}\cdot\boldsymbol{c})(\boldsymbol{b}\cdot\boldsymbol{d})$ | $\boldsymbol{A}:\boldsymbol{B}=A^{ij}B_{ij}$ |
| **串联式** | $(\boldsymbol{a}\boldsymbol{b})\cdot\cdot(\boldsymbol{c}\boldsymbol{d})=(\boldsymbol{b}\cdot\boldsymbol{c})(\boldsymbol{a}\cdot\boldsymbol{d})$ | $A^{ij}B_{ji}=\mathrm{tr}(\boldsymbol{A}\boldsymbol{B})$ |

**重要**：若至少有一个张量对称，则两者相等（$B_{ij}=B_{ji}$）。弹性力学应变能 $W=\tfrac12\boldsymbol{\sigma}:\boldsymbol{\varepsilon}$ 用的是并联式。

性质：$\boldsymbol{A}:\boldsymbol{B}=\boldsymbol{B}:\boldsymbol{A}$（并联式下），且**对称张量与反对称张量的双点积恒为零**：
$$S^{ij}W_{ij}=-S^{ji}W_{ji}=-S^{ij}W_{ij}\ \Rightarrow\ S^{ij}W_{ij}=0$$
这个结论在连续介质力学中极常用（例如应力功率中球部分与旋率部分解耦）。

#### 8. 转置

对调指定的两个**同类型**指标的位置：

$$(\boldsymbol{T}^{\mathsf T})^{ij}=T^{ji},\qquad (\boldsymbol{T}^{\mathsf T})^i_{\ j}=T_j^{\ i}\ (\text{需先用 }g\text{ 升降})$$

实体写法：$(\boldsymbol{a}\boldsymbol{b})^{\mathsf T}=\boldsymbol{b}\boldsymbol{a}$。

性质：$(\boldsymbol{A}\cdot\boldsymbol{B})^{\mathsf T}=\boldsymbol{B}^{\mathsf T}\cdot\boldsymbol{A}^{\mathsf T}$；$(\boldsymbol{A}^{\mathsf T})^{\mathsf T}=\boldsymbol{A}$。

由此导出：
- **对称**：$\boldsymbol{T}^{\mathsf T}=\boldsymbol{T}$（$T^{ij}=T^{ji}$），独立分量 6 个
- **反对称**：$\boldsymbol{T}^{\mathsf T}=-\boldsymbol{T}$（$T^{ij}=-T^{ji}$），独立分量 3 个，对角元必为 0
- **唯一分解**：$\displaystyle\boldsymbol{T}=\underbrace{\tfrac12(\boldsymbol{T}+\boldsymbol{T}^{\mathsf T})}_{\boldsymbol{T}_{(s)}}+\underbrace{\tfrac12(\boldsymbol{T}-\boldsymbol{T}^{\mathsf T})}_{\boldsymbol{T}_{(a)}}$

对称性是张量自身属性，与坐标系无关（因为转置与坐标变换可交换）。

#### 9. 对称化与反对称化

对一组同类型指标做**全体置换取平均**：

$$A_{(ij)}=\tfrac12(A_{ij}+A_{ji})\quad\text{（圆括号 = 对称化）}$$
$$A_{[ij]}=\tfrac12(A_{ij}-A_{ji})\quad\text{（方括号 = 反对称化）}$$

三指标情形（共 $3!=6$ 项）：
$$A_{(ijk)}=\tfrac16(A_{ijk}+A_{jki}+A_{kij}+A_{ikj}+A_{jik}+A_{kji})$$

性质：
- 任意张量 = 对称部分 + 反对称部分（对任一对指标都成立）
- 对称化后再反对称化 = 0
- 对称张量与任意张量双点积 = 该张量对称部分的双点积：$S^{ij}A_{ij}=S^{ij}A_{(ij)}$

---

### 三、二阶张量的专属运算（工程中最常用）

二阶张量 $\boldsymbol{T}$ 可视作**线性算子** $\boldsymbol{v}\mapsto\boldsymbol{T}\cdot\boldsymbol{v}$，因此继承了一整套线性代数运算。

#### 1. 幂与多项式

$$\boldsymbol{T}^2=\boldsymbol{T}\cdot\boldsymbol{T},\quad \boldsymbol{T}^n=\underbrace{\boldsymbol{T}\cdots\boldsymbol{T}}_{n},\quad f(\boldsymbol{T})=c_0\boldsymbol{I}+c_1\boldsymbol{T}+c_2\boldsymbol{T}^2+\cdots$$

分量：$(\boldsymbol{T}^2)^i_{\ j}=T^i_{\ k}T^k_{\ j}$。注意 $\boldsymbol{T}^2$ 的指标位置要求 $\boldsymbol{T}$ 为混合型或借助度量张量。

#### 2. 迹（Trace）

$$\mathrm{tr}\,\boldsymbol{T}=T^i_{\ i}=g_{ij}T^{ij}=g^{ij}T_{ij}$$

性质：$\mathrm{tr}(\boldsymbol{A}\cdot\boldsymbol{B})=\mathrm{tr}(\boldsymbol{B}\cdot\boldsymbol{A})$；$\mathrm{tr}(\boldsymbol{A}^{\mathsf T})=\mathrm{tr}\,\boldsymbol{A}$；迹是**标量不变量**。

#### 3. 球量–偏量分解

$$\boldsymbol{T}=\underbrace{\tfrac13(\mathrm{tr}\boldsymbol{T})\boldsymbol{I}}_{\text{球张量（静水部分）}}+\underbrace{\left(\boldsymbol{T}-\tfrac13(\mathrm{tr}\boldsymbol{T})\boldsymbol{I}\right)}_{\text{偏张量 }\boldsymbol{T}',\ \mathrm{tr}\,\boldsymbol{T}'=0}$$

力学意义：应力张量的球部分引起体积变化，偏部分引起形状畸变（屈服由偏应力决定，如 von Mises 准则）。

#### 4. 行列式与逆

行列式（用置换张量定义，适用于混合张量）：

$$\det\boldsymbol{T}=\frac{1}{6}\,\varepsilon_{ijk}\varepsilon^{pqr}T^i_{\ p}T^j_{\ q}T^k_{\ r}$$

逆 $\boldsymbol{T}^{-1}$ 满足 $\boldsymbol{T}\cdot\boldsymbol{T}^{-1}=\boldsymbol{T}^{-1}\cdot\boldsymbol{T}=\boldsymbol{I}$，存在当且仅当 $\det\boldsymbol{T}\neq 0$。

伴随（adjugate）与 Cayley–Hamilton 定理：

$$\boldsymbol{T}^3-I_1\boldsymbol{T}^2+I_2\boldsymbol{T}-I_3\boldsymbol{I}=\boldsymbol{0}$$

其中 $I_1,I_2,I_3$ 为三个主不变量。由此可得逆的显式：

$$\boldsymbol{T}^{-1}=\frac{1}{I_3}\left(\boldsymbol{T}^2-I_1\boldsymbol{T}+I_2\boldsymbol{I}\right)$$

这在超弹性本构（如 Neo-Hookean 材料的 $\boldsymbol{B}^{-1}$）中非常实用。

#### 5. 主值问题（特征值问题）

求 $\lambda$ 与非零 $\boldsymbol{n}$ 使 $\boldsymbol{T}\cdot\boldsymbol{n}=\lambda\boldsymbol{n}$，即 $(T^i_{\ j}-\lambda\delta^i_j)n^j=0$。

特征方程：$\lambda^3-I_1\lambda^2+I_2\lambda-I_3=0$

$$I_1=\mathrm{tr}\boldsymbol{T},\qquad I_2=\tfrac12\left[(\mathrm{tr}\boldsymbol{T})^2-\mathrm{tr}(\boldsymbol{T}^2)\right],\qquad I_3=\det\boldsymbol{T}$$

**主轴定理**：实对称二阶张量必有三个实主值及三互相正交的主方向，在主坐标系下 $[\boldsymbol{T}]=\mathrm{diag}(\lambda_1,\lambda_2,\lambda_3)$，此时：

$$\boldsymbol{T}=\lambda_1\boldsymbol{n}_1\boldsymbol{n}_1+\lambda_2\boldsymbol{n}_2\boldsymbol{n}_2+\lambda_3\boldsymbol{n}_3\boldsymbol{n}_3\quad(\text{谱分解})$$

$I_1=\lambda_1+\lambda_2+\lambda_3$，$I_2=\lambda_1\lambda_2+\lambda_2\lambda_3+\lambda_3\lambda_1$，$I_3=\lambda_1\lambda_2\lambda_3$。

#### 6. 指数与对数（变形梯度极分解等）

$$\exp(\boldsymbol{T})=\sum_{n=0}^\infty\frac{1}{n!}\boldsymbol{T}^n,\qquad \text{在主系下 }[\exp\boldsymbol{T}]=\mathrm{diag}(e^{\lambda_1},e^{\lambda_2},e^{\lambda_3})$$

用于 Hencky 应变 $\boldsymbol{E}=\tfrac12\ln\boldsymbol{C}$、旋转张量 $\boldsymbol{R}=\exp(\boldsymbol{\Omega})$ 等。

---

### 四、含置换张量的运算（"叉积类"运算）

凡涉及叉积、旋度、法向面元的运算，都要通过 $\varepsilon_{ijk}$ 转化为张量语言。注意 $\varepsilon_{ijk}$ 是**赝张量**，故这类运算的结果赝性要按规则判定。

#### 基本恒等式

$$\varepsilon_{ijk}\varepsilon^{pqr}=\begin{vmatrix}\delta_i^p & \delta_i^q & \delta_i^r\\ \delta_j^p & \delta_j^q & \delta_j^r\\ \delta_k^p & \delta_k^q & \delta_k^r\end{vmatrix}\quad\Longrightarrow\quad \varepsilon_{ijk}\varepsilon^{ijm}=2\delta_k^m,\quad \varepsilon_{ijk}\varepsilon^{ijn}=2\delta_k^n\ (\text{约化})$$

常用的收缩：
$$\varepsilon_{ijk}\varepsilon^{imn}=\delta_j^m\delta_k^n-\delta_j^n\delta_k^m$$

#### 常见运算的张量写法

| 矢量分析式 | 张量/指标式 | 结果类型 |
|---|---|---|
| $\boldsymbol{a}\times\boldsymbol{b}$ | $\varepsilon_{ijk}a^jb^k$ | 赝矢量 |
| $\boldsymbol{a}\cdot(\boldsymbol{b}\times\boldsymbol{c})$ | $\varepsilon_{ijk}a^ib^jc^k$ | 赝标量（有向体积） |
| $\boldsymbol{\nabla}\times\boldsymbol{v}$ | $\varepsilon^{ijk}\nabla_j v_k$ | 赝矢量 |
| $\boldsymbol{n}\times\boldsymbol{T}$ | $\varepsilon_{ijk}n^j T^{kl}$… | 视阶而定 |
| $(\boldsymbol{a}\times\boldsymbol{b})\times\boldsymbol{c}$ | 用 $\varepsilon\varepsilon$ 收缩化为点积 | 矢量 |

**矢量三重积公式的张量推导**（展示威力）：
$$(\boldsymbol{a}\times\boldsymbol{b})\times\boldsymbol{c}\ \leadsto\ \varepsilon^{ipq}\varepsilon_{pjk}a^jb^kc_q=(\delta^i_j\delta^q_k-\delta^i_k\delta^q_j)a^jb^kc_q=a^i(b\cdot c)-b^i(a\cdot c)$$
即 $(\boldsymbol{a}\times\boldsymbol{b})\times\boldsymbol{c}=(\boldsymbol{a}\cdot\boldsymbol{c})\boldsymbol{b}-(\boldsymbol{b}\cdot\boldsymbol{c})\boldsymbol{a}$，无需死记。

---

### 五、指标记法的操作纪律（最容易出错的地方）

| 规则 | 正确 | 错误 |
|---|---|---|
| 哑指标只出现两次 | $A^{ik}B_{kj}$ | $A^{ii}B_{ij}$（$i$ 出现三次，无意义） |
| 自由指标左右一致 | $A^{ik}B_{kj}=C^i_{\ j}$ | $A^{ik}B_{kj}=C_{ij}$ |
| 缩并必须一上一下 | $A^i_{\ i}$ | $A^{ii}$（非正交变换下非张量） |
| 哑指标可随意改名 | $A^{ik}B_{kj}=A^{im}B_{mj}$ | 改名时与已有自由指标冲突 |
| 不能对含坐标依赖的量随意交换求导与指标 | — | $\partial_i A^{ij}\neq A^{ij}_{\ \ ,i}$ 在曲线系中需用协变导数 |
| $\delta^i_j$ 可替换指标 | $\delta^i_k A^{kj}=A^{ij}$ | $\delta_{ik}A^{kj}$（需先确认度规） |

**改名示例**（避免冲突）：$A^{ik}B_{kj}C^{jl}$ 中对 $j$ 求和没问题；但若写成 $A^{ij}B_{jk}C^{kj}$，则 $j,k$ 各出现三次 → 非法，应改为 $A^{im}B_{mn}C^{nl}$。

---

### 六、运算的不变性与"物理分量"陷阱

**不变性**：上述所有运算的定义都与坐标系无关。例如 $\boldsymbol{A}:\boldsymbol{B}$ 的值在任何坐标系下相同，尽管分量 $A^{ij}B_{ij}$ 的数值组合看起来不同。这提供了**自检手段**——换个坐标系重算，结果应一致。

**陷阱**：工程上用的**物理分量**（单位基下的数值）不参与标准张量代数。设 Lamé 常数 $H_i=\sqrt{g_{ii}}$（无求和），则：

$$A_{(ij)}^{\text{phys}}=\frac{A_{ij}}{H_i H_j},\qquad (\boldsymbol{A}\cdot\boldsymbol{B})_{(ik)}^{\text{phys}}\neq \sum_j A_{(ij)}^{\text{phys}}B_{(jk)}^{\text{phys}}\ \text{（一般）}$$

即：**物理分量之间不能直接套用矩阵乘法**，必须先转回张量分量，运算后再转回物理分量。柱坐标下 $r$、$1/r$ 因子的混乱几乎都源于此。

---

### 七、运算总表

| 运算 | 符号 | 输入阶 $(r,s)$ | 输出阶 | 指标操作 |
|---|---|---|---|---|
| 相等 | $=$ | 同型 | — | 对应分量相等 |
| 加减 | $\pm$ | $(r,s),(r,s)$ | $(r,s)$ | 对应分量相加减 |
| 数乘 | $\lambda\boldsymbol{T}$ | $(r,s)$ | $(r,s)$ | 全分量乘 $\lambda$ |
| 张量积 | $\otimes$ | $(r,s),(p,q)$ | $(r+p,s+q)$ | 分量直乘，不求和 |
| 缩并 | — | $(r,s)$ | $(r-1,s-1)$ | 一对上下标取同求和 |
| 点积 | $\cdot$ | $(r,s),(p,q)$ | $(r+p-1,s+q-1)$ | 并乘后缩并一对邻接指标 |
| 双点积 | $:$ | $(2,0)/(0,2)$ | $(0,0)$ | 缩并两对指标 |
| 转置 | $^{\mathsf T}$ | $(r,s)$ | $(r,s)$ | 对调两指标 |
| 对称化/反对称化 | $(\ ),[\ ]$ | $(r,s)$ | $(r,s)$ | 置换取平均 |
| 迹 | $\mathrm{tr}$ | $(1,1)$ | $(0,0)$ | $T^i_{\ i}$ |
| 行列式 | $\det$ | $(1,1)$ | $(0,0)$ | $\varepsilon\varepsilon TTT/6$ |
| 逆 | $^{-1}$ | $(1,1)$ | $(1,1)$ | $\boldsymbol{T}\boldsymbol{T}^{-1}=\boldsymbol{I}$ |
| 谱分解 | — | 对称 $(1,1)$ | — | $\sum\lambda_i\boldsymbol{n}_i\boldsymbol{n}_i$ |
| 叉积型 | $\varepsilon$ | 依情形 | 依情形 | 乘 $\varepsilon_{ijk}$ 后缩并 |

---

### 八、常见误区速查

1. **"$A^{ii}$ 是迹"** ❌ —— 只有 $A^i_{\ i}$（一上一下）才是与坐标无关的迹。
2. **"张量乘法都可交换"** ❌ —— 并积、点积均不可交换；只有数乘、双点积（并联式）、对称张量间某些运算可交换。
3. **"对称性要看具体坐标系"** ❌ —— 对称/反对称是张量自身属性，一组基下成立则处处成立。
4. **"两个赝张量相乘仍是赝张量"** ❌ —— 赝×赝=真（$\mathrm{sgn}(J)^2=1$）。$\boldsymbol{B}\boldsymbol{B}$、$\boldsymbol{\omega}\boldsymbol{\omega}$ 都是真二阶张量。
5. **"行列式总是标量"** ❌ —— $(1,1)$ 型张量的行列式是真标量；$(0,2)$ 型（如 $g_{ij}$）的行列式 $g$ 是权 2 的标量密度。
6. **" Christoffel 符号能参与张量运算"** ❌ —— $\Gamma^i_{jk}$ 不是张量，代入张量恒等式会破坏协变性。
7. **"物理分量可直接矩阵相乘"** ❌ —— 见第六节，曲线系中必须先回到张量分量。

---

### 九、一句话主线

> **张量代数只有三个基本动作：并起来（$\otimes$）、缩掉一对（缩并）、调换位置（转置/对称化）。** 点积、双点积、迹、行列式、叉积、谱分解……全都是这三个动作的组合。而这一切的合法性，都由"结果仍是张量"这条封闭性担保。


