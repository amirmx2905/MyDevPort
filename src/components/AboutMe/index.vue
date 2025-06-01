<!--
  =====================================================
  ABOUT ME SECTION - Interactive Personal Profile
  =====================================================
  
  Main About Me section composed of modular subcomponents:
  - AnimatedBackground: floating orbs and geometric patterns
  - SectionHeader: title and description
  - HeroProfile: personal information card
  - PersonalStats: statistics grid
  - SkillsMatrix: technical and soft skills
  - AreasOfInterest: learning goals and passions
-->

<template>
  <div
    id="about"
    class="min-h-screen bg-gray-900 relative overflow-hidden py-20"
  >
    <!-- Animated Background Component -->
    <AnimatedBackground />

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- Section Header Component -->
      <SectionHeader />

      <!-- Hero Profile Section -->
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <!-- Profile Card Component -->
        <HeroProfile />

        <!-- Stats Component -->
        <PersonalStats />
      </div>

      <!-- Skills Matrix Component -->
      <SkillsMatrix />

      <!-- Areas of Interest Component -->
      <AreasOfInterest />
    </div>
  </div>
</template>

<script setup lang="ts">
// ===============================
// COMPONENT IMPORTS
// ===============================
import AnimatedBackground from "./subcomponents/AnimatedBackground.vue";
import SectionHeader from "./subcomponents/SectionHeader.vue";
import HeroProfile from "./subcomponents/HeroProfile.vue";
import PersonalStats from "./subcomponents/PersonalStats.vue";
import SkillsMatrix from "./subcomponents/SkillsMatrix.vue";
import AreasOfInterest from "./subcomponents/AreasOfInterest.vue";
</script>
