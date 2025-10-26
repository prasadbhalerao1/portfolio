export interface Achievement {
  id: number;
  title: string;
  image: string;
  date: string;
  description: string;
  issuer?: string;
  credentialId?: string;
}

// Add new achievements at the end of the array
// Always increment the ID (current max: 6)
export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Red Hat Certified Student",
    image: "/certificates/redHat.pdf",
    date: "Aug 2025",
    description: "Completed RH124 Linux System Administration.",
    issuer: "Red Hat",
  },
  {
    id: 2,
    title: "Certificate Title Here",
    image: "/certificates/cert-2.png",
    date: "Month Year",
    description: "Brief description of the achievement or certification.",
    issuer: "Issuing Organization",
    credentialId: "CREDENTIAL-ID-HERE", // Optional - remove if not needed
  },
  {
    id: 3,
    title: "Certificate Title Here",
    image: "/certificates/cert-3.png",
    date: "Month Year",
    description: "Brief description of the achievement or certification.",
    issuer: "Issuing Organization",
    credentialId: "CREDENTIAL-ID-HERE", // Optional - remove if not needed
  },
  {
    id: 4,
    title: "Certificate Title Here",
    image: "/certificates/cert-4.png",
    date: "Month Year",
    description: "Brief description of the achievement or certification.",
    issuer: "Issuing Organization",
    credentialId: "CREDENTIAL-ID-HERE", // Optional - remove if not needed
  },
  {
    id: 5,
    title: "Certificate Title Here",
    image: "/certificates/cert-5.png",
    date: "Month Year",
    description: "Brief description of the achievement or certification.",
    issuer: "Issuing Organization",
    credentialId: "CREDENTIAL-ID-HERE", // Optional - remove if not needed
  },
  {
    id: 6,
    title: "Certificate Title Here",
    image: "/certificates/cert-6.png",
    date: "Month Year",
    description: "Brief description of the achievement or certification.",
    issuer: "Issuing Organization",
    credentialId: "CREDENTIAL-ID-HERE", // Optional - remove if not needed
  },
  // Add more achievements here
];
