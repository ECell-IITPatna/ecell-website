'use client';

import { Syne } from 'next/font/google';
import devData from '@/constants/devData.json';
import TeamCard from '@/components/ui/TeamCard'; // Reusing your existing card component!

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
  return (
    <>
      <div 
        className={`fixed inset-0 bg-transparent z-60 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* The Sliding Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[340px] sm:w-[400px] bg-[#070b19] border-r border-slate-800/80 z-70 shadow-[5px_0_30px_rgba(0,0,0,0.6)] flex flex-col transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="pt-12 pb-6 px-6 border-b border-slate-800/60 flex flex-col items-center justify-center bg-[#070b19] relative">
          
          <div className="text-center">
            <h2 className={`${syne.className} text-2xl font-black text-slate-100 tracking-wider uppercase`}>
              Developers
            </h2>
            {/* Premium Yellow Underline Accent */}
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

        {/* Scrollable Container*/}
        <div className="flex-1 overflow-y-auto px-6 pt-8 pb-12 space-y-8 scrollbar-none relative">
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