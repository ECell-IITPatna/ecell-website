"use client";
import React from 'react'
import Image from 'next/image'
import { speakers } from "@/constants/speakers"
import { useContext } from 'react'
import { SpeakerContext } from './speaker_animation'

const Speaker = () => {
  const { selectedSpeaker, setSelectedSpeaker } = useContext(SpeakerContext);
  return (
    <>
    {/* Desktop Version */}
      <section className="bg-black h-screen w-full overflow-hidden hidden lg:grid xl:grid-cols-2 lg:grid-cols-[2fr_1fr] p-5">
        <div className="overflow-hidden relative">
          <div className="overflow-hidden speaker-names-container relative -left-[100%] w-[300%] h-full">
            {speakers.map((speaker, index) => (
              <p key={speaker.id} className={"text-3xl xl:text-4xl font-bold speaker-names absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[100px] select-none" + (selectedSpeaker === index ? " text-white" : " text-[#64748B80]")}
              >
                {speaker.name}
              </p>

            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 speaker-details-container">
          <h1 className="lg:text-3xl xl:text-5xl font-clash text-white font-bold p-5">Meet Our Speakers</h1>
          <Image src={speakers[selectedSpeaker]?.image || "/images/speakers/sandeep.png"} alt="speaker" width={500} height={500} className=" lg:h-[35%] xl:h-[50%] w-auto border-2 speaker-image rounded-xl" />
          <p className="text-lg text-justify w-[60%] speaker-about text-white max-xl:w-full">

          </p>
        </div>
      </section>

    {/* Mobile Version */}
      <section>
            
      </section>
    </>
  )
}

export default Speaker
