import { useLayoutEffect, useRef, useState } from "react";
import { experiences } from "@/data/experienceData";
import type { ExperienceItem } from "@/data/types";

type ExperienceType = ExperienceItem["type"];

const typeStyleMap: Record<ExperienceType, string> = {
  "full-time": "bg-sky-500/20 text-sky-300 border-sky-300/30",
  "part-time": "bg-zinc-500/20 text-zinc-200 border-zinc-300/30",
  internship: "bg-emerald-500/20 text-emerald-300 border-emerald-300/30",
  contract: "bg-amber-500/20 text-amber-300 border-amber-300/30",
};

const typeLabelMap: Record<ExperienceType, string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  internship: "Internship",
  contract: "Contract",
};

function ExperienceTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const markerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [lineStyle, setLineStyle] = useState({ top: 0, height: 0 });

  useLayoutEffect(() => {
    const updateLine = () => {
      const container = timelineRef.current;
      const firstMarker = markerRefs.current[0];
      const lastMarker = markerRefs.current[experiences.length - 1];

      if (!container || !firstMarker || !lastMarker) {
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const firstRect = firstMarker.getBoundingClientRect();
      const lastRect = lastMarker.getBoundingClientRect();

      const startY = firstRect.top - containerRect.top + firstRect.height / 2;
      const endY = lastRect.top - containerRect.top + lastRect.height / 2;

      setLineStyle({
        top: startY,
        height: Math.max(0, endY - startY),
      });
    };

    updateLine();
    window.addEventListener("resize", updateLine);

    return () => {
      window.removeEventListener("resize", updateLine);
    };
  }, []);

  return (
    <div ref={timelineRef} className="relative mx-auto mt-12 w-full max-w-6xl">
      <div
        className="pointer-events-none absolute left-4 w-px bg-border md:left-1/2 md:-translate-x-1/2"
        style={{ top: `${lineStyle.top}px`, height: `${lineStyle.height}px` }}
      />

      <ol className="space-y-10 md:space-y-12">
        {experiences.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <li key={item.id} className="relative">
              <div
                ref={(element) => {
                  markerRefs.current[index] = element;
                }}
                className="absolute left-4 top-10 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border border-glass-border bg-glass-bg p-1 shadow-glass transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-glass-bg-hover hover:shadow-glass-hover md:left-1/2"
              >
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  className="h-full w-full rounded-full object-cover"
                  loading="lazy"
                />
              </div>

              <article
                className={`ml-12 rounded-3xl border border-border bg-panel p-6 backdrop-blur-xl shadow-panel transition duration-300 hover:border-glass-border hover:shadow-glass-hover md:ml-0 md:w-[calc(50%-2.5rem)] ${
                  isLeft ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <header className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-heading">
                      {item.position}
                    </h3>
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${typeStyleMap[item.type]}`}
                  >
                    {typeLabelMap[item.type]}
                  </span>
                </header>

                <dl className="mt-4 grid gap-2 rounded-2xl border border-border/70 bg-zinc-950/20 p-3 text-sm sm:grid-cols-[auto_1fr] sm:gap-x-4">
                  <dt className="text-body-soft">Company</dt>
                  <dd className="font-medium text-heading sm:text-right">
                    {item.company}
                  </dd>

                  <dt className="text-body-soft">Duration</dt>
                  <dd className="text-body sm:text-right">{item.duration}</dd>

                  <dt className="text-body-soft">Location</dt>
                  <dd className="text-body sm:text-right">{item.location}</dd>
                </dl>

                <p className="mt-4 leading-7 text-body">{item.description}</p>

                <div className="mt-5">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-heading/90">
                    Key Achievements
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-body-soft">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-2 leading-6">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={`${item.id}-${technology}`}
                      className="rounded-full border border-glass-border bg-glass-bg px-3 py-1 text-xs text-zinc-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ExperienceTimeline;
