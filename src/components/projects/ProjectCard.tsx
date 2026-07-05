import { FaGithub } from "react-icons/fa";
import type { ProjectItem } from "@/data/types";

type ProjectCardProps = {
  project: ProjectItem;
};

const categoryStyleMap: Record<string, string> = {
  web: "bg-sky-500/20 text-sky-300 border-sky-300/30",
  mobile: "bg-emerald-500/20 text-emerald-300 border-emerald-300/30",
  desktop: "bg-amber-500/20 text-amber-300 border-amber-300/30",
};

const categoryLabelMap: Record<string, string> = {
  web: "Web",
  mobile: "Mobile",
  desktop: "Other",
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-panel shadow-panel backdrop-blur-xl transition duration-300 hover:border-glass-border hover:shadow-glass-hover">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent" />

        {/* Year badge */}
        <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-zinc-950/70 px-2.5 py-0.5 text-xs text-zinc-300 backdrop-blur-sm">
          {project.year}
        </span>

        {/* Category badge */}
        <span
          className={`absolute bottom-3 right-3 rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryStyleMap[project.category] ?? categoryStyleMap.web}`}
        >
          {categoryLabelMap[project.category] ?? project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-heading leading-snug">
          {project.title}
        </h3>

        <p className="text-sm leading-6 text-body-soft">
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-zinc-950/40 px-2.5 py-0.5 text-xs text-body"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border/60 px-5 py-3">
        <span className="text-xs text-body-soft">{project.duration}</span>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-body-soft transition-colors duration-200 hover:text-heading"
          >
            <FaGithub className="h-3.5 w-3.5" />
            <span>View Code</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
