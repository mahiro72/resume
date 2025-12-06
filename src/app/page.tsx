import { Header } from "@/components/Header";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Links } from "@/components/Links";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-900 transition-colors">
      <div className="fixed top-6 right-6 flex items-center gap-3 z-50">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <div className="max-w-xl mx-auto px-6 py-20">
        <Header />
        <Links />
        <Experience />
        <Skills />
        <Achievements />
      </div>
    </main>
  );
}
