"use client";

import React, { useState, useRef, useCallback } from "react";
import { CARDS } from "./data";
import { useInView } from "./hooks";

export function QuickGlanceCard({ card, index }: { card: (typeof CARDS)[0]; index: number }) {
  const { ref, inView } = useInView(0.08);
  const [hovered, setHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  const rotX = hovered ? (mousePos.y - 0.5) * -12 : 0;
  const rotY = hovered ? (mousePos.x - 0.5) * 12 : 0;

  const badgeTextColor = card.badgeColor === "#c0440a" ? "#e86a2a" : card.badgeColor === "#3a2d6e" ? "#9b8fe8" : "#5ab0e0";
  const badgeBorderColor = card.badgeColor === "#c0440a" ? "#e86a2a44" : card.badgeColor === "#3a2d6e" ? "#9b8fe844" : "#5ab0e044";
  const badgeBgColor = card.badgeColor === "#c0440a" ? "#e86a2a11" : card.badgeColor === "#3a2d6e" ? "#9b8fe811" : "#5ab0e011";

  return (
    <div
      ref={ref}
      style={{ perspective: 900, perspectiveOrigin: "50% 50%" }}
    >
      <div
        ref={cardRef}
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setMousePos({ x: 0.5, y: 0.5 }); }}
        onMouseMove={handleMouseMove}
        style={{
          background: hovered
            ? "linear-gradient(135deg, #0e2030 0%, #172533 100%)"
            : isExpanded
            ? "linear-gradient(135deg, #0c1e2c 0%, #132230 100%)"
            : "linear-gradient(135deg, #0a1a26 0%, #111e2a 100%)",
          border: `1px solid ${hovered ? "rgba(100,180,255,0.3)" : isExpanded ? "rgba(100,180,255,0.25)" : "rgba(60,100,130,0.2)"}`,
          borderRadius: 14,
          padding: "clamp(16px, 4vw, 24px) clamp(16px, 4vw, 24px) clamp(16px, 4vw, 20px)",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          boxShadow: hovered
            ? "0 20px 50px rgba(0,50,120,0.4), 0 0 0 1px rgba(100,180,255,0.12)"
            : isExpanded
            ? "0 10px 30px rgba(0,30,80,0.3), 0 0 0 1px rgba(100,180,255,0.08)"
            : "0 4px 20px rgba(0,0,0,0.3)",
          opacity: inView ? 1 : 0,
          transform: inView
            ? `translateY(0) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${hovered ? 16 : 0}px) scale(${hovered ? 1.01 : 1})`
            : "translateY(60px) rotateX(20deg) scale(0.96)",
          transition: hovered
            ? "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.1s ease, background 0.3s ease"
            : `opacity 0.7s ease ${index * 0.1}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s, box-shadow 0.4s ease, border-color 0.3s ease, background 0.3s ease`,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Dynamic light */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: 14,
          background: hovered
            ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(80,160,255,0.08) 0%, transparent 55%)`
            : "none",
          pointerEvents: "none",
        }} />

        {/* Glow top-right */}
        <div style={{
          position: "absolute", top: -40, right: -40,
          width: 120, height: 120, borderRadius: "50%",
          background: `rgba(${card.iconBg.replace("#", "").match(/.{2}/g)!.map(h => parseInt(h, 16)).join(",")},0.12)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
          pointerEvents: "none",
          filter: "blur(20px)",
        }} />

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: card.iconBg + "33",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18,
            border: `1px solid ${card.iconBg}55`,
            transform: `translateZ(${hovered ? 24 : 0}px)`,
            transition: hovered ? "transform 0.1s ease" : "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
          }}>
            {card.icon}
          </div>
          <span style={{
            fontSize: 9, letterSpacing: 1.5, fontWeight: 700,
            color: badgeTextColor,
            border: `1px solid ${badgeBorderColor}`,
            background: badgeBgColor,
            borderRadius: 4, padding: "3px 8px",
          }}>
            {card.badge}
          </span>
        </div>

        <h3 style={{
          fontSize: 17, fontWeight: 700, color: "#d8eaf8",
          margin: "0 0 10px",
          transform: `translateZ(${hovered ? 10 : 0}px)`,
          transition: hovered ? "transform 0.1s ease" : "transform 0.5s ease",
        }}>
          {card.title}
        </h3>
        <p style={{
          fontSize: 13, color: "#6a8fa8", lineHeight: 1.65,
          margin: "0 0 16px",
          display: isExpanded ? "block" : "-webkit-box",
          WebkitLineClamp: isExpanded ? undefined : 3,
          WebkitBoxOrient: isExpanded ? undefined : ("vertical" as const),
          overflow: isExpanded ? "visible" : "hidden",
          transition: "color 0.3s ease",
        }}>
          {card.description}
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {card.tags.map((t) => (
              <span key={t} style={{
                fontSize: 11, color: "#5a88a8",
                background: "rgba(60,100,130,0.15)",
                border: "1px solid rgba(60,100,130,0.2)",
                borderRadius: 20, padding: "2px 10px",
              }}>
                {t}
              </span>
            ))}
          </div>
          <span style={{
            color: hovered || isExpanded ? "#5ab0e0" : "#3a607a",
            fontSize: 16,
            fontWeight: 700,
            transition: "color 0.3s, transform 0.3s",
            transform: hovered
              ? isExpanded
                ? "translateY(2px) translateZ(8px)"
                : "translateX(4px) translateZ(8px)"
              : "translate(0, 0)",
          }}>
            {isExpanded ? "▾" : "›"}
          </span>
        </div>
      </div>
    </div>
  );
}
