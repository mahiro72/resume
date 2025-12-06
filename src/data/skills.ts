export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  category: string;
  categoryEn: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "フロントエンド",
    categoryEn: "Frontend",
    skills: [
      { name: "TypeScript", level: 3 },
      { name: "React", level: 3 },
      { name: "Next.js", level: 2 },
      { name: "Vue.js", level: 2 },
    ],
  },
  {
    category: "バックエンド",
    categoryEn: "Backend",
    skills: [
      { name: "Go", level: 5 },
      { name: "Python", level: 5 },
      { name: "FastAPI", level: 5 },
      { name: "Flask", level: 3 },
      { name: "Node.js", level: 2 },
      { name: "Java", level: 2 },
    ],
  },
  {
    category: "インフラ / DevOps",
    categoryEn: "Infrastructure / DevOps",
    skills: [
      // Cloud
      { name: "GCP", level: 4 },
      { name: "AWS", level: 4 },
      { name: "Azure", level: 4 },
      // Container
      { name: "Docker", level: 4 },
      { name: "Kubernetes", level: 4 },
      // Database
      { name: "PostgreSQL", level: 3 },
      { name: "MySQL", level: 3 },
      { name: "Redis", level: 2 },
      { name: "BigQuery", level: 2 },
      // Monitoring
      { name: "Datadog", level: 3 },
      { name: "Sentry", level: 3 },
    ],
  },
  {
    category: "その他",
    categoryEn: "Others",
    skills: [
      { name: "Microservices", level: 3 },
      { name: "DDD", level: 3 },
      { name: "C", level: 3 },
      { name: "Operating System", level: 3 },
    ],
  },
];
