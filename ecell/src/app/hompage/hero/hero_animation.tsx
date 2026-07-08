"use client"
import React, { useRef } from 'react'
import {gsap,ScrollTrigger,SplitText} from "gsap/all";
import {useGSAP} from "@gsap/react"

gsap.registerPlugin(ScrollTrigger,SplitText);
const HeroAnimation = ({children}: {children: React.ReactNode}) => {
  const containerref = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const ctx = gsap.context(() => {
       const split_heading = new SplitText(".hero-heading",{type:"words,chars"});
       const split_para = new SplitText(".hero-para",{type:"words"});
       const tl = gsap.timeline();
       tl.from(split_heading.chars,{
          y:100,
          opacity:0,
          duration:0.5,
          delay:0.5,
          stagger:0.03,
       });
       tl.from(split_para.words,{
          opacity:0,
          duration:0.5,
          stagger:0.03,
       });   
    },containerref);

    return () => ctx.revert();
  },[]);
  return (
    <div ref={containerref}>
      {children}
    </div>
  )
}

export default HeroAnimation
