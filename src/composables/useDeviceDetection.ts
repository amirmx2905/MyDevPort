/**
 * =====================================================
 * DEVICE DETECTION COMPOSABLE - Mobile/Desktop Detection
 * =====================================================
 *
 * KEYWORD INDEX:
 * - Device Detection: mobile, desktop, tablet detection
 * - Performance Cache: avoid repeated calculations
 * - Multi-criteria: touch, pointer, hover, screen size
 * - Reactive: Vue 3 composable pattern
 * - User Agent: fallback detection method
 * - Responsive: breakpoint-based detection
 */

import { ref, onMounted, onUnmounted } from "vue";

// ===============================
// TYPES
// ===============================

type DeviceType = "mobile" | "desktop" | null;

// ===============================
// DEVICE DETECTION COMPOSABLE
// ===============================

export function useDeviceDetection() {
  // ===============================
  // REACTIVE STATE
  // ===============================

  const isMobile = ref(false);
  const isDesktop = ref(true);
  const deviceType = ref<DeviceType>(null);

  // Performance cache to avoid unnecessary recalculations
  let deviceTypeCache: DeviceType = null;

  // ===============================
  // DETECTION LOGIC
  // ===============================

  /**
   * Advanced mobile device detection using multiple criteria
   * Combines touch capability, pointer type, hover support, screen size, and user agent
   */
  const detectDevice = (): boolean => {
    // Use cached result if device type was already determined
    if (deviceTypeCache !== null) {
      return deviceTypeCache === "mobile";
    }

    // Multiple detection criteria for higher accuracy
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const hasHover = !window.matchMedia("(hover: none)").matches;
    const screenWidth = window.innerWidth <= 768;
    const userAgent =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    // Device is mobile if it meets at least 2 criteria
    const mobileIndicators = [
      hasTouch,
      hasCoarsePointer,
      !hasHover,
      screenWidth,
      userAgent,
    ];
    const mobileScore = mobileIndicators.filter(Boolean).length;

    // Cache the result to avoid repeated calculations
    const isMobileDevice = mobileScore >= 2;
    deviceTypeCache = isMobileDevice ? "mobile" : "desktop";

    return isMobileDevice;
  };

  /**
   * Update reactive state based on detection
   */
  const updateDeviceState = () => {
    const mobile = detectDevice();
    isMobile.value = mobile;
    isDesktop.value = !mobile;
    deviceType.value = mobile ? "mobile" : "desktop";
  };

  /**
   * Reset cache when window is resized (device orientation change, etc.)
   */
  const handleResize = () => {
    deviceTypeCache = null;
    updateDeviceState();
  };

  // ===============================
  // LIFECYCLE MANAGEMENT
  // ===============================

  onMounted(() => {
    updateDeviceState();
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  // ===============================
  // PUBLIC API
  // ===============================

  return {
    isMobile,
    isDesktop,
    deviceType,
    detectDevice,
    updateDeviceState,
  };
}
