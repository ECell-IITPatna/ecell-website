'use client';

import { useEffect } from 'react';
import { Syne } from 'next/font/google';
import devData from '@/constants/devData.json';
import TeamCard from '@/components/ui/TeamCard';

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
});

interface DevSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DevSidebar({ isOpen, onClose }: DevSidebarProps) {
  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const html = document.documentElement;

    const previousBodyStyle = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    const previousHtmlStyle = {
      overflow: html.style.overflow,
      overscrollBehavior: html.style.overscrollBehavior,
    };

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
    html.style.overscrollBehavior = 'none';
    body.setAttribute('data-lenis-prevent', 'true');

    return () => {
      body.style.position = previousBodyStyle.position;
      body.style.top = previousBodyStyle.top;
      body.style.width = previousBodyStyle.width;
      body.style.overflow = previousBodyStyle.overflow;
      html.style.overflow = previousHtmlStyle.overflow;
      html.style.overscrollBehavior = previousHtmlStyle.overscrollBehavior;
      body.removeAttribute('data-lenis-prevent');
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-transparent z-[95] transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        onClick={onClose}
        onWheel={(event) => event.preventDefault()}
        onTouchMove={(event) => event.preventDefault()}
      />

      {/* The Sliding Drawer */}
      <div 
        className={`fixed top-0 left-0 h-screen w-[340px] sm:w-[400px] bg-[#070b19] border-r border-slate-800/80 z-[100] shadow-[5px_0_30px_rgba(0,0,0,0.8)] flex flex-col transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="pt-12 pb-6 px-6 border-b border-slate-800/60 flex flex-col items-center justify-center bg-[#070b19] relative shrink-0">
          <div className="text-center">
            <h2 className={`${syne.className} text-2xl font-black text-slate-100 tracking-wider uppercase`}>
              Developers
            </h2>
            <div className="h-[3px] w-14 bg-yellow-500 mt-3 mx-auto rounded-full shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
          </div>

          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-100 transition-colors p-2 rounded-lg cursor-pointer text-xl flex items-center justify-center absolute right-4 top-5"
            aria-label="Close developer sidebar"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Container with data-lenis-prevent */}
        <div 
          data-lenis-prevent="true"
          className="flex-1 min-h-0 overflow-y-auto px-6 pt-8 pb-12 space-y-8 scrollbar-none relative overscroll-contain touch-pan-y"
        >
          {devData.map((dev, idx) => (
            <div 
              key={idx} 
              className="w-full max-w-[260px] mx-auto relative transition-all duration-300 group"
              onMouseEnter={(e) => {
                e.currentTarget.style.zIndex = '20';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.zIndex = 'auto';
              }}
            >
              <div className="py-2 px-1 transition-all duration-300 group-hover:[&>div]:shadow-[0_0_25px_rgba(234,179,8,0.45)]">
                <TeamCard member={dev} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}