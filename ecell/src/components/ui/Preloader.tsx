"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const words = [
    "INNOVATE",
    "IDEATE",
    "INCUBATE",
    "ACCELERATE",
    "INSPIRE",
    "SCALE",
    "CREATE",
    "E-CELL"
  ];

  // Map progress to cycling words
  const wordIndex = Math.min(
    Math.floor((progress / 100) * words.length),
    words.length - 1
  );
  const currentWord = words[wordIndex];

  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const end = 100;
    const duration = 2800; // 2.8 seconds of loading
    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      
      // easeOutCubic: f(t) = 1 - (1 - t)^3 for a smooth deceleration
      const easeProgress = 1 - Math.pow(1 - progressRatio, 3);
      const current = Math.floor(easeProgress * end);
      
      setProgress(current);

      if (progressRatio < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setProgress(100);
        // Start exit transition
        setIsExiting(true);
        
        // Fire completion after transition completes (800ms)
        const timer = setTimeout(() => {
          setIsVisible(false);
          onCompleteRef.current();
        }, 800);
        
        return () => clearTimeout(timer);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-[#070B14] flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-800"
      style={{
        clipPath: isExiting 
          ? "polygon(0 0, 100% 0, 100% 0, 0 0)" 
          : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        transitionTimingFunction: "cubic-bezier(0.85, 0, 0.15, 1)",
      }}
    >
      {/* Moving Ambient Light Blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-pulse duration-3000 pointer-events-none" />

      {/* Cyber Grid Background */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Loader Content */}
      <div 
        className={`flex flex-col items-center justify-center relative z-10 transition-all duration-500 ease-in-out ${
          isExiting ? "opacity-0 -translate-y-10 scale-95" : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        
        {/* Glowing Logo & Spinner wrapper */}
        <div className="relative w-64 h-64 flex items-center justify-center mb-8">
          
          {/* Logo in the center */}
          <div className="absolute z-20 flex flex-col items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="E-Cell Logo"
              width={75}
              height={75}
              className="opacity-90 animate-pulse duration-2000"
              priority
            />
          </div>

          {/* SVG Progress Ring */}
          <svg className="w-64 h-64 transform -rotate-90 relative z-10">
            {/* Background ring */}
            <circle
              cx="128"
              cy="128"
              r="110"
              className="stroke-white/5"
              strokeWidth="3"
              fill="transparent"
            />
            {/* Active progress ring */}
            <circle
              cx="128"
              cy="128"
              r="110"
              className="stroke-cyan-400"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 110}
              strokeDashoffset={2 * Math.PI * 110 * (1 - progress / 100)}
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0 0 10px rgba(34, 211, 238, 0.6))",
                transition: "stroke-dashoffset 0.05s linear",
              }}
            />
          </svg>
        </div>

        {/* Counter and Text */}
        <div className="text-center flex flex-col items-center space-y-4">
          
          {/* Main heading styling with a glowing subtitle */}
          <h2 className="text-[#a5f3fc] font-clash text-lg font-semibold tracking-[0.25em] uppercase">
            E-CELL IIT PATNA
          </h2>

          {/* Big Neon Digital Counter */}
          <div 
            className="font-micro text-7xl text-white font-extrabold tracking-wider leading-none"
            style={{
              textShadow: "0 0 15px rgba(255,255,255,0.4), 0 0 30px rgba(6,182,212,0.3)"
            }}
          >
            {progress.toString().padStart(3, "0")}
          </div>

          {/* Cybernetic changing badge */}
          <div className="px-5 py-1.5 border border-cyan-500/20 bg-cyan-950/20 rounded-full backdrop-blur-md flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-xs font-semibold tracking-widest text-cyan-400">
              {currentWord}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
