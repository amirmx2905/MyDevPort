import { FaExternalLinkAlt } from "react-icons/fa";
import type { CertificationItem } from "@/data/types";

type CertificationCardProps = {
  cert: CertificationItem;
};

const statusStyleMap = {
  completed: "bg-emerald-500/20 text-emerald-300 border-emerald-300/30",
  "in-progress": "bg-amber-500/20 text-amber-300 border-amber-300/30",
};

const statusLabelMap = {
  completed: "Completed",
  "in-progress": "In Progress",
};

function CertificationCard({ cert }: CertificationCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-panel shadow-panel backdrop-blur-xl transition duration-300 hover:border-glass-border hover:shadow-glass-hover">
      {/* Image */}
      <div className="relative h-40 w-full overflow-hidden bg-zinc-900">
        <img
          src={cert.image}
          alt={cert.institution ?? cert.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent" />

        {/* Status badge */}
        <span
          className={`absolute bottom-3 right-3 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyleMap[cert.status]}`}
        >
          {statusLabelMap[cert.status]}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {cert.institution && (
          <p className="text-xs font-medium uppercase tracking-wider text-sky-400">
            {cert.institution}
          </p>
        )}

        <h3 className="text-lg font-semibold text-heading leading-snug">
          {cert.title}
        </h3>

        <p className="text-sm leading-6 text-body-soft">{cert.description}</p>

        {/* Skill chips */}
        {cert.skills && cert.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-zinc-950/40 px-2.5 py-0.5 text-xs text-body"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border/60 px-5 py-3">
        <span className="text-xs text-body-soft">
          {cert.completionDate ?? "In Progress"}
        </span>
        {cert.certUrl && (
          <a
            href={cert.certUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-body-soft transition-colors duration-200 hover:text-heading"
          >
            <FaExternalLinkAlt className="h-3 w-3" />
            <span>View Certificate</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default CertificationCard;
