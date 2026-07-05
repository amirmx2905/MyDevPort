import { useState } from "react";
import SectionShell from "@/components/SectionShell";
import CertificationCard from "@/components/certifications/CertificationCard";
import { certifications } from "@/data/certificationsData";

const INITIAL_COUNT = 3;

function CertificationsSection() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll
    ? certifications
    : certifications.slice(0, INITIAL_COUNT);
  const hasMore = certifications.length > INITIAL_COUNT;

  return (
    <SectionShell id="certifications">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 lg:px-0">
        {/* Heading */}
        <div className="text-center">
          <h2 className="flex flex-wrap items-center justify-center gap-3 text-4xl tracking-tight text-heading sm:text-5xl md:text-6xl">
            <span className="font-extrabold">Technical</span>
            <span className="font-light">Certifications</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-body-soft">
            Professional certifications and ongoing programs across cloud,
            cybersecurity, and software development.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>

        {/* Load more / Show less */}
        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex h-10 items-center justify-center rounded-full border border-glass-border bg-glass-bg px-6 text-sm font-semibold text-heading backdrop-blur-[22px] shadow-glass transition duration-300 ease-out hover:scale-105 hover:bg-glass-bg-hover hover:shadow-glass-hover"
            >
              {showAll
                ? "Show Less"
                : `Load More (${certifications.length - INITIAL_COUNT} remaining)`}
            </button>
          </div>
        )}
      </div>
    </SectionShell>
  );
}

export default CertificationsSection;
