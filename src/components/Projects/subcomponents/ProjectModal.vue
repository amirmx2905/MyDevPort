<!--
  =====================================================
  PROJECT MODAL COMPONENT
  =====================================================
  
  Detailed modal window for displaying comprehensive project information.
  Features responsive design, smooth animations, and accessibility support.
  
  Design Features:
  - Glassmorphism styling with emerald/blue gradient theme
  - Responsive layout with image gallery
  - Smooth enter/exit animations with backdrop blur
  - Action buttons for demo and source code
  - Organized content sections with visual indicators
  
  Functionality:
  - Teleports to body for proper z-index layering
  - Manages body scroll prevention when open
  - Keyboard navigation (ESC to close)
  - Click outside to close functionality
  - Focus management for accessibility
  
  Content Sections:
  - Header: Project image, title, status, category
  - Details: Description, features, technologies, challenges
  - Actions: Demo link and GitHub repository links
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
        v-if="isOpen && project"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
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
            v-if="isOpen && project"
            class="relative bg-gradient-to-br from-gray-900/95 to-black/80 backdrop-blur-2xl border border-emerald-400/40 rounded-3xl max-w-2xl w-full max-h-[95vh] overflow-y-auto overflow-x-hidden shadow-2xl shadow-emerald-500/30 scrollbar-hide"
            @click.stop
          >
            <!-- Action Buttons Top -->
            <div
              class="absolute top-6 left-6 z-20 hover:scale-105 transition-transform duration-300"
            >
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center w-10 h-10 bg-gradient-to-r from-gray-700/80 to-gray-800/80 hover:from-gray-600 hover:to-gray-700 border border-gray-600/50 hover:border-gray-500/50 rounded-full justify-center transition-all duration-300 backdrop-blur-xl shadow-lg group"
                aria-label="View source code"
              >
                <svg
                  class="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>

            <!-- Close Button -->
            <button
              @click="$emit('close')"
              class="cursor-pointer absolute top-6 right-6 w-10 h-10 bg-gradient-to-r from-emerald-500/30 to-blue-600/30 hover:from-emerald-500/50 hover:to-blue-600/50 border border-emerald-400/50 rounded-full flex items-center justify-center transition-all duration-300 group z-20 backdrop-blur-xl shadow-lg"
              aria-label="Close modal"
            >
              <svg
                class="w-5 h-5 text-emerald-300 group-hover:text-white transition-colors duration-300"
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

            <!-- Project Header -->
            <div class="relative p-8 pb-6">
              <!-- Decorative Background -->
              <div class="absolute inset-0"></div>

              <!-- Project Image -->
              <div class="relative mb-6 mt-8">
                <div
                  class="aspect-video mt-13 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    :src="project.image"
                    :alt="project.title"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <!-- Project Title and Meta -->
              <div class="relative z-10">
                <h2
                  class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent"
                >
                  {{ project.title }}
                </h2>

                <!-- Project Meta Information -->
                <div class="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                  <div class="flex items-center">
                    <svg
                      class="w-4 h-4 mr-2 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
                      />
                    </svg>
                    <span>{{ project.year }}</span>
                  </div>
                  <div class="flex items-center">
                    <svg
                      class="w-4 h-4 mr-2 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      />
                    </svg>
                    <span>{{ project.duration }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Content -->
            <div class="px-8 pb-8 space-y-6">
              <!-- Description -->
              <div>
                <h4
                  class="text-lg font-semibold text-white mb-3 flex items-center"
                >
                  <div class="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                  Overview
                </h4>
                <p class="text-gray-300 leading-relaxed">
                  {{ project.fullDescription }}
                </p>
              </div>

              <!-- Features -->
              <div v-if="project.features?.length">
                <h4
                  class="text-lg font-semibold text-white mb-3 flex items-center"
                >
                  <div class="w-2 h-2 bg-teal-400 rounded-full mr-3" />
                  Key Features
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="(feature, index) in project.features"
                    :key="index"
                    class="flex items-start space-x-3 text-gray-300"
                  >
                    <div
                      class="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"
                    />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <!-- Challenges -->
              <div v-if="project.challenges?.length">
                <h4
                  class="text-lg font-semibold text-white mb-3 flex items-center"
                >
                  <div class="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                  Technical Challenges
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="(challenge, index) in project.challenges"
                    :key="index"
                    class="flex items-start space-x-3 text-gray-300"
                  >
                    <div
                      class="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"
                    />
                    <span>{{ challenge }}</span>
                  </li>
                </ul>
              </div>

              <!-- Technologies -->
              <div v-if="project.technologies?.length">
                <h4
                  class="text-lg font-semibold text-white mb-3 flex items-center"
                >
                  <div class="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  Technologies Used
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600/50 rounded-lg text-xs text-gray-300 font-medium hover:border-emerald-400/50 hover:text-emerald-300 transition-all duration-300 backdrop-blur-sm"
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
import type { Project } from "../projectsData.ts";

// ===============================
// PROPS & EMITS INTERFACES
// ===============================
interface Props {
  project: Project | null; // Project object to display
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

// ===============================
// LIFECYCLE & WATCHERS
// ===============================

/**
 * Watch for modal open/close to manage focus and body scroll
 * The scroll position management is now handled by the parent component
 * ProjectsGrid.vue which preserves scroll position better
 */
watch(
  () => props.isOpen,
  async (newValue) => {
    if (newValue) {
      // The scroll position management is now handled by the parent component
      // ProjectsGrid.vue which preserves scroll position better
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
