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

  const rotX = hovered ? (mousePos.y - 0.5) * -6 : 0;
  const rotY = hovered ? (mousePos.x - 0.5) * 6 : 0;

  // Read status or default to UPCOMING EVENT
  const statusText = FEATURED.status || "UPCOMING EVENT";
  const isLive =
    statusText.toLowerCase().includes("current") ||
    statusText.toLowerCase().includes("live");

  return (
    <div ref={ref} style={{ perspective: 1000 }}>
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setMousePos({ x: 0.5, y: 0.5 });
        }}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden rounded-2xl select-none p-5 sm:p-7 md:p-8"
        style={{
          background: "rgba(10, 20, 32, 0.55)",
          border: `1px solid rgba(255, 255, 255, ${hovered ? 0.18 : 0.08})`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: hovered
            ? "0 30px 80px rgba(0,0,0,0.8), 0 0 50px rgba(56,189,248,0.12), inset 0 1px 0 rgba(255,255,255,0.1)"
            : "0 10px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
          opacity: inView ? 1 : 0,
          transform: inView
            ? `translateY(0) rotateX(${rotX}deg) rotateY(${rotY}deg)`
            : "translateY(30px)",
          transition: hovered
            ? "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.1s ease-out"
            : "opacity 0.7s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease, border-color 0.3s ease",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Ambient Radial Light Effect */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 16,
            background: hovered
              ? `radial-gradient(circle 350px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(56,189,248,0.08) 0%, transparent 80%)`
              : "none",
            pointerEvents: "none",
            transition: "opacity 0.3s",
          }}
        />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch relative z-10 pt-2 sm:pt-0">
          
          {/* Left Column: Icon, Event Status, Title, Description, Stats */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              {/* Event Icon & Dynamic Status Badge */}
              <div className="flex items-center gap-3 mb-3 sm:mb-4 pr-8 sm:pr-0">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 text-xl font-mono shadow-[0_0_15px_rgba(56,189,248,0.15)] shrink-0">
                  {FEATURED.icon}
                </div>

                {/* Event Status Pill */}
                <div className="flex items-center gap-2 bg-slate-900/60 border border-sky-500/20 px-3 py-1.5 rounded-full backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                        isLive ? "bg-emerald-400" : "bg-sky-400"
                      } opacity-75`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-2 w-2 ${
                        isLive ? "bg-emerald-500" : "bg-sky-500"
                      }`}
                    />
                  </span>
                  <span
                    className={`text-[10px] font-mono font-bold tracking-[0.15em] uppercase ${
                      isLive ? "text-emerald-400" : "text-sky-400"
                    }`}
                  >
                    {statusText}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight my-2">
                {FEATURED.title}
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-md my-2 sm:my-3">
                {FEATURED.description}
              </p>
            </div>

            {/* Stats Metrics Block */}
            <div className="pt-4 sm:pt-6 mt-4 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4">
              {FEATURED.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-lg sm:text-2xl font-black text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-slate-400 uppercase mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Highlights Box (Cleared top spacing so close button doesn't touch) */}
          <div className="md:col-span-5 bg-slate-950/40 rounded-xl border border-white/5 p-4 sm:p-5 flex flex-col justify-between mt-2 md:mt-6">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase font-semibold block mb-3 sm:mb-4">
                // KEY HIGHLIGHTS
              </span>

              <ul className="space-y-2.5 sm:space-y-3">
                {FEATURED.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}