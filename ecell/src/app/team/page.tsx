"use client";

import DevSidebar from '@/components/ui/DevSidebar';
import TeamCard from '@/components/ui/TeamCard';
import teamData from '@/constants/teamData.json';
import { Beau_Rivage, Syne } from 'next/font/google';
import { useState, useEffect, useRef } from 'react';

const beauRivage = Beau_Rivage({ weight: '400', subsets: ['latin'], display: 'swap' });
const syne = Syne({ subsets: ['latin'], weight: ['700', '800'], display: 'swap' });

export default function TeamPage() {
  const [isDevOpen, setIsDevOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headingFont = syne.className;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const handleResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Starfield (2 depth layers)
    const stars: Array<{
      x: number; y: number; r: number;
      a: number; s: number; layer: number;
    }> = [];
    for (let i = 0; i < 75; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.4,
        a: Math.random(),
        s: Math.random() * 0.015 + 0.005,
        layer: 0,
      });
    }
    for (let i = 0; i < 75; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: (Math.random() * 1.2 + 0.4) * 0.55,
        a: Math.random(),
        s: (Math.random() * 0.015 + 0.005) * 0.5,
        layer: 1,
      });
    }

    const dustMotes: Array<{
      x: number; y: number; r: number; a: number; drift: number;
    }> = [];
    for (let i = 0; i < 40; i++) {
      dustMotes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2.5 + 1,
        a: Math.random() * 0.12 + 0.02,
        drift: (Math.random() - 0.5) * 0.1,
      });
    }

    const nebulae = [
      { cx: 0.15, cy: 0.25, rx: 260, ry: 140, color: 'rgba(20,50,110,0.22)',  angle: -0.3 },
      { cx: 0.75, cy: 0.60, rx: 300, ry: 160, color: 'rgba(30,18,70,0.18)',   angle:  0.5 },
      { cx: 0.50, cy: 0.85, rx: 340, ry: 110, color: 'rgba(10,60,80,0.14)',   angle:  0   },
      { cx: 0.88, cy: 0.18, rx: 200, ry: 110, color: 'rgba(40,20,80,0.13)',   angle:  0.8 },
      { cx: 0.40, cy: 0.50, rx: 280, ry: 130, color: 'rgba(10,30,70,0.10)',   angle:  1.2 },
    ];

    function drawBackground() {
      const bg = ctx.createRadialGradient(W * 0.5, H * 0.3, 0, W * 0.5, H * 0.6, W * 0.95);
      bg.addColorStop(0,   '#0a0e1a');
      bg.addColorStop(0.5, '#04080f');
      bg.addColorStop(1,   '#020508');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);
    }

    function drawNebulae() {
      nebulae.forEach(n => {
        ctx.save();
        ctx.translate(n.cx * W, n.cy * H);
        ctx.rotate(n.angle);
        const maxR = Math.max(n.rx, n.ry);
        ctx.scale(n.rx / maxR, n.ry / maxR);
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, maxR);
        g.addColorStop(0, n.color);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(0, 0, maxR, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.restore();
      });
    }

    function drawDustMotes() {
      dustMotes.forEach(d => {
        d.x += d.drift;
        if (d.x > W + 10) d.x = -10;
        if (d.x < -10) d.x = W + 10;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,210,255,${d.a})`;
        ctx.fill();
      });
    }

    function drawStars() {
      stars.forEach(s => {
        s.a += s.s;
        if (s.a > 1 || s.a < 0) s.s = -s.s;
        const alpha = Math.max(0.1, s.a * 0.6) * (s.layer === 0 ? 1 : 0.45);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });
    }

    const render = () => {
      drawBackground();
      drawNebulae();
      drawDustMotes();
      drawStars();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#030712] pt-38 py-20 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden">

      {/* CANVAS BACKGROUND LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>

      {/* Developer floating options panel toggle */}
      <button
        onClick={() => setIsDevOpen(true)}
        className="fixed bottom-8 left-8 z-40 w-16 h-16 md:w-19 md:h-19 bg-slate-950/90 rounded-full flex items-center justify-center text-slate-300 hover:text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_35px_rgba(52,211,153,0.5)] cursor-pointer group transition-all duration-500 overflow-hidden"
      >
        <div 
          className="absolute inset-0 rounded-full animate-spin [animation-duration:2.5s] pointer-events-none mix-blend-screen" 
          style={{
            background: 'conic-gradient(from 0deg, transparent 180deg, rgba(52,211,153,0.1) 240deg, rgba(52,211,153,0.4) 300deg, #10b981 360deg)'
          }}
        />
        
        <div className="absolute inset-[4px] bg-[#070a13] rounded-full z-0 group-hover:bg-[#0b1120] transition-colors duration-500" />

        <div className="absolute w-10 h-10 bg-emerald-500/10 rounded-full blur-md animate-ping [animation-duration:3s] pointer-events-none opacity-50 group-hover:opacity-90" />

        {/* Floating Bracket Symbol */}
        <span className={`${syne.className} text-xl font-bold relative z-10 tracking-tighter transition-transform duration-500 group-hover:scale-110`}>
          &lt;/&gt;
        </span>
      </button>

      <DevSidebar isOpen={isDevOpen} onClose={() => setIsDevOpen(false)} />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Main Title Presentation */}
        <div className="text-center mb-28">
          <h1 className={`${beauRivage.className} text-7xl md:text-8xl text-slate-100 tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}>
            Meet the{' '}
            <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Dream Team
            </span>
          </h1>
        </div>

        {/* 1. OVERALL COORDINATORS SECTION */}
        <div className="mb-28 flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10 md:mb-14 max-w-4xl px-4 mx-auto">
            <div className="hidden md:block h-[1px] flex-grow bg-gradient-to-r from-transparent to-slate-800/80" />
            <h2 className={`${headingFont} text-3xl md:text-3xl text-slate-200 tracking-wider uppercase text-center`}>
              Overall Coordinators
            </h2>
            <div className="hidden md:block h-[1px] flex-grow bg-gradient-to-l from-transparent to-slate-800/80" />
          </div>

          <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-center gap-14 md:gap-16 py-4">
            {teamData.overallCoordinators.map((member, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[280px] transform scale-105 transition-transform duration-300"
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* 2. STRATEGIC LEAD SECTION */}
        <div className="mb-28 flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10 md:mb-14 max-w-4xl px-4 mx-auto">
            <div className="hidden md:block h-[1px] flex-grow bg-gradient-to-r from-transparent to-slate-800/80" />
            <h2 className={`${headingFont} text-3xl md:text-3xl text-slate-200 tracking-wider uppercase text-center`}>
              Strategic Lead
            </h2>
            <div className="hidden md:block h-[1px] flex-grow bg-gradient-to-l from-transparent to-slate-800/80" />
          </div>

          <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-center gap-12">
            {teamData.strategicLead.map((member, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[250px]"
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* 3. HEADS OF COMMITTEES SECTION */}
        <div className="mt-28 flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10 md:mb-14 max-w-4xl px-4 mx-auto">
            <div className="hidden md:block h-[1px] flex-grow bg-gradient-to-r from-transparent to-slate-800/80" />
            <h2 className={`${headingFont} text-3xl md:text-3xl text-slate-200 tracking-wider uppercase text-center`}>
              Heads
            </h2>
            <div className="hidden md:block h-[1px] flex-grow bg-gradient-to-l from-transparent to-slate-800/80" />
          </div>

          {teamData.heads.map((dept, deptIdx) => (
            <div key={deptIdx} className="w-full mb-20 last:mb-0 flex flex-col items-center">
              <h3 className="text-xl md:text-base font-medium text-slate-300 mb-10 border-b border-slate-800 pb-2 px-6 text-center uppercase tracking-[0.25em]">
                {dept.departmentName}
              </h3>
              <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-center gap-12">
                {dept.members.map((member, idx) => (
                  <div
                    key={idx}
                    className="w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[250px]"
                  >
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