<!--
  =====================================================
  EXPERIENCE SECTION - Professional Timeline
  =====================================================
  
  Main Experience section showcasing professional journey through:
  - AnimatedBackground: floating orbs and geometric patterns
  - SectionHeader: section title with gradient styling
  - ExperienceTimeline: vertical timeline with clickable experience cards
  
  Features:
  - Chronological timeline (oldest to newest, top to bottom)
  - Responsive design (mobile-first approach)
  - Modal system for detailed experience information
  - Consistent glassmorphism styling with pink/purple/indigo theme
  - Accessibility features (keyboard navigation, ARIA labels)
-->

<template>
  <div
    id="experience"
    class="min-h-screen bg-gray-900 relative overflow-hidden py-20"
  >
    <!-- Animated Background Component -->
    <AnimatedBackground />

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- Section Header Component -->
      <SectionHeader />

      <!-- Experience Timeline Component -->
      <ExperienceTimeline :experiences="experienceData" />
    </div>
  </div>
</template>

<script setup lang="ts">
// ===============================
// COMPONENT IMPORTS
// ===============================
import AnimatedBackground from "./subcomponents/AnimatedBackground.vue";
import SectionHeader from "./subcomponents/SectionHeader.vue";
import ExperienceTimeline from "./subcomponents/ExperienceTimeline.vue";

// ===============================
// DATA IMPORTS
// ===============================
import { experienceData } from "./experienceData.ts";
</script>
