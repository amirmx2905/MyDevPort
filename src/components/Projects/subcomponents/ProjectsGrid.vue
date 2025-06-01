<!--
  =====================================================
  PROJECTS GRID COMPONENT
  =====================================================
  
  Interactive grid displaying project portfolio with filtering capabilities.
  Features responsive layout, category filtering, and modal integration.
  
  Design Features:
  - Responsive grid (1-3 columns based on screen size)
  - Category filter buttons with active states
  - Project cards with glassmorphism styling
  - Hover animations and focus states
  - Modal system for detailed project views
  
  Functionality:
  - Category filtering (All, Web, Mobile, Other)
  - Click to open detailed project modal
  - Keyboard navigation support
  - Smooth transitions and animations
-->

<template>
  <div class="max-w-6xl mx-auto relative">
    <!-- ===============================
         CATEGORY FILTER BUTTONS - DESKTOP
         =============================== -->
    <div class="hidden md:flex flex-wrap justify-center gap-4 mb-12">
      <button
        v-for="category in visibleCategories"
        :key="category.value"
        @click="changeCategory(category.value)"
        class="px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border cursor-pointer"
        :class="
          selectedCategory === category.value
            ? 'bg-gradient-to-r from-emerald-500/30 to-teal-500/30 border-emerald-400/50 text-emerald-300 shadow-lg shadow-emerald-500/20'
            : 'bg-gray-800/40 border-gray-600/30 text-gray-400 hover:border-emerald-400/40 hover:text-emerald-300 hover:bg-emerald-500/10'
        "
      >
        {{ category.label }}
      </button>
    </div>

    <!-- ===============================
         CATEGORY NAVIGATION - MOBILE
         =============================== -->
    <div
      class="md:hidden mb-8 flex items-center justify-between bg-gradient-to-r from-gray-900/80 to-black/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4"
    >
      <!-- Previous Category Button -->
      <button
        @click="navigateCategory('prev')"
        class="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 border bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400/50 text-emerald-300 hover:from-emerald-500/30 hover:to-teal-500/30 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <!-- Current Category Display -->
      <div class="flex-1 text-center">
        <div class="text-sm text-gray-400 mb-1">Category</div>
        <div class="text-lg font-bold text-white transition-all duration-300">
          {{ selectedCategoryLabel }}
        </div>
        <div class="flex justify-center mt-2 space-x-1">
          <div
            v-for="(category, index) in visibleCategories"
            :key="category.value"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="
              index === currentCategoryIndex
                ? 'bg-emerald-400 scale-125'
                : 'bg-gray-600 hover:bg-gray-500'
            "
          ></div>
        </div>
      </div>

      <!-- Next Category Button -->
      <button
        @click="navigateCategory('next')"
        class="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 border bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400/50 text-emerald-300 hover:from-emerald-500/30 hover:to-teal-500/30 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
    </div>

    <!-- ===============================
         PROJECTS GRID
         =============================== -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px] pb-8 transition-all duration-300 ease-in-out"
      :class="{
        'opacity-0 translate-y-4': isTransitioning,
        'opacity-100 translate-y-0': !isTransitioning,
      }"
    >
      <div
        v-for="(project, index) in displayedProjects"
        :key="project.id"
        class="group cursor-pointer max-w-sm mx-auto w-full transition-all duration-300"
        :class="{
          'opacity-100 translate-y-0': !isTransitioning,
          'opacity-0 translate-y-4': isTransitioning,
        }"
        :style="{
          transitionDelay: isTransitioning ? '0ms' : `${index * 50}ms`,
        }"
        @click="openModal(project)"
      >
        <!-- Project Card -->
        <div
          class="relative bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-2xl border border-gray-700/50 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-emerald-400/30 h-[500px] flex flex-col"
          tabindex="0"
          @keydown.enter="openModal(project)"
          @keydown.space.prevent="openModal(project)"
        >
          <!-- Project Image -->
          <div class="relative h-48 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <!-- Image Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"
            ></div>
          </div>

          <!-- Card Content -->
          <div class="p-6 flex-1 flex flex-col">
            <!-- Project Title -->
            <h3
              class="text-xl font-bold text-white mb-3 transition-colors duration-300"
            >
              {{ project.title }}
            </h3>

            <!-- Project Description -->
            <p class="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
              {{ project.description }}
            </p>

            <!-- Technologies Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies.slice(0, 3)"
                :key="tech"
                class="px-2 py-1 bg-gradient-to-r from-gray-800/60 to-gray-700/60 border border-gray-600/40 rounded-md text-xs text-gray-300 font-medium"
              >
                {{ tech }}
              </span>
              <span
                v-if="project.technologies.length > 3"
                class="px-2 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-md text-xs text-emerald-300 font-medium"
              >
                +{{ project.technologies.length - 3 }} more
              </span>
            </div>

            <!-- Project Year -->
            <div class="flex items-center text-gray-500 text-sm mt-auto">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
                />
              </svg>
              {{ project.year }}
            </div>
          </div>
          <!-- Decorative Elements -->
          <div
            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-600/10 to-transparent rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500"
          ></div>
        </div>
      </div>
    </div>

    <!-- ===============================
         LOAD MORE BUTTON
         =============================== -->
    <div v-if="hasMoreProjects" class="flex justify-center mt-16">
      <button
        ref="projectLoadMoreButton"
        @click="loadMoreProjects"
        class="group relative px-10 py-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30 border border-emerald-400/50 hover:border-emerald-400/70 text-emerald-300 font-semibold rounded-2xl transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-emerald-500/25 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-3 overflow-hidden"
      >
        <!-- Background Animation -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
        <span class="relative z-10">Load More Projects</span>

        <!-- Shine Effect -->
        <div
          class="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        ></div>
      </button>
    </div>

    <!-- ===============================
         PROJECT MODAL COMPONENT
         =============================== -->
    <ProjectModal
      :project="selectedProject"
      :isOpen="isModalOpen"
      @close="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
// ===============================
// IMPORTS
// ===============================
import { ref, computed, nextTick, onMounted, onUnmounted } from "vue";
import type { Project } from "../projectsData.ts";
import { projectCategories } from "../projectsData.ts";
import ProjectModal from "./ProjectModal.vue";
import { useModalScroll } from "../../../composables/useModalScroll";

// ===============================
// PROPS & REACTIVE DATA
// ===============================
const props = defineProps<{
  projects: Project[]; // Array of project data from parent component
}>();

// Filter and modal state management
const selectedCategory = ref("all"); // Currently selected filter category
const selectedProject = ref<Project | null>(null); // Currently selected project for modal
const isModalOpen = ref(false); // Modal visibility state
const projectLoadMoreButton = ref<HTMLElement | null>(null);

// Animation state
const isTransitioning = ref(false); // Animation transition state

// Pagination state for projects
const projectsPerPage = 6;
const currentProjectPage = ref(1);

// Modal scroll management
const { openModal: openModalScroll, closeModal: closeModalScroll } =
  useModalScroll();

// Categories for filtering
const categories = projectCategories;

// ===============================
// COMPUTED PROPERTIES
// ===============================

/**
 * Visible categories (excluding 'Other Apps' for now)
 * Filters out the desktop category since there are no projects in that category yet
 */
const visibleCategories = computed(() => {
  return categories.filter((category) => category.value !== "desktop");
});

/**
 * Filtered projects based on selected category
 * Returns all projects if 'all' is selected, otherwise filters by category
 */
const filteredProjects = computed(() => {
  if (selectedCategory.value === "all") {
    return props.projects;
  }
  return props.projects.filter(
    (project) => project.category === selectedCategory.value
  );
});

/**
 * Projects to display based on pagination
 */
const displayedProjects = computed(() => {
  const totalItems = currentProjectPage.value * projectsPerPage;
  return filteredProjects.value.slice(0, totalItems);
});

/**
 * Check if there are more projects to load
 */
const hasMoreProjects = computed(() => {
  return filteredProjects.value.length > displayedProjects.value.length;
});

/**
 * Gets the current category index for navigation
 */
const currentCategoryIndex = computed(() => {
  return visibleCategories.value.findIndex(
    (cat) => cat.value === selectedCategory.value
  );
});

/**
 * Gets the currently selected category label
 */
const selectedCategoryLabel = computed(() => {
  const category = visibleCategories.value.find(
    (cat) => cat.value === selectedCategory.value
  );
  return category ? category.label : "All Projects";
});

// ===============================
// HELPER METHODS
// ===============================

/**
 * Handles category change with fade animation
 */
const changeCategory = async (categoryValue: string) => {
  if (categoryValue === selectedCategory.value) return;

  // Start fade out animation
  isTransitioning.value = true;

  // Wait for fade out to complete
  await new Promise((resolve) => setTimeout(resolve, 150));

  // Change category
  selectedCategory.value = categoryValue;
  currentProjectPage.value = 1; // Reset pagination when changing category

  // Wait for DOM update
  await nextTick();

  // Wait a bit more for smooth transition
  await new Promise((resolve) => setTimeout(resolve, 50));

  // Start fade in animation
  isTransitioning.value = false;
};

/**
 * Navigates to the next or previous category (circular navigation)
 */
const navigateCategory = async (direction: "prev" | "next") => {
  const currentIndex = currentCategoryIndex.value;
  const totalCategories = visibleCategories.value.length;
  let newIndex: number;

  if (direction === "prev") {
    // Si estamos en el primer elemento (0), ir al último
    newIndex = currentIndex === 0 ? totalCategories - 1 : currentIndex - 1;
  } else {
    // Si estamos en el último elemento, ir al primero (0)
    newIndex = currentIndex === totalCategories - 1 ? 0 : currentIndex + 1;
  }

  const newCategory = visibleCategories.value[newIndex];
  await changeCategory(newCategory.value);
};

/**
 * Load more projects with smooth scroll to new items
 */
const loadMoreProjects = () => {
  const previousCount = displayedProjects.value.length;
  currentProjectPage.value++;

  // Wait for Vue to update the DOM
  nextTick(() => {
    setTimeout(() => {
      // Find the projects grid container specifically
      const projectsGrid = document.querySelector(
        ".grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.gap-8.min-h-\\[400px\\].pb-8"
      );

      if (projectsGrid) {
        const allProjectCards = Array.from(projectsGrid.children);
        const firstNewProject = allProjectCards[previousCount] as HTMLElement;

        if (firstNewProject) {
          // Calculate the optimal scroll position
          const elementRect = firstNewProject.getBoundingClientRect();
          const currentScrollY = window.scrollY;
          const offsetFromTop = 120; // Space from top of viewport

          const targetScrollY =
            currentScrollY + elementRect.top - offsetFromTop;

          // Smooth scroll to the new projects
          window.scrollTo({
            top: targetScrollY,
            behavior: "smooth",
          });
        }
      }
    }, 150); // Allow time for DOM to update and animations to settle
  });
};

/**
 * Handles keyboard navigation for mobile
 */
const handleKeyPress = (event: KeyboardEvent) => {
  // Only handle keyboard navigation on mobile screens
  if (window.innerWidth >= 768) return;

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    navigateCategory("prev");
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    navigateCategory("next");
  }
};

// ===============================
// LIFECYCLE HOOKS
// ===============================

onMounted(() => {
  document.addEventListener("keydown", handleKeyPress);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyPress);
});

// ===============================
// MODAL MANAGEMENT METHODS
// ===============================

/**
 * Opens the project modal with selected project data
 * Also prevents background scrolling when modal is open
 */
const openModal = (project: Project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
  openModalScroll(); // Use composable for scroll management
};

/**
 * Closes the project modal and resets state
 * Restores background scrolling capability with smooth mobile handling
 */
const closeModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
  closeModalScroll(); // Use composable for scroll management
};
</script>
