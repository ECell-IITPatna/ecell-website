"use client";
import React, { RefObject, useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { createContext, useContext } from 'react';
import { achievements } from "@/constants/achievements";

gsap.registerPlugin(ScrollTrigger, SplitText);

export type UserContextType = {
  achievementDescription: RefObject<HTMLHeadingElement | null>;
  achievementQuote: RefObject<HTMLParagraphElement | null>;
  achievementQuoteAuthor: RefObject<HTMLParagraphElement | null>;
};
export const UserContext = createContext<UserContextType | null>(null);

const AchievementsAnimation = ({ children }: { children: React.ReactNode }) => {
  const achievementDescription = useRef<HTMLDivElement>(null);
  const achievementQuote = useRef<HTMLDivElement>(null);
  const achievementQuoteAuthor = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const header = new SplitText(".header", { type: "words" });
    const para = new SplitText(".para", { type: "words" });
    const achievementsSection3 = new SplitText(".achievement-section-3", { type: "words" });

    let split1 = new SplitText(achievementDescription.current!, { type: "words" });
    let split2 = new SplitText(achievementQuote.current!, { type: "words" });
    let split3 = new SplitText(achievementQuoteAuthor.current!, { type: "words" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".achievement-section-1",
        start: "top center",
      },
    });
    const tl2 = gsap.timeline({});

    tl.set(header.words, { backgroundImage: "linear-gradient(90deg, #368affda,white,#368affda)", backgroundPosition: "0% 0%", backgroundSize: "200% 100%", backgroundClip: "text" });
    tl.to(header.words,
      {
        backgroundPosition: "-200% 0%",
        duration: 1,
        ease: "power4.inOut",
        stagger: 0.1,
      },
    );
    tl.from(para.words, {
      opacity: 0,
      stagger: 0.07,
    })

    //Desktop Animations
    gsap.from(achievementsSection3.words, {
      scrollTrigger: {
        trigger: ".achievement-section-3",
        start: "top center",
      },
      opacity: 0,
      stagger: 0.07,
      duration: 1,
    });

    tl2.to(".achievement-section-2", {
      scrollTrigger: {
        trigger: ".achievement-section-2",
        pin: ".achievement-content-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    })

    achievements.map((achievement) => {
      ScrollTrigger.create({
        trigger: `.achievement-title-${achievement.id}`,
        start: "top 40%",
        end: "bottom 60%",
        onEnter: () => {
          split1.revert();
          split2.revert();
          split3.revert();

          achievementDescription.current!.textContent = achievement.number + " " + achievement.label;
          achievementQuote.current!.textContent = achievement.quote.text;
          achievementQuoteAuthor.current!.textContent = "~ " + achievement.quote.author;

          split1 = SplitText.create(achievementDescription.current!, { type: "words" });
          split2 = SplitText.create(achievementQuote.current!, { type: "words" });
          split3 = SplitText.create(achievementQuoteAuthor.current!, { type: "words" });

          gsap.from([split1.words, split2.words, split3.words], {
            opacity: 0,
            duration: 0.8,
            stagger: 0.05,
          });
        },
        onEnterBack: () => {
          split1.revert();
          split2.revert();
          split3.revert();

          achievementDescription.current!.textContent = achievement.number + " " + achievement.label;
          achievementQuote.current!.textContent = achievement.quote.text;
          achievementQuoteAuthor.current!.textContent = "~ " + achievement.quote.author;

          split1 = SplitText.create(achievementDescription.current!, { type: "words" });
          split2 = SplitText.create(achievementQuote.current!, { type: "words" });
          split3 = SplitText.create(achievementQuoteAuthor.current!, { type: "words" });

          gsap.from([split1.words, split2.words, split3.words], {
            opacity: 0,
            stagger: 0.07,
          });
        },
      })
    });

    //Mobile Animations

  }, []);

  return (
    <UserContext.Provider value={{ achievementDescription, achievementQuote, achievementQuoteAuthor }}>
      <div>
        {children}
      </div>
    </UserContext.Provider>
  )
}

export default AchievementsAnimation
