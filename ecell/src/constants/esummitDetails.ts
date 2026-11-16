export interface ESummitTrack {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  icon: string;
  description: string;
  prize?: string;
}

export interface ESummitDetails {
  edition: string;
  shortTitle: string;
  title: string;
  year: string;
  tagline: string;
  theme: string;
  datesText: string;
  venue: string;
  targetDate: string; // ISO date format (YYYY-MM-DDTHH:mm:ss)
  registrationUrl: string;
  learnMoreUrl: string;
  prizePool: string;
  expectedFootfall: string;
  collegesCount: string;
  tracks: ESummitTrack[];
}

export const ESUMMIT_DETAILS: ESummitDetails = {
  edition: "E-Summit '26",
  shortTitle: "E-Summit",
  title: "E-Summit IIT Patna",
  year: "2026",
  tagline: "",
  theme: "Empowering Ideas, Building Founders",
  datesText: "January 15, 2027",
  venue: "IIT Patna Campus & Virtual",
  // Target date for countdown (ISO format).
  // If this date is in the past relative to current time, the timer automatically
  // rolls forward to a dynamic preview date so the countdown is always alive.
  targetDate: "2027-01-15T00:00:00+05:30",
  registrationUrl: "https://unstop.com",
  learnMoreUrl: "/endeavours",
  prizePool: "₹5,00,000+",
  expectedFootfall: "5,000+",
  collegesCount: "150+",
  tracks: [
    {
      id: "pitch-it-up",
      title: "Pitch It Up",
      badge: "FLAGSHIP PITCHING",
      badgeColor: "#F59E0B",
      icon: "💼",
      description: "Pitch early-stage ventures directly to angel networks, venture capitalists, and accelerators for real equity funding and mentorship.",
      prize: "₹3,00,000+ Grants"
    },
    {
      id: "startup-expo",
      title: "Startup Expo",
      badge: "EXHIBITION",
      badgeColor: "#06B6D4",
      icon: "🚀",
      description: "Curated display platform for high-potential startups to showcase products, gather direct user validation, and connect with media.",
      prize: "Direct Investor Access"
    },
    {
      id: "keynotes",
      title: "Leadership Conclaves",
      badge: "KEYNOTE SESSIONS",
      badgeColor: "#8B5CF6",
      icon: "🎙️",
      description: "Inspiring keynotes and fiery panel discussions by unicorn founders, visionary CXOs, and top innovators of India.",
      prize: "Exclusive Networking"
    },
    {
      id: "hackathon",
      title: "Product Hackathon",
      badge: "BUILD & SCALE",
      badgeColor: "#10B981",
      icon: "⚡",
      description: "36-hour sprint where product builders, designers, and developers craft breakthrough solutions for real-world enterprise challenges.",
      prize: "₹1,50,000 Cash Pool"
    }
  ]
};

