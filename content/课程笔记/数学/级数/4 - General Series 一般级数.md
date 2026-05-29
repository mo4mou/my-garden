---
tags: [高等数学, 级数]
author: mo4mou
---

# 一般级数 General Series

## 绝对收敛与条件收敛

> [!note] 绝对收敛
> 若 $\sum_{n=1}^{\infty}|a_n|$ 收敛，则称 $\sum_{n=1}^{\infty}a_n$ **绝对收敛**。
> 若级数绝对收敛，则本身一定收敛

> [!note] 条件收敛
> 若 $\sum_{n=1}^{\infty}a_n$ 收敛，但 $\sum_{n=1}^{\infty}|a_n|$ 发散，则称 $\sum_{n=1}^{\infty}a_n$ **条件收敛**。

## 收敛级数的运算性质

> [!note] 结合律
> 收敛级数可以**任意添加括号**，所得级数仍收敛且和不变。
>

> [!note] 绝对收敛级数的交换律
> 绝对收敛级数可以**任意重排**项的顺序，和不变。

> [!note] 绝对收敛级数的乘积
> 若 $\sum a_n$ 和 $\sum b_n$ 都绝对收敛，则它们的**柯西乘积**
> $$\sum_{n=0}^{\infty}c_n = \sum_{n=0}^{\infty}\left(\sum_{k=0}^{n}a_k\,b_{n-k}\right)$$
> 也绝对收敛，且和为 $\left(\sum a_n\right)\!\left(\sum b_n\right)$。
