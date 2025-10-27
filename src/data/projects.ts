export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveDemo?: string;
  image: string;
}

// Add new projects at the end of the array
// Always increment the ID (current max: 6)
export const projects: Project[] = [
  {
    id: 1,
    title: "Weather App",
    description:
      "A responsive weather application that provides real-time weather information with a clean and intuitive interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/prasadbhalerao1/weatherApp",
    liveDemo: "#",
    image: "/projects/weatherApp.png",
  },
  {
    id: 2,
    title: "QR Code Generator",
    description:
      "A simple yet powerful QR code generator that allows users to create QR codes for various types of content.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/prasadbhalerao1/QRCodeGenerator",
    liveDemo: "#",
    image: "/projects/ORcode.png",
  },
  {
    id: 3,
    title: "Rently - Car Renting Website",
    description:
      "A full-stack car rental platform with user authentication, car browsing, and booking functionality.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/prasadbhalerao1/rently",
    liveDemo: "#",
    image: "/projects/Rently.png",
  },
  {
    id: 4,
    title: "Hospital Website",
    description:
      "A comprehensive hospital management website with appointment booking, doctor profiles, and patient portal.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/prasadbhalerao1/hospitalWeb",
    liveDemo: "#",
    image: "/projects/Hospital.png",
  },
  {
    id: 5,
    title: "Waypoint : AI driven mental Health Support platform",
    description:
      "A full stack psychological and mental health support platform for students struggling with mental health problems and the stigma surrounding it.",
    techStack: ["React.js + Tailwind CSS", "Express.js", "MongoDB", "Gemini API"],
    githubLink: "https://github.com/prasadbhalerao1/waypoint2",
    liveDemo: "https://waypoint-demo-two.vercel.app/",
    image: "/projects/waypoint.png",
  },
  {
    id: 6,
    title: "Todo List App",
    description:
      "A feature-rich todo application with task management, categories, and local storage functionality.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/prasadbhalerao1/todoApp",
    liveDemo: "#",
    image: "/projects/todoList.png",
  },
];
