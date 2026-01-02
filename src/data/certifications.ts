import type { Localized } from "@/types/i18n";

export interface Certification {
  date: string;
  title: Localized;
  subtitle?: Localized;
}

export const certifications: Certification[] = [
  {
    date: "2025/12",
    title: {
      ja: "寿司検定3級",
      en: "Sushi Certification Level 3",
    },
    subtitle: {
      ja: "寿司スペシャリスト",
      en: "Sushi Specialist",
    },
  },
  {
    date: "2025/12",
    title: {
      ja: "日本酒検定5級",
      en: "Sake Certification Level 5",
    },
  },
  {
    date: "2021/09",
    title: {
      ja: "統計検定2級",
      en: "Statistics Certification Level 2",
    },
  },
];
