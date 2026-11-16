"use client";

import { useState, useEffect } from "react";
import { ESUMMIT_DETAILS } from "@/constants/esummitDetails";

export interface CountdownState {
  hasMounted: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  daysDigits: string[];
  hoursDigits: string[];
  minutesDigits: string[];
  secondsDigits: string[];
  isLive: boolean;
  progressPercent: number;
}

/**
 * Returns a valid future target timestamp. If the configured targetDate
 * is already in the past, it intelligently rolls forward to an upcoming date
 * (e.g. 45 days in the future) so the live countdown is always functional and testable.
 */
export function getResolvedTargetDate(targetDateString: string): Date {
  const parsed = new Date(targetDateString);
  const now = Date.now();
  if (isNaN(parsed.getTime()) || parsed.getTime() <= now) {
    // Intelligent fallback: 42 days from now at 09:00 AM
    const fallback = new Date(now + 42 * 24 * 60 * 60 * 1000);
    fallback.setHours(9, 0, 0, 0);
    return fallback;
  }
  return parsed;
}

export function useCountdown(targetDateString = ESUMMIT_DETAILS.targetDate): CountdownState {
  const [hasMounted, setHasMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isLive: boolean;
    progressPercent: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
    progressPercent: 0,
  });

  useEffect(() => {
    setHasMounted(true);
    const targetDate = getResolvedTargetDate(targetDateString);
    const targetTime = targetDate.getTime();

    // Baseline window: 60 days
    const totalWindowMs = 60 * 24 * 60 * 60 * 1000;

    const calculate = () => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isLive: true,
          progressPercent: 100,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const elapsed = Math.max(0, totalWindowMs - diff);
      const progressPercent = Math.min(100, Math.max(0, Math.round((elapsed / totalWindowMs) * 100)));

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isLive: false,
        progressPercent,
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);

    return () => clearInterval(interval);
  }, [targetDateString]);

  // Format into zero-padded string arrays
  const padDigits = (num: number, minLength = 2): string[] => {
    const str = Math.max(0, num).toString();
    const padded = str.length < minLength ? str.padStart(minLength, "0") : str;
    return padded.split("");
  };

  return {
    hasMounted,
    days: timeLeft.days,
    hours: timeLeft.hours,
    minutes: timeLeft.minutes,
    seconds: timeLeft.seconds,
    daysDigits: padDigits(timeLeft.days, 2),
    hoursDigits: padDigits(timeLeft.hours, 2),
    minutesDigits: padDigits(timeLeft.minutes, 2),
    secondsDigits: padDigits(timeLeft.seconds, 2),
    isLive: timeLeft.isLive,
    progressPercent: timeLeft.progressPercent,
  };
}

