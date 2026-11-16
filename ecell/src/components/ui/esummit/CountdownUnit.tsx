"use client";

import React from "react";
import SplitFlapDigit from "./SplitFlapDigit";

interface CountdownUnitProps {
  label: string;
  digits: string[];
  size?: "sm" | "md" | "lg";
  hasMounted?: boolean;
  glowColor?: "cyan" | "amber" | "indigo";
  isSeconds?: boolean;
}

export default function CountdownUnit({
  label,
  digits,
  size = "sm",
  hasMounted = true,
  glowColor = "cyan",
  isSeconds = false,
}: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Digits Container */}
      <div className="relative flex items-center gap-[3px] sm:gap-1">
        {digits.map((digit, index) => (
          <SplitFlapDigit
            key={index}
            digit={digit}
            size={size}
            hasMounted={hasMounted}
            glowColor={glowColor}
          />
        ))}
      </div>

      {/* Label */}
      <span
        className={`mt-1 font-semibold uppercase tracking-[0.18em] text-slate-400 select-none ${
          size === "sm"
            ? "text-[8px] sm:text-[9px]"
            : size === "md"
            ? "text-[9px] sm:text-[10px]"
            : "text-[11px] sm:text-[13px] tracking-[0.22em] text-cyan-300/80"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

