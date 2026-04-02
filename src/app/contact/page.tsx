import Link from "next/link";

export const metadata = {
  title: "Contact — Justie Wu",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-8 md:px-16 pt-36 pb-24 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-xs tracking-[0.25em] uppercase text-black/40 mb-4">
          Contact
        </p>
        <h1
          className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight mb-16"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Let&apos;s Connect
        </h1>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg leading-8 text-black/70 mb-10">
              I&apos;m always open to new opportunities, collaborations, and
              conversations. Whether you have a project in mind or just want to
              chat about product, AI, or latte art — reach out.
            </p>

            <div className="space-y-6">
              <div className="border-b border-black/10 pb-6">
                <p className="text-xs tracking-[0.15em] uppercase text-black/30 mb-2">
                  Email
                </p>
                <Link
                  href="mailto:iamshenyuewu@gmail.com"
                  className="text-base hover:opacity-60 transition-opacity"
                >
                  iamshenyuewu@gmail.com
                </Link>
              </div>

              <div className="border-b border-black/10 pb-6">
                <p className="text-xs tracking-[0.15em] uppercase text-black/30 mb-2">
                  LinkedIn
                </p>
                <Link
                  href="https://linkedin.com/in/shenyuewujustiieee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:opacity-60 transition-opacity"
                >
                  linkedin.com/in/shenyuewujustiieee
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-end">
            <p className="text-sm text-black/30 leading-6">
              Based in New York City.
              <br />
              Open to remote and hybrid roles.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full mt-24">
        <p className="text-xs text-black/20">
          © {new Date().getFullYear()} Justie Wu
        </p>
      </div>
    </main>
  );
}
