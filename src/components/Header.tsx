"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { useLanguage } from "@/hooks/useLanguage";

export function Header() {
  const { lang } = useLanguage();
  const paragraphs = profile.bio[lang].split("\n\n");

  return (
    <header className="mb-16">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={profile.avatar}
          alt={profile.name[lang]}
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h1 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100">
            {profile.name[lang]}
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400">
            {profile.title[lang]}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {profile.location[lang]}
        </span>
        <a href={`mailto:${profile.email}`} className="flex items-center gap-1 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {profile.email}
        </a>
      </div>
      <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-3">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </header>
  );
}
