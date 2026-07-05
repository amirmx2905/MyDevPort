export type ExperienceItem = {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  logo: string;
  type: "full-time" | "part-time" | "internship" | "contract";
  description: string;
  achievements: string[];
  technologies: string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  category: "web" | "mobile" | "desktop";
  githubUrl?: string;
  features: string[];
  challenges?: string[];
  duration: string;
  year: string;
};

export type CertificationItem = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: "completed" | "in-progress";
  skills: string[];
  credentialUrl?: string;
};
