"use client"
import React from 'react'
import { useContext } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Observer from 'gsap/Observer'
import SplitText from 'gsap/SplitText'
import { speakers } from '@/constants/speakers'

gsap.registerPlugin(Observer,SplitText);

export const SpeakerContext = React.createContext<{
  selectedSpeaker: number;
  setSelectedSpeaker: React.Dispatch<React.SetStateAction<number>>;
}>({
  selectedSpeaker: 0,
  setSelectedSpeaker: () => { }
});

const SpeakerAnimation = ({ children }: { children: React.ReactNode }) => {
  const [selectedSpeaker, setSelectedSpeaker] = React.useState(0);
  useGSAP(() => {
    // GSAP animation code here
    let splitText = new SplitText(".speaker-about", { type: "words" });
    const speakerNames = document.querySelectorAll('.speaker-names');
    const speakerNamesContainer = document.querySelector('.speaker-names-container');
    const numberOfSpeakers = speakerNames.length;
    const incrementAngle = 2 * Math.PI / numberOfSpeakers;
    const radius = 1000;
    const centerX = window.innerWidth / 4; // Center X position
    const centerY = window.innerHeight / 2; // Center Y position

    speakerNames.forEach((name, index) => {
      const angle = index * incrementAngle;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      const rotation = angle * (180 / Math.PI); // Convert radians to degrees
      gsap.set(name, {
        x: x + "px",
        y: y + "px",
        rotation: rotation,
      })
    })


    function updatePosition(offset = 0) {
      document.querySelectorAll('.speaker-names').forEach((name, index) => {
        const angle = index * incrementAngle + offset;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const rotation = angle * (180 / Math.PI);
        gsap.to(name, {
          x: x + "px",
          y: y + "px",
          rotation: rotation,
          duration: 0.5,
          ease: "elastic.Out"
        });
      });
    }

    function updateSpeakerDetails(index: number) {
      splitText.revert();
      
      const speaker = speakers[index];
      const imageElement = document.querySelector('.speaker-image') as HTMLImageElement;
      const aboutElement = document.querySelector('.speaker-about') as HTMLParagraphElement;
      imageElement.src = speaker.image;
      aboutElement.textContent = speaker.about;
      
      splitText = new SplitText(".speaker-about", { type: "words" });
      gsap.from(splitText.words,{
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
      });
    }

    const rotation = { value: 0 };
    Observer.create({
      target: ".speaker-names-container",
      type: "pointer,touch",

      onDrag(self) {
        rotation.value += self.deltaY * 0.01;
        updatePosition(rotation.value);
      }
    });

    speakerNames.forEach((name) => {
      name.addEventListener('click', () => {
        const index = Array.from(speakerNames).indexOf(name);
        setSelectedSpeaker(index);
        updateSpeakerDetails(index);
        const targetAngle = -index * incrementAngle;
        gsap.to(rotation, {
          value: targetAngle,
          duration: 1,
          ease: "power2.inOut",
          onUpdate: () => {
            updatePosition(rotation.value);
          }
        });
      })
    })

    setSelectedSpeaker(0);
    updateSpeakerDetails(0);


  }, [])

  return (
    <SpeakerContext.Provider value={{ selectedSpeaker, setSelectedSpeaker }}>
      <div>
        {children}
      </div>
    </SpeakerContext.Provider>
  )
}

export default SpeakerAnimation
