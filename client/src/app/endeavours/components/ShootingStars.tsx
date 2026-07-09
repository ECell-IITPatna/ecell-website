"use client";

import React, { useState, useEffect } from "react";
import { generateShootingStars } from "./data";

export function ShootingStars() {
  const [stars, setStars] = useState<ReturnType<typeof generateShootingStars>>([]);
  useEffect(() => {
    setStars(generateShootingStars(6));
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none", overflow: "hidden" }}>
      {stars.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.startX}%`,
            top: `${s.startY}%`,
            width: s.length,
            height: 1.5,
            background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(200,230,255,0.9) 50%, rgba(255,255,255,0) 100%)",
            transform: `rotate(${s.angle}deg)`,
            transformOrigin: "left center",
            animation: `shoot ${s.duration}s ease-out ${s.delay}s infinite`,
            borderRadius: 2,
            opacity: 0,
            boxShadow: "0 0 6px rgba(200,230,255,0.6)",
          }}
        />
      ))}
    </div>
  );
}
