# Projects Section - Documentation

## 📋 Overview

The Projects section is a modern, interactive portfolio showcase that displays development projects in a responsive grid layout. It features filterable project cards that open detailed modal windows with comprehensive project information.

## 🎨 Design Features

- **Responsive Grid**: Dynamic layout (1-3 columns based on screen size)
- **Category Filtering**: Filter projects by type (All, Web, Mobile, Desktop)
- **Interactive Cards**: Clickable project cards with hover animations
- **Detailed Modals**: Comprehensive project information in modal windows
- **Gradient Theme**: Consistent emerald → teal → blue color scheme
- **Glassmorphism**: Modern glass-like UI elements with backdrop blur
- **Accessibility**: Full keyboard navigation and screen reader support

## 🏗️ Component Architecture

```
Projects/
├── index.vue                   # Main section container
├── projectsData.ts            # Data definitions and projects array
├── README.md                  # This documentation file
└── subcomponents/
    ├── AnimatedBackground.vue  # Floating orbs background animation
    ├── SectionHeader.vue      # Section title and description
    ├── ProjectsGrid.vue       # Grid layout with filtering
    └── ProjectModal.vue       # Detailed project modal
```

## 🔧 How to Add New Projects

### Step 1: Prepare Project Assets

1. Add project images to `/public/images/projects/`
2. Use `.webp` format for optimal performance
3. Recommended size: 600x400px minimum (3:2 aspect ratio)
4. Name format: `img[ProjectName].webp` (e.g., `imgPortfolio.webp`)
5. Optional: Add GIF demonstrations with `gif[ProjectName].gif`

### Step 2: Update Project Data

Navigate to `src/components/Projects/projectsData.ts` and add your new project to the `projectsData` array:

```typescript
{
  id: "unique-project-id",                    // Unique identifier
  title: "Project Name",                      // Display name
  description: "Brief project summary",       // Card description (2-3 lines)
  fullDescription: "Detailed description",    // Modal description (paragraph)
  image: "/images/projects/imgProject.webp",  // Main project image
  category: "web" | "mobile" | "desktop",     // Project category
  year: "2024",                              // Development year
  duration: "2 months",                      // Development time
  githubUrl: "https://github.com/...",       // GitHub repository
  features: [                                // Key features array
    "Feature 1",
    "Feature 2"
  ],
  technologies: [                            // Technologies used
    "Vue.js",
    "TypeScript"
  ],
  challenges: [                              // Technical challenges (optional)
    "Challenge 1",
    "Challenge 2"
  ]
}
```

### Step 3: Project Categories

Make sure your project uses one of the available categories:

- **web**: Web Development projects
- **mobile**: Mobile application projects
- **desktop**: Desktop applications and other projects

### Example: Adding a New Project

```typescript
// Add this to projectsData array
{
  id: "ecommerce-platform",
  title: "E-Commerce Platform",
  description: "Full-stack e-commerce solution with modern UI and secure payment processing.",
  fullDescription: "A comprehensive e-commerce platform built with Vue.js and Node.js, featuring user authentication, product management, shopping cart functionality, and integrated payment processing. The platform includes an admin dashboard for inventory management and order tracking.",
  image: "/images/projects/imgEcommerce.webp",
  category: "web",
  year: "2024",
  duration: "3 months",
  githubUrl: "https://github.com/username/ecommerce-platform",
  features: [
    "User authentication and authorization",
    "Product catalog with search and filtering",
    "Shopping cart and checkout process",
    "Payment integration with Stripe",
    "Admin dashboard for management",
    "Order tracking and history"
  ],
  technologies: [
    "Vue.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Stripe API",
    "JWT",
    "Tailwind CSS"
  ],
  challenges: [
    "Implementing secure payment processing",
    "Optimizing database queries for large product catalogs",
    "Creating responsive design for all device sizes"
  ]
}
```

## 🎨 Customization Options

### Project Categories

You can modify available categories in the `projectCategories` array:

```typescript
export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile Apps" },
  { value: "desktop", label: "Other Apps" },
];
```

### Modal Styling

The project modal uses consistent emerald/blue theming:

- **Border**: `border-emerald-400/40`
- **Shadow**: `shadow-emerald-500/30`
- **Gradients**: `from-emerald-400 via-teal-400 to-green-400`
- **Accent Colors**: Emerald, Teal, and Blue variants

### Grid Layout

The responsive grid automatically adjusts:

- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns

## 📱 Responsive Behavior

### Desktop (lg and up)

- 3-column grid layout
- Larger card sizes and typography
- Side-by-side modal content layout

### Tablet (md to lg)

- 2-column grid layout
- Medium-sized cards
- Stacked modal content

### Mobile (below md)

- Single column layout
- Full-width cards
- Compact modal design

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support with focus indicators
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Modal traps focus and restores on close
- **High Contrast**: Sufficient color contrast ratios
- **Reduced Motion**: Respects user's motion preferences

## 🚀 Performance Considerations

- **Lazy Loading**: Project images use `loading="lazy"`
- **Image Optimization**: WebP format for optimal file sizes
- **CSS Animations**: Hardware-accelerated transforms
- **Component Splitting**: Modular architecture for code splitting
- **Virtual Scrolling**: Efficient rendering for large project lists

## 🔍 Testing Your Changes

After adding a new project:

1. **Visual Check**: Verify the image displays correctly
2. **Category Filter**: Test filtering functionality
3. **Modal Content**: Check all sections populate properly
4. **Links**: Verify GitHub and demo links work
5. **Responsive Design**: Test on mobile and desktop
6. **Accessibility**: Test keyboard navigation

## 🛠️ Troubleshooting

### Image Not Displaying

- Check file path in `image` property
- Verify image exists in `/public/images/projects/`
- Ensure WebP format is supported

### Category Filter Issues

- Verify category matches available options
- Check spelling in category property
- Ensure category exists in `projectCategories`

### Modal Content Missing

- Ensure all required properties are included
- Check for typos in property names
- Verify arrays have content (features, technologies)

### GitHub Link Not Working

- Verify URL format is correct
- Check repository visibility
- Ensure `githubUrl` property is properly formatted

## 📝 Code Style Guidelines

- Use TypeScript for type safety
- Follow existing naming conventions
- Add comments for complex logic
- Keep descriptions concise but informative
- Use consistent image naming conventions
- Maintain chronological order (newest first)

## 🔗 Related Documentation

- [Experience Section](../Experience/README.md)
- [Component Architecture](../../README.md)
- [Styling Guidelines](../../styles/README.md)
