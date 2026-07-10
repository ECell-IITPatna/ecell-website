"use client";

import { useEffect, useRef, useState } from "react";
import { CARDS } from "./components/data";
import { useMouse } from "./components/hooks";
import { NebulaCanvas } from "./components/NebulaCanvas";
import { ShootingStars } from "./components/ShootingStars";
import { AuroraCurtain } from "./components/AuroraCurtain";
import { AnimatedTitle } from "./components/AnimatedTitle";
import { FeaturedCard } from "./components/FeaturedCard";
import { QuickGlanceCard } from "./components/QuickGlanceCard";
import { FloatingOrbs } from "./components/FloatingOrbs";

export default function EndeavoursPage() {
  const mouse = useMouse();
  const [heroVisible, setHeroVisible] = useState(false);
  const glanceRef = useRef<HTMLDivElement>(null);
  const [glanceVisible, setGlanceVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setGlanceVisible(true); },
      { threshold: 0.1 }
    );
    if (glanceRef.current) obs.observe(glanceRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(170deg, #060d14 0%, #08121c 40%, #050d16 80%, #060e18 100%)",
      color: "#fff",
      fontFamily: "'Geist', 'Inter', system-ui, sans-serif",
      position: "relative",
      overflowX: "hidden",
    }}>

      {/* Animated starfield canvas */}
      <NebulaCanvas mouse={mouse} />

      {/* Shooting stars */}
      <ShootingStars />

      {/* Aurora curtain at top */}
      <AuroraCurtain />

      {/* Floating ambient orbs */}
      <FloatingOrbs />

      {/* Content */}
      <div className="endeavours-content-container" style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto", padding: "clamp(40px, 8vw, 60px) clamp(16px, 4vw, 28px) clamp(40px, 8vw, 80px)" }}>

        {/* ── HERO ─────────────────────────────────────── */}
        <div>
          {/* E-CELL label */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10, marginBottom: 20,
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(-16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}>
            <div style={{ width: 28, height: 2, background: "#e86a2a" }} />
            <span style={{ fontSize: 11, letterSpacing: 2.5, fontWeight: 700, color: "#e86a2a" }}>
              E-CELL IIT PATNA
            </span>
          </div>

          {/* 3D Word-reveal heading */}
          <AnimatedTitle text="Our Endeavours" visible={heroVisible} delay={0.1} />

          {/* Sub */}
          <p style={{
            fontSize: 15, color: "#6a8fa0", lineHeight: 1.7,
            maxWidth: 460, margin: "0 0 40px",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
          }}>
            From flagship summits to grassroots initiatives — a record of
            everything E-Cell builds to fuel the entrepreneurial spirit at IIT Patna.
          </p>

          {/* Featured card */}
          <div style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 0.7s ease 0.5s" }}>
            <FeaturedCard />
          </div>
        </div>

        {/* ── QUICK GLANCE ──────────────────────────────── */}
        <div ref={glanceRef} style={{ marginTop: 80 }}>
          <h2 style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 900, letterSpacing: -1.5, color: "#e8f4ff",
            margin: "0 0 36px",
            opacity: glanceVisible ? 1 : 0,
            transform: glanceVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}>
            Quick Glance
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(16px, 4vw, 20px)",
          }}>
            {CARDS.map((card, i) => (
              <QuickGlanceCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 80, fontSize: 12, color: "#2a4a60", letterSpacing: 0.5 }}>
          © 2026 Entrepreneurship Cell, IIT Patna
        </div>
      </div>

      {/* All keyframe animations */}
      <style>{`
        * { box-sizing: border-box; }

        @keyframes shoot {
          0%   { opacity: 0; transform: rotate(var(--angle, 30deg)) translateX(0); }
          5%   { opacity: 1; }
          80%  { opacity: 0.8; }
          100% { opacity: 0; transform: rotate(var(--angle, 30deg)) translateX(${300}px); }
        }

        /* Each shooting star uses its own inline animation with translateX */
        div[style*="shoot"] { animation-name: shootStar; }

        @keyframes shootStar {
          0%   { opacity: 0;   transform: translateX(0)    rotate(0deg); }
          8%   { opacity: 0.9; }
          85%  { opacity: 0.6; }
          100% { opacity: 0;   transform: translateX(300px) rotate(0deg); }
        }

        @keyframes aurora0 {
          0%   { transform: translateX(-5%) scaleX(1);   opacity: 0.8; }
          100% { transform: translateX(8%)  scaleX(1.1); opacity: 1;   }
        }
        @keyframes aurora1 {
          0%   { transform: translateX(4%)  scaleY(1);   opacity: 0.7; }
          100% { transform: translateX(-6%) scaleY(1.15); opacity: 1;  }
        }
        @keyframes aurora2 {
          0%   { transform: scaleX(1)    translateY(0);  opacity: 0.6; }
          100% { transform: scaleX(1.1)  translateY(4%); opacity: 0.9; }
        }

        @keyframes floatOrb0 {
          0%   { transform: translate(-50%, -50%) scale(1);    opacity: 0.7; }
          100% { transform: translate(-35%, -60%) scale(1.2);  opacity: 1;   }
        }
        @keyframes floatOrb1 {
          0%   { transform: translate(-50%, -50%) scale(1.1);  opacity: 0.6; }
          100% { transform: translate(-65%, -40%) scale(0.85); opacity: 0.9; }
        }
        @keyframes floatOrb2 {
          0%   { transform: translate(-50%, -50%) scale(0.9);  opacity: 0.5; }
          100% { transform: translate(-40%, -65%) scale(1.15); opacity: 0.8; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 0.9; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }

        @media (max-width: 768px) {
          .featured-card-content { gap: 24px !important; }
          .featured-stats-container { flex-wrap: wrap; }
          .featured-stat-item {
            flex: 1 1 calc(50% - 16px) !important;
            margin-bottom: 16px;
          }
          .featured-stat-item:nth-child(odd) {
            border-left: none !important;
            padding-left: 0 !important;
          }
          .featured-stat-item:nth-child(even) {
            border-left: 1px solid rgba(255,255,255,0.1) !important;
            padding-left: 16px !important;
          }
        }

        @media (max-width: 480px) {
          .featured-stat-item {
            flex: 1 1 100% !important;
            border-left: none !important;
            padding-left: 0 !important;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}