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
    description: "Real-time drone fleet monitoring system with fire detection AI, geospatial carbon metrics, and dual-layer WebSocket/MQTT communication.",
    techStack: ["FastAPI", "WebSockets", "MQTT", "MongoDB", "MapLibre", "Docker"]
  },
  {
    title: "SaaS Business Platform",
    description: "Multi-tenant platform for SMEs unifying CRM, CDP, loyalty programs, gamification, and workspace management.",
    techStack: ["Django", "Next.js", "PostgreSQL", "Temporal", "Sentry"]
  },
  {
    title: "Agile ERP Module",
    description: "Custom Sprint and Backlog management module inside ERPNext with Kanban dashboard and drag-and-drop scheduling.",
    techStack: ["ERPNext", "Frappe", "Python", "JavaScript"]
  },
  {
    title: "VietQR Payment Service",
    description: "QR Code generation and payment service following the Napas VietQR standard, supporting merchant payments and tenant workflow integration.",
    techStack: ["Django", "REST API", "Cloudflare R2"]
  }
];

