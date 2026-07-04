import { ReactLenis } from "lenis/react";
import AboutSection from "./sections/AboutSection";
import CertificationsSection from "./sections/CertificationsSection";
import ExperienceSection from "./sections/ExperienceSection";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <main className="min-h-screen bg-zinc-900 text-zinc-100">
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
      </main>
    </ReactLenis>
  );
}

export default App;
