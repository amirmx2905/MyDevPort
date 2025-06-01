<!--
  =====================================================
  SKILLS MATRIX - Combined Technical & Soft Skills
  =====================================================
  
  Wrapper component that combines:
  - Technical skills grid
  - Soft skills grid
  - Section header
-->

<template>
  <div class="mb-24">
    <div class="text-center mb-12">
      <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
        Core Skills
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        Technical expertise and soft skills that drive my development approach
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Technical Skills Component -->
      <TechnicalSkills />

      <!-- Soft Skills Component -->
      <SoftSkills />
    </div>
  </div>
</template>

<script setup lang="ts">
import TechnicalSkills from "./TechnicalSkills.vue";
import SoftSkills from "./SoftSkills.vue";
</script>
