'use client';
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useGSAP(() => {
    // Entrance animations
    gsap.fromTo(".contact-title", 
      { opacity: 0, y: -50, rotateX: 45 }, 
      { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: "power4.out" }
    );
    
    gsap.fromTo(formRef.current,
      { opacity: 0, x: -100, rotateY: -15 },
      { opacity: 1, x: 0, rotateY: 0, duration: 1.5, ease: "power3.out", delay: 0.3 }
    );

    gsap.fromTo(infoRef.current,
      { opacity: 0, x: 100, rotateY: 15 },
      { opacity: 1, x: 0, rotateY: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
  }, { scope: containerRef });

  // 3D Parallax on Mouse Move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth - 0.5) * 20;
    const yPos = (clientY / innerHeight - 0.5) * 20;

    gsap.to(".parallax-bg", {
      x: xPos * 2,
      y: yPos * 2,
      duration: 1,
      ease: "power2.out"
    });

    gsap.to(formRef.current, {
      rotateY: xPos * 0.5,
      rotateX: -yPos * 0.5,
      transformPerspective: 1000,
      duration: 1,
      ease: "power2.out"
    });

    gsap.to(infoRef.current, {
      rotateY: xPos * 0.5,
      rotateX: -yPos * 0.5,
      transformPerspective: 1000,
      duration: 1,
      ease: "power2.out"
    });
  };

  return (
    <main 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#070B14] overflow-hidden text-white font-inter flex flex-col justify-center items-center py-20 px-6 sm:px-12 lg:px-24 perspective-[1000px]"
    >
      
      {/* 3D Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none parallax-bg">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[#0F172A] rounded-full mix-blend-screen filter blur-[100px] animate-pulse duration-[5000ms]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse duration-[7000ms]" />
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)', 
            backgroundSize: '30px 30px' 
          }}
        />
      </div>

      <section className="relative z-10 w-full max-w-6xl mx-auto mt-12 transform-style-3d">
        <h1 className="contact-title text-5xl md:text-7xl font-bold text-center mb-24 tracking-tight font-clash drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Get In Touch
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          
          {/* Left Column: Form */}
          <div ref={formRef} className="flex flex-col space-y-12 bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl hover:border-blue-500/30 transition-colors duration-500">
            
            <div className="flex flex-col sm:flex-row gap-12 sm:gap-8">
              {/* Name Input */}
              <div className="relative flex-1 group">
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b-2 border-[#1E293B] py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 relative z-10"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-3 text-[#D0D0D0] text-base cursor-text peer-focus:-top-6 peer-focus:text-xs peer-focus:text-blue-400 transition-all duration-300 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-slate-300 z-0"
                >
                  Name
                </label>
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Email Input */}
              <div className="relative flex-1 group mt-10 sm:mt-0">
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b-2 border-[#1E293B] py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 relative z-10"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-3 text-[#D0D0D0] text-base cursor-text peer-focus:-top-6 peer-focus:text-xs peer-focus:text-blue-400 transition-all duration-300 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-slate-300 z-0"
                >
                  Email
                </label>
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative group">
              <textarea 
                name="message" 
                id="message"
                placeholder=" "
                rows={1}
                value={formData.message}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b-2 border-[#1E293B] py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none overflow-hidden min-h-[50px] relative z-10"
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = `${target.scrollHeight}px`;
                }}
              />
              <label 
                htmlFor="message" 
                className="absolute left-0 top-3 text-[#D0D0D0] text-base cursor-text peer-focus:-top-6 peer-focus:text-xs peer-focus:text-blue-400 transition-all duration-300 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-slate-300 z-0"
              >
                Write Your Message...
              </label>
              <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            <div className="pt-8">
              <button className="relative px-10 py-4 rounded-full border border-blue-500/50 bg-[#0F172A] text-white font-semibold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#070B14] group w-full sm:w-auto">
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-blue-600"></span>
                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-blue-300 transition-colors duration-300">
                  Send Message
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <div className="absolute inset-0 bg-blue-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
            </div>
            
          </div>

          {/* Right Column: Contact Info */}
          <div ref={infoRef} className="flex flex-col space-y-12 lg:pl-10 justify-center bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl hover:border-white/20 transition-colors duration-500">
            
            <div className="flex flex-col space-y-2 group cursor-default">
              <h3 className="text-[#D0D0D0] text-sm tracking-widest uppercase font-semibold group-hover:text-blue-400 transition-colors duration-300">Email</h3>
              <a href="mailto:ecell_iitp@gmail.com" className="text-xl md:text-[22px] text-white group-hover:translate-x-2 transition-transform duration-300 inline-block drop-shadow-md">
                ecell_iitp@gmail.com
              </a>
            </div>

            <div className="flex flex-col space-y-2 group cursor-default">
              <h3 className="text-[#D0D0D0] text-sm tracking-widest uppercase font-semibold group-hover:text-blue-400 transition-colors duration-300">Phone</h3>
              <a href="tel:+911111111111" className="text-xl md:text-[22px] text-white group-hover:translate-x-2 transition-transform duration-300 inline-block drop-shadow-md">
                +91 1111111111
              </a>
            </div>

            <div className="flex flex-col space-y-2 group cursor-default">
              <h3 className="text-[#D0D0D0] text-sm tracking-widest uppercase font-semibold group-hover:text-blue-400 transition-colors duration-300">Address</h3>
              <address className="not-italic text-lg md:text-[22px] text-white leading-relaxed max-w-sm group-hover:translate-x-2 transition-transform duration-300 drop-shadow-md">
                Entrepreneurship Cell,<br />
                IIT Patna,<br />
                Bihta, Patna, 801106, Bihar
              </address>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}