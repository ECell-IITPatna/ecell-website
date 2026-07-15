"use client";
import React from 'react'
import AchievementCards from '@/components/ui/AchievementCards';
import { achievements } from "@/constants/achievements";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const AchievementMobileContent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = () => emblaApi?.scrollPrev();

  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-20 w-full h-full lg:hidden" >
      <div ref={emblaRef} className="overflow-hidden w-screen lg:hidden bg-[url('/images/achievements/bg.png')] bg-cover bg-no-repeat bg-right">
        <div className=" w-screen h-full py-20 flex flex-row  gap-4">
          {achievements.map((achievement) => (
            <AchievementCards achievement={{ title: achievement.title, description: achievement.number + " " + achievement.label, quote: achievement.quote }}
              key={achievement.id}
              className={`achievement-card-${achievement.id} w-screen shrink-0 h-full flex-col justify-center items-center gap-10 p-10`}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="group flex h-12 w-20 items-center justify-center border border-white/10 bg-[#0A0F1C] text-white transition-all duration-300 hover:border-white/20 hover:bg-[#121a2b]"
          onClick={scrollPrev}
        >
          <ArrowLeft
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />
        </button>

        <button
          className="group flex h-12 w-20 items-center justify-center border border-white/10 bg-black text-white transition-all duration-300 hover:border-white/20 hover:bg-[#121a2b]"
          onClick={scrollNext}
        >
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </section>
  )
}

export default AchievementMobileContent