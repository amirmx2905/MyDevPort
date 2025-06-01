<!--
  =====================================================
  CONTACT ME SECTION - Modular Contact Form
  =====================================================
  
  Clean and functional contact form for sending messages
  with About Me section styling consistency
  Built with modular subcomponents for better maintainability
-->

<template>
  <section
    id="contact"
    class="min-h-screen bg-gray-900 relative overflow-hidden py-20"
  >
    <!-- Notification Popups -->
    <NotificationPopups :show-success="showSuccess" :show-error="showError" />

    <!-- Animated Background Particles -->
    <AnimatedBackground />

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <SectionHeader />

      <!-- Contact Form -->
      <ContactForm @success="handleSuccess" @error="handleError" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NotificationPopups from "./subcomponents/NotificationPopups.vue";
import AnimatedBackground from "./subcomponents/AnimatedBackground.vue";
import SectionHeader from "./subcomponents/SectionHeader.vue";
import ContactForm from "./subcomponents/ContactForm.vue";

// ===============================
// REACTIVE DATA
// ===============================

const showSuccess = ref(false);
const showError = ref(false);

// ===============================
// EVENT HANDLERS
// ===============================

const handleSuccess = () => {
  showSuccess.value = true;
  showError.value = false;

  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccess.value = false;
  }, 5000);
};

const handleError = () => {
  showError.value = true;
  showSuccess.value = false;

  // Hide error message after 5 seconds
  setTimeout(() => {
    showError.value = false;
  }, 5000);
};
</script>
