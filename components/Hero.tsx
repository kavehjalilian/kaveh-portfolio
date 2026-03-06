import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
    >
      <ParticleBackground />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(78,205,196,0.04) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[680px] mx-auto w-full pt-20 pb-16">

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[var(--foreground)] leading-[1.08] mb-5 fade-in-delay-1">
          Kaveh Jalilian
        </h1>
        <p className="text-lg text-[var(--muted)] mb-4 fade-in-delay-2">
          MBA + MSBA · Data &amp; Product
        </p>
        <p className="text-xl sm:text-2xl text-[var(--foreground)] font-light fade-in-delay-3 max-w-[520px]">
          I turn messy data into clear decisions.
        </p>

        {/* Scroll indicator — clicking scrolls to About */}
        <a
          href="#about"
          className="absolute bottom-10 left-0 fade-in-delay-3 flex items-center gap-2 group"
          aria-label="Scroll to About"
        >
          <span className="font-mono text-[var(--muted)] text-[11px] tracking-widest uppercase group-hover:text-[var(--accent)] transition-colors">
            Scroll
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-[var(--muted)] group-hover:text-[var(--accent)] animate-bounce transition-colors"
          >
            <path
              d="M8 3v10M8 13l-4-4M8 13l4-4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
