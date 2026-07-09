"use client";
import React, { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

const AboutAnimation = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // 1. Text & Container entrance animation
    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    textTimeline.fromTo(
      ".about-heading",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    textTimeline.fromTo(
      ".about-para",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      },
      "-=0.5"
    );

    textTimeline.fromTo(
      ".about-image-container",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
      "-=0.8"
    );

    textTimeline.to(".rocket",{
      xPercent: -30,
      ease:"power3.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 30%",
        scrub: true,
      },
    })

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full">
      {children}
    </div>
  );
};

export default AboutAnimation;