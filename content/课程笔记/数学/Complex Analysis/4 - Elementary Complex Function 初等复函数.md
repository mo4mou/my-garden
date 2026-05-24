---
tags: [复分析, 初等复函数]
author: mo4mou
---

# 初等复函数 Elementary Complex Function

## 欧拉公式

> [!note] Euler's Formula
> $$e^{iy}=\cos y+i\sin y$$
>
> 特例：$e^{i\pi}=-1$

## 指数函数

> [!note] Complex Exponential
> $$\exp z=e^z=e^{x+iy}=e^x(\cos y+i\sin y)$$
>
> $|\exp z|=e^x$，$\text{Arg}\,z=y+2k\pi$

## 对数函数

> [!note] Complex Logarithm（多值函数）
> $$\text{Ln}\,z=\ln|z|+i\text{Arg}\,z$$
>
> 取主部 $\ln z=\ln|z|+i\arg z$，则为单值函数。

推导：

$$e^{u+iv}=z=|z|e^{i\theta}\Rightarrow e^u=|z|,\;v=\theta$$

## 乘幂与幂函数

> [!note] Complex Power
> $$z_1^{z_2}=e^{z_2\text{Ln}\,z_1}$$
>
> $\text{Ln}\,z_1=\ln|z_1|+i(\arg z_1+2k\pi)$ 为多值函数。

## 三角函数

> [!note] Complex Trigonometric Functions
> $$\cos z=\frac{e^{iz}+e^{-iz}}{2}$$
> $$\sin z=\frac{e^{iz}-e^{-iz}}{2i}$$
> $$\tan z=\frac{\sin z}{\cos z}=\frac{1}{i}\cdot\frac{e^{iz}-e^{-iz}}{e^{iz}+e^{-iz}}$$

### 与双曲函数的关系

$$\cos(iy)=\cosh y,\quad \sin(iy)=i\sinh y$$

$$\cos(x+iy)=\cos x\cosh y-i\sin x\sinh y$$

$$\sin(x+iy)=\sin x\cosh y+i\cos x\sinh y$$

### 有界性

| 函数                | 复平面上有界性                                   |
| ----------------- | ----------------------------------------- |
| $\cos z,\;\sin z$ | **无界**（偏离实轴 $y\to\infty$ 时模长 $\to\infty$） |
| $\tan z$          | **有界**（偏离实轴 $y\to\infty$ 时模长 $\to 1$）     |

$e^{iz}=e^{-y}(\cos x+i\sin x)$，模长主要取决于虚轴上 $y$ 的取值。

## 反三角函数

> [!note] 反余弦
> $$\arccos z=-i\text{Ln}(z+i\sqrt{1-z^2})$$

推导：

$$\cos\theta=\frac{e^{i\theta}+e^{-i\theta}}{2}=z\Rightarrow e^{i\theta}=z+\sqrt{z^2-1}$$

$\sqrt{z^2-1}$ 为双值函数。
