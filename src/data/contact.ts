import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  phone?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/prasadbhalerao1",
    label: "View my GitHub profile"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/prasadbhalerao",
    label: "Connect with me on LinkedIn"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:prasadbhalerao279@gmail.com",
    label: "Send me an email"
  },
];

export const contactInfo: ContactInfo = {
  email: "prasadbhalerao279@gmail.com",
  location: "Pune, Maharashtra, India",
};
