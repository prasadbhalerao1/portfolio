// Import images from src/assets
import weatherImg from "@/assets/weatherApp.png";
import qrImg from "@/assets/ORcode.png";
import rentlyImg from "@/assets/Rently.png";
import hospitalImg from "@/assets/Hospital.png";
import techhawksImg from "@/assets/TechHawks.png";
import todoImg from "@/assets/todoList.png";

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
    description: "A responsive weather application that provides real-time weather information with a clean and intuitive interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/prasadbhalerao1/weatherApp",
    image: weatherImg
  },
  {
    id: 2,
    title: "QR Code Generator",
    description: "A simple yet powerful QR code generator that allows users to create QR codes for various types of content.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/prasadbhalerao1/QRCodeGenerator",
    image: qrImg
  },
  {
    id: 3,
    title: "Rently - Car Renting Website",
    description: "A frontend for a car rental platform. First step before adding user authentication, car browsing, and booking functionality.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/prasadbhalerao1/rently",
    image: rentlyImg
  },
  {
    id: 4,
    title: "Hospital Website",
    description: "A frontend comprehensive hospital management website with appointment booking, doctor profiles",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/prasadbhalerao1/hospitalWeb",
    image: hospitalImg
  },
  {
    id: 5,
    title: "TechHawks Club Website",
    description: "Official website for TechHawks Club featuring events, member profiles, and club activities.",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    githubLink: "https://github.com/prasadbhalerao1/techawks",
    image: techhawksImg
  },
  {
    id: 6,
    title: "Todo List App",
    description: "A simple todo application made using javascript to store multiple tasks",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/prasadbhalerao1/todolist",
    image: todoImg
  }
];
