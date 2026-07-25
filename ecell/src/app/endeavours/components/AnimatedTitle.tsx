"use client";

import React from "react";

export function AnimatedTitle({ text, visible, delay = 0 }: { text: string; visible: boolean; delay?: number }) {
  const words = text.split(" ");
  return (
    <h1
      style={{
        fontSize: "clamp(32px, 8vw, 72px)",
        fontWeight: 900,
        letterSpacing: -2,
        lineHeight: 1.05,
        margin: "0 0 18px",
        color: "#f0f8ff",
        textAlign: "center",
        perspective: 800,
        perspectiveOrigin: "50% 50%",
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            marginRight: "0.25em",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateZ(0) translateY(0)" : "translateZ(-300px) translateY(30px)",
            transition: `opacity 0.7s ease ${delay + i * 0.12}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay + i * 0.12}s`,
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}
