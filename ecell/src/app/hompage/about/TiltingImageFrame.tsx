'use client';

import Image from 'next/image';
import React, { useCallback, useRef, useState } from 'react';

type TiltingImageFrameProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  imageClassName: string;
  frameClassName: string;
};

export default function TiltingImageFrame({
  src,
  alt,
  sizes,
  priority = false,
  imageClassName,
  frameClassName,
}: TiltingImageFrameProps) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const frameRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;

    setMousePos({
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height,
    });
  }, []);

  const rotX = hovered ? (mousePos.y - 0.5) * -10 : 0;
  const rotY = hovered ? (mousePos.x - 0.5) * 10 : 0;

  return (
    <div className="w-full" style={{ perspective: 1000, perspectiveOrigin: '50% 50%' }}>
      <div
        ref={frameRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setMousePos({ x: 0.5, y: 0.5 });
        }}
        onMouseMove={handleMouseMove}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transform: hovered
            ? `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(14px)`
            : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transition: hovered
            ? 'box-shadow 0.3s ease, border-color 0.3s ease, transform 0.08s ease'
            : 'transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease, border-color 0.3s ease',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
        className={frameClassName}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            zIndex: 0,
            background: hovered
              ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(100,180,255,0.08) 0%, transparent 60%)`
              : 'none',
            pointerEvents: 'none',
            transition: 'opacity 0.3s',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: -1,
            borderRadius: 'inherit',
            zIndex: 0,
            background: hovered
              ? `conic-gradient(from ${mousePos.x * 360}deg at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(60,140,255,0.28), rgba(120,60,220,0.18), rgba(40,120,200,0.28), transparent 60%)`
              : 'none',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: 1,
            pointerEvents: 'none',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        />
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ zIndex: 1 }}
          className={imageClassName}
        />
      </div>
    </div>
  );
}