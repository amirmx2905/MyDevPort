import { useState } from "react";
import SectionShell from "@/components/SectionShell";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects, projectCategories } from "@/data/projectsData";

function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("web");

  const filtered = projects.filter((p) => p.category === activeCategory);

  return (
    <SectionShell id="projects">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 lg:px-0">
        {/* Heading */}
        <div className="text-center">
          <h2 className="flex flex-wrap items-center justify-center gap-3 text-4xl tracking-tight text-heading sm:text-5xl md:text-6xl">
            <span className="font-extrabold">Featured</span>
            <span className="font-light">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-body-soft">
            A selection of projects spanning web and mobile development — from
            full-stack platforms to native apps.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {projectCategories.map((cat) => {
            const isActive = cat.value === activeCategory;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`inline-flex h-10 items-center justify-center rounded-full border px-6 text-sm font-semibold backdrop-blur-[22px] shadow-glass transition duration-300 ease-out hover:scale-105 hover:bg-glass-bg-hover hover:shadow-glass-hover ${
                  isActive
                    ? "border-sky-400/50 bg-sky-500/20 text-sky-300"
                    : "border-glass-border bg-glass-bg text-heading"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export default ProjectsSection;
