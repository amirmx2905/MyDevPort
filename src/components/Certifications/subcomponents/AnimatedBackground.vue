<!--
  =====================================================
  ANIMATED BACKGROUND - Floating Geometric Elements
  =====================================================
  
  Background animation component featuring:
  - Multiple floating orb elements with varying sizes
  - Smooth orbital movement patterns
  - Gaussian blur effects for depth
  - Purple/blue gradient theme for certifications section
  - Responsive scaling based on screen size
  - Hardware-accelerated CSS animations
-->

<template>
  <!-- Main Background Container -->
  <div class="absolute inset-0 overflow-hidden">
    <!-- Large Primary Orb - Top Left Quadrant -->
    <div
      class="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
      style="animation-duration: 4s"
    ></div>

    <!-- Medium Secondary Orb - Top Right -->
    <div
      class="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse"
      style="animation-duration: 6s; animation-delay: 1s"
    ></div>

    <!-- Small Accent Orb - Bottom Left -->
    <div
      class="absolute bottom-1/4 left-1/5 w-32 h-32 bg-gradient-to-br from-blue-500/25 to-indigo-500/25 rounded-full blur-xl animate-pulse"
      style="animation-duration: 3s; animation-delay: 2s"
    ></div>

    <!-- Floating Geometric Element - Center Right -->
    <div
      class="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-lg animate-bounce"
      style="animation-duration: 8s"
    ></div>

    <!-- Small Accent Dots -->
    <div
      class="absolute top-1/5 left-1/2 w-16 h-16 bg-purple-500/20 rounded-full blur-md animate-pulse"
      style="animation-duration: 5s; animation-delay: 0.5s"
    ></div>

    <div
      class="absolute bottom-1/3 right-1/5 w-20 h-20 bg-indigo-500/15 rounded-full blur-lg animate-pulse"
      style="animation-duration: 7s; animation-delay: 1.5s"
    ></div>

    <!-- Subtle Gradient Overlay for Depth -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-gray-900/30"
    ></div>
  </div>
</template>

<script setup lang="ts">
// No reactive logic needed for this purely decorative component
</script>
