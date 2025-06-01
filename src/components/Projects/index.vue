<!--
  =====================================================
  PROJECTS SECTION - Portfolio Showcase
  =====================================================
  
  Main Projects section showcasing development portfolio through:
  - AnimatedBackground: floating orbs and geometric patterns
  - SectionHeader: section title with gradient styling
  - ProjectsGrid: responsive grid with filterable project cards
  - ProjectModal: detailed project information modal
  
  Features:
  - Responsive grid layout (1-3 columns based on screen size)
  - Category filtering system (All, Web, Mobile, Desktop)
  - Interactive project cards with hover effects
  - Modal system for detailed project information
  - Consistent glassmorphism styling with emerald/blue theme
  - Accessibility features (keyboard navigation, ARIA labels)
-->

<template>
  <div
    id="projects"
    class="min-h-screen bg-gray-900 relative overflow-hidden py-20"
  >
    <!-- Animated Background Component -->
    <AnimatedBackground />

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- Section Header Component -->
      <SectionHeader />

      <!-- Projects Grid Component -->
      <ProjectsGrid :projects="projectsData" />
    </div>
  </div>
</template>

<script setup lang="ts">
// ===============================
// COMPONENT IMPORTS
// ===============================
import AnimatedBackground from "./subcomponents/AnimatedBackground.vue";
import SectionHeader from "./subcomponents/SectionHeader.vue";
import ProjectsGrid from "./subcomponents/ProjectsGrid.vue";

// ===============================
// DATA IMPORTS
// ===============================
import { projectsData } from "./projectsData.ts";
</script>
