<!--
  =====================================================
  PROFILE PHOTO COMPONENT - Responsive Image Display
  =====================================================
  
  KEYWORD INDEX:
  - Responsive Design: mobile stacked, desktop split-screen
  - Decorative Effects: animated rings, glow, gradient overlays
  - Hover Effects: scale transform, border animation
  - Profile Image: WebP format, multiple sizes
  - Animation Effects: pulse, spin, gradient rotation
  - Layout: mobile center, desktop right-side positioning
-->

<template>
  <!-- Mobile Layout: Centered with smaller size -->
  <div v-if="isMobile" class="mb-8">
    <div class="relative inline-block">
      <!-- Animated decorative ring -->
      <div
        class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-sm animate-pulse"
      ></div>

      <!-- Profile photo -->
      <img
        :src="imageSrc"
        :alt="altText"
        class="relative w-50 h-50 rounded-full border-4 border-white/30 shadow-2xl hover:scale-105 transition-all duration-500 hover:border-white/50"
      />

      <!-- Subtle glow effect -->
      <div
        class="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"
      ></div>
    </div>
  </div>

  <!-- Desktop Layout: Right side with larger size and enhanced effects -->
  <div v-else class="w-1/2 flex items-center justify-center pl-8">
    <div class="relative">
      <!-- Enhanced decorative rings with multiple layers -->
      <div
        class="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 blur-md animate-pulse"
      ></div>
      <div
        class="absolute -inset-2 rounded-full bg-gradient-to-r from-white/10 to-transparent animate-spin"
        style="animation-duration: 8s"
      ></div>

      <!-- Profile photo with responsive sizing -->
      <img
        :src="imageSrc"
        :alt="altText"
        class="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-white/30 shadow-2xl hover:scale-105 transition-all duration-500 hover:border-white/50 hover:shadow-blue-400/20"
      />

      <!-- Multiple subtle overlay effects -->
      <div
        class="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"
      ></div>
      <div
        class="absolute inset-0 rounded-full bg-gradient-to-bl from-transparent to-blue-400/5 pointer-events-none"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

// ===============================
// PROPS
// ===============================

interface Props {
  imageSrc?: string;
  altText?: string;
  isMobile?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  imageSrc: "/images/profile/photo.webp",
  altText: "Profile Photo",
  isMobile: false,
});

// ===============================
// COMPUTED PROPERTIES
// ===============================

// Reactive image source with fallback
const imageSrc = computed(() => props.imageSrc);

// Reactive alt text for accessibility
const altText = computed(() => props.altText);
</script>
