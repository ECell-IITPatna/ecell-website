"use client";

import { useEffect, useRef } from "react";

/**
 * CometBackground — canvas comet layer for the sponsors page.
 *
 * Pure port of the legacy page comets (`LegacyDeck`): periodic diagonal
 * comets with a fading tail gradient. No starfield here — the starfield
 * comes from the endeavours `NebulaCanvas`, so this layer only adds comets.
 */
export function CometBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let width = 0;
    let height = 0;
    let animationFrameId = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const comets: Array<{ x: number; y: number; dx: number; dy: number }> = [];
    let spawnTimer = 60;

    const triggerComet = () => {
      const speed = Math.random() * 1 + 1.5;
      comets.push({
        x: Math.random() * width,
        y: -100,
        dx: speed * 3,
        dy: speed * 1.5,
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Spawn Interval Tick Controller
      spawnTimer--;
      if (spawnTimer <= 0) {
        triggerComet();
        spawnTimer = Math.floor(Math.random() * 80) + 60;
      }

      // Render loop over active comets
      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        c.x += c.dx;
        c.y += c.dy;

        const tailLength = 20.0;
        const gradient = ctx.createLinearGradient(
          c.x,
          c.y,
          c.x - c.dx * tailLength,
          c.y - c.dy * tailLength
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 1.0)");
        gradient.addColorStop(1, "rgba(14, 165, 233, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.0;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x - c.dx * tailLength, c.y - c.dy * tailLength);
        ctx.stroke();

        if (c.x > width + 400 || c.y > height + 400) {
          comets.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1]"
    />
  );
}
