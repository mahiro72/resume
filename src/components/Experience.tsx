"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/hooks/useLanguage";

const INITIAL_DISPLAY_COUNT = 5;

export function Experience() {
  const { t, lang } = useLanguage();
  const [showAllWork, setShowAllWork] = useState(false);
  const [showAllEducation, setShowAllEducation] = useState(false);

  const workExperiences = experiences.filter((e) => e.type === "work");
  const educationExperiences = experiences.filter((e) => e.type === "education");

  return (
    <>
      <section className="mb-12">
        <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6">
          {t.work}
        </h2>
        <div className="space-y-4">
          {workExperiences.map((exp, index) => {
            const isHidden = index >= INITIAL_DISPLAY_COUNT && !showAllWork;

            return (
              <div
                key={index}
                className={isHidden ? "hidden" : ""}
              >
                <div className="flex justify-between items-baseline gap-4 mb-1">
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                    {exp.name[lang]}
                  </h3>
                  <span className="text-sm text-neutral-400 dark:text-neutral-500 tabular-nums shrink-0">
                    {exp.date[lang]}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {exp.description[lang]}
                </p>
              </div>
            );
          })}
        </div>
        {workExperiences.length > INITIAL_DISPLAY_COUNT && (
          <button
            onClick={() => setShowAllWork(!showAllWork)}
            className="mt-4 text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          >
            {showAllWork ? `− ${t.showLess}` : `+ ${t.showMore} (${workExperiences.length - INITIAL_DISPLAY_COUNT})`}
          </button>
        )}
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6">
          {t.education}
        </h2>
        <div className="space-y-6">
          {educationExperiences.map((exp, index) => {
            const isHidden = index >= INITIAL_DISPLAY_COUNT && !showAllEducation;

            return (
              <div
                key={index}
                className={isHidden ? "hidden" : ""}
              >
                <div className="flex justify-between items-baseline gap-4 mb-1">
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                    {exp.name[lang]}
                  </h3>
                  <span className="text-sm text-neutral-400 dark:text-neutral-500 tabular-nums shrink-0">
                    {exp.date[lang]}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {exp.description[lang]}
                </p>
              </div>
            );
          })}
        </div>
        {educationExperiences.length > INITIAL_DISPLAY_COUNT && (
          <button
            onClick={() => setShowAllEducation(!showAllEducation)}
            className="mt-4 text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          >
            {showAllEducation ? `− ${t.showLess}` : `+ ${t.showMore} (${educationExperiences.length - INITIAL_DISPLAY_COUNT})`}
          </button>
        )}
      </section>
    </>
  );
}
