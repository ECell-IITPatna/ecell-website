import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="about-section relative w-full py-20 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#070B14] overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Column: Image with Orbit Path & Rocket */}
        <div className="about-image-container relative flex justify-center items-center w-full max-w-lg mx-auto lg:mx-0">
          {/* Outer glow aura */}
          <div className="absolute -inset-4 bg-blue-500/10 rounded-[2.5rem] blur-3xl opacity-60 pointer-events-none" />

          {/* Main Image Wrapper */}
          <div className="relative z-10 w-full aspect-[4/3] sm:aspect-[1.4] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 shadow-2xl shadow-blue-950/20">
            <Image
              src="/images/about/mission.png"
              alt="E-Cell Mission & Vision"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Right Column: Mission & Vision Content */}
        <div className="about-text-container flex flex-col space-y-8 text-left">
          <div>
            <h2 className="about-heading font-clash font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-wide leading-tight">
              Our <span className="text-yellow-500 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Mission</span> & <span className="text-yellow-500 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Vision</span>
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
  );
};

export default About;
