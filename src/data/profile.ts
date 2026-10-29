export const SITE_URL = "https://prasadbhalerao.vercel.app";

export const profile = {
  name: "Prasad Bhalerao",
  role: "AI Engineer",
  location: "Pune, India",
  email: "prasadbhalerao279@gmail.com",
  intro:
    "Third-year CSBS student at JSPM's RSCOE. I build agentic AI systems with LangGraph and LangChain, and ship the full-stack apps around them.",
};

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
}

export const socials: SocialLink[] = [
  { name: "GitHub", handle: "prasadbhalerao1", url: "https://github.com/prasadbhalerao1" },
  { name: "LinkedIn", handle: "prasadbhalerao", url: "https://www.linkedin.com/in/prasadbhalerao" },
  { name: "Email", handle: "prasadbhalerao279@gmail.com", url: "mailto:prasadbhalerao279@gmail.com" },
];

export const education = [
  {
    place: "JSPM's Rajarshi Shahu College of Engineering, Pune",
    detail: "B.Tech, Computer Science & Business Systems",
    period: "2024 – 2028",
    score: "CGPA 9.18",
  },
  {
    place: "Fattechand Jr. College, Chinchwad",
    detail: "HSC (12th)",
    period: "2024",
    score: "84.50%",
  },
  {
    place: "MSS High School, Chinchwad",
    detail: "SSC (10th)",
    period: "2022",
    score: "94.80%",
  },
];

export const roles = [
  { title: "Vice President", org: "Gotham AI club, RSCOE" },
  { title: "Event Management Lead", org: "TechHawks, RSCOE" },
  { title: "Open-source contributor", org: "GirlScript Summer of Code 2026" },
  { title: "Member", org: "Competitive Coding Club, RSCOE" },
];
