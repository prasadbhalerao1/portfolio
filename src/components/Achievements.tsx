import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Achievements = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="achievements" className="py-20 bg-background">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <div className="flex items-center justify-center mb-4">
            <Award className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my professional certifications and accomplishments
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <Button
            onClick={() => navigate("/achievements")}
            size="lg"
            className="bg-gradient-hero hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
          >
            <Award className="mr-2 h-5 w-5" />
            View All Achievements
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Achievements;
