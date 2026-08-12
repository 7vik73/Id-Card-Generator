"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import IDCard from "@/components/IDCard";
import TiltCard from "@/components/TiltCard";
import { slugify } from "@/lib/card";

export default function SoloGenerator() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [techStack, setTechStack] = useState("");
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhotoUrl(reader.result as string);
    reader.readAsDataURL(file);
  }

  async function handleDownload() {
    if (!cardRef.current) return;
    setIsExporting(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 3,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `hh-goa-2026-id-${slugify(name)}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setIsExporting(false);
    }
  }

  async function handleShare() {
    await handleDownload();
    const text = `Just built my HH Goa 2026 ID card 🌴 #FrameInGoa\n\nMake yours:`;
    const url = typeof window !== "undefined" ? window.location.origin : "https://hhgoa.com";
    const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(intent, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-start lg:justify-center">
      <section className="flex w-full max-w-md flex-col gap-5">
        <header>
          <p className="text-[11px] font-bold tracking-widest text-hh-yellow">HH GOA 2026</p>
          <h1 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-black text-hh-cream">
            ID Card Generator
          </h1>
          <p className="mt-2 text-sm text-hh-cream/70">
            Upload a photo, drop your name and stack — get a shareable Hacker House Goa 2026 badge in seconds.
          </p>
        </header>

        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide text-hh-yellow">
          Photo
          <div className="flex items-center gap-3 rounded-lg border border-dashed border-hh-yellow/60 p-3">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhoto}
              className="w-full text-xs font-normal normal-case text-hh-cream file:mr-3 file:rounded file:border-0 file:bg-hh-yellow file:px-3 file:py-1.5 file:text-xs file:font-bold file:text-hh-green-950"
            />
          </div>
          <span className="text-[10px] font-normal normal-case text-hh-cream/50">
            Any photo works — auto-cropped to a circle, no manual cropping needed.
          </span>
        </label>

        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide text-hh-yellow">
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ada Lovelace"
            className="rounded-lg border border-hh-yellow/40 bg-hh-green-950/60 px-3 py-2 text-sm font-normal normal-case text-hh-cream outline-none focus:border-hh-yellow"
          />
        </label>

        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide text-hh-yellow">
          Role
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Hacker"
            className="rounded-lg border border-hh-yellow/40 bg-hh-green-950/60 px-3 py-2 text-sm font-normal normal-case text-hh-cream outline-none focus:border-hh-yellow"
          />
        </label>

        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide text-hh-yellow">
          Tech stack
          <input
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            placeholder="React, Python, Postgres"
            className="rounded-lg border border-hh-yellow/40 bg-hh-green-950/60 px-3 py-2 text-sm font-normal normal-case text-hh-cream outline-none focus:border-hh-yellow"
          />
        </label>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleDownload}
            disabled={isExporting}
            className="flex-1 rounded-lg bg-hh-yellow px-4 py-3 text-sm font-bold uppercase tracking-wide text-hh-green-950 transition hover:bg-hh-yellow-soft disabled:opacity-60"
          >
            {isExporting ? "Generating…" : "Download PNG"}
          </button>
          <button
            onClick={handleShare}
            disabled={isExporting}
            className="flex-1 rounded-lg border-2 border-hh-yellow px-4 py-3 text-sm font-bold uppercase tracking-wide text-hh-yellow transition hover:bg-hh-yellow/10 disabled:opacity-60"
          >
            Share to X
          </button>
        </div>
        <p className="text-[10px] text-hh-cream/50">
          Sharing downloads your card first — X doesn&apos;t let us attach images automatically, so drop the
          downloaded PNG into the composer that opens. Tag it #FrameInGoa.
        </p>
      </section>

      <section className="flex w-full justify-center lg:sticky lg:top-12 lg:w-auto">
        <TiltCard>
          <IDCard ref={cardRef} name={name} role={role} techStack={techStack} photoUrl={photoUrl} />
        </TiltCard>
      </section>
    </main>
  );
}
