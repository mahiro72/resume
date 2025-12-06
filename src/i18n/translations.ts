export type Language = "ja" | "en";

export interface Translations {
  // Section titles
  experience: string;
  skills: string;
  achievements: string;
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
}

export const translations: Record<Language, Translations> = {
  ja: {
    experience: "経歴",
    skills: "スキル",
    achievements: "受賞・実績",
    links: "リンク",
    work: "職歴",
    education: "学歴",
    lightMode: "ライトモード",
    darkMode: "ダークモード",
    japanese: "日本語",
    english: "English",
  },
  en: {
    experience: "Experience",
    skills: "Skills",
    achievements: "Achievements",
    links: "Links",
    work: "Work",
    education: "Education",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    japanese: "日本語",
    english: "English",
  },
};
