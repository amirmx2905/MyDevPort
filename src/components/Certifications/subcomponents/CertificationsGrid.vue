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
        v-for="(cert, index) in displayedCertifications"
        :key="cert.id"
        @click="openModal(cert)"
        @keydown.enter="openModal(cert)"
        @keydown.space.prevent="openModal(cert)"
        tabindex="0"
        role="button"
        :aria-label="`View details for ${cert.title} certification`"
        class="group relative bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-2xl border border-gray-700/50 rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:scale-[1.03] shadow-2xl overflow-hidden focus:outline-none focus:ring-4 focus:ring-indigo-400/30"
        :class="{
          'opacity-0 translate-y-4': !animatedItems.has(cert.id),
          'opacity-100 translate-y-0': animatedItems.has(cert.id),
        }"
        :style="
          !animatedItems.has(cert.id)
            ? {
                transitionDelay: `${(index % certificationsPerPage) * 100}ms`,
                transitionProperty: 'opacity, transform',
                transitionDuration: '300ms',
              }
            : {}
        "
      >
        <!-- Decorative Background Elements -->
        <div
          class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full -translate-y-16 translate-x-16"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-full translate-y-12 -translate-x-12"
        ></div>

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
        <div class="flex justify-center mb-6">
          <div class="relative w-24 h-24">
            <!-- Logo Background with Gradient -->
            <div
              class="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 via-purple-600/30 to-indigo-700/30 backdrop-blur-xl border-2 border-indigo-400/50 shadow-xl"
            ></div>
            <!-- Certification Logo Image -->
            <img
              :src="cert.image"
              :alt="`${cert.title} certification logo`"
              class="relative w-full h-full object-cover rounded-full filter brightness-95 transition-all duration-300 p-1"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Certification Title -->
        <h3
          class="text-white font-bold text-2xl mb-2 text-center transition-colors duration-300"
        >
          {{ cert.title }}
        </h3>

        <!-- Institution Badge -->
        <div v-if="cert.institution" class="text-center mb-6">
          <div
            class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-400/30 rounded-full"
          >
            <!-- Institution Icon -->
            <svg
              class="w-4 h-4 mr-2 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
              />
            </svg>
            <!-- Institution Text -->
            <span class="text-indigo-300 text-sm font-medium">{{
              cert.institution
            }}</span>
          </div>
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
            class="px-2 py-1 bg-gradient-to-r from-gray-800/60 to-gray-700/60 border border-gray-600/40 rounded-md text-xs text-gray-300 font-medium"
          >
            {{ skill }}
          </span>
          <span
            v-if="cert.skills.length > 3"
            class="px-2 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-md text-xs text-indigo-300 font-medium"
          >
            +{{ cert.skills.length - 3 }} more
          </span>
        </div>
      </div>
    </div>

    <!-- ===============================
         LOAD MORE BUTTON
         =============================== -->
    <div v-if="hasMoreCertifications" class="flex justify-center mt-16">
      <button
        ref="certificationLoadMoreButton"
        @click="loadMoreCertifications"
        class="group relative px-10 py-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30 border border-indigo-400/50 hover:border-indigo-400/70 text-indigo-300 font-semibold rounded-2xl transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-indigo-500/25 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-3 overflow-hidden"
      >
        <!-- Background Animation -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>

        <!-- Icon -->
        <svg
          class="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:rotate-180"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>

        <!-- Text -->
        <span class="relative z-10">Load More Certifications</span>

        <!-- Shine Effect -->
        <div
          class="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        ></div>
      </button>
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
import { ref, computed, nextTick } from "vue";
import type { Certification } from "../certificationsData";
import CertificationModal from "./CertificationModal.vue";
import { useModalScroll } from "../../../composables/useModalScroll";

// ===============================
// COMPONENT PROPS
// ===============================
interface Props {
  certifications: Certification[];
}

const props = defineProps<Props>();

// ===============================
// REACTIVE STATE
// ===============================
const selectedCertification = ref<Certification | null>(null);
const isModalOpen = ref(false);
const certificationLoadMoreButton = ref<HTMLElement | null>(null);

// Pagination state for certifications
const certificationsPerPage = 6;
const currentCertificationPage = ref(1);

// Animation state for new items
const isLoadingMore = ref(false);
const animatedItems = ref(new Set<string>());

// ===============================
// COMPUTED PROPERTIES
// ===============================

/**
 * Certifications to display based on pagination
 */
const displayedCertifications = computed(() => {
  const totalItems = currentCertificationPage.value * certificationsPerPage;
  return props.certifications.slice(0, totalItems);
});

/**
 * Check if there are more certifications to load
 */
const hasMoreCertifications = computed(() => {
  return props.certifications.length > displayedCertifications.value.length;
});

// ===============================
// PAGINATION METHODS
// ===============================

/**
 * Load more certifications with smooth scroll to new items
 */
const loadMoreCertifications = () => {
  const previousCount = displayedCertifications.value.length;
  isLoadingMore.value = true;

  // Increment page
  currentCertificationPage.value++;

  // Wait for Vue to update the DOM
  nextTick(() => {
    // Get new certifications to animate
    const newCertifications =
      displayedCertifications.value.slice(previousCount);

    // Add new items to animated set with staggered timing
    newCertifications.forEach((cert, index) => {
      setTimeout(() => {
        animatedItems.value.add(cert.id);
      }, index * 100); // 100ms delay between each item
    });

    // Scroll to new items after animation starts
    setTimeout(() => {
      // Find the certifications grid container
      const certificationsGrid = document.querySelector(
        ".grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.gap-8.auto-rows-fr"
      );

      if (certificationsGrid) {
        const allCertificationCards = Array.from(certificationsGrid.children);
        const firstNewCertification = allCertificationCards[
          previousCount
        ] as HTMLElement;

        if (firstNewCertification) {
          // Calculate the optimal scroll position
          const elementRect = firstNewCertification.getBoundingClientRect();
          const currentScrollY = window.scrollY;
          const offsetFromTop = 120; // Space from top of viewport

          const targetScrollY =
            currentScrollY + elementRect.top - offsetFromTop;

          // Smooth scroll to the new certifications
          window.scrollTo({
            top: targetScrollY,
            behavior: "smooth",
          });
        }
      }

      isLoadingMore.value = false;
    }, 150); // Allow time for DOM to update and animations to settle
  });
};

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

  // Initialize first batch of certifications as animated
  nextTick(() => {
    displayedCertifications.value.forEach((cert) => {
      animatedItems.value.add(cert.id);
    });
  });
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
  // Ensure body scroll is restored if component unmounts with modal open
  document.body.style.overflow = "unset";
});
</script>
