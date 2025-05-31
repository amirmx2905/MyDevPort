<!--
  =====================================================
  NAVIGATION BAR - Desktop & Mobile Navigation
  =====================================================
  
  KEYWORD INDEX:
  - Desktop Navigation: hidden md:block, nav sections
  - Mobile Navigation: hamburger menu, mobile dropdown
  - Menu State: isMobileMenuOpen, toggleMobileMenu
  - Smooth Scrolling: scrollToSection, navigation clicks
  - Responsive Design: breakpoints, mobile/desktop layouts
-->

<template>
  <nav class="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50">
    <!-- Desktop Navigation (768px+) -->
    <div
      class="hidden md:block bg-black/30 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 shadow-2xl"
    >
      <div class="flex items-center space-x-6">
        <a
          v-for="section in navSections"
          :key="section.id"
          :href="`#${section.id}`"
          class="text-white/70 hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105 px-3 py-1 rounded-full hover:bg-white/10 whitespace-nowrap"
          @click.prevent="handleDesktopNavClick(section.id)"
        >
          {{ section.name }}
        </a>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div class="md:hidden relative">
      <!-- Animated Hamburger Icon -->
      <button
        @click="toggleMobileMenu"
        class="bg-black/30 backdrop-blur-xl border border-white/20 rounded-full p-3 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/10 active:scale-95 focus:outline-none focus:ring-0 touch-manipulation relative z-[60]"
        :class="{ 'bg-white/10 scale-105': isMobileMenuOpen }"
        style="
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        "
      >
        <div
          class="w-6 h-6 flex flex-col justify-center items-center space-y-1"
        >
          <!-- Three lines that transform into X when opened -->
          <span
            class="block w-5 h-0.5 bg-white/70 transition-all duration-300"
            :class="{ 'rotate-45 translate-y-1.5': isMobileMenuOpen }"
          ></span>
          <span
            class="block w-5 h-0.5 bg-white/70 transition-all duration-300"
            :class="{ 'opacity-0': isMobileMenuOpen }"
          ></span>
          <span
            class="block w-5 h-0.5 bg-white/70 transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-1.5': isMobileMenuOpen }"
          ></span>
        </div>
      </button>

      <!-- Dropdown Mobile Menu with Smooth Transitions -->
      <Transition
        enter-active-class="transition-all duration-400 ease-out"
        enter-from-class="opacity-0 scale-90 -translate-y-4"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-90 -translate-y-4"
      >
        <div
          v-if="isMobileMenuOpen"
          class="absolute top-16 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden drop-shadow-xl z-[55] min-w-[240px]"
        >
          <div class="py-3 text-center">
            <a
              v-for="section in navSections"
              :key="section.id"
              :href="`#${section.id}`"
              class="block text-white/70 hover:text-white text-base font-medium transition-all duration-300 px-8 py-4 hover:bg-white/10 hover:translate-x-1 active:bg-white/20 active:scale-95 touch-manipulation"
              style="
                -webkit-tap-highlight-color: transparent;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                user-select: none;
              "
              @click="handleMobileNavClick(section.id)"
            >
              {{ section.name }}
            </a>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Global Mobile Menu Backdrop (Outside main nav) -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-400 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          @click="closeMobileMenu"
          @touchstart.passive="closeMobileMenu"
        ></div>
      </Transition>
    </Teleport>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// ===============================
// PROPS & EMITS
// ===============================

interface NavSection {
  id: string;
  name: string;
}

defineProps<{
  navSections: NavSection[];
}>();

const emit = defineEmits<{
  navigate: [sectionId: string];
}>();

// ===============================
// REACTIVE STATE
// ===============================

const isMobileMenuOpen = ref(false); // Mobile navigation menu state

// ===============================
// MOBILE MENU MANAGEMENT
// ===============================

// Toggle mobile navigation menu state or close if already open
const toggleMobileMenu = () => {
  // If menu is open, always close it (better UX for the X button)
  if (isMobileMenuOpen.value) {
    closeMobileMenu();
  } else {
    isMobileMenuOpen.value = true;
  }
};

// Close mobile navigation menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Handle keyboard events (Escape key to close menu)
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && isMobileMenuOpen.value) {
    closeMobileMenu();
  }
};

// ===============================
// NAVIGATION HANDLERS
// ===============================

// Handle desktop navigation clicks
const handleDesktopNavClick = (sectionId: string) => {
  // Emit navigation event to parent component
  emit("navigate", sectionId);
};

// Handle mobile navigation clicks with menu management
const handleMobileNavClick = (sectionId: string) => {
  // Emit navigation immediately for instant response
  emit("navigate", sectionId);

  // Close menu after emitting (the navigation will start immediately)
  closeMobileMenu();
};

// ===============================
// VUE LIFECYCLE HOOKS
// ===============================

// Component mount: Add keyboard listener
onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

// Component unmount: Clean up keyboard listener
onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>
