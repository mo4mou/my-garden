---
tags: [复分析, 复数]
author: mo4mou
---

# 复数的几何表示 Geometric Representation

## 复平面

复数 $z=x+iy$ 可视为复平面上的向量：

![[2 - 复数的几何表示-1779336948532.webp|356]]

## 模（Module）

> [!note] 模
> $$|z|=\sqrt{x^2+y^2}$$
> $$|z_1 z_2|=|z_1||z_2|$$

> [!note] 三角不等式
> $$|z_1|-|z_2|\leq|z_1-z_2|\leq|z_1|+|z_2|$$
>

> [!note]
> $|z_1-z_2|$ 表示两个复数端点间的距离。

## 幅角（Argument）

> [!note] 幅角
> $\text{Arg}\,z=\theta+2k\pi$（多值性）
>
> $\tan\text{Arg}\,z=\dfrac{y}{x}$（注意判断象限）
>
> 记 $\arg z$ 为 $\text{Arg}\,z$ 在 $(-\pi,\pi]$ 上的主值。

## 复数的表现形式

> [!note] 三角 / 指数 / 极坐标
> $$z=x+iy=|z|(\cos\theta+i\sin\theta)=|z|e^{i\theta}=|z|\angle\theta$$

### 复数运算

$$z_1 z_2=|z_1||z_2|e^{i(\theta_1+\theta_2)}=|z_1||z_2|\angle(\theta_1+\theta_2)$$

$$z^n=|z|^n e^{in\theta}=|z|^n\angle(n\theta)$$

> [!tip] 几何意义
> 复数乘法 = **模相乘，幅角相加**（二维旋转的代数表示）。

### 根运算

> [!note] $n$ 次根
> $$\sqrt[n]{z}=|z|^{1/n}\angle\frac{\theta+2k\pi}{n},\quad k=0,1,\dots,n-1$$
>
> 根运算具有**多值性**（$n$ 个根），所有根平分角度，落在正 $n$ 边形的顶点上。

### 应用：三角恒等式

> [!example] 利用复数推导三角公式
> $\cos 3\theta=\text{Re}\left((1\angle\theta)^3\right)=\text{Re}\left((\cos\theta+i\sin\theta)^3\right)$
