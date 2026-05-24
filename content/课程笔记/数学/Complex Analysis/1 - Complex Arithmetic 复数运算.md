---
tags: [复分析, 复数]
author: mo4mou
---

# 复数运算 Complex Arithmetic

## 定义

> [!note] 复数
> 有序数对 $(a,b)$，定义 $\sqrt{-1}=i$，记 $z=x+iy$
> 矩阵形式：$\begin{bmatrix}\mathrm{Re} \\  \mathrm{Im}\end{bmatrix}$ $\quad\quad$                        $\displaystyle \begin{bmatrix}\mathrm{Re} & -\mathrm{Im} \\  \mathrm{Im} & \mathrm{Re}\end{bmatrix}$

> [!note] 运算法则
> $(a,b)\pm(c,d)=(a\pm c,\;b\pm d)$
> $(a,b)\cdot(c,d)=(ac-bd,\;ad+bc)$
> 矩阵形式：$(a,b)\cdot(c,d)=\begin{bmatrix}a & -b \\  b & a\end{bmatrix}\begin{bmatrix}c \\  d\end{bmatrix}$

复数的运算是**封闭**的。

## 复共轭

> [!note] Complex Conjugation
> $$\overline{x+iy}=x-iy$$

> [!note] 性质
> $$\overline{z_1 z_2}=\bar{z}_1\bar{z}_2$$
> $$\overline{\left(\frac{z_1}{z_2}\right)}=\frac{\bar{z}_1}{\bar{z}_2}$$
> $$\bar{z}z=|z|^2$$
