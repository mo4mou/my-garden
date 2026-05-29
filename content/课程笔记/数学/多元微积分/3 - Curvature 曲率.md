---
tags: [高等数学, 多元微积分]
author: mo4mou
---

# 曲率 Curvature

## 定义

对于参数曲线 $\vec{s}(t)$，其单位切向量为 $\vec{T}(t)$，则曲率 $\kappa$ 描述的是切向量沿曲线旋转的快慢：

> [!note] 曲率
> $$\kappa=\frac{|d\vec{T}|}{|d\vec{s}|}=\frac{|\vec{s}''\times \vec{s}'|}{|\vec{s}'|^{3}}$$

曲率越大，曲线弯曲得越急；$\kappa=0$ 对应直线。

## 曲率半径

曲率的倒数称为曲率半径，直观表示「这条曲线在该点等价于多大的圆」：

> [!note] 曲率半径
> $$\rho=\frac{1}{\kappa}$$

> [!tip] 实用技巧
> 计算时一般可以先用物理方法求出曲率半径 $\rho$，再取倒数得到曲率 $\kappa$。

## 推导

由定义出发，单位切向量为：

$$\vec{T}=\frac{\vec{s}'}{|\vec{s}'|}$$

对 $\vec{T}$ 求导时，二阶导的效果可以分解为两部分：

- **旋转分量**：与速度方向垂直，大小正比于 $\sin\theta$
- **拉伸分量**：与速度方向平行，大小正比于 $\cos\theta$

取叉积恰好只保留旋转部分，因此：

$$\left|\frac{d\vec{T}}{dt}\right|=\left|\frac{\frac{\vec{s}'}{|\vec{s}'|}\times \vec{s}''}{|\vec{s}'|}\right|$$

其中 $\frac{\vec{s}'}{|\vec{s}'|}\times \vec{s}''$ 是切向量旋转效果的变化量（除以模长 $|\vec{s}'|$ 提取了切向量的旋转分量），再除以 $|\vec{s}'|$ 完成单位化。结合 $|d\vec{s}|=|\vec{s}'|\,dt$，最终得到：

$$\kappa=\frac{|\vec{s}''\times \vec{s}'|}{|\vec{s}'|^{3}}$$
