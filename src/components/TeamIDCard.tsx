import { forwardRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { formatTechStack, generateBuilderClass, generateIdNumber } from "@/lib/card";
import type { IDCardData } from "./IDCard";

export type TeamIDCardData = {
  teamName: string;
  members: IDCardData[];
};

const TeamIDCard = forwardRef<HTMLDivElement, TeamIDCardData>(function TeamIDCard(
  { teamName, members },
  ref
) {
  const displayTeamName = teamName.trim() || "YOUR TEAM";
  const teamId = generateIdNumber(teamName.trim() || "team");

  return (
    <div
      ref={ref}
      className="relative w-[900px] shrink-0 overflow-hidden rounded-[28px] border-[3px] border-hh-yellow bg-hh-green-950 font-mono text-hh-cream shadow-2xl"
    >
      {/* lanyard hole */}
      <div className="absolute left-1/2 top-3 h-3 w-20 -translate-x-1/2 rounded-full bg-[#07281d]" />

      <div className="px-8 pb-0 pt-8">
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

        {/* team name banner */}
        <div className="mt-4 flex items-center justify-center gap-2 text-hh-pink">
          <span>✦</span>
          <div className="truncate font-[family-name:var(--font-display)] text-[24px] font-black uppercase leading-tight text-hh-yellow">
            TEAM {displayTeamName}
          </div>
          <span>✦</span>
        </div>

        {/* member row — column count and centering adjust live as teammates are added/removed */}
        <div
          className={`mt-4 grid gap-4 ${
            members.length === 1
              ? "grid-cols-1 justify-items-center"
              : members.length === 2
                ? "grid-cols-2"
                : "grid-cols-3"
          }`}
        >
          {members.map((member, i) => {
            const name = member.name.trim() || `TEAMMATE ${i + 1}`;
            const role = member.role.trim() || "HACKER";
            const stack = formatTechStack(member.techStack) || "TECH STACK";
            const builderClass = generateBuilderClass(
              `${member.name.trim() || `hacker-${i}`}::${member.builderClassSeed ?? ""}`
            );
            return (
              <div
                key={i}
                className={`flex flex-col items-center rounded-lg border border-hh-yellow/30 p-3 text-center ${
                  members.length === 1 ? "w-64" : "w-full"
                }`}
              >
                <div className="relative h-[90px] w-[90px] overflow-hidden rounded-full border-[3px] border-hh-yellow bg-hh-cream">
                  {member.photoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={member.photoUrl} alt={name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-center text-[8px] font-bold leading-tight text-hh-green-900">
                      NO
                      <br />
                      PHOTO
                    </div>
                  )}
                </div>
                <div className="mt-2 w-full truncate font-[family-name:var(--font-display)] text-[13px] font-black uppercase text-hh-yellow">
                  {name}
                </div>
                <div className="mt-1 rounded bg-hh-yellow px-2 py-0.5 text-[8px] font-bold uppercase text-hh-green-950">
                  {role}
                </div>
                <div className="mt-1 text-[7px] font-bold uppercase tracking-widest text-hh-pink">
                  ⚡ {builderClass}
                </div>
                <div className="mt-1 w-full truncate text-[7px] text-hh-cream/80">{stack}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* illustration */}
      <div className="relative mt-4 h-[220px] w-full overflow-hidden">
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
          <div className="text-center text-[9px] leading-tight text-hh-cream">
            <div>📅 28 – 31 OCT 2026</div>
            <div>📍 GOA, INDIA</div>
            <div>🪪 TEAM ID: {teamId}</div>
          </div>
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

export default TeamIDCard;
