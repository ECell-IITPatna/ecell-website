"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useESummit } from "./ESummitContext";
import { useCountdown } from "./useCountdown";
import { ESUMMIT_DETAILS } from "@/constants/esummitDetails";
import CountdownUnit from "./CountdownUnit";

export default function ESummitBanner() {
  const { isBannerVisible, isMinimized, minimizeBanner, restoreBanner, openModal, playAudio } =
    useESummit();
  const countdown = useCountdown();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll: hide the top capsule as soon as user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On the /team page, adjust floating badge upward to avoid colliding with the team dev toggle
  const isTeamPage = pathname === "/team";

  return (
    <>
      {/* ── TOP NOTIFICATION CAPSULE (BELOW NAVBAR WITH AMPLE SPACING) ──── */}
      <AnimatePresence>
        {isBannerVisible && !isScrolled && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="esummit-banner-bar fixed top-[90px] sm:top-[94px] md:top-[96px] left-1/2 -translate-x-1/2 z-[75] bg-[#050813]/92 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)] rounded-full px-5 sm:px-7 py-2 sm:py-2.5 select-none transition-all duration-300"
          >
            <div className="flex items-center gap-3 sm:gap-4.5">
              {/* Title */}
              <div
                onClick={openModal}
                onMouseEnter={() => playAudio("hover")}
                className="cursor-pointer group shrink-0 flex items-center"
                title="Click to view full countdown"
              >
                <span className="text-[14px] sm:text-[16px] md:text-[17px] font-extrabold text-white font-clash tracking-wide group-hover:text-cyan-300 transition">
                  {ESUMMIT_DETAILS.title}
                </span>
              </div>

              {/* Vertical divider */}
              <div className="h-6 sm:h-7 w-px bg-white/20 shrink-0" />

              {/* CENTER: High-End Animated Split-Flap Countdown */}
              <div
                className="flex items-center gap-1 sm:gap-1.5 cursor-pointer group"
                onClick={openModal}
                onMouseEnter={() => playAudio("hover")}
                title="Click to view full schedule & countdown"
              >
                {/* Days */}
                <CountdownUnit
                  label="Days"
                  digits={countdown.daysDigits}
                  size="sm"
                  hasMounted={countdown.hasMounted}
                  glowColor="amber"
                />

                <span className="text-amber-400/80 font-mono text-xs font-bold animate-[pulse_1s_ease-in-out_infinite] -mt-2">
                  :
                </span>

                {/* Hours */}
                <CountdownUnit
                  label="Hrs"
                  digits={countdown.hoursDigits}
                  size="sm"
                  hasMounted={countdown.hasMounted}
                  glowColor="cyan"
                />

                <span className="text-cyan-400/80 font-mono text-xs font-bold animate-[pulse_1s_ease-in-out_infinite] -mt-2">
                  :
                </span>

                {/* Minutes */}
                <CountdownUnit
                  label="Min"
                  digits={countdown.minutesDigits}
                  size="sm"
                  hasMounted={countdown.hasMounted}
                  glowColor="cyan"
                />

                <span className="text-cyan-400/80 font-mono text-xs font-bold animate-[pulse_1s_ease-in-out_infinite] -mt-2">
                  :
                </span>

                {/* Seconds */}
                <CountdownUnit
                  label="Sec"
                  digits={countdown.secondsDigits}
                  size="sm"
                  hasMounted={countdown.hasMounted}
                  glowColor="indigo"
                  isSeconds={true}
                />
              </div>

              {/* Divider before minimize button */}
              <div className="h-6 sm:h-7 w-px bg-white/20 shrink-0" />

              {/* Minimize Button */}
              <button
                onClick={minimizeBanner}
                onMouseEnter={() => playAudio("hover")}
                className="p-1 sm:p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition cursor-pointer shrink-0"
                title="Minimize banner"
                aria-label="Minimize countdown banner"
              >
                <ChevronUp className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FLOATING MINIMIZED PILL (WHEN SCROLLED OR MINIMIZED) ─ */}
      <AnimatePresence>
        {(isMinimized || (isScrolled && isBannerVisible)) && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
            className={`fixed left-4 sm:left-6 z-[75] select-none ${
              isTeamPage ? "bottom-24" : "bottom-5 sm:bottom-6"
            }`}
          >
            <div
              onClick={restoreBanner}
              onMouseEnter={() => playAudio("hover")}
              className="group flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 rounded-full bg-[#070B14]/90 hover:bg-[#0c1322] border border-cyan-500/40 hover:border-cyan-400/80 backdrop-blur-md shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
              title="Click to restore E-Summit countdown banner"
            >
              {/* Radar pulse beacon */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
              </span>

              {/* Title & Live Countdown */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="font-extrabold font-clash text-white tracking-wide">
                  {ESUMMIT_DETAILS.title}
                </span>
                <span className="text-slate-500 font-mono">•</span>
                <span className="font-mono font-bold text-cyan-300">
                  {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
                </span>
              </div>

              {/* Expand Icon */}
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

