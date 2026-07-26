'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AlumniRegistrationPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    department: '',
    graduationYear: '',
    organization: '',
    role: '',
    linkedIn: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Twinkling Star & Space Canvas Background Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Starfield setup (2 depth layers)
    const stars: Array<{
      x: number; y: number; r: number;
      a: number; s: number; layer: number;
    }> = [];

    for (let i = 0; i < 75; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.4,
        a: Math.random(),
        s: Math.random() * 0.015 + 0.005,
        layer: 0,
      });
    }

    for (let i = 0; i < 75; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: (Math.random() * 1.2 + 0.4) * 0.55,
        a: Math.random(),
        s: (Math.random() * 0.015 + 0.005) * 0.5,
        layer: 1,
      });
    }

    // Drifting dust motes
    const dustMotes: Array<{
      x: number; y: number; r: number; a: number; drift: number;
    }> = [];

    for (let i = 0; i < 40; i++) {
      dustMotes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2.5 + 1,
        a: Math.random() * 0.12 + 0.02,
        drift: (Math.random() - 0.5) * 0.1,
      });
    }

    // Cosmic nebulae background glows
    const nebulae = [
      { cx: 0.15, cy: 0.25, rx: 260, ry: 140, color: 'rgba(20,50,110,0.22)', angle: -0.3 },
      { cx: 0.75, cy: 0.60, rx: 300, ry: 160, color: 'rgba(30,18,70,0.18)', angle: 0.5 },
      { cx: 0.50, cy: 0.85, rx: 340, ry: 110, color: 'rgba(10,60,80,0.14)', angle: 0 },
      { cx: 0.88, cy: 0.18, rx: 200, ry: 110, color: 'rgba(40,20,80,0.13)', angle: 0.8 },
      { cx: 0.40, cy: 0.50, rx: 280, ry: 130, color: 'rgba(10,30,70,0.10)', angle: 1.2 },
    ];

    function drawBackground() {
      if (!ctx) return;
      const bg = ctx.createRadialGradient(W * 0.5, H * 0.3, 0, W * 0.5, H * 0.6, W * 0.95);
      bg.addColorStop(0, '#0a0e1a');
      bg.addColorStop(0.5, '#04080f');
      bg.addColorStop(1, '#020508');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);
    }

    function drawNebulae() {
      nebulae.forEach((n) => {
        if (!ctx) return;
        ctx.save();
        ctx.translate(n.cx * W, n.cy * H);
        ctx.rotate(n.angle);
        const maxR = Math.max(n.rx, n.ry);
        ctx.scale(n.rx / maxR, n.ry / maxR);
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, maxR);
        g.addColorStop(0, n.color);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(0, 0, maxR, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.restore();
      });
    }

    function drawDustMotes() {
      dustMotes.forEach((d) => {
        if (!ctx) return;
        d.x += d.drift;
        if (d.x > W + 10) d.x = -10;
        if (d.x < -10) d.x = W + 10;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,210,255,${d.a})`;
        ctx.fill();
      });
    }

    function drawStars() {
      stars.forEach((s) => {
        if (!ctx) return;
        s.a += s.s;
        if (s.a > 1 || s.a < 0) s.s = -s.s;
        const alpha = Math.max(0.1, s.a * 0.6) * (s.layer === 0 ? 1 : 0.45);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });
    }

    const render = () => {
      drawBackground();
      drawNebulae();
      drawDustMotes();
      drawStars();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#030712] text-white relative flex flex-col items-center justify-center pt-32 py-15 px-4 overflow-x-hidden">
      
      {/* CANVAS BACKGROUND LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center max-w-2xl mb-10">
        <Link
          href="/#alumni"
          className="inline-block text-sm text-slate-400 hover:text-white mb-4 transition-colors font-clash"
        >
          ← Back to Main Page
        </Link>
        <h1 className="text-4xl sm:text-5xl font-clash font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Alumni Registration
        </h1>
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          Join our thriving alumni network and stay connected with E-Cell IIT Patna. 
          Receive updates on events, mentor current students, and collaborate with fellow innovators.
        </p>
      </div>

      {/* Form Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-2xl bg-slate-950/60 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-2xl">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h2 className="text-2xl font-clash font-bold text-white">Registration Submitted!</h2>
            <p className="text-slate-400 text-sm">
              Thank you for registering. Your details have been submitted successfully.
            </p>
            <Link
              href="/#alumni"
              className="inline-block mt-6 px-6 py-2.5 rounded-lg bg-white text-black font-clash text-sm font-semibold hover:bg-slate-200 transition-colors"
            >
              Return to Website
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-clash uppercase tracking-wider text-slate-300 mb-2">
                  Full Name <span className="text-blue-400">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-slate-900/80 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-clash uppercase tracking-wider text-slate-300 mb-2">
                  Contact Number <span className="text-blue-400">*</span>
                </label>
                <input
                  required
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full bg-slate-900/80 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-clash uppercase tracking-wider text-slate-300 mb-2">
                Email Address <span className="text-blue-400">*</span>
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full bg-slate-900/80 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-clash uppercase tracking-wider text-slate-300 mb-2">
                  Department / Branch <span className="text-blue-400">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="e.g. Computer Science"
                  className="w-full bg-slate-900/80 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-clash uppercase tracking-wider text-slate-300 mb-2">
                  Year of Graduation <span className="text-blue-400">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  placeholder="e.g. 2022"
                  className="w-full bg-slate-900/80 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-clash uppercase tracking-wider text-slate-300 mb-2">
                  Organization / Startup <span className="text-blue-400">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Where you currently work"
                  className="w-full bg-slate-900/80 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-clash uppercase tracking-wider text-slate-300 mb-2">
                  Current Role <span className="text-blue-400">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g. Software Engineer, Founder"
                  className="w-full bg-slate-900/80 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-clash uppercase tracking-wider text-slate-300 mb-2">
                LinkedIn Profile URL <span className="text-blue-400">*</span>
              </label>
              <input
                required
                type="url"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                placeholder="https://www.linkedin.com/in/yourprofile"
                className="w-full bg-slate-900/80 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 py-3.5 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-clash font-semibold text-sm tracking-wide shadow-lg transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? 'Registering...' : 'Register as Alumni'}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}