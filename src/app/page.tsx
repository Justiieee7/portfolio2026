import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-24 pb-16">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-black/40 mb-6">
              Product Manager
            </p>
            <h1
              className="text-[clamp(3.5rem,8vw,7rem)] leading-[1.05] font-bold mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Justie
              <br />
              Wu
            </h1>
            <div className="flex flex-wrap gap-2 text-sm text-black/50 tracking-wide">
              <span>AI/ML</span>
              <span className="text-black/20">·</span>
              <span>B2B SaaS</span>
              <span className="text-black/20">·</span>
              <span>Fintech</span>
              <span className="text-black/20">·</span>
              <span>Consumer</span>
            </div>
          </div>

          <div>
            <p className="text-lg leading-8 text-black/70 max-w-md">
              Hi 👋 I&apos;m Justie, a Product Manager with 6 years of experience
              driving impact at both startups and Fortune 500 companies. I
              specialize in applying AI/ML to simplify complex workflows in B2B
              SaaS, and crafting intuitive user experiences for consumer products
              across fintech, e-commerce, and wellness.
            </p>
            <div className="mt-8 flex gap-6">
              <Link
                href="/work"
                className="text-sm tracking-wide border-b border-black pb-0.5 hover:border-black/40 transition-colors"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="text-sm tracking-wide text-black/50 hover:text-black transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-8 md:px-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs tracking-[0.25em] uppercase text-black/40">
              Selected Work
            </p>
            <Link
              href="/work"
              className="text-xs tracking-wide text-black/40 hover:text-black transition-colors"
            >
              All Projects →
            </Link>
          </div>

          <div className="border-t border-black/10">
            {projects.map((project, i) => (
              <Link
                key={project.id}
                href={project.link ?? `/work/${project.id}`}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className="group flex items-start justify-between gap-8 border-b border-black/10 py-8 hover:bg-black/[0.02] -mx-4 px-4 transition-colors"
              >
                <div className="flex gap-8 items-start">
                  <span className="text-xs text-black/30 pt-1 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-xl font-medium mb-1">{project.title}</h2>
                    <p className="text-sm text-black/50">{project.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 shrink-0 pt-1">
                  <span className="text-sm text-black/30 hidden md:block">
                    {project.category}
                  </span>
                  <span className="text-sm text-black/30">{project.year}</span>
                  <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
