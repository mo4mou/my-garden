---
tags: [高等数学, 级数]
author: mo4mou
---

# 函数项级数 Series of Functions

## 定义

> [!note] 函数项级数
> 设 $u_n(x)$（$n=1,2,\ldots$）是定义在集合 $D$ 上的函数列，则
> $$\sum_{n=1}^{\infty}u_n(x) = u_1(x) + u_2(x) + \cdots$$
> 称为 $D$ 上的**函数项级数**。

> [!note] 收敛域
> 使 $\sum u_n(x)$ 收敛的全体 $x$ 构成的集合，称为**收敛域**。
>
> 在收敛域上，每一 $x$ 对应一个和 $S(x)$，称为**和函数**。

---

[【直观理解函数列的【一致收敛】和【逐点收敛】】](https://www.bilibili.com/video/BV1hh41127Js?vd_source=d091f7377b6b261d14705b496c2674b5)
(一致收敛可以交换求和和其他运算符)

---

## 逐点收敛 Pointwise Convergence

> [!note] 逐点收敛
> 若对每个 $x \in D$，数项级数 $\sum u_n(x)$ 都收敛，则称 $\sum u_n(x)$ 在 $D$ 上**逐点收敛**。
>
> 即：$\forall\, x \in D$，$\forall\, \varepsilon > 0$，$\exists\, N = N(\varepsilon, x)$，当 $n > N$ 时，
> $$\left|S(x) - S_n(x)\right| = \left|\sum_{k=n+1}^{\infty}u_k(x)\right| < \varepsilon$$

---

## 一致收敛 Uniform Convergence

> [!note] 一致收敛
> 若 $\forall\, \varepsilon > 0$，$\exists\, N = N(\varepsilon)$（**与 $x$ 无关**），当 $n > N$ 时，$\forall\, x \in D$，
> $$\left|S(x) - S_n(x)\right| = \left|\sum_{k=n+1}^{\infty}u_k(x)\right| < \varepsilon$$
> 则称 $\sum u_n(x)$ 在 $D$ 上**一致收敛**。

---

## 一致收敛的判别法

### Weierstrass 判别法

> [!note] Weierstrass 判别法
> 若存在正数列 $\{M_n\}$，使得 $\forall\, x \in D$，
> $$|u_n(x)| \leq M_n \quad (\forall\, n)$$
> 且 $\sum M_n$ 收敛，则 $\sum u_n(x)$ 在 $D$ 上**绝对收敛且一致收敛**。
>
> $\sum M_n$ 称为**优级数**

> [!example]
> $\sum\frac{\sin nx}{n^2}$ 在 $(-\infty, +\infty)$ 上一致收敛。
>
> 因为 $|\frac{\sin nx}{n^2}| \leq \frac{1}{n^2}$，而 $\sum\frac{1}{n^2}$ 收敛（$p=2>1$）。

### Abel 判别法

> [!note] Abel 判别法
> 若：
> 1. $\sum a_n(x)$ 在 $D$ 上一致收敛
> 2. $\{b_n(x)\}$ 对每个 $x$ 单调，且**一致有界**（即 $\exists\, M > 0$，$|b_n(x)| \leq M$，$\forall\, n, x$）
>
> 则 $\sum a_n(x)\,b_n(x)$ 在 $D$ 上一致收敛。

---

## 一致收敛的性质（逐项运算）

> [!note] 连续性：逐项取极限
> 若 $u_n(x)$ 连续，且 $\sum u_n(x)$ 在 $D$ 上**一致收敛**到 $S(x)$，则 $S(x)$ 也连续，且
> $$\lim_{x \to x_0}\sum_{n=1}^{\infty}u_n(x) = \sum_{n=1}^{\infty}\lim_{x \to x_0}u_n(x) = \sum_{n=1}^{\infty}u_n(x_0)$$
> 即**极限运算与求和可交换**。

> [!note] 逐项积分
> 若 $u_n(x)$ 连续，$\sum u_n(x)$ 在 $[a,b]$ 上**一致收敛**，则
> $$\int_{a}^{b}\sum_{n=1}^{\infty}u_n(x)\,dx = \sum_{n=1}^{\infty}\int_{a}^{b}u_n(x)\,dx$$
> 即**积分运算与求和可交换**。

> [!note] 逐项求导
> 若 $u_n(x)$ 可导，$\sum u_n(x)$ 逐点收敛到 $S(x)$，且 $\sum u_n'(x)$ **一致收敛**，则
> $$S'(x) = \left(\sum_{n=1}^{\infty}u_n(x)\right)' = \sum_{n=1}^{\infty}u_n'(x)$$
> 即**求导运算与求和可交换**。

> [!warning] 注意
> 逐项求导的条件最苛刻：要求**导数级数**一致收敛，而非原级数一致收敛。
