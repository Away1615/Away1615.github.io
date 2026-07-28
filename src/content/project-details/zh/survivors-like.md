---
projectId: survivors-like
language: zh
---

## 系统架构

我以显式所有权与清晰调度路径组织运行时，将进程级对象组合、应用状态、单局协调与领域逻辑分离。

- Main 是组合根：统一初始化内容路径与资源，构造各个具体玩法服务，再将它们注入 GEGameSession 与 GameManager。
- GameManager 拥有应用状态机与存档列表流程；GEGameSession 拥有一局游戏，并明确规定玩家、相机与地图、敌人、投射物、增益道具以及从地图到 HUD 的帧内顺序。
- MapProvider、PlayerProvider、EnemyProvider、ProjectileProvider 与 PowerUpProvider 暴露收窄后的能力；可持久化 Provider 同时实现 GECodable&lt;State&gt;，使协调层依赖契约而非具体 Manager。
- 具体 Manager 保留生成、碰撞、掉落与回收等领域所有权；GEObjectPool 拥有可复用槽位，GEEnemyManager 则维护紧凑活跃集合供高频更新与绘制路径使用。

<div class="project-detail-gallery">
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/vampire-survivors-like/runtime-architecture.svg" width="1600" height="900" alt="运行时架构图，从 Main、GameManager 与 GEGameSession 延伸到 Provider 玩法子系统、基础服务及版本化持久化链路。" loading="lazy" decoding="async" />
  <figcaption>运行时所有权与状态流：对象组合和应用状态位于 Provider 驱动的单局调度之上，共享基础服务与持久化链路保持显式。</figcaption>
</figure>
</div>

## 世界、相机与碰撞

同一份数据驱动瓦片源同时支持有边界的设计关卡与无边界的程序化探索模式。

- 关卡加载器从可读文本格式解析 70 × 70、单格 32 像素的地图，包括瓦片尺寸与图层数据。
- 固定模式将玩家与相机限制在设计好的 2,240 × 2,240 世界内；无限模式则通过取模重复或基于种子的坐标哈希采样世界瓦片。
- 统一碰撞查询使用圆形—圆形检测处理角色与投射物交互，并通过圆形—AABB 检测处理不可通行或带伤害的地形。
- 虚拟相机跟随玩家、遵守固定地图边界，并参与快照恢复，使读档后的画面位置与世界状态保持一致。

<div class="project-detail-gallery">
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/vampire-survivors-like/gameplay-fixed.png" width="1281" height="720" alt="固定地图实机画面，展示设计好的水域、道路与危险地形，以及玩家和自动射击投射物。" loading="lazy" decoding="async" />
  <figcaption>固定模式将相机保持在设计好的 70 × 70 瓦片世界内，同时地形碰撞与危险区域继续由数据驱动。</figcaption>
</figure>
</div>

## 战斗与实体生命周期

战斗循环在持续提升压力的同时，将运行时工作控制在明确边界内，并减少高频分配。

- 构建完整的 120 秒生存循环，包含四类敌人、随时间升级的生成压力、接触与投射物伤害、掉落、胜利及失败流程。
- 自动射击寻找最近的存活目标；玩家触发的 AOE 则通过固定容量候选集选择范围内生命值最高的敌人。
- 预分配对象池最多提供 2,000 个敌人槽、1,000 个投射物槽与 100 个增益道具槽；战斗中复用非活跃对象，而不是反复创建。
- 投射物离开相机范围及安全边距后会停用并回池，避免屏幕外实体持续占用对象池容量。

<div class="project-detail-gallery">
<figure class="project-detail-figure">
  <img src="/assets/projects/vampire-survivors-like/collision-debug-current.png" width="1281" height="720" alt="实机碰撞调试视图，玩家与敌人周围显示碰撞圆，自动射击投射物在两者之间飞行。" loading="lazy" decoding="async" />
  <figcaption>按 J 开启的调试视图在实战中显示圆形碰撞体，而玩法仍使用同一套碰撞查询。</figcaption>
</figure>
<figure class="project-detail-figure">
  <img src="/assets/projects/vampire-survivors-like/aoe-impact.png" width="1281" height="720" alt="两名敌人周围显示绿色 AOE 命中环，同时保留碰撞体调试圆。" loading="lazy" decoding="async" />
  <figcaption>玩家触发的 AOE 通过固定容量候选集选择范围内生命值最高的目标，并记录短时命中标记。</figcaption>
</figure>
</div>

## 状态持久化

存档被视为对玩法因果状态的恢复，而不只是记录玩家位置和生命值。

- 版本化二进制快照记录地图模式与种子、活跃区块与相机、单局时间、玩家战斗与增益计时、生成进度、活跃实体及各子系统随机状态。
- 恢复敌人活跃顺序、接触伤害冷却、燃烧状态与随机数生成器状态，避免读档后悄然改变后续战斗行为。
- 反序列化时校验魔数、精确格式版本、字符串长度与实体数量边界，再决定是否接受存档。
- 存档槽先写入临时文件，再通过带写穿语义的原子移动替换目标文件，降低留下半写入存档的风险。

<div class="project-detail-gallery">
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/vampire-survivors-like/save-system.png" width="1281" height="720" alt="存档界面展示新建存档入口、真实时间戳存档槽及键盘操作提示。" loading="lazy" decoding="async" />
  <figcaption>存档槽界面支持新建、选择、覆盖、删除与读取；每个条目都对应经过校验的完整运行时快照。</figcaption>
</figure>
</div>

## 评估与迭代

原始课程报告同时记录了首版实现的成果与局限；当前 develop 分支则体现了后续工程化迭代。

- 报告记录开发机在接通电源时约 700 FPS、电池供电时约 400 FPS；这些属于本机观察结果，而不是跨硬件的标准化基准。
- 活跃敌人达到数百时开始出现明显帧率下降，因此下一步更有价值的优化是加入宽阶段空间划分，而不是继续进行局部微调。
- 报告还暴露了冷却状态恢复不完整与职责耦合问题；后续版本扩展了存档结构、保留随机与活跃状态，并收窄了子系统接口。
- 项目的核心经验是平衡架构追求与交付：先建立清晰所有权和可测试边界，同时优先完成完整可玩的结果，再继续深化抽象。

<div class="project-detail-gallery">
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/vampire-survivors-like/hud-evaluation.png" width="1067" height="600" alt="课程报告截图，标注分数、计时器、FPS、冷却、增益与存档控制。" loading="lazy" decoding="async" />
  <figcaption>报告评估画面展示实时分数、生存计时、FPS、技能冷却、增益、碰撞显示开关与存档控制。</figcaption>
</figure>
</div>
