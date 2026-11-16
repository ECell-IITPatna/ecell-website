"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useESummit } from "./ESummitContext";
import { ESUMMIT_DETAILS } from "@/constants/esummitDetails";
import { useCountdown } from "./useCountdown";
import CountdownUnit from "./CountdownUnit";

export default function ESummitModal() {
  const { isModalOpen, closeModal } = useESummit();
  const countdown = useCountdown();

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeModal]);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#02050b]/88 backdrop-blur-md"
            onClick={closeModal}
          />

          {/* Modal Container — compact, countdown-only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 18 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-2xl bg-[#070B14]/95 border border-slate-800/90 rounded-2xl sm:rounded-3xl shadow-[0_0_80px_rgba(6,182,212,0.2)] overflow-hidden z-10 select-none"
          >
            {/* Ambient glow orbs */}
            <div className="absolute top-[-20%] left-[-15%] w-[55%] h-[55%] bg-indigo-600/12 rounded-full filter blur-[90px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-15%] w-[55%] h-[55%] bg-cyan-500/12 rounded-full filter blur-[90px] pointer-events-none" />

            {/* Glowing top accent line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-amber-500 via-cyan-400 to-indigo-500" />

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 text-slate-400 hover:text-white p-2 hover:bg-slate-800/60 rounded-xl cursor-pointer transition border border-transparent hover:border-slate-700/60"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content */}
            <div className="px-6 sm:px-10 py-8 sm:py-12 flex flex-col items-center text-center">
              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-extrabold font-clash text-white tracking-wide mb-6">
                {ESUMMIT_DETAILS.title}
              </h2>

              {/* Live status indicator */}
              <div className="flex items-center justify-center mb-4">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-cyan-300 uppercase">
                  {countdown.isLive ? "SUMMIT IS LIVE!" : "COUNTDOWN TO KICKOFF"}
                </span>
              </div>

              {/* ── BIG COUNTDOWN CLOCK ──────────────── */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 my-2">
                <CountdownUnit
                  label="Days"
                  digits={countdown.daysDigits}
                  size="lg"
                  hasMounted={countdown.hasMounted}
                  glowColor="amber"
                />

                <span className="text-amber-400/80 font-mono text-3xl sm:text-4xl font-bold animate-[pulse_1s_ease-in-out_infinite] -mt-5">
                  :
                </span>

                <CountdownUnit
                  label="Hours"
                  digits={countdown.hoursDigits}
                  size="lg"
                  hasMounted={countdown.hasMounted}
                  glowColor="cyan"
                />

                <span className="text-cyan-400/80 font-mono text-3xl sm:text-4xl font-bold animate-[pulse_1s_ease-in-out_infinite] -mt-5">
                  :
                </span>

                <CountdownUnit
                  label="Minutes"
                  digits={countdown.minutesDigits}
                  size="lg"
                  hasMounted={countdown.hasMounted}
                  glowColor="cyan"
                />

                <span className="text-cyan-400/80 font-mono text-3xl sm:text-4xl font-bold animate-[pulse_1s_ease-in-out_infinite] -mt-5">
                  :
                </span>

                <CountdownUnit
                  label="Seconds"
                  digits={countdown.secondsDigits}
                  size="lg"
                  hasMounted={countdown.hasMounted}
                  glowColor="indigo"
                  isSeconds={true}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
