import Link from "next/link";

const DARK_TEXT = "#0a2413";

export default function CreateChoice() {
  return (
    <main
      className="relative flex-1 overflow-hidden px-6 py-16 sm:px-10"
      style={{
        backgroundImage: "radial-gradient(rgba(243,238,221,0.15) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    >
      {/* decorative sun, top-left */}
      <SunIcon className="pointer-events-none absolute left-6 top-6 h-16 w-16 text-hh-yellow sm:left-10 sm:top-10" />
      {/* decorative sparkle, top-right */}
      <SparkleIcon className="pointer-events-none absolute right-8 top-10 h-16 w-16 -rotate-6 text-hh-green-800 sm:right-16" />
      {/* decorative star, bottom-left */}
      <span className="pointer-events-none absolute bottom-10 left-8 -rotate-12 text-4xl text-hh-pink sm:bottom-16 sm:left-16">
        ★
      </span>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded bg-hh-yellow px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-hh-green-950">
          ✦ Build Your ID
        </span>

        <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-black uppercase leading-[0.95] sm:text-7xl">
          <span className="text-hh-cream">What Are You </span>
          <span className="text-hh-yellow">Building?</span>
        </h1>

        <p className="mt-5 max-w-xl font-mono text-sm text-hh-cream/70 sm:text-base">
          Build your collectible Hacker House Goa identity. No signup required.
        </p>

        <div className="mt-14 grid w-full gap-8 md:grid-cols-2">
          {/* Solo */}
          <Link
            href="/create/solo"
            className="group flex flex-col items-start rounded-2xl border-2 border-hh-green-950 bg-hh-cream p-8 text-left shadow-[10px_10px_0_0_#012c1a] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[14px_14px_0_0_#012c1a]"
            style={{ color: DARK_TEXT }}
          >
            <span className="rounded bg-hh-pink px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-hh-cream">
              For Solo Builders
            </span>

            <span className="mt-5 flex h-14 w-14 items-center justify-center rounded-lg bg-hh-yellow">
              <PersonIcon className="h-7 w-7" style={{ color: DARK_TEXT }} />
            </span>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-black uppercase">
              Build Solo
            </h2>
            <p className="mt-1 font-mono text-xs font-bold uppercase tracking-widest opacity-60">
              One builder. One identity.
            </p>

            <p className="mt-4 font-mono text-sm leading-relaxed opacity-80">
              Create your personal Hacker House Goa Builder ID with your photo, role, and tech
              stack.
            </p>

            <div className="mt-6 w-full rounded-lg bg-hh-green-950 px-4 py-3 font-mono text-xs font-bold uppercase tracking-wide text-hh-yellow">
              ⚡ 1 Photo · 1 Builder ID · Instant PNG
            </div>

            <span className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-hh-green-950 bg-hh-yellow px-4 py-3 text-sm font-bold uppercase tracking-wide text-hh-green-950 transition group-hover:bg-hh-yellow-soft">
              Build My ID <span aria-hidden>→</span>
            </span>
          </Link>

          {/* Team */}
          <Link
            href="/create/team"
            className="group flex flex-col items-start rounded-2xl border-2 border-hh-yellow bg-hh-green-950 p-8 text-left text-hh-cream shadow-[10px_10px_0_0_#f5c518] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[14px_14px_0_0_#f5c518]"
          >
            <span className="rounded bg-hh-yellow px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-hh-green-950">
              Team Mode
            </span>

            <span className="mt-5 flex h-14 w-14 items-center justify-center rounded-lg bg-hh-green-800">
              <PeopleIcon className="h-7 w-7 text-hh-cream" />
            </span>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-black uppercase text-hh-yellow">
              Build Your Squad
            </h2>
            <p className="mt-1 font-mono text-xs font-bold uppercase tracking-widest text-hh-cream/60">
              One team. Every builder.
            </p>

            <p className="mt-4 font-mono text-sm leading-relaxed text-hh-cream/80">
              Generate Builder IDs for your whole hackathon crew with your team name and up to
              three members.
            </p>

            <div className="mt-6 w-full rounded-lg border border-hh-yellow/60 px-4 py-3 font-mono text-xs font-bold uppercase tracking-wide text-hh-yellow">
              ⚡ Team Name · Up To 3 Members · Full Set Of IDs
            </div>

            <span className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-hh-cream px-4 py-3 text-sm font-bold uppercase tracking-wide text-hh-green-950 transition group-hover:bg-white">
              Build My Squad <span aria-hidden>→</span>
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="24" cy="24" r="10" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const r1 = 17;
        const r2 = 23;
        return (
          <line
            key={i}
            x1={24 + Math.cos(angle) * r1}
            y1={24 + Math.sin(angle) * r1}
            x2={24 + Math.cos(angle) * r2}
            y2={24 + Math.sin(angle) * r2}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 44 L38 8" strokeLinecap="round" />
      <path d="M22 20 L38 8 L30 24" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="38" cy="8" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PersonIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
    </svg>
  );
}

function PeopleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 21c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" strokeLinecap="round" />
      <circle cx="17" cy="9" r="2.6" />
      <path d="M15.5 14.7c2.9.4 5 2.9 5 6.3" strokeLinecap="round" />
    </svg>
  );
}
