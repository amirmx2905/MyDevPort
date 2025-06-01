/**
 * =====================================================
 * MODAL SCROLL MANAGEMENT COMPOSABLE
 * =====================================================
 *
 * Advanced scroll position management for modals that works
 * seamlessly across desktop and mobile devices.
 *
 * Features:
 * - Prevents background scrolling when modal is open
 * - Preserves exact scroll position across modal open/close
 * - Mobile-optimized scroll restoration
 * - Handles viewport height changes on mobile
 * - Cleanup on component unmount
 */

import { ref, onUnmounted } from "vue";
import { useDeviceDetection } from "./useDeviceDetection";

export function useModalScroll() {
  const scrollPosition = ref(0);
  const { isMobile } = useDeviceDetection();

  /**
   * Opens modal and prevents background scrolling
   * Stores current scroll position for later restoration
   */
  const openModal = () => {
    // Store current scroll position
    scrollPosition.value =
      window.pageYOffset || document.documentElement.scrollTop;

    // Prevent any scroll changes
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition.value}px`;
    document.body.style.width = "100%";

    // Additional mobile-specific fixes
    if (isMobile.value) {
      document.body.style.touchAction = "none";
      document.documentElement.style.overflow = "hidden";
    }
  };

  /**
   * Closes modal and restores scroll position
   * Uses optimized method for mobile devices to prevent visual glitches
   */
  const closeModal = () => {
    // Restore scroll position and normal scrolling
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";

    // Remove mobile-specific fixes
    if (isMobile.value) {
      document.body.style.touchAction = "";
      document.documentElement.style.overflow = "";
    }

    // Use optimized scroll restoration for different devices
    if (isMobile.value) {
      // For mobile, use multiple strategies to ensure smooth restoration
      requestAnimationFrame(() => {
        // First attempt: instant scroll
        window.scrollTo({
          top: scrollPosition.value,
          behavior: "instant",
        });

        // Fallback: direct scroll after a micro-delay
        setTimeout(() => {
          window.scrollTo(0, scrollPosition.value);
        }, 10);
      });
    } else {
      // For desktop, use immediate scroll
      window.scrollTo(0, scrollPosition.value);
    }
  };

  /**
   * Cleanup function to restore scroll if component unmounts with modal open
   */
  const cleanup = () => {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
    document.documentElement.style.overflow = "";
  };

  // Cleanup on component unmount
  onUnmounted(() => {
    cleanup();
  });

  return {
    openModal,
    closeModal,
    cleanup,
    scrollPosition,
  };
}
