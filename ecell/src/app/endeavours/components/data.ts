export const FEATURED = {
  status: "UPCOMING EVENT",
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

export type EndeavourCardInput = {
  id: number;
  icon: string;
  iconBg: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  tags?: readonly string[];
};

type EndeavourCard = Omit<EndeavourCardInput, "tags"> & {
  tags: readonly string[];
};

const rawCards: readonly EndeavourCardInput[] = [
  {
    id: 1,
    icon: "🚀",
    iconBg: "#c0440a",
    badge: "FLAGSHIP ENDEAVOUR",
    badgeColor: "#c0440a",
    title: "Startup Expo",
    description:
      "The Startup Expo at E-Summit IIT Patna is a curated showcase where startups can exhibit their products, ideas, and traction before investors, mentors, and fellow entrepreneurs. The Expo fosters visibility, validation, and networking opportunities to accelerate growth.",
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
  },
  {
    id: 4,
    icon: "💡",
    iconBg: "#0a3d6e",
    badge: "INITIATIVE",
    badgeColor: "#0a3d6e",
    title: "Xplore",
    description:
      "Xplore is the freshers' introduction to E-Cell IIT Patna. Here the seed to innovate and create jobs is planted. This is the new student initiative to find, challenge, engage, and grow with the entrepreneurial ecosystem of the institute.",
  },
] satisfies readonly EndeavourCardInput[];

export const CARDS: readonly EndeavourCard[] = rawCards.map((card) => ({
  ...card,
  tags: card.tags ?? [],
}));

export function generateStars(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random(), // depth 0 (far) → 1 (near)
    size: Math.random() * 2 + 0.4,
    opacity: Math.random() * 0.5 + 0.15,
    twinkleDuration: 2 + Math.random() * 4,
    twinkleDelay: Math.random() * 5,
    orbitRadius: Math.random() * 0.06 + 0.01,
    orbitSpeed: (Math.random() * 0.3 + 0.05) * (Math.random() < 0.5 ? 1 : -1),
    orbitPhase: Math.random() * Math.PI * 2,
    isBright: Math.random() < 0.12,
  }));
}

export function generateShootingStars(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: i * 3.7 + Math.random() * 6,
    duration: 1.2 + Math.random() * 1.2,
    startX: 10 + Math.random() * 60,
    startY: 5 + Math.random() * 40,
    angle: 25 + Math.random() * 20,
    length: 120 + Math.random() * 180,
  }));
}