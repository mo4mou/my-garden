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
> - $m<n$：$\sqrt{|JJ^T|}$（$m$ 维到 $n$ 维的缩放系数）

## 几何意义

行列式的绝对值衡量线性变换对体积的缩放程度。雅可比行列式就是这个**局部缩放系数**，反映了映射过程中弧长/面积/体积的缩放。

> [!example] 极坐标变换
> $f(r,\theta)=\left\{r\cos \theta,\;r\sin \theta\right\}$
>
> $(r,\theta)$ 平面上的面积微元 $dr\,d\theta$ 映射到 $(x,y)$ 平面上的面积微元 $dx\,dy$，缩放系数为 $r$：
>
> $$r\,dr\,d\theta=dx\,dy$$

## 非方阵的缩放系数

当 $m \neq n$ 时，$J$ 不是方阵，无法直接取行列式。需要构造方阵：

| 情形 | 构造方式 | 缩放系数 |
|------|----------|----------|
| $m>n$（低维→高维） | $J^TJ$（$n\times n$） | $\sqrt{\det(J^TJ)}$ |
| $m<n$（高维→低维） | $JJ^T$（$m\times m$） | $\sqrt{\det(JJ^T)}$ |

> [!note] 与叉积的等价性
> 对于 2D 曲面嵌入 3D：$\sqrt{\det(J^TJ)}=|\vec{r}_u\times\vec{r}_v|$
>
> 由拉格朗日恒等式 $|\vec{a}\times\vec{b}|^2=|\vec{a}|^2|\vec{b}|^2-(\vec{a}\cdot\vec{b})^2$ 可证。叉积是 3D 的快捷方式，$\sqrt{\det(J^TJ)}$ 是任意维的通用公式。
