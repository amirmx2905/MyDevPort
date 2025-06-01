<!--
  =====================================================
  SECTION HEADER - Certifications Title & Description
  =====================================================
  
  Enhanced header component featuring:
  - Vibrant animated title with purple/pink/indigo gradient
  - Background glow effects and floating accent elements
  - Interactive hover effects with color transitions
  - Enhanced decorative underline with glowing overlay
  - Floating dots with staggered bounce animations
  - Responsive text sizing and smooth entrance animations
  - Improved visual hierarchy and modern design
-->

<template>
  <div class="text-center mb-16 relative">
    <!-- Background Glow Effects -->
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-indigo-600/10 rounded-full opacity-60 animate-pulse"
    ></div>

    <!-- Main Section Title -->
    <h2
      class="relative text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-400 to-indigo-500 bg-clip-text text-transparent transition-all duration-1000"
    >
      Certifications
    </h2>

    <!-- Floating Accent Elements -->
    <div
      class="absolute top-0 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce"
      style="animation-delay: 0.5s; animation-duration: 2s"
    ></div>
    <div
      class="absolute top-8 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"
      style="animation-delay: 1s; animation-duration: 2.5s"
    ></div>
    <div
      class="absolute bottom-8 left-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-bounce"
      style="animation-delay: 1.5s; animation-duration: 3s"
    ></div>

    <!-- Section Description -->
    <p
      class="relative text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-90"
    >
      Professional development and continuous learning through formal education
      and specialized training programs. Building expertise in modern
      technologies and industry best practices.
    </p>

    <!-- Enhanced Decorative Underline -->
    <div class="mt-8 flex justify-center">
      <div class="relative">
        <!-- Main gradient line -->
        <div
          class="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-400 to-indigo-500 rounded-full"
        ></div>
        <!-- Glowing overlay -->
        <div
          class="absolute inset-0 w-32 h-1.5 bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400 rounded-full blur-sm opacity-70 animate-pulse"
        ></div>
        <!-- Side dots -->
        <div
          class="absolute -left-6 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full animate-pulse"
        ></div>
        <div
          class="absolute -right-6 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No reactive logic needed for this header component
</script>
