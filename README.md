# MyDevPort

A modern, responsive portfolio showcasing projects, certifications, and experience with smooth scroll interactions, GPU-accelerated animations, and optimal performance.

## Tech Stack

<p align="center">
  <a href="https://react.dev/" style="text-decoration: none;"><img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19"></a>&nbsp;
  <a href="https://www.typescriptlang.org/" style="text-decoration: none;"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>&nbsp;
  <a href="https://vitejs.dev/" style="text-decoration: none;"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"></a>&nbsp;
  <a href="https://tailwindcss.com/" style="text-decoration: none;"><img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"></a>&nbsp;
  <a href="https://www.framer.com/motion/" style="text-decoration: none;"><img src="https://img.shields.io/badge/Lenis-000000?style=for-the-badge&logo=javascript&logoColor=white" alt="Lenis"></a>&nbsp;
  <a href="https://ogl.dev/" style="text-decoration: none;"><img src="https://img.shields.io/badge/WebGL-000000?style=for-the-badge&logo=webgl&logoColor=white" alt="WebGL"></a>&nbsp;
  <a href="https://react-icons.github.io/react-icons/" style="text-decoration: none;"><img src="https://img.shields.io/badge/React_Icons-F7931E?style=for-the-badge&logo=react&logoColor=white" alt="React Icons"></a>&nbsp;
</p>

## Current Project Status

### Implemented

- **Home Section**: GPU-accelerated Ferrofluid animation with visibility gating, lightweight name animations (CSS keyframes), and interactive 3D photo card
- **About Section**: Bio, skills showcase, and tech logos carousel
- **Experience Section**: Interactive timeline visualization of work history
- **Projects Section**: Featured 6 projects with Web/Mobile category filtering, inline descriptions, and GitHub links
- **Certifications Section**: 8+ certifications with 3-card initial load and expandable "Load More" functionality
- **Navigation**: Sticky floating navbar with active section tracking and smooth Lenis scroll
- **Footer**: Site footer with navigation links and social media
- **Performance Optimization**:
  - Replaced 250KB of GSAP + motion/react with lightweight CSS animations and DOM transforms
  - IntersectionObserver-based rendering gating (Ferrofluid pauses off-screen)
  - Lazy-loaded section components with Suspense
  - Delta time accumulation for smooth animations (prevents time jump on re-entry)
- **Design System**: Consistent glassmorphism UI with backdrop blur, custom shadows, and accent colors
- **Type Safety**: Full TypeScript coverage with zero type errors
- **Code Quality**: ESLint configuration with zero warnings

## Product Overview

MyDevPort is a single-page portfolio application that presents:

- **Home**: Hero section with animated name and professional photo
- **About**: Personal bio, core competencies, and tech stack visualization
- **Experience**: Career timeline with role descriptions and key achievements
- **Projects**: Filterable portfolio of featured projects (Web/Mobile) with live links
- **Certifications**: Professional certifications with verification links and skill tags
- **Sticky Navigation**: Real-time section tracking with smooth scroll-to behavior

All sections lazy-load on demand and feature consistent glassmorphism styling for a modern, cohesive look.

## Architecture

The portfolio follows a **component-driven, data-first** architecture:

1. **React 19 with Suspense**: Lazy-loaded section components for optimal initial load
2. **Tailwind CSS v4**: Utility-first styling with custom glass design tokens
3. **Centralized Data**: All content (projects, certifications, experience) defined in `/src/data/`
4. **Custom Hooks**: `useScrollHint` for scroll indicators, `useLenis` for smooth scroll integration
5. **GPU Optimization**: Ferrofluid canvas uses WebGL via OGL, IntersectionObserver gates rendering
6. **Animation Strategy**:
   - CSS keyframes for sequential character animations (name)
   - DOM transforms with perspective for 3D effects (photo card)
   - WebGL shaders for fluid dynamics (Ferrofluid background)

## Core Data Flow

1. **Data Sources** (`/src/data/`): Projects, certifications, experience, profile info
2. **Section Components** (`/src/sections/`): Lazy-loaded views that consume data
3. **Card Components** (`/src/components/`): Reusable UI for projects, certifications, etc.
4. **Navbar/Footer**: Global navigation with Lenis scroll integration
5. **Styling**: Tailwind utilities + custom CSS animations in `/src/index.css`

## Project Structure

```
src/
├── App.tsx                    # Root component with lazy-loaded sections
├── index.css                  # Global styles and keyframe animations
├── main.tsx                   # Entry point
├── components/
│   ├── Navbar.tsx             # Sticky floating nav with active section tracking
│   ├── Footer.tsx             # Site footer with nav links and socials
│   ├── SectionShell.tsx        # Reusable section wrapper
│   ├── about/
│   │   ├── LogoLoop.tsx        # Tech logos carousel
│   │   └── SpotlightCard.tsx   # Card component with spotlight effect
│   ├── experience/
│   │   └── ExperienceTimeline.tsx
│   ├── home/
│   │   ├── Ferrofluid.tsx      # WebGL fluid animation component
│   │   ├── Ferrofluid.css      # Canvas styles
│   │   ├── SplitText.tsx       # (deprecated, replaced with inline animation)
│   │   └── TiltedCard.tsx      # (deprecated, replaced with inline 3D transform)
│   ├── projects/
│   │   └── ProjectCard.tsx
│   └── certifications/
│       └── CertificationCard.tsx
├── sections/
│   ├── HomeSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   └── CertificationsSection.tsx
├── data/
│   ├── types.ts               # TypeScript interfaces
│   ├── profileData.ts         # Name, role, links
│   ├── projectsData.ts        # 6 featured projects
│   ├── certificationsData.ts  # 8+ certifications
│   ├── experienceData.ts      # Work history
│   ├── technologyData.ts      # Tech logos and metadata
│   └── techLogos.tsx          # Logo imports
├── hooks/
│   └── useScrollHint.ts       # Scroll indicator visibility logic
└── public/
    ├── images/                # Project/certification images
    └── documents/             # CV PDF
```

## Setup & Development

### Prerequisites

- **Node.js** 18+ (with npm or yarn)
- **Git**

### Installation

1. Clone the repository:

```bash
git clone https://github.com/amirmx2905/MyDevPort.git
cd MyDevPort
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Linting & Type Checking

```bash
npx eslint src/ --max-warnings=0
npx tsc --noEmit
```

### Preview Production Build Locally

```bash
npm run preview
```

## Performance Metrics

- **Build Time**: ~290ms (Vite)
- **Main Bundle**: 226.98 kB (71.86 kB gzipped)
- **Ferrofluid Chunk**: 51.54 kB (15.78 kB gzipped)
- **Total Modules**: 110 (lazy-loaded sections reduce main chunk size)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS

## Key Features

### Ferrofluid Animation

- WebGL-based GPU-accelerated fluid dynamics
- Visibility-gated rendering (pauses when off-screen)
- Delta-time accumulation prevents animation jumps
- Full-screen responsive canvas

### Smooth Scrolling

- **Lenis** integration for physics-based scroll behavior
- Active section indicator in navbar
- Scroll-to behavior on navigation links

### Glassmorphism Design

- Backdrop blur effects with consistent opacity
- Custom shadow definitions
- Accent color tokens (sky, emerald, amber)
- Responsive grid layouts

### Lazy Loading

- Section components load on demand via React Suspense
- Loading overlay while Ferrofluid initializes
- Independent chunk for WebGL canvas

## Deployment

The portfolio is deployed to production. Build and deploy with:

```bash
npm run build
# Deploy dist/ to hosting platform (Vercel, Netlify, etc.)
```

## Future Enhancements

- [ ] Language Translation

## License

This project is open source and available under the MIT License.
