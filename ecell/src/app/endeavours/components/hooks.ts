import { useState, useEffect, useRef } from "react";

export function useMouse() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return mouse;
}

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function useAnimationFrame(callback: (time: number) => void, running = true) {
  const cbRef = useRef(callback);
  cbRef.current = callback;
  useEffect(() => {
    if (!running) return;
    let id: number;
    const tick = (t: number) => { cbRef.current(t); id = requestAnimationFrame(tick); };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [running]);
}
