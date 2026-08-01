"use client"
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Observer from 'gsap/Observer'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { speakers } from '@/constants/speakers'

gsap.registerPlugin(Observer, SplitText, ScrollTrigger);

export const SpeakerContext = React.createContext<{
  selectedSpeaker: number;
  setSelectedSpeaker: React.Dispatch<React.SetStateAction<number>>;
}>({
  selectedSpeaker: 0,
  setSelectedSpeaker: () => { }
});

const SpeakerAnimation = ({ children }: { children: React.ReactNode }) => {
  const [selectedSpeaker, setSelectedSpeaker] = React.useState(0);
  const lastActiveIndexRef = useRef(0);

  useGSAP(() => {
    // Check if screen size matches desktop
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const speakerNames = document.querySelectorAll('.speaker-names');
    const numberOfSpeakers = speakerNames.length;
    if (numberOfSpeakers === 0) return;

    const incrementAngle = 2 * Math.PI / numberOfSpeakers;

    // Calculate responsive metrics
    let radius = 850;
    let centerX = window.innerWidth / 4;
    let centerY = window.innerHeight / 2;

    function updatePosition(offset = 0) {
      document.querySelectorAll('.speaker-names').forEach((name, index) => {
        const angle = index * incrementAngle + offset;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const rotation = angle * (180 / Math.PI);
        gsap.set(name, {
          x: x + "px",
          y: y + "px",
          rotation: rotation,
        });
      });
    }

    // Initial configuration
    updatePosition(0);

    const rotation = { value: 0 };

    // Create ScrollTrigger to pin the section
    const trigger = ScrollTrigger.create({
      trigger: ".speaker-desktop-container",
      start: "top top",
      end: () => "+=" + (numberOfSpeakers * 800), // scroll length per speaker
      scrub: 0.8,
      pin: true,
      onUpdate: (self) => {
        // self.progress goes from 0 to 1
        const totalRotation = -(numberOfSpeakers - 1) * incrementAngle;
        const currentRotation = self.progress * totalRotation;
        rotation.value = currentRotation;
        updatePosition(currentRotation);

        const activeIndex = Math.round(-currentRotation / incrementAngle);
        if (activeIndex >= 0 && activeIndex < numberOfSpeakers) {
          if (activeIndex !== lastActiveIndexRef.current) {
            lastActiveIndexRef.current = activeIndex;
            setSelectedSpeaker(activeIndex);
          }
        }
      }
    });

    // Animate to clicked speaker section
    speakerNames.forEach((name, index) => {
      name.addEventListener('click', () => {
        const start = trigger.start;
        const end = trigger.end;
        if (start === null || end === null) return;
        const progress = index / (numberOfSpeakers - 1);
        const targetScroll = start + progress * (end - start);

        const scrollObj = { y: window.scrollY };
        gsap.to(scrollObj, {
          y: targetScroll,
          duration: 1,
          ease: "power2.out",
          onUpdate: () => {
            window.scrollTo(0, scrollObj.y);
          }
        });
      });
    });

    // Make dragging/swiping circular names container scroll the window
    const obs = Observer.create({
      target: ".speaker-names-container",
      type: "pointer,touch",
      onDrag(self) {
        window.scrollBy(0, -self.deltaY * 1.2);
      }
    });

    // Responsive scaling
    const handleResize = () => {
      centerX = window.innerWidth / 4;
      centerY = window.innerHeight / 2;
      updatePosition(rotation.value);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      trigger.kill();
      obs.kill();
    };
  }, []);

  // Details change animations (SplitText description & Image transition)
  useGSAP(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    // Image transition
    const imageElement = document.querySelector('.speaker-image');
    if (imageElement) {
      gsap.fromTo(imageElement,
        { opacity: 0.2, scale: 0.95, filter: "blur(5px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }
      );
    }

    // Split text animation on description
    const aboutElement = document.querySelector('.speaker-about');
    if (aboutElement) {
      aboutElement.textContent = speakers[selectedSpeaker]?.about || "";
      const splitText = new SplitText(aboutElement, { type: "words" });
      gsap.from(splitText.words, {
        opacity: 0,
        y: 10,
        duration: 0.4,
        stagger: 0.02,
        ease: "power1.out"
      });
      return () => {
        splitText.revert();
      };
    }
  }, { dependencies: [selectedSpeaker], revertOnUpdate: true });

  return (
    <SpeakerContext.Provider value={{ selectedSpeaker, setSelectedSpeaker }}>
      <div>
        {children}
      </div>
    </SpeakerContext.Provider>
  )
}

export default SpeakerAnimation
