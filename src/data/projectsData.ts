import type { ProjectItem } from "@/data/types";

export const projects: ProjectItem[] = [
  {
    id: "project-placeholder-1",
    title: "Project Name",
    summary:
      "Short one-line summary of what this project does and why it matters.",
    details:
      "Add a fuller project description including the core problem, your approach, and key technical choices.",
    category: "web",
    duration: "8 weeks",
    year: "2026",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    id: "project-placeholder-2",
    title: "Project Name",
    summary:
      "Short one-line summary of what this project does and why it matters.",
    details:
      "Add your implementation details, architecture highlights, and notable engineering decisions.",
    category: "web",
    duration: "6 weeks",
    year: "2026",
    technologies: ["Vue", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    id: "project-placeholder-3",
    title: "Project Name",
    summary:
      "Short one-line summary of what this project does and why it matters.",
    details:
      "Add outcomes, constraints, and what you personally built end-to-end in this project.",
    category: "mobile",
    duration: "10 weeks",
    year: "2026",
    technologies: ["React Native", "TypeScript", "API Integration"],
    github: "#",
    demo: "#",
  },
];
