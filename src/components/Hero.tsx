import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src="/lovable-uploads/adb50b57-99cf-450d-85e3-7cba9f8ed118.png"
              alt="Prasad Bhalerao photo"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full mx-auto object-cover profile-glow"
              tabIndex={0}
              role="img"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Hello! I am <span className="text-primary">Prasad Bhalerao</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Student | Programmer | An aspiring Web Developer
          </p>
          
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-gradient-hero hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
            aria-label="View my projects"
          >
            View My Projects
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;