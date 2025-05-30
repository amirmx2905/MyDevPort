<!--
  =====================================================
  HEADER COMPONENT - Main Portfolio Landing Section (Refactored)
  =====================================================
  
  KEYWORD INDEX:
  - Component Architecture: modular subcomponents
  - InteractiveCanvas: particle system, mouse interaction
  - NavigationBar: desktop/mobile navigation, hamburger menu
  - TypingAnimation: dynamic text rotation, responsive
  - ProfilePhoto: responsive layout, decorative effects
  - ScrollIndicator: mobile particles, desktop mouse icon
  - SocialLinks: external links, hover animations
  - Device Detection: composable-based, cached detection
  - Smooth Scrolling: adaptive scrolling per device
  - Responsive Layout: mobile stacked, desktop split
-->

<template>
  <div
    class="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
  >
    <!-- Interactive Canvas Background with Particle System -->
    <InteractiveCanvas />

    <!-- Fixed Navigation Bar - Responsive Design -->
    <NavigationBar :nav-sections="navSections" @navigate="handleNavigation" />

    <!-- Main Content Container -->
    <div
      class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6"
    >
      <!-- Mobile Layout: Vertical Stack -->
      <div class="md:hidden text-center">
        <!-- Profile Photo Section - Mobile -->
        <ProfilePhoto :is-mobile="true" />

        <!-- Name and Social Links - Mobile -->
        <div class="mb-8">
          <h1 class="text-5xl text-white mb-6 select-none">
            <!-- Animated name with hover effects -->
            <span
              class="inline-block font-bold hover:scale-105 transition-transform duration-300 cursor-default"
            >
              Amir
            </span>
            <span
              class="text-white font-extralight inline-block hover:scale-105 transition-transform duration-300 cursor-default ml-4"
            >
              Flores
            </span>
          </h1>

          <!-- Social Media Icons - Mobile -->
          <SocialLinks :social-links="socialLinks" />
        </div>

        <!-- Decorative Separator Line - Mobile -->
        <div
          class="w-32 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mb-8 mx-auto"
        ></div>

        <!-- Dynamic Typing Animation - Mobile -->
        <TypingAnimation :texts="typingTexts" />
      </div>

      <!-- Desktop Layout - Split in half -->
      <div class="hidden md:flex w-full h-full">
        <!-- Left Half - Content centered -->
        <div class="w-1/2 flex flex-col items-center justify-center pr-8">
          <!-- Title Section - Desktop -->
          <div class="text-center mb-8">
            <h1 class="text-6xl lg:text-8xl text-white mb-6 select-none">
              <span
                class="inline-block font-bold hover:scale-105 transition-transform duration-300 cursor-default"
              >
                Amir
              </span>
              <span
                class="text-white font-extralight inline-block hover:scale-105 transition-transform duration-300 cursor-default ml-4"
              >
                Flores
              </span>
            </h1>

            <!-- Social Icons - Desktop -->
            <SocialLinks :social-links="socialLinks" />
          </div>

          <!-- Separator - Desktop -->
          <div
            class="w-32 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mb-8"
          ></div>

          <!-- Typing Animation - Desktop -->
          <TypingAnimation :texts="typingTexts" />
        </div>

        <!-- Right Half - Profile Photo centered -->
        <ProfilePhoto :is-mobile="false" />
      </div>

      <!-- Scroll Indicator -->
      <ScrollIndicator :visible="showScrollIndicator" :is-mobile="isMobile" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import InteractiveCanvas from "./InteractiveCanvas.vue";
import NavigationBar from "./NavigationBar.vue";
import TypingAnimation from "./TypingAnimation.vue";
import ProfilePhoto from "./ProfilePhoto.vue";
import ScrollIndicator from "./ScrollIndicator.vue";
import SocialLinks from "./SocialLinks.vue";
import { useDeviceDetection } from "../../composables/useDeviceDetection";
import { useSmoothScroll } from "../../composables/useSmoothScroll";

// ===============================
// COMPOSABLES
// ===============================

const { isMobile } = useDeviceDetection();
const { scrollToSection } = useSmoothScroll();

// ===============================
// REACTIVE STATE
// ===============================

const showScrollIndicator = ref(false); // Controls scroll indicator visibility

// ===============================
// CONFIGURATION DATA
// ===============================

// Navigation sections configuration for menu generation
const navSections = [
  { id: "about", name: "About Me" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "certifications", name: "Certifications" },
  { id: "contact", name: "Contact Me" },
];

// Social media links configuration
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/amir-sebasti%C3%A1n-flores-cardona-617556250/",
    icon: "/images/icons/iconLinkedin.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/amirmx2905",
    icon: "/images/icons/iconGithub.svg",
  },
];

// Typing animation text rotation
const typingTexts = [
  "Full Stack Developer",
  "Mobile App Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

// ===============================
// EVENT HANDLERS
// ===============================

// Handle navigation events from NavigationBar component
const handleNavigation = (sectionId: string) => {
  scrollToSection(sectionId);
};

// Handle scroll events to hide scroll indicator
const handleScroll = () => {
  // Hide scroll indicator after user scrolls down (reduced threshold for better responsiveness)
  if (window.scrollY > 10 && showScrollIndicator.value) {
    showScrollIndicator.value = false;
  }
};

// ===============================
// VUE LIFECYCLE HOOKS
// ===============================

// Component mount: Initialize all systems
onMounted(() => {
  // Add scroll listener for scroll indicator
  window.addEventListener("scroll", handleScroll);

  // Show scroll indicator after delay
  setTimeout(() => {
    if (window.scrollY <= 10) {
      // Only show if user hasn't scrolled yet
      showScrollIndicator.value = true;
    }
  }, 1000); // 1 second delay
});

// Component unmount: Clean up resources
onUnmounted(() => {
  // Remove event listeners to prevent memory leaks
  window.removeEventListener("scroll", handleScroll);
});
</script>
