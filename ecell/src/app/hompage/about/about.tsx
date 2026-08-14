import React from 'react';
import Image from 'next/image';
import TiltingImageFrame from './TiltingImageFrame';

const About = () => {
  return (
    <div id="about">
      <section className="relative about-section w-full py-10 bg-[#070B14] overflow-hidden">
        <div
          className="
        rocket
        absolute
        right-0
        bottom-0
        md:translate-x-1/5
        translate-y-1/3
        opacity-5
        pointer-events-none
        w-[70%]
        h-[70%]
        max-md:w-full
        max-sm:hidden
        "
        >
          <Image
            src="/images/about/rocket.png"
            alt="Rocket"
            fill
            className="object-contain"
          />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 px-5 items-center">

          {/* Left Column: Image with Orbit Path & Rocket */}
          <div className="about-image-container relative flex justify-center items-center w-full max-w-lg mx-auto lg:mx-0">
            {/* Outer glow aura */}
            <div className="absolute -inset-4 bg-blue-500/10 rounded-[2.5rem] blur-3xl opacity-60 pointer-events-none" />

            {/* Main Image Wrapper */}
            <TiltingImageFrame
              src="/images/about/mission.png"
              alt="E-Cell Mission & Vision"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
              frameClassName="relative z-10 w-full aspect-4/3 sm:aspect-[1.4] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 shadow-2xl shadow-blue-950/20 about-image-container"
              imageClassName="object-cover opacity-90 transition-transform duration-700"
            />
          </div>

          {/* Right Column: Mission & Vision Content */}
          <div className="about-text-container flex flex-col space-y-8 lg:text-left text-center" >
            <div>
              <h2 className="about-heading font-clash font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-wide leading-tight">
                Our <span className="text-yellow-500">Mission</span> & <span className="text-yellow-500">Vision</span>
              </h2>
            </div>

            <div className="space-y-6 text-[#A0AEC0] font-inter text-sm sm:text-base md:text-lg leading-relaxed">
              <p className="about-para font-light">
                Our Mission is to ignite the entrepreneurial spirit among students by providing mentorship, resources, and an environment that transforms ideas into impactful ventures.
              </p>
              <p className="about-para font-light">
                We strive to build a leading student-driven startup ecosystem that nurtures innovation, drives change, and empowers youth to become future leaders and disruptors.
              </p>
            </div>
          </div>

        </div>
      </section>
      <section className="about-section w-full py-10 bg-[#070B14] overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 px-5 items-center">
          <div className="about-text-container order-2 lg:order-1 flex flex-col space-y-8 lg:text-left text-center">
            <div>
              <h2 className="about-heading font-clash font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-wide leading-tight">
                Empowering the Next Generation of <span className="text-blue-500">Industry Leaders</span>
              </h2>
            </div>
            {/* Content */}
            <div className="space-y-6 text-[#A0AEC0] font-inter text-sm sm:text-base md:text-lg leading-relaxed">
              <p className="about-para font-light">
                Our incubation center provides entrepreneurs with the essential resources, mentorship, and strategic guidance needed to build sustainable businesses. We focus on creating long-term value through structured programs and professional development.
              </p>
            </div>
            {/*List*/}
            <div className="flex flex-col space-y-4 mt-6">
              <div className="flex flex-row items-center gap-4 w-full">
                <span className="text-6xl font-micro font-extrabold text-slate-500">01</span>
                <p
                  className=" font-bold overflow-hidden w-[300px] rounded-xl border border-slate-700 bg-[#0F172A] px-5 py-3 text-white  text-md relative before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:rounded-r-full before:bg-blue-500"
                >
                  Structured 12-month acceleration program
                </p>
              </div>
              <div className="flex flex-row items-center gap-4 w-full">
                <span className="text-6xl font-micro font-extrabold text-slate-500">02</span>
                <p
                  className=" font-bold overflow-hidden w-[300px] rounded-xl border border-slate-700 bg-[#0F172A] px-5 py-3 text-white  text-md relative before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:rounded-r-full before:bg-blue-500"
                >
                  Direct access to investor networks
                </p>
              </div>
              <div className="flex flex-row items-center gap-4 w-full">
                <span className="text-6xl font-micro font-extrabold text-slate-500">03</span>
                <p
                  className=" font-bold overflow-hidden w-[300px] rounded-xl border border-slate-700 bg-[#0F172A] px-5 py-3 text-white  text-md relative before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:rounded-r-full before:bg-blue-500"
                >
                  Professional workspace and facilities
                </p>
              </div>
              <div className="flex flex-row items-center gap-4 w-full">
                <span className="text-6xl font-micro font-extrabold text-slate-500">04</span>
                <p
                  className=" font-bold overflow-hidden w-[300px] rounded-xl border border-slate-700 bg-[#0F172A] px-5 py-3 text-white  text-md relative before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:rounded-r-full before:bg-blue-500"
                >
                  Ongoing strategic business support
                </p>
              </div>
            </div>
          </div>
          <div className="about-image-container relative order-1 lg:order-2 flex justify-center items-center w-full max-w-lg mx-auto lg:mx-0">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-[2.5rem] blur-3xl opacity-60 pointer-events-none" />
            <TiltingImageFrame
              src="/images/about/incubation_centre.png"
              alt="Incubation Centre"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
              frameClassName="relative z-10 w-full aspect-1047/1159 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 shadow-2xl shadow-blue-950/20"
              imageClassName="object-contain opacity-90 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;