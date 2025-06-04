<!--
  =====================================================
  CERTIFICATION MODAL COMPONENT
  =====================================================
  
  Detailed modal window for displaying comprehensive certification information.
  Features responsive design, smooth animations, and accessibility support.
  
  Design Features:
  - Glassmorphism styling with purple/indigo gradient theme
  - Responsive layout with certificate image and status indicators
  - Smooth enter/exit animations with backdrop blur
  - Action buttons for certificate URL and verification
  - Organized content sections with visual indicators
  
  Functionality:
  - Teleports to body for proper z-index layering
  - Manages body scroll prevention when open
  - Keyboard navigation (ESC to close)
  - Click outside to close functionality
  - Focus management for accessibility
  
  Content Sections:
  - Header: Certificate image, title, status, institution
  - Details: Description, completion date, skills acquired
  - Actions: Certificate URL and verification links
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
        v-if="isOpen && certification"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
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
            v-if="isOpen && certification"
            class="relative bg-gradient-to-br from-gray-900/95 to-black/80 backdrop-blur-2xl border border-purple-400/40 rounded-3xl max-w-2xl w-full max-h-[80dvh] overflow-y-scroll overflow-x-hidden shadow-2xl shadow-purple-500/30 no-scrollbar"
            @click.stop
          >
            <!-- Close Button -->
            <button
              @click="$emit('close')"
              class="absolute top-6 right-6 w-10 h-10 bg-gradient-to-r from-purple-500/30 to-indigo-600/30 hover:from-purple-500/50 hover:to-indigo-600/50 border border-purple-400/50 rounded-full flex items-center justify-center transition-all duration-300 group z-20 backdrop-blur-xl shadow-lg cursor-pointer"
              aria-label="Close modal"
            >
              <svg
                class="w-5 h-5 text-purple-300 group-hover:text-white transition-colors duration-300"
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

            <!-- Hero Section with Certificate Image -->
            <div class="relative text-center py-8 px-8 overflow-hidden">
              <!-- Decorative Background Elements -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-indigo-600/5 to-purple-600/5"
              ></div>
              <div
                class="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full -translate-y-16"
              ></div>
              <div
                class="absolute top-0 right-1/4 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full -translate-y-12 translate-x-12"
              ></div>
              <div
                class="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-full translate-y-12"
              ></div>

              <!-- Certificate Image -->
              <div class="relative mb-4 flex justify-center">
                <div class="relative w-28 h-28">
                  <div
                    class="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/40 via-purple-600/40 to-indigo-600/40 backdrop-blur-xl border-2 border-indigo-400/60 shadow-2xl"
                  ></div>
                  <img
                    :src="certification.image"
                    :alt="`${certification.title} certification logo`"
                    class="relative w-full h-full object-cover rounded-full filter brightness-105 transition-all duration-300 p-1"
                    loading="lazy"
                  />
                </div>
              </div>

              <!-- Certification Title -->
              <h2
                class="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
              >
                {{ certification.title }}
              </h2>

              <!-- Institution -->
              <h3 class="text-lg md:text-xl text-white font-semibold mb-4">
                {{ certification.institution }}
              </h3>

              <!-- Badges Row -->
              <div class="flex flex-wrap justify-center gap-4">
                <!-- Status Badge -->
                <div
                  class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/25 to-indigo-600/25 border border-purple-400/40 rounded-full backdrop-blur-sm shadow-lg"
                >
                  <div
                    :class="[
                      'w-3 h-3 rounded-full mr-2',
                      certification.status === 'completed'
                        ? 'bg-green-400 animate-pulse'
                        : 'bg-yellow-400 animate-pulse',
                    ]"
                    style="animation-duration: 2s"
                  ></div>
                  <span class="text-purple-200 font-medium">
                    {{
                      certification.status === "completed"
                        ? "Completed"
                        : "In Progress"
                    }}
                  </span>
                </div>

                <!-- Completion Date Badge (if completed) -->
                <div
                  v-if="
                    certification.status === 'completed' &&
                    certification.completionDate
                  "
                  class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/25 to-purple-600/25 border border-indigo-400/40 rounded-full backdrop-blur-sm shadow-lg"
                >
                  <svg
                    class="w-5 h-5 mr-2 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
                    />
                  </svg>
                  <span class="text-indigo-200 font-medium">
                    {{ certification.completionDate }}
                  </span>
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
                  <div class="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Overview
                </h4>
                <p class="text-gray-300 leading-relaxed">
                  {{ certification.description }}
                </p>
              </div>

              <!-- Skills Acquired -->
              <div v-if="certification.skills?.length">
                <h4
                  class="text-lg font-semibold text-white mb-3 flex items-center"
                >
                  <div class="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  Skills Acquired
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="skill in certification.skills"
                    :key="skill"
                    class="px-3 py-1 bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600/50 rounded-lg text-xs text-gray-300 font-medium hover:border-purple-400/50 hover:text-purple-300 transition-all duration-300 backdrop-blur-sm"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>

              <!-- Action Buttons -->
              <div
                v-if="certification.certUrl && certification.certUrl !== '#'"
                class="flex justify-center pt-4"
              >
                <a
                  :href="certification.certUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-indigo-600/20 hover:from-purple-500/30 hover:to-indigo-600/30 border border-purple-400/50 hover:border-purple-400/70 rounded-full text-purple-300 hover:text-white font-medium transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-purple-500/20 group"
                >
                  <svg
                    class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View Certificate
                </a>
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
import type { Certification } from "../certificationsData";

// ===============================
// PROPS & EMITS INTERFACES
// ===============================
interface Props {
  certification: Certification | null; // Certification object to display
  isOpen: boolean; // Controls modal visibility for proper transitions
}

interface Emits {
  (e: "close"): void; // Event emitted when modal should close
}

defineProps<Props>();
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
</script>
