import {
  siApachekafka,
  siClaude,
  siClerk,
  siCloudinary,
  siCplusplus,
  siCss,
  siDocker,
  siDrizzle,
  siExpress,
  siFastapi,
  siFramer,
  siGit,
  siGithub,
  siGooglecloud,
  siGooglegemini,
  siHtml5,
  siJavascript,
  siJsonwebtokens,
  siKubernetes,
  siLangchain,
  siLanggraph,
  siLinux,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siOllama,
  siOpenjdk,
  siOpentelemetry,
  siPostgresql,
  siPostman,
  siPrisma,
  siPrometheus,
  siPydantic,
  siPython,
  siQdrant,
  siReact,
  siRedis,
  siSocketdotio,
  siStreamlit,
  siSupabase,
  siTailwindcss,
  siTrpc,
  siTurborepo,
  siTypescript,
  siVite,
  siZod,
  type SimpleIcon,
} from "simple-icons";
import SectionHead from "../SectionHead";
import { cn } from "@/lib/utils";

type Tool = { name: string; icon?: SimpleIcon };

// One row per layer of a system. Tools without an official mark show as a dot.
const ROWS: { label: string; tools: Tool[] }[] = [
  {
    label: "AI & agents",
    tools: [
      { name: "LangGraph", icon: siLanggraph },
      { name: "LangChain", icon: siLangchain },
      { name: "Langfuse" },
      { name: "Claude", icon: siClaude },
      { name: "Gemini", icon: siGooglegemini },
      { name: "Groq" },
      { name: "Ollama", icon: siOllama },
      { name: "Qdrant", icon: siQdrant },
      { name: "RAG" },
      { name: "Pydantic", icon: siPydantic },
      { name: "Vapi" },
      { name: "Streamlit", icon: siStreamlit },
    ],
  },
  {
    label: "Backend & systems",
    tools: [
      { name: "Python", icon: siPython },
      { name: "FastAPI", icon: siFastapi },
      { name: "Node.js", icon: siNodedotjs },
      { name: "Express.js", icon: siExpress },
      { name: "tRPC", icon: siTrpc },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "MongoDB", icon: siMongodb },
      { name: "Redis", icon: siRedis },
      { name: "Supabase", icon: siSupabase },
      { name: "Prisma", icon: siPrisma },
      { name: "Drizzle", icon: siDrizzle },
      { name: "Kafka", icon: siApachekafka },
      { name: "Socket.IO", icon: siSocketdotio },
      { name: "Docker", icon: siDocker },
      { name: "Kubernetes", icon: siKubernetes },
      { name: "OpenTelemetry", icon: siOpentelemetry },
      { name: "Prometheus", icon: siPrometheus },
      { name: "Google Cloud", icon: siGooglecloud },
      { name: "Linux", icon: siLinux },
    ],
  },
  {
    label: "Frontend & tools",
    tools: [
      { name: "TypeScript", icon: siTypescript },
      { name: "JavaScript", icon: siJavascript },
      { name: "C++", icon: siCplusplus },
      { name: "Java", icon: siOpenjdk },
      { name: "React", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "Vite", icon: siVite },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "Framer Motion", icon: siFramer },
      { name: "HTML", icon: siHtml5 },
      { name: "CSS", icon: siCss },
      { name: "Zod", icon: siZod },
      { name: "JWT", icon: siJsonwebtokens },
      { name: "Clerk", icon: siClerk },
      { name: "Cloudinary", icon: siCloudinary },
      { name: "Turborepo", icon: siTurborepo },
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "Postman", icon: siPostman },
    ],
  },
];

const Item = ({ tool }: { tool: Tool }) => (
  <li className="flex shrink-0 items-center gap-2.5 text-ink-2 transition-colors duration-300 hover:text-ink">
    {tool.icon ? (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d={tool.icon.path} />
      </svg>
    ) : (
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
    )}
    <span className="whitespace-nowrap text-base md:text-lg">{tool.name}</span>
  </li>
);

const Row = ({ label, tools, reverse }: { label: string; tools: Tool[]; reverse?: boolean }) => (
  <div className="grid items-center gap-3 border-b border-line py-5 md:grid-cols-[11rem_1fr] md:gap-6 md:py-6">
    <h3 className="eyebrow px-5 md:px-0">{label}</h3>
    <div className="group overflow-hidden motion-reduce:overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      {/* Rendered twice so the loop is seamless; the copy is hidden from assistive tech. */}
      <div
        className={cn(
          "flex w-max animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none",
          reverse && "[animation-direction:reverse]",
        )}
        // Same scroll speed for every row regardless of how many tools it holds.
        style={{ animationDuration: `${tools.length * 4}s` }}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex gap-10 pr-10 md:gap-12 md:pr-12" aria-hidden={copy === 1 || undefined}>
            {tools.map((t) => (
              <Item key={t.name} tool={t} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  </div>
);

const Stack = () => (
  <section id="stack" className="py-20 md:py-28">
    <div className="mx-auto max-w-page px-5 md:px-8">
      <SectionHead index="02" title="Stack" />
    </div>
    <div className="mx-auto max-w-page md:px-8">
      <div className="-mt-6 md:-mt-10">
        {ROWS.map((r, i) => (
          <Row key={r.label} label={r.label} tools={r.tools} reverse={i % 2 === 1} />
        ))}
      </div>
    </div>
  </section>
);

export default Stack;
