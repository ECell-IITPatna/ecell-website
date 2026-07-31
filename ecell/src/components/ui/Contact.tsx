'use client';
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from './Button';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Contact() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.contact-section',
        start:'top 60%',
      }
    });
    const splitText = new SplitText('.contact-section h1', { type: 'lines' });
    tl.from(splitText.lines, 
      {
        opacity:0,
        yPercent: 100,
        duration:0.6,
        ease:"bounce",
        stagger:0.05,
      }
    );
  }, []);
    return(
      <section className="border z-50 contact-section w-full bg-[url('/images/contact-us-bg.png')] bg-cover bg-center bg-no-repeat px-5 py-20 h-[60vh] rounded-2xl m-5">
        <h1 className="text-3xl md:text-[4vw] text-white md:w-[50%] mb-10">Take your Thoughts to the Next Level</h1>
        <Button content="Get in Touch" css="bg-white text-black font-aldrich text-md md:text-lg" />
      </section>
    )
}
