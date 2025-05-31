<!--
  =====================================================
  AREAS OF INTEREST - Learning Goals & Passions
  =====================================================
  
  Showcase of professional interests and learning goals:
  - AI technologies
  - Mobile development
  - Web technologies
  - Emerging tech trends
-->

<template>
  <div class="text-center">
    <div
      class="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
    >
      <!-- Decorative Elements -->
      <div
        class="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full -translate-x-16 -translate-y-16"
      />
      <div
        class="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-600/20 to-transparent rounded-full translate-x-20 translate-y-20"
      />

      <div class="relative z-10">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          Areas of Interest
        </h2>
        <p class="text-gray-300 leading-relaxed max-w-4xl mx-auto text-lg">
          I aim to learn and improve in AI technologies like machine learning,
          neural networks, and NLP, as well as in mobile development, focusing
          on creating high-performance apps with strong UI/UX and integrating AI
          capabilities to solve real-world problems.
        </p>

        <!-- Interest Tags -->
        <div class="flex flex-wrap justify-center gap-3 mt-8">
          <span
            v-for="interest in interests"
            :key="interest"
            class="px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-white text-sm hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
          >
            {{ interest }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// ===============================
// REACTIVE DATA
// ===============================

const interests = ref([
  "Machine Learning",
  "Neural Networks",
  "Natural Language Processing",
  "Mobile Development",
  "UI/UX Design",
  "Cloud Computing",
  "DevOps",
  "IoT",
  "Blockchain",
  "Cybersecurity",
  "Web Development",
  "Data Science",
  "Augmented Reality",
  "Virtual Reality",
]);
</script>
