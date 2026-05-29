---
tags: [高等数学, 多元微积分]
author: mo4mou
---

# 前言 Preface

## 函数的本质

> [!note] 函数是一种变换（输入到输出）
> $$f(x_1,x_2,\dots,x_m)=\begin{bmatrix}y_1 \\ y_2 \\ \vdots \\ y_n\end{bmatrix}$$
>
> $m$ 维输入 $\Rightarrow$ $n$ 维输出的变换。

## 可视化方法

$$\begin{cases}m+n\text{ 维}：\text{绘制输入与输出，如 }f(x,y)\text{ 立体图（输入 }(x,y)\text{，输出 }z\text{）} \\ n\text{ 维}：\text{只绘制输出，如参数方程 }f(t,s)=\begin{bmatrix}x(t,s) \\ y(t,s) \\ z(t,s)\end{bmatrix} \\ m\text{ 维}：\text{把输出作为向量附加到输入的每个点上，即向量场（如速度场）/ 等高线图}\end{cases}$$

## 求导的本质

> [!note] 线性化
> 在一点求导本质是一个线性变换，它把 $n$ 维变化映射为 $m$ 维变化（可以用雅可比矩阵表示），是对函数局部的线性化。

$$\vec{F}(\vec{v}+d\vec{v})=\vec{F}(\vec{v})+\vec{L}(d\vec{v})+o(|d\vec{v}|)$$
$$\Rightarrow d\vec{F}=\vec{L}(d\vec{v})=\vec{J}\,d\vec{v}$$

$f:\mathbb{R}^n\to\mathbb{R}^m$，经过求导变换 $f':\mathbb{R}^n\to\mathcal{L}(\mathbb{R}^n,\mathbb{R}^m)$

$\dim\mathcal{L}(\mathbb{R}^n,\mathbb{R}^m)=m\times n$，为所有线性变换构成的空间。

## 二维叉积

> [!note] 二维叉积（伪标量，有向面积）
> $$\begin{bmatrix}a \\ b\end{bmatrix}\times\begin{bmatrix}c \\ d\end{bmatrix}=ad-bc$$

## 广义斯托克斯定理

> [!note] 微积分基本定理的统一推广
> $$\int_{\Omega}d\omega=\int_{\partial\Omega}\omega$$
>
> 区域内部的变化率的积分 = 边界上的累积积分

以旋度为例：内部相邻旋度相互抵消，最后只剩下边界的累积。

![[1 - 前言 Preface-1779243368666.webp|255]]

| 定理                              | 维度    | 对应情况        |
| ------------------------------- | ----- | ----------- |
| **微积分基本定理** (FTC)               | 1D    |             |
| **格林公式** (Green's Theorem)      | 2D 平面 | 平面上的环量与旋度   |
| **斯托克斯定理** (Stokes' Theorem)    | 2D 曲面 | 曲面上的旋度与边界环量 |
| **高斯散度定理** (Divergence Theorem) | 3D 体积 | 体积内的散度与表面通量 |
