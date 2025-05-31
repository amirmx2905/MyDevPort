<!--
  BRAND INFO COMPONENT - Enhanced Modern Design
  KEYWORD INDEX:
  - Personal Branding: elegant logo, sophisticated styling
  - Professional Identity: developer persona, visual hierarchy
  - Contact Status: interactive status indicators
  - Visual Elements: gradient effects, smooth animations
  - Responsive Layout: adaptive design patterns
-->

<script setup lang="ts">
// Brand and personal information
const brandInfo = {
  name: "Amir Flores",
  tagline:
    "Full-Stack Developer crafting modern web experiences with passion for coding and innovative solutions.",
  status: [
    { icon: "location", text: "Based in Mexico", color: "text-green-400" },
    {
      icon: "briefcase",
      text: "At @Toshiba as an SDE Intern",
      color: "text-blue-400",
    },
    {
      icon: "rocket",
      text: "Always learning, always building",
      color: "text-purple-400",
    },
  ],
};
</script>

<template>
  <!-- Brand Section Container -->
  <div class="space-y-6">
    <!-- Logo & Name Section -->
    <div class="group">
      <!-- Logo/Name with enhanced interactivity -->
      <div class="flex items-center space-x-3 mb-6">
        <!-- Animated logo with glow effect -->
        <div class="relative">
          <div
            class="w-12 h-12 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-white/20"
          >
            <span
              class="text-white font-bold text-xl group-hover:text-gray-100 transition-colors duration-300"
              >A</span
            >
          </div>
          <!-- Subtle glow ring -->
          <div
            class="absolute inset-0 w-12 h-12 bg-white/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>

        <!-- Name with elegant typography -->
        <div>
          <h3
            class="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300 tracking-tight"
          >
            {{ brandInfo.name }}
          </h3>
          <div
            class="h-0.5 w-0 bg-gradient-to-r from-white/60 to-gray-400 group-hover:w-full transition-all duration-500 ease-out"
          ></div>
        </div>
      </div>

      <!-- Tagline with box styling matching status items -->
      <div
        class="flex items-start group/tagline hover:bg-gray-800/30 p-7 rounded-lg transition-all duration-200 cursor-default mb-8"
      >
        <!-- Icon container -->
        <div
          class="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center mr-4 group-hover/tagline:bg-gray-700/50 transition-colors duration-200"
        >
          <svg
            class="w-5 h-5 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>

        <!-- Tagline text -->
        <div class="flex-1">
          <p
            class="text-gray-300 text-base leading-relaxed group-hover/tagline:text-gray-200 transition-colors duration-200"
          >
            {{ brandInfo.tagline }}
          </p>
        </div>
      </div>
    </div>

    <!-- Status Information with enhanced design -->
    <div class="space-y-4">
      <h5 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">
        Current Status
      </h5>

      <div class="space-y-3">
        <div
          v-for="(status, index) in brandInfo.status"
          :key="status.text"
          class="flex items-center group/status hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-200 cursor-default"
          :style="{ transitionDelay: `${index * 50}ms` }"
        >
          <!-- Status icon container -->
          <div
            class="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center mr-4 group-hover/status:bg-gray-700/50 transition-colors duration-200"
          >
            <!-- Location Icon -->
            <svg
              v-if="status.icon === 'location'"
              class="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <!-- Briefcase Icon -->
            <svg
              v-else-if="status.icon === 'briefcase'"
              class="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <!-- Rocket Icon -->
            <svg
              v-else-if="status.icon === 'rocket'"
              class="w-5 h-5 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          <!-- Status text -->
          <div class="flex-1">
            <span
              class="text-gray-400 group-hover/status:text-gray-200 transition-colors duration-200"
            >
              {{ status.text }}
            </span>
          </div>

          <!-- Status indicator -->
          <div
            class="w-2 h-2 rounded-full bg-green-400 animate-pulse opacity-60 group-hover/status:opacity-100 transition-opacity duration-200"
          ></div>
        </div>
      </div>
    </div>

    <!-- Call to action section -->
  </div>
</template>
