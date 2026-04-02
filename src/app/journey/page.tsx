import { workHistory, education, skills } from "@/data/journey";

export const metadata = {
  title: "Journey — Justie Wu",
};

export default function JourneyPage() {
  return (
    <main className="min-h-screen px-8 md:px-16 pt-36 pb-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.25em] uppercase text-black/40 mb-4">
          Journey
        </p>
        <h1
          className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight mb-16"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Experience &<br />Education
        </h1>

        {/* Work History */}
        <section className="mb-20">
          <p className="text-xs tracking-[0.2em] uppercase text-black/30 mb-8">
            Work
          </p>
          <div className="border-t border-black/10">
            {workHistory.map((item) => (
              <div
                key={item.company + item.period}
                className="border-b border-black/10 py-8 grid md:grid-cols-[200px_1fr] gap-4"
              >
                <div>
                  <p className="text-sm text-black/40">{item.period}</p>
                </div>
                <div>
                  <h3 className="font-medium text-base mb-0.5">{item.role}</h3>
                  <p className="text-sm text-black/50 mb-2">{item.company}</p>
                  <p className="text-sm text-black/60 leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <p className="text-xs tracking-[0.2em] uppercase text-black/30 mb-8">
            Education
          </p>
          <div className="border-t border-black/10">
            {education.map((item) => (
              <div
                key={item.school}
                className="border-b border-black/10 py-8 grid md:grid-cols-[200px_1fr] gap-4"
              >
                <div />
                <div>
                  <h3 className="font-medium text-base mb-0.5">{item.degree}</h3>
                  <p className="text-sm text-black/50">{item.school}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <p className="text-xs tracking-[0.2em] uppercase text-black/30 mb-8">
            Skills & Tools
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm px-4 py-2 border border-black/10 rounded-full text-black/60"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
