import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const lenis = useLenis();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el && lenis) lenis.scrollTo(el, { offset: 0 });
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 z-50 -translate-x-1/2">
      <ul className="flex items-center gap-1 rounded-full border border-glass-border bg-glass-bg px-2 py-2 backdrop-blur-[22px] shadow-glass">
        {navLinks.map(({ label, href }) => {
          const id = href.slice(1);
          const isActive = activeSection === id;
          return (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={`inline-flex h-8 items-center rounded-full px-4 text-sm font-medium transition duration-300 ease-out ${
                  isActive
                    ? "bg-glass-bg-hover text-heading shadow-glass"
                    : "text-body-soft hover:text-heading"
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
