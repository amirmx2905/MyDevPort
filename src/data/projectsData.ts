import type { ProjectItem } from "@/data/types";

export const projects: ProjectItem[] = [
  {
    id: "investigators-web-app",
    title: "Investigators Web App",
    description:
      "Collaborative platform connecting researchers across Mexico to find partners and collaborate in specific research areas.",
    fullDescription:
      "A comprehensive web platform designed to connect researchers throughout Mexico, enabling them to discover potential collaborators in their field of expertise. The application features a robust authentication system, interactive dashboard with research metrics, and complete CRUD operations for managing researchers, projects, and collaborations. Built with role-based access control supporting students, investigators, and administrators.",
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
    features: [
      "Secure authentication system with JWT token management",
      "Role-based access control (Student, Investigator, Administrator)",
      "Interactive dashboard with research metrics and analytics using Chart.js",
      "Complete CRUD operations for all database entities",
      "Advanced search and filtering for researcher discovery",
      "Profile management for researchers with expertise areas",
      "Collaboration request and approval system",
      "Admin panel for platform management and user oversight",
      "Responsive design with Tailwind CSS for all devices",
      "RESTful API architecture for seamless frontend-backend communication",
    ],
    challenges: [
      "Implementing secure role-based authentication with multiple user types",
      "Designing efficient database schema for complex researcher relationships",
      "Creating intuitive data visualization for research metrics and collaboration networks",
      "Building scalable CRUD operations that handle large datasets efficiently",
      "Ensuring data security and privacy for sensitive research information",
    ],
    duration: "3 months",
    year: "2025",
  },
  {
    id: "pokemon-battle-arena",
    title: "PokemonBattleArena",
    description:
      "Pokemon web game with advanced search, stats visualization, evolution trees, capture system and battles.",
    fullDescription:
      "A modern web application game that allows users to explore the Pokémon universe. Features include Pokémon database with the first generation with advanced search and filters, interactive stats visualization, an evolution tree with branching paths, and a favorites system using local storage.",
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
    features: [
      "First Generation Pokemon database with search and filters",
      "Interactive stats visualization with Chart.js",
      "Evolution tree with branching paths",
      "Progressive Web App capabilities",
      "Type effectiveness calculator",
    ],
    challenges: [
      "Handling large dataset efficiently with virtual scrolling",
      "Creating complex evolution tree visualizations",
      "Implementing offline functionality with service workers",
    ],
    duration: "6 months",
    year: "2025",
  },
  {
    id: "gmaps-api",
    title: "GmapsAPI",
    description:
      "App that uses Google services for pinging a certain location with custom markers from all around the world.",
    fullDescription:
      "A feature-rich maps application replicating core Google Maps functionality. Includes custom map markers, location search, and interactive location pinning with a clean Android-native UI.",
    image: import.meta.env.BASE_URL + "images/projects/imgGoogleMaps.webp",
    technologies: ["Java", "Kotlin", "Google Console", "Geolocation API"],
    category: "mobile",
    githubUrl: "https://github.com/amirmx2905/AndroidStudioGoogleMapsAPI",
    features: [
      "Interactive map with zoom and pan controls",
      "Custom markers and popup information windows",
      "Location search with autocomplete",
      "Nearby places discovery and reviews",
    ],
    challenges: [
      "Implementing efficient tile caching for offline use",
      "Creating smooth navigation animations",
      "Handling geolocation accuracy across different devices",
    ],
    duration: "1 month",
    year: "2024",
  },
  {
    id: "investigators-app",
    title: "Investigators Mobile App",
    description:
      "Collaborative research mobile application for investigators from all around Mexico to access document management and analytics tools.",
    fullDescription:
      "A comprehensive platform designed for research teams to collaborate on investigations. Features document management, evidence tracking, timeline visualization, secure communication channels, and advanced search capabilities across all research materials.",
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
    features: [
      "Secure document management with version control",
      "Evidence tracking with chain of custody",
      "Interactive timeline for case progression",
      "Advanced search across all documents and media",
      "Role-based access control for team members",
      "Real-time notifications and updates",
    ],
    challenges: [
      "Implementing enterprise-level security measures",
      "Creating efficient search algorithms for large datasets",
      "Designing intuitive UX for complex investigative workflows",
    ],
    duration: "2 months",
    year: "2024",
  },
  {
    id: "notes-app",
    title: "Notes App",
    description:
      "Simple and intuitive note-taking application for creating, editing, and organizing personal notes.",
    fullDescription:
      "A straightforward note-taking application built with Django and React.js that allows users to create, edit, delete, and organize their personal notes. Features a clean interface with basic text formatting, note categorization, and search functionality for easy note management.",
    image: import.meta.env.BASE_URL + "images/projects/imgNotes.webp",
    technologies: ["Python", "REST API", "Django", "React.js", "Tailwind CSS"],
    category: "web",
    githubUrl: "https://github.com/amirmx2905/firstDjangoReactWebApp",
    features: [
      "Create, edit, and delete notes with ease",
      "Basic text formatting and rich text support",
      "Simple search functionality across all notes",
      "Note categorization and tagging system",
      "Responsive design for mobile and desktop use",
    ],
    challenges: [
      "Implementing efficient CRUD operations with Django REST API",
      "Creating a responsive UI that works across different devices",
      "Managing state effectively between React frontend and Django backend",
    ],
    duration: "1 month",
    year: "2024",
  },
  {
    id: "playbook-app",
    title: "Playbook App",
    description:
      "Interactive digital playbook application for team strategies and game planning.",
    fullDescription:
      "A comprehensive digital playbook application designed for sports teams to create, share, and manage game strategies. Features include drag-and-drop play design, video integration, and an analytics dashboard for performance tracking.",
    image: import.meta.env.BASE_URL + "images/projects/imgPlaybook.webp",
    technologies: ["Xcode", "Swift", "Material-UI"],
    category: "mobile",
    githubUrl: "https://github.com/JaimeTAR/PlayBook",
    features: [
      "Drag-and-drop play designer with custom formations",
      "Mobile-responsive design for field use",
      "Export capabilities for presentations",
    ],
    challenges: [
      "Creating intuitive drag-and-drop interface for complex plays",
    ],
    duration: "1 month",
    year: "2023",
  },
];

export const projectCategories = [
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
];
