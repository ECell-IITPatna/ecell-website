"use client";

import React from "react";

export function FloatingOrbs() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      {[
        { size: 400, x: -10, y: 20, color: "20,60,160", dur: 18 },
        { size: 300, x: 80, y: 60, color: "60,20,120", dur: 22 },
        { size: 250, x: 50, y: 80, color: "10,80,140", dur: 26 },
      ].map((orb, i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${orb.x}%`,
          top: `${orb.y}%`,
          width: orb.size,
          height: orb.size,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(${orb.color},0.09) 0%, transparent 70%)`,
          filter: "blur(40px)",
          animation: `floatOrb${i} ${orb.dur}s ease-in-out infinite alternate`,
          transform: "translate(-50%, -50%)",
        }} />
      ))}
    </div>
  );
}
