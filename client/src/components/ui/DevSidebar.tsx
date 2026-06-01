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
      {/* Black backdrop dim overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* The Sliding Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[320px] sm:w-[360px] bg-[#070b19] border-r border-slate-800/80 z-50 shadow-[5px_0_30px_rgba(0,0,0,0.6)] flex flex-col transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-800/60 flex items-center justify-between relative">
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h2 className={`${syne.className} text-xl font-black text-slate-100 tracking-wider uppercase`}>
              Developers
            </h2>
            <div className="h-[2px] w-12 bg-yellow-500 mt-2 rounded-full" />
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-100 transition-colors p-1 rounded-lg hover:bg-slate-800/50 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Container reusing TeamCard */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-800">
          {devData.map((dev, idx) => (
            <div key={idx} className="w-full max-w-[260px] mx-auto">
              <TeamCard member={dev} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}