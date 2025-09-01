import cppLogo from "@/assets/cpp-logo.svg";
import htmlLogo from "@/assets/html5-logo.svg";
import cssLogo from "@/assets/css3-logo.svg";
import jsLogo from "@/assets/javascript-logo.svg";
import nodeLogo from "@/assets/nodejs-logo.svg";
import expressLogo from "@/assets/express-logo.svg";
import mongoLogo from "@/assets/mongodb-logo.svg";
import tailwindLogo from "@/assets/tailwindcss-logo.svg";
import gitLogo from "@/assets/git-logo.svg";
import postmanLogo from "@/assets/postman-logo.svg";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Users, BookOpen, Award } from "lucide-react";

const About = () => {
  const technologies = [
  { name: "C/C++", logo: cppLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "Express.js", logo: expressLogo },
  { name: "MongoDB", logo: mongoLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "Git/GitHub", logo: gitLogo },
  { name: "Postman", logo: postmanLogo },
];

  const activities = [
    "Participated in coding contests like Techneeti and LeetCode",
    "Attended workshops/webinars (e.g., webinar on hackathons by takeuforward)",
    "Member of Competitive Coding Club and TechHawks Club",
  ];

  const semesterData = [
    { semester: "Semester 1", sgpa: 9.36 },
    { semester: "Semester 2", sgpa: 9.27 },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Personal Information */}
          <Card className="animate-fade-in">
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
                  <p className="text-muted-foreground">Prasad Bhalerao</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">PRN no:</p>
                  <p className="text-muted-foreground">RBT24CB026</p>
                </div>
              </div>
              
              <div>
                <p className="font-semibold text-foreground mb-2">Member of:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-primary rounded-sm"></div>
                    Competitive Coding Club
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-accent rounded-sm"></div>
                    TechHawks Club
                  </Badge>
                </div>
              </div>

              <div>
                <p className="font-semibold text-foreground">Email:</p>
                <a 
                  href="mailto:prasadbhalerao279@gmail.com"
                  className="text-primary hover:text-primary-glow transition-colors flex items-center gap-1"
                >
                  <Mail className="h-4 w-4" />
                  prasadbhalerao279@gmail.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-foreground">Languages:</p>
                <p className="text-muted-foreground">English, Marathi, Hindi</p>
              </div>
            </CardContent>
          </Card>

          {/* Academic Information */}
          <Card className="animate-fade-in">
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
                  <p className="text-sm text-muted-foreground">MSS High School, Chinchwad</p>
                  <p className="text-sm text-muted-foreground">Year: 2022</p>
                  <p className="font-semibold text-primary">Percentage: 94.80%</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">12th Standard</h4>
                  <p className="text-sm text-muted-foreground">Fattechand Jr. College, Chinchwad</p>
                  <p className="text-sm text-muted-foreground">Year: 2024</p>
                  <p className="font-semibold text-primary">Percentage: 84.50%</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Currently</h4>
                  <p className="text-sm text-muted-foreground">JSPM's RSCOE - Second Year</p>
                  <p className="font-semibold text-primary">CGPA: 9.30</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SGPA Chart */}
        <Card className="mb-16 animate-fade-in">
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

        {/* Co-curricular Activities */}
        <Card className="mb-16 animate-fade-in">
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

        {/* Technologies */}
        <Card className="animate-fade-in">
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
      </div>
    </section>
  );
};

export default About;