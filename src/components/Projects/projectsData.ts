/**
 * =====================================================
 * PROJECTS DATA - Portfolio Project Showcase
 * =====================================================
 *
 * Centralized data structure containing all portfolio project information.
 * Used by ProjectsGrid and ProjectModal components to display project showcase.
 *
 * Data Structure:
 * - Chronologically ordered (newest to oldest for portfolio display)
 * - Complete project information including features, technologies, and challenges
 * - Type-safe TypeScript interfaces for consistency
 * - Optimized for both grid cards and detailed modal views
 *
 * Usage:
 * - Import and use in ProjectsGrid component for filtering and display
 * - Each project opens in ProjectModal for detailed information
 * - Project images stored in /public/images/projects/
 *
 * Adding New Projects:
 * 1. Add project image to /public/images/projects/ (preferably .webp format)
 * 2. Create new project object following the Project interface
 * 3. Add to projectsData array in chronological order (newest first)
 * 4. Ensure category matches available filter options
 */

// ===============================
// TYPE DEFINITIONS
// ===============================

/**
 * Project interface defining the structure for each portfolio project
 * All properties are required except githubUrl and challenges which are optional
 */
export interface Project {
  id: string; // Unique identifier for the project (use kebab-case, e.g., "portfolio-2024")
  title: string; // Project name/title displayed in cards and modal header
  description: string; // Brief description for project cards (2-3 lines max, shown in grid)
  fullDescription: string; // Detailed description for modal (full paragraph with context)
  image: string; // Path to main project image/screenshot (stored in /public/images/projects/)
  technologies: string[]; // Array of technologies, frameworks, and tools used in development
  category: string; // Project category for filtering ("web", "mobile", "desktop")
  githubUrl?: string; // GitHub repository URL (optional, shown as button in modal)
  features: string[]; // Key features and functionalities list (displayed as bullet points)
  challenges?: string[]; // Technical challenges overcome during development (optional section)
  duration: string; // Development time duration (e.g., "2 months", "3 weeks")
  year: string; // Year of development for timeline context and sorting
}

// ===============================
// PROJECTS DATA ARRAY
// ===============================
// Ordered chronologically: newest to oldest (for portfolio showcase)
// Each project represents a significant development effort or learning milestone

export const projectsData: Project[] = [
  // ===============================
  // INVESTIGATORS WEB APP (2025) - Full-Stack Web Platform
  // Collaborative platform connecting researchers across Mexico for partnerships
  // Technologies: Python, Django, React.js, Chart.js, PostgreSQL, JWT, Docker
  // ===============================
  {
    id: "investigators-web-app",
    title: "Investigators Web App",
    description:
      "Collaborative platform connecting researchers across Mexico to find partners and collaborate in specific research areas.",
    fullDescription:
      "A comprehensive web platform designed to connect researchers throughout Mexico, enabling them to discover potential collaborators in their field of expertise. The application features a robust authentication system, interactive dashboard with research metrics, and complete CRUD operations for managing researchers, projects, and collaborations. Built with role-based access control supporting students, investigators, and administrators.",
    image: "/images/projects/imgInvestigatorsWA.webp",
    technologies: [
      "Python",
      "Django RestFramework",
      "Django",
      "React.js",
      "Chart.js",
      "Tailwind CSS",
      "PostgreSQL",
      "HTML5",
      "CSS3",
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
    duration: "3 month",
    year: "2025",
  },

  // ===============================
  // PERSONAL PORTFOLIO (2025) - Featured Project
  // Modern Vue.js portfolio showcasing professional experience and projects
  // Technologies: Vue.js, TypeScript, Tailwind CSS, Vite
  // ===============================
  {
    id: "portfolio-2025",
    title: "Personal Portfolio",
    description:
      "Modern Vue.js portfolio showcasing professional experience and projects with interactive animations.",
    fullDescription:
      "A comprehensive personal portfolio built with Vue.js 3 and TypeScript, featuring modern glassmorphism design, interactive timelines, and responsive layouts. Includes sections for experience, projects, skills, and contact information with smooth animations and accessibility features.",
    image: "/images/projects/imgPortfolio.webp",
    technologies: [
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "HTML5",
      "CSS3",
    ],
    category: "web",
    githubUrl: "https://github.com/amirmx2905/MyDevPort",
    features: [
      "Responsive design with mobile-first approach",
      "Interactive timeline with modal system",
      "Glassmorphism UI design with gradient themes",
      "Smooth scroll navigation and animations",
      "TypeScript for enhanced development experience",
      "Optimized performance with Vite build tool",
    ],
    challenges: [
      "Implementing complex timeline animations with Vue transitions",
      "Creating reusable modal system with proper accessibility",
      "Optimizing performance for smooth animations across devices",
    ],
    duration: "3 months",
    year: "2025",
  },

  // ===============================
  // POKÉMON BATTLE ARENA (2025) - Web Game Application
  // Pokemon web game with battle system, stats visualization and evolution trees
  // Technologies: React.js, PokemonAPI, C++, PostgreSQL, JavaScript
  // ===============================
  {
    id: "pokemon-battle-arena",
    title: "PokemonBattleArena",
    description:
      "Pokemon web game with advanced search, stats visualization, evolution trees, capture system and battles.",
    fullDescription:
      "A modern web application game that allows users to explore the Pokémon universe. Features include Pokémon database with the the first generation with advanced search and filters, interactive stats visualization, an evolution tree with branching paths, and a favorites system using local storage.",
    image: "/images/projects/imgPokemon.webp",
    technologies: [
      "React.js",
      "PokemonAPI",
      "C++",
      "PostgreSQL",
      "CSS3",
      "HTML5",
      "JavaScript",
      "Agile",
      "Scrum"
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

  // ===============================
  // GOOGLE MAPS API (2024) - Mobile Application
  // Android app using Google services for location mapping with custom markers
  // Technologies: Java, Kotlin, Google Console, Geolocation API
  // ===============================
  {
    id: "gmaps-api",
    title: "GmapsAPI",
    description:
      "App that uses google services for pinging a certain location custom markers from all around the world.",
    fullDescription:
      "A feature-rich maps application replicating core Google Maps functionality. Includes custom map markers, location search.",
    image: "/images/projects/imgGoogleMaps.webp",
    technologies: [
      "Java",
      "Kotlin",
      "Google Console ",
      "Geolocation API",
      "IndexedDB",
    ],
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

  // ===============================
  // INVESTIGATORS MOBILE APP (2024) - Mobile Application
  // Collaborative research mobile app for investigators across Mexico
  // Technologies: Java, Kotlin, Android Studio, MySQL, PHP, REST API
  // ===============================
  {
    id: "investigators-app",
    title: "Investigators Mobile App",
    description:
      "Collaborative research mobile application for investigators from all around Mexico to access document management and analytics tools.",
    fullDescription:
      "A comprehensive platform designed for research teams to collaborate on investigations. Features document management, evidence tracking, timeline visualization, secure communication channels, and advanced search capabilities across all research materials.",
    image: "/images/projects/imgInvestigators.webp",
    technologies: [
      "Java",
      "Kotlin",
      "Android Studio",
      "MySQL",
      "Php",
      "Rest API",
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

  // ===============================
  // NOTES APP (2024) - Web Application
  // Simple note-taking application with CRUD operations and search functionality
  // Technologies: Python, Django, React.js, REST API, Tailwind CSS
  // ===============================
  {
    id: "notes-app",
    title: "Notes App",
    description:
      "Simple and intuitive note-taking application for creating, editing, and organizing personal notes.",
    fullDescription:
      "A straightforward note-taking application built with Django and React.js that allows users to create, edit, delete, and organize their personal notes. Features a clean interface with basic text formatting, note categorization, and search functionality for easy note management.",
    image: "/images/projects/imgNotes.webp",
    technologies: ["Python", "Rest API", "Django", "React.js", "Tailwind CSS"],
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

  // ===============================
  // DIGITAL PLAYBOOK (2023) - Mobile Application
  // Interactive sports strategy planning tool for team management
  // Technologies: Swift, Xcode, Material-UI
  // ===============================
  {
    id: "playbook-app",
    title: "Playbook App",
    description:
      "Interactive digital playbook application for team strategies and game planning with real-time collaboration.",
    fullDescription:
      "A comprehensive digital playbook application designed for sports teams to create, share, and manage game strategies. Features include drag-and-drop play design, real-time collaboration, video integration, and analytics dashboard for performance tracking.",
    image: "/images/projects/imgPlaybook.webp",
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

// ===============================
// PROJECT CATEGORIES CONFIGURATION
// ===============================

/**
 * Filter categories used in ProjectsGrid component for project filtering.
 * Each category has:
 * - value: Internal identifier used for filtering logic
 * - label: User-facing display text shown in filter buttons
 *
 * Available Categories:
 * - all: Shows all projects (default selection)
 * - web: Web development projects (websites, web apps)
 * - mobile: Mobile applications (iOS, Android, React Native)
 * - desktop: Desktop applications and other miscellaneous projects
 *
 * Note: When adding new projects, ensure the category value matches
 * one of the available options (excluding "all" which is automatic)
 */
export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile Apps" },
  { value: "desktop", label: "Other Apps" },
];
