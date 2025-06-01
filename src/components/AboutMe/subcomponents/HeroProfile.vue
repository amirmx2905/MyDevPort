<!--
  =====================================================
  HERO PROFILE - Personal Information Card
  =====================================================
  
  Main profile card with:
  - Personal information
  - Professional title
  - Company information
  - Contact button
  - Glassmorphism design
-->

<template>
  <div class="relative">
    <!-- Glow Effect Background -->
    <div
      class="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 rounded-3xl blur-xl animate-pulse"
    />

    <!-- Main Profile Card -->
    <div
      class="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-12 transform hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/25"
    >
      <!-- Text Content -->
      <div class="text-center space-y-6">
        <div class="space-y-2">
          <div class="text-xl text-gray-300 font-medium">
            Software Developer
          </div>
          <div
            class="flex items-center justify-center space-x-2 text-sm text-gray-400"
          >
            <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span>Currently at Toshiba Global Commerce Solutions</span>
          </div>
        </div>

        <p class="text-gray-300 leading-relaxed max-w-md mx-auto">
          Passionate about solving complex problems with attention to detail.
          Committed to continuous learning and staying updated with industry
          trends. Strong collaborator with excellent communication skills.
        </p>

        <!-- Contact Buttons -->
        <div class="flex flex-col sm:flex-row justify-center">
          <button
            @click="downloadCV"
            class="px-6 py-3 border cursor-pointer border-white/20 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// ===============================
// CV DOWNLOAD FUNCTIONALITY
// ===============================

const downloadCV = () => {
  try {
    // Get the base URL and construct full path
    const baseUrl = import.meta.env.BASE_URL;
    const cvPath = `${baseUrl}documents/Amir_Flores_CV.pdf`;

    // Create download link
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Amir_Flores_CV.pdf";
    link.style.display = "none";

    // Add to DOM and trigger download
    document.body.appendChild(link);
    link.click();

    // Clean up after a short delay
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  } catch (error) {
    // Fallback: try to open in new tab
    try {
      const fallbackPath = `${
        import.meta.env.BASE_URL
      }documents/Amir_Flores_CV.pdf`;
      window.open(fallbackPath, "_blank");
    } catch (fallbackError) {
      alert("Error downloading CV. Please contact Amir directly.");
    }
  }
};
</script>
