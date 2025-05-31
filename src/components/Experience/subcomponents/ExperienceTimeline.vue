<!--
  =====================================================
  EXPERIENCE TIMELINE COMPONENT
  =====================================================
  
  Clean vertical timeline displaying professional experiences in chronological order.
  Features clickable experience cards that open detailed modal windows.
  
  Design Features:
  - Vertical gradient timeline line (pink → purple → indigo)
  - Timeline nodes with gradient styling
  - Alternating card layout (left/right on desktop, left-aligned on mobile)
  - Hover animations and focus states for accessibility
  - Responsive design with mobile-first approach
  
  Functionality:
  - Opens ExperienceModal on card click
  - Manages modal state and body scroll prevention
  - Keyboard navigation support
  - Smooth animations and transitions
-->

<template>
  <div class="max-w-4xl mx-auto px-4">
    <!-- ===============================
         VERTICAL TIMELINE CONTAINER
         =============================== -->
    <div class="relative">
      <!-- Timeline Line: Central vertical gradient line with arrow at bottom -->
      <div
        class="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-600 opacity-60 top-10 bottom-10"
      ></div>

      <!-- ===============================
           TIMELINE ITEMS LOOP
           =============================== -->
      <div class="space-y-12">
        <div
          v-for="(experience, index) in experiences"
          :key="experience.id"
          class="relative flex items-center"
          :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
        >
          <!-- Timeline Node: Circular indicator on the timeline -->
          <div
            class="absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full border-4 border-gray-900 shadow-lg z-10"
          >
            <!-- Inner white dot for visual appeal -->
            <div
              class="absolute inset-1 bg-white rounded-full opacity-80"
            ></div>
          </div>

          <!-- ===============================
               EXPERIENCE CARD
               =============================== -->
          <div
            class="ml-16 lg:ml-0 w-full lg:w-5/12 group"
            :class="index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'"
          >
            <!-- Clickable Card Button -->
            <button
              @click="openModal(experience)"
              class="relative w-full bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-2xl border border-gray-700/50 rounded-3xl p-8 transition-all duration-500 hover:scale-[1.03] shadow-2xl overflow-hidden focus:outline-none focus:ring-4 focus:ring-pink-400/30 cursor-pointer"
            >
              <!-- Decorative Background Elements -->
              <div
                class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full -translate-y-16 translate-x-16"
              ></div>
              <div
                class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-full translate-y-12 -translate-x-12"
              ></div>

              <!-- Company Logo Section -->
              <div class="flex justify-center mb-6">
                <div class="relative w-24 h-24">
                  <!-- Logo Background with Gradient -->
                  <div
                    class="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/30 via-purple-600/30 to-indigo-600/30 backdrop-blur-xl border-2 border-pink-400/50 shadow-xl"
                  ></div>
                  <!-- Company Logo Image -->
                  <img
                    :src="experience.logo"
                    :alt="`${experience.company} logo`"
                    class="relative w-full h-full object-cover rounded-full filter brightness-95 transition-all duration-300 p-1"
                    loading="lazy"
                  />
                </div>
              </div>

              <!-- Company Information Section -->
              <div class="text-center mb-6">
                <!-- Company Name -->
                <h3
                  class="text-white font-bold text-2xl mb-2 transition-colors duration-300"
                >
                  {{ experience.company }}
                </h3>
                <!-- Duration Badge -->
                <div
                  class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 rounded-full"
                >
                  <!-- Calendar Icon -->
                  <svg
                    class="w-4 h-4 mr-2 text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
                    />
                  </svg>
                  <!-- Duration Text -->
                  <span class="text-pink-300 text-sm font-medium">{{
                    experience.duration
                  }}</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ===============================
         EXPERIENCE MODAL COMPONENT
         =============================== -->
    <ExperienceModal
      :experience="selectedExperience"
      :isOpen="isModalOpen"
      @close="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
// ===============================
// IMPORTS
// ===============================
import { ref } from "vue";
import type { Experience } from "../experienceData.ts";
import ExperienceModal from "./ExperienceModal.vue";

// ===============================
// PROPS & REACTIVE DATA
// ===============================
defineProps<{
  experiences: Experience[]; // Array of experience data from parent component
}>();

// Modal state management
const selectedExperience = ref<Experience | null>(null); // Currently selected experience for modal
const isModalOpen = ref(false); // Modal visibility state

// ===============================
// MODAL MANAGEMENT METHODS
// ===============================

/**
 * Opens the experience modal with selected experience data
 * Also prevents background scrolling when modal is open
 */
const openModal = (experience: Experience) => {
  selectedExperience.value = experience;
  isModalOpen.value = true;
  document.body.style.overflow = "hidden"; // Prevent background scroll
};

/**
 * Closes the experience modal and resets state
 * Restores background scrolling capability
 */
const closeModal = () => {
  isModalOpen.value = false;
  selectedExperience.value = null;
  document.body.style.overflow = "unset"; // Restore scroll
};
</script>
