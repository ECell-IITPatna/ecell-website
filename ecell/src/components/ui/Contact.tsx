'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from './Button';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Contact() {
  const pathname = usePathname();

  useGSAP(() => {
    const splitText = new SplitText('.contact-section h1', { type: 'lines' });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 60%',
      }
    });
    tl.from(splitText.lines,
      {
        opacity: 0,
        yPercent: 100,
        duration: 0.6,
        ease: "bounce",
        stagger: 0.05,
      }
    );

    // Refresh ScrollTrigger to calculate positions on the new page layout
    ScrollTrigger.refresh();

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
      splitText.revert();
    };
  }, [pathname]);
  return (
    <section className="relative contact-section w-full bg-[url('/images/contact-us-bg.webp')] bg-cover bg-center bg-no-repeat px-5 py-20 h-[60vh] rounded-2xl m-5 overflow-hidden">
      <h1 className="text-3xl md:text-[4vw] text-white md:w-[50%] mb-10">Take your Thoughts to the Next Level</h1>
      <Link href="/contact">
        <Button content="Get in Touch" css="bg-white text-black font-aldrich text-md md:text-lg" />
      </Link>
      <div
        className="absolute -bottom-10 right-10 w-[420px] h-[320px] pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 2px, transparent 2px)",
          backgroundSize: "28px 28px",
          maskImage:
            "linear-gradient(to bottom, black 100%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 100%, transparent)",
        }}
      />
    </section>
  )
}
