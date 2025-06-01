<!--
  =====================================================
  CERTIFICATIONS GRID - Interactive Achievements Grid
  =====================================================
  
  Main grid component featuring:
  - Responsive grid layout (1-3 columns)
  - Interactive certification cards with glassmorphism
  - Status indicators (completed/in-progress)
  - Hover animations and visual feedback
  - Modal system for detailed information
  - Institution badges and skill tags
  - Accessibility support (keyboard navigation, ARIA)
-->

<template>
  <div class="relative">
    <!-- Certifications Grid Container -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
    >
      <!-- Individual Certification Cards -->
      <div
        v-for="cert in certifications"
        :key="cert.id"
        @click="openModal(cert)"
        @keydown.enter="openModal(cert)"
        @keydown.space.prevent="openModal(cert)"
        tabindex="0"
        role="button"
        :aria-label="`View details for ${cert.title} certification`"
        class="group relative bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-gray-500/50"
      >
        <!-- Status Indicator -->
        <div class="absolute top-4 right-4 flex items-center space-x-2">
          <div
            :class="[
              'w-3 h-3 rounded-full',
              cert.status === 'completed'
                ? 'bg-green-400 animate-pulse'
                : 'bg-yellow-400 animate-pulse',
            ]"
            style="animation-duration: 2s"
          ></div>
          <span
            :class="[
              'text-xs font-medium',
              cert.status === 'completed'
                ? 'text-green-400'
                : 'text-yellow-400',
            ]"
          >
            {{ cert.status === "completed" ? "Completed" : "In Progress" }}
          </span>
        </div>

        <!-- Certification Image -->
        <div class="mb-6 mt-2">
          <div class="relative w-24 h-24 mx-auto">
            <!-- Image Background with Gradient -->
            <div
              class="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/30 via-indigo-600/30 to-purple-700/30 backdrop-blur-xl shadow-xl transition-all duration-300"
            ></div>
            <!-- Certification Logo Image -->
            <img
              :src="cert.image"
              :alt="`${cert.title} certification logo`"
              class="relative w-full h-full object-cover rounded-xl filter brightness-95 group-hover:brightness-110 transition-all duration-300 p-1"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Certification Title -->
        <h3
          class="text-xl font-bold text-white mb-3 text-center transition-colors duration-300"
        >
          {{ cert.title }}
        </h3>

        <!-- Institution Badge -->
        <div v-if="cert.institution" class="text-center mb-4">
          <span
            class="inline-block bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30"
          >
            {{ cert.institution }}
          </span>
        </div>

        <!-- Description Preview -->
        <p
          class="text-gray-300 text-sm leading-relaxed text-center mb-4 line-clamp-3"
        >
          {{ cert.description.substring(0, 120)
          }}{{ cert.description.length > 120 ? "..." : "" }}
        </p>

        <!-- Skills Preview -->
        <div
          v-if="cert.skills && cert.skills.length > 0"
          class="flex flex-wrap justify-center gap-2 mb-4"
        >
          <span
            v-for="skill in cert.skills.slice(0, 3)"
            :key="skill"
            class="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-md border border-indigo-500/30"
          >
            {{ skill }}
          </span>
          <span
            v-if="cert.skills.length > 3"
            class="text-xs bg-gray-500/20 text-gray-400 px-2 py-1 rounded-md"
          >
            +{{ cert.skills.length - 3 }} more
          </span>
        </div>
      </div>
    </div>

    <!-- Modal Component -->
    <CertificationModal
      :certification="selectedCertification"
      :isOpen="isModalOpen"
      @close="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Certification } from "../certificationsData";
import CertificationModal from "./CertificationModal.vue";
import { useModalScroll } from "../../../composables/useModalScroll";

// ===============================
// COMPONENT PROPS
// ===============================
interface Props {
  certifications: Certification[];
}

defineProps<Props>();

// ===============================
// REACTIVE STATE
// ===============================
const selectedCertification = ref<Certification | null>(null);
const isModalOpen = ref(false);

// Modal scroll management
const { openModal: openModalScroll, closeModal: closeModalScroll } =
  useModalScroll();

// ===============================
// MODAL FUNCTIONS
// ===============================
const openModal = (certification: Certification) => {
  selectedCertification.value = certification;
  isModalOpen.value = true;
  openModalScroll(); // Use composable for scroll management
};

const closeModal = () => {
  isModalOpen.value = false;

  // Delay clearing certification to allow exit transition
  setTimeout(() => {
    selectedCertification.value = null;
  }, 300); // Match transition duration

  closeModalScroll(); // Use composable for scroll management
};

// ===============================
// KEYBOARD NAVIGATION
// ===============================
// Handle escape key to close modal
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && isModalOpen.value) {
    closeModal();
  }
};

// Add event listener when component mounts
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
  // Ensure body scroll is restored if component unmounts with modal open
  document.body.style.overflow = "unset";
});
</script>
