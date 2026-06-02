import { ReactLenis } from "lenis/react";
import { profile } from "./data/profileData";
import { technologyBadges } from "./data/technologyData";
import { experiences } from "./data/experienceData";
import { projects } from "./data/projectsData";
import { certifications } from "./data/certificationsData";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <main className="min-h-screen bg-zinc-950 px-6 pb-20 pt-10 text-zinc-100 md:px-10">
        <nav className="mx-auto mb-8 flex max-w-4xl flex-wrap gap-3 border-b border-white/10 pb-5 text-sm text-zinc-300">
          <a href="#home" className="hover:text-zinc-100">
            Home
          </a>
          <a href="#about" className="hover:text-zinc-100">
            About
          </a>
          <a href="#experience" className="hover:text-zinc-100">
            Experience
          </a>
          <a href="#projects" className="hover:text-zinc-100">
            Projects
          </a>
          <a href="#certifications" className="hover:text-zinc-100">
            Certifications
          </a>
        </nav>

        <section
          id="home"
          className="mx-auto max-w-4xl border-b border-white/10 py-16"
        >
          <h1 className="text-3xl font-semibold">Section 01 - Home</h1>
          <p className="mt-4 text-zinc-300">
            Placeholder owner: {profile.name}
          </p>
        </section>

        <section
          id="about"
          className="mx-auto max-w-4xl border-b border-white/10 py-16"
        >
          <h2 className="text-2xl font-semibold">Section 02 - About</h2>
          <p className="mt-4 text-zinc-300">
            Tech placeholders ready: {technologyBadges.length}
          </p>
        </section>

        <section
          id="experience"
          className="mx-auto max-w-4xl border-b border-white/10 py-16"
        >
          <h2 className="text-2xl font-semibold">Section 03 - Experience</h2>
          <p className="mt-4 text-zinc-300">
            Experience placeholders ready: {experiences.length}
          </p>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-4xl border-b border-white/10 py-16"
        >
          <h2 className="text-2xl font-semibold">Section 04 - Projects</h2>
          <p className="mt-4 text-zinc-300">
            Project placeholders ready: {projects.length}
          </p>
        </section>

        <section id="certifications" className="mx-auto max-w-4xl py-16">
          <h2 className="text-2xl font-semibold">
            Section 05 - Certifications
          </h2>
          <p className="mt-4 text-zinc-300">
            Certification placeholders ready: {certifications.length}
          </p>
        </section>
      </main>
    </ReactLenis>
  );
}

export default App;
