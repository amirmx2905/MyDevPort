<!--
  =====================================================
  EXPERIENCE MODAL COMPONENT
  =====================================================
  
  Detailed modal window for displaying comprehensive experience information.
  Features responsive design, smooth animations, and accessibility support.
  
  Design Features:
  - Glassmorphism styling with pink/purple/indigo gradient theme
  - Responsive layout (column on mobile, row on desktop)
  - Smooth enter/exit animations with backdrop blur
  - Circular company logo design matching timeline style
  - Organized content sections with visual indicators
  
  Functionality:
  - Teleports to body for proper z-index layering
  - Manages body scroll prevention when open
  - Keyboard navigation (ESC to close)
  - Click outside to close functionality
  - Focus management for accessibility
  
  Content Sections:
  - Header: Company logo, name, position, duration, location, type
  - Overview: Detailed role description
  - Key Achievements: Bulleted list of accomplishments
  - Technologies & Skills: Tag-based technology display
-->

<template>
  <!-- Modal Backdrop -->
  <Teleport to="body">
    <Transition
      name="modal-backdrop"
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen && experience"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        @click="handleBackdropClick"
        @keydown.esc="$emit('close')"
      >
        <!-- Modal Content -->
        <Transition
          name="modal-content"
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="scale-90 opacity-0 translate-y-4"
          enter-to-class="scale-100 opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="scale-100 opacity-100 translate-y-0"
          leave-to-class="scale-90 opacity-0 translate-y-4"
        >
          <div
            v-if="isOpen && experience"
            class="relative bg-gradient-to-br from-gray-900/95 to-black/80 backdrop-blur-2xl border border-pink-400/40 rounded-3xl max-w-2xl w-full max-h-[95vh] overflow-y-auto overflow-x-hidden shadow-2xl shadow-pink-500/30"
            @click.stop
          >
            <!-- Close Button -->
            <button
              @click="$emit('close')"
              class="cursor-pointer absolute top-6 right-6 w-10 h-10 bg-gradient-to-r from-pink-500/30 to-purple-600/30 hover:from-pink-500/50 hover:to-purple-600/50 border border-pink-400/50 rounded-full flex items-center justify-center transition-all duration-300 group z-20 backdrop-blur-xl shadow-lg"
              aria-label="Close modal"
            >
              <svg
                class="w-5 h-5 text-pink-300 group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <!-- Hero Section with Company Logo -->
            <div class="relative text-center py-8 px-8 overflow-hidden">
              <!-- Decorative Background Elements -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-600/5 to-indigo-600/5"
              ></div>
              <div
                class="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full -translate-y-16"
              ></div>
              <div
                class="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-full translate-y-12"
              ></div>

              <!-- Company Logo -->
              <div class="relative mb-4 flex justify-center">
                <div class="relative w-20 h-20">
                  <div
                    class="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/40 via-purple-600/40 to-indigo-600/40 backdrop-blur-xl border-2 border-pink-400/60 shadow-2xl"
                  ></div>
                  <img
                    :src="experience.logo"
                    :alt="`${experience.company} logo`"
                    class="relative w-full h-full object-cover rounded-full filter brightness-105 transition-all duration-300 p-1"
                    loading="lazy"
                  />
                </div>
              </div>

              <!-- Company Title -->
              <h2
                class="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
              >
                {{ experience.company }}
              </h2>

              <!-- Position -->
              <h3 class="text-lg md:text-xl text-white font-semibold mb-4">
                {{ experience.position }}
              </h3>

              <!-- Badges Row -->
              <div class="flex flex-wrap justify-center gap-4">
                <!-- Duration Badge -->
                <div
                  class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/25 to-purple-600/25 border border-pink-400/40 rounded-full backdrop-blur-sm shadow-lg"
                >
                  <svg
                    class="w-5 h-5 mr-2 text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
                    />
                  </svg>
                  <span class="text-pink-200 font-medium">{{
                    experience.duration
                  }}</span>
                </div>

                <!-- Location Badge -->
                <div
                  class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/25 to-indigo-600/25 border border-purple-400/40 rounded-full backdrop-blur-sm shadow-lg"
                >
                  <svg
                    class="w-5 h-5 mr-2 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  <span class="text-purple-200 font-medium">{{
                    experience.location
                  }}</span>
                </div>

                <!-- Type Badge -->
                <div
                  class="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm shadow-lg"
                  :class="getTypeStyles(experience.type)"
                >
                  <span class="font-medium">{{
                    formatType(experience.type)
                  }}</span>
                </div>
              </div>
            </div>

            <!-- Content Section -->
            <div class="p-6 space-y-6">
              <!-- Description -->
              <div>
                <h4
                  class="text-lg font-semibold text-white mb-3 flex items-center"
                >
                  <div class="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                  Overview
                </h4>
                <p class="text-gray-300 leading-relaxed">
                  {{ experience.description }}
                </p>
              </div>

              <!-- Key Achievements -->
              <div v-if="experience.achievements?.length">
                <h4
                  class="text-lg font-semibold text-white mb-3 flex items-center"
                >
                  <div class="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Key Achievements
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="(achievement, index) in experience.achievements"
                    :key="index"
                    class="flex items-start space-x-3 text-gray-300"
                  >
                    <div
                      class="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"
                    />
                    <span>{{ achievement }}</span>
                  </li>
                </ul>
              </div>

              <!-- Technologies Used -->
              <div v-if="experience.technologies?.length">
                <h4
                  class="text-lg font-semibold text-white mb-3 flex items-center"
                >
                  <div class="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  Technologies & Skills
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in experience.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600/50 rounded-lg text-xs text-gray-300 font-medium hover:border-pink-400/50 hover:text-pink-300 transition-all duration-300 backdrop-blur-sm"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
// ===============================
// IMPORTS
// ===============================
import { watch, nextTick, onUnmounted } from "vue";
import type { Experience } from "../experienceData.ts";

// ===============================
// PROPS & EMITS INTERFACES
// ===============================
interface Props {
  experience: Experience | null; // Experience object to display
  isOpen: boolean; // Modal visibility state
}

interface Emits {
  (e: "close"): void; // Event emitted when modal should close
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

// ===============================
// EVENT HANDLER METHODS
// ===============================

/**
 * Handles backdrop click to close modal
 * Only closes if the click target is the backdrop itself
 */
const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    emit("close");
  }
};

/**
 * Returns appropriate styling classes for experience type badge
 * Based on the employment type (full-time, part-time, etc.)
 */
const getTypeStyles = (type: string) => {
  const styles = {
    "full-time": "bg-green-500/20 text-green-300 border border-green-400/30",
    "part-time": "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30",
    internship: "bg-indigo-500/20 text-indigo-300 border border-indigo-400/30",
    contract: "bg-purple-500/20 text-purple-300 border border-purple-400/30",
  };
  return styles[type as keyof typeof styles] || styles["full-time"];
};

/**
 * Formats experience type for display
 * Converts hyphenated types to proper case
 */
const formatType = (type: string) => {
  const formatted = {
    "full-time": "Full Time",
    "part-time": "Part Time",
    internship: "Internship",
    contract: "Contract",
  };
  return formatted[type as keyof typeof formatted] || type;
};

// ===============================
// LIFECYCLE & WATCHERS
// ===============================

/**
 * Watch for modal open/close to manage focus and body scroll
 * Prevents background scrolling when modal is open
 * Manages keyboard focus for accessibility
 */
watch(
  () => props.isOpen,
  async (newValue) => {
    if (newValue) {
      // The scroll position management is now handled by the parent component
      // ExperienceTimeline.vue which preserves scroll position better
      await nextTick();
    }
  }
);

/**
 * Cleanup when component is unmounted
 * Ensures body scroll is restored if component unmounts while modal is open
 */
onUnmounted(() => {
  if (props.isOpen) {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
  }
});
</script>
