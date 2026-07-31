"use client"
import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
const AlumniAnimation = ({ children }: { children: React.ReactNode }) => {
  useGSAP(() => {
    const cards = gsap.utils.toArray('.alumni-cards');

    if (!cards) return;

    gsap.set(cards, {
      x: (i) => i * -3,
      y: window.innerHeight + 100,
      zIndex: (i) => i,
      autoAlpha: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-section',
        start: 'top 15%',
        end: `+=${cards.length * 400}`,
        scrub: 2,
        pin: true,
      }
    });

    cards.forEach((card, i) => {
      if (!card) return;

      tl.to(card, {
        y: i * 6,
        scale: 1 - i * 0.01,
        duration: 1,
        ease: 'power2.out',
      }, i * 0.5);

      const rotationValue = i % 2 === 0 ? -2 : 2;
      tl.to(card, {
        rotation: rotationValue,
        duration: 0.8,
        ease: 'power1.out',
      }, ">-0.1");
    })
  }, [])
  return (
    <div>
      {children}
    </div>
  )
}
export default AlumniAnimation
