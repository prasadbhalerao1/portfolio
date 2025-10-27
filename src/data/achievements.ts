export interface Achievement {
  id: number;
  title: string;
  image: string;
  date: string;
  description: string;
  issuer?: string;
  credentialId?: string;
}

// Add new achievements at the end of the array
// Always increment the ID (current max: 6)
export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Red Hat Certified Student",
    image: "/certificates/Redhat.png.png",
    date: "Aug 2025",
    description: "Completed RH124 Linux System Administration.",
    issuer: "Red Hat",
  },
  {
    id: 2,
    title: "React js Bootcamp",
    image: "/certificates/Scalar-react.png",
    date: "",
    description: "React js Bootcamp by Scalar",
    issuer: "Scalar",
  },
  {
    id: 3,
    title: "Prompt Engineering with Github Copilot",
    image: "/certificates/PropmtEngineeringGithubCopilot.png",
    date: "",
    description: "Prompt Engineering with Github Copilot",
    issuer: "Simplelearn",
  },
  {
    id: 4,
    title: "Understanding Architecture behind LLAMA model",
    image: "/certificates/Scalar-LlamaArchitecture.png",
    date: "",
    description: "Understanding Architecture behind LLAMA model",
    issuer: "Scalar",
  },
  {
    id: 5,
    title: "Freedom with AI masterclass",
    image: "/certificates/FreedomWithAI.png",
    date: "",
    description: "understanding various AI tools to make out professional life easier",
    issuer: "Freedom with AI",
  },
  {
    id: 6,
    title: "State level 24/7 hackathon",
    image: "/certificates/Techneeti.png.png",
    date: "",
    description: "State level 24/7 hackathon and coding competion arranged by Coding Club RSCOE",
    issuer: "Coding Club RSCOE",
  },
  // Add more achievements here
];
