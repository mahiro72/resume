import type { Localized } from "@/types/i18n";

export type ExperienceType = "work" | "education";

export interface Experience {
  date: Localized;
  name: Localized;
  description: Localized;
  type: ExperienceType;
}

export const experiences: Experience[] = [
  // 現在の職歴
  {
    date: {
      ja: "2023/04 - 現在 (2022/06 - 2023/03 アルバイト)",
      en: "2023/04 - Present (2022/06 - 2023/03 Part-time)",
    },
    name: {
      ja: "株式会社ZOZO",
      en: "ZOZO, Inc.",
    },
    description: {
      ja: "正社員（バックエンドエンジニア）/ Golangを用いて基盤APIやAPI Gatewayの開発運用に従事しています。",
      en: "Full-time Backend Engineer / Developing core APIs and API Gateway using Go",
    },
    type: "work",
  },
  {
    date: {
      ja: "2025/03 - 現在",
      en: "2025/03 - Present",
    },
    name: {
      ja: "合同会社 Bit Blend",
      en: "Bit Blend LLC",
    },
    description: {
      ja: "業務委託（テックリード）/ AI・ITスタートアップ企業の開発や技術検証、設計支援などに取り組んでいます。",
      en: "Tech Lead / Development, technical validation, and architecture support for AI/IT startups",
    },
    type: "work",
  },
  {
    date: {
      ja: "2025/03 - 現在",
      en: "2025/03 - Present",
    },
    name: {
      ja: "株式会社 Prefab",
      en: "Prefab Inc.",
    },
    description: {
      ja: "業務委託（技術顧問）/ 建設業関係のAIアプリケーションの設計やコードレビューなどに取り組んでいます。",
      en: "Technical Advisor / Architecture design and code review for construction industry AI applications",
    },
    type: "work",
  },
  {
    date: {
      ja: "2024/09 - 2025/06(お休み中)",
      en: "2024/09 - 2025/06 (On break)",
    },
    name: {
      ja: "株式会社 STAR UP",
      en: "STAR UP Inc.",
    },
    description: {
      ja: "業務委託（技術顧問）/ 製造業関連の生成AIサービスの技術設計のレビューに取り組んでいます。",
      en: "Technical Advisor / Reviewing technical designs for manufacturing-related generative AI services",
    },
    type: "work",
  },
  {
    date: {
      ja: "2024/08 - 2025/06(お休み中)",
      en: "2024/08 - 2025/06 (On break)",
    },
    name: {
      ja: "株式会社 SPARQ",
      en: "SPARQ Inc.",
    },
    description: {
      ja: "業務委託（SRE）/ SREとしてインフラ基盤の構築や、アプリケーションの監視基盤を作っています。",
      en: "SRE / Building infrastructure and application monitoring systems",
    },
    type: "work",
  },
  {
    date: {
      ja: "2023/10 - 2025/08",
      en: "2023/10 - 2025/08",
    },
    name: {
      ja: "株式会社AI VOLT",
      en: "AI VOLT Inc.",
    },
    description: {
      ja: "業務委託（テックリード）/ 生成AIサービスのバックエンドの設計開発から、PM、保守・運用など幅広く取り組みました。",
      en: "Tech Lead / Backend development, PM, and operations for generative AI services",
    },
    type: "work",
  },
  {
    date: {
      ja: "2023/05 - 2024/02",
      en: "2023/05 - 2024/02",
    },
    name: {
      ja: "株式会社CoPalette",
      en: "CoPalette Inc.",
    },
    description: {
      ja: "共同創業者（取締役）/ Golangを用いて人材管理のSaaSのAPI開発をしました。",
      en: "Co-founder & Director / Developed HR management SaaS APIs using Go",
    },
    type: "work",
  },
  {
    date: {
      ja: "2023/01 - 2023/03",
      en: "2023/01 - 2023/03",
    },
    name: {
      ja: "株式会社ispec",
      en: "ispec Inc.",
    },
    description: {
      ja: "業務委託（バックエンドエンジニア）/ Golangを用いたAPI開発をしました。",
      en: "Backend Engineer / API development using Go",
    },
    type: "work",
  },
  {
    date: {
      ja: "2023/03",
      en: "2023/03",
    },
    name: {
      ja: "株式会社ナレッジワーク",
      en: "Knowledge Work Inc.",
    },
    description: {
      ja: "インターンシップ / Golangで「アーキテクチャの依存関係がルール違反してないか確認する静的解析ツール」を作成しました。",
      en: "Internship / Built a static analysis tool in Go to verify architecture dependency rule compliance",
    },
    type: "work",
  },
  {
    date: {
      ja: "2022/08 - 2023/03",
      en: "2022/08 - 2023/03",
    },
    name: {
      ja: "株式会社プレイド",
      en: "PLAID Inc.",
    },
    description: {
      ja: "インターンシップ（バックエンドエンジニア）/ MessageチームにてAPI開発やSREの業務に取り組みました。",
      en: "Backend Engineer Intern / API development and SRE tasks in Message team",
    },
    type: "work",
  },
  {
    date: {
      ja: "2022/09",
      en: "2022/09",
    },
    name: {
      ja: "Sansan株式会社",
      en: "Sansan, Inc.",
    },
    description: {
      ja: "インターンシップ / ハッカソン",
      en: "Internship / Hackathon",
    },
    type: "work",
  },
  {
    date: {
      ja: "2022/04 - 2022/05",
      en: "2022/04 - 2022/05",
    },
    name: {
      ja: "GMOインターネット",
      en: "GMO Internet Group",
    },
    description: {
      ja: "DevSecOpsThon / 物理サーバーの構築やチューニングなどに取り組みました。",
      en: "DevSecOpsThon / Physical server setup and tuning",
    },
    type: "work",
  },
  {
    date: {
      ja: "2021/04 - 2022/07",
      en: "2021/04 - 2022/07",
    },
    name: {
      ja: "株式会社ソウ",
      en: "SOU Inc.",
    },
    description: {
      ja: "業務委託（フルスタックエンジニア）/ さまざまなシステム設計、開発などを取り組みました。",
      en: "Full-stack Engineer / System design and development",
    },
    type: "work",
  },
  {
    date: {
      ja: "2022/03",
      en: "2022/03",
    },
    name: {
      ja: "チームラボ株式会社",
      en: "teamLab Inc.",
    },
    description: {
      ja: "インターンシップ（フロントエンドエンジニア）/ 機能拡張やテスト作成などの経験をしました。",
      en: "Frontend Engineer Intern / Feature development and testing",
    },
    type: "work",
  },
  {
    date: {
      ja: "2021/09",
      en: "2021/09",
    },
    name: {
      ja: "クックパッド株式会社",
      en: "Cookpad Inc.",
    },
    description: {
      ja: "インターンシップ / RubyやGraphQLを用いた課題に取り組みました。",
      en: "Internship / Worked on assignments using Ruby and GraphQL",
    },
    type: "work",
  },
  // 学歴
  {
    date: {
      ja: "2022/03 - 2023/03",
      en: "2022/03 - 2023/03",
    },
    name: {
      ja: "Do'er",
      en: "Do'er",
    },
    description: {
      ja: "同志社大学・同志社女子大学エンジニアのためのコミュニティ / コアメンバー / OBとして所属はしています",
      en: "Engineering community for Doshisha University / Core member / Currently an alumni member",
    },
    type: "education",
  },
  {
    date: {
      ja: "2022/04 - 2023/03",
      en: "2022/04 - 2023/03",
    },
    name: {
      ja: "42Tokyo",
      en: "42Tokyo",
    },
    description: {
      ja: "libcやprintfの実装に取り組んでいます",
      en: "Working on implementing libc and printf",
    },
    type: "education",
  },
  {
    date: {
      ja: "2019/04 - 2023/03",
      en: "2019/04 - 2023/03",
    },
    name: {
      ja: "同志社大学",
      en: "Doshisha University",
    },
    description: {
      ja: "統計学や機械学習、データサイエンスなどを学んでいます",
      en: "Studying Statistics, Machine Learning, and Data Science",
    },
    type: "education",
  },
];
