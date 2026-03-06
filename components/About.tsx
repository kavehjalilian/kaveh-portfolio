"use client";

import { useEffect, useRef } from "react";

const skills = [
  "Python",
  "SQL",
  "scikit-learn",
  "PySpark",
  "Pandas",
  "Statsmodels",
  "R",
  "Tableau",
  "Machine Learning",
  "Forecasting",
  "Data Storytelling",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="px-6 py-24">
      <div className="max-w-[680px] mx-auto w-full">
        <p className="reveal font-mono text-[var(--muted)] text-xs tracking-widest uppercase mb-10">
          About
        </p>

        <p className="reveal text-[var(--foreground)] text-lg leading-relaxed mb-8">
          Business analytics and product-minded data professional with an MSBA
          from Northeastern (D&apos;Amore-McKim) and an MBA. Specializes in
          Python, SQL, machine learning, and data storytelling. Open to product
          and data roles.
        </p>

        <div className="reveal mb-10">
          <p className="font-mono text-[var(--muted)] text-xs tracking-widest uppercase mb-4">
            Education
          </p>
          <ul className="space-y-2">
            <li className="text-[var(--foreground)]">
              MS Business Analytics —{" "}
              <span className="text-[var(--muted)]">
                Northeastern University, D&apos;Amore-McKim School of Business
              </span>
            </li>
            <li className="text-[var(--foreground)]">
              MBA
            </li>
          </ul>
        </div>

        <div className="reveal">
          <p className="font-mono text-[var(--muted)] text-xs tracking-widest uppercase mb-4">
            Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs px-3 py-1.5 rounded border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
