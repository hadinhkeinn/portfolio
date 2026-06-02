export interface ExperienceEntry {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
  highlights: string[];
  techStack: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    company: "CT UAV",
    role: "Junior Full-Stack Engineer",
    startDate: "Jan 2026",
    endDate: "Present",
    isCurrent: true,
    description: "Building backend services, internal ERP workflows, and real-time interfaces for UAV swarm control, monitoring, and field-data analysis.",
    highlights: [
      "Built an asynchronous FastAPI gateway to coordinate UAV swarm operations and expose unified MAVLink telemetry interfaces",
      "Integrated Redis Pub/Sub with FastAPI WebSocket broadcasting to deliver UAV telemetry and system events to connected monitoring clients",
      "Processed geospatial carbon-metrics data from MongoDB into .pmtiles to improve MapLibre rendering performance",
      "Integrated real-time UAV video streams with an AI fire-detection flow for backend-side field-data analysis",
      "Containerized the application ecosystem with Docker to keep development and production environments consistent",
      "Developed ERPNext and Frappe sprint, backlog, Kanban, and task-code workflows for internal R&D planning"
    ],
    techStack: ["FastAPI", "Redis Pub/Sub", "WebSockets", "MongoDB", "MapLibre", "Docker", "MAVLink", "ERPNext", "Frappe Framework", "Python"]
  },
  {
    company: "CHEK JSC",
    role: "Full-Stack Developer",
    startDate: "Oct 2024",
    endDate: "Dec 2025",
    isCurrent: false,
    description: "Built and maintained a multi-tenant SaaS platform spanning CRM, CDP, campaigns, loyalty, gamification, payments, cloud storage, and local AI workflows.",
    highlights: [
      "Built features across workspace, CRM, CDP, campaigns, loyalty, gamification, and task-management workflows",
      "Implemented Napas VietQR QR-code generation for bank transfers and merchant payment flows",
      "Designed ClickHouse-backed leaderboard analytics for high-volume loyalty point events, ranking, and user performance tracking",
      "Developed a cloud-backed drive service using AWS S3 and Cloudflare R2 with file metadata, access control, and delivery",
      "Integrated Cloudflare Turnstile and Sentry to improve bot protection, error visibility, and operational debugging",
      "Delivered a local RAG AI assistant for a Tauri desktop app using ONNX Runtime, LanceDB, Ollama, React, and TypeScript"
    ],
    techStack: ["Django REST Framework", "React", "TypeScript", "ClickHouse", "AWS S3", "Cloudflare R2", "Cloudflare Turnstile", "Sentry", "ONNX Runtime", "LanceDB", "Ollama"]
  }
];
