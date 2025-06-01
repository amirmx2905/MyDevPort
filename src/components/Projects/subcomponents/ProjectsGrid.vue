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
         CATEGORY FILTER BUTTONS
         =============================== -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <button
        v-for="category in visibleCategories"
        :key="category.value"
        @click="selectedCategory = category.value"
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
         PROJECTS GRID
         =============================== -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px] transition-all duration-300 ease-in-out pb-8"
    >
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="group cursor-pointer max-w-sm mx-auto w-full opacity-100 transition-opacity duration-300"
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
import { ref, computed } from "vue";
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

// ===============================
// HELPER METHODS
// ===============================

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
