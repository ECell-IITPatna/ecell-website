"use client";

import React, { useEffect, useRef, useMemo } from "react";
import { generateStars } from "./data";
import { useAnimationFrame } from "./hooks";

export function NebulaCanvas({ mouse }: { mouse: { x: number; y: number } }) {
  const stars = useMemo(() => generateStars(160), []);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);
  const mouseRef = useRef(mouse);
  mouseRef.current = mouse;

  useAnimationFrame((t) => {
    timeRef.current = t * 0.0005;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const time = timeRef.current;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    // Draw orbiting star particles in 3D layers
    stars.forEach((star) => {
      const orbitX = Math.cos(time * star.orbitSpeed + star.orbitPhase) * star.orbitRadius * W;
      const orbitY = Math.sin(time * star.orbitSpeed * 0.7 + star.orbitPhase) * star.orbitRadius * H;

      // 3D tilt based on mouse
      const tiltX = (mx - 0.5) * star.z * 80;
      const tiltY = (my - 0.5) * star.z * 80;

      const px = (star.x / 100) * W + orbitX - tiltX;
      const py = (star.y / 100) * H + orbitY - tiltY;

      // Depth-based size & brightness
      const depthScale = 0.4 + star.z * 0.6;
      const twinkle = 0.5 + 0.5 * Math.sin(time * star.twinkleDuration * 3 + star.twinkleDelay);
      const finalOpacity = star.opacity * (0.6 + 0.4 * twinkle) * depthScale;
      const finalSize = star.size * depthScale;

      if (star.isBright) {
        // Cross-shaped lens flare for bright stars
        const flareSize = finalSize * 3;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, flareSize);
        grad.addColorStop(0, `rgba(200,230,255,${finalOpacity})`);
        grad.addColorStop(0.3, `rgba(150,200,255,${finalOpacity * 0.4})`);
        grad.addColorStop(1, `rgba(100,160,255,0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, flareSize, 0, Math.PI * 2);
        ctx.fill();

        // Cross lines
        ctx.strokeStyle = `rgba(200,230,255,${finalOpacity * 0.25})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(px - flareSize * 1.5, py);
        ctx.lineTo(px + flareSize * 1.5, py);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(px, py - flareSize * 1.5);
        ctx.lineTo(px, py + flareSize * 1.5);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.2, finalSize), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210,230,255,${finalOpacity})`;
        ctx.fill();
      }
    });

    // Nebula wisps — soft radial blobs that drift
    const nebulaCenters = [
      { x: 0.2, y: 0.3, r: 0.18, color: "40,80,160", speed: 0.12 },
      { x: 0.75, y: 0.2, r: 0.14, color: "80,30,120", speed: 0.09 },
      { x: 0.5, y: 0.7, r: 0.16, color: "20,60,130", speed: 0.07 },
      { x: 0.85, y: 0.6, r: 0.12, color: "60,20,100", speed: 0.11 },
    ];

    nebulaCenters.forEach((n) => {
      const nx = (n.x + Math.sin(time * n.speed) * 0.04 + (mx - 0.5) * -0.03) * W;
      const ny = (n.y + Math.cos(time * n.speed * 0.8) * 0.04 + (my - 0.5) * -0.03) * H;
      const radius = n.r * Math.min(W, H);
      const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, radius);
      grad.addColorStop(0, `rgba(${n.color},0.06)`);
      grad.addColorStop(0.5, `rgba(${n.color},0.03)`);
      grad.addColorStop(1, `rgba(${n.color},0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(nx, ny, radius, 0, Math.PI * 2);
      ctx.fill();
    });
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
