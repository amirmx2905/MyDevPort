<!--
  =====================================================
  NOTIFICATION POPUPS - Success and Error Messages
  =====================================================
  
  Elegant fade-in/fade-out popups that appear at the bottom center
  of the screen with glassmorphism styling and auto-hide after 5 seconds
-->

<template>
  <!-- Success Popup -->
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-4 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-2 scale-95"
  >
    <div
      v-if="showSuccess"
      class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[100]"
    >
      <div class="relative">
        <!-- Glow Effect Background -->
        <div
          class="absolute -inset-3 bg-gradient-to-r from-green-400/30 via-emerald-500/30 to-cyan-400/30 rounded-2xl blur-xl animate-pulse"
        ></div>

        <!-- Popup Content -->
        <div
          class="relative bg-black/60 backdrop-blur-2xl border border-green-400/30 rounded-2xl px-6 py-4 shadow-2xl min-w-[320px]"
        >
          <div class="flex items-center space-x-3">
            <div
              class="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div>
              <p class="text-green-300 font-semibold text-sm">
                Message sent successfully!
              </p>
              <p class="text-green-200/80 text-xs">
                I'll get back to you soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Error Popup -->
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-4 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-2 scale-95"
  >
    <div
      v-if="showError"
      class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[100]"
    >
      <div class="relative">
        <!-- Glow Effect Background -->
        <div
          class="absolute -inset-3 bg-gradient-to-r from-red-400/30 via-rose-500/30 to-pink-400/30 rounded-2xl blur-xl animate-pulse"
        ></div>

        <!-- Popup Content -->
        <div
          class="relative bg-black/60 backdrop-blur-2xl border border-red-400/30 rounded-2xl px-6 py-4 shadow-2xl min-w-[320px]"
        >
          <div class="flex items-center space-x-3">
            <div
              class="w-8 h-8 bg-gradient-to-r from-red-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            <div>
              <p class="text-red-300 font-semibold text-sm">
                Error sending message
              </p>
              <p class="text-red-200/80 text-xs">Please try again.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
// ===============================
// PROPS
// ===============================
interface Props {
  showSuccess: boolean;
  showError: boolean;
}

defineProps<Props>();
</script>
