<!--
  NAVIGATION LINKS COMPONENT - Enhanced Modern Design
  KEYWORD INDEX:
  - Quick Navigation: sophisticated section links
  - Smooth Scrolling: enhanced anchor navigation
  - Interactive Effects: advanced hover animations, visual feedback
  - Accessibility: improved semantic structure
  - Responsive Design: adaptive typography and spacing
-->

<script setup lang="ts">
import { useSmoothScroll } from "../../../composables/useSmoothScroll";

// ===============================
// SMOOTH SCROLL COMPOSABLE
// ===============================

const { scrollToSection } = useSmoothScroll();

// ===============================
// NAVIGATION DATA
// ===============================

// Navigation links matching header navigation
const navigationLinks = [
  { name: "About", href: "#about", icon: "user", sectionId: "about" },
  {
    name: "Experience",
    href: "#experience",
    icon: "briefcase",
    sectionId: "experience",
  },
  {
    name: "Projects",
    href: "#projects",
    icon: "rocket",
    sectionId: "projects",
  },
  {
    name: "Certifications",
    href: "#certifications",
    icon: "award",
    sectionId: "certifications",
  },
  { name: "Contact", href: "#contact", icon: "mail", sectionId: "contact" },
];

// ===============================
// NAVIGATION METHODS
// ===============================

/**
 * Handle smooth scroll navigation to sections
 */
const handleNavigation = (event: Event, sectionId: string): void => {
  event.preventDefault();
  scrollToSection(sectionId);
};
</script>

<template>
  <!-- Enhanced Navigation Links Container -->
  <nav class="space-y-2">
    <a
      v-for="(link, index) in navigationLinks"
      :key="link.name"
      :href="link.href"
      @click="handleNavigation($event, link.sectionId)"
      class="group relative flex items-center p-3 rounded-xl bg-gray-800/20 hover:bg-gray-800/40 transition-all duration-300 transform hover:translate-x-2 cursor-pointer"
      :style="{ transitionDelay: `${index * 50}ms` }"
    >
      <!-- Icon container -->
      <div
        class="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600/20 transition-all duration-300"
      >
        <!-- User Icon -->
        <svg
          v-if="link.icon === 'user'"
          class="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <!-- Briefcase Icon -->
        <svg
          v-else-if="link.icon === 'briefcase'"
          class="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300"
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
          v-else-if="link.icon === 'rocket'"
          class="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300"
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
        <!-- Award Icon -->
        <svg
          v-else-if="link.icon === 'award'"
          class="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
        <!-- Mail Icon -->
        <svg
          v-else-if="link.icon === 'mail'"
          class="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>

      <!-- Link content -->
      <div class="flex-1 flex items-center justify-between">
        <span
          class="text-gray-400 group-hover:text-white transition-colors duration-300 font-medium"
        >
          {{ link.name }}
        </span>

        <!-- Arrow indicator -->
        <svg
          class="w-4 h-4 text-gray-600 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      <!-- Subtle bottom border on hover -->
      <div
        class="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>
    </a>
  </nav>
</template>
