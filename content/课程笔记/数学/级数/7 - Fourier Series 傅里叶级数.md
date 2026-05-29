---
tags: [高等数学, 级数, 傅里叶]
author: mo4mou
---

# 傅里叶级数 Fourier Series

## 正交函数系

> [!note] 正交函数
> 若 $\displaystyle\int_{a}^{b}u(x)v(x)\,dx=0$，则称 $u(x)$ 与 $v(x)$ 在 $[a,b]$ 上**正交**。

> [!note] 正交函数系
> 函数列 $\{u_n(x)\}$ 定义在 $[a,b]$ 上，若
> $$\int_{a}^{b}u_n(x)\,u_m(x)\,dx=\begin{cases} \neq 0 & n=m \\ =0 & n\neq m \end{cases}$$
> 则称 $\{u_n(x)\}$ 为**正交函数系**。

---

## 三角函数系的正交性

> [!note] 三角函数系
> 函数系
> $$\{1,\;\cos x,\;\sin x,\;\cos 2x,\;\sin 2x,\;\ldots,\;\cos nx,\;\sin nx,\;\ldots\}$$
> 在 $[-\pi,\pi]$ 上正交

---

## 傅里叶级数的定义

> [!note] 傅里叶级数
> 设 $f(x)$ 在 $[-\pi, \pi]$ 上可积，则**傅里叶级数**为
> $$f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty}(a_n\cos nx + b_n\sin nx)$$
> 其中系数为：
> $$
> \begin{aligned}
> a_n &= \frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos nx\,dx \quad (n=0,1,2,\ldots) \\[6pt]
> b_n &= \frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\sin nx\,dx \quad (n=1,2,\ldots)
> \end{aligned}
> $$
> $a_n$、$b_n$ 称为 $f(x)$ 的**傅里叶系数**。

> [!note] 奇偶函数的简化
> - 若 $f(x)$ 为**奇函数**：$a_n=0$，级数为**正弦级数** $f(x)\sim\displaystyle\sum_{n=1}^{\infty}b_n\sin nx$
> - 若 $f(x)$ 为**偶函数**：$b_n=0$，级数为**余弦级数** $f(x)\sim\dfrac{a_0}{2}+\displaystyle\sum_{n=1}^{\infty}a_n\cos nx$

> [!note] 谐波分析
> - $\dfrac{a_0}{2}$：**直流分量**（非正弦波的常数项）
> - $a_1\cos\omega x+b_1\sin\omega x$：**基波**（与 $f(x)$ 同频）
> - $a_n\cos n\omega x+b_n\sin n\omega x=A_n\sin(n\omega x+\varphi_n)$：**$n$ 阶谐波**（$A_n$ 为振幅频谱）
>
> 复数形式中：$|c_n|=|c_{-n}|=\dfrac{1}{2}\sqrt{a_n^2+b_n^2}=\dfrac{1}{2}A_n$
>
> 可将各阶谐波的振幅与频率的函数关系画出**频谱图**。

---

## Dirichlet 收敛定理

> [!note] Dirichlet 条件
> 设 $f(x)$ 以 $2\pi$ 为周期，在 $[-\pi, \pi]$ 上满足：
> 1. 只有**有限个第一类间断点**
> 2. 只有**有限个极值点**
>
> 则 $f(x)$ 的傅里叶级数处处绝对收敛，且在：
> - **连续点**：级数收敛到 $f(x)$
> - **间断点**：级数收敛到 $\frac{f(x^+) + f(x^-)}{2}$
> - **端点**（周期延拓后的间断点）：收敛到 $\frac{f(-\pi^+) + f(\pi^-)}{2}$

> [!warning] 注意
> Dirichlet 条件是**充分条件**，不是必要条件。很多不满足该条件的函数，其傅里叶级数仍然收敛。

> [!note] 吉布斯现象
> 用无限个光滑正弦波去逼近具有跳变的信号时，在跳变点附近必然产生无法消除的过冲：
> - **高度固定**：无论叠加多少项，最大过冲始终约为跳变幅度的 **9%**
> - **宽度收缩**：项数增加时，过冲不变矮，只会变窄并向跳变点压缩

---

## 延拓

> [!note] 延拓的核心思想
> 傅里叶级数要求函数定义在**完整周期** $[-\pi,\pi]$ 上，但实际问题中 $f(x)$ 不一定有完整定义。
> 此时一般构造辅助函数 $F(x)$ 满足 Dirichlet 条件，将其展开为傅里叶级数并限制定义域。
>
> 延拓后再进行**周期延拓**（以 $2\pi$ 为周期向两侧重复），即为傅里叶级数所表示的函数。

### 偶延拓（余弦级数）

> [!note] 偶延拓
> 设 $f(x)$ 仅在 $[0, \pi]$ 上有定义，若将其**偶延拓**到 $[-\pi, 0]$（即 $f(-x) = f(x)$），则：
> - $b_n = 0$（奇函数在对称区间积分为零）
> - 级数为**余弦级数**：
> $$f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty}a_n\cos nx$$
> 其中
> $$a_n = \frac{2}{\pi}\int_{0}^{\pi}f(x)\cos nx\,dx \quad (n=0,1,2,\ldots)$$

### 奇延拓（正弦级数）

> [!note] 奇延拓
> 设 $f(x)$ 仅在 $[0, \pi]$ 上有定义，若将其**奇延拓**到 $[-\pi, 0]$（即 $f(-x) = -f(x)$），则：
> - $a_n = 0$（偶函数在对称区间积分为零）
> - 级数为**正弦级数**：
> $$f(x) \sim \sum_{n=1}^{\infty}b_n\sin nx$$
> 其中
> $$b_n = \frac{2}{\pi}\int_{0}^{\pi}f(x)\sin nx\,dx \quad (n=1,2,\ldots)$$

---

## 周期 $2l$ 的傅里叶级数

> [!note] 一般周期
> 设 $f(x)$ 以 $2l$ 为周期，在 $[-l, l]$ 上满足 Dirichlet 条件，则
> $$f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi x}{l} + b_n\sin\frac{n\pi x}{l}\right)$$
> 其中
> $$
> \begin{aligned}
> a_n &= \frac{1}{l}\int_{-l}^{l}f(x)\cos\frac{n\pi x}{l}\,dx \quad (n=0,1,2,\ldots) \\[6pt]
> b_n &= \frac{1}{l}\int_{-l}^{l}f(x)\sin\frac{n\pi x}{l}\,dx \quad (n=1,2,\ldots)
> \end{aligned}
> $$

> [!tip] 变量代换
> 令 $t = \frac{\pi x}{l}$，可将周期 $2l$ 的问题化为周期 $2\pi$ 的标准形式。

---

## 常见函数的傅里叶级数

| 函数 | 傅里叶级数 |
|------|-----------|
| $f(x) = x$（$-\pi < x < \pi$） | $2\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}\sin nx$ |
| $f(x) = x^2$（$-\pi < x < \pi$） | $\dfrac{\pi^2}{3} + 4\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\cos nx$ |
| $f(x) = \|x\|$（$-\pi < x < \pi$） | $\dfrac{\pi}{2} - \dfrac{4}{\pi}\displaystyle\sum_{n=1}^{\infty}\frac{\cos(2n-1)x}{(2n-1)^2}$ |
| $f(x) = 1$（常数） | $1$（仅有 $a_0/2 = 1$） |

---

## 复数形式

> [!note] Euler 公式
> $$e^{inx}=\cos nx+i\sin nx$$
> 由此可得
> $$\cos nx=\frac{e^{inx}+e^{-inx}}{2}, \quad \sin nx=\frac{e^{inx}-e^{-inx}}{2i}$$

> [!note] 复数形式傅里叶级数
> $$f(x) \sim \sum_{n=-\infty}^{+\infty} c_n e^{inx}$$
> 其中**复数傅里叶系数**为
> $$c_n = \frac{1}{2\pi}\int_{-\pi}^{\pi}f(x)e^{-inx}\,dx \quad (n \in \mathbb{Z})$$

> [!note] 系数对应关系
> $$
> \begin{aligned}
> c_0 &= \frac{a_0}{2} \\[6pt]
> c_n &= \frac{a_n - ib_n}{2} \quad (n > 0) \\[6pt]
> c_{-n} &= \frac{a_n + ib_n}{2} = \overline{c_n} \quad (n > 0)
> \end{aligned}
> $$
> $$
> \begin{aligned}
> a_n &= c_n + c_{-n} = 2\operatorname{Re}(c_n) \quad (n \geq 0) \\[6pt]
> b_n &= i(c_n - c_{-n}) = -2\operatorname{Im}(c_n) \quad (n \geq 1)
> \end{aligned}
> $$

> [!tip] 优势
> 复数形式更简洁，在信号处理和物理学中使用更方便。

---

## Parseval 恒等式

> [!note] Parseval 恒等式
> 设 $f(x)$ 的傅里叶级数为 $\frac{a_0}{2} + \sum(a_n\cos nx + b_n\sin nx)$，若 $f(x)$ 在 $[-\pi, \pi]$ 上平方可积，则
> $$\frac{1}{\pi}\int_{-\pi}^{\pi}|f(x)|^2\,dx = \frac{a_0^2}{2} + \sum_{n=1}^{\infty}(a_n^2 + b_n^2)$$
>
> 复数形式下：
> $$\frac{1}{2\pi}\int_{-\pi}^{\pi}|f(x)|^2\,dx = \sum_{n=-\infty}^{+\infty}|c_n|^2$$
>
> 信号的**平均功率**等于各次谐波功率之和。
