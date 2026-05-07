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
    role: "Junior Fullstack Engineer",
    startDate: "Jan 2026",
    endDate: "Present",
    isCurrent: true,
    description: "Architecting backend systems for large-scale swarm UAV control and internal ERP tooling.",
    highlights: [
      "Built async FastAPI gateway to coordinate drone swarms and bridge MAVLink telemetry",
      "Developed dual-layer comms: WebSockets for high-frequency data, MQTT for low-bandwidth messaging",
      "Implemented Carbon Metrics visualization with geospatial data in MongoDB + .pmtiles on MapLibre",
      "Integrated AI-powered fire detection from real-time UAV video streams",
      "Containerized full ecosystem with Docker for consistent dev/prod environments",
      "Built custom Agile ERP module in ERPNext with Sprint/Backlog automation and Kanban dashboard"
    ],
    techStack: ["FastAPI", "WebSockets", "MQTT", "MongoDB", "MapLibre", "Docker", "MAVLink", "ERPNext", "Frappe", "Python", "JavaScript"]
  },
  {
    company: "CHEK JSC",
    role: "Fullstack Developer",
    startDate: "Oct 2024",
    endDate: "Dec 2025",
    isCurrent: false,
    description: "Built and maintained a multi-tenant SaaS platform unifying CRM, CDP, loyalty programs, and workspace tools for SMEs.",
    highlights: [
      "Developed QR Code generation service following Napas VietQR standard",
      "Built scalable Drive Service on AWS S3 and Cloudflare R2 with access control",
      "Integrated Cloudflare Turnstile for bot protection and user verification",
      "Integrated Sentry for error monitoring and system observability",
      "Implemented electronic signature feature for secure document workflows",
      "Collaborated in Agile Scrum team with iterative delivery"
    ],
    techStack: ["Django", "Next.js", "AWS S3", "Cloudflare R2", "Cloudflare Turnstile", "Temporal", "Sentry", "PostgreSQL"]
  }
];

