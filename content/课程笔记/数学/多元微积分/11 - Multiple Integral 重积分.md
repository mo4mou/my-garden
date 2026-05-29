---
tags: [高等数学, 多元微积分]
author: mo4mou
---

# 重积分 Multiple Integral

## 二重积分

> [!note] 定义
> $$\iint_{D}f(x,y)\,d\sigma$$
> 将区域 $D$ 无限细分，每小块上用函数值乘以面积微元求和取极限。

### 计算方法

**方法一：直角坐标**

化为累次积分（先积一个变量，再积另一个）：

$$\iint_{D}f(x,y)\,dx\,dy=\int_{a}^{b}dx\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)\,dy$$

> [!tip] 积分次序
> 根据区域形状选择先积哪个变量，使上下限尽可能简单。

**方法二：极坐标**

适用于圆形、扇形等区域，令 $x=r\cos\theta,\;y=r\sin\theta$：

$$\iint_{D}f(x,y)\,dx\,dy=\iint_{D'}f(r\cos\theta,\;r\sin\theta)\,r\,dr\,d\theta$$

> [!warning] 面积微元
> 极坐标下 $d\sigma=r\,dr\,d\theta$，不要漏掉 Jacobian 因子 $r$。

### 几何意义

$f(x,y)\geq 0$ 时，$\iint_D f\,d\sigma$ 表示以 $D$ 为底、$f(x,y)$ 为高的曲顶柱体体积。

### 物理意义

| 被积函数 $f$ 的含义            | 积分结果                   |
| ----------------------- | ---------------------- |
| 面密度 $\rho(x,y)$         | 平板的**总质量**             |

## 三重积分

> [!note] 定义
> $$\iiint_{\Omega}f(x,y,z)\,dV$$


### 计算方法

**方法一：直角坐标**

$$\iiint_{\Omega}f\,dx\,dy\,dz=\int_{a}^{b}dx\int_{\varphi_1(x)}^{\varphi_2(x)}dy\int_{\psi_1(x,y)}^{\psi_2(x,y)}f\,dz$$

**方法二：平面截割法**

用平行于某坐标面的平面族切割区域 $\Omega$，先求截面面积（或截面上的积分值），再沿第三方向积分：

$$\iiint_{\Omega}f\,dV=\int_{a}^{b}A(z)\,dz=\int^{b}_{a}dz\iint_{D_z}f(x,y,z)\,dx\,dy$$

其中 $A(z)=\iint_{D_z}f(x,y,z)\,dx\,dy$ 为 $z$ 处截面的积分值，$D_z$ 为 $z=c$ 平面截 $\Omega$ 所得的截面区域。

> [!tip] 适用情形
> 截面形状规则（如圆、矩形）且面积易于计算时，比坐标变换更简洁。

**方法三：柱坐标**

适用于柱形、旋转体，令 $x=r\cos\theta,\;y=r\sin\theta,\;z=z$：

$$\iiint_{\Omega}f\,dV=\iiint f(r\cos\theta,\;r\sin\theta,\;z)\,r\,dr\,d\theta\,dz$$

**方法四：球坐标**

适用于球形、锥形区域，令 $x=r\sin\varphi\cos\theta,\;y=r\sin\varphi\sin\theta,\;z=r\cos\varphi$：

$$\iiint_{\Omega}f\,dV=\iiint f\cdot r^{2}\sin\varphi\,dr\,d\varphi\,d\theta$$

> [!warning] 体积微元
> | 坐标系 | 体积微元 $dV$ |
> |--------|---------------|
> | 直角 | $dx\,dy\,dz$ |
> | 柱坐标 | $r\,dr\,d\theta\,dz$ |
> | 球坐标 | $r^2\sin\varphi\,dr\,d\varphi\,d\theta$ |

### 物理意义

| 被积函数 $f$ 的含义                | 积分结果              |
| --------------------------- | ----------------- |
| 体密度 $\rho(x,y,z)$           | 物体的**总质量**        |


## 换元法

> [!note] 一般换元公式
> 设变换 $x=x(u,v),\;y=y(u,v)$，则：
>
> $$\iint_{D}f(x,y)\,dx\,dy=\iint_{D'}f(x(u,v),\;y(u,v))\,|J|\,du\,dv$$
>
> 其中 $J=\frac{\partial(x,y)}{\partial(u,v)}$ 为变换的 Jacobian 行列式。

## 对称性

> [!note] 利用对称性简化重积分
> 识别对称性可以大幅简化计算，核心思路：**偶函数加倍，奇函数归零**。

### 奇偶对称

**区域关于 $y$ 轴对称**（$x \leftrightarrow -x$）：

$$\iint_{D}f(x,y)\,d\sigma=\begin{cases}0 & f(-x,y)=-f(x,y)\;\text{（关于 $x$ 为奇函数）} \\ 2\displaystyle\iint_{D_{x\geq 0}}f(x,y)\,d\sigma & f(-x,y)=f(x,y)\;\text{（关于 $x$ 为偶函数）}\end{cases}$$

**区域关于 $x$ 轴对称**（$y \leftrightarrow -y$）：

$$\iint_{D}f(x,y)\,d\sigma=\begin{cases}0 & f(x,-y)=-f(x,y) \\ 2\displaystyle\iint_{D_{y\geq 0}}f(x,y)\,d\sigma & f(x,-y)=f(x,y)\end{cases}$$

### 轮换对称

若区域 $D$ 关于 $y=x$ 对称（交换 $x,y$ 后区域不变），则：

$$\iint_{D}f(x,y)\,d\sigma=\iint_{D}f(y,x)\,d\sigma$$

> [!tip] 常用技巧
> 结合轮换对称，可将复杂被积函数简化：
>
> $$\iint_{D}f(x,y)\,d\sigma=\frac{1}{2}\iint_{D}\left[f(x,y)+f(y,x)\right]d\sigma$$
>
> 例：$x^{2}+y^{2}$ 在圆域上可直接替换为 $2x^{2}$ 再积分。
