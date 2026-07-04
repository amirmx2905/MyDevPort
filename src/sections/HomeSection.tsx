import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import Ferrofluid from "@/components/home/Ferrofluid";
import SplitText from "@/components/home/SplitText";
import SectionShell from "@/components/SectionShell";
import { useScrollHint } from "@/hooks/useScrollHint";

function HomeSection() {
  const isScrollHintVisible = useScrollHint();

  return (
    <SectionShell id="home">
      <div className="relative min-h-screen w-full overflow-hidden">
        <Ferrofluid
          className="absolute inset-0"
          colors={["#ffffff", "#ffffff", "#ffffff"]}
          backgroundColor="#03010A"
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
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-white">
          <div
            className={`hero-scroll-indicator pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[0.7rem] uppercase tracking-[0.35em] text-white/80 transition-opacity duration-300 ease-out ${
              isScrollHintVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span>Scroll Down</span>
            <FaArrowDown className="scroll-indicator h-5 w-5" />
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center md:items-center w-full max-w-6xl">
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
                  href="https://www.linkedin.com/in/amir-sebasti%C3%A1n-flores-cardona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hero-fade-up w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/25 bg-white/10 backdrop-blur-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.35)] flex items-center justify-center opacity-0 transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-white/15 hover:shadow-[0_10px_35px_rgba(255,255,255,0.16),inset_0_1px_0_rgba(255,255,255,0.4)]"
                >
                  <FaLinkedin className="w-6 h-6 text-white" />
                </a>

                <a
                  href="https://github.com/amirmx2905"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hero-fade-up w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/25 bg-white/10 backdrop-blur-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.35)] flex items-center justify-center opacity-0 transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-white/15 hover:shadow-[0_10px_35px_rgba(255,255,255,0.16),inset_0_1px_0_rgba(255,255,255,0.4)]"
                >
                  <FaGithub className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
            <div className="flex-1 md:basis-1/2 flex items-center justify-center md:justify-center">
              <img
                src="/images/profile/photo.webp"
                alt="Amir Flores"
                className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full ring-2 ring-white/20 shadow-lg transition duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default HomeSection;
