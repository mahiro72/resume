"use client";

import { useLanguage } from "@/hooks/useLanguage";

export function LanguageToggle() {
  const { isEn, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-lg text-sm font-medium text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      aria-label={isEn ? "日本語に切り替え" : "Switch to English"}
    >
      {isEn ? "日本語" : "EN"}
    </button>
  );
}
