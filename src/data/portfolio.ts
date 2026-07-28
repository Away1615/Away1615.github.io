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
    cardLabel: localized("C++ gameplay architecture / state persistence", "C++ 玩法架构 / 状态持久化"),
    mediaClass: "media-survivors",
    mediaBadge: "SURVIVE",
    mediaHint: localized("C++17 survival action", "C++17 生存动作游戏"),
    mediaLabel: localized("Vampire Survivors Like gameplay media", "Vampire Survivors Like 游戏画面"),
    heroMedia: {
      src: "/assets/projects/vampire-survivors-like/gameplay-infinite.png",
      width: 1281,
      height: 720,
      alt: localized(
        "Infinite-map gameplay showing the player, a heavy enemy, automatic fire, a power-up, and coordinate-hashed terrain.",
        "无限地图实机画面，展示玩家、重型敌人、自动射击、增益道具与坐标哈希生成的地形。"
      ),
      caption: localized(
        "Live Release x64 capture: seeded world-coordinate sampling, camera-relative rendering, enemy pressure, and nearest-target automatic fire in infinite mode.",
        "Release x64 实机截图：无限模式同时展示基于种子的世界坐标采样、相机相对渲染、敌人压力与最近目标自动射击。"
      )
    },
    description: localized(
      "A C++17 survival-action game built around interface-driven gameplay systems, pooled entity lifecycles, deterministic infinite-map sampling, and versioned snapshot persistence.",
      "使用 C++17 开发的生存动作游戏，围绕接口驱动的玩法系统、池化实体生命周期、确定性无限地图采样与版本化快照持久化构建。"
    ),
    tags: [
      { label: "C++17", tone: "cpp" },
      { label: "Gameplay Systems", tone: "gas" },
      { label: "Object Pooling", tone: "thread" },
      { label: "State Persistence", tone: "net" }
    ],
    github: "https://github.com/Away1615/Vampire-Survivors-Like",
    detailType: localized("Gameplay project", "玩法项目"),
    metadata: [
      { label: localized("Role", "角色"), value: localized("Gameplay / Systems Programmer", "玩法 / 系统程序员") },
      { label: localized("Language", "语言"), value: same("C++17") },
      { label: localized("Framework", "框架"), value: same("GamesEngineeringBase (Direct3D 11)") },
      { label: localized("Platform", "平台"), value: same("Windows PC") },
      { label: localized("Context", "项目背景"), value: localized("MSc Games Engineering coursework", "游戏工程硕士课程项目") }
    ],
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
