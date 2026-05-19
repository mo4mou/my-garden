---
tags: [高等数学, 多元微积分]
author: mo4mou
---

# 旋度 Curl

## 定义

> [!note] 旋度
> 一点处流体微团朝**逆时针方向**变化的速度。
>
> $$\text{curl}\,\vec{F}=\nabla \times \vec{F}$$

旋度衡量的是向量场在某点的旋转程度。环量面密度定义为：

$$\nabla \times \vec{F}=\lim_{S \to 0}\frac{\oint_{l}\vec{F}\cdot d\vec{r}}{S}$$

其中环量 $\oint_l \vec{F}\cdot d\vec{r}$ 衡量了向量场与曲线的贴合程度（逆时针方向）。

## 二维旋度

![[5 - Curl-1779193030758.webp|275]]

$$\text{curl}\,\vec{V}=\nabla \times \vec{V}=\left(0,\;0,\;\frac{ \partial Q }{ \partial x }-\frac{ \partial P }{ \partial y }\right)$$

### 推导

考虑 $x$、$y$ 两个方向上的贡献：

![[5 - Curl-1779200035127.webp|241]]

- **$y$ 方向**：$\frac{\partial P}{\partial y}$（$x$ 分量的增长速率）使微元**顺时针**旋转，贡献 $-\frac{\partial P}{\partial y}$

![[5 - Curl-1779200060409.webp|238]]

- **$x$ 方向**：$\frac{\partial Q}{\partial x}$（$y$ 分量的增长速率）使微元**逆时针**旋转，贡献 $+\frac{\partial Q}{\partial x}$

综合可得，微元逆时针的旋转程度为：

$$\frac{ \partial Q }{ \partial x }-\frac{ \partial P }{ \partial y }$$

## 三维旋度

$$\text{curl}\,\vec{V}=\nabla \times \vec{V}=\left(\frac{ \partial R }{ \partial y }-\frac{ \partial Q }{ \partial z },\;\frac{ \partial P }{ \partial z }-\frac{ \partial R }{ \partial x },\;\frac{ \partial Q }{ \partial x }-\frac{ \partial P }{ \partial y }\right)$$

### 推导

旋转效果（对应一个矢量，类似角速度）可分解在三个方向上：

- **$z$ 方向**的旋转由 $xOy$ 平面上的旋转提供：$\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}$
- **$x$ 方向**：$\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}$
- **$y$ 方向**：$\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}$

## 物理意义

> [!note] 环量面密度最大的方向
> $\text{curl}\,\vec{F}\cdot \hat{v}$ 是向量场 $\vec{F}$ 绕 $\hat{v}$ 方向的轴的环量面密度。旋度矢量的方向就是环量面密度最大的方向。
