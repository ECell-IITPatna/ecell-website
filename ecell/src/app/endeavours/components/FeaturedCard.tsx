"use client";

import React, { useState, useRef, useCallback } from "react";
import { FEATURED } from "./data";
import { useInView } from "./hooks";

export function FeaturedCard() {
  const { ref, inView } = useInView(0.1);
  const [closed, setClosed] = useState(false);
  const [hovered, setHovered] = useState(false);
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

  if (closed) return null;

  const rotX = hovered ? (mousePos.y - 0.5) * -8 : 0;
  const rotY = hovered ? (mousePos.x - 0.5) * 8 : 0;

  return (
    <div
      ref={ref}
      style={{ perspective: 1000, perspectiveOrigin: "50% 50%" }}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setMousePos({ x: 0.5, y: 0.5 }); }}
        onMouseMove={handleMouseMove}
        style={{
          background: "linear-gradient(135deg, #0f2027 0%, #1a2a3a 40%, #0d1f2e 100%)",
          border: `1px solid rgba(100,160,200,${hovered ? 0.35 : 0.18})`,
          borderRadius: 16,
          padding: "clamp(20px, 5vw, 32px) clamp(20px, 5vw, 36px)",
          position: "relative",
          backdropFilter: "blur(12px)",
          boxShadow: hovered
            ? "0 24px 60px rgba(0,0,0,0.7), 0 0 40px rgba(40,100,200,0.15), inset 0 1px 0 rgba(255,255,255,0.08)"
            : "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
          opacity: inView ? 1 : 0,
          transform: inView
            ? `translateY(0) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${hovered ? 12 : 0}px)`
            : "translateY(40px)",
          transition: hovered
            ? "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.08s ease"
            : "opacity 0.7s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease, border-color 0.3s ease",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Dynamic light reflection */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 16,
            background: hovered
              ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(100,180,255,0.07) 0%, transparent 60%)`
              : "none",
            pointerEvents: "none",
            transition: "opacity 0.3s",
          }}
        />

        {/* Aurora shimmer on border */}
        <div
          style={{
            position: "absolute",
            inset: -1,
            borderRadius: 17,
            background: hovered
              ? `conic-gradient(from ${mousePos.x * 360}deg at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(60,140,255,0.3), rgba(120,60,220,0.2), rgba(40,120,200,0.3), transparent 60%)`
              : "none",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: 1,
            pointerEvents: "none",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />

        {/* Close */}
        <button
          onClick={() => setClosed(true)}
          style={{
            position: "absolute", top: 16, right: 16,
            width: 28, height: 28, borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.07)",
            color: "#aaa", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, lineHeight: 1, zIndex: 2,
          }}
        >
          ×
        </button>

        {/* Tag */}
        <div style={{ fontSize: 10, letterSpacing: 2, color: "#7ab3d4", fontWeight: 600, marginBottom: 16 }}>
          {FEATURED.tag}
        </div>

        <div className="featured-card-content" style={{ display: "flex", gap: "clamp(24px, 5vw, 40px)", flexWrap: "wrap" }}>
          {/* Left */}
          <div style={{ flex: "1 1 240px" }}>
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: "rgba(60,130,200,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, marginBottom: 16,
              border: "1px solid rgba(100,180,255,0.15)",
              transform: `translateZ(${hovered ? 20 : 0}px)`,
              transition: "transform 0.08s ease",
            }}>
              {FEATURED.icon}
            </div>
            <h2 style={{ fontSize: "clamp(22px, 5vw, 28px)", fontWeight: 700, color: "#e8f4ff", margin: "0 0 12px" }}>
              {FEATURED.title}
            </h2>
            <p style={{ fontSize: 14, color: "#8aabb8", lineHeight: 1.7, margin: 0 }}>
              {FEATURED.description}
            </p>
            <div className="featured-stats-container" style={{ display: "flex", gap: 0, marginTop: 32 }}>
              {FEATURED.stats.map((s, i) => (
                <div key={i} className="featured-stat-item" style={{
                  flex: 1,
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  paddingLeft: i > 0 ? 24 : 0,
                }}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "#e0efff", letterSpacing: -1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 10, letterSpacing: 1.5, color: "#5a8aa0", fontWeight: 600, marginTop: 4 }}>
                    {s.label.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ flex: "1 1 180px", minWidth: 180 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#c0d8e8", marginBottom: 14 }}>
              Key Highlights
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {FEATURED.highlights.map((h) => (
                <li key={h} style={{ display: "flex", alignItems: "center", gap: 8, color: "#8aabb8", fontSize: 13 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4a9ebe", flexShrink: 0 }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
