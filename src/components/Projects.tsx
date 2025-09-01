import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

// ✅ Import images from src/assets
import weatherImg from "@/assets/weatherApp.png";
import qrImg from "@/assets/ORcode.png";
import rentlyImg from "@/assets/Rently.png";
import hospitalImg from "@/assets/Hospital.png";
import techhawksImg from "@/assets/TechHawks.png";
import todoImg from "@/assets/todoList.png";

const Projects = () => {
  const projects = [
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

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="project-card group cursor-pointer">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg bg-muted flex items-center justify-center h-48">
                  {/* ✅ Show project image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        {/* ✅ Project image inside dialog */}
                        <div className="relative overflow-hidden rounded-lg bg-muted flex items-center justify-center h-64">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-64 w-full object-cover rounded-lg"
                          />
                        </div>
                        <p className="text-muted-foreground">{project.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2 pt-4">
                          <Button asChild className="w-full">
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} on GitHub`}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              View on GitHub
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
