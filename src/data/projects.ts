export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Local RAG Desktop Assistant",
    description: "An offline-first RAG assistant inside a Tauri desktop app: an embedding and vector-index pipeline on ONNX Runtime and LanceDB, with Ollama generating contextual answers behind a React UI.",
    techStack: ["Tauri", "React", "TypeScript", "ONNX Runtime", "LanceDB", "Ollama"]
  },
  {
    title: "MCP Tooling for HRM & CRM",
    description: "A Model Context Protocol extension on the .NET platform that exposes HRM and CRM operations as callable tools, letting AI agents act on real product data through a typed, permissioned surface.",
    techStack: ["MCP", ".NET", "C#", "REST API"]
  },
  {
    title: "Swarm UAV Control & Monitoring",
    description: "A real-time UAV swarm system with an asynchronous FastAPI gateway over MAVLink telemetry, Redis Pub/Sub fan-out to WebSocket broadcasters, AI fire detection on live video, and an optimized geospatial map pipeline.",
    techStack: ["FastAPI", "MAVLink", "Redis Pub/Sub", "WebSockets", "MongoDB", "MapLibre", "Docker"]
  },
  {
    title: "ClickHouse Ranking & Leaderboards",
    description: "An analytical ranking layer for high-volume loyalty point events: a pre-aggregated ClickHouse schema with per-tenant isolation, serving ranked leaderboards to real-time dashboards.",
    techStack: ["ClickHouse", "Django REST Framework", "Analytics", "REST API"]
  },
  {
    title: "Multi-Tenant Provisioning Workflows",
    description: "Temporal-orchestrated tenant onboarding that folds tenant creation, entity setup, domain and portal registration, and admin assignment into one auditable, retryable lifecycle.",
    techStack: ["Temporal", "Python", "Django REST Framework", "PostgreSQL"]
  },
  {
    title: "Multi-Scope Search Engine",
    description: "A centralized search service on Typesense with a search-agnostic integration layer, enabling consistent querying across CRM, HRM, inventory, and collaboration modules under strict tenant and global scope isolation.",
    techStack: ["Typesense", "Django REST Framework", "Python", "Search"]
  }
];
