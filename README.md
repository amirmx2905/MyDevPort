# MyDevPort - Developer Portfolio

A modern, interactive portfolio showcasing my skills, projects, and experience as a Full Stack Developer. Built with Vue.js and featuring dynamic animations, responsive design, and smooth user interactions.

<p align="center">
    <strong><a href="https://mydevport.vercel.app/" style="text-decoration: none; color: #4FC08D;">🌐 MyDevPort</a></strong>
</p>

<br>

## Tech Stack

<p align="center">
    <a href="https://vuejs.org/" style="text-decoration: none;"><img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white" alt="Vue.js"></a>&nbsp;
    <a href="https://www.typescriptlang.org/" style="text-decoration: none;"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>&nbsp;
    <a href="https://tailwindcss.com/" style="text-decoration: none;"><img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS"></a>&nbsp;
    <a href="https://vitejs.dev/" style="text-decoration: none;"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"></a>&nbsp;
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" style="text-decoration: none;"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"></a>&nbsp;
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" style="text-decoration: none;"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"></a>&nbsp;
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" style="text-decoration: none;"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"></a>&nbsp;
    <a href="https://vercel.com/" style="text-decoration: none;"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"></a>&nbsp;
</p>

<br>

## Features

- **Interactive Canvas**: Dynamic particle system with mouse interaction and responsive animations
- **Vue 3 Composition API**: Modern Vue.js architecture with TypeScript support
- **Fully Responsive**: Optimized for all devices with mobile-first design
- **Smooth Animations**: CSS transitions and custom animations throughout
- **Project Showcase**: Interactive modals with detailed project information
- **Certifications Gallery**: Visual display of professional achievements
- **Experience Timeline**: Professional background with company details
- **Contact Form**: Functional contact system with validation
- **Skills Display**: Technical and soft skills with interactive elements
- **CV Download**: Direct PDF download functionality
- **Modern UI/UX**: Glassmorphism design with gradient effects

<br>

## Setup Guide

This guide will help you set up the project locally on Mac or Windows.
<br>

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

<br>

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/amirmx2905/MyDevPort.git
cd MyDevPort
```

<br>

### 2. Install Dependencies

```bash
npm install
```

<br>

### 3. Start Development Server

```bash
npm run dev
```

This will start the development server at `http://localhost:5173/`

<br>

### 4. Build for Production

```bash
npm run build
```

This creates optimized production files in the `dist/` directory.

<br>

### 5. Preview Production Build

```bash
npm run preview
```

<br>

## Project Structure

```bash
MyDevPort/
├── public/                    # Static assets
│   ├── documents/            # CV and documents
│   │   └── Amir_Flores_CV.pdf
│   └── images/               # Images and icons
│       ├── certifications/   # Certification images
│       ├── icons/           # Skill and UI icons
│       ├── logos/           # Company logos
│       ├── profile/         # Profile photos
│       └── projects/        # Project screenshots
├── src/
│   ├── components/          # Vue components
│   │   ├── Header/          # Landing section
│   │   ├── AboutMe/         # About section
│   │   ├── Experience/      # Work experience
│   │   ├── Projects/        # Portfolio projects
│   │   ├── Certifications/  # Achievements
│   │   ├── Contact/         # Contact form
│   │   └── Footer/          # Footer section
│   ├── composables/         # Vue composables
│   │   ├── useDeviceDetection.ts
│   │   ├── useModalScroll.ts
│   │   └── useSmoothScroll.ts
│   ├── App.vue              # Main application
│   ├── main.ts              # Application entry point
│   └── style.css            # Global styles
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

<br>

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

<br>

### Component Architecture

The project follows a modular component structure:

- **Header**: Interactive landing section with particle canvas
- **AboutMe**: Personal information, skills, and profile
- **Experience**: Professional background and work history
- **Projects**: Portfolio showcase with detailed modals
- **Certifications**: Educational achievements and credentials
- **Contact**: Functional contact form with validation
- **Footer**: Additional links and information

<br>

### Key Technologies Explained

- **Vue 3**: Latest version with Composition API and `<script setup>` syntax
- **TypeScript**: Type-safe development with enhanced IDE support
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Vite**: Fast build tool with hot module replacement
- **Responsive Design**: Mobile-first approach with breakpoint utilities

<br>

## Deployment

This project is automatically deployed to Vercel on every push to the main branch.

### Manual Deployment to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Other Deployment Options

- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

<br>

## Performance Features

- **Optimized Images**: WebP format for faster loading
- **Code Splitting**: Automatic chunking by Vite
- **Tree Shaking**: Unused code elimination
- **Minification**: Compressed production builds
- **CDN Delivery**: Fast global content delivery via Vercel

<br>

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

<br>

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

<br>

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

<br>

## Contact

- **Portfolio**: [https://mydevport.vercel.app/](https://mydevport.vercel.app/)
- **GitHub**: [@amirmx2905](https://github.com/amirmx2905)
- **LinkedIn**: [Amir Sebastián Flores Cardona](https://www.linkedin.com/in/amir-sebasti%C3%A1n-flores-cardona-617556250/)

<br>

## Author

**Amir Sebastián Flores Cardona**
- Full Stack Developer
