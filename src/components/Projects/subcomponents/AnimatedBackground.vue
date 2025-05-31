<!--
  =====================================================
  ANIMATED BACKGROUND - Projects Section
  =====================================================
  
  Background animation component with floating orbs and geometric patterns
  that provides visual depth and consistency with other sections styling.
  
  Design Features:
  - Six strategically positioned floating orbs with pulse animations
  - Geometric diagonal line pattern overlay for texture
  - Blue/purple gradient color scheme for subtle background presence
  - Pure CSS animations with no JavaScript dependencies
  - Responsive positioning that works across all screen sizes
  
  Animation Details:
  - Orbs use CSS `animate-pulse` for gentle breathing effects
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
      <!-- Orb 1: Top Center - Medium -->
      <div
        class="absolute w-28 h-28 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse top-16 left-1/2 -translate-x-1/2"
      />
      <!-- Orb 2: Right Center - Large -->
      <div
        class="absolute w-44 h-44 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse top-1/2 right-8 -translate-y-1/2"
      />
      <!-- Orb 3: Bottom Left - Extra Large -->
      <div
        class="absolute w-56 h-56 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse bottom-12 left-16"
      />
      <!-- Orb 4: Top Right Corner - Small -->
      <div
        class="absolute w-20 h-20 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse top-8 right-1/4"
      />
      <!-- Orb 5: Left Center - Medium -->
      <div
        class="absolute w-36 h-36 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse top-2/3 left-8"
      />
      <!-- Orb 6: Center Right - Small -->
      <div
        class="absolute w-24 h-24 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse top-1/3 right-1/3"
      />
    </div>

    <!-- ===============================
         GEOMETRIC PATTERN OVERLAY
         =============================== -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.1)_49%,rgba(255,255,255,0.1)_51%,transparent_51%)] bg-[length:20px_20px]"
      />
    </div>
  </div>
</template>
