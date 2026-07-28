---
projectId: vehicle
language: zh
---

## 系统架构

我将系统拆分为状态调度、可复用模拟组件、特效制作与玩法接入，使各层可以独立演进，而不需要了解彼此的实现细节。

- 天气请求由 BP_WeatherManager 接收并映射到数据驱动预设，再按可配置时长混合天空、曝光、云层、后处理和载具雾参数。
- C++ 基础粒子组件统一管理发射、生命周期模拟与实例化渲染；Data Asset 负责配置，派生组件分别实现雾、烟尘和火花行为。
- 面向 Blueprint 的接口把系统接入天气事件、车轮状态、车辆速度与碰撞冲量，同时避免将模拟逻辑重新堆回玩法 Blueprint。

<div class="project-detail-gallery">
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/skyfire-uprising/weather-transition.webp" width="1800" height="1625" alt="展示天气请求初始化、定时插值与环境参数应用流程的 Blueprint 图。" loading="lazy" decoding="async" />
  <figcaption>BP_WeatherManager 过渡流程：记录当前与目标预设，推进归一化 Alpha，再应用混合后的环境状态。</figcaption>
</figure>
</div>

## 动态天气

天气层向关卡逻辑提供统一的事件接口，并在内部协调多个彼此独立的渲染系统。

- 定义晴天、阴天和雨天预设，包含过渡时长、瑞利散射、曝光补偿、后处理材质、云密度偏移与载具雾密度。
- 将 Niagara 雨线与碰撞驱动的地面溅射，同闪电材质、短时曝光变化和屏幕空间雨滴后处理组合起来。
- 让降雨模拟跟随玩家局部生成，并在同一天气过渡中混合自定义载具雾密度，避免在整个关卡范围模拟雨粒子。

<div class="project-detail-gallery">
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/skyfire-uprising/weather-states.webp" width="2200" height="454" alt="同一驾驶场景在晴天、阴天与雨天三种天气下的对比。" loading="lazy" decoding="async" />
  <figcaption>同一场景下由统一预设协调的晴天、阴天与雨天效果。</figcaption>
</figure>
<figure class="project-detail-figure">
  <img src="/assets/projects/skyfire-uprising/rain-system.webp" width="1800" height="1499" alt="Niagara 降雨、溅射发射器及溅射材质图。" loading="lazy" decoding="async" />
  <figcaption>雨天表现由下落雨线、地面溅射和轻量溅射材质共同组成。</figcaption>
</figure>
<figure class="project-detail-figure">
  <img src="/assets/projects/skyfire-uprising/rain-post-process.webp" width="1800" height="672" alt="用于屏幕动态雨滴的后处理材质图与效果预览。" loading="lazy" decoding="async" />
  <figcaption>屏幕空间雨滴材质让雨天不只是一次简单的光照变化。</figcaption>
</figure>
</div>

## 可复用 C++ 粒子框架

该框架在原生代码中处理一组明确且克制的粒子能力，并向 Blueprint 暴露聚焦的控制接口，而不是重新实现一套通用特效编辑器。

- UL1_ParticleComponent 支持连续与爆发发射、累计生成速率、粒子上限、随机生命周期与缩放、世界或局部空间模拟，以及生命周期回收。
- 粒子共享 UInstancedStaticMeshComponent 渲染器；实例自定义数据传递透明度，并在重建实例时应用基于年龄的淡入淡出。
- 载具雾根据密度调整生成速率、粒子上限与材质透明度，并按距离渐显，避免浓雾直接覆盖驾驶区域。
- 轮胎烟尘继承部分车辆速度并施加阻尼；碰撞火花根据冲击强度决定数量与透明度，再结合碰撞法线、扩散角、重力和阻尼塑造运动。

<div class="project-detail-gallery">
<figure class="project-detail-figure">
  <img src="/assets/projects/skyfire-uprising/vehicle-fog.webp" width="1537" height="1166" alt="Blueprint 调用 C++ 载具雾组件，并对比低密度与高密度效果。" loading="lazy" decoding="async" />
  <figcaption>天气系统通过精简的 Blueprint 接口把雾密度传递给原生组件。</figcaption>
</figure>
<figure class="project-detail-figure">
  <img src="/assets/projects/skyfire-uprising/collision-spark-integration.webp" width="1444" height="564" alt="将车辆碰撞数据映射到 C++ 火花组件 Burst At 接口的 Blueprint 图。" loading="lazy" decoding="async" />
  <figcaption>OnComponentHit 提供碰撞位置与法线，归一化冲量转化为火花强度。</figcaption>
</figure>
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/skyfire-uprising/tire-smoke-integration.webp" width="2200" height="776" alt="车辆 Blueprint 根据车轮接触、转向、打滑与速度更新轮胎烟尘。" loading="lazy" decoding="async" />
  <figcaption>车轮状态判断保留在玩法 Blueprint 中，粒子模拟则封装在可复用的 C++ 组件内。</figcaption>
</figure>
</div>

## Niagara 与玩法反馈

- 使用核心光束、外层光晕、火花和命中点发射器组成参数化 Beam，并通过流动自发光材质及公开的起止点控制方向。
- 将速度线发射器挂接到载具相机，并在达到速度阈值时切换，以不改动车辆模拟的方式强化加速反馈。
- 制作由目标位置驱动、包含弹体网格、多层尾迹与烟雾的导弹效果，并在后轮接地点生成基于 Ribbon 的轮胎痕迹。

<div class="project-detail-gallery">
<figure class="project-detail-figure">
  <img src="/assets/projects/skyfire-uprising/beam-niagara.webp" width="1600" height="904" alt="Niagara Beam 预览，以及核心、光晕、火花与命中点发射器结构。" loading="lazy" decoding="async" />
  <figcaption>通过职责明确的分层发射器构建清晰的 Beam 视觉反馈。</figcaption>
</figure>
<figure class="project-detail-figure">
  <img src="/assets/projects/skyfire-uprising/speedline-niagara.webp" width="1283" height="982" alt="Niagara 速度线效果预览与发射器结构。" loading="lazy" decoding="async" />
  <figcaption>相机局部速度线提供克制而直接的高速提示。</figcaption>
</figure>
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/skyfire-uprising/missile-niagara.webp" width="1600" height="687" alt="由弹体、两层尾迹与烟雾发射器组成的 Niagara 导弹效果。" loading="lazy" decoding="async" />
  <figcaption>通过飞行时长和目标位置驱动分层的导弹表现。</figcaption>
</figure>
</div>

## 工程取舍

- 将雨粒子限制在玩家周围，并对原生粒子效果使用实例化网格；这些选择关注运行时开销，但不声称未经测量的性能收益。
- 通过预设与精简的 Blueprint 接口，让美术和玩法程序可以调整密度与强度，而不依赖模拟内部实现。
- 将大规模粒子下的距离剔除或 LOD，以及共享 SFX 逻辑的解耦，明确列为下一步改进，而不是回避现有边界。
