"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Interest {
  label: string;
  tagline: string;
  detail: string;
  image: string;
}

const interests: Interest[] = [
  {
    label: "Travel",
    tagline: "Exploring new cities and the patterns hidden in how they work.",
    detail:
      "Travel is where curiosity meets culture. Whether it's a bustling city or a quiet coastal town, I'm drawn to understanding how places are built, how people move through them, and what makes each one unique. Every trip comes with new data points about the world.",
    image:
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=700&h=500&fit=crop&q=80&auto=format",
  },
  {
    label: "Hiking",
    tagline: "Getting into nature to reset and gain perspective.",
    detail:
      "There's something about being in the mountains or on a trail that clears the mental noise. I enjoy the challenge of longer routes and the quiet that comes with them. A good hike is one of the best ways to think through a problem — or not think at all.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=700&h=500&fit=crop&q=80&auto=format",
  },
  {
    label: "Film & Storytelling",
    tagline: "Cinema as a lens for narrative structure and human behavior.",
    detail:
      "Great films are a masterclass in how to tell a story with limited time. I'm especially drawn to character-driven narratives and films that reveal something true about how people make decisions. My IMDb project started as a genuine curiosity about what makes certain films endure.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&h=500&fit=crop&q=80&auto=format",
  },
  {
    label: "People & Ideas",
    tagline: "Some of the best insights come from the right conversation.",
    detail:
      "I genuinely enjoy meeting people from different fields and backgrounds — the kind of conversations where you leave thinking differently than when you arrived. Whether it's over coffee, at a meetup, or after a talk, connecting with curious and driven people is something I actively seek out.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&h=500&fit=crop&q=80&auto=format",
  },
];

export default function Interests() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<Interest | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    if (!selected) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected]);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      <section id="interests" ref={sectionRef} className="px-6 py-24">
        <div className="max-w-[680px] mx-auto w-full">
          <p className="reveal font-mono text-[var(--muted)] text-xs tracking-widest uppercase mb-10">
            Interests
          </p>

          <div className="grid grid-cols-2 gap-4">
            {interests.map((item) => (
              <button
                key={item.label}
                onClick={() => setSelected(item)}
                className="group reveal relative rounded-xl overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                aria-label={`Learn more about ${item.label}`}
              >
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="340px"
                    className="object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[var(--accent)]/0 group-hover:bg-[var(--accent)]/15 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-medium text-white text-sm leading-tight mb-1 flex items-center gap-1.5">
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="opacity-0 group-hover:opacity-60 transition-opacity -translate-y-px"
                    >
                      <path d="M6 1v10M1 6h10" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </p>
                  <p className="text-white/60 text-xs leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.tagline}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />

          {/* Panel */}
          <div
            className="relative z-10 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "var(--card-bg)", border: "1px solid var(--border)" }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selected.label}
          >
            {/* Image */}
            <div className="relative h-52">
              <Image
                src={selected.image}
                alt={selected.label}
                fill
                sizes="448px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white/80 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-semibold text-[var(--foreground)] text-lg mb-2">
                {selected.label}
              </h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                {selected.detail}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
