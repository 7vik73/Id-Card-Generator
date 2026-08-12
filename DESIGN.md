# HH Goa 2026 — ID Card Generator: Design Spec

Single source of truth for visual design. Every component must match tokens below. Reference: hhgoa.com, provided banner + ID card mockup images.

## 1. Brand Palette

| Token | Hex | Use |
|---|---|---|
| `--hh-green-950` | `#0B3D2E` | Card base background (deep forest green) |
| `--hh-green-900` | `#0E4430` | Beach scene sea band |
| `--hh-green-800` | `#14532D` | Beach scene mid palette / palm shadows |
| `--hh-yellow` | `#F5C518` | Primary accent — headline, borders, badges, sun |
| `--hh-yellow-soft` | `#FFE066` | Highlights on yellow elements |
| `--hh-pink` | `#EC1E79` | Secondary accent — "गोवा" stamp, seals, tags |
| `--hh-cream` | `#F3EEDD` | Photo-placeholder bg, tech-stack box bg |
| `--hh-white` | `#FFFFFF` | White text/icons on green |

Card is always dark green base — never invert to light theme. This is a fixed brand card, not a themeable UI surface.

## 2. Typography

- **Display / Headline** — `Fraunces` (Google Font, wide, high-contrast serif, closest open-source match to the mockup's condensed display serif). Weight 600–900. Used for "HACKER HOUSE", card holder NAME.
- **Label / Mono** — `Space Mono` (Google Font). Used for all small-caps meta text: studio tag, date, location, ID number, footer copy. Uppercase, letter-spacing wide.
- **Body** — system sans fallback only for form UI (outside the card itself), not used inside the card.

Load both via `next/font/google` in `layout.tsx`, expose as CSS vars `--font-display`, `--font-mono`.

## 3. Card Anatomy (portrait badge, aspect ~ 850:1190, rounded corners ~28px, yellow 3px border, lanyard hole cutout top-center)

Top to bottom:

1. **Header row** — left: "2:47 PM STUDIO" micro-logo (yellow, mono, 2 lines). Right: "HACK · BUILD · SHIP" small tag.
2. **Lanyard hole** — centered pill cutout at top edge (cream/transparent), purely decorative.
3. **Headline block** — "HACKER" + rotated pink "गोवा" badge + "HOUSE" on one line (wraps on mobile), Fraunces black weight, yellow fill, tight tracking. Below: "GOA, INDIA · 28–31 OCT 2026" left / "BY DEVELOPERS, FOR DEVELOPERS" right, mono small.
4. **Identity row** (2-col):
   - Left: circular photo frame (cream bg, yellow 4px ring, dashed inner ring optional). User photo auto-cover-fit, no manual crop UI. Pink circular stamp "HACKER HOUSE GOA 2026" overlapping bottom-left of the circle.
   - Right: participant **NAME** (Fraunces, yellow, large, uppercase), role pill below (yellow bg, green text, e.g. "HACKER" / "BUILDER"), cream rounded box "TECH STACK: {value}", dashed yellow divider, then icon+label meta rows: 📅 dates · 📍 Goa, India · 👥 generated **builder class** tagline · 🪪 `ID: HH-26-XXXX`.
5. **Illustration band** (~35–40% of card height) — beach/sunset SVG: yellow sun w/ rays reflecting on sea, palm trees both edges, beach huts/umbrellas silhouette row, all in green tint over dark green bg (matches banner artwork).
6. **Footer row** — left: yellow-bordered QR square ("SCAN TO EXPLORE / HHGOA.COM"), center: circular seal "HACKER HOUSE GOA · 2026" w/ palm + stars, right: yellow-bordered tag "BUILT DIFFERENT / BUILT TOGETHER".

## 4. Generated Fields (user input → card)

| Field | Source | Notes |
|---|---|---|
| Photo | file upload | object-fit: cover, auto-centered circle mask, no manual crop step |
| Name | text input | required, uppercase on render |
| Tech stack | text input (comma-separated) | rendered as typed, joined with " · " |
| Role/badge | select (Hacker / Builder / Designer / Mentor) default "Hacker" | |
| Builder class | **auto-generated** from tech stack input (e.g. stack contains "React"+"Python" → "Full-Stack Alchemist") | deterministic keyword-match generator, fallback "Full-Stack Builder" |
| ID number | auto-generated | `HH-26-` + 4-digit hash of name, stable per name |

## 5. Rendering & Export

- Card built as real DOM (React component), not canvas-drawn — matches design pixel-for-pixel via CSS, easier to maintain.
- Export via `html-to-image` (`toPng`) at 3x pixel ratio for crisp downloads.
- Download button → PNG file `hh-goa-2026-id-{name-slug}.png`.
- Share to X button → `https://twitter.com/intent/tweet` with pre-filled text + `#FrameInGoa` + link to generator; image must be downloaded first (X intent can't attach files programmatically) — UI copy should say "downloaded! now attach it on X".

## 6. Phase 2 (not this pass)

Combined multi-teammate frame — same visual language, multiple photo circles arranged in a grid/row variant of the card. Deferred until single-card generator is solid.
