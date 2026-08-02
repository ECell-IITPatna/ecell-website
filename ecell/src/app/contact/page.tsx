"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

// Centralized Contact Data Configuration
const CONTACT_DATA = {
  email: "entrepreneurship@iitp.ac.in",
  phones: ["+91 8920647827", "+91 8595771250"],
  address: {
    line1: "E-Cell Office, IIT Patna",
    line2: "Bihta, Patna, Bihar, India – 801103",
  },
  socials: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/ecell_iitpatna",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/school/ecell-iit-patna/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ],
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas Cosmic Background Animation Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const stars: Array<{
      x: number;
      y: number;
      r: number;
      a: number;
      s: number;
      layer: number;
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

    const dustMotes: Array<{
      x: number;
      y: number;
      r: number;
      a: number;
      drift: number;
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

    const nebulae = [
      { cx: 0.15, cy: 0.25, rx: 260, ry: 140, color: "rgba(20,50,110,0.22)", angle: -0.3 },
      { cx: 0.75, cy: 0.60, rx: 300, ry: 160, color: "rgba(30,18,70,0.18)", angle: 0.5 },
      { cx: 0.50, cy: 0.85, rx: 340, ry: 110, color: "rgba(10,60,80,0.14)", angle: 0 },
      { cx: 0.88, cy: 0.18, rx: 200, ry: 110, color: "rgba(40,20,80,0.13)", angle: 0.8 },
      { cx: 0.40, cy: 0.50, rx: 280, ry: 130, color: "rgba(10,30,70,0.10)", angle: 1.2 },
    ];

    function drawBackground() {
      if (!ctx) return;
      const bg = ctx.createRadialGradient(W * 0.5, H * 0.3, 0, W * 0.5, H * 0.6, W * 0.95);
      bg.addColorStop(0, "#0a0e1a");
      bg.addColorStop(0.5, "#04080f");
      bg.addColorStop(1, "#020508");
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
        g.addColorStop(1, "rgba(0,0,0,0)");
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
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const cardClassName =
    "bg-[#0b101d]/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col justify-between hover:border-cyan-500/40 transition-colors duration-300";

  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col justify-between">
      {/* BACKGROUND CANVAS LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-grow flex flex-col justify-center">
        {/* HEADING SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 relative"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-32 bg-purple-600/15 blur-3xl pointer-events-none rounded-full" />

          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest leading-tight text-white drop-shadow-md">
            <span className="font-serif italic font-normal tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-200 to-indigo-300">
              CONNECT WITH US
            </span>
          </h1>

          <p className="mt-4 text-xs sm:text-sm text-slate-400 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
            Have questions or want to collaborate with E-Cell IIT Patna? Drop us a
            message or reach out through our official channels.
          </p>
        </motion.div>

        {/* Outer Grid Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">

          {/* Left Panel: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
            className={`lg:col-span-7 ${cardClassName}`}
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                Send us a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 sm:mb-8">
                Fill out the details below and our team will get back to you promptly.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-cyan-950/30 border border-cyan-500/30 rounded-2xl p-6 text-center my-8 flex flex-col items-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-cyan-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 mb-6">
                    Thank you for reaching out. We will respond as soon as possible.
                  </p>

                  <Button
                    content="SEND ANOTHER MESSAGE"
                    css="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono"
                    onClick={() => setIsSubmitted(false)}
                  />
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-slate-950/70 border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full bg-slate-950/70 border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject / Inquiry / Proposal"
                      className="w-full bg-slate-950/70 border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message details..."
                      className="w-full bg-slate-950/70 border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      content={isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                      css="bg-white text-black font-aldrich text-md md:text-lg hover:bg-slate-200 w-full sm:w-auto"
                    />
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Panel: Connect Information */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
            className={`lg:col-span-5 ${cardClassName}`}
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                Connect With Us
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-8">
                Reach out directly or visit us at our campus office in IIT Patna.
              </p>

              {/* Information List */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-400 mb-0.5">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT_DATA.email}`}
                      className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors break-all"
                    >
                      {CONTACT_DATA.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-400 mb-0.5">
                      Phone
                    </p>
                    <div className="text-sm font-medium text-slate-200 space-y-0.5">
                      {CONTACT_DATA.phones.map((phone, i) => (
                        <p key={i}>{phone}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-400 mb-0.5">
                      Location
                    </p>
                    <p className="text-sm font-medium text-slate-200 leading-relaxed">
                      {CONTACT_DATA.address.line1} <br />
                      {CONTACT_DATA.address.line2}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Footer */}
            <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-cyan-500/20">
              <p className="text-xs font-mono uppercase text-slate-400 mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {CONTACT_DATA.socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-10 h-10 rounded-xl bg-slate-950/80 border border-cyan-500/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}