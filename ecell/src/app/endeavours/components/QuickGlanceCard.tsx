"use client";

import React, { useState, useRef, useCallback } from "react";
import { CARDS } from "./data";
import { useInView } from "./hooks";

type CardType = (typeof CARDS)[number];

// Helper to calculate badge colors cleanly from hex or theme intent
function getBadgeStyle(badgeColor: string) {
  switch (badgeColor) {
    case "#c0440a":
      return {
        text: "#f97316", // Amber / Orange
        border: "rgba(249, 115, 22, 0.25)",
        bg: "rgba(249, 115, 22, 0.08)",
      };
    case "#3a2d6e":
      return {
        text: "#a855f7", // Purple / Violet
        border: "rgba(168, 85, 247, 0.25)",
        bg: "rgba(168, 85, 247, 0.08)",
      };
    case "#0a3d6e":
    default:
      return {
        text: "#38bdf8", // Sky Blue
        border: "rgba(56, 189, 248, 0.25)",
        bg: "rgba(56, 189, 248, 0.08)",
      };
  }
}

export function QuickGlanceCard({
  card,
  index,
}: {
  card: CardType;
  index: number;
}) {
  const { ref, inView } = useInView(0.08);
  const [hovered, setHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    },
    []
  );

  const rotX = hovered ? (mousePos.y - 0.5) * -10 : 0;
  const rotY = hovered ? (mousePos.x - 0.5) * 10 : 0;

  const badgeStyle = getBadgeStyle(card.badgeColor);

  return (
    <div
      ref={ref}
      style={{ perspective: 1000, perspectiveOrigin: "50% 50%" }}
      className="w-full"
    >
      <div
        ref={cardRef}
        onClick={() => setIsExpanded((prev) => !prev)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setMousePos({ x: 0.5, y: 0.5 });
        }}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden rounded-2xl p-5 sm:p-6 cursor-pointer select-none transition-all duration-300"
        style={{
          background: hovered
            ? "rgba(12, 24, 38, 0.75)"
            : isExpanded
            ? "rgba(10, 20, 32, 0.65)"
            : "rgba(8, 16, 26, 0.5)",
          border: `1px solid ${
            hovered
              ? "rgba(56, 189, 248, 0.25)"
              : isExpanded
              ? "rgba(56, 189, 248, 0.18)"
              : "rgba(255, 255, 255, 0.07)"
          }`,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: hovered
            ? "0 20px 40px rgba(0,0,0,0.7), 0 0 30px rgba(56,189,248,0.1), inset 0 1px 0 rgba(255,255,255,0.1)"
            : "0 8px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
          opacity: inView ? 1 : 0,
          transform: inView
            ? `translateY(0) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${
                hovered ? 1.015 : 1
              })`
            : "translateY(40px) rotateX(15deg) scale(0.96)",
          transition: hovered
            ? "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.1s ease-out, background 0.3s ease"
            : `opacity 0.6s ease ${index * 0.08}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${
                index * 0.08
              }s, box-shadow 0.4s ease, border-color 0.3s ease, background 0.3s ease`,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Cursor Radial Light Follower */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            background: hovered
              ? `radial-gradient(circle 250px at ${mousePos.x * 100}% ${
                  mousePos.y * 100
                }%, rgba(56, 189, 248, 0.08) 0%, transparent 70%)`
              : "none",
          }}
        />

        {/* Ambient Top Glow using Card's Accent Color */}
        <div
          aria-hidden="true"
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none transition-opacity duration-500 blur-2xl"
          style={{
            backgroundColor: card.iconBg,
            opacity: hovered ? 0.25 : 0.08,
          }}
        />

        {/* Card Header: Icon & Category Badge */}
        <div className="flex items-start justify-between gap-3 mb-4 relative z-10">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 border transition-transform duration-300"
            style={{
              backgroundColor: `${card.iconBg}22`,
              borderColor: `${card.iconBg}44`,
              transform: `translateZ(${hovered ? 16 : 0}px)`,
            }}
          >
            {card.icon}
          </div>

          <span
            className="text-[9px] font-mono font-bold tracking-widest uppercase rounded-md px-2.5 py-1 border transition-colors shrink-0"
            style={{
              color: badgeStyle.text,
              borderColor: badgeStyle.border,
              backgroundColor: badgeStyle.bg,
            }}
          >
            {card.badge}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-extrabold text-white tracking-tight mb-2 transition-transform duration-300"
          style={{ transform: `translateZ(${hovered ? 8 : 0}px)` }}
        >
          {card.title}
        </h3>

        {/* Description Body */}
        <p
          className={`text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-4 transition-all duration-300 ${
            isExpanded ? "block" : "line-clamp-3"
          }`}
        >
          {card.description}
        </p>

        {/* Card Footer: Tags & Read More Pill */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5 relative z-10">
          <div className="flex items-center gap-1.5 flex-wrap">
            {(card.tags ?? []).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono font-medium text-slate-400 bg-slate-900/60 border border-white/10 rounded-full px-2.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            className={`text-[11px] font-mono font-semibold flex items-center gap-1 transition-all duration-300 shrink-0 ${
              hovered || isExpanded
                ? "text-sky-400 translate-x-0.5"
                : "text-slate-400"
            }`}
          >
            <span>{isExpanded ? "Less" : "More"}</span>
            <span className="text-xs">{isExpanded ? "↑" : "→"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}