export function slugify(name: string): string {
  return (
    name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "hacker"
  );
}

/** Deterministic 4-digit ID derived from the name, stable across renders. */
export function generateIdNumber(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  const digits = (hash % 10000).toString().padStart(4, "0");
  return `HH-26-${digits}`;
}

export function formatTechStack(techStack: string): string {
  return techStack
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .join(" · ");
}

function isHeic(file: File): boolean {
  return (
    file.type === "image/heic" ||
    file.type === "image/heif" ||
    /\.hei[cf]$/i.test(file.name)
  );
}

function readAsDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

/**
 * Browsers can't decode HEIC/HEIF (the default format iPhone photos are
 * saved in), so an uploaded HEIC file silently fails to render as an <img>.
 * Convert it to JPEG client-side first; everything else passes through.
 */
export async function loadPhotoAsDataUrl(file: File): Promise<string> {
  if (!isHeic(file)) return readAsDataUrl(file);

  const heic2any = (await import("heic2any")).default;
  const converted = await heic2any({ blob: file, toType: "image/jpeg", quality: 0.9 });
  const blob = Array.isArray(converted) ? converted[0] : converted;
  return readAsDataUrl(blob);
}
