import { FaDownload } from "react-icons/fa";

import SpotlightCard from "@/components/about/SpotlightCard";
import LogoLoop from "@/components/about/LogoLoop";
import SectionShell from "@/components/SectionShell";

import { profile } from "@/data/profileData";
import { techLogos } from "@/data/techLogos";

const focusAreas = profile.focusAreas;

function AboutSection() {
  return (
    <SectionShell id="about">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 lg:px-0">
        <div className="text-center">
          <h2 className="flex flex-wrap items-center justify-center gap-3 text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="font-extrabold">About</span>
            <span className="font-light">Me</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          {/* LEFT */}
          <div className="flex flex-col items-center rounded-4xl border border-white/10 bg-zinc-950/70 p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <div className="mb-6 w-full max-w-xl">
              <h3 className="text-2xl font-semibold text-white">
                Software Developer
              </h3>

              <p className="mt-3 flex items-center justify-center gap-2 text-sm text-sky-300">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                Currently Searching for New Opportunities
              </p>
            </div>

            <p className="max-w-xl text-base leading-8 text-zinc-300">
              Passionate about solving complex problems with attention to
              detail. I build experiences that feel refined, usable, and
              performant while staying aligned with product goals and user
              needs.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-zinc-400">
              I’m committed to continuous learning, thoughtful collaboration,
              and producing work that combines strong UI polish with practical
              frontend engineering.
            </p>

            <div className="mt-8">
              <a
                href={profile.resume}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 w-40 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.35)] transition duration-300 ease-out hover:scale-105 hover:bg-white/15 hover:shadow-[0_10px_35px_rgba(255,255,255,0.16),inset_0_1px_0_rgba(255,255,255,0.4)]"
              >
                <FaDownload className="h-4 w-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5 min-w-0">
            <div className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <SpotlightCard
                  key={area.title}
                  spotlightColor="rgba(56, 189, 248, 0.16)"
                  className="text-left"
                >
                  <p className="text-lg font-semibold text-white">
                    {area.title}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {area.items.join(" · ")}
                  </p>
                </SpotlightCard>
              ))}
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/70 p-5 backdrop-blur-xl w-full min-w-0">
              <LogoLoop
                logos={techLogos}
                speed={30}
                direction="right"
                logoHeight={30}
                gap={52}
                hoverSpeed={0}
                fadeOut
                fadeOutColor="#09090b"
                scaleOnHover
                ariaLabel="Technologies"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default AboutSection;
