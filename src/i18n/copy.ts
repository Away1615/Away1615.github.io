import { localized } from "../data/portfolio";

export const copy = {
  metadata: {
    title: localized("Wei Dong - Gameplay Programmer", "董玮 - UE5 玩法与游戏客户端程序员"),
    description: localized(
      "Wei Dong - UE5 Gameplay and Game Client Programmer portfolio.",
      "董玮的 UE5 玩法与游戏客户端程序员作品集。"
    )
  },
  accessibility: {
    home: localized("Wei Dong home", "董玮主页"),
    navigation: localized("Primary navigation", "主导航"),
    language: localized("Choose language", "选择语言"),
    closeProject: localized("Close project details", "关闭项目详情")
  },
  navigation: {
    about: localized("About", "关于我"),
    projects: localized("Projects", "项目"),
    experience: localized("Experience", "经历"),
    skills: localized("Skills", "技能"),
    contact: localized("Contact", "联系"),
    resume: localized("View CV", "查看简历")
  },
  hero: {
    availability: localized("Open to gameplay and game client roles", "正在寻找游戏玩法与客户端开发机会"),
    title: localized("Hi, I'm Wei Dong.", "你好，我是董玮。"),
    role: localized("UE5 Gameplay / Game Client Programmer", "UE5 玩法 / 游戏客户端程序员"),
    summary: localized(
      "I bring three years of production client engineering experience into multiplayer gameplay systems, real-time rendering, and performance-focused C++ development.",
      "我将三年的大型客户端生产经验，应用于多人玩法系统、实时渲染与注重性能的 C++ 开发。"
    ),
    resume: localized("View resume", "查看简历"),
    projects: localized("Project showcase", "浏览项目")
  },
  about: {
    eyebrow: localized("About me", "关于我"),
    title: localized("Production engineering, redirected toward games.", "从成熟客户端工程走向游戏开发。"),
    paragraphOne: localized(
      "Before moving into game development, I worked as an iOS Client Engineer at ByteDance on Feishu and Doubao. I shipped product features, reusable UI systems, platform capabilities, and client architecture improvements in large production codebases.",
      "在转向游戏开发前，我曾在字节跳动担任 iOS 客户端工程师，参与飞书与豆包，交付产品功能、可复用 UI 系统、平台能力，并在大型生产级代码库中推动客户端架构改进。"
    ),
    paragraphTwo: localized(
      "I am now completing an MSc in Games Engineering at the University of Warwick. My current work focuses on UE5 gameplay, networking and replication, AI systems, DirectX 12 rendering, and CPU performance optimization.",
      "我目前正在华威大学攻读游戏工程硕士。当前工作集中在 UE5 玩法开发、网络与复制、AI 系统、DirectX 12 渲染和 CPU 性能优化。"
    ),
    facts: [
      {
        value: localized("3 years", "3 年"),
        label: localized("Production client engineering", "生产级客户端工程经验")
      },
      {
        value: localized("4 projects", "4 个项目"),
        label: localized("Selected game and graphics work", "精选游戏与图形项目")
      },
      {
        value: localized("MSc", "硕士"),
        label: localized("Games Engineering at Warwick", "华威大学游戏工程")
      }
    ]
  },
  projects: {
    eyebrow: localized("Featured projects", "精选项目"),
    title: localized("Gameplay systems and rendering work.", "游戏玩法系统与渲染实践。"),
    intro: localized(
      "Click a project for responsibilities, tools, and technical details.",
      "点击项目查看职责、工具与技术细节。"
    ),
    showcaseEyebrow: localized("Project showcase", "项目展示"),
    showcaseTitle: localized("Focused technical work.", "深入的技术项目。"),
    details: localized("View details", "查看详情"),
    openGithub: localized("Open GitHub", "查看 GitHub")
  },
  experience: {
    eyebrow: localized("Experience", "经历"),
    title: localized("Client engineering meets game systems.", "客户端工程经验与游戏系统开发的结合。")
  },
  skills: {
    eyebrow: localized("Skills", "技能"),
    title: localized("Tools I use to build and debug gameplay.", "用于构建和调试游戏玩法的工具。")
  },
  contact: {
    eyebrow: localized("Contact", "联系我"),
    title: localized(
      "Let's build responsive, readable gameplay systems.",
      "一起构建响应迅速、结构清晰的游戏玩法系统。"
    ),
    description: localized(
      "Open to UE5 gameplay and game client opportunities.",
      "期待 UE5 玩法与游戏客户端开发机会。"
    ),
    email: localized("Email me", "给我发邮件")
  }
};
