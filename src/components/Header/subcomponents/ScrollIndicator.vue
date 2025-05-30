<!--
  =====================================================
  SCROLL INDICATOR COMPONENT - Scroll Down Animation
  =====================================================
  
  KEYWORD INDEX:
  - Scroll Indicator: scroll down prompt, visibility control
  - Mobile Design: floating particles, vertical trail
  - Desktop Design: mouse icon, scroll animation
  - Animation Effects: bounce, pulse, particles
  - Responsive: different styles per device
  - Visibility: show/hide based on scroll position
-->

<template>
  <div
    class="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out"
    :class="{
      'opacity-0 pointer-events-none translate-y-4': !visible,
      'opacity-100 translate-y-0': visible,
    }"
  >
    <div class="flex flex-col items-center text-white/60">
      <span class="text-sm mb-2 animate-pulse">Scroll down</span>

      <!-- Desktop: Mouse Icon with Scroll Animation -->
      <div
        v-if="!isMobile"
        class="relative w-6 h-10 border-2 border-white/60 rounded-full"
      >
        <div
          class="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white/60 rounded-full animate-pulse"
        ></div>
        <div
          class="absolute top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-white/40 rounded-full animate-ping"
        ></div>
      </div>

      <!-- Mobile: Floating Particles Trail -->
      <div v-else class="relative w-10 h-14 flex items-center justify-center">
        <!-- Vertical trail line -->
        <div
          class="absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2"
        >
          <div
            class="h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
          ></div>
        </div>

        <!-- Floating particles moving down -->
        <div class="relative w-full h-full">
          <!-- Main particles descending -->
          <div
            v-for="(particle, index) in mainParticles"
            :key="`main-${index}`"
            class="absolute left-1/2 transform -translate-x-1/2"
            :style="{ top: particle.top }"
          >
            <div :class="particle.class" :style="particle.style"></div>
          </div>

          <!-- Side floating particles -->
          <div
            v-for="(particle, index) in sideParticles"
            :key="`side-${index}`"
            class="absolute"
            :style="{
              top: particle.top,
              left: particle.left,
              right: particle.right,
            }"
          >
            <div :class="particle.class" :style="particle.style"></div>
          </div>

          <!-- Gentle arrow at bottom -->
          <div
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce"
            style="animation-duration: 1.5s; animation-delay: 0.8s"
          >
            <svg
              class="w-6 h-6 text-white/50"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";

// ===============================
// PROPS
// ===============================

interface Props {
  visible?: boolean;
  isMobile?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  visible: true,
  isMobile: false,
});

// ===============================
// COMPUTED PROPERTIES
// ===============================

// Use toRefs for proper reactivity with props
const { visible, isMobile } = toRefs(props);

// Main descending particles configuration
const mainParticles = computed(() => [
  {
    top: "0px",
    class: "w-1.5 h-1.5 bg-white/80 rounded-full animate-bounce",
    style: "animation-duration: 2s; animation-delay: 0s",
  },
  {
    top: "12px",
    class: "w-1 h-1 bg-white/60 rounded-full animate-bounce",
    style: "animation-duration: 2s; animation-delay: 0.3s",
  },
  {
    top: "24px",
    class: "w-0.5 h-0.5 bg-white/40 rounded-full animate-bounce",
    style: "animation-duration: 2s; animation-delay: 0.6s",
  },
]);

// Side floating particles configuration
const sideParticles = computed(() => [
  {
    top: "8px",
    left: "-4px",
    right: "auto",
    class: "w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse",
    style: "animation-duration: 3s; animation-delay: 0.2s",
  },
  {
    top: "16px",
    left: "auto",
    right: "-4px",
    class: "w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse",
    style: "animation-duration: 3s; animation-delay: 1s",
  },
  {
    top: "28px",
    left: "-2px",
    right: "auto",
    class: "w-0.5 h-0.5 bg-white/25 rounded-full animate-pulse",
    style: "animation-duration: 3s; animation-delay: 1.5s",
  },
  {
    top: "20px",
    left: "auto",
    right: "-2px",
    class: "w-0.5 h-0.5 bg-white/25 rounded-full animate-pulse",
    style: "animation-duration: 3s; animation-delay: 2s",
  },
]);
</script>
