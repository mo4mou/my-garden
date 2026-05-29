---
tags: [高等数学, 级数]
author: mo4mou
---

# 正项级数 Positive Term Series

## 定义

> [!note] 正项级数
> 若从第 $k$ 项起，$\forall\, n \geq k$，均有 $a_n \geq 0$，则称 $\sum_{n=1}^{\infty}a_n$ 为**正项级数**。

---

## 比较判别法

> [!note] 比较判别法
> 设 $0 \leq a_n \leq b_n$（$\forall\, n \geq N$），则：
> - $\sum b_n$ 收敛 $\Rightarrow$ $\sum a_n$ 收敛（大的收敛 $\Rightarrow$ 小的收敛）
> - $\sum a_n$ 发散 $\Rightarrow$ $\sum b_n$ 发散（小的发散 $\Rightarrow$ 大的发散）

> [!note] 极限形式
> 设 $a_n > 0$，$b_n > 0$，且
> $$\lim_{n \to \infty}\frac{a_n}{b_n} = L$$
> 则：
> - $0 < L < +\infty$：$\sum a_n$ 与 $\sum b_n$ **同敛散**
> - $L = 0$：$\sum b_n$ 收敛 $\Rightarrow$ $\sum a_n$ 收敛
> - $L = +\infty$：$\sum b_n$ 发散 $\Rightarrow$ $\sum a_n$ 发散

> [!tip] 常用比较对象
> - $p$-级数：$\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^p}$，当 $p > 1$ 收敛，$p \leq 1$ 发散
> - 调和级数：$\displaystyle\sum_{n=1}^{\infty}\frac{1}{n}$（$p=1$，发散）

---

## 比值判别法（达朗贝尔判别法 D'Alembert）

> [!note] 比值判别法
> 设 $a_n > 0$，且
> $$\lim_{n \to \infty}\frac{a_{n+1}}{a_n} = \rho$$
> 则：
> - $\rho < 1$：$\sum a_n$ **收敛**
> - $\rho > 1$（ $= +\infty$）：$\sum a_n$ **发散**
> - $\rho = 1$：**无法判断**（需换其他方法）

---

## 根值判别法（柯西判别法 Cauchy）

> [!note] 根值判别法
> 设 $a_n \geq 0$，且
> $$\lim_{n \to \infty}\sqrt[n]{a_n} = \rho$$
> 则：
> - $\rho < 1$：$\sum a_n$ **收敛**
> - $\rho > 1$（或 $= +\infty$）：$\sum a_n$ **发散**
> - $\rho = 1$：**无法判断**

> [!tip] 比值 vs 根值
> 一般**根值法更强**

---

## 拉贝判别法 Raabe's Test

> [!note] 拉贝判别法
> 当比值判别法失效（$\rho = 1$）时使用。设 $a_n > 0$，且
> $$\lim_{n \to \infty}n\!\left(\frac{a_n}{a_{n+1}} - 1\right) = R$$
> 则：
> - $R > 1$：$\sum a_n$ **收敛**
> - $R < 1$：$\sum a_n$ **发散**
> - $R = 1$：**无法判断**

---

## 积分判别法 Integral Test

> [!note] 积分判别法
> 设 $f(x)$ 在 $[1, +\infty)$ 上**连续、正值、单调递减**，且 $a_n = f(n)$，则：
> $$\sum_{n=1}^{\infty}a_n \text{ 与 } \int_{1}^{+\infty}f(x)\,dx \text{ 同敛散}$$

> [!example] $p$-级数
> $$\sum_{n=1}^{\infty}\frac{1}{n^p} \quad \text{与} \quad \int_{1}^{+\infty}\frac{1}{x^p}\,dx \text{ 同敛散}$$
> - $p > 1$：$\displaystyle\int_{1}^{+\infty}\frac{1}{x^p}\,dx = \frac{1}{p-1} < +\infty$，**收敛**
> - $p \leq 1$：**发散**

---

## 判别法选择策略

| 情形 | 推荐方法 |
|------|----------|
| $a_n$ 含 $n!$、$a^n$ 等乘积形式 | **比值判别法** |
| $a_n$ 含 $n$ 次幂（如 $(\frac{n}{2n+1})^n$） | **根值判别法** |
| $a_n$ 为 $\frac{1}{n^p}$ 型或可与 $p$-级数比较 | **比较判别法**（极限形式） |
| $a_n = f(n)$ 且 $f(x)$ 易积分 | **积分判别法** |
| 比值法 $\rho = 1$，但 $\frac{a_n}{a_{n+1}}$ 偏离 $1$ 的速度可量化 | **拉贝判别法** |
| 所有判别法均失效 | 回归定义，考察部分和 $\{S_n\}$ |
