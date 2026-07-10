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

export interface Project {
  id: string;
  title: string;
  dialogTitle: string;
  featured: boolean;
  mediaClass: string;
  mediaBadge: string;
  mediaHint: LocalizedText;
  mediaLabel: LocalizedText;
  description: LocalizedText;
  tags: TechnologyTag[];
  github?: string;
  dialogType: LocalizedText;
  metadata: ProjectMetadata[];
  detailHeading: LocalizedText;
  details: LocalizedText[];
}

export interface ExperienceItem {
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

function same(value: string): LocalizedText {
  return localized(value, value);
}

export const projects: Project[] = [
  {
    id: "rift",
    title: "Rift",
    dialogTitle: "Rift",
    featured: true,
    mediaClass: "media-rift",
    mediaBadge: "RIFT",
    mediaHint: localized("Add multiplayer gameplay screenshot or GIF", "添加多人游戏截图或 GIF"),
    mediaLabel: localized("Rift gameplay media", "Rift 游戏画面"),
    description: localized(
      "A 1-4 player third-person co-op PvE ARPG prototype with lobby flow, replicated combat, encounter waves, enemy AI, boss phases, respawn, and victory handling.",
      "1-4 人第三人称合作 PvE ARPG 原型，包含大厅流程、网络同步战斗、遭遇波次、敌人 AI、Boss 阶段、重生与胜利结算。"
    ),
    tags: [
      { label: "C++", tone: "cpp" },
      { label: "UE5", tone: "ue" },
      { label: "GAS", tone: "gas" },
      { label: "LAN Multiplayer", tone: "net" }
    ],
    github: "https://github.com/Away1615/Rift",
    dialogType: localized("Featured project", "精选项目"),
    metadata: [
      { label: localized("Role", "角色"), value: localized("Solo Gameplay / Systems Programmer", "独立玩法 / 系统程序员") },
      { label: localized("Engine", "引擎"), value: same("Unreal Engine 5 / C++") },
      { label: localized("Platform", "平台"), value: localized("PC, LAN Multiplayer", "PC、局域网多人游戏") },
      { label: localized("Tools", "工具"), value: same("GAS, Behavior Tree, Visual Studio, Git") }
    ],
    detailHeading: localized("Responsibilities", "主要职责"),
    details: [
      localized(
        "Implemented room-code joining, lobby readiness, character confirmation, map travel, respawn, and victory flow.",
        "实现房间码加入、大厅准备、角色确认、地图切换、重生与胜利流程。"
      ),
      localized(
        "Built GAS twin-sword combat with combo graph, guard, dodge, RapidSlash, poise, stagger, and replicated attributes.",
        "使用 GAS 构建双剑战斗，包括连招图、格挡、闪避、RapidSlash、韧性、硬直与属性同步。"
      ),
      localized(
        "Created server-authoritative encounter waves, enemy Behavior Trees, shield behavior, and replicated boss phases.",
        "实现服务器权威的遭遇波次、敌人行为树、护盾行为和网络同步的 Boss 阶段。"
      )
    ]
  },
  {
    id: "dx12",
    title: "DX12-FPS",
    dialogTitle: "DX12-FPS",
    featured: true,
    mediaClass: "media-dx12",
    mediaBadge: "DX12-FPS",
    mediaHint: localized("Add first-person gameplay capture", "添加第一人称游戏画面"),
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
    dialogType: localized("Featured project", "精选项目"),
    metadata: [
      { label: localized("Role", "角色"), value: localized("Solo Programmer", "独立程序员") },
      { label: localized("Engine", "引擎"), value: localized("Custom DirectX 12 Renderer", "自研 DirectX 12 渲染器") },
      { label: localized("Language", "语言"), value: same("C++ / HLSL") },
      { label: localized("Platform", "平台"), value: same("Windows PC") }
    ],
    detailHeading: localized("Key systems", "核心系统"),
    details: [
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
  },
  {
    id: "rasterizer",
    title: "Software Rasterizer",
    dialogTitle: "Optimized Software Rasterizer",
    featured: false,
    mediaClass: "media-rasterizer",
    mediaBadge: "2-4x",
    mediaHint: localized("Add benchmark visualization", "添加性能对比可视化"),
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
    dialogType: localized("Technical project", "技术项目"),
    metadata: [
      { label: localized("Focus", "重点"), value: localized("CPU Rendering Performance", "CPU 渲染性能") },
      { label: localized("Language", "语言"), value: same("C++") },
      { label: localized("Optimization", "优化方式"), value: same("AVX SIMD / Multithreading") },
      { label: localized("Result", "结果"), value: localized("Roughly 2-4x over baseline", "相对基线约提升 2-4 倍") }
    ],
    detailHeading: localized("Key work", "关键工作"),
    details: [
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
  },
  {
    id: "vehicle",
    title: "UE5 Vehicle Combat",
    dialogTitle: "UE5 Vehicle Combat",
    featured: false,
    mediaClass: "media-vehicle",
    mediaBadge: "VFX",
    mediaHint: localized("Add vehicle combat footage", "添加载具战斗画面"),
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
    dialogType: localized("Team project", "团队项目"),
    metadata: [
      { label: localized("Role", "角色"), value: localized("Gameplay VFX / Weather Programmer", "玩法 VFX / 天气程序员") },
      { label: localized("Team", "团队"), value: localized("6 people", "6 人") },
      { label: localized("Engine", "引擎"), value: same("Unreal Engine 5") },
      { label: localized("Tools", "工具"), value: same("Blueprint, C++, Niagara, Materials") }
    ],
    detailHeading: localized("Responsibilities", "主要职责"),
    details: [
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
];

export const experiences: ExperienceItem[] = [
  {
    period: "2025 - 2027",
    name: localized("University of Warwick", "华威大学"),
    description: localized("MSc Games Engineering, WMG Excellence Scholarship.", "游戏工程硕士，WMG Excellence Scholarship。"),
    tag: localized("Graphics / Engine / UE5", "图形 / 引擎 / UE5")
  },
  {
    period: "2021 - 2024",
    name: localized("ByteDance", "字节跳动"),
    description: localized(
      "iOS Client Engineer working on Feishu and Doubao production features and shared client systems.",
      "iOS 客户端工程师，参与飞书、豆包生产功能与客户端公共系统建设。"
    ),
    tag: localized("Swift / Client Architecture", "Swift / 客户端架构")
  },
  {
    period: "2017 - 2021",
    name: localized("Wuhan University of Technology", "武汉理工大学"),
    description: localized("BSc Software Engineering.", "软件工程学士。"),
    tag: localized("Computer Science", "计算机科学")
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

export function isFeaturedProject(project: Project): boolean {
  return project.featured;
}

export function isShowcaseProject(project: Project): boolean {
  return !project.featured;
}
