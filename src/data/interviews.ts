import type { Localized } from "@/types/i18n";

export interface Interview {
  title: Localized;
  url: string;
  source: string;
  date: string;
}

export const interviews: Interview[] = [
  {
    title: {
      ja: "未来のエンジニアを育てる「技育展」にスポンサーとして初参加しました！",
      en: "We participated as a sponsor in \"Geek Exhibition\" nurturing future engineers!",
    },
    url: "https://blog.brainpad.co.jp/entry/2022/12/08/150021",
    source: "BrainPad",
    date: "2022/12",
  },
  {
    title: {
      ja: "快適なオンライン飲み会体験を提供する「のみぱら」がＪストリーム賞を受賞 ー JPHACKS2022",
      en: "\"Nomipara\" wins J-Stream Award for providing comfortable online drinking party experience - JPHACKS2022",
    },
    url: "https://voice.stream.co.jp/event/20221129/",
    source: "J-Stream",
    date: "2022/11",
  },
];
