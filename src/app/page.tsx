import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="relative flex-1 overflow-hidden px-8 pb-16 pt-8 sm:px-14 sm:pt-12">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* left: copy */}
        <div>
          <h1
            className="font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-6xl xl:text-7xl"
          >
            <span className="block text-hh-yellow">Frame</span>
            <span className="block italic text-hh-pink">Your</span>
            <span className="block text-hh-yellow">Build.</span>
          </h1>

          <div className="relative mt-3 w-fit">
            <span
              aria-hidden
              className="absolute -rotate-6 select-none whitespace-nowrap font-[family-name:var(--font-devanagari)] text-3xl font-bold text-black/40 sm:text-4xl"
              style={{ left: 4, top: 5 }}
            >
              हैक वाला
            </span>
            <span className="relative block -rotate-6 whitespace-nowrap font-[family-name:var(--font-devanagari)] text-3xl font-bold text-hh-pink sm:text-4xl">
              हैक वाला
            </span>
          </div>

          <p className="mt-8 max-w-md font-mono text-sm text-hh-cream sm:text-base">
            Turn your photo into an HH Goa 2026 builder frame. One upload, one poster-worthy
            profile.
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
        </div>

        {/* right: hero illustration */}
        <div className="relative mx-auto hidden w-full max-w-sm overflow-hidden rounded-[28px] border-2 border-hh-yellow shadow-[10px_10px_0_0_#012c1a] lg:block">
          <Image
            src="/hero-laptop.png"
            alt="Building at Hacker House Goa"
            width={830}
            height={1406}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* scooter sticker, tucked in the corner */}
      <div className="absolute bottom-8 left-8 -rotate-6 rounded-xl border-2 border-hh-green-950 bg-hh-cream p-2 shadow-[6px_6px_0_0_#ec1e79] sm:bottom-12 sm:left-14">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/scooter.png" alt="Scooter" className="h-16 w-auto sm:h-20" />
      </div>

      <div className="absolute bottom-10 right-8 -rotate-6 border-2 border-hh-pink px-4 py-2 text-center font-mono text-xs font-bold uppercase tracking-wide text-hh-pink sm:right-16">
        Check
        <br />
        Hype
        <span className="absolute -top-3 -right-3 text-hh-yellow">✦</span>
      </div>
    </main>
  );
}
