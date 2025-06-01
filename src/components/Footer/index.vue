<!--
  FOOTER COMPONENT - Modern Dark Design (Symmetric Layout)
  KEYWORD INDEX:
  - Footer Container: gradient background, header-matching design
  - Particle Effects: subtle floating animation, visual consistency
  - Brand Section: elegant logo, professional identity
  - Combined Navigation & Social: symmetric two-column layout
  - Navigation Links: smooth scrolling navigation
  - Social Connect: modern icons, interactive animations
  - Technologies: portfolio stack display
  - Copyright: minimalist bottom section
  - Responsive Design: mobile/desktop adaptive layout
  - Visual Effects: glow elements, gradient accents
-->

<script setup lang="ts">
import { computed } from "vue";
import BrandInfo from "./subcomponents/BrandInfo.vue";
import NavigationLinks from "./subcomponents/NavigationLinks.vue";
import SocialLinks from "./subcomponents/SocialLinks.vue";
import { useSmoothScroll } from "../../composables/useSmoothScroll";

// Get current year for copyright
const currentYear = computed(() => new Date().getFullYear());

// Setup smooth scroll functionality
const { scrollToTop } = useSmoothScroll();

// Handle back to top functionality
const handleBackToTop = (event: Event) => {
  event.preventDefault();
  scrollToTop(); // Scroll to the very top of the page
};
</script>

<template>
  <!-- Main Footer Container with Header-matching gradient -->
  <footer
    class="relative bg-gradient-to-t from-black via-gray-900 to-gray-800 overflow-hidden"
  >
    <!-- Minimal decorative particles -->
    <div class="absolute inset-0 opacity-20">
      <!-- Reduced floating particles -->
      <div
        v-for="i in 4"
        :key="i"
        class="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
        :style="{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 3 + 's',
          animationDuration: 3 + Math.random() * 2 + 's',
        }"
      ></div>
    </div>

    <!-- Subtle ambient light effects -->
    <div class="absolute inset-0">
      <!-- Single centered ambient glow -->
      <div
        class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"
      ></div>
    </div>

    <!-- Elegant top border -->
    <div
      class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
    ></div>

    <!-- Footer Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 py-8">
      <!-- Main Content Grid - Symmetric Two Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Brand Section -->
        <div>
          <BrandInfo />
        </div>

        <!-- Combined Navigation & Social Section -->
        <div class="space-y-8">
          <!-- Navigation Section -->
          <div>
            <h4
              class="text-sm font-medium text-white mb-4 flex items-center max-[500px]:justify-center"
            >
              <div class="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
              Navigation
            </h4>
            <NavigationLinks />
          </div>

          <!-- Social & Technologies Section -->
          <div>
            <!-- Connect Header -->
            <h4
              class="text-sm font-medium text-white mb-4 flex items-center max-[500px]:justify-center"
            >
              <div class="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
              Connect
            </h4>

            <!-- Social Links and Technologies Row - Desktop -->
            <div class="hidden min-[501px]:flex justify-between items-center">
              <!-- Social Links -->
              <div>
                <SocialLinks />
              </div>

              <!-- Technologies with inline label -->
              <div class="text-right">
                <div class="text-xs text-gray-400 mb-2">Built with</div>
                <div class="flex flex-wrap gap-2 justify-end max-w-xs">
                  <!-- Vue.js -->
                  <button
                    class="flex items-center text-xs text-gray-400 hover:text-green-400 transition-all duration-200 px-2 py-1 rounded-md border border-gray-700/50 hover:border-green-400/30 bg-gray-800/30 hover:bg-green-400/5"
                  >
                    <svg
                      class="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
                      />
                    </svg>
                    <span>Vue</span>
                  </button>

                  <!-- TypeScript -->
                  <button
                    class="flex items-center text-xs text-gray-400 hover:text-blue-400 transition-all duration-200 px-2 py-1 rounded-md border border-gray-700/50 hover:border-blue-400/30 bg-gray-800/30 hover:bg-blue-400/5"
                  >
                    <svg
                      class="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
                      />
                    </svg>
                    <span>TypeScript</span>
                  </button>

                  <!-- Vite -->
                  <button
                    class="flex items-center text-xs text-gray-400 hover:text-purple-400 transition-all duration-200 px-2 py-1 rounded-md border border-gray-700/50 hover:border-purple-400/30 bg-gray-800/30 hover:bg-purple-400/5"
                  >
                    <svg
                      class="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355L8.572 14.25a.306.306 0 0 1-.286-.506l-.002-.002z"
                      />
                    </svg>
                    <span>Vite</span>
                  </button>

                  <!-- Tailwind CSS -->
                  <button
                    class="flex items-center text-xs text-gray-400 hover:text-cyan-400 transition-all duration-200 px-2 py-1 rounded-md border border-gray-700/50 hover:border-cyan-400/30 bg-gray-800/30 hover:bg-cyan-400/5"
                  >
                    <svg
                      class="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                      />
                    </svg>
                    <span>Tailwind</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Mobile Layout - Social and Technologies stacked -->
            <div class="max-[500px]:block min-[501px]:hidden space-y-4">
              <!-- Social Links -->
              <div class="flex justify-center">
                <SocialLinks />
              </div>

              <!-- Technologies Section -->
              <div class="text-center">
                <div class="text-xs text-gray-400 mb-3">Built with</div>
                <div class="flex flex-wrap gap-2 justify-center">
                  <!-- Vue.js -->
                  <button
                    class="flex items-center text-xs text-gray-400 hover:text-green-400 transition-all duration-200 px-2 py-1 rounded-md border border-gray-700/50 hover:border-green-400/30 bg-gray-800/30 hover:bg-green-400/5"
                  >
                    <svg
                      class="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
                      />
                    </svg>
                    <span>Vue</span>
                  </button>

                  <!-- TypeScript -->
                  <button
                    class="flex items-center text-xs text-gray-400 hover:text-blue-400 transition-all duration-200 px-2 py-1 rounded-md border border-gray-700/50 hover:border-blue-400/30 bg-gray-800/30 hover:bg-blue-400/5"
                  >
                    <svg
                      class="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
                      />
                    </svg>
                    <span>TypeScript</span>
                  </button>

                  <!-- Vite -->
                  <button
                    class="flex items-center text-xs text-gray-400 hover:text-purple-400 transition-all duration-200 px-2 py-1 rounded-md border border-gray-700/50 hover:border-purple-400/30 bg-gray-800/30 hover:bg-purple-400/5"
                  >
                    <svg
                      class="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355L8.572 14.25a.306.306 0 0 1-.286-.506l-.002-.002z"
                      />
                    </svg>
                    <span>Vite</span>
                  </button>

                  <!-- Tailwind CSS -->
                  <button
                    class="flex items-center text-xs text-gray-400 hover:text-cyan-400 transition-all duration-200 px-2 py-1 rounded-md border border-gray-700/50 hover:border-cyan-400/30 bg-gray-800/30 hover:bg-cyan-400/5"
                  >
                    <svg
                      class="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                      />
                    </svg>
                    <span>Tailwind</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Minimal separator -->
      <div class="flex justify-center my-6">
        <div
          class="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        ></div>
      </div>

      <!-- Compact Footer Bottom -->
      <div
        class="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-xs text-gray-400"
      >
        <!-- Copyright -->
        <div class="flex items-center">
          <span>Copyright © {{ currentYear }} Amir Flores</span>
        </div>

        <!-- Back to top -->
        <button
          @click="handleBackToTop"
          class="mt-4 md:mt-0 flex items-center px-4 py-2 text-gray-400 hover:text-white transition-all duration-200 group cursor-pointer relative border border-transparent bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-blue-500/20 hover:to-gray-700/50 rounded-lg backdrop-blur-sm"
        >
          <span class="mr-2 text-xs">Back to top</span>
          <svg
            class="w-3 h-3 transform group-hover:-translate-y-0.5 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
          <!-- Subtle border glow on hover -->
          <div
            class="absolute inset-0 rounded-lg border border-white/10 group-hover:border-blue-400/30 transition-all duration-200 pointer-events-none"
          ></div>
        </button>
      </div>
    </div>

    <!-- Minimal bottom accent -->
    <div
      class="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
    ></div>
  </footer>
</template>
