export type EntryType = "hackathon" | "organized" | "learning";

export interface Entry {
  slug: string;
  title: string;
  org: string;
  /** ISO date used for sorting and structured data. */
  date: string;
  /** Human label, e.g. "22–23 Aug 2026". */
  when: string;
  type: EntryType;
  /** Short outcome tag. Shown small; never used for grouping. */
  result?: string;
  summary: string;
  points?: string[];
  /** Slug of an optimized image in /certs. */
  cert?: string;
  /** Path of the original certificate file, if public. */
  original?: string;
  credentialId?: string;
  verifyUrl?: string;
  /** Event photos in /events. */
  photos?: string[];
  links?: { label: string; url: string }[];
}

export const TYPE_LABELS: Record<EntryType, string> = {
  hackathon: "Hackathons",
  organized: "Organised",
  learning: "Courses & internships",
};

const gh = (repo: string) => `https://github.com/prasadbhalerao1/${repo}`;

export const entries: Entry[] = [
  // Organised
  {
    slug: "traceroute-2026",
    title: "TraceRoute",
    org: "CSBS Dept., JSPM's RSCOE",
    date: "2026-10-10",
    when: "10 Oct 2026",
    type: "organized",
    result: "Organiser",
    summary: "Computer-networks treasure hunt across campus. I led the event and built the platform every team played on.",
    photos: ["/events/traceroute-1.jpg", "/events/traceroute-2.jpg"],
    points: [
      "QR check-ins, networking MCQs and riddles across 5 locations, then a rapid-fire final",
      "Unique route per team from a pool of 8; questions drawn from a 60-question bank",
      "Admin dashboard with live leaderboard, per-level timings and automatic credential emails",
    ],
    links: [
      { label: "Source", url: gh("treasureHunt") },
      { label: "Live", url: "https://treasurehunt-gotham-ai.vercel.app" },
    ],
  },
  {
    slug: "gamecraft-2026",
    title: "GameCraft 2026",
    org: "CSBS Dept., JSPM's RSCOE",
    date: "2026-08-14",
    when: "14 Aug 2026",
    type: "organized",
    result: "Organiser",
    summary: "Educational game design hackathon. Ran rules, judging, timeline and logistics from scratch.",
    photos: ["/events/gamecraft-2026-1.jpg", "/events/gamecraft-2026-2.jpg"],
    cert: "gamecraft-2026-organizer",
    original: "/certs/originals/gamecraft-2026-organizer.pdf",
  },
  {
    slug: "innovision-2026",
    title: "Innovision Treasure Hunt",
    org: "JSPM's RSCOE",
    date: "2026-02-06",
    when: "Feb 2026",
    type: "organized",
    result: "Organiser",
    summary: "Phygital treasure hunt. Teams scanned QR codes to unlock randomised paths; ran with zero errors on the day.",
    photos: ["/events/innovision-2026-1.jpg", "/events/innovision-2026-2.jpg", "/events/innovision-2026-3.jpg", "/events/innovision-2026-4.jpg"],
    links: [{ label: "Source", url: gh("treasureHunt") }],
  },
  {
    slug: "gotham-ai-2025",
    title: "Gotham AI · First flagship event",
    org: "Gotham AI club",
    date: "2025-10-13",
    when: "Oct 2025",
    type: "organized",
    result: "Organising team",
    summary: "Gotham AI club's first flagship event, with talks by Bhushan Akerkar and Deepali Bhavale.",
    photos: ["/events/gotham-ai-2025-1.jpg", "/events/gotham-ai-2025-2.jpg", "/events/gotham-ai-2025-3.jpg"],
  },

  // Hackathons
  {
    slug: "innovate-4-impact-2026",
    title: "INNOVATE 4 IMPACT: AI4SDG Global Hackathon",
    org: "Bharati Vidyapeeth College of Engineering, Pune · IEEE WIE",
    date: "2026-09-12",
    when: "12 Sep 2026",
    type: "hackathon",
    summary: "AI solutions mapped to the UN Sustainable Development Goals.",
    cert: "innovate-4-impact-ai4sdg-2026",
    original: "/certs/originals/innovate-4-impact-ai4sdg-2026.pdf",
  },
  {
    slug: "kurukshetra-2026",
    title: "Kurukshetra 2.0 HackFest",
    org: "MIT Arts, Commerce & Science College, Alandi",
    date: "2026-09-11",
    when: "11–12 Sep 2026",
    type: "hackathon",
    summary: "National-level 24-hour hackathon run by the college's Institution's Innovation Council.",
    photos: ["/events/kurukshetra-2026-1.jpg", "/events/kurukshetra-2026-2.jpg"],
    cert: "kurukshetra-hackfest-2026",
    original: "/certs/originals/kurukshetra-hackfest-2026.pdf",
  },
  {
    slug: "sih-2026",
    title: "Smart India Hackathon 2026",
    org: "JSPM's RSCOE internal round",
    date: "2026-09-07",
    when: "Sep 2026",
    type: "hackathon",
    result: "Selected",
    summary: "Team of six; prototype cleared the institute round and moved to the next stage.",
    photos: ["/events/sih-2026-1.jpg", "/events/sih-2026-2.jpg"],
  },
  {
    slug: "hackers-occupied-pune-2026",
    title: "Hackers Occupied Pune",
    org: "Genesis · at VIT Pune",
    date: "2026-08-22",
    when: "22–23 Aug 2026",
    type: "hackathon",
    result: "Winner",
    summary: "Top 25 of 250+ teams. 24-hour build of a LangGraph supply-chain disruption agent.",
    photos: ["/events/hackers-occupied-pune-2026-1.jpg", "/events/hackers-occupied-pune-2026-2.jpg", "/events/hackers-occupied-pune-2026-3.jpg", "/events/hackers-occupied-pune-2026-4.jpg", "/events/hackers-occupied-pune-2026-5.jpg"],
    points: [
      "Won the Content Creation track and the Open Innovation prize",
      "5th in the online round, Open Innovation problem statement",
      "Event content we shot and edited crossed 40k views",
    ],
    cert: "hackers-occupied-pune-2026",
    original: "/certs/originals/hackers-occupied-pune-2026.png",
    links: [
      { label: "Source", url: gh("thebigohs") },
      { label: "Live", url: "https://thebigohs-erp-sigma.vercel.app" },
    ],
  },
  {
    slug: "logic-loop-2026",
    title: "Logic Loop Hackathon",
    org: "HackBriven · at Data Axle, Pune",
    date: "2026-08-01",
    when: "1 Aug 2026",
    type: "hackathon",
    result: "Finalist",
    summary: "8-hour build of an AI hiring platform: verified candidate profiles and explainable ranking.",
    photos: ["/events/logic-loop-2026-1.jpg", "/events/logic-loop-2026-2.jpg", "/events/logic-loop-2026-3.jpg", "/events/logic-loop-2026-4.jpg"],
    points: [
      "Talent score from commit history and code quality, not self-reported skills",
      "Natural-language candidate search and AI-run technical interviews",
    ],
    cert: "logic-loop-hackathon-2026",
    original: "/certs/originals/logic-loop-hackathon-2026.png",
    credentialId: "LOGIC-DDF32A",
  },
  {
    slug: "docker-cloud-native-2026",
    title: "Cloud Native Hackathon",
    org: "Docker Community Pune · CNCF Pune",
    date: "2026-07-25",
    when: "25–26 Jul 2026",
    type: "hackathon",
    summary: "Built Overwatch: an SRE agent that correlates logs, metrics and traces and explains what broke.",
    photos: ["/events/docker-cloud-native-2026-1.jpg", "/events/docker-cloud-native-2026-2.jpg", "/events/docker-cloud-native-2026-3.jpg", "/events/docker-cloud-native-2026-4.jpg"],
    points: [
      "Suggests restart or rollback, then waits for human approval before acting",
      "Prometheus, Jaeger and OpenTelemetry on Docker, learned on the day",
    ],
  },
  {
    slug: "google-solution-challenge-2026",
    title: "Google Solution Challenge 2026: Build with AI",
    org: "Google for Developers · Hack2skill",
    date: "2026-07-22",
    when: "22 Jul 2026",
    type: "hackathon",
    summary: "Submitted a working prototype to Google's global student challenge.",
    cert: "google-solution-challenge-2026",
    original: "/certs/originals/google-solution-challenge-2026.pdf",
    credentialId: "2026H2S07SCBWAI-P503511",
  },
  {
    slug: "bharatiya-antariksh-hackathon-2026",
    title: "Bharatiya Antariksh Hackathon 2026",
    org: "ISRO · Hack2skill",
    date: "2026-06-30",
    when: "Jun 2026",
    type: "hackathon",
    summary: "ISRO's national space-tech hackathon; 15,000+ teams submitted solutions.",
    cert: "bharatiya-antariksh-hackathon-2026",
    original: "/certs/originals/bharatiya-antariksh-hackathon-2026.pdf",
    credentialId: "2026H2S06BAH-P02877",
  },
  {
    slug: "vit-ai-symposium-2026",
    title: "Intelligence Beyond Code 2K26",
    org: "Vishwakarma Institute of Technology, Pune · Versanix",
    date: "2026-03-16",
    when: "16–17 Mar 2026",
    type: "hackathon",
    summary: "National-level AI symposium and hackathon; 600+ teams.",
    photos: ["/events/vit-ai-symposium-2026-1.jpg"],
    cert: "vit-ai-symposium-2026",
    original: "/certs/originals/vit-ai-symposium-2026.png",
  },
  {
    slug: "techneeti",
    title: "TechNeeti 2025",
    org: "Coding Club, JSPM's RSCOE",
    date: "2025-08-18",
    when: "18–19 Aug 2025",
    type: "hackathon",
    summary: "State-level 24-hour hackathon and coding contest.",
    cert: "techneeti-hackathon",
    original: "/certs/originals/techneeti-hackathon.png",
  },

  // Courses & internships
  {
    slug: "chaicode-web-dev-cohort-2026",
    title: "Web Dev Cohort 2026",
    org: "ChaiCode · Hitesh Choudhary & Piyush Garg",
    date: "2026-07-05",
    when: "2026",
    type: "learning",
    summary: "Full-stack cohort. Built a Turborepo + tRPC monorepo and a mini v0 (AI UI generator).",
    cert: "chaicode-web-dev-cohort-2026",
    original: "/certs/originals/chaicode-web-dev-cohort-2026.pdf",
    credentialId: "11592771-250927",
    verifyUrl: "https://courses.chaicode.com/learn/certificate/11592771-250927",
  },
  {
    slug: "codealpha-internship-2026",
    title: "Full Stack Development Internship",
    org: "CodeAlpha",
    date: "2026-06-30",
    when: "1–30 Jun 2026",
    type: "learning",
    summary: "Shipped two live apps: an e-commerce store and a social app, both with real-time features.",
    cert: "codealpha-full-stack-internship-2026",
    links: [
      { label: "Nexus", url: "https://e-commerse-nexus.vercel.app" },
      { label: "RUNTIME", url: "https://runtime-dev.vercel.app" },
    ],
  },
  {
    slug: "aicte-eduskills-mern-2026",
    title: "MERN Full Stack Virtual Internship",
    org: "AICTE · EduSkills · National Internship Portal",
    date: "2026-06-15",
    when: "Apr – Jun 2026",
    type: "learning",
    result: "8 weeks",
    summary: "8-week MERN internship under the Ministry of Education's internship portal.",
    cert: "aicte-eduskills-mern-internship-2026",
    original: "/certs/originals/aicte-eduskills-mern-internship-2026.pdf",
    credentialId: "492d9ad802aba881ec90",
  },
  {
    slug: "gssoc-2026",
    title: "GirlScript Summer of Code 2026",
    org: "GirlScript Foundation",
    date: "2026-05-07",
    when: "May 2026",
    type: "learning",
    result: "Contributor",
    summary: "Selected as an open-source contributor.",
    cert: "gssoc-2026-contributor",
  },
  {
    slug: "udemy-web-development",
    title: "Complete Web Development",
    org: "Udemy · Hitesh Choudhary",
    date: "2026-03-31",
    when: "Mar 2026",
    type: "learning",
    result: "100 hours",
    summary: "Full web development course.",
    cert: "udemy-complete-web-development",
    original: "/certs/originals/udemy-complete-web-development.jpg",
  },
  {
    slug: "eduskills-python-full-stack",
    title: "Python Full Stack",
    org: "EduSkills Academy",
    date: "2025-12-14",
    when: "Dec 2025",
    type: "learning",
    summary: "Python and Django web development program.",
    cert: "eduskills-python-full-stack",
  },
  {
    slug: "red-hat-rh124",
    title: "Red Hat System Administration I (RH124)",
    org: "Red Hat Academy",
    date: "2025-10-08",
    when: "Oct 2025",
    type: "learning",
    result: "40 hours",
    summary: "Linux system administration fundamentals.",
    cert: "red-hat-rh124",
    original: "/certs/originals/red-hat-rh124.png",
  },
  {
    slug: "scalar-llama-architecture",
    title: "Architecture behind the LLaMA model",
    org: "Scaler",
    date: "2025-09-23",
    when: "Sep 2025",
    type: "learning",
    summary: "Workshop on the LLaMA transformer architecture.",
    cert: "scalar-llama-architecture",
    original: "/certs/originals/scalar-llama-architecture.png",
  },
  {
    slug: "simplilearn-prompt-engineering",
    title: "Prompt Engineering with GitHub Copilot",
    org: "Simplilearn SkillUp",
    date: "2025-07-13",
    when: "Jul 2025",
    type: "learning",
    credentialId: "8618341",
    summary: "Prompting techniques for AI-assisted coding.",
    cert: "simplilearn-prompt-engineering-copilot",
    original: "/certs/originals/simplilearn-prompt-engineering-copilot.png",
  },
  {
    slug: "scalar-react-bootcamp",
    title: "React.js Bootcamp",
    org: "Scaler",
    date: "2025-10-04",
    when: "Oct 2025",
    type: "learning",
    summary: "React fundamentals bootcamp.",
    cert: "scalar-react-bootcamp",
    original: "/certs/originals/scalar-react-bootcamp.png",
  },
  {
    slug: "freedom-with-ai",
    title: "Freedom with AI Masterclass",
    org: "Freedom with AI",
    date: "2026-02-10",
    when: "Feb 2026",
    type: "learning",
    summary: "Applied AI tools for everyday work.",
    cert: "freedom-with-ai-masterclass",
    original: "/certs/originals/freedom-with-ai-masterclass.png",
  },
];

export const sortedEntries = [...entries].sort((a, b) => b.date.localeCompare(a.date));

export const certImage = (slug: string) => `/certs/${slug}.jpg`;
export const certThumb = (slug: string) => `/certs/thumb/${slug}.jpg`;

/** True for outcomes worth highlighting (wins, finals, selections). */
export const isHighlight = (result?: string) => !!result && /^(winner|finalist|selected)/i.test(result);

/** Certificate first, then event photos; thumb is used in lists, src in the lightbox. */
export const entryMedia = (e: Entry): { src: string; thumb: string; alt: string }[] => [
  ...(e.cert
    ? [{ src: certImage(e.cert), thumb: certThumb(e.cert), alt: `Prasad Bhalerao's certificate: ${e.title}, ${e.org}` }]
    : []),
  ...(e.photos ?? []).map((src, i) => ({ src, thumb: src, alt: `${e.title}, photo ${i + 1}` })),
];
