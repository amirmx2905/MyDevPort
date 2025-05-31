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
    <!-- Subtle gradient line for visual separation -->
    <div
      class="w-24 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mt-6 opacity-60"
    ></div>
  </div>
</template>

<script setup lang="ts">
// No reactive data needed for this component
</script>
