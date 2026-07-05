import SectionShell from "@/components/SectionShell";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";

function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <div className="mx-auto w-full max-w-6xl px-4 py-30 lg:px-0">
        <div className="text-center">
          <h2 className="flex flex-wrap items-center justify-center gap-3 text-4xl tracking-tight text-heading sm:text-5xl md:text-6xl">
            <span className="font-extrabold">Experience</span>
            <span className="font-light">Timeline</span>
          </h2>
        </div>
        <ExperienceTimeline />
      </div>
    </SectionShell>
  );
}

export default ExperienceSection;
