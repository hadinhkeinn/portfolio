export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C#"]
  },
  {
    category: "Backend",
    skills: ["Django REST Framework", "FastAPI", ".NET", "RESTful APIs", "WebSockets", "Temporal"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "MapLibre", "HTML5", "CSS3"]
  },
  {
    category: "Databases",
    skills: ["ScyllaDB", "Cassandra", "PostgreSQL", "ClickHouse", "Redis", "MongoDB", "MySQL", "Typesense"]
  },
  {
    category: "AI",
    skills: ["RAG", "Vector Search", "Embeddings", "ONNX Runtime", "LanceDB", "Ollama"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS S3", "Cloudflare R2", "Docker", "Git", "CI/CD"]
  },
  {
    category: "Platforms & Tools",
    skills: ["Tauri", "MAVLink"]
  }
];
