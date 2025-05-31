<!--
  =====================================================
  HERO PROFILE - Personal Information Card
  =====================================================
  
  Main profile card with:
  - Personal information
  - Professional title
  - Company information
  - Contact button
  - Glassmorphism design
-->

<template>
  <div class="relative">
    <!-- Glow Effect Background -->
    <div
      class="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 rounded-3xl blur-xl animate-pulse"
    />

    <!-- Main Profile Card -->
    <div
      class="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-12 transform hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/25"
    >
      <!-- Text Content -->
      <div class="text-center space-y-6">
        <div class="space-y-2">
          <div class="text-xl text-gray-300 font-medium">
            Software Developer
          </div>
          <div
            class="flex items-center justify-center space-x-2 text-sm text-gray-400"
          >
            <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span>Currently at Toshiba Global Commerce Solutions</span>
          </div>
        </div>

        <p class="text-gray-300 leading-relaxed max-w-md mx-auto">
          Passionate about solving complex problems with attention to detail.
          Committed to continuous learning and staying updated with industry
          trends. Strong collaborator with excellent communication skills.
        </p>

        <!-- Contact Buttons -->
        <div class="flex flex-col sm:flex-row justify-center">
          <button
            class="px-6 py-3 border cursor-pointer border-white/20 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for this component
</script>
