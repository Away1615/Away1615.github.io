type Language = "en" | "zh";

const languageStorageKey = "portfolio-language";

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "zh";
}

function getInitialLanguage(): Language {
  const savedLanguage = localStorage.getItem(languageStorageKey);
  if (isLanguage(savedLanguage)) {
    return savedLanguage;
  }

  return "zh";
}

function getLocalizedText(element: HTMLElement, language: Language): string {
  return language === "zh" ? element.dataset.zh! : element.dataset.en!;
}

function translateText(language: Language): void {
  const elements = document.querySelectorAll<HTMLElement>("[data-en][data-zh]");

  for (const element of elements) {
    element.textContent = getLocalizedText(element, language);
  }
}

function translateAriaLabels(language: Language): void {
  const elements = document.querySelectorAll<HTMLElement>("[data-aria-en][data-aria-zh]");

  for (const element of elements) {
    const label = language === "zh" ? element.dataset.ariaZh! : element.dataset.ariaEn!;
    element.setAttribute("aria-label", label);
  }
}

function updateLocalizedLinks(language: Language): void {
  const links = document.querySelectorAll<HTMLAnchorElement>("[data-href-en][data-href-zh]");

  for (const link of links) {
    const href = language === "zh" ? link.dataset.hrefZh! : link.dataset.hrefEn!;
    const download = language === "zh" ? link.dataset.downloadZh! : link.dataset.downloadEn!;
    link.setAttribute("href", href);
    link.setAttribute("download", download);
  }
}

function updateMetadata(language: Language): void {
  const root = document.documentElement;
  const description = document.querySelector<HTMLMetaElement>("#meta-description")!;
  document.title = language === "zh" ? root.dataset.titleZh! : root.dataset.titleEn!;
  description.content = language === "zh" ? root.dataset.descriptionZh! : root.dataset.descriptionEn!;
}

function updateLanguageButtons(language: Language): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>(".language-option");

  for (const button of buttons) {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }
}

function applyLanguage(language: Language): void {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  translateText(language);
  translateAriaLabels(language);
  updateLocalizedLinks(language);
  updateMetadata(language);
  updateLanguageButtons(language);
  localStorage.setItem(languageStorageKey, language);
}

function changeLanguage(event: Event): void {
  const button = event.currentTarget as HTMLButtonElement;
  applyLanguage(button.dataset.language as Language);
}

function setupLanguageSwitch(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>(".language-option");

  for (const button of buttons) {
    button.addEventListener("click", changeLanguage);
  }
}

function markVisible(entries: IntersectionObserverEntry[]): void {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  }
}

function setupRevealAnimation(): void {
  const elements = document.querySelectorAll<HTMLElement>(".reveal");
  const observer = new IntersectionObserver(markVisible, {
    root: null,
    threshold: 0.1
  });

  for (const element of elements) {
    observer.observe(element);
  }
}

function openProjectDialog(event: Event): void {
  const button = event.currentTarget as HTMLButtonElement;
  const dialog = document.getElementById(button.dataset.dialog!) as HTMLDialogElement;
  dialog.showModal();
}

function closeProjectDialog(event: Event): void {
  const button = event.currentTarget as HTMLButtonElement;
  const dialog = button.closest("dialog") as HTMLDialogElement;
  dialog.close();
}

function closeDialogBackdrop(event: MouseEvent): void {
  if (event.target === event.currentTarget) {
    const dialog = event.currentTarget as HTMLDialogElement;
    dialog.close();
  }
}

function setupProjectDialogs(): void {
  const openButtons = document.querySelectorAll<HTMLButtonElement>(".project-detail-button");
  const closeButtons = document.querySelectorAll<HTMLButtonElement>(".dialog-close");
  const dialogs = document.querySelectorAll<HTMLDialogElement>(".project-dialog");

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

setupLanguageSwitch();
applyLanguage(getInitialLanguage());
setupRevealAnimation();
setupProjectDialogs();
