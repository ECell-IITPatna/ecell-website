"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Preloader from "./Preloader";

interface PreloaderContextType {
  isLoading: boolean;
}

const PreloaderContext = createContext<PreloaderContextType>({
  isLoading: true,
});

export const PreloaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Set overflow hidden on body when loading to lock scrolling
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <PreloaderContext.Provider value={{ isLoading }}>
      <Preloader onComplete={() => setIsLoading(false)} />
      {/* 
        Keep children in DOM so assets (videos/images) pre-load, 
        but hide visually and disable interactions while loading.
      */}
      <div 
        className={
          isLoading 
            ? "opacity-0 invisible h-screen overflow-hidden pointer-events-none" 
            : "opacity-100 visible transition-all duration-1000 ease-out"
        }
      >
        {children}
      </div>
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => useContext(PreloaderContext);
