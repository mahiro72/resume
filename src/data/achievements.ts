import type { Localized } from "@/types/i18n";

export interface Achievement {
  date: string;
  title: Localized;
  award?: Localized;
}

export const achievements: Achievement[] = [
  {
    date: "2025/11",
    title: {
      ja: "JPHACKS 2025",
      en: "JPHACKS 2025",
    },
    award: {
      ja: "審査員",
      en: "Judge",
    },
  },
  {
    date: "2024/02",
    title: {
      ja: "Qiitaハッカソン",
      en: "Qiita Hackathon",
    },
    award: {
      ja: "予選入賞 & 決勝出場",
      en: "Preliminary Award & Finals",
    },
  },
  {
    date: "2023/11",
    title: {
      ja: "JPHACKS 2023",
      en: "JPHACKS 2023",
    },
    award: {
      ja: "ゲスト審査員",
      en: "Guest Judge",
    },
  },
  // 受賞ではないのでコメントアウト
  // {
  //   date: "2023/03",
  //   title: {
  //     ja: "みやぎハッカソン 2022",
  //     en: "Miyagi Hackathon 2022",
  //   },
  //   award: {
  //     ja: "出場",
  //     en: "Participant",
  //   },
  // },
  {
    date: "2023/03",
    title: {
      ja: "関西ビギナーズハッカソン vol.1",
      en: "Kansai Beginners Hackathon vol.1",
    },
    award: {
      ja: "審査員",
      en: "Judge",
    },
  },
  {
    date: "2023/01",
    title: {
      ja: "Google Cloud Challenge 2022「すきーま」",
      en: "Google Cloud Challenge 2022 'Schema'",
    },
    award: {
      ja: "最優秀賞, ファイナリスト賞",
      en: "Grand Prize, Finalist Award",
    },
  },
  {
    date: "2022/11",
    title: {
      ja: "JPHACKS 2022「のみぱら!」",
      en: "JPHACKS 2022 'Nomipara!'",
    },
    award: {
      ja: "Audience 2位, 審査委員特別賞, Innovator認定, Award Day Sponsor Award (サントリー賞, シグマ賞, Jストリーム賞)",
      en: "Audience 2nd Place, Special Judge Award, Innovator, Sponsor Awards (Suntory, Sigma, J-Stream)",
    },
  },
  {
    date: "2022/10",
    title: {
      ja: "JPHACKS 2022「のみぱら」",
      en: "JPHACKS 2022 'Nomipara'",
    },
    award: {
      ja: "Best Hacking Sprint Award (Fブロック1位), Hacking Sprint Block Sponsor Award (シグマ賞), Finalist Award",
      en: "Best Hacking Sprint Award (Block F 1st), Block Sponsor Award (Sigma), Finalist Award",
    },
  },
  {
    date: "2022/09",
    title: {
      ja: "技育展 2022「MeetHack」",
      en: "Geek Exhibition 2022 'MeetHack'",
    },
    award: {
      ja: "優秀賞",
      en: "Excellence Award",
    },
  },
  // 受賞ではないのでコメントアウト
  // {
  //   date: "2022/09",
  //   title: {
  //     ja: "技育展 2022「DITA」",
  //     en: "Geek Exhibition 2022 'DITA'",
  //   },
  //   award: {
  //     ja: "登壇",
  //     en: "Presenter",
  //   },
  // },
  {
    date: "2022/09",
    title: {
      ja: "Sansan Trigger 2022",
      en: "Sansan Trigger 2022",
    },
    award: {
      ja: "2位",
      en: "2nd Place",
    },
  },
  {
    date: "2022/08",
    title: {
      ja: "SPAJAM 2022 第一回予選",
      en: "SPAJAM 2022 1st Preliminary",
    },
    award: {
      ja: "優秀賞",
      en: "Excellence Award",
    },
  },
  {
    date: "2022/07",
    title: {
      ja: "技育CAMP vol.5",
      en: "Geek CAMP vol.5",
    },
    award: {
      ja: "最優秀賞",
      en: "Grand Prize",
    },
  },
  {
    date: "2022/06",
    title: {
      ja: "技育CAMP vol.4",
      en: "Geek CAMP vol.4",
    },
    award: {
      ja: "努力賞",
      en: "Effort Award",
    },
  },
  {
    date: "2022/04",
    title: {
      ja: "42HoursTuningTheBackend",
      en: "42HoursTuningTheBackend",
    },
    award: {
      ja: "1位",
      en: "1st Place",
    },
  },
  {
    date: "2022/03",
    title: {
      ja: "令和3年度データ解析コンペティション",
      en: "FY2021 Data Analysis Competition",
    },
    award: {
      ja: "コネヒト賞",
      en: "Connehito Award",
    },
  },
  {
    date: "2022/02",
    title: {
      ja: "データ解析コンペティション関西予選",
      en: "Data Analysis Competition Kansai Preliminary",
    },
    award: {
      ja: "最優秀賞",
      en: "Grand Prize",
    },
  },
  {
    date: "2022/02",
    title: {
      ja: "Pioneer hackathon 2022",
      en: "Pioneer Hackathon 2022",
    },
    award: {
      ja: "3位",
      en: "3rd Place",
    },
  },
  {
    date: "2022/01",
    title: {
      ja: "技育CAMP vol.13",
      en: "Geek CAMP vol.13",
    },
    award: {
      ja: "努力賞",
      en: "Effort Award",
    },
  },
  {
    date: "2021/11",
    title: {
      ja: "技育CAMP vol.11",
      en: "Geek CAMP vol.11",
    },
    award: {
      ja: "最優秀賞",
      en: "Grand Prize",
    },
  },
];
