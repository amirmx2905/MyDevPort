/**
 * =====================================================
 * EXPERIENCE DATA - Professional Work History
 * =====================================================
 *
 * Centralized data structure containing all professional experience information.
 * Used by timeline and modal components to display work history.
 *
 * Data Structure:
 * - Chronologically ordered (oldest to newest for timeline display)
 * - Complete experience information including achievements and technologies
 * - Type-safe TypeScript interfaces for consistency
 * - Optimized for both timeline cards and detailed modal views
 *
 * Usage:
 * - Import and use in ExperienceTimeline component
 * - Each experience opens in ExperienceModal for detailed view
 * - Logo images stored in /public/images/logos/
 */

// ===============================
// TYPE DEFINITIONS
// ===============================

export interface Experience {
  id: string; // Unique identifier for each experience
  company: string; // Company/organization name
  position: string; // Job title/role
  duration: string; // Time period (e.g., "May 2023 - July 2023")
  location: string; // Work location
  logo: string; // Path to company logo image
  description: string; // Detailed description of role and responsibilities
  achievements: string[]; // Key accomplishments and contributions
  technologies: string[]; // Technologies, tools, and skills used
  type: "full-time" | "part-time" | "internship" | "contract"; // Employment type
}

// ===============================
// EXPERIENCE DATA ARRAY
// ===============================
// Ordered chronologically: oldest to newest (top to bottom in timeline)

export const experienceData: Experience[] = [
  // ===============================
  // TELEPERFORMANCE (2023)
  // ===============================
  {
    id: "teleperformance",
    company: "Teleperformance",
    position: "Retention Agent",
    duration: "May 2023 - July 2023",
    location: "Guadalajara, Mexico",
    logo: import.meta.env.BASE_URL + "images/logos/logoTeleperformance.webp",
    description:
      "Worked as a Retention Agent at Teleperformance, developing strong communication and problem-solving skills while helping customers resolve issues and maintain service satisfaction.",
    achievements: [
      "Achieved high customer satisfaction ratings",
      "Successfully retained customers through effective communication",
      "Developed strong problem-solving and interpersonal skills",
      "Collaborated with team members to improve service processes",
    ],
    technologies: [
      "CRM Systems",
      "Customer Service Tools",
      "Communication Platforms",
    ],
    type: "part-time",
  },

  // ===============================
  // CÁRITAS VOLUNTEER (2023-2024)
  // ===============================
  {
    id: "caritas-volunteer",
    company: "Cáritas de Guadalajara",
    position: "Web Development Volunteer",
    duration: "Aug 2023 - May 2024",
    location: "Guadalajara, Mexico",
    logo: import.meta.env.BASE_URL + "images/logos/logoCaritas.webp",
    description:
      "Volunteered as a Web Developer at Cáritas de Guadalajara, contributing to the development of their interactive website to better communicate their mission to diverse audiences.",
    achievements: [
      "Developed interactive website features using HTML, CSS, and JavaScript",
      "Improved user experience and website accessibility",
      "Collaborated with team to align website with organizational mission",
      "Applied technical skills for meaningful social impact",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Visual Studio", "Web Design"],
    type: "part-time",
  },

  // ===============================
  // TOSHIBA INTERNSHIP (2025-Present)
  // ===============================
  {
    id: "toshiba-intern",
    company: "Toshiba Global Commerce Solutions",
    position: "Software Development Engineer Intern",
    duration: "May 2025 - Present",
    location: "Guadalajara, Mexico",
    logo: import.meta.env.BASE_URL + "images/logos/logoToshiba.webp",
    description:
      "Currently working as a Software Development Engineer Intern at Toshiba Global Commerce Solutions, contributing to innovative retail technology solutions.",
    achievements: [
      "Developing scalable software solutions for retail systems",
      "Collaborating with cross-functional teams on product development",
      "Implementing modern web technologies and best practices",
      "Contributing to code reviews and technical documentation",
    ],
    technologies: ["Vue", "JavaScript", "HTML", "Figma", "SQL", "Git", "Agile"],
    type: "internship",
  },
];
