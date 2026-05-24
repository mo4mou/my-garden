---
tags: [高等数学, 多元微积分]
author: mo4mou
---

# 散度 Divergence

## 定义

> [!note] 散度
> 一点处单位微元(面积微元、体积微元)的净流出通量（即通量密度）。
>
> $$\text{div}\,\vec{F}=\nabla \cdot \vec{F}=\frac{ \partial P }{ \partial x } +\frac{ \partial Q }{ \partial y }$$

$$\nabla\cdot \vec{F}=\lim_{ \Delta V \to 0 } \frac{\oint_{\partial\Delta V}\vec{F}\cdot d\vec{S}}{\Delta V}$$

| 符号 | 含义 |
|------|------|
| $\text{div}\,\vec{F}>0$ | 有**源**，净流出 |
| $\text{div}\,\vec{F}<0$ | 有**汇**，净流入 |
| $\text{div}\,\vec{F}=0$ | 无源无汇（如不可压缩流体） |

散度在所有维度上均有定义

代数意义：分量受共线坐标的影响程度

## 推导

向量场 $\vec{F}(x,y)=(P,\,Q)$，只需考虑附加向量的 $x$、$y$ 分量（其余方向为其线性组合）：
![[4 - Divergence-1779176144246.webp|231]]
影响流出通量的是：$x$ 分量在 $x$ 方向上的变化量，以及 $y$ 分量在 $y$ 方向上的变化量。
左右两面的**净**流出通量为 $\frac{\partial P}{\partial x}dx\cdot dy$，上下两面的**净**流出通量为 $\frac{\partial Q}{\partial y}dy\cdot dx$

因此面微元 $dxdy$ 上的净流出通量为：

$$\Phi=\text{div}\,\vec{F}\,dx\,dy=\left(\frac{\partial P}{\partial x}dx\right)dy+\left(\frac{\partial Q}{\partial y}dy\right)dx$$

消去 $dx\,dy$ 即得(通量的面密度)：

$$\Rightarrow \text{div}\,\vec{F}=\frac{ \partial P }{ \partial x } +\frac{ \partial Q }{ \partial y }=\nabla\cdot \vec{F}$$