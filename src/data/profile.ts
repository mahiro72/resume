import type { Localized } from "@/types/i18n";

export interface Profile {
  name: Localized;
  title: Localized;
  location: Localized;
  email: string;
  bio: Localized;
  avatar: string;
}

export const profile: Profile = {
  name: {
    ja: "mahiro",
    en: "mahiro",
  },
  title: {
    ja: "Software Engineer",
    en: "Software Engineer",
  },
  location: {
    ja: "東京",
    en: "Tokyo, Japan",
  },
  email: "mahiro.yoshie@gmail.com",
  bio: {
    ja: "こんにちは、mahiroです。\n\n普段はメガベンチャーにて、バックエンドエンジニアとして働いています。業務内容としては、Golangを用いたマイクロサービスやAPI Gatewayの設計、開発、運用などしています。\n\n副業では、AIスタートアップ複数社にて技術顧問を担当しており、サービスの設計からコードのレビュー、PMや組織設計など幅広く携わっています。他にもSREとしてSaaSのインフラ基盤構築などの経験もあり、上流から下流まで幅広い領域で実務経験を積んでいます。",
    en: "Hi, I'm mahiro.\n\nI work as a backend engineer at a major tech company in Japan. My main responsibilities include designing, developing, and operating microservices and API Gateways using Go.\n\nOn the side, I serve as a technical advisor for multiple AI startups, where I'm involved in a wide range of activities from service design and code reviews to project management and organizational design. I also have experience as an SRE building SaaS infrastructure, gaining practical experience across the full stack from upstream to downstream.",
  },
  avatar: "/images/avatar.png",
};
