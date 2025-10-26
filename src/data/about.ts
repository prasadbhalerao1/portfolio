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

export interface Technology {
  name: string;
  logo: string;
}

export interface SemesterData {
  semester: string;
  sgpa: number;
}

export interface PersonalInfo {
  name: string;
  prn: string;
  email: string;
  languages: string[];
  clubs: string[];
}

export interface AcademicInfo {
  tenth: {
    school: string;
    year: string;
    percentage: string;
  };
  twelfth: {
    college: string;
    year: string;
    percentage: string;
  };
  current: {
    institution: string;
    year: string;
    cgpa: string;
  };
}

// Add new technologies at the end of the array
// Import the logo image first, then add it here
export const technologies: Technology[] = [
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

export const activities: string[] = [
  "Participated in coding contests like Techneeti and LeetCode",
  "Attended workshops/webinars (e.g., webinar on hackathons by takeuforward)",
  "Member of Competitive Coding Club and TechHawks Club",
];

export const semesterData: SemesterData[] = [
  { semester: "Semester 1", sgpa: 9.36 },
  { semester: "Semester 2", sgpa: 9.27 },
];

export const personalInfo: PersonalInfo = {
  name: "Prasad Bhalerao",
  prn: "RBT24CB026",
  email: "prasadbhalerao279@gmail.com",
  languages: ["English", "Marathi", "Hindi"],
  clubs: ["Competitive Coding Club", "TechHawks Club"],
};

export const academicInfo: AcademicInfo = {
  tenth: {
    school: "MSS High School, Chinchwad",
    year: "2022",
    percentage: "94.80%",
  },
  twelfth: {
    college: "Fattechand Jr. College, Chinchwad",
    year: "2024",
    percentage: "84.50%",
  },
  current: {
    institution: "JSPM's RSCOE - Second Year",
    year: "Current",
    cgpa: "9.30",
  },
};
