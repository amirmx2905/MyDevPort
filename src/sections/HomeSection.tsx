import { lazy, Suspense, useRef } from "react";
import SectionShell from "@/components/SectionShell";
import { profile } from "@/data/profileData";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { useScrollHint } from "@/hooks/useScrollHint";

const Ferrofluid = lazy(() => import("@/components/home/Ferrofluid"));

// ── Lightweight name animation ──────────────────────────────────────────────
function AnimatedName({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: 0,
            animation: "fade-up-char 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
            animationDelay: `${i * 55}ms`,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

// ── Lightweight tilt card ───────────────────────────────────────────────────
function PhotoCard({ src, alt }: { src: string; alt: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 24}deg) rotateX(${-y * 24}deg) scale(1.08)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.18s ease-out" }}
      className="overflow-hidden rounded-3xl border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
    >
      <img
        src={src}
        alt={alt}
        className="h-[clamp(18rem,32vw,24rem)] w-[clamp(18rem,32vw,24rem)] object-cover"
      />
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────

function HomeSection() {
  const isScrollHintVisible = useScrollHint(1500);

  return (
    <SectionShell id="home">
      <div className="relative min-h-screen w-full overflow-hidden">
        <Suspense fallback={<div className="absolute inset-0 bg-hero-bg" />}>
          <Ferrofluid
            className="absolute inset-0"
            colors={["#ffffff", "#ffffff", "#ffffff"]}
            backgroundColor="var(--hero-bg)"
            speed={0.1}
            scale={3}
            turbulence={0.35}
            fluidity={0.05}
            rimWidth={0.18}
            sharpness={1.8}
            shimmer={1.1}
            glow={2.2}
            flowDirection="down"
            opacity={1}
            mouseInteraction
            mouseStrength={0}
            mouseRadius={0.05}
            mouseDampening={0.15}
          />
        </Suspense>
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-heading">
          <div
            className={`hero-scroll-indicator pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[0.7rem] uppercase tracking-[0.35em] text-heading/80 transition-opacity duration-300 ease-out ${
              isScrollHintVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span>Scroll Down</span>
            <FaArrowDown className="scroll-indicator h-5 w-5" />
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center md:items-center w-full max-w-6xl gap-10">
            <div className="flex-1 md:basis-1/2 flex flex-col justify-center text-center">
              <h1 className="flex flex-wrap items-center justify-center gap-3 text-6xl md:text-7xl tracking-tight leading-tight">
                <AnimatedName text="Amir" className="font-extrabold" />
                <AnimatedName text="Flores" className="font-light" />
              </h1>
              <div className="hero-button-group mt-8 flex items-center justify-center gap-10 opacity-0">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hero-fade-up w-12 h-12 md:w-14 md:h-14 rounded-full border border-glass-border bg-glass-bg backdrop-blur-[22px] shadow-glass flex items-center justify-center opacity-0 transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-glass-bg-hover hover:shadow-glass-hover"
                >
                  <FaLinkedin className="w-6 h-6 text-heading" />
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hero-fade-up w-12 h-12 md:w-14 md:h-14 rounded-full border border-glass-border bg-glass-bg backdrop-blur-[22px] shadow-glass flex items-center justify-center opacity-0 transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-glass-bg-hover hover:shadow-glass-hover"
                >
                  <FaGithub className="w-6 h-6 text-heading" />
                </a>
              </div>
            </div>
            <div className="flex-1 md:basis-1/2 flex items-center justify-center md:justify-center">
              <div className="hero-photo-enter relative flex items-center justify-center opacity-0">
                <PhotoCard src="/images/photo.webp" alt="Amir Flores" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default HomeSection;
