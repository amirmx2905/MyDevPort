<!--
  =====================================================
  CERTIFICATIONS SECTION - Professional Achievements
  =====================================================
  
  Main Certifications section showcasing professional development through:
  - AnimatedBackground: floating orbs and geometric patterns
  - SectionHeader: section title with gradient styling
  - CertificationsGrid: responsive grid with interactive certification cards
  - CertificationModal: detailed certification information modal
  
  Features:
  - Responsive grid layout (1-3 columns based on screen size)
  - Status indicators (completed, in-progress)
  - Interactive certification cards with hover effects
  - Modal system for detailed certification information
  - Consistent glassmorphism styling with purple/blue theme
  - Institution and skills display
  - Accessibility features (keyboard navigation, ARIA labels)
-->

<template>
  <div
    id="certifications"
    class="min-h-screen bg-gray-900 relative overflow-hidden py-20"
  >
    <!-- Animated Background Component -->
    <AnimatedBackground />

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- Section Header Component -->
      <SectionHeader />

      <!-- Certifications Grid Component -->
      <CertificationsGrid :certifications="certificationsData" />
    </div>
  </div>
</template>

<script setup lang="ts">
// ===============================
// COMPONENT IMPORTS
// ===============================
import AnimatedBackground from "./subcomponents/AnimatedBackground.vue";
import SectionHeader from "./subcomponents/SectionHeader.vue";
import CertificationsGrid from "./subcomponents/CertificationsGrid.vue";

// ===============================
// DATA IMPORTS
// ===============================
import { certificationsData } from "./certificationsData.ts";
</script>
