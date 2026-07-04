import type { ExperienceItem } from "@/data/types";

export const experiences: ExperienceItem[] = [
  {
    id: "teleperformance",
    company: "Teleperformance",
    position: "Retention Agent",
    duration: "May 2023 - July 2023",
    location: "Guadalajara, Mexico",
    logo: import.meta.env.BASE_URL + "images/logos/logoTeleperformance.webp",
    type: "part-time",
    description:
      "Worked as a Retention Agent, developing strong communication and problem-solving skills while helping customers resolve issues and maintain service satisfaction.",
    achievements: [
      "Achieved high customer satisfaction ratings.",
      "Retained customers through clear, empathetic communication.",
      "Strengthened problem-solving and interpersonal skills.",
      "Collaborated with teammates to improve service processes.",
    ],
    technologies: [
      "CRM Systems",
      "Customer Service Tools",
      "Communication Platforms",
    ],
  },
  {
    id: "caritas-volunteer",
    company: "Caritas de Guadalajara",
    position: "Web Development Volunteer",
    duration: "Aug 2023 - May 2024",
    location: "Guadalajara, Mexico",
    logo: import.meta.env.BASE_URL + "images/logos/logoCaritas.webp",
    type: "part-time",
    description:
      "Volunteered as a Web Developer, contributing to an interactive website that helped communicate the organization's mission to diverse audiences.",
    achievements: [
      "Built interactive website features with HTML, CSS, and JavaScript.",
      "Improved user experience and accessibility across key pages.",
      "Collaborated with the team to align the site with organizational goals.",
      "Applied technical skills toward meaningful social impact.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Visual Studio", "Web Design"],
  },
  {
    id: "toshiba-intern",
    company: "Toshiba Global Commerce Solutions",
    position: "Software Development Engineer Intern",
    duration: "May 2025 - May 2026",
    location: "Guadalajara, Mexico",
    logo: import.meta.env.BASE_URL + "images/logos/logoToshiba.webp",
    type: "internship",
    description:
      "Currently contributing to innovative retail technology solutions while working with modern development practices and collaborative engineering workflows.",
    achievements: [
      "Developing scalable software solutions for retail systems.",
      "Collaborating with cross-functional teams on product delivery.",
      "Applying modern web technologies and engineering best practices.",
      "Contributing to code reviews and technical documentation.",
    ],
    technologies: ["Vue", "TypeScript", "HTML", "Figma", "SQL", "Git", "Agile"],
  },
];
