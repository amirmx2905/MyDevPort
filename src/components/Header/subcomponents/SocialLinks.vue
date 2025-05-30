<!--
  =====================================================
  SOCIAL LINKS COMPONENT - Social Media Icons
  =====================================================
  
  KEYWORD INDEX:
  - Social Icons: LinkedIn, GitHub, customizable
  - Hover Effects: scale transform, icon animation
  - Responsive Design: consistent sizing, spacing
  - External Links: target="_blank", security
  - Icon Styling: brightness invert, group hover
  - Configuration: dynamic links array, extensible
-->

<template>
  <div class="flex justify-center space-x-6 mb-8">
    <a
      v-for="social in socialLinks"
      :key="social.name"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      class="group w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      :aria-label="`Visit ${social.name} profile`"
    >
      <img
        :src="social.icon"
        :alt="`${social.name} icon`"
        class="w-6 h-6 brightness-0 invert group-hover:scale-110 transition-transform duration-300"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
// ===============================
// TYPES
// ===============================

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// ===============================
// PROPS
// ===============================

interface Props {
  socialLinks?: SocialLink[];
}

const props = withDefaults(defineProps<Props>(), {
  socialLinks: () => [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/amir-sebasti%C3%A1n-flores-cardona-617556250/",
      icon: "/images/icons/iconLinkedin.svg",
    },
    {
      name: "GitHub",
      url: "https://github.com/amirmx2905",
      icon: "/images/icons/iconGithub.svg",
    },
  ],
});

// ===============================
// REACTIVE PROPS ACCESS
// ===============================

// Access props for template reactivity
const { socialLinks } = props;
</script>
