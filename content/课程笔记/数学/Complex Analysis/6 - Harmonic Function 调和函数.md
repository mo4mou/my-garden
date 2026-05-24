---
tags: [复分析, 调和函数]
author: mo4mou
---

# 调和函数 Harmonic Function

## 定义

> [!note] 调和函数
> 满足拉普拉斯方程的函数：
>
> $$\Delta f=0,\quad\text{即}\quad\frac{\partial^2 f}{\partial x^2}+\frac{\partial^2 f}{\partial y^2}=0$$
>
> 详见 [[6 - 拉普拉斯算子&调和函数 Laplacian&Harmanic Function]]

## 重要结论

> [!note] 全纯函数与调和函数
> 任何全纯函数的**实部 $u$ 和虚部 $v$ 都必然是调和函数**，且 $u$ 和 $v$ 为**共轭调和函数**。

### 推导

全纯函数满足 C-R 方程：

$$\begin{cases}\frac{\partial u}{\partial x}=\frac{\partial v}{\partial y} \\ \frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x}\end{cases}\Rightarrow\begin{cases}\frac{\partial^2 u}{\partial x^2}=\frac{\partial^2 v}{\partial y\partial x} \\ \frac{\partial^2 u}{\partial y^2}=-\frac{\partial^2 v}{\partial x\partial y}\end{cases}$$

相加即得 $\frac{\partial^2 u}{\partial x^2}+\frac{\partial^2 u}{\partial y^2}=0$，$v$ 同理。

### 构造调和多项式的基

通过取 $z^n$ 的实部和虚部可以构造出调和多项式的基。

## 共轭调和函数的存在性

> [!question] 问题
> 给定一个调和函数 $u$，能否找到对应的 $v$ 使得 $u+iv$ 是全纯的？

### 局部存在性（总是成立）

在任意一点的邻域内，共轭调和函数总存在，可通过积分构造：

$$v(x,y)=\int_{(x_0,y_0)}^{(x,y)}\left(-\frac{\partial u}{\partial y}\,dx+\frac{\partial u}{\partial x}\,dy\right)$$

### 整体存在性（取决于区域拓扑）

**单连通区域**（如整个复平面、圆盘、上半平面）：

- 任意 $u$ 可以延拓为 $v$
- 通过积分 C-R 方程来唯一构造（差一个常数）
- $f=u+iv$ 是单连通区域上的全纯函数

**多连通区域**（如有洞的圆环）：

- 积分可能产生「周期」，绕空洞一圈后 $v$ 的值不闭合
- 充要条件：对区域的每个洞，沿围绕该洞的闭合回路 $C$ 有：

$$\oint_C\left(-\frac{\partial u}{\partial y}\,dx+\frac{\partial u}{\partial x}\,dy\right)=0$$

若不满足，则不存在单值的全局共轭调和函数，只能得到「多值」的共轭（如同复对数）。

> [!example] 反例
> $\omega=\ln(|x+iy|)$，$U=\mathbb{C}\setminus\{0\}$
>
> $u=\text{Re}\ln z$，$\text{Im}\ln z=\text{Arg}\,z$ 不能被全局连续定义（多值）。
