---
tags: [高等数学, 多元微积分]
author: mo4mou
---

# 散度 Divergence

## 定义

> [!note] 散度
> 一点处（面积/体积微元）的**净流出通量的速率**。
>
> $$\text{div}\,\vec{F}=\nabla \cdot \vec{F}=\frac{ \partial P }{ \partial x } +\frac{ \partial Q }{ \partial y }$$

| 符号 | 含义 |
|------|------|
| $\text{div}\,\vec{F}>0$ | 有**源**，净流出 |
| $\text{div}\,\vec{F}<0$ | 有**汇**，净流入 |
| $\text{div}\,\vec{F}=0$ | 无源无汇（如不可压缩流体） |

散度在所有维度上均有定义

## 推导

向量场 $\vec{F}(x,y)=(P,\,Q)$，只需考虑附加向量的 $x$、$y$ 分量（其余方向为其线性组合）：
![[4 - Divergence-1779176144246.webp|231]]
影响流出通量的是：$x$ 分量在 $x$ 方向上的变化量，以及 $y$ 分量在 $y$ 方向上的变化量。两个对面的净流出通量速率对应各自的偏导数 $\frac{\partial P}{\partial x}dx$。

因此面微元 $dxdy$ 上的净流出通量为：

$$\Phi=\text{div}\,\vec{F}\,dx\,dy=\left(\frac{\partial P}{\partial x}dx\right)dy+\left(\frac{\partial Q}{\partial y}dy\right)dx$$

消去 $dx\,dy$ 即得：

$$\Rightarrow \text{div}\,\vec{F}=\frac{ \partial P }{ \partial x } +\frac{ \partial Q }{ \partial y }=\nabla\cdot \vec{F}$$