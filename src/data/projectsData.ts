import type { ProjectItem } from "@/data/types";

export const projects: ProjectItem[] = [
  {
    id: "investigators-web-app",
    title: "Investigators Web App",
    description:
      "Collaborative platform connecting researchers across Mexico to find partners and collaborate in specific research areas.",
    image: import.meta.env.BASE_URL + "images/projects/imgInvestigatorsWA.webp",
    technologies: [
      "Python",
      "Django RestFramework",
      "Django",
      "React.js",
      "Chart.js",
      "Tailwind CSS",
      "PostgreSQL",
      "JWT",
      "Axios",
      "Docker",
      "Nginx",
    ],
    category: "web",
    githubUrl: "https://github.com/amirmx2905/Investigators.git",
    duration: "3 months",
    year: "2025",
  },
  {
    id: "pokemon-battle-arena",
    title: "PokemonBattleArena",
    description:
      "Pokemon web game with advanced search, stats visualization, evolution trees, capture system and battles.",
    image: import.meta.env.BASE_URL + "images/projects/imgPokemon.webp",
    technologies: [
      "React.js",
      "PokemonAPI",
      "C++",
      "PostgreSQL",
      "CSS3",
      "HTML5",
      "JavaScript",
      "Agile",
      "Scrum",
    ],
    category: "web",
    githubUrl: "https://github.com/Cesar-Mendoza-V/PokemonBattleArena",
    duration: "6 months",
    year: "2025",
  },
  {
    id: "gmaps-api",
    title: "GmapsAPI",
    description:
      "App that uses Google services for pinging a certain location with custom markers from all around the world.",
    image: import.meta.env.BASE_URL + "images/projects/imgGoogleMaps.webp",
    technologies: ["Java", "Kotlin", "Google Console", "Geolocation API"],
    category: "mobile",
    githubUrl: "https://github.com/amirmx2905/AndroidStudioGoogleMapsAPI",
    duration: "1 month",
    year: "2024",
  },
  {
    id: "investigators-app",
    title: "Investigators Mobile App",
    description:
      "Collaborative research mobile application for investigators from all around Mexico to access document management and analytics tools.",
    image: import.meta.env.BASE_URL + "images/projects/imgInvestigators.webp",
    technologies: [
      "Java",
      "Kotlin",
      "Android Studio",
      "MySQL",
      "PHP",
      "REST API",
    ],
    category: "mobile",
    duration: "2 months",
    year: "2024",
  },
  {
    id: "notes-app",
    title: "Notes App",
    description:
      "Simple and intuitive note-taking application for creating, editing, and organizing personal notes.",
    image: import.meta.env.BASE_URL + "images/projects/imgNotes.webp",
    technologies: ["Python", "REST API", "Django", "React.js", "Tailwind CSS"],
    category: "web",
    githubUrl: "https://github.com/amirmx2905/firstDjangoReactWebApp",
    duration: "1 month",
    year: "2024",
  },
  {
    id: "playbook-app",
    title: "Playbook App",
    description:
      "Interactive digital playbook application for team strategies and game planning.",
    image: import.meta.env.BASE_URL + "images/projects/imgPlaybook.webp",
    technologies: ["Xcode", "Swift", "Material-UI"],
    category: "mobile",
    githubUrl: "https://github.com/JaimeTAR/PlayBook",
    duration: "1 month",
    year: "2023",
  },
];

export const projectCategories = [
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
];
