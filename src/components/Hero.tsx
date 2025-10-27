import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hello! I am Prasad Bhalerao";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-subtle pt-16 overflow-hidden">
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <ParticlesBackground />
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" style={{ zIndex: 1 }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
          >
            <img
              src="/photo/Photo.png"
              alt="Prasad Bhalerao photo"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full mx-auto object-cover profile-glow"
              tabIndex={0}
              role="img"
            />
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground min-h-[1.2em]">
            {displayText.split("Prasad Bhalerao")[0]}
            {displayText.includes("Prasad Bhalerao") && (
              <span className="name-shine bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Prasad Bhalerao
              </span>
            )}
            {!isTypingComplete && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-primary"
              >
                |
              </motion.span>
            )}
          </h1>
          
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Student | Programmer | An aspiring Web Developer
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-hero hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                aria-label="View my projects"
              >
                View My Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;