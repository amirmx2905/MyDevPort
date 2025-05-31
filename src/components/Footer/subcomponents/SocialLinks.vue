<!--
  SOCIAL LINKS COMPONENT - Enhanced Modern Design
  KEYWORD INDEX:
  - Social Media Icons: GitHub, LinkedIn, Email with enhanced styling
  - Interactive Effects: sophisticated hover animations, glow effects
  - Accessibility: improved aria-labels, focus states
  - Icon Styling: modern containers, gradient backgrounds
  - Responsive Design: adaptive spacing and sizing
-->

<script setup lang="ts">
// Enhanced social media and contact links configuration
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/amirmx2905",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    hoverBg: "hover:bg-gray-700",
    glowColor: "hover:shadow-gray-500/20",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/amir-sebasti%C3%A1n-flores-cardona-617556250/",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    hoverBg: "hover:bg-blue-600",
    glowColor: "hover:shadow-blue-500/20",
  },
];
</script>

<template>
  <!-- Enhanced Social Media Links Container -->
  <div class="flex space-x-4">
    <a
      v-for="social in socialLinks"
      :key="social.name"
      :href="social.href"
      :aria-label="`Connect with me on ${social.name}`"
      :class="[
        'group relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg',
        social.hoverBg,
        social.glowColor,
      ]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <!-- Background glow effect -->
      <div
        class="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>

      <!-- Icon -->
      <svg
        class="w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-300 relative z-10"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path :d="social.icon" />
      </svg>

      <!-- Hover tooltip -->
      <div
        class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
      >
        {{ social.name }}
        <div
          class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900"
        ></div>
      </div>
    </a>
  </div>
</template>
