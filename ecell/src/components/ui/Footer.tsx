'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Contact from './Contact';
import { motion, AnimatePresence } from 'framer-motion';
import { sidebarDetails } from '../../constants/navbarDetails'; // Adjust import path if needed (e.g., '../data/navbarDetails')

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const WORDS = ['IMPACT', 'INNOVATE', 'INSPIRE'];

export default function Footer() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border w-full bg-[#000000] text-slate-300 pt-5 px-6 font-clash flex flex-col items-center justify-center select-none">
      <Contact />
      <footer className="w-full bg-[#000000] text-slate-300 pt-20 pb-6 px-6 md:px-16 lg:px-24 border-t border-slate-900/60 relative z-20 font-clash select-none overflow-hidden">
      
        {/* Outer Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-8 items-start pb-10">
          
          {/* Left Side: Logo, Subtitle, and Socials */}
          <div className="md:col-span-5 flex flex-col items-center text-center space-y-3">
            <div className="h-32 w-auto flex items-center justify-center">
              <img 
                src="/images/logo.png" 
                alt="E-Cell IIT Patna Logo" 
                className="h-full w-auto object-contain" 
              />
            </div>
            
            <p className="text-m font-medium text-slate-300 tracking-wide">
              Where Innovation Begins
            </p>
            
            <div className="flex items-center justify-center gap-4 pt-1">
              <a 
                href="https://www.instagram.com/ecell_iitpatna?igsh=cG00YXI5aDBnaG42" 
                className="hover:text-white transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a 
                href="https://www.linkedin.com/school/ecell-iit-patna/" 
                className="hover:text-white transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Right Area */}
          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 w-full items-start">
            
            {/* Column 1: Dynamic E-Cell Navigation Links */}
            <div className="flex flex-col items-center md:items-start space-y-3 col-span-1">
              <h4 className="text-white text-base font-semibold tracking-wide">Navigation</h4>
              <div className="flex flex-col items-center md:items-start space-y-1.5 text-sm text-slate-400 font-medium">
                {sidebarDetails.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Dynamic 3-Word Animated Tagline */}
            <div className="col-span-1 md:col-span-2 flex items-center h-full min-h-[180px] my-auto">
              <div className="relative h-20 w-full flex justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={WORDS[index]}
                    initial={{ y: 24, opacity: 0, filter: 'blur(4px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -24, opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute font-serif font-light text-xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl tracking-[0.15em] sm:tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500 uppercase whitespace-nowrap"
                  >
                    {WORDS[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Web Dev Credit Section */}
            <div className="col-span-2 md:col-span-3 flex justify-center md:justify-end items-end pt-6 md:pt-4">
              <p className="text-sm font-medium text-slate-500">
                Made with 🤍 by Web Dev Wing E-Cell IIT Patna
              </p>
            </div>

          </div>
        </div>

        {/* Copyright Footer Base */}
        <div className="max-w-7xl mx-auto flex justify-center items-center text-sm text-slate-400 pt-6 border-t border-slate-900/60">
          <p>© {new Date().getFullYear()} E-Cell IIT Patna. All Rights Reserved</p>
        </div>
      </footer>
    </section>
  );
}