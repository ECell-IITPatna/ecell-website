"use client";

import React from "react";

export function AuroraCurtain() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "45%",
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0.35,
      }}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            background: i === 0
              ? "radial-gradient(ellipse 80% 60% at 30% -10%, rgba(30,80,180,0.5) 0%, transparent 70%)"
              : i === 1
                ? "radial-gradient(ellipse 60% 50% at 70% -5%, rgba(80,30,160,0.4) 0%, transparent 65%)"
                : "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(20,100,200,0.3) 0%, transparent 60%)",
            animation: `aurora${i} ${8 + i * 3}s ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
