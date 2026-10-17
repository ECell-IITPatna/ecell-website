"use client";

import Image from "next/image";
import Link from "next/link";
import { Beau_Rivage, Syne } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { useMouse } from "@/app/endeavours/components/hooks";
import { NebulaCanvas } from "@/app/endeavours/components/NebulaCanvas";
import { AuroraCurtain } from "@/app/endeavours/components/AuroraCurtain";
import { FloatingOrbs } from "@/app/endeavours/components/FloatingOrbs";
import { CometBackground } from "./components/CometBackground";
import { SponsorPerkCard } from "./components/SponsorPerkCard";

const beauRivage = Beau_Rivage({ weight: "400", subsets: ["latin"], display: "swap" });
const syne = Syne({ subsets: ["latin"], weight: ["700", "800"], display: "swap" });

const pastSponsorNames = [
  "StockGro",
  "Dept. of Industries, Govt. of Bihar",
  "ah! Ventures",
  "ECOFIT",
  "Vishlesan I-Hub Foundation, IIT Patna",
  "d2d",
  "EDU FABRICA",
  "HIE Foundation",
  "TechieNest",
  "Kindle VC",
  "ED Times",
  "Think India",
  "WHIZCORPS",
  "StartupTV",
  "IC IIT Patna",
  "Vaibhav Studios",
  "MARKETINLAB",
  "NewZera",
  "KAREKEBA",
];

const perks = [
  {
    title: "Brand Visibility",
    desc: "Logo placement across flagship events, socials reaching 50K+ students, posters, merch and stage backdrops.",
  },
  {
    title: "Community Impact",
    desc: "Support grassroots entrepreneurship in Bihar — mentor sessions, startup grants and incubation connects.",
  },
];

export default function SponsorsPage() {
  const mouse = useMouse();
  const [heroVisible, setHeroVisible] = useState(false);
  const ctaRef = useRef<HTMLElement>(null);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setCtaVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ctaRef.current) obs.observe(ctaRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <main
      className="relative min-h-screen w-full overflow-x-hidden px-4 pt-28 pb-12 sm:px-6 sm:pt-36 sm:pb-16 lg:px-8"
      style={{
        background:
          "linear-gradient(170deg, #060d14 0%, #08121c 40%, #050d16 80%, #060e18 100%)",
      }}
    >
      {/* Endeavours-style background layers + legacy-style canvas comets */}
      <NebulaCanvas mouse={mouse} />
      <CometBackground />
      <AuroraCurtain />
      <FloatingOrbs />

      <div className="relative z-10 mx-auto w-full max-w-6xl min-w-0">
        {/* Hero */}
        <div className="mb-12 text-center sm:mb-16">
          <h1
            className={`${beauRivage.className} text-slate-100 tracking-wide text-[2.75rem] leading-[1.05] break-words sm:text-6xl md:text-7xl lg:text-8xl`}
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            Our{" "}
            <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Sponsors
            </span>
          </h1>
          <p
            className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base px-1"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
            }}
          >
            The brands and institutions that power Entrepreneurship-Cell at IIT Patna —
            from flagship summits to large scale events.
          </p>
        </div>

        {/* Current sponsor spotlight */}
        <section className="mb-14 sm:mb-20">
          <div className="mx-auto mb-6 sm:mb-8 flex max-w-3xl items-center gap-4 sm:gap-6 px-2 sm:px-4">
            <div className="hidden h-px flex-grow bg-gradient-to-r from-transparent to-slate-800 sm:block" />
            <h2 className={`${syne.className} text-center text-lg sm:text-xl md:text-2xl text-slate-200 tracking-widest uppercase whitespace-nowrap`}>
              Our Sponsors
            </h2>
            <div className="hidden h-px flex-grow bg-gradient-to-l from-transparent to-slate-800 sm:block" />
          </div>

          <div className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-[#0b101d]/80 backdrop-blur-xl p-5 sm:p-8 lg:p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-colors hover:border-white/20">
            <div className="relative mb-5 sm:mb-6 h-36 sm:h-44 lg:h-48 w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
              <Image
                src="/images/sponsors/wingfotech.jpg"
                alt="Wingfotech — Fly with Technology"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 768px"
                className="object-contain p-4"
                priority
              />
            </div>
            <h3 className={`${syne.className} text-xl sm:text-2xl lg:text-3xl text-white font-bold`}>Wingfotech</h3>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-400 italic">Fly with Technology</p>
          </div>
        </section>

        {/* Past sponsors */}
        <section className="mb-14 sm:mb-20">
          <div className="mb-6 sm:mb-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0b101d]/60 shadow-2xl">
            <Image
              src="/images/sponsors/past-sponsors.jpg"
              alt="Wall of past E-Cell IIT Patna sponsors"
              width={1080}
              height={1014}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
              className="block h-auto w-full"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 lg:gap-3 px-1">
            {pastSponsorNames.map((name) => (
              <span
                key={name}
                className="text-[11px] sm:text-xs lg:text-sm text-slate-300 bg-slate-900/70 border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors text-center break-words max-w-full"
              >
                {name}
              </span>
            ))}
          </div>
        </section>

        {/* Why sponsor */}
        <section className="mb-14 sm:mb-20">
          <h2 className={`${syne.className} text-lg sm:text-xl md:text-2xl text-slate-200 tracking-widest uppercase text-center mb-6 sm:mb-8 px-2`}>
            Why Partner With Us?
          </h2>
          <div
            className="mx-auto grid w-full grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 items-stretch"
            style={{ maxWidth: 720 }}
          >
            {perks.map((p, i) => (
              <div key={p.title} className="h-full w-full min-w-0">
                <SponsorPerkCard
                  perk={{
                    iconBg: i === 0 ? "#c0440a" : "#0a3d6e",
                    badge: i === 0 ? "REACH" : "IMPACT",
                    badgeColor: i === 0 ? "#c0440a" : "#0a3d6e",
                    title: p.title,
                    description: p.desc,
                  }}
                  index={i}
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA — solid image card, same style as the home/footer contact card */}
        <section
          ref={ctaRef}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 text-center shadow-2xl"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 0.7s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[url('/images/speaker-bg.png')] bg-cover bg-center bg-no-repeat"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/70"
          />
          <div className="relative z-10 flex flex-col items-center px-5 py-12 sm:px-10 sm:py-16 lg:py-20">
            <h2 className={`${syne.className} text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-3`}>
              Become a Sponsor
            </h2>
            <div
              className="mx-auto my-4 sm:my-5 h-px"
              style={{
                width: 120,
                maxWidth: "40%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
              }}
            />
            <p className="mx-auto mb-6 sm:mb-8 max-w-xl text-xs sm:text-sm leading-relaxed text-slate-300 px-1">
              Want your brand in front of IIT Patna&apos;s brightest founders and innovators?
              Reach out — we&apos;ll tailor a sponsorship package for you.
            </p>
            <Link
              href="/contact"
              className="inline-block w-full sm:w-auto rounded-xl bg-white px-8 py-3.5 sm:py-4 text-center text-xs sm:text-sm font-bold tracking-widest uppercase text-black transition-all hover:bg-slate-200"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>

      <style>{`
        * { box-sizing: border-box; }

        @keyframes aurora0 {
          0%   { transform: translateX(-5%) scaleX(1);   opacity: 0.8; }
          100% { transform: translateX(8%)  scaleX(1.1); opacity: 1;   }
        }
        @keyframes aurora1 {
          0%   { transform: translateX(4%)  scaleY(1);   opacity: 0.7; }
          100% { transform: translateX(-6%) scaleY(1.15); opacity: 1;  }
        }
        @keyframes aurora2 {
          0%   { transform: scaleX(1)    translateY(0);  opacity: 0.6; }
          100% { transform: scaleX(1.1)  translateY(4%); opacity: 0.9; }
        }

        @keyframes floatOrb0 {
          0%   { transform: translate(-50%, -50%) scale(1);    opacity: 0.7; }
          100% { transform: translate(-35%, -60%) scale(1.2);  opacity: 1;   }
        }
        @keyframes floatOrb1 {
          0%   { transform: translate(-50%, -50%) scale(1.1);  opacity: 0.6; }
          100% { transform: translate(-65%, -40%) scale(0.85); opacity: 0.9; }
        }
        @keyframes floatOrb2 {
          0%   { transform: translate(-50%, -50%) scale(0.9);  opacity: 0.5; }
          100% { transform: translate(-40%, -65%) scale(1.15); opacity: 0.8; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
