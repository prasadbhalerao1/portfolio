import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Users, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";
import { technologies, activities, semesterData, personalInfo, academicInfo } from "@/data/about";

const About = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and skills
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Personal Information */}
          <motion.div variants={itemVariants}>
            <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-foreground">Name:</p>
                  <p className="text-muted-foreground">{personalInfo.name}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">PRN no:</p>
                  <p className="text-muted-foreground">{personalInfo.prn}</p>
                </div>
              </div>
              
              <div>
                <p className="font-semibold text-foreground mb-2">Member of:</p>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.clubs.map((club, index) => (
                    <Badge key={club} variant="secondary" className="flex items-center gap-1">
                      <div className={`w-4 h-4 ${index === 0 ? 'bg-primary' : 'bg-accent'} rounded-sm`}></div>
                      {club}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold text-foreground">Email:</p>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-primary hover:text-primary-glow transition-colors flex items-center gap-1"
                >
                  <Mail className="h-4 w-4" />
                  {personalInfo.email}
                </a>
              </div>

              <div>
                <p className="font-semibold text-foreground">Languages:</p>
                <p className="text-muted-foreground">{personalInfo.languages.join(", ")}</p>
              </div>
            </CardContent>
          </Card>
          </motion.div>

          {/* Academic Information */}
          <motion.div variants={itemVariants}>
            <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Academic Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">10th Standard</h4>
                  <p className="text-sm text-muted-foreground">{academicInfo.tenth.school}</p>
                  <p className="text-sm text-muted-foreground">Year: {academicInfo.tenth.year}</p>
                  <p className="font-semibold text-primary">Percentage: {academicInfo.tenth.percentage}</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">12th Standard</h4>
                  <p className="text-sm text-muted-foreground">{academicInfo.twelfth.college}</p>
                  <p className="text-sm text-muted-foreground">Year: {academicInfo.twelfth.year}</p>
                  <p className="font-semibold text-primary">Percentage: {academicInfo.twelfth.percentage}</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Currently</h4>
                  <p className="text-sm text-muted-foreground">{academicInfo.current.institution}</p>
                  <p className="font-semibold text-primary">CGPA: {academicInfo.current.cgpa}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          </motion.div>
        </motion.div>

        {/* SGPA Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Semester Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {semesterData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <span className="font-medium text-foreground">{data.semester}</span>
                    <span className="text-2xl font-bold text-primary">{data.sgpa}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">9.30</div>
                  <p className="text-lg text-muted-foreground">Overall CGPA</p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Academic performance summary: Consistently maintaining excellent grades with SGPA of 9.36 in Semester 1 and 9.27 in Semester 2, resulting in an overall CGPA of 9.30.
            </div>
          </CardContent>
        </Card>
        </motion.div>

        {/* Co-curricular Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="mb-16">
          <CardHeader>
            <CardTitle>Co-curricular & Extra-curricular Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {activities.map((activity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{activity}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Card>
          <CardHeader>
            <CardTitle>Technologies & Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="tech-tile flex flex-col items-center p-4 bg-muted rounded-lg cursor-pointer"
                  tabIndex={0}
                  role="button"
                  aria-label={`Technology: ${tech.name}`}
                >
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`}
                    className="h-8 w-8 mb-2 object-contain"
                    loading="lazy"
                  />
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;