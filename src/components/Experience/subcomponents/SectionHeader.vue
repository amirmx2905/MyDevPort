<!--
  =====================================================
  EXPERIENCE SECTION HEADER COMPONENT
  =====================================================
  
  Header component for the Experience section featuring gradient typography
  and decorative elements that match the overall design theme.
  
  Design Features:
  - Large responsive typography with gradient text effects
  - Decorative floating orbs with subtle animations
  - Pink/purple/indigo color scheme consistency
  - Responsive text sizing (4xl → 5xl → 7xl)
  - Subtle gradient accent line below description
  
  Content Structure:
  - Main title: "Professional" (white) + "Experience" (gradient)
  - Descriptive subtitle explaining the section purpose
  - Visual accent line for separation
-->

<template>
  <div class="text-center mb-16 relative">
    <!-- ===============================
         DECORATIVE BACKGROUND ELEMENTS
         =============================== -->
    <!-- Top Decorative Orb -->
    <div
      class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full -translate-y-16"
    ></div>
    <!-- Bottom Right Decorative Orb -->
    <div
      class="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-full translate-y-8"
    ></div>

    <!-- ===============================
         MAIN SECTION TITLE
         =============================== -->
    <h1
      class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white bg-clip-text mb-6 relative z-10"
    >
      Professional
      <!-- Gradient Text for "Experience" -->
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 font-light"
      >
        Experience
      </span>
    </h1>

    <!-- ===============================
         DESCRIPTIVE SUBTITLE
         =============================== -->
    <p
      class="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed relative z-10"
    >
      My professional journey showcasing growth, learning, and contributions
      across different roles and organizations.
    </p>

    <!-- ===============================
         ACCENT LINE
         =============================== -->
    <!-- Subtle gradient line for visual separation -->
    <div
      class="w-24 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 mx-auto mt-6 opacity-60"
    ></div>
  </div>
</template>
