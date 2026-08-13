"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import type { IDCardData } from "@/components/IDCard";
import TeamIDCard from "@/components/TeamIDCard";
import TiltCard from "@/components/TiltCard";
import { loadPhotoAsDataUrl, slugify } from "@/lib/card";

const MAX_MEMBERS = 3;
const MIN_MEMBERS = 1;

function emptyMember(): IDCardData {
  return { name: "", role: "", techStack: "", photoUrl: null, builderClassSeed: "" };
}

export default function TeamGenerator() {
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState<IDCardData[]>([emptyMember()]);
  const [isExporting, setIsExporting] = useState(false);
  const [loadingPhotoIndex, setLoadingPhotoIndex] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  function updateMember(index: number, patch: Partial<IDCardData>) {
    setMembers((prev) => prev.map((m, i) => (i === index ? { ...m, ...patch } : m)));
  }

  async function handlePhoto(index: number, e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoadingPhotoIndex(index);
    try {
      updateMember(index, { photoUrl: await loadPhotoAsDataUrl(file) });
    } finally {
      setLoadingPhotoIndex(null);
    }
  }

  function addMember() {
    setMembers((prev) => (prev.length < MAX_MEMBERS ? [...prev, emptyMember()] : prev));
  }

  function removeMember(index: number) {
    setMembers((prev) => (prev.length > MIN_MEMBERS ? prev.filter((_, i) => i !== index) : prev));
  }

  function rerollBuilderClass(index: number) {
    updateMember(index, { builderClassSeed: Math.random().toString(36).slice(2) });
  }

  async function downloadTeamCard() {
    const node = cardRef.current;
    if (!node) return;
    setIsExporting(true);
    try {
      const dataUrl = await toPng(node, { pixelRatio: 3, cacheBust: true });
      const link = document.createElement("a");
      link.download = `hh-goa-2026-team-${slugify(teamName)}-id-card.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setIsExporting(false);
    }
  }

  async function shareTeamCard() {
    await downloadTeamCard();
    const url = typeof window !== "undefined" ? window.location.origin : "https://hhgoa.com";
    const text = `Shipping from Hyderabad 🌴⚡\n\nOur team is officially framed for HH Goa 2026.\n\nCheck out our Team ID Card 👇\n${url}\n\n#HHGoa2026 #FrameInGoa`;
    const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(intent, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-12">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-bold tracking-widest text-hh-yellow">HH GOA 2026</p>
        <h1 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-black text-hh-cream">
          Team ID Card
        </h1>
        <p className="mt-2 text-sm text-hh-cream/70">
          Name your team, add up to three teammates, and generate one combined Team ID Card
          with everyone framed together.
        </p>
      </header>

      <label className="mx-auto flex w-full max-w-md flex-col gap-2 text-xs font-bold uppercase tracking-wide text-hh-yellow">
        Team name
        <input
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Night Owls"
          className="rounded-lg border border-hh-yellow/40 bg-hh-green-950/60 px-3 py-2 text-sm font-normal normal-case text-hh-cream outline-none focus:border-hh-yellow"
        />
      </label>

      <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-8">
        {members.map((member, index) => (
          <div key={index} className="flex w-full max-w-md flex-col gap-3 rounded-lg border border-hh-yellow/30 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wide text-hh-yellow">
                Teammate {index + 1}
              </span>
              {members.length > MIN_MEMBERS && (
                <button
                  onClick={() => removeMember(index)}
                  className="text-[10px] font-bold uppercase tracking-wide text-hh-pink hover:underline"
                >
                  Remove
                </button>
              )}
            </div>

            <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide text-hh-yellow">
              Photo
              <div className="flex items-center gap-3 rounded-lg border border-dashed border-hh-yellow/60 p-2">
                <input
                  type="file"
                  accept="image/*,.heic,.heif"
                  onChange={(e) => handlePhoto(index, e)}
                  className="w-full text-xs font-normal normal-case text-hh-cream file:mr-3 file:rounded file:border-0 file:bg-hh-yellow file:px-3 file:py-1.5 file:text-xs file:font-bold file:text-hh-green-950"
                />
              </div>
              {loadingPhotoIndex === index && (
                <span className="text-[10px] font-normal normal-case text-hh-cream/50">
                  Converting photo…
                </span>
              )}
            </label>

            <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide text-hh-yellow">
              Name
              <input
                value={member.name}
                onChange={(e) => updateMember(index, { name: e.target.value })}
                placeholder="Ada Lovelace"
                className="rounded-lg border border-hh-yellow/40 bg-hh-green-950/60 px-3 py-2 text-sm font-normal normal-case text-hh-cream outline-none focus:border-hh-yellow"
              />
            </label>

            <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide text-hh-yellow">
              Role
              <input
                value={member.role}
                onChange={(e) => updateMember(index, { role: e.target.value })}
                placeholder="Hacker"
                className="rounded-lg border border-hh-yellow/40 bg-hh-green-950/60 px-3 py-2 text-sm font-normal normal-case text-hh-cream outline-none focus:border-hh-yellow"
              />
            </label>

            <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide text-hh-yellow">
              Tech stack
              <input
                value={member.techStack}
                onChange={(e) => updateMember(index, { techStack: e.target.value })}
                placeholder="React, Python, Postgres"
                className="rounded-lg border border-hh-yellow/40 bg-hh-green-950/60 px-3 py-2 text-sm font-normal normal-case text-hh-cream outline-none focus:border-hh-yellow"
              />
            </label>

            <button
              type="button"
              onClick={() => rerollBuilderClass(index)}
              className="flex items-center justify-center gap-2 rounded-lg border border-dashed border-hh-pink/60 px-3 py-2 text-xs font-bold uppercase tracking-wide text-hh-pink transition hover:bg-hh-pink/10"
            >
              🔀 Reroll Builder Class
            </button>
          </div>
        ))}
      </div>

      {members.length < MAX_MEMBERS && (
        <button
          onClick={addMember}
          className="mx-auto w-full max-w-md rounded-lg border-2 border-dashed border-hh-yellow/60 px-4 py-3 text-sm font-bold uppercase tracking-wide text-hh-yellow transition hover:bg-hh-yellow/10"
        >
          + Add teammate ({members.length}/{MAX_MEMBERS})
        </button>
      )}

      <div className="flex flex-col items-center gap-6">
        <TiltCard>
          <TeamIDCard ref={cardRef} teamName={teamName} members={members} />
        </TiltCard>

        <div className="flex w-full max-w-[420px] gap-3">
          <button
            onClick={downloadTeamCard}
            disabled={isExporting}
            className="flex-1 rounded-lg border-2 border-hh-yellow px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-hh-yellow transition hover:bg-hh-yellow/10 disabled:opacity-60"
          >
            {isExporting ? "Rendering…" : "Download Team ID Card"}
          </button>
          <button
            onClick={shareTeamCard}
            disabled={isExporting}
            className="flex-1 rounded-lg bg-hh-yellow px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-hh-green-950 transition hover:bg-hh-yellow-soft disabled:opacity-60"
          >
            Share to X
          </button>
        </div>
      </div>
    </main>
  );
}
