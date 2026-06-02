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
    skills: ["Django REST Framework", "FastAPI", "Node.js", "RESTful APIs", "WebSockets", "Redis Pub/Sub"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "MapLibre", "HTML5", "CSS3"]
  },
  {
    category: "Databases",
    skills: ["Cassandra", "ScyllaDB", "ClickHouse", "PostgreSQL", "MongoDB", "MySQL"]
  },
  {
    category: "AI & Local AI",
    skills: ["RAG", "Vector Search", "Embeddings", "ONNX Runtime", "LanceDB", "Ollama"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS S3", "Cloudflare R2", "Cloudflare Turnstile", "Docker", "Git", "CI/CD"]
  },
  {
    category: "Platforms & Tools",
    skills: ["Tauri", "ERPNext", "Frappe Framework", "MAVLink", "Sentry"]
  }
];
