"use client";

import { useState } from "react";
import { useInView } from "@/app/endeavours/components/hooks";

export type SponsorPerk = {
  iconBg: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
};

function getBadgeStyle(badgeColor: string) {
  switch (badgeColor) {
    case "#c0440a":
      return {
        text: "#f97316",
        border: "rgba(249, 115, 22, 0.3)",
        bg: "rgba(249, 115, 22, 0.1)",
      };
    case "#3a2d6e":
      return {
        text: "#a855f7",
        border: "rgba(168, 85, 247, 0.3)",
        bg: "rgba(168, 85, 247, 0.1)",
      };
    case "#0a3d6e":
    default:
      return {
        text: "#38bdf8",
        border: "rgba(56, 189, 248, 0.3)",
        bg: "rgba(56, 189, 248, 0.1)",
      };
  }
}

export function SponsorPerkCard({
  perk,
  index,
}: {
  perk: SponsorPerk;
  index: number;
}) {
  const { ref, inView } = useInView(0.08);
  const [hovered, setHovered] = useState(false);

  const badgeStyle = getBadgeStyle(perk.badgeColor);

  return (
    <div ref={ref} className="h-full w-full">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex h-full min-h-[240px] select-none flex-col items-center justify-start overflow-hidden rounded-2xl border p-6 text-center transition-all duration-300 sm:min-h-[260px] sm:p-8"
        style={{
          backgroundColor: "#0b101d",
          borderColor: hovered ? badgeStyle.border : "rgba(255, 255, 255, 0.09)",
          boxShadow: hovered
            ? "0 20px 45px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.06)"
            : "0 10px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(32px)",
          transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${
            index * 0.08
          }s, box-shadow 0.3s ease, border-color 0.3s ease`,
        }}
      >
        {/* Solid top accent */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{ backgroundColor: perk.iconBg }}
        />

        <span
          className="mb-4 mt-1 shrink-0 rounded-md border px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest"
          style={{
            color: badgeStyle.text,
            borderColor: badgeStyle.border,
            backgroundColor: badgeStyle.bg,
          }}
        >
          {perk.badge}
        </span>

        <h3 className="mb-2 text-lg font-extrabold tracking-tight text-white">
          {perk.title}
        </h3>

        <p className="mx-auto mb-2 max-w-sm text-xs font-normal leading-relaxed text-slate-300 sm:text-sm">
          {perk.description}
        </p>
      </div>
    </div>
  );
}
