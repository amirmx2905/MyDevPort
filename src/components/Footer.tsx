import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLenis } from "lenis/react";
import { profile } from "@/data/profileData";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
];

function Footer() {
  const year = new Date().getFullYear();
  const lenis = useLenis();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el && lenis) lenis.scrollTo(el, { offset: 0 });
  };

  return (
    <footer className="border-t border-border bg-panel backdrop-blur-xl">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 lg:px-0">
        <div className="grid gap-8 sm:grid-cols-3 sm:items-center">
          {/* Name + role */}
          <div>
            <p className="text-base font-semibold text-heading">
              {profile.name}
            </p>
            <p className="mt-1 text-sm text-body-soft">{profile.role}</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-start gap-x-6 gap-y-2 sm:justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm text-body-soft transition-colors duration-200 hover:text-heading"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3 sm:justify-end">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-glass-border bg-glass-bg backdrop-blur-[22px] shadow-glass transition duration-300 ease-out hover:scale-105 hover:bg-glass-bg-hover hover:shadow-glass-hover"
            >
              <FaGithub className="h-4 w-4 text-heading" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-glass-border bg-glass-bg backdrop-blur-[22px] shadow-glass transition duration-300 ease-out hover:scale-105 hover:bg-glass-bg-hover hover:shadow-glass-hover"
            >
              <FaLinkedin className="h-4 w-4 text-heading" />
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-8 border-t border-border/60 pt-6 text-center">
          <p className="text-xs text-body-soft">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
