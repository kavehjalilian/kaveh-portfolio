import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group reveal block border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--accent)]/50 transition-all duration-300"
    >
      {/* Image with colorize-on-hover */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="680px"
          className="object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-500"
        />
        {/* Teal tint overlay — fades in on hover */}
        <div className="absolute inset-0 bg-[var(--accent)]/0 group-hover:bg-[var(--accent)]/10 transition-colors duration-500" />
        {/* Dark gradient at bottom so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent" />

        {/* Year badge */}
        <span className="absolute top-3 right-3 font-mono text-[11px] px-2 py-0.5 rounded bg-black/60 text-[var(--muted)] backdrop-blur-sm">
          {project.year}
        </span>
      </div>

      {/* Card body */}
      <div className="p-5">
        <h3 className="font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-2 leading-tight">
          {project.title}
        </h3>

        <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] px-2 py-0.5 rounded bg-[var(--border)] text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
