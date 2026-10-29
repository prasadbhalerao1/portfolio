export interface Project {
  slug: string;
  title: string;
  tagline: string;
  points: string[];
  stack: string[];
  repo: string;
  live?: string;
  context?: string;
  year: string;
}

const gh = (repo: string) => `https://github.com/prasadbhalerao1/${repo}`;

// Featured work, in display order. One-line tagline, max three points.
export const projects: Project[] = [
  {
    slug: "trace",
    title: "TRACE",
    tagline: "Multi-agent hiring platform that scores candidates on evidence, not résumé keywords.",
    points: [
      "Full form: Talent Reliability & Assessment through Credential Evidence",
      "Builds a profile from GitHub, résumé, certificates, LeetCode and hackathon results",
      "Nine sub-scores with a weighted composite; missing signals are re-weighted, never zero-filled",
      "Adaptive AI interviewer grounded in the job description; agent runs traced in Langfuse",
    ],
    stack: ["LangGraph", "Langfuse", "Qdrant", "FastAPI", "Next.js", "Redis"],
    repo: gh("Promptwars-jspm"),
    year: "2026",
  },
  {
    slug: "waypoint",
    title: "WayPoint",
    tagline: "Mental-health companion for college students, built for Smart India Hackathon 2025.",
    points: [
      "RAG-based chat assistant for coping strategies and crisis guidance",
      "PHQ-9 and GAD-7 screening with instant results; confidential counsellor booking",
      "Separate dashboards for students, counsellors and admins",
    ],
    stack: ["React", "TypeScript", "Express", "MongoDB", "Gemini"],
    repo: gh("waypoint2"),
    live: "https://waypoint-demo-two.vercel.app",
    context: "Smart India Hackathon 2025",
    year: "2025",
  },
  {
    slug: "traceroute",
    title: "Adaptive Campus Treasure Hunt",
    tagline: "QR-based treasure hunt platform that adapts routes per team. Ran live at TraceRoute, the event I organised.",
    points: [
      "Unique 5-of-8 route per team, 60-question bank with shuffled options",
      "Local-search optimiser balances how many teams hit each checkpoint",
      "Server-side timing and atomic updates stop double submissions",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    repo: gh("treasureHunt"),
    live: "https://treasurehunt-gotham-ai.vercel.app",
    context: "TraceRoute, RSCOE · Oct 2026",
    year: "2026",
  },
  {
    slug: "supply-chain-agent",
    title: "Supply Chain Disruption Agent",
    tagline: "LangGraph agent that watches an ERP for supplier disruptions and plans the recovery.",
    points: [
      "Two services: a FastAPI ERP and a separate agent service with a LangGraph planner",
      "Compares every plan against a do-nothing baseline; Claude for reasoning, Ollama for local runs",
      "Every agent decision written to an audit trail and shown in a run viewer",
    ],
    stack: ["LangGraph", "Claude API", "FastAPI", "React", "TypeScript"],
    repo: gh("thebigohs"),
    live: "https://thebigohs-erp-sigma.vercel.app",
    context: "Hackers Occupied Pune 2026",
    year: "2026",
  },
];

// Smaller builds, listed without detail.
export const moreProjects: { title: string; note: string; url: string }[] = [
  { title: "Tick Game", note: "1M-cell grid synced live across users, Socket.IO", url: "https://tickgame-websocket.vercel.app" },
  { title: "High-Throughput Location Sharing", note: "Kafka producer + 2 consumer groups, live map", url: gh("High_Throughput_System") },
  { title: "RUNTIME", note: "Social app with real-time chat, stories, reels", url: "https://runtime-dev.vercel.app" },
  { title: "Nexus", note: "E-commerce with live stock updates and RBAC", url: "https://e-commerse-nexus.vercel.app" },
  { title: "Project Management", note: "Workspaces, projects and tasks", url: "https://dbms-project-management.vercel.app" },
  { title: "JugaduCSS", note: "Utility-first CSS engine with Hinglish class names", url: "https://jugad-aur-css.vercel.app" },
]
