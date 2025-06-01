<!--
  =====================================================
  PERSONAL STATS - Animated Statistics Grid
  =====================================================
  
  Grid of personal/professional statistics:
  - Years of experience
  - Projects completed
  - Technologies mastered
  - Passion level
-->

<template>
  <div class="space-y-8">
    <!-- Animated Stats -->
    <div class="grid grid-cols-2 gap-6">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-black/40 transition-all duration-300 hover:scale-105"
      >
        <div
          class="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
        >
          {{ stat.value }}
        </div>
        <div class="text-gray-400 text-sm">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// ===============================
// REACTIVE DATA
// ===============================

const stats = ref([
  { value: "2+", label: "Years Experience Developing" },
  { value: "10+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Passion" },
]);
</script>
