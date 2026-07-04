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
  summary: string;
  details: string;
  category: "web" | "mobile" | "desktop";
  duration: string;
  year: string;
  technologies: string[];
  github?: string;
  demo?: string;
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
