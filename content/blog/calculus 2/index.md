---
title: "微积分（下）"
description: "介绍微积分的基础知识"
summary: "介绍微积分的基础知识"
date: 2026-09-08
lastmod: 2026-09-08
draft: false
weight: 50
categories: ["数学"]
tags: ["微积分"]
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

### 第6章 向量代数与空间解析几何

#### 6.1 空间直角坐标系 (Space Rectangular Coordinate System)
这是研究空间几何的基础框架。
*   **空间直角坐标系的建立**：在空间中取一定点 $O$ 作为原点，过 $O$ 点作三条两两垂直的数轴，分别称为 $x$ 轴（横轴）、$y$ 轴（纵轴）、$z$ 轴（竖轴）。它们符合右手定则。这三个轴确定了三个坐标面：$xOy$ 面、$yOz$ 面、$zOx$ 面，并将空间分为八个卦限。
*   **空间点的坐标**：空间中任意一点 $M$ 都可以用一个有序三元组 $(x, y, z)$ 来唯一确定，称为点 $M$ 的坐标。
*   **空间两点间的距离公式**：设空间两点 $M_1(x_1, y_1, z_1)$ 和 $M_2(x_2, y_2, z_2)$，它们之间的距离 $d$ 为：
    $$d = |M_1M_2| = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$$

#### 6.2 向量及其线性运算 (Vectors and Their Linear Operations)
引入向量工具，用代数方法处理几何中的方向和大小问题。
*   **向量的概念**：既有大小又有方向的量称为向量（或矢量），通常用带箭头的字母 $\vec{a}$ 或有向线段 $\overrightarrow{AB}$ 表示。向量的大小称为模，记作 $|\vec{a}|$。模为1的向量叫单位向量，模为0的向量叫零向量 $\vec{0}$。
*   **向量的线性运算**：
    *   **加法**：遵循平行四边形法则或三角形法则。满足交换律和结合律。
    *   **减法**：$\vec{a} - \vec{b} = \vec{a} + (-\vec{b})$。
    *   **数乘**：实数 $\lambda$ 与向量 $\vec{a}$ 的乘积 $\lambda\vec{a}$ 是一个向量。其模为 $|\lambda||\vec{a}|$，方向当 $\lambda > 0$ 时与 $\vec{a}$ 相同，$\lambda < 0$ 时相反。
*   **向量的坐标表示**：在空间直角坐标系中，以原点为起点的向量 $\overrightarrow{OM} = \{x, y, z\} = x\vec{i} + y\vec{j} + z\vec{k}$，其中 $\vec{i}, \vec{j}, \vec{k}$ 分别是 $x, y, z$ 轴上的单位向量。向量的线性运算可以转化为对应坐标的代数运算。
*   **向量共线（平行）的条件**：$\vec{a} // \vec{b} (\vec{b} \neq \vec{0}) \iff \vec{a} = \lambda\vec{b}$。在坐标下表现为对应坐标成比例。

#### 6.3 向量的乘积 (Products of Vectors)
向量之间有两种重要的乘法运算，它们在物理和几何中有广泛应用。
*   **数量积（点积、内积）**：
    *   定义：$\vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos\theta$ （$\theta$ 为两向量夹角）。结果是一个**标量（实数）**。
    *   坐标表示：若 $\vec{a}=\{x_1, y_1, z_1\}, \vec{b}=\{x_2, y_2, z_2\}$，则 $\vec{a} \cdot \vec{b} = x_1x_2 + y_1y_2 + z_1z_2$。
    *   应用：求向量夹角、判断向量垂直（$\vec{a} \perp \vec{b} \iff \vec{a} \cdot \vec{b} = 0$）、求投影。
*   **向量积（叉积、外积）**：
    *   定义：$\vec{a} \times \vec{b}$ 是一个**向量**。其模 $|\vec{a} \times \vec{b}| = |\vec{a}| |\vec{b}| \sin\theta$（几何意义是以 $\vec{a}, \vec{b}$ 为邻边的平行四边形面积）。其方向垂直于 $\vec{a}$ 和 $\vec{b}$ 所在的平面，且 $\vec{a}, \vec{b}, \vec{a} \times \vec{b}$ 符合右手定则。
    *   坐标表示：利用行列式计算 $\vec{a} \times \vec{b} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ x_1 & y_1 & z_1 \\ x_2 & y_2 & z_2 \end{vmatrix}$。
    *   应用：求同时垂直于两个向量的法向量、判断向量平行（$\vec{a} // \vec{b} \iff \vec{a} \times \vec{b} = \vec{0}$）。
*   **混合积**：$(\vec{a}, \vec{b}, \vec{c}) = (\vec{a} \times \vec{b}) \cdot \vec{c}$。结果是一个标量，其绝对值等于以这三个向量为棱的平行六面体的体积。用于判断三向量是否共面。

#### 6.4 平面的方程 (Equations of a Plane)
利用向量工具建立空间平面的代数表达式。
*   **点法式方程**：已知平面上一点 $M_0(x_0, y_0, z_0)$ 和平面的法向量 $\vec{n} = \{A, B, C\}$，则平面方程为：
    $$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$$
*   **一般方程**：任何平面都可以表示为三元一次方程：
    $$Ax + By + Cz + D = 0$$
    其中 $\vec{n} = \{A, B, C\}$ 就是该平面的法向量。
*   **截距式方程**：若平面在 $x, y, z$ 轴上的截距分别为 $a, b, c$ ($abc \neq 0$)，则方程为 $\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1$。
*   **两平面的夹角**：通过它们的法向量的夹角来求。设两平面法向量为 $\vec{n}_1, \vec{n}_2$，夹角 $\theta$ 满足 $\cos\theta = \frac{|\vec{n}_1 \cdot \vec{n}_2|}{|\vec{n}_1||\vec{n}_2|}$。两平面垂直 $\iff \vec{n}_1 \cdot \vec{n}_2 = 0$；平行 $\iff \vec{n}_1 // \vec{n}_2$。
*   **点到平面的距离公式**：点 $P(x_0, y_0, z_0)$ 到平面 $Ax+By+Cz+D=0$ 的距离 $d = \frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$。

#### 6.5 空间直线的方程 (Equations of a Space Line)
空间直线通常看作是两个平面的交线，或者由一点和方向向量确定。
*   **一般式方程**：作为两平面的交线，由两个平面方程联立而成：
    $$\begin{cases} A_1x + B_1y + C_1z + D_1 = 0 \\ A_2x + B_2y + C_2z + D_2 = 0 \end{cases}$$
*   **对称式方程（点向式方程）**：已知直线上一点 $M_0(x_0, y_0, z_0)$ 和直线的方向向量 $\vec{s} = \{m, n, p\}$，则方程为：
    $$\frac{x - x_0}{m} = \frac{y - y_0}{n} = \frac{z - z_0}{p}$$
*   **参数式方程**：令上述比值为 $t$，可得 $x=x_0+mt, y=y_0+nt, z=z_0+pt$。
*   **两直线的夹角**：通过它们的方向向量的夹角来求。
*   **直线与平面的夹角**：直线的方向向量 $\vec{s}$ 与平面的法向量 $\vec{n}$ 的夹角的余角。$\sin\varphi = \frac{|\vec{s} \cdot \vec{n}|}{|\vec{s}||\vec{n}|}$。直线与平面平行 $\iff \vec{s} \perp \vec{n}$；垂直 $\iff \vec{s} // \vec{n}$。

#### 6.6 空间曲面与空间曲线 (Space Surfaces and Space Curves)
将方程与几何图形建立更广泛的联系。
*   **空间曲面方程**：如果曲面 $S$ 上任意一点的坐标都满足方程 $F(x, y, z) = 0$，而不在曲面上的点的坐标都不满足该方程，则称此方程为曲面 $S$ 的方程。
    *   **旋转曲面**：一条平面曲线绕该平面内的一条定直线旋转一周所生成的曲面。例如，$yOz$ 面上的曲线 $f(y, z)=0$ 绕 $z$ 轴旋转，方程变为 $f(\pm\sqrt{x^2+y^2}, z)=0$。
    *   **柱面**：平行于定直线并沿定曲线移动的直线形成的轨迹。例如 $x^2+y^2=R^2$ 在空间中表示母线平行于 $z$ 轴的圆柱面。
*   **空间曲线方程**：
    *   **一般式**：作为两曲面的交线，$\begin{cases} F(x, y, z) = 0 \\ G(x, y, z) = 0 \end{cases}$。
    *   **参数式**：$\begin{cases} x = x(t) \\ y = y(t) \\ z = z(t) \end{cases}$。
*   **空间曲线在坐标面上的投影**：通过消去一个变量，得到投影柱面方程，再与相应的坐标面方程联立，即可得到投影曲线。这在计算重积分时非常重要。

#### 6.7 二次曲面 (Quadric Surfaces)
由三元二次方程 $Ax^2+By^2+Cz^2+Dxy+Eyz+Fzx+Gx+Hy+Iz+J=0$ 所表示的曲面。主要研究以下几种标准型：
*   **椭球面**：$\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$
*   **单叶双曲面**：$\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1$ （形状像冷却塔）
*   **双叶双曲面**：$\frac{x^2}{a^2} - \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1$
*   **椭圆锥面**：$\frac{x^2}{a^2} + \frac{y^2}{b^2} = z^2$
*   **椭圆抛物面**：$\frac{x^2}{a^2} + \frac{y^2}{b^2} = z$ （形状像碗）
*   **双曲抛物面（马鞍面）**：$\frac{x^2}{a^2} - \frac{y^2}{b^2} = z$
*   **学习方法**：通常使用**截痕法**（用平行于坐标面的平面去截曲面，观察截线的形状）来认识和绘制这些曲面的草图。

---

### 第7章 多元函数微分学

#### 7.1 多元函数的极限与连续 (Limits and Continuity of Multivariable Functions)
这是多元微分学的逻辑起点，主要研究二元函数 $z = f(x, y)$。
*   **多元函数的概念**：设 $D$ 是平面上的一个点集，如果对于 $D$ 中的每一个点 $(x, y)$，按照一定的法则 $f$，都有唯一确定的实数 $z$ 与之对应，则称 $z$ 是 $(x, y)$ 的二元函数，记作 $z = f(x, y)$。$D$ 称为定义域。其几何意义是空间中的一张曲面。
*   **二元函数的极限**：当点 $P(x, y)$ 以**任意方式**趋近于点 $P_0(x_0, y_0)$ 时，函数 $f(x, y)$ 无限接近于常数 $A$，则称 $A$ 为极限，记作 $\lim_{(x,y) \to (x_0,y_0)} f(x,y) = A$。
    *   **核心难点**：与一元函数不同，二元函数趋近于一点有无数条路径（直线、抛物线等）。如果沿不同路径趋近得到的极限值不同，或者某条路径下极限不存在，则**原极限不存在**。这是证明极限不存在的常用方法。
*   **二元函数的连续性**：如果 $\lim_{(x,y) \to (x_0,y_0)} f(x,y) = f(x_0, y_0)$，则称函数在点 $(x_0, y_0)$ 连续。一切多元初等函数在其定义区域内都是连续的。

#### 7.2 偏导数 (Partial Derivatives)
研究多元函数随某一个自变量变化时的变化率。
*   **偏导数的定义**：在求 $f(x, y)$ 对 $x$ 的偏导数时，把 $y$ 看作常数，按一元函数求导法则对 $x$ 求导，记作 $\frac{\partial z}{\partial x}$ 或 $f_x(x,y)$。同理可求对 $y$ 的偏导数 $\frac{\partial z}{\partial y}$。
*   **高阶偏导数**：偏导数仍然是 $x, y$ 的函数，可以继续求导，得到二阶偏导数：$f_{xx}, f_{xy}, f_{yx}, f_{yy}$。其中 $f_{xy}$ 和 $f_{yx}$ 称为混合偏导数。
*   **重要定理**：如果混合偏导数 $f_{xy}$ 和 $f_{yx}$ 在某区域内连续，则它们在该区域内相等，即 $f_{xy} = f_{yx}$（与求导顺序无关）。
*   **注意**：在一元函数中，可导必连续；但在多元函数中，**即使所有偏导数都存在，函数也不一定连续**。

#### 7.3 全微分 (Total Differential)
用线性函数来近似代替多元函数的增量。
*   **全增量的线性主部**：如果函数 $z=f(x,y)$ 的全增量 $\Delta z = f(x+\Delta x, y+\Delta y) - f(x,y)$ 可以表示为 $\Delta z = A\Delta x + B\Delta y + o(\rho)$ （其中 $\rho = \sqrt{(\Delta x)^2+(\Delta y)^2}$），则称函数在该点**可微**，$A\Delta x + B\Delta y$ 称为全微分，记作 $dz = A dx + B dy$。
*   **可微的必要条件**：若可微，则偏导数必定存在，且 $A = \frac{\partial z}{\partial x}, B = \frac{\partial z}{\partial y}$。因此全微分公式为 $dz = \frac{\partial z}{\partial x}dx + \frac{\partial z}{\partial y}dy$。
*   **可微的充分条件**：如果偏导数 $\frac{\partial z}{\partial x}, \frac{\partial z}{\partial y}$ 在某点**连续**，则函数在该点可微。
*   **关系梳理**：可微 $\implies$ 连续；可微 $\implies$ 偏导数存在。但反之均不成立。
*   **应用**：利用全微分进行近似计算，即 $\Delta z \approx dz$。

#### 7.4 复合函数与隐函数的微分法 (Differentiation of Composite and Implicit Functions)
这是多元微分学中最具技巧性、也是计算量最大的一节。
*   **多元复合函数求导法则（链式法则）**：
    *   例如 $z = f(u, v), u = \varphi(x, y), v = \psi(x, y)$，则 $z$ 是 $x, y$ 的复合函数。
    *   求导公式：$\frac{\partial z}{\partial x} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial x}$。
    *   **核心技巧**：画出“变量关系树状图”，遵循“分路相加，连线相乘”的原则，不容易漏项。
*   **全微分形式不变性**：无论 $u, v$ 是自变量还是中间变量，全微分的形式 $dz = \frac{\partial z}{\partial u}du + \frac{\partial z}{\partial v}dv$ 始终保持不变。
*   **隐函数求导法则**：
    *   由方程 $F(x, y, z) = 0$ 确定的隐函数 $z = f(x, y)$。
    *   求导公式：$\frac{\partial z}{\partial x} = -\frac{F_x}{F_z}$，$\frac{\partial z}{\partial y} = -\frac{F_y}{F_z}$ （前提是 $F_z \neq 0$）。
    *   对于方程组确定的隐函数组，通常通过对方程两边同时求偏导，然后解线性方程组来求得偏导数。

#### 7.5 方向导数与梯度 (Directional Derivatives and Gradients)
偏导数只反映了函数沿坐标轴方向的变化率，而方向导数研究函数沿**任意指定方向**的变化率。
*   **方向导数**：函数 $z=f(x,y)$ 在点 $P$ 处沿方向 $\vec{l}$ （方向角为 $\alpha, \beta$）的方向导数为：
    $$\frac{\partial f}{\partial l} = \frac{\partial f}{\partial x}\cos\alpha + \frac{\partial f}{\partial y}\cos\beta$$
    （前提是函数在该点可微）。
*   **梯度 (Gradient)**：这是一个向量，记作 $\text{grad } f$ 或 $\nabla f$。
    $$\nabla f(x,y) = \left\{ \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right\} = \frac{\partial f}{\partial x}\vec{i} + \frac{\partial f}{\partial y}\vec{j}$$
*   **梯度的几何与物理意义**：
    1.  方向导数与梯度的关系：$\frac{\partial f}{\partial l} = \nabla f \cdot \vec{e}_l = |\nabla f| \cos\theta$ （$\vec{e}_l$ 是方向 $\vec{l}$ 的单位向量）。
    2.  函数在某点处，**沿梯度方向的方向导数最大**，最大值就是梯度的模 $|\nabla f|$；沿梯度反方向的方向导数最小。
    3.  梯度向量垂直于该点的等值线（或等值面），并指向函数值增加最快的方向。

#### 7.6 微分学在几何上的应用 (Geometric Applications of Differential Calculus)
将第6章的空间解析几何与本章的微分学结合起来。
*   **空间曲线的切线与法平面**：
    *   若曲线由参数方程 $x=x(t), y=y(t), z=z(t)$ 给出，在点 $t_0$ 处的**切向量**为 $\vec{T} = \{x'(t_0), y'(t_0), z'(t_0)\}$。由此可写出切线方程（对称式）和法平面方程（点法式）。
*   **空间曲面的切平面与法线**：
    *   若曲面由隐方程 $F(x, y, z) = 0$ 给出，在点 $M_0(x_0, y_0, z_0)$ 处的**法向量**就是该点的梯度：$\vec{n} = \nabla F|_{M_0} = \{F_x, F_y, F_z\}|_{M_0}$。
    *   由此可写出切平面方程：$F_x(x_0,y_0,z_0)(x-x_0) + F_y(x_0,y_0,z_0)(y-y_0) + F_z(x_0,y_0,z_0)(z-z_0) = 0$。以及法线方程。

#### *7.7 二元函数的泰勒公式 (Taylor's Formula for Binary Functions)
*(注：带星号通常表示选学内容)*
*   将一元函数的泰勒公式推广到二元函数。利用函数在某点 $(x_0, y_0)$ 的各阶偏导数，构造一个多项式来近似表示该函数在其邻域内的值。
*   一阶泰勒公式（线性近似）本质上就是全微分的近似表达。二阶泰勒公式在后续研究极值问题时非常有用。

#### 7.8 多元函数的极值 (Extrema of Multivariable Functions)
寻找多元函数的最大值和最小值，在工程优化中有巨大应用。
*   **无条件极值**：
    *   **必要条件**：若 $f(x,y)$ 在 $(x_0, y_0)$ 处取得极值且偏导数存在，则 $f_x(x_0, y_0) = 0, f_y(x_0, y_0) = 0$。满足此条件的点称为**驻点**。
    *   **充分条件**：设 $(x_0, y_0)$ 是驻点，记 $A = f_{xx}, B = f_{xy}, C = f_{yy}$，令判别式 $\Delta = AC - B^2$。
        *   若 $\Delta > 0$ 且 $A < 0$，则为极大值；
        *   若 $\Delta > 0$ 且 $A > 0$，则为极小值；
        *   若 $\Delta < 0$，则不是极值（是鞍点）；
        *   若 $\Delta = 0$，则无法判断，需用定义或其他方法。
*   **条件极值与拉格朗日乘数法**：
    *   求函数 $z = f(x, y)$ 在附加条件 $\varphi(x, y) = 0$ 下的极值。
    *   **拉格朗日乘数法**：构造拉格朗日函数 $L(x, y, \lambda) = f(x, y) + \lambda \varphi(x, y)$。分别对 $x, y, \lambda$ 求偏导并令其为0，解方程组得到的点即为可能的条件极值点。

---

### 第8章 重积分

#### 8.1 重积分的概念和性质 (Concepts and Properties of Multiple Integrals)
这是重积分的理论基础，其建立过程与一元定积分的“分割、近似、求和、取极限”思想完全一致。
*   **二重积分的概念**：设 $f(x, y)$ 是有界闭区域 $D$ 上的有界函数。将 $D$ 任意分成 $n$ 个小区域 $\Delta \sigma_i$，在每个小区域上任取一点 $(\xi_i, \eta_i)$，作乘积 $f(\xi_i, \eta_i)\Delta \sigma_i$ 并求和。当各小区域的最大直径趋于0时，如果该和式的极限存在，则称此极限为 $f(x, y)$ 在 $D$ 上的二重积分，记作：
    $$\iint_D f(x, y) d\sigma \quad \text{或} \quad \iint_D f(x, y) dx dy$$
    *   **几何意义**：当 $f(x, y) \ge 0$ 时，二重积分表示以 $D$ 为底，曲面 $z = f(x, y)$ 为顶的曲顶柱体的体积。
*   **三重积分的概念**：类似地，将空间闭区域 $\Omega$ 分割，求和取极限，记作 $\iiint_\Omega f(x, y, z) dv$ 或 $\iiint_\Omega f(x, y, z) dx dy dz$。
    *   **物理意义**：当 $f(x, y, z)$ 表示空间物体 $\Omega$ 在点 $(x, y, z)$ 处的密度时，三重积分表示该物体的总质量。
*   **重积分的性质**：与一元定积分高度相似，包括线性性质、对区域的可加性、保号性、估值定理、中值定理等。
    *   **重要推论**：若 $f(x,y) = 1$，则 $\iint_D 1 d\sigma = \sigma$ （区域 $D$ 的面积）；$\iiint_\Omega 1 dv = V$ （区域 $\Omega$ 的体积）。
    *   **对称性（奇偶性）**：这是计算重积分时极其重要的技巧。如果积分区域 $D$ 关于 $x$ 轴对称，且被积函数 $f(x,y)$ 是关于 $y$ 的奇函数，则积分为0；若是偶函数，则为对称部分积分的2倍。对 $y$ 轴、原点对称同理。三重积分也有类似的对称性。

#### 8.2 二重积分的计算 (Calculation of Double Integrals)
本章的重点和难点，核心方法是**将二重积分化为两次一元定积分（累次积分）**。
*   **在直角坐标系下计算**：
    *   **X-型区域**（穿针引线法：平行于y轴的直线穿过区域，先交下边界后交上边界）：先对 $y$ 积分，后对 $x$ 积分。
        $$\iint_D f(x,y) dx dy = \int_a^b dx \int_{\varphi_1(x)}^{\varphi_2(x)} f(x,y) dy$$
    *   **Y-型区域**（平行于x轴的直线穿过区域，先交左边界后交右边界）：先对 $x$ 积分，后对 $y$ 积分。
        $$\iint_D f(x,y) dx dy = \int_c^d dy \int_{\psi_1(y)}^{\psi_2(y)} f(x,y) dx$$
    *   **交换积分次序**：有时给定的积分次序很难算出（例如 $\int e^{x^2} dx$ 积不出来），需要通过画出积分区域 $D$ 的草图，将其从 X-型 转换为 Y-型（或反之），从而改变积分次序使计算变得可行。这是考试的常考点。
*   **在极坐标系下计算**：
    *   当积分区域 $D$ 是圆形、扇形、环形，或者被积函数含有 $x^2+y^2$ 时，使用极坐标往往更简便。
    *   **变量代换**：$x = r\cos\theta, y = r\sin\theta$。
    *   **面积元素的变化**：$dx dy$ 变为 $r dr d\theta$ （注意千万不要漏掉这个雅可比行列式带来的 **$r$**）。
    *   公式：$\iint_D f(x,y) dx dy = \iint_{D'} f(r\cos\theta, r\sin\theta) r dr d\theta = \int_\alpha^\beta d\theta \int_{r_1(\theta)}^{r_2(\theta)} f(r\cos\theta, r\sin\theta) r dr$。

#### 8.3 三重积分的计算 (Calculation of Triple Integrals)
将二重积分的计算方法推广到三维空间。
*   **在直角坐标系下计算**：
    *   **“先一后二”法（投影法 / 截面法）**：先将空间区域 $\Omega$ 投影到 $xOy$ 面上得到区域 $D_{xy}$。对于 $D_{xy}$ 上任意一点 $(x,y)$，用平行于 $z$ 轴的直线穿过 $\Omega$，确定 $z$ 的下限 $z_1(x,y)$ 和上限 $z_2(x,y)$。
        $$\iiint_\Omega f(x,y,z) dv = \iint_{D_{xy}} dx dy \int_{z_1(x,y)}^{z_2(x,y)} f(x,y,z) dz$$
        这就把三重积分化为了一个二重积分和一个定积分。
    *   **“先二后一”法（切片法 / 截面法）**：先用平行于 $xOy$ 面的平面去截 $\Omega$，得到截面 $D_z$。先在这个截面上算二重积分，然后再沿 $z$ 轴积分。
        $$\iiint_\Omega f(x,y,z) dv = \int_{c_1}^{c_2} dz \iint_{D_z} f(x,y,z) dx dy$$
        当被积函数仅为 $z$ 的函数，或者截面 $D_z$ 的面积很容易求出时，此法非常高效。
*   **在柱面坐标系下计算**：
    *   相当于在 $xOy$ 面上用极坐标，加上 $z$ 轴。$x=r\cos\theta, y=r\sin\theta, z=z$。
    *   体积元素 $dv = r dr d\theta dz$。适用于积分区域是圆柱体、圆锥体或旋转抛物面围成的区域。
*   **在球面坐标系下计算**：
    *   变量代换：$x = r\sin\varphi\cos\theta, y = r\sin\varphi\sin\theta, z = r\cos\varphi$。（注意不同教材对 $\varphi$ 和 $\theta$ 的定义可能互换，通常 $\varphi$ 是与 $z$ 轴正向的夹角，范围 $[0, \pi]$）。
    *   体积元素 $dv = r^2 \sin\varphi dr d\varphi d\theta$ （注意不要漏掉 **$r^2 \sin\varphi$**）。
    *   适用于积分区域是球体、球锥体，或被积函数含有 $x^2+y^2+z^2$ 的情况。

#### 8.4 重积分的应用 (Applications of Multiple Integrals)
利用重积分的物理和几何意义解决实际问题。
*   **几何应用**：
    *   **平面图形的面积**：$A = \iint_D 1 d\sigma$。
    *   **空间曲面的面积**：若曲面方程为 $z = f(x,y)$，其在 $xOy$ 面上的投影为 $D$，则曲面面积 $S = \iint_D \sqrt{1 + (\frac{\partial z}{\partial x})^2 + (\frac{\partial z}{\partial y})^2} dx dy$。
    *   **空间立体的体积**：$V = \iiint_\Omega 1 dv$，或者利用二重积分求曲顶柱体体积 $V = \iint_D |f(x,y)| d\sigma$。
*   **物理应用**（假设密度函数为 $\rho$）：
    *   **质量**：平面薄片质量 $M = \iint_D \rho(x,y) d\sigma$；空间物体质量 $M = \iiint_\Omega \rho(x,y,z) dv$。
    *   **质心（重心）坐标**：例如空间物体的质心横坐标 $\bar{x} = \frac{1}{M} \iiint_\Omega x \rho(x,y,z) dv$。若密度均匀（$\rho$ 为常数），则称为形心。
    *   **转动惯量**：例如空间物体对 $z$ 轴的转动惯量 $I_z = \iiint_\Omega (x^2+y^2) \rho(x,y,z) dv$。

#### *8.5 重积分的换元法 (Change of Variables in Multiple Integrals)
*(注：带星号通常表示选学或进阶内容，其实前面的极坐标、柱面坐标、球面坐标都是换元法的特例)*
*   **一般理论**：设变换 $x = x(u, v), y = y(u, v)$ 将 $uv$ 平面上的区域 $D'$ 一对一地映射到 $xy$ 平面上的区域 $D$。
*   **二重积分换元公式**：
    $$\iint_D f(x,y) dx dy = \iint_{D'} f(x(u,v), y(u,v)) |J| du dv$$
    其中 $J = \frac{\partial(x,y)}{\partial(u,v)} = \begin{vmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{vmatrix}$ 称为**雅可比行列式 (Jacobian)**。绝对值 $|J|$ 反映了面积元素在变换下的伸缩比例。
*   **三重积分换元公式**：类似地，引入三个新变量，体积元素的变换系数是相应的三阶雅可比行列式的绝对值。
*   **应用场景**：当积分区域的边界方程很复杂（例如由双曲线、抛物线围成），通过巧妙的换元（如令 $u = \frac{y}{x}, v = xy$），可以将复杂的曲线边界转化为新坐标系下的直线边界（矩形区域），从而极大简化积分限的确定。


---

### 第9章 曲线积分和曲面积分

#### 9.1 第一类曲线积分 (Line Integrals of the First Kind)
也称为**对弧长的曲线积分**。它不考虑曲线的方向，只关注曲线本身的几何长度和被积函数在曲线上的分布。
*   **概念与物理意义**：设 $L$ 是空间中一条可求长的曲线，$f(x,y,z)$ 是定义在 $L$ 上的函数。将 $L$ 分成 $n$ 小段，每段弧长为 $\Delta s_i$，取点求和取极限，记作 $\int_L f(x,y,z) ds$。
    *   **物理意义**：如果 $f(x,y,z)$ 表示曲线形构件 $L$ 在点 $(x,y,z)$ 处的线密度，则该积分表示构件的**总质量**。
*   **性质**：具有线性性质、对积分路径的可加性。注意：**第一类曲线积分与路径的方向无关**，即 $\int_{AB} f ds = \int_{BA} f ds$。
*   **计算方法**：核心是**化为定积分**。将曲线方程代入被积函数，并将弧长元素 $ds$ 转化为参数的微分。
    *   若 $L$ 由参数方程 $x=x(t), y=y(t), z=z(t) \quad (\alpha \le t \le \beta)$ 给出，则：
        $$\int_L f(x,y,z) ds = \int_\alpha^\beta f(x(t),y(t),z(t)) \sqrt{[x'(t)]^2 + [y'(t)]^2 + [z'(t)]^2} dt$$
    *   **关键点**：积分下限 $\alpha$ 必须小于上限 $\beta$（因为弧长 $ds$ 总是正的）。

#### 9.2 第二类曲线积分 (Line Integrals of the Second Kind)
也称为**对坐标的曲线积分**。它不仅考虑大小，还严格考虑曲线的**方向**（有向曲线）。
*   **概念与物理意义**：设 $L$ 是有向曲线，$\vec{F} = \{P, Q, R\}$ 是向量场。积分形式通常写为 $\int_L P dx + Q dy + R dz$。
    *   **物理意义**：表示变力 $\vec{F}$ 沿有向曲线 $L$ 移动质点所作的**功** ($W = \int_L \vec{F} \cdot d\vec{r}$)。
*   **性质**：具有线性性质、可加性。**最关键的区别：第二类曲线积分与路径的方向有关**。如果反向，积分值变号，即 $\int_{AB} = -\int_{BA}$。
*   **两类曲线积分的联系**：$\int_L P dx + Q dy + R dz = \int_L (P\cos\alpha + Q\cos\beta + R\cos\gamma) ds$，其中 $\{\cos\alpha, \cos\beta, \cos\gamma\}$ 是有向曲线 $L$ 在积分点处的单位切向量。
*   **计算方法**：核心也是**化为定积分**。
    *   若 $L$ 由参数方程 $x=x(t), y=y(t), z=z(t)$ 给出，起点 $t=\alpha$，终点 $t=\beta$（**注意：这里 $\alpha$ 可以大于 $\beta$，必须严格按照起点到终点的参数值代入**），则：
        $$\int_L P dx + Q dy + R dz = \int_\alpha^\beta [P(x(t),y(t),z(t))x'(t) + Q(...)y'(t) + R(...)z'(t)] dt$$

#### 9.3 格林公式 平面曲线积分与路径无关的条件 (Green's Formula & Conditions for Path Independence)
这是本章的第一个核心高潮，建立了**平面区域上的二重积分**与**该区域边界上的第二类曲线积分**之间的联系。
*   **格林公式 (Green's Theorem)**：
    设闭区域 $D$ 由分段光滑的简单闭曲线 $L$ 围成，函数 $P(x,y), Q(x,y)$ 在 $D$ 上具有一阶连续偏导数，则有：
    $$\iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx dy = \oint_L P dx + Q dy$$
    *   **注意方向**：$L$ 必须取**正向**（即人沿着 $L$ 走，区域 $D$ 始终在左手边，通常外边界为逆时针，内边界/洞为顺时针）。
    *   **应用**：常用于将复杂的曲线积分转化为容易计算的二重积分；或者反过来，当曲线不闭合时，通过“补线”使其闭合，再用格林公式。
*   **平面上曲线积分与路径无关的条件**：
    在单连通区域 $D$ 内，以下四个命题是等价的：
    1.  $\oint_L P dx + Q dy = 0$ （沿任意闭曲线的积分为零）。
    2.  $\int_{AB} P dx + Q dy$ 与路径无关，只与起点 $A$ 和终点 $B$ 有关。
    3.  $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$ 在 $D$ 内处处成立。
    4.  $P dx + Q dy$ 是某个二元函数 $u(x,y)$ 的全微分，即 $du = P dx + Q dy$ （$u$ 称为原函数或势函数）。
    *   **应用**：当满足条件3时，我们可以选择最简单的路径（如平行于坐标轴的折线）来计算曲线积分；或者利用凑微分法求出原函数 $u(x,y)$，直接用 $u(B) - u(A)$ 计算。

#### 9.4 第一类曲面积分 (Surface Integrals of the First Kind)
也称为**对面积的曲面积分**。类似于第一类曲线积分，不考虑曲面的侧（方向）。
*   **概念与物理意义**：设 $\Sigma$ 是空间曲面，$f(x,y,z)$ 是定义在其上的函数。积分记作 $\iint_\Sigma f(x,y,z) dS$。
    *   **物理意义**：若 $f$ 表示曲面薄片 $\Sigma$ 的面密度，则积分表示薄片的**总质量**。
*   **性质**：与曲面侧的选择无关，即 $\iint_{\Sigma} f dS = \iint_{-\Sigma} f dS$。
*   **计算方法**：核心是**化为二重积分**。将曲面投影到某个坐标面（通常是 $xOy$ 面）上。
    *   若曲面 $\Sigma$ 由方程 $z = z(x,y)$ 给出，其在 $xOy$ 面上的投影区域为 $D_{xy}$，则面积元素 $dS = \sqrt{1 + (z_x')^2 + (z_y')^2} dx dy$。
    *   公式：$\iint_\Sigma f(x,y,z) dS = \iint_{D_{xy}} f(x,y,z(x,y)) \sqrt{1 + (z_x')^2 + (z_y')^2} dx dy$。

#### 9.5 第二类曲面积分 (Surface Integrals of the Second Kind)
也称为**对坐标的曲面积分**。严格考虑曲面的**侧**（有向曲面，即指定了法向量的指向，分内侧和外侧、上侧和下侧）。
*   **概念与物理意义**：设 $\Sigma$ 是有向曲面，$\vec{v} = \{P, Q, R\}$ 是向量场（如流速场）。积分形式为 $\iint_\Sigma P dy dz + Q dz dx + R dx dy$。
    *   **物理意义**：表示流体以速度 $\vec{v}$ 流过有向曲面 $\Sigma$ 指定侧的**流量**（或通量，Flux）。也可以写成向量形式 $\iint_\Sigma \vec{v} \cdot \vec{n} dS$。
*   **性质**：**与曲面的侧有关**。如果曲面反向，积分值变号。
*   **两类曲面积分的联系**：$\iint_\Sigma P dy dz + Q dz dx + R dx dy = \iint_\Sigma (P\cos\alpha + Q\cos\beta + R\cos\gamma) dS$，其中 $\{\cos\alpha, \cos\beta, \cos\gamma\}$ 是有向曲面 $\Sigma$ 在积分点处的单位法向量。
*   **计算方法**：核心是**化为二重积分**。
    *   例如计算 $\iint_\Sigma R(x,y,z) dx dy$：将 $\Sigma$ 投影到 $xOy$ 面得到 $D_{xy}$。将 $z$ 换成 $z(x,y)$ 后在 $D_{xy}$ 上算二重积分。
    *   **符号判定法则**：若 $\Sigma$ 的法向量与 $z$ 轴正向夹角为锐角（取上侧），则二重积分前取**正号**；若为钝角（取下侧），则取**负号**。对 $dy dz$ (投影到 $yOz$) 和 $dz dx$ (投影到 $zOx$) 同理看法向量与 $x$ 轴、$y$ 轴的夹角。

#### 9.6 高斯公式与散度 (Gauss's Formula and Divergence)
本章的第二个核心高潮，建立了**空间闭区域上的三重积分**与**该区域边界闭曲面上的第二类曲面积分**之间的联系。
*   **高斯公式 (Gauss's Divergence Theorem)**：
    设空间闭区域 $\Omega$ 由分片光滑的闭曲面 $\Sigma$ 围成，函数 $P, Q, R$ 在 $\Omega$ 上具有一阶连续偏导数，则有：
    $$\iiint_\Omega \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) dv = \oiint_\Sigma P dy dz + Q dz dx + R dx dy$$
    *   **注意方向**：$\Sigma$ 必须取**外侧**（法向量指向区域外部）。如果是内侧，前面要加负号。
    *   **应用**：极大地简化了封闭曲面上的第二类曲面积分的计算。如果曲面不封闭，可以通过“补面”使其封闭，然后用高斯公式减去补面上的积分。
*   **散度 (Divergence)**：
    向量场 $\vec{A} = \{P, Q, R\}$ 的散度定义为 $\text{div } \vec{A} = \nabla \cdot \vec{A} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$。
    *   **物理意义**：散度反映了向量场在某一点处的“源”或“汇”的强度。散度为正表示该点是发散源（如正电荷），为负表示是汇聚汇（如负电荷）。
    *   高斯公式的向量形式：$\iiint_\Omega (\nabla \cdot \vec{A}) dv = \oiint_\Sigma \vec{A} \cdot \vec{n} dS$。即：区域内所有源的总和等于穿过边界向外的总通量。

#### 9.7 斯托克斯公式与旋度 (Stokes' Formula and Curl)
本章的第三个核心高潮，也是最难的一个公式。它是格林公式从平面到空间的推广，建立了**空间有向曲面上的第二类曲面积分**与**该曲面边界有向曲线上的第二类曲线积分**之间的联系。
*   **斯托克斯公式 (Stokes' Theorem)**：
    设 $\Sigma$ 为分片光滑的有向曲面，$L$ 是 $\Sigma$ 的边界有向闭曲线，$P, Q, R$ 具有一阶连续偏导数，则有：
    $$\iint_\Sigma \begin{vmatrix} dy dz & dz dx & dx dy \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix} = \oint_L P dx + Q dy + R dz$$
    展开左边即为：$\iint_\Sigma (\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}) dy dz + (\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}) dz dx + (\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}) dx dy$。
    *   **方向约定（右手定则）**：右手四指顺着边界曲线 $L$ 的方向弯曲，大拇指所指的方向就是曲面 $\Sigma$ 的法向量方向（侧）。
    *   **应用**：常用于将复杂的空间曲线积分转化为相对容易的曲面积分。特别是当曲线 $L$ 在一个平面上时，可以取该平面被 $L$ 截下的部分作为 $\Sigma$，此时计算往往大为简化。
*   **旋度 (Curl)**：
    向量场 $\vec{A} = \{P, Q, R\}$ 的旋度定义为 $\text{rot } \vec{A}$ 或 $\nabla \times \vec{A} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix}$。
    *   **物理意义**：旋度反映了向量场在某一点附近的旋转程度（如流体的涡旋）。
    *   斯托克斯公式的向量形式：$\iint_\Sigma (\nabla \times \vec{A}) \cdot \vec{n} dS = \oint_L \vec{A} \cdot d\vec{r}$。即：曲面内部总旋转量等于沿边界的环流量。
    *   **空间曲线积分与路径无关的条件**：在空间单连通区域内，$\oint_L P dx + Q dy + R dz = 0$ $\iff$ $\text{rot } \vec{A} = \vec{0}$ （即旋度处处为零，这样的场称为无旋场或保守场）。


---

### 第10章 级数

#### 10.1 常数项级数的概念和性质 (Concepts and Properties of Constant Term Series)
这是级数理论的基石，定义了什么是无穷级数以及它何时“有意义”。
*   **级数的定义**：给定一个数列 $u_1, u_2, u_3, \dots, u_n, \dots$，将它们依次相加得到的表达式 $\sum_{n=1}^{\infty} u_n = u_1 + u_2 + u_3 + \dots$ 称为常数项无穷级数，简称级数。其中 $u_n$ 称为一般项（或通项）。
*   **部分和与收敛性**：由于无法直接计算无穷项的和，我们引入前 $n$ 项的和 $S_n = \sum_{i=1}^n u_i$（称为部分和）。如果当 $n \to \infty$ 时，部分和数列 $\{S_n\}$ 存在有限极限 $S$，即 $\lim_{n \to \infty} S_n = S$，则称该级数**收敛**，并称 $S$ 为级数的和；否则称级数**发散**。
    *   **本质**：级数的收敛性问题，本质上就是部分和数列的极限问题。
*   **级数收敛的必要条件**：若级数 $\sum u_n$ 收敛，则必有 $\lim_{n \to \infty} u_n = 0$。
    *   **重要推论（常用于判散）**：如果 $\lim_{n \to \infty} u_n \neq 0$（或极限不存在），则级数**必定发散**。但注意，$\lim_{n \to \infty} u_n = 0$ 只是必要条件，不是充分条件（例如调和级数 $\sum \frac{1}{n}$ 通项趋于0，但它是发散的）。
*   **基本性质**：
    1.  线性性质：收敛级数可以逐项乘以常数、逐项相加减。
    2.  改变有限项不影响敛散性：在级数中去掉、加上或改变有限个项，不会改变级数的敛散性（但如果收敛，和可能会变）。
    3.  加括号性质：收敛级数任意加括号后仍收敛，且和不变。反之不成立（加括号后收敛，原级数未必收敛）。

#### 10.2 正项级数 (Positive Term Series)
研究所有项 $u_n \ge 0$ 的级数。这是判断一般级数敛散性的基础。
*   **收敛的基本充要条件**：正项级数的部分和数列 $\{S_n\}$ 是单调递增的。因此，**正项级数收敛的充要条件是其部分和数列有上界**。
*   **比较审敛法**：通过找一个已知敛散性的级数（通常是几何级数 $\sum aq^n$ 或 p-级数 $\sum \frac{1}{n^p}$）来与之比较。
    *   若 $0 \le u_n \le v_n$，大级数 $\sum v_n$ 收敛 $\implies$ 小级数 $\sum u_n$ 收敛。
    *   若 $u_n \ge v_n \ge 0$，小级数 $\sum v_n$ 发散 $\implies$ 大级数 $\sum u_n$ 发散。
    *   **极限形式**：若 $\lim_{n \to \infty} \frac{u_n}{v_n} = l$ ($0 < l < +\infty$)，则两级数同敛散。这是最常用的方法。
*   **比值审敛法（达朗贝尔 D'Alembert 判别法）**：考察相邻两项的比值极限 $\rho = \lim_{n \to \infty} \frac{u_{n+1}}{u_n}$。
    *   $\rho < 1 \implies$ 收敛；$\rho > 1 \implies$ 发散；$\rho = 1 \implies$ 失效。特别适用于通项含有阶乘 $n!$ 或指数 $a^n$ 的情况。
*   **根值审敛法（柯西 Cauchy 判别法）**：考察通项的 $n$ 次方根的极限 $\rho = \lim_{n \to \infty} \sqrt[n]{u_n}$。
    *   $\rho < 1 \implies$ 收敛；$\rho > 1 \implies$ 发散；$\rho = 1 \implies$ 失效。特别适用于通项整体带有 $n$ 次方的情况。

#### 10.3 任意项级数 (Arbitrary Term Series)
研究项可正可负的级数，主要包括交错级数和一般的任意项级数。
*   **绝对收敛与条件收敛**：
    *   对于任意项级数 $\sum u_n$，如果把它的各项取绝对值后构成的正项级数 $\sum |u_n|$ 收敛，则称原级数 $\sum u_n$ **绝对收敛**。
    *   如果 $\sum |u_n|$ 发散，但原级数 $\sum u_n$ 本身收敛，则称原级数 **条件收敛**。
    *   **重要定理**：绝对收敛的级数一定收敛（即 $\sum |u_n|$ 收敛 $\implies \sum u_n$ 收敛）。绝对收敛的级数具有更好的性质（如可以任意重排项而不改变和）。
*   **交错级数及其审敛法**：形如 $\sum_{n=1}^{\infty} (-1)^{n-1} u_n$ （其中 $u_n > 0$）的级数。
    *   **莱布尼茨 (Leibniz) 定理**：如果交错级数满足两个条件：(1) $u_n \ge u_{n+1}$ (单调递减)；(2) $\lim_{n \to \infty} u_n = 0$，则该交错级数收敛。并且其余项的绝对值不超过被舍弃的第一项的绝对值 ($|R_n| \le u_{n+1}$)。

#### 10.4 幂级数 (Power Series)
从这里开始进入函数项级数的领域。幂级数是最简单、最重要的一类函数项级数。
*   **函数项级数的概念**：每一项都是函数的级数 $\sum_{n=1}^{\infty} u_n(x)$。使级数收敛的 $x$ 的集合称为收敛域。
*   **幂级数的标准形式**：$\sum_{n=0}^{\infty} a_n x^n = a_0 + a_1 x + a_2 x^2 + \dots$ （或更一般的 $\sum a_n (x-x_0)^n$）。
*   **阿贝尔 (Abel) 定理**：如果幂级数在 $x = x_0$ ($x_0 \neq 0$) 处收敛，则对于满足 $|x| < |x_0|$ 的一切 $x$，级数都绝对收敛；如果在 $x = x_0$ 处发散，则对于满足 $|x| > |x_0|$ 的一切 $x$，级数都发散。
*   **收敛半径 $R$ 与收敛区间**：根据阿贝尔定理，幂级数的收敛域通常是一个以原点为中心的对称区间 $(-R, R)$。
    *   求法：通常利用比值法或根值法求系数比值的极限。若 $\rho = \lim_{n \to \infty} |\frac{a_{n+1}}{a_n}|$，则收敛半径 $R = \frac{1}{\rho}$ （当 $\rho=0$ 时 $R=+\infty$；当 $\rho=+\infty$ 时 $R=0$）。
    *   求出 $R$ 后，必须单独考察端点 $x = R$ 和 $x = -R$ 处的敛散性（代入后变成常数项级数，用10.2或10.3的方法判断），从而确定最终的收敛域。
*   **幂级数的运算性质**：在收敛区间内，幂级数可以像多项式一样进行逐项加法、乘法、**逐项求导**和**逐项积分**，且求导/积分后的新幂级数收敛半径不变（但端点敛散性可能改变）。

#### 10.5 函数的幂级数展开 (Power Series Expansion of Functions)
这是幂级数理论的核心应用：将一个复杂的函数表示为简单的幂级数之和。这也就是著名的**泰勒级数 (Taylor Series)** 理论。
*   **泰勒级数**：若函数 $f(x)$ 在 $x_0$ 的某邻域内具有任意阶导数，则可以在该点构造级数 $\sum_{n=0}^{\infty} \frac{f^{(n)}(x_0)}{n!} (x-x_0)^n$。当 $x_0 = 0$ 时，称为**麦克劳林级数 (Maclaurin Series)**。
*   **展开的充要条件**：函数 $f(x)$ 能展开成泰勒级数的充要条件是，其泰勒公式的余项 $R_n(x)$ 当 $n \to \infty$ 时趋于 0。
*   **展开方法**：
    1.  **直接展开法**：按照公式求出 $f(x)$ 的各阶导数在 $x_0$ 处的值，写出级数，并证明余项趋于0。这种方法计算量大，较少使用。
    2.  **间接展开法（最常用）**：利用已知的基本初等函数的麦克劳林展开式（必须熟记以下几个）：
        *   $e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}, \quad x \in (-\infty, +\infty)$
        *   $\sin x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}, \quad x \in (-\infty, +\infty)$
        *   $\cos x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}, \quad x \in (-\infty, +\infty)$
        *   $\ln(1+x) = \sum_{n=1}^{\infty} (-1)^{n-1} \frac{x^n}{n}, \quad x \in (-1, 1]$
        *   $(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!}x^2 + \dots, \quad x \in (-1, 1)$
        通过变量代换、四则运算、**逐项求导**或**逐项积分**等技巧，将待展开的函数转化为上述已知形式，从而得到其幂级数展开式。

#### 10.6 傅里叶 (Fourier) 级数 (Fourier Series)
如果说幂级数是用光滑的多项式去逼近函数，那么傅里叶级数则是用**三角函数**（正弦和余弦波）去逼近函数。它在信号处理、热传导、声学等领域具有不可替代的作用。
*   **三角函数系的正交性**：函数系 $1, \cos x, \sin x, \cos 2x, \sin 2x, \dots$ 在区间 $[-\pi, \pi]$ 上具有正交性（即任意两个不同函数的乘积在该区间上的积分为0）。这是傅里叶级数理论的基石。
*   **傅里叶系数与傅里叶级数**：
    设 $f(x)$ 是以 $2\pi$ 为周期的函数，若它能展开成三角级数 $f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} (a_n \cos nx + b_n \sin nx)$，利用正交性可以求出系数（欧拉-傅里叶公式）：
    *   $a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos nx dx \quad (n=0, 1, 2, \dots)$
    *   $b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin nx dx \quad (n=1, 2, \dots)$
*   **狄利克雷 (Dirichlet) 收敛定理**：给出了傅里叶级数收敛到什么值的充分条件。如果 $f(x)$ 在一个周期内满足：(1) 连续或只有有限个第一类间断点；(2) 只有有限个极值点。则其傅里叶级数处处收敛：
    *   在 $f(x)$ 的连续点 $x$ 处，收敛于 $f(x)$。
    *   在 $f(x)$ 的间断点 $x_0$ 处，收敛于左右极限的平均值 $\frac{f(x_0^-) + f(x_0^+)}{2}$。
*   **正弦级数与余弦级数**：
    如果只需要在区间 $[0, \pi]$ 上展开函数 $f(x)$，可以通过**奇延拓**或**偶延拓**将其扩展到 $[-\pi, \pi]$ 上成为周期函数。
    *   **奇延拓**：展开后只含正弦项 ($a_n = 0$)，称为正弦级数。
    *   **偶延拓**：展开后只含余弦项和常数项 ($b_n = 0$)，称为余弦级数。
*   **一般周期 $2l$ 的傅里叶级数**：通过变量代换 $t = \frac{\pi x}{l}$，可以将上述针对 $2\pi$ 周期的公式推广到任意周期 $2l$ 的情形。


