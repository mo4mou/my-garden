---
tags: [高等数学, 多元微积分]
author: mo4mou
---

# 偏导数&梯度 Partial Derivatives & Gradient

## 偏导数的定义与几何意义

> [!note] 偏导数
> 切片（固定一个变化量后的几何图形）的斜率/切向量。
>
> 输入的微小变化 $\partial x$  $\Rightarrow$  输出对应变化 $\partial f$ ，则偏导数为 $\frac{\partial f}{\partial x}=\lim_{ \partial x \to 0} \frac{\partial f}{\partial x}$

补充：向量场的偏导
$\vec{v}(x,y)=\left\{ P(x,y),Q(x,y) \right\}$，则偏导数 $\frac{ \partial P }{ \partial x }$ 对应附加向量的 $x$ 分量在 $x$ 方向上的变化，偏导数 $\frac{ \partial Q }{ \partial y }$ 对应附加向量的 $y$ 分量在 $y$ 方向上的变化

## 全微分

> [!note] 全微分（所有自变量微小变化后的输出变化量）
> 各输入分量独立产生微小变化时，输出的总变化量为各分量变化效果的线性叠加
>
> $df=\partial f_{x}+\partial f_{y}=\frac{ \partial f }{ \partial x }dx+\frac{ \partial f }{ \partial y }dy$

## Nabla 算子

> [!note] Nabla 算子 $\nabla$
> $\nabla=\begin{bmatrix}\frac{\partial}{\partial x} \\  \frac{\partial}{\partial y} \\  \dots\end{bmatrix}$， $\nabla$ 只对右侧函数作用偏导。
> 作用于函数 $f$ 后得到一个向量场，例如 $\nabla f(x,y)$ 是二维平面上的梯度向量场。

## 方向导数

![[2 - Partial Derivatives & Gradient-1779167163040.webp|265]]
输入沿向量 $\vec{v}$ 发生微小变化 $d\vec{v}=\left( a\,dx,\;b\,dy \right)$
![[2 - Partial Derivatives & Gradient-1779166759737.webp|276]]

> [!note] 方向导数
> 对应输出变化了 $df=df_{x}+df_{y}=a \frac{ \partial f }{ \partial x }+b \frac{ \partial f }{ \partial y }=d\vec{v}\cdot \nabla f$
>
> 则得到方向导数 $\frac{ \partial f }{ \partial \vec{v} }=\vec{v}^\circ \cdot \nabla f$

## 梯度

> [!note] 梯度
> $\nabla f=\begin{bmatrix}\frac{\partial f}{\partial x} \\  \frac{\partial f}{\partial y} \\  \dots\end{bmatrix}$ ，函数输出上升最快的方向，模长为上升速度（从方向导数定义可得到）

## 链式法则

链式法则本质是两层线性变换的复合
如 $\vec{F}(x(t),y(t))$ ，内部函数的变化量线性变换一次，外部函数的变化量**再**进行一次线性变换，体现为雅可比矩阵相乘：$d\vec{F}(x(t),y(t))=\nabla \vec{F}(x,y)\cdot\left\{ x'(t),y'(t) \right\}\cdot dt$

> [!note] 更为一般的书写
> 链式法则：
> $$d(\vec{F}(\vec{g}(\vec{x})))=\vec{J}_{\vec{F}}(\vec{g}(\vec{x}))\cdot d\vec{g}(\vec{x})=\vec{J}_{\vec{F}}(\vec{g}(\vec{x}))\cdot \vec{J}_{\vec{g}}(\vec{x})\cdot d\vec{x}$$
