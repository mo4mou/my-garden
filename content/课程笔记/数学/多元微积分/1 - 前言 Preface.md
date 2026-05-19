
 函数是一种变换（输入到输出）

$f(x_{1},x_{2},\dots,x_{m})=\begin{bmatrix}y_{1} \\  y_{2} \\\dots \\  y_{n}  \end{bmatrix}$ ： $m维输入\Rightarrow n维输出\,的变换$

可视化方法：
$\begin{cases}m+n维，绘制输入与输出，如：f(x,y)立体图(输入(x,y)，输出z) \\  n维，只绘制输出，如：参数方程f(t,s)=\begin{bmatrix}x(t,s) \\  y(t,s) \\  z(t,s)\end{bmatrix} \\  m维，把输出作为向量附加到输入的每个点上，即向量场(如粒子的速度场) / 等高线图\end{cases}$

在一点求导本质是一个线性变换，它把 n 维变化映射为 m 维变化(可以用雅可比矩阵表示)，是对函数局部的线性化
$$\vec{F}(\vec{v}+d\vec{v})=\vec{F}(\vec{v})+\vec{L}(d\vec{v})+o(|d\vec{v}|)$$
$$\Rightarrow d\vec{F}=\vec{L}(d\vec{v})=\vec{J}d\vec{v}$$
$f: \mathbb{R}^n \to \mathbb{R}^m$，经过求导变换$f': \mathbb{R}^n \to \mathcal{L}(\mathbb{R}^n, \mathbb{R}^m)$，$\dim \mathcal{L}(\mathbb{R}^n, \mathbb{R}^m) = m \times n$为所有线性变换构成的空间

二维叉积（伪标量，实则为有向面积）
$$\begin{bmatrix}
a \\
b
\end{bmatrix}\times \begin{bmatrix}
c \\
d
\end{bmatrix}=ad-bc$$
