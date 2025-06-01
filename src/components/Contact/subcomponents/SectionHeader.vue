<!--
  =====================================================
  SECTION HEADER COMPONENT
  =====================================================
  
  Reusable header component for the Contact section
  with title and description
-->

<template>
  <div class="text-center mb-16">
    <h1 class="text-5xl lg:text-7xl font-bold text-white bg-clip-text mb-6">
      Contact
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 font-light"
      >
        Me
      </span>
    </h1>
    <p class="text-gray-400 max-w-2xl mx-auto">
      Let's connect! Send me a message and I'll get back to you as soon as
      possible.
    </p>

    <!-- ===============================
         ACCENT LINE
         =============================== -->
    <!-- Enhanced Decorative Underline -->
    <div class="mt-8 flex justify-center">
      <div class="relative">
        <!-- Main gradient line -->
        <div
          class="w-32 h-1.5 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"
        ></div>
        <!-- Glowing overlay -->
        <div
          class="absolute inset-0 w-32 h-1.5 bg-gradient-to-r from-emerald-300 to-blue-400 rounded-full blur-sm opacity-70 animate-pulse"
        ></div>
        <!-- Side dots -->
        <div
          class="absolute -left-6 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
        ></div>
        <div
          class="absolute -right-6 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No reactive data needed for this component
</script>
