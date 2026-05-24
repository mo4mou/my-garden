---
tags: [复分析, 全纯函数]
author: mo4mou
---

# 全纯函数 Holomorphic Function

## 定义

> [!note] 全纯函数
> 复变函数在区域 $G$ 内**处处可导**，即为全纯函数（解析函数）。

> [!note] 导数公式
> $$f'(z)=\frac{\partial u}{\partial x}+i\frac{\partial v}{\partial x}=\frac{\partial v}{\partial y}-i\frac{\partial u}{\partial y}$$

> [!note] 判别法
> 复变函数在 $(x,y)$ 处可导 
> $\iff$ 满足 Cauchy-Riemann 方程
> $\iff$ 满足 $\frac{ \partial f }{ \partial \bar{z} }=0$  ($Wirtinger导数$)

> [!tip] 复初等函数
> 复初等函数在其定义域（开集）内是全纯的，其代数与复合运算性质以及求导法则均与实初等函数具有形式一致性。
>
> 如 $e^{z},\;\sin z,\;\sum a_i z^i,\;\dfrac{P(z)}{Q(z)}$

## Cauchy-Riemann 方程

> [!note] C-R 方程
> $$\begin{cases}
> \displaystyle\frac{\partial u}{\partial x}=\frac{\partial v}{\partial y} \\[6pt]
> \displaystyle\frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x}
> \end{cases}$$

### 推导

$\omega=f(z)=u+iv$，$u=u(x,y),\;v=v(x,y)$

复变形式（$A$ 为 $f'(z)$，是复数乘法的矩阵形式）：

$$d\omega=Adz=\begin{bmatrix}\mathrm{Re}A & -\mathrm{Im}A \\ \mathrm{Im}A & \mathrm{Re}A\end{bmatrix}\begin{bmatrix}dx \\ dy\end{bmatrix}$$

实变形式（Jacobian）：

$$d\omega=\begin{bmatrix}\displaystyle\frac{\partial u}{\partial x} & \displaystyle\frac{\partial u}{\partial y} \\[6pt] \displaystyle\frac{\partial v}{\partial x} & \displaystyle\frac{\partial v}{\partial y}\end{bmatrix}\begin{bmatrix}dx \\ dy\end{bmatrix}$$

二者比较可得：

$$\mathrm{Re}A=\frac{\partial u}{\partial x}=\frac{\partial v}{\partial y},\quad \mathrm{Im}A=\frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x}$$

## Wirtinger 导数

核心思想：把 $z$ 当成整体不能求导，那就换一种基底——用 $(z,\bar{z})$ 作为两个独立变量代替 $(x,y)$。

根据坐标变换：

$$x=\frac{z+\bar{z}}{2},\quad y=\frac{z-\bar{z}}{2i}$$

由链式法则可定义两个偏导数：

> [!note] 全纯导数（关于 $z$）
> $$\frac{\partial f}{\partial z}\triangleq\frac{1}{2}\left(\frac{\partial f}{\partial x}-i\frac{\partial f}{\partial y}\right)$$

> [!note] 反全纯导数（关于 $\bar{z}$）
> $$\frac{\partial f}{\partial \bar{z}}\triangleq\frac{1}{2}\left(\frac{\partial f}{\partial x}+i\frac{\partial f}{\partial y}\right)$$

> [!note] 全纯的充要条件
> $$\frac{\partial f}{\partial \bar{z}}=0$$
>
> 全纯性意味着函数**仅依赖 $z$，而与 $\bar{z}$ 无关**。这种判别法比 C-R 方程更简洁。

> [!example] 
> $\mathrm{Re}(z),\;\mathrm{Im}(z),\;|z|,\;|z|^2,\;\bar{z}$ 均依赖 $\bar{z}$，故**非全纯**。


## 补充

> [!note] 等值线正交性
> 若 $f(z)=u+iv$ 为解析函数且 $f'(z)\neq 0$，则 $u(x,y)=c_1$ 与 $v(x,y)=c_2$ 的等值线**处处正交**。

> [!tip] 几何意义：保角映射
> 解析函数在 $f'(z)\neq 0$ 处**保持两条曲线之间的夹角和方向不变**，即保角映射。
>
> 因此 $u$ 和 $v$ 的等值线在 $w$ 平面上垂直，在 $z$ 平面上也必须处处交角为 $90^\circ$。