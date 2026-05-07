export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C/C++"]
  },
  {
    category: "Backend",
    skills: ["Django", "FastAPI", "Node.js", "Express.js", "RESTful APIs", "WebSockets", "MQTT"]
  },
  {
    category: "Frontend",
    skills: ["Next.js", "React.js", "Astro", "TailwindCSS", "MapLibre", "HTML5", "CSS3"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Cassandra", "SQL Server"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS S3", "Cloudflare R2", "Cloudflare Turnstile", "Docker", "Git", "CI/CD", "Sentry"]
  },
  {
    category: "Platforms & Tools",
    skills: ["ERPNext", "Frappe Framework", "MAVLink", "Temporal"]
  }
];

