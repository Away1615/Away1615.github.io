export interface LocalizedText {
  en: string;
  zh: string;
}

export interface TechnologyTag {
  label: string;
  tone: string;
}

export interface ProjectMetadata {
  label: LocalizedText;
  value: LocalizedText;
}

export interface ProjectMedia {
  src: string;
  width: number;
  height: number;
  alt: LocalizedText;
  caption: LocalizedText;
  wide?: boolean;
}

export interface ProjectDetailSection {
  heading: LocalizedText;
  introduction?: LocalizedText;
  items: LocalizedText[];
  media?: ProjectMedia[];
}

export interface Project {
  id: string;
  title: string;
  detailTitle: string;
  cardLabel: LocalizedText;
  mediaClass: string;
  mediaBadge: string;
  mediaHint: LocalizedText;
  mediaLabel: LocalizedText;
  heroMedia?: ProjectMedia;
  description: LocalizedText;
  tags: TechnologyTag[];
  github?: string;
  detailType: LocalizedText;
  metadata: ProjectMetadata[];
  detailSections: ProjectDetailSection[];
}

export interface ExperienceItem {
  category: "work" | "education";
  period: string;
  name: LocalizedText;
  description: LocalizedText;
  tag: LocalizedText;
}

export interface SkillGroup {
  title: LocalizedText;
  tags: TechnologyTag[];
}

export function localized(en: string, zh: string): LocalizedText {
  return { en, zh };
}

export function getProjectPath(projectId: string): string {
  return `/projects/${projectId}/`;
}

function same(value: string): LocalizedText {
  return localized(value, value);
}

export const projects: Project[] = [
  {
    id: "survivors-like",
    title: "Vampire Survivors Like",
    detailTitle: "Vampire Survivors Like",
    cardLabel: localized("C++ gameplay / systems programming", "C++ 玩法 / 系统开发"),
    mediaClass: "media-survivors",
    mediaBadge: "SURVIVE",
    mediaHint: localized("C++17 survival action", "C++17 生存动作游戏"),
    mediaLabel: localized("Vampire Survivors Like gameplay media", "Vampire Survivors Like 游戏画面"),
    description: localized(
      "A C++17 top-down survival action game with escalating combat, automatic attacks, four enemy archetypes, power-ups, fixed and seeded infinite maps, and multi-slot save/load.",
      "使用 C++17 开发的俯视角生存动作游戏，包含逐步增强的战斗、自动攻击、四类敌人、增益道具、固定与种子化无限地图，以及多槽位存档。"
    ),
    tags: [
      { label: "C++17", tone: "cpp" },
      { label: "Gameplay Systems", tone: "gas" },
      { label: "Object Pooling", tone: "thread" },
      { label: "Save System", tone: "net" }
    ],
    github: "https://github.com/Away1615/Vampire-Survivors-Like",
    detailType: localized("Gameplay project", "玩法项目"),
    metadata: [
      { label: localized("Role", "角色"), value: localized("Gameplay / Systems Programmer", "玩法 / 系统程序员") },
      { label: localized("Language", "语言"), value: same("C++17") },
      { label: localized("Framework", "框架"), value: same("GamesEngineeringBase (Direct3D 11)") },
      { label: localized("Platform", "平台"), value: same("Windows PC") }
    ],
    detailSections: [
      {
        heading: localized("Architecture design", "架构设计"),
        introduction: localized(
          "The runtime is layered so the frame loop coordinates systems without depending on their concrete implementations.",
          "运行时按层划分，让帧循环负责协调系统，而不依赖各系统的具体实现。"
        ),
        items: [
          localized(
            "Lifecycle and composition: Main composes long-lived services; GameManager owns Menu, Save List, Playing, Victory, and Defeat transitions; GEGameSession coordinates one run.",
            "生命周期与组合：Main 负责组装长生命周期服务；GameManager 管理菜单、存档列表、游玩、胜利与失败状态；GEGameSession 协调单局运行。"
          ),
          localized(
            "Provider boundaries: MapProvider, PlayerProvider, EnemyProvider, ProjectileProvider, and PowerUpProvider keep session orchestration independent from concrete managers.",
            "接口边界：MapProvider、PlayerProvider、EnemyProvider、ProjectileProvider 与 PowerUpProvider 让单局调度不依赖具体 Manager 实现。"
          ),
          localized(
            "Runtime lifecycle: managers maintain active views while GEObjectPool reuses enemies, projectiles, and power-ups; collision, drops, and cleanup stay with their owning systems.",
            "运行时生命周期：各 Manager 维护活跃对象视图，GEObjectPool 复用敌人、投射物与增益道具；碰撞、掉落与回收由对应系统负责。"
          ),
          localized(
            "Snapshot persistence: versioned state captures the map seed and camera, session timer, player combat and buffs, and every active entity before the repository atomically replaces a save slot.",
            "快照持久化：带版本号的状态记录地图种子与相机、单局计时、玩家战斗与增益，以及全部活跃实体，再由 Repository 原子替换存档槽。"
          )
        ]
      },
      {
        heading: localized("Engineering highlights", "工程亮点"),
        items: [
          localized(
            "Structured a complete 120-second survival session across menu, gameplay, save, victory, and defeat states, with provider interfaces separating gameplay systems.",
            "围绕菜单、游玩、存档、胜利与失败状态组织完整的 120 秒生存局，并通过 Provider 接口划分各玩法系统的职责边界。"
          ),
          localized(
            "Built nearest-target automatic fire and a player-triggered AOE that prioritizes high-HP enemies, alongside four enemy archetypes and time-based spawn scaling.",
            "实现最近目标自动射击与优先攻击高生命值敌人的主动 AOE，并设计四类敌人与随时间提升的刷怪强度。"
          ),
          localized(
            "Managed high-churn enemies, projectiles, and power-ups through reusable object pools, active-object views, collision handling, and off-screen cleanup.",
            "通过可复用对象池、活跃对象视图、碰撞处理与屏幕外回收，管理高频生成的敌人、投射物和增益道具。"
          ),
          localized(
            "Implemented fixed and seeded infinite tile maps plus a versioned, multi-slot snapshot system that restores the player, world, combat timers, enemies, projectiles, and power-ups.",
            "实现固定与种子化无限瓦片地图，以及带版本号的多槽位快照存档，可恢复玩家、世界、战斗计时、敌人、投射物与增益道具状态。"
          )
        ]
      }
    ]
  },
  {
    id: "dx12",
    title: "DX12-FPS",
    detailTitle: "DX12-FPS",
    cardLabel: localized("Solo programming / custom renderer", "独立开发 / 自研渲染器"),
    mediaClass: "media-dx12",
    mediaBadge: "DX12-FPS",
    mediaHint: localized("DirectX 12 renderer", "DirectX 12 渲染器"),
    mediaLabel: localized("DX12-FPS gameplay media", "DX12-FPS 游戏画面"),
    description: localized(
      "A first-person shooter demo built on a custom DirectX 12 renderer with data-driven levels, component-based gameplay, skeletal meshes, and GPU instancing.",
      "基于自研 DirectX 12 渲染器构建的第一人称射击 Demo，支持数据驱动关卡、组件化玩法、骨骼网格与 GPU 实例化。"
    ),
    tags: [
      { label: "C++", tone: "cpp" },
      { label: "DirectX 12", tone: "dx" },
      { label: "HLSL", tone: "hlsl" },
      { label: "Solo", tone: "solo" }
    ],
    github: "https://github.com/Away1615/DX12-FPS",
    detailType: localized("Project", "项目"),
    metadata: [
      { label: localized("Role", "角色"), value: localized("Solo Programmer", "独立程序员") },
      { label: localized("Engine", "引擎"), value: localized("Custom DirectX 12 Renderer", "自研 DirectX 12 渲染器") },
      { label: localized("Language", "语言"), value: same("C++ / HLSL") },
      { label: localized("Platform", "平台"), value: same("Windows PC") }
    ],
    detailSections: [
      {
        heading: localized("Key systems", "核心系统"),
        items: [
          localized(
            "Implemented swap chain, frame resources, command lists, render/depth targets, root signatures, PSOs, and shader management.",
            "实现交换链、帧资源、命令列表、颜色与深度目标、根签名、PSO 和着色器管理。"
          ),
          localized(
            "Built data-driven level loading for textures, shaders, materials, objects, and components.",
            "构建纹理、着色器、材质、对象与组件的数据驱动关卡加载系统。"
          ),
          localized(
            "Added first-person controls, weapons, AABB collision, ray shooting, skeletal meshes, normal mapping, and GPU instancing.",
            "加入第一人称控制、武器、AABB 碰撞、射线射击、骨骼网格、法线贴图与 GPU 实例化。"
          )
        ]
      }
    ]
  },
  {
    id: "rasterizer",
    title: "Software Rasterizer",
    detailTitle: "Optimized Software Rasterizer",
    cardLabel: localized("CPU rendering performance", "CPU 渲染性能优化"),
    mediaClass: "media-rasterizer",
    mediaBadge: "2-4x",
    mediaHint: localized("SIMD / multithreading", "SIMD / 多线程"),
    mediaLabel: localized("Rasterizer benchmark media", "光栅器性能测试画面"),
    description: localized(
      "CPU rasterizer optimization using pipeline improvements, eight-pixel SIMD shading, tile scheduling, and a custom thread pool.",
      "通过流水线改进、八像素 SIMD 着色、分块调度和自研线程池优化 CPU 光栅器。"
    ),
    tags: [
      { label: "C++", tone: "cpp" },
      { label: "AVX SIMD", tone: "simd" },
      { label: "Multithreading", tone: "thread" }
    ],
    github: "https://github.com/Away1615/Rasterizer",
    detailType: localized("Technical project", "技术项目"),
    metadata: [
      { label: localized("Focus", "重点"), value: localized("CPU Rendering Performance", "CPU 渲染性能") },
      { label: localized("Language", "语言"), value: same("C++") },
      { label: localized("Optimization", "优化方式"), value: same("AVX SIMD / Multithreading") },
      { label: localized("Result", "结果"), value: localized("Roughly 2-4x over baseline", "相对基线约提升 2-4 倍") }
    ],
    detailSections: [
      {
        heading: localized("Key work", "关键工作"),
        items: [
          localized(
            "Added vertex cache, pre-normalized lighting, Early-Z, backface and frustum culling.",
            "加入顶点缓存、预归一化光照、Early-Z、背面剔除与视锥剔除。"
          ),
          localized(
            "Vectorized eight-pixel shading and lighting with AVX SIMD.",
            "使用 AVX SIMD 对八像素着色与光照进行向量化。"
          ),
          localized(
            "Implemented tile-based rendering through a custom thread pool and compared FPS, P99 latency, and speedup.",
            "通过自研线程池实现分块渲染，并对比 FPS、P99 延迟与加速比。"
          )
        ]
      }
    ]
  },
  {
    id: "vehicle",
    title: "SkyFire Uprising",
    detailTitle: "SkyFire Uprising",
    cardLabel: localized("Team project / technical VFX", "团队项目 / 技术特效"),
    mediaClass: "media-vehicle",
    mediaBadge: "SKYFIRE",
    mediaHint: localized("Weather / gameplay VFX", "天气 / 玩法特效"),
    mediaLabel: localized("SkyFire Uprising gameplay VFX overview", "SkyFire Uprising 玩法特效总览"),
    heroMedia: {
      src: "/assets/projects/skyfire-uprising/overview.webp",
      width: 1800,
      height: 1331,
      alt: localized(
        "A four-panel overview of rain, speed, collision, and combat effects in SkyFire Uprising.",
        "SkyFire Uprising 中降雨、高速、碰撞与战斗特效的四画面总览。"
      ),
      caption: localized(
        "Gameplay VFX overview: dynamic rain and lightning, speed feedback, collision sparks, and combat atmosphere.",
        "玩法特效总览：动态降雨与闪电、高速反馈、碰撞火花及战斗氛围。"
      )
    },
    description: localized(
      "A six-person UE5.4 vehicle-combat project. I owned the dynamic weather and gameplay VFX stack, spanning Blueprint orchestration, Niagara and materials, and a reusable C++ particle framework.",
      "六人协作开发的 UE5.4 载具战斗项目。我负责动态天气与玩法特效体系，包括 Blueprint 调度、Niagara 与材质，以及可复用的 C++ 粒子框架。"
    ),
    tags: [
      { label: "UE5.4", tone: "ue" },
      { label: "C++", tone: "cpp" },
      { label: "Blueprint", tone: "blueprint" },
      { label: "Niagara", tone: "niagara" }
    ],
    detailType: localized("Team project / Technical VFX", "团队项目 / 技术特效"),
    metadata: [
      { label: localized("Role", "角色"), value: localized("Gameplay VFX / Technical VFX Programmer", "玩法特效 / 技术特效程序员") },
      { label: localized("Team", "团队"), value: localized("6 people", "6 人") },
      { label: localized("Engine", "引擎"), value: same("Unreal Engine 5.4") },
      { label: localized("Scope", "技术范围"), value: same("C++, Blueprint, Niagara, Materials") }
    ],
    detailSections: [
      {
        heading: localized("System architecture", "系统架构"),
        introduction: localized(
          "I divided the work into state orchestration, reusable simulation components, effect authoring, and gameplay integration so each layer could evolve without owning the others' details.",
          "我将系统拆分为状态调度、可复用模拟组件、特效制作与玩法接入，使各层可以独立演进，而不需要了解彼此的实现细节。"
        ),
        items: [
          localized(
            "Weather requests flow through BP_WeatherManager into data-driven presets, which blend global sky, exposure, cloud, post-process, and vehicle-fog parameters over a configurable duration.",
            "天气请求由 BP_WeatherManager 接收并映射到数据驱动预设，再按可配置时长混合天空、曝光、云层、后处理和载具雾参数。"
          ),
          localized(
            "A C++ base particle component owns emission, lifetime simulation, and instanced rendering; Data Assets configure it, while specialized components supply fog, smoke, and spark behavior.",
            "C++ 基础粒子组件统一管理发射、生命周期模拟与实例化渲染；Data Asset 负责配置，派生组件分别实现雾、烟尘和火花行为。"
          ),
          localized(
            "Blueprint-facing APIs connect those systems to weather events, wheel state, vehicle speed, and collision impulses without moving simulation logic back into gameplay Blueprints.",
            "面向 Blueprint 的接口把系统接入天气事件、车轮状态、车辆速度与碰撞冲量，同时避免将模拟逻辑重新堆回玩法 Blueprint。"
          )
        ],
        media: [
          {
            src: "/assets/projects/skyfire-uprising/weather-transition.webp",
            width: 1800,
            height: 1625,
            alt: localized(
              "Blueprint graph showing weather request setup, timed interpolation, and application of blended environment parameters.",
              "展示天气请求初始化、定时插值与环境参数应用流程的 Blueprint 图。"
            ),
            caption: localized(
              "BP_WeatherManager transition pipeline: capture current and target presets, advance a normalized alpha, then apply the blended environment state.",
              "BP_WeatherManager 过渡流程：记录当前与目标预设，推进归一化 Alpha，再应用混合后的环境状态。"
            ),
            wide: true
          }
        ]
      },
      {
        heading: localized("Dynamic weather", "动态天气"),
        introduction: localized(
          "The weather layer presents one event-oriented interface to level logic while coordinating several independent rendering systems behind it.",
          "天气层向关卡逻辑提供统一的事件接口，并在内部协调多个彼此独立的渲染系统。"
        ),
        items: [
          localized(
            "Defined sunny, overcast, and rainy presets with transition duration, Rayleigh scattering, exposure compensation, post-process materials, cloud-density offset, and vehicle-fog density.",
            "定义晴天、阴天和雨天预设，包含过渡时长、瑞利散射、曝光补偿、后处理材质、云密度偏移与载具雾密度。"
          ),
          localized(
            "Combined Niagara rain streaks and collision-driven ground splashes with a lightning material, temporary exposure response, and a screen-space rain-drip post process.",
            "将 Niagara 雨线与碰撞驱动的地面溅射，同闪电材质、短时曝光变化和屏幕空间雨滴后处理组合起来。"
          ),
          localized(
            "Kept rain simulation local to the player and blended the custom vehicle-fog density through the same weather transition, preserving atmosphere without simulating rain across the full level.",
            "让降雨模拟跟随玩家局部生成，并在同一天气过渡中混合自定义载具雾密度，避免在整个关卡范围模拟雨粒子。"
          )
        ],
        media: [
          {
            src: "/assets/projects/skyfire-uprising/weather-states.webp",
            width: 2200,
            height: 454,
            alt: localized(
              "The same driving scene shown in sunny, overcast, and rainy weather.",
              "同一驾驶场景在晴天、阴天与雨天三种天气下的对比。"
            ),
            caption: localized(
              "One scene, three coordinated presets: sunny, overcast, and rainy.",
              "同一场景下由统一预设协调的晴天、阴天与雨天效果。"
            ),
            wide: true
          },
          {
            src: "/assets/projects/skyfire-uprising/rain-system.webp",
            width: 1800,
            height: 1499,
            alt: localized(
              "Niagara rain and splash emitters alongside the splash material graph.",
              "Niagara 降雨、溅射发射器及溅射材质图。"
            ),
            caption: localized(
              "Rain presentation combines falling streaks, ground splashes, and a lightweight splash material.",
              "雨天表现由下落雨线、地面溅射和轻量溅射材质共同组成。"
            )
          },
          {
            src: "/assets/projects/skyfire-uprising/rain-post-process.webp",
            width: 1800,
            height: 672,
            alt: localized(
              "Post-process material graph and preview for animated rain droplets on the screen.",
              "用于屏幕动态雨滴的后处理材质图与效果预览。"
            ),
            caption: localized(
              "A screen-space rain-drip material separates the rainy state from a simple lighting change.",
              "屏幕空间雨滴材质让雨天不只是一次简单的光照变化。"
            )
          }
        ]
      },
      {
        heading: localized("Reusable C++ particle framework", "可复用 C++ 粒子框架"),
        introduction: localized(
          "The framework handles a deliberately small set of particle features in native code and exposes focused controls to Blueprint rather than recreating a general-purpose VFX editor.",
          "该框架在原生代码中处理一组明确且克制的粒子能力，并向 Blueprint 暴露聚焦的控制接口，而不是重新实现一套通用特效编辑器。"
        ),
        items: [
          localized(
            "UL1_ParticleComponent supports continuous and burst emission, accumulated spawn rates, particle limits, randomized lifetimes and scales, world- or local-space simulation, and lifecycle cleanup.",
            "UL1_ParticleComponent 支持连续与爆发发射、累计生成速率、粒子上限、随机生命周期与缩放、世界或局部空间模拟，以及生命周期回收。"
          ),
          localized(
            "Particles share a UInstancedStaticMeshComponent renderer; per-instance custom data carries opacity while age-based fade-in and fade-out are applied during instance rebuilding.",
            "粒子共享 UInstancedStaticMeshComponent 渲染器；实例自定义数据传递透明度，并在重建实例时应用基于年龄的淡入淡出。"
          ),
          localized(
            "Vehicle fog scales spawn rate, particle cap, and material opacity with density, then fades particles by distance so dense fog does not cover the immediate driving area.",
            "载具雾根据密度调整生成速率、粒子上限与材质透明度，并按距离渐显，避免浓雾直接覆盖驾驶区域。"
          ),
          localized(
            "Tire smoke inherits vehicle velocity and applies damping; collision sparks derive burst count and opacity from impact intensity, then use the hit normal, spread, gravity, and damping to shape motion.",
            "轮胎烟尘继承部分车辆速度并施加阻尼；碰撞火花根据冲击强度决定数量与透明度，再结合碰撞法线、扩散角、重力和阻尼塑造运动。"
          )
        ],
        media: [
          {
            src: "/assets/projects/skyfire-uprising/vehicle-fog.webp",
            width: 1537,
            height: 1166,
            alt: localized(
              "Blueprint call into the C++ vehicle-fog component with a clear and dense fog comparison.",
              "Blueprint 调用 C++ 载具雾组件，并对比低密度与高密度效果。"
            ),
            caption: localized(
              "Weather-driven fog density reaches the native component through a narrow Blueprint API.",
              "天气系统通过精简的 Blueprint 接口把雾密度传递给原生组件。"
            )
          },
          {
            src: "/assets/projects/skyfire-uprising/collision-spark-integration.webp",
            width: 1444,
            height: 564,
            alt: localized(
              "Blueprint graph mapping vehicle collision data into the Burst At function of the C++ spark component.",
              "将车辆碰撞数据映射到 C++ 火花组件 Burst At 接口的 Blueprint 图。"
            ),
            caption: localized(
              "OnComponentHit supplies impact position and normal; normalized impulse becomes the spark intensity.",
              "OnComponentHit 提供碰撞位置与法线，归一化冲量转化为火花强度。"
            )
          },
          {
            src: "/assets/projects/skyfire-uprising/tire-smoke-integration.webp",
            width: 2200,
            height: 776,
            alt: localized(
              "Vehicle Blueprint graph evaluating wheel contact, steering, slip, and speed before updating tire smoke.",
              "车辆 Blueprint 根据车轮接触、转向、打滑与速度更新轮胎烟尘。"
            ),
            caption: localized(
              "Wheel state stays in gameplay Blueprint while particle simulation remains inside the reusable C++ component.",
              "车轮状态判断保留在玩法 Blueprint 中，粒子模拟则封装在可复用的 C++ 组件内。"
            ),
            wide: true
          }
        ]
      },
      {
        heading: localized("Niagara and gameplay feedback", "Niagara 与玩法反馈"),
        items: [
          localized(
            "Built a parameterized beam from separate core, halo, spark, and hit-point emitters, with a panning emissive material and public start/end positions.",
            "使用核心光束、外层光晕、火花和命中点发射器组成参数化 Beam，并通过流动自发光材质及公开的起止点控制方向。"
          ),
          localized(
            "Attached speed-line emitters to the vehicle camera and toggled them at a speed threshold to reinforce acceleration without changing the vehicle simulation.",
            "将速度线发射器挂接到载具相机，并在达到速度阈值时切换，以不改动车辆模拟的方式强化加速反馈。"
          ),
          localized(
            "Created a target-driven missile effect with a lead mesh, layered trails, and smoke, plus Ribbon-based tire marks placed at the rear-wheel contact points.",
            "制作由目标位置驱动、包含弹体网格、多层尾迹与烟雾的导弹效果，并在后轮接地点生成基于 Ribbon 的轮胎痕迹。"
          )
        ],
        media: [
          {
            src: "/assets/projects/skyfire-uprising/beam-niagara.webp",
            width: 1600,
            height: 904,
            alt: localized(
              "Niagara beam preview and its core, halo, spark, and hit-point emitter stack.",
              "Niagara Beam 预览，以及核心、光晕、火花与命中点发射器结构。"
            ),
            caption: localized(
              "Beam readability comes from layered emitters with distinct responsibilities.",
              "通过职责明确的分层发射器构建清晰的 Beam 视觉反馈。"
            )
          },
          {
            src: "/assets/projects/skyfire-uprising/speedline-niagara.webp",
            width: 1283,
            height: 982,
            alt: localized(
              "Niagara speed-line preview and emitter stack.",
              "Niagara 速度线效果预览与发射器结构。"
            ),
            caption: localized(
              "Camera-local speed lines provide a restrained high-speed cue.",
              "相机局部速度线提供克制而直接的高速提示。"
            )
          },
          {
            src: "/assets/projects/skyfire-uprising/missile-niagara.webp",
            width: 1600,
            height: 687,
            alt: localized(
              "Niagara missile preview with lead, trail, secondary trail, and smoke emitters.",
              "由弹体、两层尾迹与烟雾发射器组成的 Niagara 导弹效果。"
            ),
            caption: localized(
              "Projectile duration and target position drive a layered missile presentation.",
              "通过飞行时长和目标位置驱动分层的导弹表现。"
            ),
            wide: true
          }
        ]
      },
      {
        heading: localized("Engineering decisions", "工程取舍"),
        items: [
          localized(
            "Limited rain generation to the area around the player and used instanced meshes for the native particle effects, keeping the implementation mindful of runtime cost without claiming unmeasured gains.",
            "将雨粒子限制在玩家周围，并对原生粒子效果使用实例化网格；这些选择关注运行时开销，但不声称未经测量的性能收益。"
          ),
          localized(
            "Used presets and narrow Blueprint APIs so artists and gameplay programmers could tune density and intensity without depending on the simulation internals.",
            "通过预设与精简的 Blueprint 接口，让美术和玩法程序可以调整密度与强度，而不依赖模拟内部实现。"
          ),
          localized(
            "Identified distance culling or LOD for larger particle counts and reduced coupling around shared SFX logic as the next iteration rather than hiding those limits.",
            "将大规模粒子下的距离剔除或 LOD，以及共享 SFX 逻辑的解耦，明确列为下一步改进，而不是回避现有边界。"
          )
        ]
      }
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    category: "education",
    period: "2025 - 2026",
    name: localized("University of Warwick", "华威大学"),
    description: localized("MSc Games Engineering, WMG Excellence Scholarship.", "游戏工程硕士，WMG Excellence Scholarship。"),
    tag: localized("Graphics / Engine / UE5", "图形 / 引擎 / UE5")
  },
  {
    category: "work",
    period: "2021 - 2024",
    name: localized("ByteDance", "字节跳动"),
    description: localized(
      "iOS Client Engineer developing and iterating client features for Feishu and Doubao.",
      "iOS 客户端工程师，参与飞书、豆包客户端功能迭代开发。"
    ),
    tag: localized("Swift / Client Architecture", "Swift / 客户端架构")
  },
  {
    category: "education",
    period: "2017 - 2021",
    name: localized("Wuhan University of Technology", "武汉理工大学"),
    description: localized("BSc Software Engineering.", "软件工程学士。"),
    tag: localized(
      "Data Structures / Operating Systems / Computer Organization / Software Architecture",
      "数据结构 / 操作系统 / 计算机组成原理 / 软件系统设计与体系结构"
    )
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: localized("Languages", "编程语言"),
    tags: [
      { label: "C++", tone: "cpp" },
      { label: "Swift", tone: "swift" },
      { label: "Python", tone: "python" },
      { label: "HLSL", tone: "hlsl" }
    ]
  },
  {
    title: localized("Gameplay", "玩法系统"),
    tags: [
      { label: "Unreal Engine 5", tone: "ue" },
      { label: "GAS", tone: "gas" },
      { label: "Networking", tone: "net" },
      { label: "Behavior Tree", tone: "team" }
    ]
  },
  {
    title: localized("Rendering", "图形渲染"),
    tags: [
      { label: "DirectX 12", tone: "dx" },
      { label: "Rasterization", tone: "simd" },
      { label: "Ray Tracing", tone: "blueprint" },
      { label: "BVH", tone: "thread" }
    ]
  },
  {
    title: localized("Performance", "性能优化"),
    tags: [
      { label: "SIMD", tone: "simd" },
      { label: "Multithreading", tone: "thread" },
      { label: "P99 Analysis", tone: "solo" },
      { label: "Profiling", tone: "team" }
    ]
  }
];
