import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Work — Justie Wu",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen px-8 md:px-16 pt-36 pb-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.25em] uppercase text-black/40 mb-4">
          Work
        </p>
        <h1
          className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight mb-16"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Selected Projects
        </h1>

        <div className="border-t border-black/10">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="border-b border-black/10 py-12 grid md:grid-cols-[1fr_2fr] gap-8"
            >
              <div>
                <span className="text-xs text-black/30 tabular-nums block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {project.title}
                </h2>
                <p className="text-sm text-black/50 mb-2">{project.subtitle}</p>
                <p className="text-xs text-black/30">{project.category}</p>
              </div>

              <div>
                <p className="text-base leading-7 text-black/70 mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-xs tracking-[0.15em] uppercase text-black/30 mb-3">
                    Outcomes
                  </p>
                  <ul className="space-y-1.5">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome} className="text-sm text-black/60 flex gap-2">
                        <span className="text-black/20 mt-px">—</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-sm text-black/40">
                    Role: {project.role}
                  </span>
                  <span className="text-sm text-black/40">{project.year}</span>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm tracking-wide border-b border-black pb-0.5 hover:border-black/40 transition-colors ml-auto"
                    >
                      View Case Study →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More coming soon */}
        <div className="mt-16 py-12 border border-dashed border-black/10 rounded-lg text-center">
          <p className="text-sm text-black/30">More projects coming soon</p>
        </div>
      </div>
    </main>
  );
}
