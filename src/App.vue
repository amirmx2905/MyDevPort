<!--
  KEYWORD INDEX:
  - Root Structure: min-h-screen, main app container
  - Header Component: Header.vue import, navigation section
  - Transition Section: elegant separator, gradient overlay
  - Decorative Elements: line separator, animated dots
  - Content Sections: about, experience, projects, certifications, contact
  - Background Styling: unified gray-900 background
  - Section Layout: min-h-screen, centered content
  - Placeholder Content: section headers, temporary content
  - Scroll Targets: section IDs for navigation
  - Animation: pulse effects, staggered delays
-->

<script setup lang="ts">
// Import main navigation header component
import Header from "./components/Header/index.vue";
// Import footer component
import Footer from "./components/Footer/index.vue";
// Import About Me section component
import About from "./components/AboutMe/index.vue";
// Import Contact section component
import Contact from "./components/Contact/index.vue";
</script>

<template>
  <!-- Root Application Container -->
  <div class="min-h-screen">
    <!-- Main Navigation Header Component -->
    <Header />

    <!-- Elegant Transition Section Between Header and Content -->
    <!-- Creates visual separation with subtle animations -->
    <div class="relative h-20 bg-gray-900">
      <!-- Subtle Gradient Overlay for Smooth Transition -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-gray-800/50 via-gray-900/80 to-gray-900"
      ></div>

      <!-- Decorative Horizontal Line Separator -->
      <!-- Centered line with gradient fade-in/out effect -->
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      ></div>

      <!-- Animated Dots Decoration -->
      <!-- Three pulsing dots with staggered animation delays -->
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div class="flex space-x-2">
          <!-- First dot - base animation -->
          <div class="w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
          <!-- Second dot - 0.5s delay -->
          <div
            class="w-1 h-1 bg-white/40 rounded-full animate-pulse"
            style="animation-delay: 0.5s"
          ></div>
          <!-- Third dot - 1s delay -->
          <div
            class="w-1 h-1 bg-white/40 rounded-full animate-pulse"
            style="animation-delay: 1s"
          ></div>
        </div>
      </div>
    </div>

    <!-- Main Content Sections Container -->
    <!-- Unified dark background for all portfolio sections -->
    <div class="bg-gray-900">
      <!-- About Me Section -->
      <!-- Full-height section with modern glassmorphism design -->
      <section id="about" class="min-h-screen">
        <About />
      </section>

      <!-- Experience Section -->
      <!-- Professional experience and work history -->
      <section
        id="experience"
        class="min-h-screen flex items-center justify-center"
      >
        <h2 class="text-4xl text-white">Experience Section</h2>
      </section>

      <!-- Projects Section -->
      <!-- Portfolio projects showcase -->
      <section
        id="projects"
        class="min-h-screen flex items-center justify-center"
      >
        <h2 class="text-4xl text-white">Projects Section</h2>
      </section>

      <!-- Certifications Section -->
      <!-- Professional certifications and achievements -->
      <section
        id="certifications"
        class="min-h-screen flex items-center justify-center"
      >
        <h2 class="text-4xl text-white">Certifications Section</h2>
      </section>

      <!-- Contact Section -->
      <!-- Contact information and communication methods -->
      <section id="contact" class="min-h-screen">
        <Contact />
      </section>
    </div>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>
