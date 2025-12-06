import type { Language } from "@/types/i18n";

export interface Translations {
  // Section titles
  experience: string;
  skills: string;
  achievements: string;
  interviews: string;
  links: string;
  // Labels
  work: string;
  education: string;
  // Theme
  lightMode: string;
  darkMode: string;
  // Language
  japanese: string;
  english: string;
  // UI
  showMore: string;
  showLess: string;
  switchLanguage: string;
  switchLanguageLabel: string;
}

export const translations: Record<Language, Translations> = {
  ja: {
    experience: "経歴",
    skills: "スキル",
    achievements: "受賞・実績",
    interviews: "インタビュー",
    links: "リンク",
    work: "職歴",
    education: "学歴",
    lightMode: "ライトモード",
    darkMode: "ダークモード",
    japanese: "日本語",
    english: "English",
    showMore: "もっと見る",
    showLess: "閉じる",
    switchLanguage: "EN",
    switchLanguageLabel: "Switch to English",
  },
  en: {
    experience: "Experience",
    skills: "Skills",
    achievements: "Achievements",
    interviews: "Interviews",
    links: "Links",
    work: "Work",
    education: "Education",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    japanese: "日本語",
    english: "English",
    showMore: "Show more",
    showLess: "Show less",
    switchLanguage: "日本語",
    switchLanguageLabel: "日本語に切り替え",
  },
};
