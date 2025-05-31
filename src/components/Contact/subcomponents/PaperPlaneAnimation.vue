<!--
  =====================================================
  PAPER PLANE ANIMATION COMPONENT
  =====================================================
  
  Flying paper plane animation that triggers on form submission
-->

<template>
  <!-- Flying Paper Plane Animation -->
  <div
    v-if="show"
    class="absolute z-50 bottom-20 left-1/2 transform -translate-x-1/2 pointer-events-none"
  >
    <svg
      class="w-6 h-6 text-cyan-400 transition-all duration-[2000ms] ease-out"
      :class="
        show
          ? 'transform translate-x-96 -translate-y-96 rotate-45 opacity-0'
          : 'transform translate-x-0 translate-y-0 rotate-0 opacity-100'
      "
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  </div>
</template>

<script setup lang="ts">
// ===============================
// PROPS
// ===============================

interface Props {
  show: boolean;
}

defineProps<Props>();
</script>
