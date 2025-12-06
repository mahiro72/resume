"use client";

import { interviews } from "@/data/interviews";
import { useLanguage } from "@/hooks/useLanguage";

export function Interviews() {
  const { t, lang } = useLanguage();

  return (
    <section className="mb-12">
      <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6">
        {t.interviews}
      </h2>
      <div className="space-y-3">
        {interviews.map((interview, index) => (
          <div key={index} className="flex gap-6 text-sm">
            <span className="text-neutral-400 dark:text-neutral-500 tabular-nums w-16 shrink-0 text-right font-mono text-xs">
              {interview.date}
            </span>
            <div className="flex-1">
              <a
                href={interview.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
              >
                {interview.title[lang]}
              </a>
              <span className="text-neutral-400 dark:text-neutral-500">
                {" "}— {interview.source}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
