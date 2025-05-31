<!--
  =====================================================
  PROJECTS SECTION HEADER COMPONENT
  =====================================================
  
  Header component for the Projects section featuring gradient typography
  and decorative elements that match the overall design theme.
  
  Design Features:
  - Large responsive typography with gradient text effects
  - Decorative floating orbs with subtle animations
  - Emerald/teal/green color scheme for unique visual identity
  - Responsive text sizing (4xl → 5xl → 7xl)
  - Subtle gradient accent line below description
  
  Content Structure:
  - Main title: "Featured" (white) + "Projects" (gradient)
  - Descriptive subtitle explaining the portfolio showcase
  - Visual accent line for separation
-->

<template>
  <div class="text-center mb-16 relative">
    <!-- ===============================
         DECORATIVE BACKGROUND ELEMENTS
         =============================== -->
    <!-- Left Side Decorative Orb -->
    <div
      class="absolute top-1/3 left-8 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -translate-y-8"
    ></div>
    <!-- Top Right Corner Decorative Orb -->
    <div
      class="absolute top-4 right-16 w-28 h-28 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-full"
    ></div>
    <!-- Bottom Center Decorative Orb -->
    <div
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-t from-emerald-500/10 to-transparent rounded-full translate-y-6"
    ></div>

    <!-- ===============================
         MAIN SECTION TITLE
         =============================== -->
    <h1
      class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white bg-clip-text mb-6 relative z-10"
    >
      Featured
      <!-- Gradient Text for "Projects" -->
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-green-600 font-light"
      >
        Projects
      </span>
    </h1>

    <!-- ===============================
         DESCRIPTIVE SUBTITLE
         =============================== -->
    <p
      class="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed relative z-10"
    >
      A curated collection of my development projects showcasing technical
      skills, creative problem-solving, and passion for building innovative
      solutions.
    </p>

    <!-- ===============================
         ACCENT LINE
         =============================== -->
    <!-- Subtle gradient line for visual separation -->
    <div
      class="w-24 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 mx-auto mt-6 opacity-60"
    ></div>
  </div>
</template>
