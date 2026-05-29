---
tags: [高等数学, 级数]
author: mo4mou
---

# 交错级数 Alternating Series

## 定义

> [!note] 交错级数
>  $\sum_{n=1}^{\infty}(-1)^{n-1}a_n$ 或 $\sum_{n=1}^{\infty}(-1)^n a_n$（$a_n > 0$）

---

## 莱布尼茨判别法 Leibniz Test

> [!note] 莱布尼茨判别法
> 若交错级数 $\sum_{n=1}^{\infty}(-1)^{n-1}a_n$ 满足：
> 1. $a_n \geq a_{n+1}$（$\forall\, n$，即 $\{a_n\}$ **单调递减**）
> 2. $\lim_{n \to \infty}a_n = 0$
>
> 则级数**收敛**，且其和 $S \leq a_1$，余项满足 $|R_n| \leq a_{n+1}$。

---

## 误差估计

> [!note] 余项估计
> 对莱布尼茨级数，截断到前 $n$ 项的余项满足：
> $$|R_n| = |S - S_n| \leq a_{n+1}$$
>
> 即**截断误差不超过被丢弃的第一项的绝对值**。

> [!example]
> 用 $\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n}$ 近似 $\ln 2$，取前 $100$ 项：
> $$\left|\ln 2 - \sum_{n=1}^{100}\frac{(-1)^{n-1}}{n}\right| \leq \frac{1}{101} \approx 0.0099$$
