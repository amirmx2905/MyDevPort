<!--
  =====================================================
  INTERACTIVE CANVAS - Particle System Background
  =====================================================
  
  KEYWORD INDEX:
  - Canvas Setup: initCanvas, resizeCanvas, high-DPI
  - Particle System: createPoints, animate, physics
  - Mouse Interaction: handleMouseMove, repulsion effects
  - Lighting Effects: lateral gradients, pulsing animation
  - Performance: requestAnimationFrame, cleanup
-->

<template>
  <canvas
    ref="canvasRef"
    class="absolute inset-0 w-full h-full"
    @mousemove="handleMouseMove"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// ===============================
// REACTIVE REFERENCES
// ===============================

const canvasRef = ref<HTMLCanvasElement | null>(null);

// ===============================
// CANVAS ANIMATION VARIABLES
// ===============================

// Canvas context and animation control
let ctx: CanvasRenderingContext2D | null = null;
let animationId: number;
let points: any[] = []; // Particle system points array
let mouse = { x: 0, y: 0 }; // Mouse position tracking

// ===============================
// CANVAS INITIALIZATION & SETUP
// ===============================

// Initialize canvas with high-DPI support and event listeners
const initCanvas = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  ctx = canvas.getContext("2d");
  if (!ctx) return;

  // High-DPI canvas setup function
  const resizeCanvas = () => {
    const pixelRatio = window.devicePixelRatio || 1; // Handle retina displays
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    // Set actual canvas size in memory (scaled up for high-DPI)
    canvas.width = displayWidth * pixelRatio;
    canvas.height = displayHeight * pixelRatio;

    // Scale the canvas back down using CSS for proper display
    canvas.style.width = displayWidth + "px";
    canvas.style.height = displayHeight + "px";

    // Scale the drawing context so everything draws at the correct size
    ctx!.scale(pixelRatio, pixelRatio);

    // Enable anti-aliasing and smooth rendering for crisp graphics
    ctx!.imageSmoothingEnabled = true;
    ctx!.imageSmoothingQuality = "high";
  };

  // Setup canvas and add resize listener
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Initialize particle system and start animation loop
  createPoints();
  animate();
};

// Create particle points for the background animation
const createPoints = () => {
  points = [];
  const canvas = canvasRef.value;
  if (!canvas) return;

  // Use display dimensions for point positioning
  const displayWidth = window.innerWidth;
  const displayHeight = window.innerHeight;
  // Adaptive density based on screen size (fewer particles on mobile)
  const density = Math.min(displayWidth, displayHeight) > 768 ? 80 : 60;

  // Generate random particles with position and velocity
  for (let i = 0; i < density; i++) {
    points.push({
      x: Math.random() * displayWidth, // Random X position
      y: Math.random() * displayHeight, // Random Y position
      vx: (Math.random() - 0.5) * 0.5, // Random X velocity
      vy: (Math.random() - 0.5) * 0.5, // Random Y velocity
      radius: Math.random() * 2 + 1, // Random radius
    });
  }
};

// ===============================
// CANVAS ANIMATION LOOP
// ===============================

// Main animation loop with particle system and lighting effects
const animate = () => {
  if (!ctx || !canvasRef.value) return;

  // Use display dimensions for calculations
  const displayWidth = window.innerWidth;
  const displayHeight = window.innerHeight;

  // Clear canvas for new frame
  ctx.clearRect(0, 0, displayWidth, displayHeight);

  // ===== LATERAL LIGHTING EFFECTS =====
  // Create dynamic ambient lighting on left and right sides
  const centerY = displayHeight / 2;
  const lightRadius = 300;
  // Pulsing light intensity with sine wave animation
  const lightIntensity = 0.15 + Math.sin(Date.now() * 0.002) * 0.05;

  // Left side ambient light gradient
  const leftGradient = ctx.createRadialGradient(
    0,
    centerY,
    0,
    0,
    centerY,
    lightRadius
  );
  leftGradient.addColorStop(0, `rgba(100, 149, 237, ${lightIntensity})`);
  leftGradient.addColorStop(
    0.3,
    `rgba(100, 149, 237, ${lightIntensity * 0.5})`
  );
  leftGradient.addColorStop(1, "rgba(100, 149, 237, 0)");

  ctx.fillStyle = leftGradient;
  ctx.fillRect(0, centerY - lightRadius, lightRadius, lightRadius * 2);

  // Right side ambient light gradient
  const rightGradient = ctx.createRadialGradient(
    displayWidth,
    centerY,
    0,
    displayWidth,
    centerY,
    lightRadius
  );
  rightGradient.addColorStop(0, `rgba(147, 197, 253, ${lightIntensity})`);
  rightGradient.addColorStop(
    0.3,
    `rgba(147, 197, 253, ${lightIntensity * 0.5})`
  );
  rightGradient.addColorStop(1, "rgba(147, 197, 253, 0)");

  ctx.fillStyle = rightGradient;
  ctx.fillRect(
    displayWidth - lightRadius,
    centerY - lightRadius,
    lightRadius,
    lightRadius * 2
  );

  // ===== PARTICLE SYSTEM UPDATE & RENDERING =====
  points.forEach((point, i) => {
    // Update particle position based on velocity
    point.x += point.vx;
    point.y += point.vy;

    // Bounce particles off screen edges
    if (point.x < 0 || point.x > displayWidth) point.vx *= -1;
    if (point.y < 0 || point.y > displayHeight) point.vy *= -1;

    // ===== MOUSE INTERACTION PHYSICS =====
    // Calculate distance from mouse to particle
    const dx = mouse.x - point.x;
    const dy = mouse.y - point.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 200) {
      // Mouse repulsion effect - particles move away from cursor
      const force = (200 - distance) / 200; // Force decreases with distance
      point.x -= dx * 0.05 * force; // Apply repulsion force
      point.y -= dy * 0.05 * force;

      // Dynamic particle size based on proximity to mouse
      point.radius = Math.max(1, Math.min(6, 2 + force * 4));
    } else {
      // Gradually return to original size when away from mouse
      point.radius = Math.max(1, point.radius * 0.98);
    }

    // ===== PARTICLE RENDERING WITH GLOW EFFECTS =====
    ctx!.save(); // Save context state for clean rendering

    // Enable sub-pixel rendering for smoother circles
    ctx!.beginPath();
    ctx!.arc(point.x, point.y, point.radius, 0, Math.PI * 2);

    // Dynamic opacity with mouse proximity enhancement
    const glowIntensity = distance < 200 ? (200 - distance) / 200 : 0;
    const baseAlpha = 0.4 + Math.sin(Date.now() * 0.001 + i) * 0.2; // Breathing effect
    const alpha = Math.min(1, baseAlpha + glowIntensity * 0.7);

    ctx!.fillStyle = `rgba(255, 255, 255, ${alpha})`;

    // Add outer glow effect for mouse proximity
    if (glowIntensity > 0) {
      ctx!.shadowColor = `rgba(100, 149, 237, ${glowIntensity * 0.8})`;
      ctx!.shadowBlur = 15 * glowIntensity;
    } else {
      ctx!.shadowBlur = 0;
    }

    ctx!.fill();
    ctx!.restore(); // Restore context state

    // ===== PARTICLE CONNECTION LINES =====
    // Draw lines between nearby particles
    points.slice(i + 1).forEach((otherPoint) => {
      const dx = point.x - otherPoint.x;
      const dy = point.y - otherPoint.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 180) {
        ctx!.save(); // Save context for line rendering

        ctx!.beginPath();
        ctx!.moveTo(point.x, point.y);
        ctx!.lineTo(otherPoint.x, otherPoint.y);

        // Enhanced line opacity based on mouse proximity
        const lineAlpha = ((180 - distance) / 180) * 0.2;
        ctx!.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
        ctx!.lineWidth = 0.5;
        ctx!.stroke();

        ctx!.restore();
      }
    });
  });

  // Continue animation loop
  animationId = requestAnimationFrame(animate);
};

// ===============================
// MOUSE INTERACTION HANDLING
// ===============================

// Track mouse position for particle interaction effects
const handleMouseMove = (event: MouseEvent) => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  // Get accurate mouse position relative to canvas
  const rect = canvas.getBoundingClientRect();
  mouse.x = event.clientX - rect.left;
  mouse.y = event.clientY - rect.top;
};

// ===============================
// VUE LIFECYCLE HOOKS
// ===============================

// Component mount: Initialize canvas system
onMounted(() => {
  initCanvas();
});

// Component unmount: Clean up resources
onUnmounted(() => {
  // Stop canvas animation to prevent memory leaks
  if (animationId) {
    cancelAnimationFrame(animationId);
  }

  // Remove resize listener
  window.removeEventListener("resize", () => {});
});
</script>
