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
