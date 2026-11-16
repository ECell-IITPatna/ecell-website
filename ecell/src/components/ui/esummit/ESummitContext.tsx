"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ESummitContextType {
  isBannerVisible: boolean;
  isMinimized: boolean;
  isModalOpen: boolean;
  minimizeBanner: () => void;
  restoreBanner: () => void;
  closeBannerPermanently: () => void;
  openModal: () => void;
  closeModal: () => void;
  playAudio: (type?: "hover" | "click") => void;
}

const ESummitContext = createContext<ESummitContextType>({
  isBannerVisible: true,
  isMinimized: false,
  isModalOpen: false,
  minimizeBanner: () => {},
  restoreBanner: () => {},
  closeBannerPermanently: () => {},
  openModal: () => {},
  closeModal: () => {},
  playAudio: () => {},
});

const STORAGE_KEY_MINIMIZED = "ecell_esummit_banner_minimized";

export const ESummitProvider = ({ children }: { children: React.ReactNode }) => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Restore user minimized preference from sessionStorage on load
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY_MINIMIZED);
      if (stored === "true") {
        setIsMinimized(true);
        setIsBannerVisible(false);
      }
    } catch {
      // sessionStorage unavailable (e.g. incognito restrictions)
    }
  }, []);

  const playAudio = (type: "hover" | "click" = "click") => {
    try {
      const soundFile = type === "hover" ? "/audio/hover.wav" : "/audio/secondary-hover.wav";
      const audio = new Audio(soundFile);
      audio.volume = 0.35;
      audio.play().catch(() => {
        // Safe catch for browsers blocking autoplay
      });
    } catch {
      // Audio not supported or failed
    }
  };

  const minimizeBanner = () => {
    playAudio("click");
    setIsBannerVisible(false);
    setIsMinimized(true);
    try {
      sessionStorage.setItem(STORAGE_KEY_MINIMIZED, "true");
    } catch {}
  };

  const restoreBanner = () => {
    playAudio("click");
    setIsBannerVisible(true);
    setIsMinimized(false);
    try {
      sessionStorage.removeItem(STORAGE_KEY_MINIMIZED);
    } catch {}
  };

  const closeBannerPermanently = () => {
    playAudio("click");
    setIsBannerVisible(false);
    setIsMinimized(false);
    try {
      sessionStorage.setItem(STORAGE_KEY_MINIMIZED, "dismissed");
    } catch {}
  };

  const openModal = () => {
    playAudio("click");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    playAudio("click");
    setIsModalOpen(false);
  };

  return (
    <ESummitContext.Provider
      value={{
        isBannerVisible,
        isMinimized,
        isModalOpen,
        minimizeBanner,
        restoreBanner,
        closeBannerPermanently,
        openModal,
        closeModal,
        playAudio,
      }}
    >
      {children}
    </ESummitContext.Provider>
  );
};

export const useESummit = () => useContext(ESummitContext);

