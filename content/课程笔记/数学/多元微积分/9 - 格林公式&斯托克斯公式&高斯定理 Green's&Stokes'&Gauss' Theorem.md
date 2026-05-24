---
tags:
  - 高等数学
  - 多元微积分
author: mo4mou
---

# 格林公式 & 斯托克斯公式 & 高斯定理

## 广义斯托克斯定理

> [!note] Generalized Stokes' Theorem
> $$\int_{\Omega}d\omega=\int_{\partial\Omega}\omega$$
> 其中 $\Omega$ 为积分区域，$\partial\Omega$ 为其边界，$d$ 为外微分（可表示梯度、旋度、散度）

## 格林公式 & 斯托克斯公式

> [!note] Stokes' Theorem
> $$\oint_{\partial S}\vec{F}\cdot d\vec{s}=\iint_{S}(\nabla\times\vec{F})\cdot d\vec{S}$$
> 闭合曲线的环量 = 以该曲线为边界的面上旋度的通量

### 面微元向量

$$d\vec{S}=\hat{n}\,dS=\left(\cos\alpha\,dS,\;\cos\beta\,dS,\;\cos\gamma\,dS\right)=(dy\,dz,\;dz\,dx,\;dx\,dy)$$

$\cos\alpha,\cos\beta,\cos\gamma$ 为法线与 $x,y,z$ 轴夹角的余弦，对应面积微元在三个坐标平面上的投影。

### 分量形式

$$\begin{cases}\oint \vec{F}(P,Q)\cdot d\vec{s}=\iint\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dx\,dy \\ \oint \vec{F}(P,Q,R)\cdot d\vec{s}=\iint\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right)dy\,dz+\left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right)dz\,dx+\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dx\,dy\end{cases}$$

> [!warning] 方向一致性
> $d\vec{S}$ 的法线方向与 $\partial S$ 的绕行方向须保持一致（右手定则）。

## 高斯定理

> [!note] Gauss' Theorem / Divergence Theorem
> $$\oint_{\partial V}\vec{F}\cdot d\vec{S}=\iiint_{V}\nabla\cdot\vec{F}\,dV$$
> 闭合曲面的通量 = 以该曲面为边界的立体上散度的积分

散度为通量的体密度，所以对体积分 = 对曲面积分。
