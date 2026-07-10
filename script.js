document.documentElement.classList.add("js");

const chineseTranslations = {
  "brand.home": "董玮主页",
  "nav.label": "主导航",
  "nav.about": "关于我",
  "nav.projects": "项目",
  "nav.experience": "经历",
  "nav.skills": "技能",
  "nav.contact": "联系",
  "common.resume": "查看简历",
  "common.viewResume": "查看简历",
  "common.projectShowcase": "浏览项目",
  "common.viewDetails": "查看详情",
  "common.openGithub": "查看 GitHub",
  "hero.availability": "正在寻找游戏玩法与客户端开发机会",
  "hero.title": "你好，我是董玮。",
  "hero.role": "UE5 玩法 / 游戏客户端程序员",
  "hero.summary": "我将三年的大型客户端生产经验，应用于多人玩法系统、实时渲染与注重性能的 C++ 开发。",
  "about.eyebrow": "关于我",
  "about.title": "从成熟客户端工程走向游戏开发。",
  "about.paragraphOne": "在转向游戏开发前，我曾在字节跳动担任 iOS 客户端工程师，参与飞书与豆包，交付产品功能、可复用 UI 系统、平台能力，并在大型生产级代码库中推动客户端架构改进。",
  "about.paragraphTwo": "我目前正在华威大学攻读游戏工程硕士。当前工作集中在 UE5 玩法开发、网络与复制、AI 系统、DirectX 12 渲染和 CPU 性能优化。",
  "about.factYearsValue": "3 年",
  "about.factYearsLabel": "生产级客户端工程经验",
  "about.factProjectsValue": "4 个项目",
  "about.factProjectsLabel": "精选游戏与图形项目",
  "about.factDegreeValue": "硕士",
  "about.factDegreeLabel": "华威大学游戏工程",
  "projects.eyebrow": "精选项目",
  "projects.title": "游戏玩法系统与渲染实践。",
  "projects.intro": "点击项目查看职责、工具与技术细节。",
  "projects.riftMedia": "添加多人游戏截图或 GIF",
  "projects.riftDescription": "1-4 人第三人称合作 PvE ARPG 原型，包含大厅流程、网络同步战斗、遭遇波次、敌人 AI、Boss 阶段、重生与胜利结算。",
  "projects.dx12Media": "添加第一人称游戏画面",
  "projects.dx12Description": "基于自研 DirectX 12 渲染器构建的第一人称射击 Demo，支持数据驱动关卡、组件化玩法、骨骼网格与 GPU 实例化。",
  "projects.rasterizerMedia": "添加性能对比可视化",
  "projects.rasterizerDescription": "通过流水线改进、八像素 SIMD 着色、分块调度和自研线程池优化 CPU 光栅器。",
  "projects.vehicleMedia": "添加载具战斗画面",
  "projects.vehicleDescription": "六人团队开发的载具战斗游戏，我负责动态天气、玩法 VFX、Niagara 特效、材质以及面向 Blueprint 的 C++ 粒子组件。",
  "showcase.eyebrow": "项目展示",
  "showcase.title": "深入的技术项目。",
  "experience.eyebrow": "经历",
  "experience.title": "客户端工程经验与游戏系统开发的结合。",
  "experience.warwickName": "华威大学",
  "experience.warwickDescription": "游戏工程硕士，WMG Excellence Scholarship。",
  "experience.warwickTag": "图形 / 引擎 / UE5",
  "experience.byteDanceName": "字节跳动",
  "experience.byteDanceDescription": "iOS 客户端工程师，参与飞书、豆包生产功能与客户端公共系统建设。",
  "experience.byteDanceTag": "Swift / 客户端架构",
  "experience.whutName": "武汉理工大学",
  "experience.whutDescription": "软件工程学士。",
  "experience.whutTag": "计算机科学",
  "skills.eyebrow": "技能",
  "skills.title": "用于构建和调试游戏玩法的工具。",
  "skills.languages": "编程语言",
  "skills.gameplay": "玩法系统",
  "skills.rendering": "图形渲染",
  "skills.performance": "性能优化",
  "contact.eyebrow": "联系我",
  "contact.title": "一起构建响应迅速、结构清晰的游戏玩法系统。",
  "contact.description": "期待 UE5 玩法与游戏客户端开发机会。",
  "contact.email": "给我发邮件",
  "meta.role": "角色",
  "meta.engine": "引擎",
  "meta.platform": "平台",
  "meta.tools": "工具",
  "meta.language": "语言",
  "meta.focus": "重点",
  "meta.optimization": "优化方式",
  "meta.result": "结果",
  "meta.team": "团队",
  "dialog.featuredProject": "精选项目",
  "dialog.technicalProject": "技术项目",
  "dialog.teamProject": "团队项目",
  "dialog.responsibilities": "主要职责",
  "dialog.keySystems": "核心系统",
  "dialog.keyWork": "关键工作",
  "dialog.riftClose": "关闭 Rift 详情",
  "dialog.riftMedia": "Rift 游戏画面",
  "dialog.riftRole": "独立玩法 / 系统程序员",
  "dialog.riftPlatform": "PC、局域网多人游戏",
  "dialog.riftItemOne": "实现房间码加入、大厅准备、角色确认、地图切换、重生与胜利流程。",
  "dialog.riftItemTwo": "使用 GAS 构建双剑战斗，包括连招图、格挡、闪避、RapidSlash、韧性、硬直与属性同步。",
  "dialog.riftItemThree": "实现服务器权威的遭遇波次、敌人行为树、护盾行为和网络同步的 Boss 阶段。",
  "dialog.dx12Close": "关闭 DX12-FPS 详情",
  "dialog.dx12Media": "DX12-FPS 游戏画面",
  "dialog.dx12Role": "独立程序员",
  "dialog.dx12Engine": "自研 DirectX 12 渲染器",
  "dialog.dx12ItemOne": "实现交换链、帧资源、命令列表、颜色与深度目标、根签名、PSO 和着色器管理。",
  "dialog.dx12ItemTwo": "构建纹理、着色器、材质、对象与组件的数据驱动关卡加载系统。",
  "dialog.dx12ItemThree": "加入第一人称控制、武器、AABB 碰撞、射线射击、骨骼网格、法线贴图与 GPU 实例化。",
  "dialog.rasterizerClose": "关闭光栅器详情",
  "dialog.rasterizerMedia": "光栅器性能测试画面",
  "dialog.rasterizerFocus": "CPU 渲染性能",
  "dialog.rasterizerResult": "相对基线约提升 2-4 倍",
  "dialog.rasterizerItemOne": "加入顶点缓存、预归一化光照、Early-Z、背面剔除与视锥剔除。",
  "dialog.rasterizerItemTwo": "使用 AVX SIMD 对八像素着色与光照进行向量化。",
  "dialog.rasterizerItemThree": "通过自研线程池实现分块渲染，并对比 FPS、P99 延迟与加速比。",
  "dialog.vehicleClose": "关闭载具战斗详情",
  "dialog.vehicleMedia": "载具战斗游戏画面",
  "dialog.vehicleRole": "玩法 VFX / 天气程序员",
  "dialog.vehicleTeam": "6 人",
  "dialog.vehicleItemOne": "实现晴天、多云和雨天预设，以及事件驱动的平滑天气过渡。",
  "dialog.vehicleItemTwo": "制作降雨、地面溅射、闪电、速度线、导弹特效与轮胎痕迹。",
  "dialog.vehicleItemThree": "构建轻量级 C++ 粒子组件并暴露给 Blueprint，用于烟雾和碰撞火花。"
};

const documentTranslations = {
  en: {
    title: "Wei Dong - Gameplay Programmer",
    description: "Wei Dong - UE5 Gameplay and Game Client Programmer portfolio."
  },
  zh: {
    title: "董玮 - UE5 玩法与游戏客户端程序员",
    description: "董玮的 UE5 玩法与游戏客户端程序员作品集。"
  }
};

function cacheEnglishContent() {
  const textElements = document.querySelectorAll("[data-i18n]");
  const ariaElements = document.querySelectorAll("[data-i18n-aria-label]");

  for (const element of textElements) {
    element.dataset.i18nEnglish = element.textContent.trim();
  }

  for (const element of ariaElements) {
    element.dataset.i18nAriaEnglish = element.getAttribute("aria-label");
  }
}

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("portfolio-language");
  if (savedLanguage === "en" || savedLanguage === "zh") {
    return savedLanguage;
  }

  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function translateText(language) {
  const elements = document.querySelectorAll("[data-i18n]");

  for (const element of elements) {
    const key = element.dataset.i18n;
    element.textContent = language === "zh" ? chineseTranslations[key] : element.dataset.i18nEnglish;
  }
}

function translateAriaLabels(language) {
  const elements = document.querySelectorAll("[data-i18n-aria-label]");

  for (const element of elements) {
    const key = element.dataset.i18nAriaLabel;
    const label = language === "zh" ? chineseTranslations[key] : element.dataset.i18nAriaEnglish;
    element.setAttribute("aria-label", label);
  }
}

function updateLanguageButtons(language) {
  const buttons = document.querySelectorAll(".language-option");

  for (const button of buttons) {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }
}

function applyLanguage(language) {
  const metadata = documentTranslations[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = metadata.title;
  document.getElementById("meta-description").setAttribute("content", metadata.description);
  translateText(language);
  translateAriaLabels(language);
  updateLanguageButtons(language);
  localStorage.setItem("portfolio-language", language);
}

function changeLanguage(event) {
  applyLanguage(event.currentTarget.dataset.language);
}

function setupLanguageSwitch() {
  const buttons = document.querySelectorAll(".language-option");

  for (const button of buttons) {
    button.addEventListener("click", changeLanguage);
  }
}

function markVisible(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  }
}

function setupRevealAnimation() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(markVisible, {
    root: null,
    threshold: 0.1
  });

  for (const element of elements) {
    observer.observe(element);
  }
}

function openProjectDialog(event) {
  const dialogId = event.currentTarget.dataset.dialog;
  const dialog = document.getElementById(dialogId);
  dialog.showModal();
}

function closeProjectDialog(event) {
  const dialog = event.currentTarget.closest("dialog");
  dialog.close();
}

function closeDialogBackdrop(event) {
  if (event.target === event.currentTarget) {
    event.currentTarget.close();
  }
}

function setupProjectDialogs() {
  const openButtons = document.querySelectorAll(".project-detail-button");
  const closeButtons = document.querySelectorAll(".dialog-close");
  const dialogs = document.querySelectorAll(".project-dialog");

  for (const button of openButtons) {
    button.addEventListener("click", openProjectDialog);
  }

  for (const button of closeButtons) {
    button.addEventListener("click", closeProjectDialog);
  }

  for (const dialog of dialogs) {
    dialog.addEventListener("click", closeDialogBackdrop);
  }
}

cacheEnglishContent();
setupLanguageSwitch();
applyLanguage(getInitialLanguage());
setupRevealAnimation();
setupProjectDialogs();
