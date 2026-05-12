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
    description: "Building backend services and internal tooling for UAV fleet monitoring, swarm coordination, and operational workflows.",
    highlights: [
      "Built an asynchronous FastAPI gateway to coordinate UAV swarms and bridge MAVLink telemetry",
      "Designed a dual-layer communication model using WebSockets for live telemetry and MQTT for low-bandwidth messaging",
      "Implemented geospatial carbon-metrics visualization with MongoDB, .pmtiles, and MapLibre",
      "Integrated AI-assisted fire detection from real-time UAV video streams",
      "Containerized the application ecosystem with Docker to keep development and production environments consistent",
      "Built a custom Agile ERPNext module with sprint, backlog, and Kanban workflow automation"
    ],
    techStack: ["FastAPI", "WebSockets", "MQTT", "MongoDB", "MapLibre", "Docker", "MAVLink", "ERPNext", "Frappe", "Python", "JavaScript"]
  },
  {
    company: "CHEK JSC",
    role: "Full-Stack Developer",
    startDate: "Oct 2024",
    endDate: "Dec 2025",
    isCurrent: false,
    description: "Built and maintained a multi-tenant SaaS platform that connected CRM, CDP, loyalty, payments, and workspace tools for SMEs.",
    highlights: [
      "Developed a QR-code payment service aligned with the Napas VietQR standard",
      "Built a scalable drive service on AWS S3 and Cloudflare R2 with tenant-aware access control",
      "Integrated Cloudflare Turnstile for bot protection and user verification",
      "Added Sentry monitoring to improve error visibility and production debugging",
      "Implemented electronic signatures for secure document workflows",
      "Collaborated in an Agile Scrum team to ship features through iterative releases"
    ],
    techStack: ["Django", "Next.js", "AWS S3", "Cloudflare R2", "Cloudflare Turnstile", "Temporal", "Sentry", "PostgreSQL"]
  }
];
