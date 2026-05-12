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
    description: "A real-time UAV fleet dashboard for monitoring telemetry, fire-detection streams, and geospatial carbon metrics. The system uses WebSockets for live updates and MQTT for efficient low-bandwidth messaging.",
    techStack: ["FastAPI", "WebSockets", "MQTT", "MongoDB", "MapLibre", "Docker"]
  },
  {
    title: "SaaS Business Platform",
    description: "A multi-tenant SaaS platform for SMEs that brings CRM, CDP, loyalty, gamification, and workspace management into one product ecosystem.",
    techStack: ["Django", "Next.js", "PostgreSQL", "Temporal", "Sentry"]
  },
  {
    title: "Agile ERP Module",
    description: "A custom ERPNext module for sprint planning, backlog management, and Kanban scheduling, built to support clearer delivery workflows inside an internal ERP system.",
    techStack: ["ERPNext", "Frappe", "Python", "JavaScript"]
  },
  {
    title: "VietQR Payment Service",
    description: "A QR-code payment service based on the Napas VietQR standard, designed for merchant payment flows and integration across tenant business workflows.",
    techStack: ["Django", "REST API", "Cloudflare R2"]
  }
];
