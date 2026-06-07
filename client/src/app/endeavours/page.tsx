"use client";

import { useEffect, useRef, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURED = {
  tag: "# INITIATIVE",
  icon: "💡",
  title: "Xplore",
  description:
    "Xplore is the freshers' introduction to E-Cell IIT Patna. Here the seed to innovate and create jobs is planted. This is the new student initiative to find, challenge, engage, and grow with the entrepreneurial ecosystem of the institute.",
  highlights: [
    "Freeprise Program",
    "Innovative Workshops",
    "Mentorship Mapping",
    "Skill Development",
  ],
  stats: [
    { value: "100+", label: "Annual Participants" },
    { value: "15", label: "Mentorships" },
    { value: "4", label: "Workshops" },
  ],
};

const CARDS = [
  {
    id: 1,
    icon: "🚀",
    iconBg: "#c0440a",
    badge: "FLAGSHIP ENDEAVOUR",
    badgeColor: "#c0440a",
    title: "Startup Expo",
    description:
      "The Startup Expo at E-Summit IIT Patna is a curated showcase where startups can exhibit their products, ideas, and traction before investors, mentors, and fellow entrepreneurs. The Expo fosters visibility, validation,",
    tags: ["#8yr Celebration", "#Founding"],
  },
  {
    id: 2,
    icon: "⚡",
    iconBg: "#b8960a",
    badge: "FLAGSHIP ENDEAVOUR",
    badgeColor: "#c0440a",
    title: "E-Summit",
    description:
      "E-Summit 2025, the flagship entrepreneurial event of IIT Patna, is a vibrant platform that brings together innovators, investors, startups, and industry leaders to foster entrepreneurship and business growth.",
    tags: ["#Partnerships", "#Networking"],
  },
  {
    id: 3,
    icon: "⭐",
    iconBg: "#3a2d6e",
    badge: "STARTUP CAMP",
    badgeColor: "#3a2d6e",
    title: "Startin'",
    description:
      "A campus startup expo where students pitch, validate, and market their ideas through live stalls and demos. Startin' gives first-time founders a safe arena to test their vision in front of peers and mentors.",
    tags: ["#Founders Built"],
  },
  {
    id: 4,
    icon: "💡",
    iconBg: "#0a3d6e",
    badge: "INITIATIVE",
    badgeColor: "#0a3d6e",
    title: "Xplore",
    description:
      "Xplore is the freshers' introduction to E-Cell IIT Patna. Here the seed to innovate and create jobs is planted. This is the new student initiative to find, challenge, engage, and grow with the entrepreneurial ecosystem of",
    tags: ["#Freshers", "#Foundation"],
    expanded: true,
  },
];

// ─── Star field ──────────────────────────────────────────────────────────────

function generateStars(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.6 + 0.2,
    speed: Math.random() * 0.04 + 0.01,
  }));
}

const STARS = generateStars(120);

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useMouse() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return mouse;
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Components ──────────────────────────────────────────────────────────────

function StarField({ mouse }: { mouse: { x: number; y: number } }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {STARS.map((star) => (
        <div
          key={star.id}
          style={{
            position: "absolute",
            left: `calc(${star.x}% + ${(mouse.x - 0.5) * star.speed * -120}px)`,
            top: `calc(${star.y}% + ${(mouse.y - 0.5) * star.speed * -120}px)`,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            background: "white",
            opacity: star.opacity,
            transition: "left 0.6s ease, top 0.6s ease",
            boxShadow:
              star.size > 2
                ? `0 0 ${star.size * 2}px rgba(255,255,255,0.4)`
                : "none",
          }}
        />
      ))}
    </div>
  );
}

function FeaturedCard() {
  const { ref, inView } = useInView(0.1);
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div
      ref={ref}
      style={{
        background:
          "linear-gradient(135deg, #0f2027 0%, #1a2a3a 40%, #0d1f2e 100%)",
        border: "1px solid rgba(100,160,200,0.18)",
        borderRadius: 16,
        padding: "32px 36px",
        position: "relative",
        backdropFilter: "blur(12px)",
        boxShadow:
          "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {/* Close */}
      <button
        onClick={() => setClosed(true)}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          width: 28,
          height: 28,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.2)",
          background: "rgba(255,255,255,0.07)",
          color: "#aaa",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          lineHeight: 1,
          zIndex: 2,
        }}
      >
        ×
      </button>

      {/* Tag */}
      <div
        style={{
          fontSize: 10,
          letterSpacing: 2,
          color: "#7ab3d4",
          fontWeight: 600,
          marginBottom: 16,
        }}
      >
        {FEATURED.tag}
      </div>

      <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
        {/* Left */}
        <div style={{ flex: "1 1 320px" }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "rgba(60,130,200,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              marginBottom: 16,
              border: "1px solid rgba(100,180,255,0.15)",
            }}
          >
            {FEATURED.icon}
          </div>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#e8f4ff",
              margin: "0 0 12px",
            }}
          >
            {FEATURED.title}
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#8aabb8",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {FEATURED.description}
          </p>
          {/* Stats */}
          <div style={{ display: "flex", gap: 0, marginTop: 32 }}>
            {FEATURED.stats.map((s, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  borderLeft:
                    i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  paddingLeft: i > 0 ? 24 : 0,
                }}
              >
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    color: "#e0efff",
                    letterSpacing: -1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: 1.5,
                    color: "#5a8aa0",
                    fontWeight: 600,
                    marginTop: 4,
                  }}
                >
                  {s.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: highlights */}
        <div style={{ flex: "0 0 auto", minWidth: 180 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#c0d8e8",
              marginBottom: 14,
            }}
          >
            Key Highlights
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {FEATURED.highlights.map((h) => (
              <li
                key={h}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#8aabb8",
                  fontSize: 13,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#4a9ebe",
                    flexShrink: 0,
                  }}
                />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function QuickGlanceCard({
  card,
  index,
}: {
  card: (typeof CARDS)[0];
  index: number;
}) {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "linear-gradient(135deg, #0e2030 0%, #172533 100%)"
          : "linear-gradient(135deg, #0a1a26 0%, #111e2a 100%)",
        border: `1px solid ${hovered ? "rgba(100,180,255,0.25)" : "rgba(60,100,130,0.2)"}`,
        borderRadius: 14,
        padding: "24px 24px 20px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        boxShadow: hovered
          ? "0 12px 40px rgba(0,80,160,0.25), 0 0 0 1px rgba(100,180,255,0.1)"
          : "0 4px 20px rgba(0,0,0,0.3)",
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) scale(1)"
          : "translateY(50px) scale(0.97)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease`,
      }}
    >
      {/* Glow on hover */}
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "rgba(60,140,220,0.08)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
          pointerEvents: "none",
        }}
      />

      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: card.iconBg + "33",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            border: `1px solid ${card.iconBg}55`,
          }}
        >
          {card.icon}
        </div>
        <span
          style={{
            fontSize: 9,
            letterSpacing: 1.5,
            fontWeight: 700,
            color:
              card.badgeColor === "#c0440a"
                ? "#e86a2a"
                : card.badgeColor === "#3a2d6e"
                  ? "#9b8fe8"
                  : "#5ab0e0",
            border: `1px solid ${card.badgeColor === "#c0440a" ? "#e86a2a44" : card.badgeColor === "#3a2d6e" ? "#9b8fe844" : "#5ab0e044"}`,
            background:
              card.badgeColor === "#c0440a"
                ? "#e86a2a11"
                : card.badgeColor === "#3a2d6e"
                  ? "#9b8fe811"
                  : "#5ab0e011",
            borderRadius: 4,
            padding: "3px 8px",
          }}
        >
          {card.badge}
        </span>
      </div>

      <h3
        style={{
          fontSize: 17,
          fontWeight: 700,
          color: "#d8eaf8",
          margin: "0 0 10px",
          transition: "color 0.3s",
        }}
      >
        {card.title}
      </h3>
      <p
        style={{
          fontSize: 13,
          color: "#6a8fa8",
          lineHeight: 1.65,
          margin: "0 0 16px",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical" as const,
          overflow: "hidden",
        }}
      >
        {card.description}
      </p>

      {/* Tags + arrow */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {card.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 11,
                color: "#5a88a8",
                background: "rgba(60,100,130,0.15)",
                border: "1px solid rgba(60,100,130,0.2)",
                borderRadius: 20,
                padding: "2px 10px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <span
          style={{
            color: hovered ? "#5ab0e0" : "#3a607a",
            fontSize: 16,
            transition: "color 0.3s, transform 0.3s",
            transform: hovered ? "translateX(3px)" : "translateX(0)",
          }}
        >
          {card.expanded ? "▾" : "›"}
        </span>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function EndeavoursPage() {
  const mouse = useMouse();
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const glanceRef = useRef<HTMLDivElement>(null);
  const [glanceVisible, setGlanceVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setGlanceVisible(true);
      },
      { threshold: 0.1 },
    );
    if (glanceRef.current) obs.observe(glanceRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(170deg, #060d14 0%, #08121c 40%, #050d16 80%, #060e18 100%)",
        color: "#fff",
        fontFamily: "'Geist', 'Inter', system-ui, sans-serif",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Cursor-parallax starfield */}
      <StarField mouse={mouse} />

      {/* Subtle radial glow at top */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 300,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(40,100,180,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 900,
          margin: "0 auto",
          padding: "60px 28px 80px",
        }}
      >
        {/* ── HERO ─────────────────────────────────────── */}
        <div ref={heroRef}>
          {/* E-CELL label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(-16px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div style={{ width: 28, height: 2, background: "#e86a2a" }} />
            <span
              style={{
                fontSize: 11,
                letterSpacing: 2.5,
                fontWeight: 700,
                color: "#e86a2a",
              }}
            >
              E-CELL IIT PATNA
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: "clamp(44px, 8vw, 72px)",
              fontWeight: 900,
              letterSpacing: -2,
              lineHeight: 1.05,
              margin: "0 0 18px",
              color: "#f0f8ff",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            Our Endeavours
          </h1>

          {/* Sub */}
          <p
            style={{
              fontSize: 15,
              color: "#6a8fa0",
              lineHeight: 1.7,
              maxWidth: 460,
              margin: "0 0 40px",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            From flagship summits to grassroots initiatives — a record of
            everything E-Cell builds to fuel the entrepreneurial spirit at IIT
            Patna.
          </p>

          {/* Featured card */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transition: "opacity 0.7s ease 0.3s",
            }}
          >
            <FeaturedCard />
          </div>
        </div>

        {/* ── QUICK GLANCE ──────────────────────────────── */}
        <div ref={glanceRef} style={{ marginTop: 80 }}>
          <h2
            style={{
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 900,
              letterSpacing: -1.5,
              color: "#e8f4ff",
              margin: "0 0 36px",
              opacity: glanceVisible ? 1 : 0,
              transform: glanceVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            Quick Glance
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
              gap: 20,
            }}
          >
            {CARDS.map((card, i) => (
              <QuickGlanceCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            marginTop: 80,
            fontSize: 12,
            color: "#2a4a60",
            letterSpacing: 0.5,
          }}
        >
          © 2026 Entrepreneurship Cell, IIT Patna
        </div>
      </div>

      {/* Inline keyframes for any extra polish */}
      <style>{`
        * { box-sizing: border-box; }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
