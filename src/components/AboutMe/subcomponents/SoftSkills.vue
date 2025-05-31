<!--
  =====================================================
  SOFT SKILLS - Personal Competencies Grid
  =====================================================
  
  Interactive showcase of soft skills including:
  - Problem solving
  - Team collaboration
  - Communication
  - Adaptability
  - Critical thinking
  - Time management
-->

<template>
  <div
    class="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
  >
    <h3 class="text-xl font-semibold text-white mb-6 flex items-center">
      <div
        class="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mr-3"
      />
      Soft Skills
    </h3>
    <div class="space-y-4">
      <div v-for="skill in softSkills" :key="skill.name" class="group">
        <div
          class="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent hover:from-purple-500/10 hover:to-blue-500/10 transition-all duration-500 border border-transparent hover:border-white/10"
        >
          <div
            class="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          >
            <img
              :src="skill.icon"
              :alt="skill.name"
              class="w-6 h-6 object-contain filter brightness-0 invert group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
            />
          </div>
          <div class="flex-1">
            <div class="text-white font-medium">{{ skill.name }}</div>
            <div class="text-gray-400 text-sm">
              {{ skill.description }}
            </div>
          </div>
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

const softSkills = ref([
  {
    name: "Problem Solving",
    icon: "/images/icons/iconProblemSolving.svg",
    description: "Breaking down complex challenges",
  },
  {
    name: "Team Collaboration",
    icon: "/images/icons/iconTeamWork.svg",
    description: "Working effectively in teams",
  },
  {
    name: "Communication",
    icon: "/images/icons/iconCommunication.svg",
    description: "Clear and effective communication",
  },
  {
    name: "Adaptability",
    icon: "/images/icons/iconAdaptability.svg",
    description: "Quick learning and adaptation",
  },
  {
    name: "Critical Thinking",
    icon: "/images/icons/iconThinking.svg",
    description: "Analytical approach to problems",
  },
  {
    name: "Time Management",
    icon: "/images/icons/iconTime.svg",
    description: "Efficient task prioritization",
  },
]);
</script>
