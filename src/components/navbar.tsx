import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-white/90 backdrop-blur-sm">
      <Link
        href="/"
        className="text-sm font-medium tracking-[0.15em] uppercase text-black hover:opacity-60 transition-opacity"
      >
        Justie Wu
      </Link>
      <div className="flex items-center gap-10">
        <Link
          href="/work"
          className="text-sm tracking-wide text-black/70 hover:text-black transition-colors"
        >
          Work
        </Link>
        <Link
          href="/journey"
          className="text-sm tracking-wide text-black/70 hover:text-black transition-colors"
        >
          Journey
        </Link>
        <Link
          href="/contact"
          className="text-sm tracking-wide text-black/70 hover:text-black transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
