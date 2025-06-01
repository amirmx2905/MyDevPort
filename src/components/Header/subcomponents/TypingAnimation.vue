<!--
  =====================================================
  TYPING ANIMATION COMPONENT - Dynamic Text Display
  =====================================================
  
  KEYWORD INDEX:
  - Typing Effect: type function, character animation
  - Text Rotation: typingTexts array, currentTextIndex
  - Cursor Animation: blinking cursor, opacity control
  - Mobile/Desktop: responsive text sizes
  - Animation States: typing, deleting, pausing
  - Performance: setTimeout optimization, sync updates
-->

<template>
  <div class="text-center">
    <div class="inline-flex items-center min-h-[2.5rem] md:min-h-[3rem]">
      <!-- Text content updated by animation -->
      <span
        ref="typedElement"
        class="text-xl md:text-2xl text-white/90 font-light"
      ></span>
      <!-- Animated blinking cursor -->
      <span
        ref="cursorElement"
        class="text-xl md:text-2xl text-white/90 font-light animate-pulse ml-1"
        >|</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// ===============================
// PROPS & EMITS
// ===============================

interface Props {
  texts?: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  texts: () => [
    "Full Stack Developer",
    "Mobile App Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ],
  typeSpeed: 100,
  deleteSpeed: 50,
  pauseDuration: 2000,
});

// ===============================
// REACTIVE REFERENCES
// ===============================

const typedElement = ref<HTMLElement | null>(null);
const cursorElement = ref<HTMLElement | null>(null);

// ===============================
// ANIMATION STATE VARIABLES
// ===============================

let currentTextIndex = 0; // Current text in rotation
let currentCharIndex = 0; // Current character position
let isDeleting = false; // Whether currently deleting text
let animationTimeout: number; // Timeout reference for cleanup

// ===============================
// TYPING ANIMATION LOGIC
// ===============================

// Main typing animation function
const type = () => {
  if (!typedElement.value || !cursorElement.value) return;

  const currentText = props.texts[currentTextIndex];
  let displayText: string;
  let nextSpeed: number;

  if (isDeleting) {
    // DELETING MODE: Remove characters one by one
    displayText = currentText.substring(0, currentCharIndex - 1);
    currentCharIndex--;
    nextSpeed = props.deleteSpeed;
  } else {
    // TYPING MODE: Add characters one by one
    displayText = currentText.substring(0, currentCharIndex + 1);
    currentCharIndex++;
    nextSpeed = props.typeSpeed;
  }

  // Use non-breaking space to preserve height when text is empty
  typedElement.value.textContent = displayText || "\u00A0";

  // Show cursor during active typing
  cursorElement.value.style.opacity = "1";

  // Handle animation state transitions
  if (!isDeleting && currentCharIndex === currentText.length) {
    // Finished typing current text - pause before deleting
    nextSpeed = props.pauseDuration;
    isDeleting = true;
  } else if (isDeleting && currentCharIndex === 0) {
    // Finished deleting - move to next text
    isDeleting = false;
    currentTextIndex = (currentTextIndex + 1) % props.texts.length;
    nextSpeed = 150; // Short pause before typing next text
  }

  // Schedule next animation frame
  animationTimeout = setTimeout(type, nextSpeed);
};

// ===============================
// ANIMATION CONTROL
// ===============================

// Start the typing animation
const startTyping = () => {
  // Reset animation state
  currentTextIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;

  // Begin animation loop
  type();
};

// Stop the typing animation
const stopTyping = () => {
  if (animationTimeout) {
    clearTimeout(animationTimeout);
  }
};

// ===============================
// VUE LIFECYCLE HOOKS
// ===============================

onMounted(() => {
  startTyping();
});

onUnmounted(() => {
  stopTyping();
});

// ===============================
// EXPOSED METHODS (for parent component control)
// ===============================

defineExpose({
  startTyping,
  stopTyping,
});
</script>
