export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Swarm UAV Dashboard",
    description: "A real-time UAV swarm control and monitoring system with MAVLink telemetry, Redis Pub/Sub event delivery, FastAPI WebSocket broadcasts, fire-detection video analysis, and geospatial carbon-metrics maps.",
    techStack: ["FastAPI", "MAVLink", "Redis Pub/Sub", "WebSockets", "MongoDB", "MapLibre", "Docker"]
  },
  {
    title: "Multi-Tenant SaaS Platform",
    description: "A business platform covering workspace, CRM, CDP, campaigns, loyalty, gamification, tasks, VietQR payments, and tenant-aware cloud file workflows.",
    techStack: ["Django REST Framework", "React", "TypeScript", "PostgreSQL", "AWS S3", "Cloudflare R2", "Sentry"]
  },
  {
    title: "ClickHouse Loyalty Analytics",
    description: "A leaderboard analytics layer for loyalty and gamification workflows, separating aggregation-heavy point-event queries from transactional storage.",
    techStack: ["ClickHouse", "Django REST Framework", "Analytics", "REST API"]
  },
  {
    title: "Local RAG Desktop Assistant",
    description: "A local AI assistant for a Tauri desktop application with embeddings, vector search, contextual responses, and smoke checks for model and vector-store health.",
    techStack: ["Tauri", "React", "TypeScript", "ONNX Runtime", "LanceDB", "Ollama"]
  },
  {
    title: "Agile ERP Module",
    description: "A custom ERPNext module for sprint planning, backlog management, Kanban scheduling, and task-code conventions for internal R&D delivery workflows.",
    techStack: ["ERPNext", "Frappe Framework", "Python", "JavaScript"]
  }
];
