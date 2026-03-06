"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-[var(--border)] backdrop-blur-md" : ""
      }`}
      style={scrolled ? { backgroundColor: "var(--nav-bg)" } : undefined}
    >
      <div className="max-w-[680px] mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#top"
          className="font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors text-sm"
        >
          Kaveh Jalilian
        </a>
        <div className="flex items-center gap-5">
          {["About", "Projects", "Interests", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors hidden sm:block"
            >
              {section}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
