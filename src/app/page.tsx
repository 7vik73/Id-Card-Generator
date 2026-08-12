import Link from "next/link";

const LINE_STYLE = {
  transform: "scaleY(1.18) scaleX(0.96)",
  transformOrigin: "left top",
} as const;

export default function Landing() {
  return (
    <main className="relative flex-1 overflow-hidden px-8 pb-16 pt-8 sm:px-14 sm:pt-12">
      <h1 className="font-[family-name:var(--font-display)] text-[16vw] font-black uppercase tracking-tight sm:text-[9.5vw] lg:text-[7.8vw]" style={{ lineHeight: 0.98 }}>
        <span className="block text-hh-yellow" style={LINE_STYLE}>
          Frame
        </span>
        <span className="-mt-[0.06em] block italic text-hh-pink" style={LINE_STYLE}>
          Your
        </span>
        <span className="-mt-[0.06em] block text-hh-yellow" style={LINE_STYLE}>
          Build.
        </span>
      </h1>

      <div className="relative mt-1 ml-[30vw] w-fit sm:ml-[26vw] lg:ml-[22vw]">
        <span
          aria-hidden
          className="absolute -rotate-6 select-none whitespace-nowrap font-[family-name:var(--font-devanagari)] text-3xl font-bold text-black/40 sm:text-5xl lg:text-6xl"
          style={{ left: 4, top: 5 }}
        >
          हैक वाला
        </span>
        <span className="relative block -rotate-6 whitespace-nowrap font-[family-name:var(--font-devanagari)] text-3xl font-bold text-hh-pink sm:text-5xl lg:text-6xl">
          हैक वाला
        </span>
      </div>

      <p className="mt-10 max-w-md font-mono text-sm text-hh-cream sm:text-base">
        Turn your photo into an HH Goa 2026 builder frame. One upload, one poster-worthy profile.
      </p>

      <Link
        href="/create"
        className="relative mt-8 inline-flex items-center gap-4 bg-hh-yellow px-7 py-4 text-sm font-bold uppercase tracking-wide text-hh-green-950 shadow-[7px_7px_0_0_#ec1e79] transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[4px_4px_0_0_#ec1e79]"
      >
        Get Your Frame
        <span aria-hidden>↗</span>
      </Link>

      <p className="mt-4 text-[11px] font-bold tracking-widest text-hh-yellow">
        NO LOGIN. NO SIGNUP. JUST BUILD.
      </p>

      <div className="absolute bottom-10 right-8 -rotate-6 border-2 border-hh-pink px-4 py-2 text-center font-mono text-xs font-bold uppercase tracking-wide text-hh-pink sm:right-16">
        Check
        <br />
        Hype
        <span className="absolute -top-3 -right-3 text-hh-yellow">✦</span>
      </div>
    </main>
  );
}
