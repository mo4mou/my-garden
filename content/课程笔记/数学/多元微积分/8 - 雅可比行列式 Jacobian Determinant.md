---
tags: [高等数学, 多元微积分]
author: mo4mou
---

# 雅可比行列式 Jacobian Determinant

## 定义

> [!note] 雅可比行列式
> 变换 $\mathbf{f}:\mathbb{R}^n \to \mathbb{R}^m$，雅可比矩阵为 $\mathbf{J}$，则雅可比行列式为 $|\mathbf{J}|$
>
> 若 $m \neq n$（非方阵），一般处理为：
> - $m>n$：$\sqrt{|J^T J|}$（$n$ 维到 $m$ 维的缩放系数）
> - $m<n$：$\sqrt{|JJ^T|}$

## 几何意义

行列式的绝对值衡量线性变换对体积的缩放程度。雅可比行列式就是这个**局部缩放系数**，反映了映射过程中弧长/面积/体积的缩放。

> [!example] 极坐标变换
> $f(r,\theta)=\left\{r\cos \theta,\;r\sin \theta\right\}$
>
> $(r,\theta)$ 平面上的面积微元 $dr\,d\theta$ 映射到 $(x,y)$ 平面上的面积微元 $dx\,dy$，缩放系数为 $r$：
>
> $$r\,dr\,d\theta=dx\,dy$$
