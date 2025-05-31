<!--
  =====================================================
  CONTACT FORM COMPONENT
  =====================================================
  
  Main contact form with all input fields and submission logic
-->

<template>
  <div class="max-w-2xl mx-auto">
    <div class="relative">
      <!-- Paper Plane Animation -->
      <PaperPlaneAnimation :show="showPlaneAnimation" />

      <!-- Glow Effect Background -->
      <div
        class="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 rounded-3xl blur-xl animate-pulse"
      />

      <!-- Main Form Card -->
      <div
        class="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-black/50 transition-all duration-700"
      >
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Name Field -->
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-300 mb-2"
            >
              Name *
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 focus:bg-white/10 transition-all duration-300 focus:outline-none"
              placeholder="Dr. Sheldon Cooper"
            />
          </div>

          <!-- Email Field -->
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-300 mb-2"
            >
              Email *
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 focus:bg-white/10 transition-all duration-300 focus:outline-none"
              placeholder="bazinga@caltech.edu"
            />
          </div>

          <!-- Subject Field -->
          <div>
            <label
              for="subject"
              class="block text-sm font-medium text-gray-300 mb-2"
            >
              Subject *
            </label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              required
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 focus:bg-white/10 transition-all duration-300 focus:outline-none"
              placeholder="Fun with Flags"
            />
          </div>

          <!-- Message Field -->
          <div>
            <label
              for="message"
              class="block text-sm font-medium text-gray-300 mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              required
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 focus:bg-white/10 transition-all duration-300 resize-none focus:outline-none"
              placeholder="Hello, I'm Dr. Sheldon Cooper, and welcome to Fun With Flags. Today's episode: Flags That Feature Only One Color... and Why That's Technically Still a Flag. Some may say a plain white flag is a symbol of surrender, but did you know that in the 17th century, it was also a symbol of truce? Fascinating, isn't it? No? Well, it's about to get flag-tastic."
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="cursor-pointer w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
          >
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
            <svg
              v-if="!isSubmitting"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <div
              v-else
              class="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"
            ></div>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import PaperPlaneAnimation from "./PaperPlaneAnimation.vue";

// ===============================
// EMITS
// ===============================

const emit = defineEmits<{
  success: [];
  error: [];
}>();

// ===============================
// REACTIVE DATA
// ===============================

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const showPlaneAnimation = ref(false);

// ===============================
// METHODS
// ===============================

const handleSubmit = async () => {
  isSubmitting.value = true;

  // Trigger paper plane animation
  showPlaneAnimation.value = true;

  // Hide plane animation after 2 seconds
  setTimeout(() => {
    showPlaneAnimation.value = false;
  }, 2000);

  try {
    // Create FormData for FormSubmit service
    const formData = new FormData();

    // Add form fields
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", form.subject);
    formData.append("message", form.message);

    // Add FormSubmit configuration
    formData.append("_captcha", "false");
    formData.append("_next", "false");
    formData.append("_template", "table");

    // Send to FormSubmit service
    const response = await fetch(
      "https://formsubmit.co/f06e0b701a319e4512efeafc5e4103e0",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Server response error");
    }

    // Success - Reset form and emit success event
    Object.assign(form, { name: "", email: "", subject: "", message: "" });
    emit("success");
  } catch (error) {
    console.error("Error sending message:", error);
    emit("error");
  } finally {
    isSubmitting.value = false;
  }
};
</script>
