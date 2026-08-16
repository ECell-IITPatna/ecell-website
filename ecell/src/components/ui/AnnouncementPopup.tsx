"use client";

import React, { useState, useEffect } from "react";
import { Megaphone, X, Calendar } from "lucide-react";

interface Announcement {
  _id: string;
  headline: string;
  content: string;
  createdAt: string;
}

export default function AnnouncementPopup({ isPreloaderLoading }: { isPreloaderLoading: boolean }) {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch announcements from the public API
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await fetch("/api/announcements", { cache: "no-store" });
        const data = await res.json();
        if (res.ok && data.success && data.announcements && data.announcements.length > 0) {
          setAnnouncements(data.announcements);
        }
      } catch (err) {
        console.error("Failed to fetch announcements:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  // Show the popup once preloading has finished and we have active announcements
  useEffect(() => {
    if (!isPreloaderLoading && !hasBeenClosed && announcements.length > 0) {
      // Small timeout for visual flow after preloader fadeout
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Lock body scroll while popup is open
        document.body.style.overflow = "hidden";
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPreloaderLoading, hasBeenClosed, announcements]);

  const handleClose = () => {
    setIsOpen(false);
    setHasBeenClosed(true);
    // Restore body scroll
    document.body.style.overflow = "";
  };

  if (!isOpen || announcements.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300">
      {/* Dark backdrop blur */}
      <div 
        className="absolute inset-0 bg-[#02050b]/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div 
        data-lenis-prevent
        className="relative w-full max-w-lg bg-[#070B14]/90 border border-slate-800/80 backdrop-blur-md shadow-[0_0_50px_rgba(99,102,241,0.15)] rounded-2xl overflow-hidden animate-slide-in select-text"
      >
        {/* Glow ambient background elements */}
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full filter blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-cyan-600/10 rounded-full filter blur-[80px] pointer-events-none" />

        {/* Modal Header */}
        <div className="relative border-b border-slate-800 bg-[#0a0f1d]/50 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* Pulse glow effect around megaphone */}
              <div className="absolute inset-0 bg-amber-500/20 rounded-lg animate-ping" />
              <div className="relative h-9 w-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <Megaphone className="h-5 w-5 text-amber-400" />
              </div>
            </div>
            <div>
              <h2 className="text-md font-bold tracking-wider font-clash text-white">Upcoming Announcements</h2>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase font-inter">What's new at E-Cell</p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="text-slate-450 hover:text-white transition p-1.5 hover:bg-slate-800/50 rounded-lg cursor-pointer absolute right-4 top-4"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* Modal Announcements Content Area */}
        <div 
          data-lenis-prevent
          className="max-h-[350px] overflow-y-auto px-6 py-5 space-y-5 no-scrollbar relative"
        >
          {announcements.map((ann) => (
            <div 
              key={ann._id} 
              className="bg-[#0b1120]/40 border border-slate-800/50 rounded-xl p-4 space-y-2.5 transition hover:border-slate-700/60"
            >
              <div className="flex justify-between items-start gap-3">
                <h3 className="text-sm font-bold text-white tracking-wide leading-snug">{ann.headline}</h3>
                <span className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider shrink-0 flex items-center bg-[#070b14]/50 border border-slate-800/60 px-2 py-0.5 rounded-full">
                  <Calendar className="h-2.5 w-2.5 mr-1 text-slate-600" />
                  {new Date(ann.createdAt).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                </span>
              </div>
              <div className="text-xs text-slate-350 leading-relaxed font-medium font-inter space-y-2">
                {parseMarkdown(ann.content)}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer Action */}
        <div className="bg-[#0a0f1d]/30 px-6 py-4 border-t border-slate-800/50 flex justify-end">
          <button
            onClick={handleClose}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold cursor-pointer active:scale-95 transition shadow-lg shadow-indigo-650/20"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}

// Secure regex-based markdown to React elements parser helper
function parseMarkdown(text: string): React.ReactNode[] {
  const lines = text.split("\n");
  const parsedElements: React.ReactNode[] = [];
  
  let inList = false;
  let listItems: React.ReactNode[] = [];

  const parseInline = (lineText: string, key: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    let inlineKey = 0;

    while ((match = linkRegex.exec(lineText)) !== null) {
      const matchIndex = match.index;
      const textPart = lineText.substring(lastIndex, matchIndex);
      
      if (textPart) {
        parts.push(parseRawUrlsAndFormatting(textPart, `${key}-inline-${inlineKey++}`));
      }
      
      const linkText = match[1];
      const linkUrl = match[2];
      
      parts.push(
        <a 
          key={`${key}-link-${inlineKey++}`}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-355 underline font-semibold transition duration-200 cursor-pointer"
        >
          {linkText}
        </a>
      );
      
      lastIndex = linkRegex.lastIndex;
    }
    
    const remainingText = lineText.substring(lastIndex);
    if (remainingText) {
      parts.push(parseRawUrlsAndFormatting(remainingText, `${key}-inline-${inlineKey++}`));
    }
    
    return <React.Fragment key={key}>{parts}</React.Fragment>;
  };

  const parseRawUrlsAndFormatting = (textPart: string, key: string): React.ReactNode => {
    const rawUrlRegex = /(https?:\/\/[^\s\]\)]+|www\.[a-zA-Z0-9-]+\.[^\s\]\)]+)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;
    let subKey = 0;

    while ((match = rawUrlRegex.exec(textPart)) !== null) {
      const matchIndex = match.index;
      const precedingText = textPart.substring(lastIndex, matchIndex);
      
      if (precedingText) {
        parts.push(parseBoldAndItalic(precedingText, `${key}-raw-${subKey++}`));
      }
      
      const rawUrl = match[1];
      const hrefUrl = rawUrl.startsWith("www.") ? `https://${rawUrl}` : rawUrl;
      
      parts.push(
        <a 
          key={`${key}-raw-link-${subKey++}`}
          href={hrefUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-355 underline font-semibold transition duration-200 cursor-pointer"
        >
          {rawUrl}
        </a>
      );
      
      lastIndex = rawUrlRegex.lastIndex;
    }
    
    const remainingText = textPart.substring(lastIndex);
    if (remainingText) {
      parts.push(parseBoldAndItalic(remainingText, `${key}-raw-${subKey++}`));
    }
    
    return <React.Fragment key={key}>{parts}</React.Fragment>;
  };

  const parseBoldAndItalic = (textPart: string, key: string): React.ReactNode => {
    const boldParts = textPart.split("**");
    const inlineElements: React.ReactNode[] = [];
    
    boldParts.forEach((part, index) => {
      const isBold = index % 2 === 1;
      const italicParts = part.split("*");
      const subElements: React.ReactNode[] = [];
      
      italicParts.forEach((subPart, subIndex) => {
        const isItalic = subIndex % 2 === 1;
        if (isItalic) {
          subElements.push(<em key={`em-${subIndex}`} className="italic text-slate-200">{subPart}</em>);
        } else {
          subElements.push(subPart);
        }
      });
      
      if (isBold) {
        inlineElements.push(<strong key={`strong-${index}`} className="font-bold text-white">{subElements}</strong>);
      } else {
        inlineElements.push(<React.Fragment key={`text-${index}`}>{subElements}</React.Fragment>);
      }
    });
    
    return <span key={key}>{inlineElements}</span>;
  };

  lines.forEach((line, lineIndex) => {
    const trimmed = line.trim();
    
    if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
      if (!inList) {
        inList = true;
        listItems = [];
      }
      const itemContent = trimmed.substring(2);
      listItems.push(
        <li key={`li-${lineIndex}`} className="list-disc ml-5 pl-1 mb-1 text-slate-350">
          {parseInline(itemContent, `li-content-${lineIndex}`)}
        </li>
      );
    } else {
      if (inList) {
        parsedElements.push(
          <ul key={`ul-${lineIndex}`} className="space-y-1 my-2">
            {listItems}
          </ul>
        );
        inList = false;
      }
      
      if (trimmed === "") {
        parsedElements.push(<div key={`space-${lineIndex}`} className="h-2" />);
      } else {
        parsedElements.push(
          <p key={`p-${lineIndex}`} className="leading-relaxed mb-1.5 text-slate-350">
            {parseInline(line, `p-content-${lineIndex}`)}
          </p>
        );
      }
    }
  });

  if (inList) {
    parsedElements.push(
      <ul key="ul-end" className="space-y-1 my-2">
        {listItems}
      </ul>
    );
  }

  return parsedElements;
}
