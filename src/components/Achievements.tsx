"use client";

import { useState } from "react";
import { achievements } from "@/data/achievements";
import { useLanguage } from "@/hooks/useLanguage";

const INITIAL_DISPLAY_COUNT = 10;

export function Achievements() {
  const { t, isEn } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="mb-12">
      <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6">
        {t.achievements}
      </h2>
      <div className="space-y-2">
        {achievements.map((achievement, index) => {
          const isHidden = index >= INITIAL_DISPLAY_COUNT && !showAll;

          return (
            <div
              key={index}
              className={`flex gap-6 text-sm ${isHidden ? "hidden" : ""}`}
            >
              <span className="text-neutral-400 dark:text-neutral-500 tabular-nums w-16 shrink-0 text-right font-mono text-xs">
                {achievement.date}
              </span>
              <div className="flex-1">
                <span className="text-neutral-900 dark:text-neutral-100">
                  {isEn ? achievement.titleEn : achievement.title}
                </span>
                {achievement.award && (
                  <span className="text-neutral-500 dark:text-neutral-400">
                    {" "}— {isEn ? achievement.awardEn : achievement.award}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {achievements.length > INITIAL_DISPLAY_COUNT && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
        >
          {showAll ? (isEn ? "− Show less" : "− 閉じる") : (isEn ? `+ Show more (${achievements.length - INITIAL_DISPLAY_COUNT})` : `+ もっと見る (${achievements.length - INITIAL_DISPLAY_COUNT})`)}
        </button>
      )}
    </section>
  );
}
