<!--
  =====================================================
  TECHNICAL SKILLS - Technology Stack Grid
  =====================================================
  
  Interactive grid of technical skills including:
  - Programming languages
  - Frameworks and libraries
  - Tools and databases
  - Icons with hover effects
-->

<template>
  <div
    class="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
  >
    <h3 class="text-xl font-semibold text-white mb-6 flex items-center">
      <div
        class="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"
      />
      Technical Skills
    </h3>
    <div class="grid grid-cols-2 gap-3">
      <div v-for="skill in technicalSkills" :key="skill.name" class="group">
        <div
          class="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-500 border border-transparent hover:border-white/10"
        >
          <div
            class="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
          >
            <img
              :src="skill.icon"
              :alt="skill.name"
              class="w-6 h-6 object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-300"
            />
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-white font-medium text-sm truncate">
              {{ skill.name }}
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

const technicalSkills = ref([
  { name: "C++", icon: import.meta.env.BASE_URL + "images/icons/iconCPP.svg" },
  {
    name: "Java",
    icon: import.meta.env.BASE_URL + "images/icons/iconJava.svg",
  },
  {
    name: "Kotlin",
    icon: import.meta.env.BASE_URL + "images/icons/iconKotlin.svg",
  },
  {
    name: "Python",
    icon: import.meta.env.BASE_URL + "images/icons/iconPython.svg",
  },
  {
    name: "Swift",
    icon: import.meta.env.BASE_URL + "images/icons/iconSwift.svg",
  },
  {
    name: "JavaScript",
    icon: import.meta.env.BASE_URL + "images/icons/iconJavaScript.svg",
  },
  {
    name: "HTML",
    icon: import.meta.env.BASE_URL + "images/icons/iconHTML.svg",
  },
  { name: "CSS", icon: import.meta.env.BASE_URL + "images/icons/iconCSS.svg" },
  { name: "Vue", icon: import.meta.env.BASE_URL + "images/icons/iconVue.svg" },
  {
    name: "React",
    icon: import.meta.env.BASE_URL + "images/icons/iconReact.svg",
  },
  {
    name: "Tailwind",
    icon: import.meta.env.BASE_URL + "images/icons/iconTailwind.svg",
  },
  {
    name: "Django",
    icon: import.meta.env.BASE_URL + "images/icons/iconDjango.svg",
  },
  {
    name: "Docker",
    icon: import.meta.env.BASE_URL + "images/icons/iconDocker.svg",
  },
  {
    name: "MySQL",
    icon: import.meta.env.BASE_URL + "images/icons/iconMySQL.svg",
  },
  {
    name: "PostgreSQL",
    icon: import.meta.env.BASE_URL + "images/icons/iconPostgreSQL.svg",
  },
  {
    name: "TypeScript",
    icon: import.meta.env.BASE_URL + "images/icons/iconTypescript.svg",
  },
]);
</script>
