'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';

export interface LegacyItem {
  id: string;
  year: string;
  title: string;
  category: string;
  src: string;
  description: string;
}

interface LegacyDeckProps {
  items: LegacyItem[];
}

function PremiumGridCard({ item, isHero = false }: { item: LegacyItem; isHero?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => setIsVisible(true));
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hasContent = Boolean(item.category || item.title || item.description);

  return (
    <div
      ref={cardRef}
      className={`group relative cursor-pointer border-b border-white/[0.05] pb-10 md:pb-12 ${
        isHero ? 'col-span-12' : 'col-span-12 md:col-span-6'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className={`relative w-full overflow-hidden bg-neutral-900 rounded-sm transition-[clip-path] duration-[1400ms] ${
        isHero ? 'aspect-[3/2] sm:aspect-video md:aspect-[21/9]' : 'aspect-[16/10] sm:aspect-[4/3]'
      } ${isVisible ? '[clip-path:inset(0%_0%_0%_0%)]' : '[clip-path:inset(8%_0%_8%_0%)]'}`}>
        
        <img
          src={item.src}
          alt={item.title || 'Legacy item'}
          className={`h-full w-full object-cover transition-all duration-[1000ms] ease-out ${
            isVisible ? 'opacity-95 scale-100 grayscale-0 contrast-100' : 'opacity-0 scale-105 grayscale-[0.8] contrast-[0.95]'
          } [@media(hover:hover)]:group-hover:scale-[1.03] [@media(hover:hover)]:group-hover:grayscale-0`}
        />

        {/* Only render overlay when at least one piece of text exists */}
        {hasContent && (
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none">
            <div className="max-w-2xl space-y-1.5 sm:space-y-2.5 opacity-0 transform translate-y-3 transition-all duration-[600ms] [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:translate-y-0 max-sm:!opacity-100 max-sm:!translate-y-0">
              {item.category && (
                <div>
                  <span className="inline-block border border-white/10 bg-neutral-950/80 px-2 py-0.5 font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-neutral-300">
                    {item.category}
                  </span>
                </div>
              )}
              {item.title && (
                <div>
                  <h2 className={`font-light tracking-wide text-white ${
                    isHero ? 'text-lg sm:text-2xl md:text-4xl' : 'text-base sm:text-xl md:text-2xl'
                  }`}>
                    {item.title}
                  </h2>
                </div>
              )}
              {item.description && (
                <div>
                  <p className="pt-0.5 sm:pt-1 text-[11px] sm:text-xs font-light leading-relaxed text-neutral-400 line-clamp-2 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function LegacyDeck({ items }: LegacyDeckProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const stars: Array<{ x: number; y: number; size: number; alpha: number; speed: number }> = [];
    const comets: Array<{ x: number; y: number; dx: number; dy: number; speed: number; active: boolean }> = [];
    let spawnTimer = 0;

    for (let i = 0; i < 75; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.2 + 0.4,
        alpha: Math.random(),
        speed: Math.random() * 0.015 + 0.005,
      });
    }

    const triggerComet = () => {
      const speed = Math.random() * 1 + 1.5; 
      comets.push({
        x: Math.random() * window.innerWidth,
        y: -100, 
        speed: speed,
        dx: speed * 3,
        dy: speed * 1.5,
        active: true
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Drifting Stars
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) {
          star.speed = -star.speed;
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, star.alpha * 0.6)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Spawn Interval Tick Controller
      spawnTimer--;
      if (spawnTimer <= 0) {
        triggerComet();
        spawnTimer = Math.floor(Math.random() * 80) + 60;
      }

      // Render loop over active comets
      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        c.x += c.dx;
        c.y += c.dy;

        const tailLength = 20.0;
        const gradient = ctx.createLinearGradient(
          c.x, c.y, 
          c.x - c.dx * tailLength, c.y - c.dy * tailLength
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
        gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.0;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x - c.dx * tailLength, c.y - c.dy * tailLength);
        ctx.stroke();

        if (c.x > width + 400 || c.y > height + 400) {
          comets.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!items || items.length === 0) return null;

  const groupedByYear = useMemo(() => {
    const groups: { [key: string]: LegacyItem[] } = {};
    items.forEach((item) => {
      const yearKey = item.year ? item.year.trim() : '';
      if (!groups[yearKey]) groups[yearKey] = [];
      groups[yearKey].push(item);
    });
    return Object.keys(groups)
      .sort((a, b) => b.localeCompare(a))
      .map((year) => ({ year, items: groups[year] }));
  }, [items]);

  return (
    <div className="relative min-h-screen bg-[#030712] text-neutral-100 px-4 sm:px-8 md:px-12 py-12 md:py-16 overflow-x-hidden">
      
      {/* Bg Star Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      </div>

      <div className="relative z-10 space-y-16 sm:space-y-24 max-w-7xl mx-auto">
        {groupedByYear.map(({ year, items: yearItems }) => (
          <div key={year || 'unspecified'} className="space-y-8 sm:space-y-12">
            
            {/* Year Divider (Only rendered if a non-empty year exists) */}
            {year && (
              <div className="flex items-center gap-4 pt-2 select-none pointer-events-none">
                <span className="font-mono text-xs tracking-[0.3em] text-neutral-400 font-medium">
                  // {year}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/[0.02] to-transparent" />
              </div>
            )}

            <div className="grid grid-cols-1 gap-y-12 gap-x-6 sm:gap-x-12 sm:gap-y-16 md:grid-cols-12">
              {yearItems.map((item, index) => {
                const isFirstGlobalItem = year === groupedByYear[0].year && index === 0;
                return (
                  <PremiumGridCard 
                    key={item.id} 
                    item={item} 
                    isHero={isFirstGlobalItem} 
                  />
                );
              })}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}