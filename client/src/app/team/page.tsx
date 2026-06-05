"use client";

import DevSidebar from '@/components/ui/DevSidebar';
import TeamCard from '@/components/ui/TeamCard';
import teamData from '@/constants/teamData.json';
import { Beau_Rivage, Syne } from 'next/font/google'; // Imported premium classic alternatives
import { useState } from 'react';

// Main Title Script Font
const beauRivage = Beau_Rivage({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

// Font Option A: Modern & Wide
const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
});

// // Font Option B: Elite Roman Classic
// const cinzel = Cinzel({
//   subsets: ['latin'],
//   weight: ['600', '700'],
//   display: 'swap',
// });

export default function TeamPage() {
  const [isDevOpen, setIsDevOpen] = useState(false);
  const headingFont = syne.className;

  return (
    <main className="min-h-screen bg-[#030712] py-20 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden">

      {/* GRID LAYER */}
      {/* <div
        className="fixed inset-0 z-0 pointer-events-none select-none opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #10b981 1.5px, transparent 1.5px),
            linear-gradient(to bottom, #10b981 1.5px, transparent 1.5px)
          `,
          backgroundSize: '45px 45px',
        }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#030712] opacity-60" /> */}

      {/* DOT MATRIX */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none select-none opacity-35"
        style={{
          backgroundImage: `radial-gradient(#10b981 1.5px, transparent 1.5px)`,
          backgroundSize: '35px 35px',
        }}
      />
      <div 
        className="fixed inset-0 z-0 pointer-events-none select-none bg-[radial-gradient(circle_at_center,rgba(4,47,46,0.35)_0%,rgba(3,7,18,1)_75%)]" 
        aria-hidden="true"
      />


      {/* Developer floating button */}
      <button
        onClick={() => setIsDevOpen(true)}
        className="fixed bottom-8 left-8 z-40 w-16 h-16 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/50 rounded-full flex items-center justify-center text-slate-300 hover:text-emerald-400 shadow-2xl backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-110"
      >
        <span className={`${syne.className} text-xl font-bold`}>&lt;/&gt;</span>
      </button>

      <DevSidebar isOpen={isDevOpen} onClose={() => setIsDevOpen(false)} />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Page Title */}
        <div className="text-center mb-28">
          <h1 className={`${beauRivage.className} text-7xl md:text-8xl text-slate-100 tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}>
            Meet the <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Dream Team</span>
          </h1>
        </div>

        {/* 1. OVERALL COORDINATORS SECTION */}
        <div className="mb-28 flex flex-col items-center">
          <div className="w-full flex items-center justify-center gap-6 mb-14 max-w-4xl">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-slate-800/80" />

            <h2 className={`${headingFont} text-3xl md:text-3xl text-slate-200 tracking-wider uppercase text-center whitespace-nowrap`}>
              Overall Coordinators
            </h2>

            <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-slate-800/80" />
          </div>

          <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-center gap-12">
            {teamData.overallCoordinators.map((member, idx) => (
              <div key={idx} className="w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[250px]">
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* 2. STRATEGIC LEAD SECTION */}
        <div className="mb-28 flex flex-col items-center">
          <div className="w-full flex items-center justify-center gap-6 mb-14 max-w-4xl">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-slate-800/80" />

            <h2 className={`${headingFont} text-3xl md:text-3xl text-slate-200 tracking-wider uppercase text-center whitespace-nowrap`}>
              Strategic Lead
            </h2>

            <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-slate-800/80" />
          </div>

          <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-center gap-12">
            {teamData.strategicLead.map((member, idx) => (
              <div key={idx} className="w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[250px]">
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* 3. HEADS OF COMMITTEES */}
        <div className="mt-28 flex flex-col items-center">

          <div className="w-full flex items-center justify-center gap-6 mb-20 max-w-4xl">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-slate-800/80" />
            <h2 className={`${headingFont} text-3xl md:text-3xl text-slate-200 tracking-wider uppercase text-center whitespace-nowrap`}>
              Heads
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-slate-800/80" />
          </div>

          {teamData.heads.map((dept, deptIdx) => (
            <div key={deptIdx} className="w-full mb-20 last:mb-0 flex flex-col items-center">

              <h3 className="text-xl md:text-base font-medium text-slate-300 mb-10 border-b border-slate-800 pb-2 px-6 text-center uppercase tracking-[0.25em]">
                {dept.departmentName}
              </h3>

              <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-center gap-12">
                {dept.members.map((member, idx) => (
                  <div key={idx} className="w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[250px]">
                    <TeamCard member={member} />
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}