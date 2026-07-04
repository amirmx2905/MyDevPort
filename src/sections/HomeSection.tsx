import Ferrofluid from "@/components/home/Ferrofluid";
import SplitText from "@/components/home/SplitText";
import TiltedCard from "@/components/home/TiltedCard";
import SectionShell from "@/components/SectionShell";
import { profile } from "@/data/profileData";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { useScrollHint } from "@/hooks/useScrollHint";

function HomeSection() {
  const isScrollHintVisible = useScrollHint(1500);

  return (
    <SectionShell id="home">
      <div className="relative min-h-screen w-full overflow-hidden">
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
                <SplitText
                  text="Amir"
                  tag="span"
                  className="font-extrabold"
                  delay={50}
                  duration={2}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 24 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-40px"
                  textAlign="center"
                />
                <SplitText
                  text="Flores"
                  tag="span"
                  className="font-light"
                  delay={50}
                  duration={2}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 24 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-40px"
                  textAlign="center"
                />
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
                <TiltedCard
                  imageSrc="/images/profile/photo.webp"
                  altText="Amir Flores"
                  captionText="Amir Flores • Frontend Engineer"
                  containerHeight="clamp(18rem, 32vw, 24rem)"
                  containerWidth="clamp(18rem, 32vw, 24rem)"
                  imageHeight="clamp(18rem, 32vw, 24rem)"
                  imageWidth="clamp(18rem, 32vw, 24rem)"
                  rotateAmplitude={12}
                  scaleOnHover={1.15}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default HomeSection;
