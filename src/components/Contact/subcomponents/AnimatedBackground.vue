<!--
  =====================================================
  ANIMATED BACKGROUND - Floating Orbs and Patterns
  =====================================================
  
  Background animation component with floating orbs and geometric patterns
  that matches the About Me section styling for consistency
-->

<template>
  <!-- Animated Background Particles -->
  <div class="absolute inset-0">
    <!-- Floating Orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Orb 1: w-32 h-32, top-10 left-10, animate-pulse -->
      <div
        class="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse top-10 left-10"
      />
      <!-- Orb 2: w-48 h-48, top-1/4 right-20, animate-pulse -->
      <div
        class="absolute w-48 h-48 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse top-1/4 right-20"
      />
      <!-- Orb 3: w-24 h-24, bottom-1/3 left-1/4, animate-pulse -->
      <div
        class="absolute w-24 h-24 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse bottom-1/3 left-1/4"
      />
      <!-- Orb 4: w-64 h-64, bottom-20 right-10, animate-pulse -->
      <div
        class="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse bottom-20 right-10"
      />
      <!-- Orb 5: w-40 h-40, center, animate-pulse -->
      <div
        class="absolute w-40 h-40 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <!-- Orb 6: w-20 h-20, top-3/4 right-1/3, animate-pulse -->
      <div
        class="absolute w-20 h-20 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse top-3/4 right-1/3"
      />
    </div>

    <!-- Geometric Pattern Overlay -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.1)_49%,rgba(255,255,255,0.1)_51%,transparent_51%)] bg-[length:20px_20px]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// This component is purely presentational and doesn't need any reactive data
</script>
