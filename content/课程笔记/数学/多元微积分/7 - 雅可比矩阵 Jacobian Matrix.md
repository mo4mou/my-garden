---
tags: [高等数学, 多元微积分]
author: mo4mou
---

# 雅可比矩阵 Jacobian Matrix

## 定义

> [!note] 雅可比矩阵
> 设函数 $\mathbf{f}:\mathbb{R}^n \to \mathbb{R}^m$，其分量形式为：
>
> $$\mathbf{f}(\mathbf{x})=\left(f_1(x_1,\dots,x_n),\;f_2(x_1,\dots,x_n),\;\dots,\;f_m(x_1,\dots,x_n)\right)$$
>
> 则 $\mathbf{J}$ 是一个 $m \times n$ 矩阵，第 $i$ 行第 $j$ 列元素为 $J_{ij}=\dfrac{\partial f_i}{\partial x_j}$

完整写为：

$$\mathbf{J}=\begin{bmatrix}\frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \cdots & \frac{\partial f_1}{\partial x_n} \\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \cdots & \frac{\partial f_2}{\partial x_n} \\ \vdots & \vdots & \ddots & \vdots \\ \frac{\partial f_m}{\partial x_1} & \frac{\partial f_m}{\partial x_2} & \cdots & \frac{\partial f_m}{\partial x_n}\end{bmatrix}$$

## 常见情形

| 情形 | 条件 | 说明 |
|------|------|------|
| **标量场** | $m=1,\,n>1$ | 退化为梯度（行向量）：$\nabla f=\left[\frac{\partial f}{\partial x_1},\;\dots,\;\frac{\partial f}{\partial x_n}\right]$ |
| **向量场** | $m=n$ | 方阵，其行列式为**雅可比行列式**（Jacobian determinant），用于变量替换中的面积/体积变换因子 |

## 二维示例

设 $f:\mathbb{R}^2 \to \mathbb{R}^2$：

$$f(\mathbf{x})=\begin{bmatrix}f_{1}(x,y) \\ f_{2}(x,y)\end{bmatrix}$$

发生二维输入微小变化 $(dx,\,dy)$ 时，输出变化为：

$$\begin{bmatrix}df_{1} \\ df_{2}\end{bmatrix}=\underbrace{\begin{bmatrix}\frac{\partial f_{1}}{\partial x} & \frac{\partial f_{1}}{\partial y} \\ \frac{\partial f_{2}}{\partial x} & \frac{\partial f_{2}}{\partial y}\end{bmatrix}}_{J_f}\begin{bmatrix}dx \\ dy\end{bmatrix}$$

> [!quote] 
> 在一点求导本质是一个线性变换，它把 $n$ 维变化映射为 $m$ 维变化（可以用雅可比矩阵表示），是对函数局部的线性化。
