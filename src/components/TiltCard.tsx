"use client";

import { useRef, useState, type ReactNode } from "react";

const REST_STYLE: React.CSSProperties = {
  transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
};

export default function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>(REST_STYLE);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 14;
    const rotateX = (0.5 - py) * 14;
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
    });
  }

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setStyle(REST_STYLE)}
      className={className}
      style={{ transition: "transform 200ms ease-out", willChange: "transform", ...style }}
    >
      {children}
    </div>
  );
}
