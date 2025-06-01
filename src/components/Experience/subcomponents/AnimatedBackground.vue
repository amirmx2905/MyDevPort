<!--
  =====================================================
  ANIMATED BACKGROUND - Experience Section
  =====================================================
  
  Background animation component with floating orbs and geometric patterns
  that provides visual depth and consistency with the About Me section styling.
  
  Design Features:
  - Six strategically positioned floating orbs with pulse animations
  - Geometric diagonal line pattern overlay for texture
  - Blue/purple gradient color scheme for subtle background presence
  - Pure CSS animations with no JavaScript dependencies
  - Responsive positioning that works across all screen sizes
  
  Animation Details:
  - Orbs use CSS `animate-pulse` for gentle breathing effect
  - Geometric pattern creates subtle visual texture without distraction
  - All elements are pointer-events-none to avoid interfering with content
  - Opacity levels carefully tuned for background presence without overwhelming
  
  Performance:
  - Lightweight pure CSS animations
  - No reactive data or computed properties needed
  - Optimized for smooth rendering across devices
-->

<template>
  <!-- ===============================
       ANIMATED BACKGROUND CONTAINER
       =============================== -->
  <div class="absolute inset-0">
    <!-- ===============================
         FLOATING ORBS LAYER
         =============================== -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Orb 1: Top Left - Large -->
      <div
        class="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse top-10 left-10"
      />
      <!-- Orb 2: Top Right - Extra Large -->
      <div
        class="absolute w-48 h-48 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse top-1/4 right-20"
      />
      <!-- Orb 3: Middle Left - Medium -->
      <div
        class="absolute w-24 h-24 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse bottom-1/3 left-1/4"
      />
      <!-- Orb 4: Bottom Right - Largest -->
      <div
        class="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse bottom-20 right-10"
      />
      <!-- Orb 5: Center - Large -->
      <div
        class="absolute w-40 h-40 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <!-- Orb 6: Bottom Center - Small -->
      <div
        class="absolute w-20 h-20 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse top-3/4 right-1/3"
      />
    </div>

    <!-- ===============================
         GEOMETRIC PATTERN OVERLAY
         =============================== -->
    <!-- Diagonal line pattern for subtle texture -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.1)_49%,rgba(255,255,255,0.1)_51%,transparent_51%)] bg-[length:20px_20px]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// ===============================
// COMPONENT LOGIC
// ===============================
// This component is purely presentational and doesn't need any reactive data
// All animations are handled by CSS classes for optimal performance
</script>
