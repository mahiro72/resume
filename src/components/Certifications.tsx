"use client";

import { certifications } from "@/data/certifications";
import { useLanguage } from "@/hooks/useLanguage";

export function Certifications() {
  const { t, lang } = useLanguage();

  return (
    <section className="mb-12">
      <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6">
        {t.certifications}
      </h2>
      <div className="space-y-2">
        {certifications.map((certification, index) => (
          <div key={index} className="flex gap-6 text-sm">
            {certification.date && (
              <span className="text-neutral-400 dark:text-neutral-500 tabular-nums w-16 shrink-0 text-right font-mono text-xs">
                {certification.date}
              </span>
            )}
            <div className="flex-1">
              <span className="text-neutral-900 dark:text-neutral-100">
                {certification.title[lang]}
              </span>
              {certification.subtitle && (
                <span className="text-neutral-500 dark:text-neutral-400">
                  {" "}({certification.subtitle[lang]})
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
