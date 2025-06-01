<!--
  =====================================================
  ANIMATED BACKGROUND - Floating Orbs & Effects
  =====================================================
  
  Animated background elements including:
  - Floating orbs with gradients
  - Geometric pattern overlay
  - Dynamic positioning and animations
-->

<template>
  <div class="absolute inset-0">
    <!-- Animated Background Orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="i in 6"
        :key="i"
        class="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 animate-pulse"
        :class="[getOrbSize(i), getOrbPosition(i), getOrbAnimation(i)]"
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
// ===============================
// UTILITY FUNCTIONS
// ===============================

const getOrbSize = (index: number) => {
  const sizes = [
    "w-32 h-32",
    "w-48 h-48",
    "w-24 h-24",
    "w-64 h-64",
    "w-40 h-40",
    "w-20 h-20",
  ];
  return sizes[index - 1];
};

const getOrbPosition = (index: number) => {
  const positions = [
    "top-10 left-10",
    "top-1/4 right-20",
    "bottom-1/3 left-1/4",
    "bottom-20 right-10",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "top-3/4 right-1/3",
  ];
  return positions[index - 1];
};

const getOrbAnimation = (index: number) => {
  const animations = [
    "animate-pulse",
    "animate-pulse",
    "animate-pulse",
    "animate-pulse",
    "animate-pulse",
    "animate-pulse",
  ];
  return animations[index - 1];
};
</script>
