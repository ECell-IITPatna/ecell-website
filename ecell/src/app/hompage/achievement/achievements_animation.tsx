"use client";
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);
const AchievementsAnimation = ({ children }: { children: React.ReactNode }) => {
  useGSAP(() => {
    const header = new SplitText(".header", { type: "words" });
    const para = new SplitText(".para", { type: "words" });
    const achievementsSection3 = new SplitText(".achievement-section-3", { type: "words" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".achievement-section-1",
        start: "top center",
      },
    });

    tl.set(header.words,{ backgroundImage: "linear-gradient(90deg, #368affda,white,#368affda)", backgroundPosition: "0% 0%", backgroundSize: "200% 100%", backgroundClip: "text" });
    tl.to(header.words,
      {
        backgroundPosition: "-200% 0%",
        duration: 1,
        ease: "power4.inOut",
        stagger: 0.1,
      },
    );
    tl.from(para.words,{
      opacity:0,
      stagger:0.07,
    })

    gsap.from(achievementsSection3.words, {
      scrollTrigger: {
        trigger: ".achievement-section-3",
        start: "top center",
      },
      opacity: 0,
      stagger: 0.07,
      duration: 1,
    });
  }, []);
  return (
    <div>
      {children}
    </div>
  )
}

export default AchievementsAnimation
