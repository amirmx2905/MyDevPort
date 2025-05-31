# Experience Section - Documentation

## 📋 Overview

The Experience section is a modern, interactive timeline component that showcases professional work history in a clean and engaging way. It features a vertical timeline with clickable experience cards that open detailed modal windows.

## 🎨 Design Features

- **Vertical Timeline**: Clean chronological display (oldest to newest, top to bottom)
- **Interactive Cards**: Clickable experience cards with hover animations
- **Detailed Modals**: Comprehensive experience information in modal windows
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Gradient Theme**: Consistent pink → purple → indigo color scheme
- **Glassmorphism**: Modern glass-like UI elements with backdrop blur
- **Accessibility**: Full keyboard navigation and screen reader support

## 🏗️ Component Architecture

```
Experience/
├── index.vue                    # Main section container
├── experienceData.ts           # Data definitions and experience array
├── README.md                   # This documentation file
└── subcomponents/
    ├── AnimatedBackground.vue   # Floating orbs background animation
    ├── SectionHeader.vue       # Section title with gradient styling
    ├── ExperienceTimeline.vue  # Timeline component with cards
    └── ExperienceModal.vue     # Detailed experience modal
```

## 🔧 How to Add New Experiences

### Step 1: Prepare Company Logo

1. Add the company logo to `/public/images/logos/`
2. Use `.webp` format for optimal performance
3. Recommended size: 200x200px minimum
4. Name format: `logo[CompanyName].webp` (e.g., `logoToshiba.webp`)

### Step 2: Update Experience Data

Navigate to `src/components/Experience/experienceData.ts` and add your new experience to the `experienceData` array:

```typescript
{
  id: "unique-identifier",                    // Unique ID (use company name + role)
  company: "Company Name",                    // Full company name
  position: "Job Title",                      // Position/role title
  duration: "Month Year - Month Year",       // Duration (e.g., "Jan 2024 - Present")
  location: "City, Country",                 // Work location
  logo: "/images/logos/logoCompany.webp",    // Path to company logo
  description: "Detailed role description...", // 2-3 sentences about the role
  achievements: [                            // Array of key achievements
    "Achievement 1 description",
    "Achievement 2 description",
    "Achievement 3 description",
  ],
  technologies: [                            // Array of technologies used
    "Technology 1",
    "Technology 2",
    "Framework 1",
  ],
  type: "full-time" | "part-time" | "internship" | "contract"  // Employment type
}
```

### Step 3: Maintain Chronological Order

**Important**: The array should be ordered chronologically from **oldest to newest** (top to bottom in timeline). Insert your new experience in the correct chronological position.

### Example: Adding a New Experience

```typescript
// Add this to experienceData array in chronological order
{
  id: "microsoft-sde",
  company: "Microsoft",
  position: "Software Development Engineer",
  duration: "June 2025 - Present",
  location: "Redmond, WA",
  logo: "/images/logos/logoMicrosoft.webp",
  description: "Working on Azure cloud services, developing scalable solutions for enterprise customers. Contributing to microservices architecture and implementing modern DevOps practices.",
  achievements: [
    "Improved API response times by 40% through optimization",
    "Led migration of legacy systems to containerized architecture",
    "Mentored 3 junior developers in best practices",
    "Contributed to open-source Azure SDK components"
  ],
  technologies: [
    "C#", ".NET Core", "Azure", "Docker", "Kubernetes",
    "TypeScript", "React", "SQL Server", "Git"
  ],
  type: "full-time"
}
```

## 🎨 Customization Options

### Experience Type Colors

The modal displays different colored badges based on experience type:

- **Full-time**: Green theme (`bg-green-500/20`)
- **Part-time**: Yellow theme (`bg-yellow-500/20`)
- **Internship**: Indigo theme (`bg-indigo-500/20`)
- **Contract**: Purple theme (`bg-purple-500/20`)

### Logo Styling

Company logos are automatically styled with:

- Circular mask with gradient border
- Hover animations
- Responsive sizing (24x24 on timeline, 20x20 in modal)
- `object-cover` for consistent aspect ratios

## 📱 Responsive Behavior

### Desktop (lg and up)

- Timeline cards alternate left/right positioning
- Modal displays company info in side-by-side layout
- Larger typography and spacing

### Mobile (below lg)

- All timeline cards align to the left
- Modal stacks content vertically
- Condensed spacing for touch interactions

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support with focus indicators
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Modal traps focus and restores on close
- **High Contrast**: Sufficient color contrast ratios
- **Reduced Motion**: Respects user's motion preferences

## 🚀 Performance Considerations

- **Lazy Loading**: Company logos use `loading="lazy"`
- **Image Optimization**: WebP format for optimal file sizes
- **CSS Animations**: Hardware-accelerated transforms
- **Component Splitting**: Modular architecture for code splitting
- **Event Delegation**: Efficient event handling

## 🔍 Testing Your Changes

After adding a new experience:

1. **Visual Check**: Verify the logo displays correctly
2. **Timeline Order**: Confirm chronological ordering
3. **Modal Content**: Check all sections populate properly
4. **Responsive Design**: Test on mobile and desktop
5. **Accessibility**: Test keyboard navigation

## 🛠️ Troubleshooting

### Logo Not Displaying

- Check file path in `logo` property
- Verify image exists in `/public/images/logos/`
- Ensure WebP format is supported

### Timeline Order Issues

- Verify chronological ordering in `experienceData` array
- Check that `id` values are unique

### Modal Content Missing

- Ensure all required properties are included
- Check for typos in property names
- Verify arrays have content

## 📝 Code Style Guidelines

- Use TypeScript for type safety
- Follow existing naming conventions
- Add comments for complex logic
- Maintain consistent indentation
- Use descriptive variable names

---

**Note**: This section follows the same architectural patterns as the About Me section for consistency across the portfolio. The modular design makes it easy to maintain and extend functionality.
