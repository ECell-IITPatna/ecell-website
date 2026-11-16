"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplitFlapDigitProps {
  digit: string;
  size?: "sm" | "md" | "lg";
  hasMounted?: boolean;
  glowColor?: "cyan" | "amber" | "indigo";
}

const sizeConfig = {
  sm: {
    container: "w-[20px] h-[28px] sm:w-[22px] sm:h-[30px] text-[15px] sm:text-[16px] rounded-[5px]",
    font: "font-sans font-bold tabular-nums tracking-normal",
  },
  md: {
    container: "w-[28px] h-[38px] sm:w-[32px] sm:h-[42px] text-[20px] sm:text-[23px] rounded-md",
    font: "font-sans font-bold tabular-nums tracking-normal",
  },
  lg: {
    container: "w-[42px] h-[58px] sm:w-[48px] sm:h-[66px] text-[32px] sm:text-[38px] rounded-lg",
    font: "font-sans font-extrabold tabular-nums tracking-normal",
  },
};

const glowConfig = {
  cyan: "border-cyan-500/30 group-hover:border-cyan-400/60 shadow-[0_2px_10px_rgba(6,182,212,0.15)]",
  amber: "border-amber-500/30 group-hover:border-amber-400/60 shadow-[0_2px_10px_rgba(245,158,11,0.15)]",
  indigo: "border-indigo-500/30 group-hover:border-indigo-400/60 shadow-[0_2px_10px_rgba(99,102,241,0.15)]",
};

export default function SplitFlapDigit({
  digit,
  size = "sm",
  hasMounted = true,
  glowColor = "cyan",
}: SplitFlapDigitProps) {
  const currentSize = sizeConfig[size];
  const currentGlow = glowConfig[glowColor];

  return (
    <div
      className={`relative group inline-flex items-center justify-center overflow-hidden select-none bg-gradient-to-b from-[#131b2e] via-[#090e1c] to-[#04060c] border ${currentGlow} ${currentSize.container} shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_4px_12px_rgba(0,0,0,0.5)] transition-colors duration-300`}
      style={{ perspective: 400 }}
    >
      {/* Top half specular reflection */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-10 rounded-t-[inherit]" />

      {/* Digit with 3D Flip Transition */}
      {hasMounted ? (
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={digit}
            initial={{
              rotateX: -75,
              y: "-50%",
              opacity: 0,
            }}
            animate={{
              rotateX: 0,
              y: "0%",
              opacity: 1,
            }}
            exit={{
              rotateX: 75,
              y: "50%",
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 340,
              damping: 24,
              mass: 0.75,
            }}
            className={`relative z-20 flex items-center justify-center text-white ${currentSize.font} drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]`}
          >
            {digit}
          </motion.div>
        </AnimatePresence>
      ) : (
        <span
          className={`relative z-20 flex items-center justify-center text-white ${currentSize.font}`}
        >
          {digit}
        </span>
      )}

      {/* Bottom ambient shade */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black/20 pointer-events-none z-10 rounded-b-[inherit]" />
    </div>
  );
}
