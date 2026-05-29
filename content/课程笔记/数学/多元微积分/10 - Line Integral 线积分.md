---
tags: [高等数学, 多元微积分]
author: mo4mou
---

# 线积分 Line Integral

## 第一类线积分（标量场）

> [!note] 定义
> $$\int_{\Gamma}f\,ds$$

### 计算方法

曲线自由度为 $1$，化为单变量参数方程后代入即可：

$$\Gamma_{AB}:\begin{cases}x=x(t) \\ y=y(t) \\ z=z(t)\end{cases},\quad \alpha\leq t\leq \beta$$

$$\int_{\Gamma_{AB}}f(x,y,z)\,ds=\int^{\beta}_{\alpha}f\,\sqrt{(x')^{2}+(y')^{2}+(z')^{2}}\;dt$$

> [!tip] 注意
> 曲线上每一点均满足曲线表达式，计算时可直接代入。

### 几何与物理意义

| 意义 | 解释 |
|------|------|
| **几何** | 上边界为曲线 $\Gamma_{AB}$、高度为 $f(x,y,z)$ 的侧面面积 |
| **物理** | 密度为 $f(x,y,z)$ 的绳的质量 |

### 示例

> [!example] 利用对称性简化
> 计算 $\displaystyle\int_{\Gamma}\left(x^{2}+2y\right)ds$，其中 $\Gamma:\begin{cases}x^{2}+y^{2}+z^{2}=a^{2} \\ x+y+z=0\end{cases}$
>
> 化参数方程困难时，可利用轮换对称性：
>
> $$=\frac{1}{3}\int_{\Gamma}\left(x^{2}+y^{2}+z^{2}\right)+2(x+y+z)\;ds$$
>
> $x,y,z$ 地位相等，可轮换。

## 第二类曲线积分（向量场）

> [!note] 定义
> $$\int_{\Gamma}\vec{F}\cdot d\vec{r}$$

注意曲线的指定方向。

三种等价形式：

$$\int\vec{F}\cdot d\vec{s}=\int(P\cos\alpha+Q\cos\beta+R\cos\gamma)\,ds=\int P\,dx+Q\,dy+R\,dz$$

其中 $\vec{F}=(P,Q,R)$，$\hat{s}=(\cos\alpha,\cos\beta,\cos\gamma)$ 为单位切向量。

> [!note] 保守场的四个等价条件
> 1. 无旋：$\nabla\times\vec{F}\equiv\vec{0}$
> 2. 存在势函数 $\varphi$，使得 $d\varphi=\vec{F}\cdot d\vec{r}$
> 3. 积分值与路径无关
> 4. 单连通区域中任一封闭曲线的环量为 $0$

### 计算方法

**方法一：参数化**

与第一类类似，参数化后代入：

$$\int_{\Gamma}\vec{F}\cdot d\vec{r}=\int^{\beta}_{\alpha}\vec{F}(\vec{r}(t))\cdot\vec{r}'(t)\;dt$$

**方法二：格林/斯托克斯公式**

封闭曲线，或将非封闭曲线补全为封闭曲线（增补部分易求），运用：

$$\begin{cases}\oint \vec{F}(P,Q)\cdot d\vec{s}=\iint\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dx\,dy \\ \oint \vec{F}(P,Q,R)\cdot d\vec{s}=\iint\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right)dy\,dz+\left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right)dz\,dx+\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dx\,dy\end{cases}$$

**方法三：挖洞法**

若曲面内部有洞（无定义点或偏导不连续点），且洞外向量场无旋（$\nabla\times\vec{F}\equiv 0$，保守场），则可选择任意包含同样洞的曲线替代原曲线。

> [!tip] 常见情形
> 洞常出现在分母为零处，选取**分母 = 常数**的曲线简化计算。

**方法四：换路径**

非封闭曲线若无旋（保守场），积分值只与起点和终点有关，可更换路径。常将曲线化为沿坐标轴方向的多段直线简化计算。

**方法五：势函数法**

保守场（$\nabla\times\vec{F}\equiv 0$）存在势函数 $\varphi$（原函数），使得 $\vec{F}=\nabla\varphi$。通过对 $\vec{F}\cdot d\vec{r}$ 偏积分求出 $\varphi$ 后：

$$\int_{A}^{B}\vec{F}\cdot d\vec{r}=\varphi(B)-\varphi(A)$$

### 应用：求不规则图形面积（xy平面）

> [!example] 构造旋度为 1 的向量场
> $$S=\iint_{S}1\,d\sigma=\frac{1}{2}\oint_{\partial S}-y\,dx+x\,dy$$
>
> 构造 $\frac{1}{2}\nabla\times(-y,\,x,\,0)=(0,\,0,\,1)$，旋度恒为 1。
