import { forwardRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { formatTechStack, generateIdNumber } from "@/lib/card";

export type IDCardData = {
  name: string;
  role: string;
  techStack: string;
  photoUrl: string | null;
};

const IDCard = forwardRef<HTMLDivElement, IDCardData>(function IDCard(
  { name, role, techStack, photoUrl },
  ref
) {
  const displayName = name.trim() || "YOUR NAME";
  const displayRole = role.trim() || "HACKER";
  const stackDisplay = formatTechStack(techStack) || "YOUR TECH STACK HERE";
  const idNumber = generateIdNumber(name.trim() || "hacker");

  return (
    <div
      ref={ref}
      className="relative w-[420px] shrink-0 overflow-hidden rounded-[28px] border-[3px] border-hh-yellow bg-hh-green-950 font-mono text-hh-cream shadow-2xl"
    >
      {/* lanyard hole */}
      <div className="absolute left-1/2 top-3 h-3 w-20 -translate-x-1/2 rounded-full bg-[#07281d]" />

      <div className="px-6 pb-0 pt-8">
        {/* header row */}
        <div className="flex items-start justify-between text-hh-yellow">
          <div className="leading-tight">
            <div className="text-[13px] font-bold">2:47PM</div>
            <div className="text-[9px] tracking-widest">STUDIO</div>
          </div>
          <div className="mt-1 rounded border border-dashed border-hh-yellow px-2 py-1 text-[9px] tracking-widest">
            HACK · BUILD · SHIP
          </div>
        </div>

        {/* headline */}
        <div className="mt-3 flex items-center justify-center gap-1 font-[family-name:var(--font-display)] leading-none text-hh-yellow">
          <span className="text-[34px] font-black tracking-tight">HACKER</span>
          <span
            className="-rotate-6 rounded-md bg-hh-green-950 px-1 text-[22px] font-bold text-hh-pink font-[family-name:var(--font-devanagari)]"
            style={{ textShadow: "0 0 0" }}
          >
            गोवा
          </span>
          <span className="text-[34px] font-black tracking-tight">HOUSE</span>
        </div>
        <div className="mt-1 flex items-center justify-between text-[9px] tracking-wide text-hh-yellow">
          <span>GOA, INDIA · 28–31 OCT 2026</span>
          <span className="text-right">BY DEVELOPERS,
            <br />FOR DEVELOPERS
          </span>
        </div>

        {/* identity row */}
        <div className="mt-4 flex items-start gap-4">
          <div className="relative shrink-0">
            <div className="relative h-[130px] w-[130px] overflow-hidden rounded-full border-[4px] border-hh-yellow bg-hh-cream">
              {photoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={photoUrl}
                  alt="Participant"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center text-center text-hh-green-900">
                  <PalmIcon className="h-8 w-8 opacity-40" />
                  <span className="mt-1 text-[10px] font-bold leading-tight">
                    YOUR PHOTO
                    <br />
                    HERE
                  </span>
                </div>
              )}
            </div>
            <div className="absolute -bottom-2 -left-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-hh-pink bg-hh-green-950 text-center text-[6px] font-bold leading-[1.1] text-hh-pink">
              HACKER
              <br />
              HOUSE
              <br />
              GOA 2026
            </div>
          </div>

          <div className="min-w-0 flex-1 pt-1">
            <div className="flex items-center gap-1 text-hh-pink">
              <span>✦</span>
              <div className="truncate font-[family-name:var(--font-display)] text-[22px] font-black uppercase leading-tight text-hh-yellow">
                {displayName}
              </div>
              <span>✦</span>
            </div>
            <div className="mt-1 inline-block rounded bg-hh-yellow px-2 py-0.5 text-[10px] font-bold uppercase text-hh-green-950">
              {displayRole}
            </div>
            <div className="mt-2 rounded border border-hh-cream/70 bg-hh-cream px-2 py-1 text-hh-green-950">
              <div className="text-[8px] font-bold tracking-widest">TECH STACK:</div>
              <div className="truncate text-[9px] font-bold">{stackDisplay}</div>
            </div>
            <div className="my-2 border-t border-dashed border-hh-yellow/60" />
            <ul className="space-y-1 text-[9px] leading-tight text-hh-cream">
              <li>📅 28 – 31 OCT 2026</li>
              <li>📍 GOA, INDIA</li>
              <li>🪪 ID: {idNumber}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* illustration */}
      <div className="relative mt-4 h-[300px] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/beach-scene.png"
          alt="Goa beach sunset"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
      </div>

      {/* footer — a distinct dark-green panel, clearly separated from the illustration by a yellow line */}
      <div className="relative border-t-2 border-hh-yellow bg-[#012c1a] px-5 pb-3 pt-5">
        <div className="flex items-center justify-between gap-2">
          <div className="text-center leading-tight text-hh-yellow">
            <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded border-2 border-hh-yellow bg-white p-0.5">
              <QRCodeSVG
                value="https://hhgoa.com"
                size={512}
                className="h-full w-full"
                bgColor="#ffffff"
                fgColor="#012c1a"
                level="M"
              />
            </div>
            <div className="text-[6px] tracking-wide">SCAN TO EXPLORE</div>
            <div className="text-[7px] font-bold">HHGOA.COM</div>
          </div>
          <div className="w-14 shrink-0" />
          <div className="rounded border-2 border-hh-yellow px-2 py-1 text-center text-[7px] font-bold leading-tight text-hh-yellow">
            BUILT DIFFERENT
            <br />
            BUILT TOGETHER
          </div>
        </div>

        {/* seal — straddles the separator line: half sits in the illustration above, half in the panel below */}
        <div className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-hh-yellow bg-[#012c1a] text-center text-[5.5px] font-bold leading-[1.1] text-hh-yellow shadow-md">
          HACKER HOUSE
          <br />
          GOA
          <br />
          ★ 2026 ★
        </div>
      </div>
    </div>
  );
});

function PalmIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21V10" strokeLinecap="round" />
      <path d="M12 10c-2-3-6-3-8-1 3 1 5 1 8 1Z" />
      <path d="M12 10c2-3 6-3 8-1-3 1-5 1-8 1Z" />
      <path d="M12 9c-1-3-4-4-6-3 2 2 4 3 6 3Z" />
      <path d="M12 9c1-3 4-4 6-3-2 2-4 3-6 3Z" />
    </svg>
  );
}

export default IDCard;
