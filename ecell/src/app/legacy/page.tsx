'use client';

import LegacyDeck from '@/components/ui/LegacyDeck';
import legacyArchive from '@/constants/legacyData.json';

export default function LuxuryLegacyPage() {
  return (
    <main className="w-full min-h-screen bg-[#050505] text-[#f5f5f7] pt-38 pb-40 font-sans selection:bg-white selection:text-black overflow-x-hidden antialiased">

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none border-x border-white/[0.02] max-w-7xl mx-auto left-4 right-4 sm:left-6 sm:right-6 md:left-12 md:right-12"
      />

      <header className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 border-b border-white/[0.04] pb-20 mb-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-mono block">
              Department of Records
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extralight tracking-tighter text-white leading-none">
              THE <span className="font-serif italic font-light text-neutral-400">LEGACY</span> CHRONICLES
            </h1>
          </div>
          <div className="md:col-span-4 text-neutral-500 text-xs font-mono uppercase tracking-widest leading-relaxed md:pl-8 md:border-l border-white/[0.04] space-y-2">
            <div>[ LOCATION: IIT PATNA ]</div>
            <div>[ TIMELINE: 2024 — 2026 ]</div>
            <p className="text-neutral-400 font-sans font-light normal-case tracking-normal text-sm mt-4">
              An architectural blueprint of operational achievements and spatial memory.
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <LegacyDeck items={legacyArchive} />
      </section>

    </main>
  );
}