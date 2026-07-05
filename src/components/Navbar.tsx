import { useEffect, useRef, useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const lenis = useLenis();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el && lenis) lenis.scrollTo(el, { offset: 0 });
    setIsMenuOpen(false);
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

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 z-50 -translate-x-1/2">
      <ul className="hidden items-center gap-1 rounded-full border border-glass-border bg-glass-bg px-2 py-2 backdrop-blur-[22px] shadow-glass sm:flex">
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

      <div ref={menuRef} className="relative sm:hidden">
        <div className="flex items-center rounded-full border border-glass-border bg-glass-bg px-2 py-2 backdrop-blur-[22px] shadow-glass">
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label="Toggle navigation menu"
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition duration-300 ease-out ${
              isMenuOpen
                ? "bg-glass-bg-hover text-heading shadow-glass"
                : "text-body-soft hover:text-heading"
            }`}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-nav-menu"
            className="mt-2 w-[min(92vw,24rem)] -translate-x-1/2 rounded-2xl border border-glass-border bg-glass-bg p-2 backdrop-blur-[22px] shadow-glass"
            style={{ position: "absolute", left: "50%" }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => {
                const id = href.slice(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    className={`inline-flex h-9 items-center rounded-xl px-3 text-sm font-medium transition duration-300 ease-out ${
                      isActive
                        ? "bg-glass-bg-hover text-heading shadow-glass"
                        : "text-body-soft hover:text-heading"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
