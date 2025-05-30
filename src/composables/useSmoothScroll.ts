/**
 * =====================================================
 * SMOOTH SCROLL COMPOSABLE - Adaptive Scrolling System
 * =====================================================
 *
 * KEYWORD INDEX:
 * - Smooth Scrolling: custom animation, CSS fallback
 * - Adaptive: mobile CSS, desktop JavaScript
 * - Easing Functions: easeOutQuart, natural curves
 * - Performance: requestAnimationFrame optimization
 * - Section Navigation: scroll to elements by ID
 * - Collision Prevention: isScrolling guard
 */

import { ref } from "vue";
import { useDeviceDetection } from "./useDeviceDetection";

// ===============================
// SMOOTH SCROLL COMPOSABLE
// ===============================

export function useSmoothScroll() {
  // ===============================
  // DEPENDENCIES
  // ===============================

  const { isMobile } = useDeviceDetection();

  // ===============================
  // REACTIVE STATE
  // ===============================

  const isScrolling = ref(false);

  // ===============================
  // EASING FUNCTIONS
  // ===============================

  /**
   * Smooth easing function (easeOutQuart) for natural scroll feel
   * Creates smooth deceleration curve
   */
  const easeOutQuart = (t: number): number => {
    return 1 - Math.pow(1 - t, 4);
  };

  // ===============================
  // SCROLL METHODS
  // ===============================

  /**
   * Adaptive scroll system that chooses the best method per device
   * Mobile: Uses native CSS smooth scrolling to avoid conflicts
   * Desktop: Uses custom JavaScript animation for enhanced control
   */
  const scrollTo = (targetY: number): void => {
    // Mobile devices: Use native CSS smooth scrolling
    if (isMobile.value) {
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
      return;
    }

    // Desktop: Use custom JavaScript animation
    scrollToDesktop(targetY);
  };

  /**
   * Desktop-optimized smooth scroll with custom animation
   */
  const scrollToDesktop = (targetY: number): void => {
    // Prevent multiple simultaneous scroll animations
    if (isScrolling.value) return;

    const startY = window.pageYOffset;
    const distance = targetY - startY;

    // Skip animation for very small distances
    if (Math.abs(distance) < 5) {
      return;
    }

    isScrolling.value = true;
    const startTime = performance.now();

    // Desktop-optimized scroll timing configuration
    const baseDuration = 800; // Base duration for desktop
    const minDuration = 500; // Minimum scroll time
    const maxDuration = 1200; // Maximum scroll time

    // Calculate dynamic duration based on scroll distance
    const distanceRatio = Math.abs(distance) / window.innerHeight;
    const calculatedDuration = Math.min(
      maxDuration,
      Math.max(minDuration, baseDuration + distanceRatio * 400)
    );

    // Custom scroll animation loop
    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / calculatedDuration, 1);

      // Apply easing function for smooth acceleration/deceleration
      const easedProgress = easeOutQuart(progress);
      const currentY = startY + distance * easedProgress;

      // Update scroll position
      window.scrollTo(0, currentY);

      // Continue animation until complete
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        isScrolling.value = false; // Mark animation as complete
      }
    };

    // Start the animation
    requestAnimationFrame(animateScroll);
  };

  /**
   * Navigate to a specific section with smooth scrolling
   */
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (!element) {
      console.warn(`Section with id "${sectionId}" not found`);
      return;
    }

    // Calculate element position relative to document
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + window.pageYOffset;

    // Calculate target position (prevent scrolling above page top)
    const targetPosition = Math.max(0, elementTop);

    // Execute smooth scroll to target
    scrollTo(targetPosition);
  };

  /**
   * Scroll to top of page
   */
  const scrollToTop = (): void => {
    scrollTo(0);
  };

  /**
   * Scroll to bottom of page
   */
  const scrollToBottom = (): void => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    scrollTo(maxScroll);
  };

  // ===============================
  // PUBLIC API
  // ===============================

  return {
    isScrolling,
    scrollTo,
    scrollToSection,
    scrollToTop,
    scrollToBottom,
    easeOutQuart,
  };
}
