import { lazy, Suspense } from "react";
import { ReactLenis } from "lenis/react";
import HomeSection from "./sections/HomeSection";

const AboutSection = lazy(() => import("./sections/AboutSection"));
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection"));
const CertificationsSection = lazy(
  () => import("./sections/CertificationsSection"),
);

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <main className="min-h-screen bg-background text-foreground">
        <HomeSection />
        <Suspense fallback={null}>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
        </Suspense>
      </main>
    </ReactLenis>
  );
}

export default App;
