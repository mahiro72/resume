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
    ja: "こんにちは、mahiroです。\n\n普段はメガベンチャーにて、バックエンドエンジニアとして働いています。業務内容としては、Golangを用いたマイクロサービスやAPI Gatewayの設計、開発、運用などしています。\n8月末に現職を退職し、9月からは別の会社に転職します。\n日本酒とお寿司、猫が好きです。🐈",
    en: "Hi, I'm mahiro.\n\nI work as a backend engineer at a major tech company in Japan. My main responsibilities include designing, developing, and operating microservices and API Gateways using Go.\nI'm leaving my current job at the end of August and joining a new company in September.\nI love sake, sushi, and cats. 🐈",
  },
  avatar: "/images/avatar.png",
};
