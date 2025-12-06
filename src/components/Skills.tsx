"use client";

import { skillCategories } from "@/data/skills";
import { useLanguage } from "@/hooks/useLanguage";

export function Skills() {
  const { t, lang } = useLanguage();

  return (
    <section className="mb-12">
      <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6">
        {t.skills}
      </h2>
      <div className="space-y-4">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
              {category.category[lang]}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {category.skills.map((skill) => skill.name).join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
