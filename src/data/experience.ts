export interface ExperienceEntry {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  isCurrent: boolean;
  note?: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    company: "CHEK JSC",
    role: "Fullstack Engineer",
    startDate: "Oct 2024",
    endDate: "Present",
    location: "Ho Chi Minh City",
    isCurrent: true,
    note: "Transitioned to part-time from Jan 2026",
    description: "Building applied-AI features and platform services for a multi-tenant SaaS product spanning CRM, HRM, CDP, campaigns, loyalty, and gamification.",
    highlights: [
      "Designed and shipped a local RAG assistant for the Tauri desktop app end to end, building the embedding and vector-index pipeline with ONNX Runtime and LanceDB and integrating Ollama for contextual generation behind the React UI",
      "Implemented an MCP extension exposing HRM and CRM operations as callable tools for AI agents on the .NET platform",
      "Owned a ranking and leaderboard system backed by ClickHouse end to end, designing an analytical schema and pre-aggregation strategy for high-volume point events, enforcing per-tenant isolation, and delivering ranked results to real-time dashboards",
      "Orchestrated automated multi-tenant provisioning with Temporal workflows, coordinating tenant creation, entity setup, domain and portal registration, and admin assignment into a single auditable, retryable lifecycle",
      "Built a centralized, multi-scope search engine on Typesense with a search-agnostic integration layer, enabling consistent querying across CRM, HRM, inventory, and collaboration modules while enforcing strict tenant and global scope isolation",
      "Developed backend and frontend features across the multi-tenant SaaS platform, spanning workspace, CRM, CDP, campaigns, loyalty, gamification, and task management modules"
    ],
    techStack: ["Django REST Framework", ".NET", "React", "TypeScript", "MCP", "ONNX Runtime", "LanceDB", "Ollama", "ClickHouse", "Temporal", "Typesense"]
  },
  {
    company: "CT UAV",
    role: "Fullstack Engineer",
    startDate: "Jan 2026",
    endDate: "June 2026",
    location: "Ho Chi Minh City",
    isCurrent: false,
    note: "Swarm UAV Control & Monitoring System",
    description: "Delivered the backend and real-time data layer for a swarm UAV control and monitoring system used for live field operations.",
    highlights: [
      "Connected live UAV video feeds to an AI fire detection pipeline, enabling automated analysis of field footage on the backend",
      "Built an asynchronous FastAPI gateway coordinating UAV swarm operations and exposing unified interfaces for MAVLink telemetry",
      "Architected a real-time telemetry pipeline using Redis Pub/Sub to fan out UAV telemetry and system events to FastAPI WebSocket broadcasters, delivering live updates to connected monitoring clients",
      "Optimized the geospatial data processing pipeline that feeds the map layer, reducing rendering overhead and improving the responsiveness of real-time field monitoring"
    ],
    techStack: ["FastAPI", "MAVLink", "Redis Pub/Sub", "WebSockets", "MongoDB", "MapLibre", "Python", "Docker"]
  }
];
