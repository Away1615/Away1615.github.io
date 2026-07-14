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

export interface ProjectDetailSection {
  heading: LocalizedText;
  introduction?: LocalizedText;
  layout?: "list" | "flow";
  items: LocalizedText[];
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
        layout: "flow",
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
    title: "UE5 Vehicle Combat",
    detailTitle: "UE5 Vehicle Combat",
    cardLabel: localized("Team project / gameplay VFX & weather", "团队项目 / 玩法 VFX 与天气"),
    mediaClass: "media-vehicle",
    mediaBadge: "VFX",
    mediaHint: localized("Niagara / dynamic weather", "Niagara / 动态天气"),
    mediaLabel: localized("Vehicle combat gameplay media", "载具战斗游戏画面"),
    description: localized(
      "Team-developed vehicle combat game where I owned dynamic weather, gameplay VFX, Niagara effects, materials, and a Blueprint-facing C++ particle component.",
      "六人团队开发的载具战斗游戏，我负责动态天气、玩法 VFX、Niagara 特效、材质以及面向 Blueprint 的 C++ 粒子组件。"
    ),
    tags: [
      { label: "UE5", tone: "ue" },
      { label: "Blueprint/C++", tone: "blueprint" },
      { label: "Niagara", tone: "niagara" },
      { label: "Team of 6", tone: "team" }
    ],
    detailType: localized("Team project", "团队项目"),
    metadata: [
      { label: localized("Role", "角色"), value: localized("Gameplay VFX / Weather Programmer", "玩法 VFX / 天气程序员") },
      { label: localized("Team", "团队"), value: localized("6 people", "6 人") },
      { label: localized("Engine", "引擎"), value: same("Unreal Engine 5") },
      { label: localized("Tools", "工具"), value: same("Blueprint, C++, Niagara, Materials") }
    ],
    detailSections: [
      {
        heading: localized("Responsibilities", "主要职责"),
        items: [
          localized(
            "Implemented sunny, cloudy, and rainy presets with event-driven smooth transitions.",
            "实现晴天、多云和雨天预设，以及事件驱动的平滑天气过渡。"
          ),
          localized(
            "Created rain, ground splashes, lightning, speed lines, missile effects, and tire marks.",
            "制作降雨、地面溅射、闪电、速度线、导弹特效与轮胎痕迹。"
          ),
          localized(
            "Built a lightweight C++ particle component exposed to Blueprint for smoke and collision sparks.",
            "构建轻量级 C++ 粒子组件并暴露给 Blueprint，用于烟雾和碰撞火花。"
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
