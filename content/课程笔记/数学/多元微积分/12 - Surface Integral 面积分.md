---
tags: [高等数学, 多元微积分]
author: mo4mou
---

# 面积分 Surface Integral

## 第一类曲面积分（标量场）

> [!note] 定义
> $$\iint_{\Sigma}f(x,y,z)\,dS$$
> 将曲面 $\Sigma$ 无限细分，每小块上用函数值乘以面积微元求和取极限。

### 计算方法

参数化
设曲面参数方程为 $\vec{r}(u,v)=(x(u,v),\;y(u,v),\;z(u,v))$：

$$\iint_{\Sigma}f\,dS=\iint_{D'}f(\vec{r}(u,v))\,|\vec{r}_u\times\vec{r}_v|\,du\,dv$$

其中 $\vec{r}_u\times\vec{r}_v$ 为切向量的叉积，$|\vec{r}_u\times\vec{r}_v|\,du\,dv$ 即为面积微元 $dS$。

若方程为 $z=z(x,y)$，则缩放系数为 $\sqrt{ 1+z_{x}^{2}+z_{y}^{2} }$

### 几何意义

$f(x,y,z)\geq 0$ 时，$\iint_\Sigma f\,dS$ 表示以曲面 $\Sigma$ 为底、$f$ 为高的「曲面柱体」的体积。

$\iint_{\Sigma}1dS=曲面面积$

### 物理意义

| 被积函数 $f$ 的含义      | 积分结果         |
| ----------------- | ------------ |
| 面密度 $\rho(x,y,z)$ | 曲面薄壳的**总质量** |

## 第二类曲面积分（向量场）

> [!note] 定义
> $$\iint_{\Sigma}\vec{F}\cdot d\vec{S}$$
> 向量场 $\vec{F}$ 穿过曲面 $\Sigma$ 的**通量**。

注意曲面的指定侧（法线方向）。

### 三种等价形式

$$\iint_{\Sigma}\vec{F}\cdot d\vec{S}=\iint_{\Sigma}(P\cos\alpha+Q\cos\beta+R\cos\gamma)\,dS=\iint_{\Sigma}P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy$$

其中 $\vec{F}=(P,Q,R)$，$\hat{n}=(\cos\alpha,\cos\beta,\cos\gamma)$ 为单位法向量。
(关键注意法向量的分析)

### 计算方法

**方法一：投影法**

设曲面 $z=z(x,y)$，取上侧（法线朝上）：

$$\iint_{\Sigma}R\,dx\,dy=\iint_{D_{xy}}R(x,y,z(x,y))\,dx\,dy$$

> [!tip] 符号规则
> 取上侧 / 前侧 / 右侧 → 正号；取下侧 / 后侧 / 左侧 → 负号。

法向量和投影方向一致取正，相反取负。

**方法二：高斯公式**

封闭曲面（或补全为封闭曲面），运用：

$$\oint_{S}\vec{F}\cdot d\vec{S}=\iiint_{\Omega}\nabla\cdot\vec{F}\,dV$$

> [!warning] 方向
> 高斯公式要求曲面取**外侧**（法线朝外）。

若有洞且 $\nabla\cdot \vec{F}\equiv_{0}$ ,则任意包含相同洞的 $\Sigma_{1}$ 与其曲面积分值相等
$\oint_{\Sigma}\vec{F}\cdot d\vec{S}=\oint_{\Sigma_{1}}\vec{F}\cdot d\vec{S}$

**方法三：换元法（参数化）**

设曲面参数化 $\vec{r}(u,v)=(x(u,v),\;y(u,v),\;z(u,v))$：

$$\iint_{\Sigma}\vec{F}\cdot d\vec{S}=\iint_{D'}\vec{F}(\vec{r}(u,v))\cdot(\vec{r}_u\times\vec{r}_v)\,du\,dv$$

> [!warning] 与第一类的区别
> 第一类用 $|\vec{r}_u\times\vec{r}_v|$（取模，恒正）
>
> 第二类用 $\vec{r}_u\times\vec{r}_v$（不取模，保留方向）

$dS=|\vec{r}_{u}\times \vec{r}_{v}|$
 
## 对称性

### 奇偶对称

若曲面 $\Sigma$ （朝外侧）关于 $xOy$ 面对称，$\vec{F}=(P,Q,R)$：

| 条件                               | 结果                                                          |
| -------------------------------- | ----------------------------------------------------------- |
| $R(x,y,-z)=-R(x,y,z)$（关于 $z$ 为奇） | $\iint_\Sigma R\,dx\,dy=2\iint_{\Sigma_{z\geq 0}}R\,dx\,dy$ |
| $R(x,y,-z)=R(x,y,z)$（关于 $z$ 为偶）  | $\iint_\Sigma R\,dx\,dy=0$                                  |
 
### 轮换对称

若曲面 $\Sigma$ 关于 $y=x$ 对称（交换 $x,y$ 后曲面不变），则：

$$\iint_{\Sigma}P\,dy\,dz=\iint_{\Sigma}Q\,dz\,dx$$
