'use client'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  css: string;
}

const Button = ({ content, css, onClick, disabled, type, ...rest }: ButtonProps) => {
  // Store scramble text in state when hovering; null means show original 'content' prop
  const [scrambleContent, setScrambleContent] = React.useState<string | null>(null);

  const onHoverPlayAudio = () => {
    // const hover_audio = new Audio("/audio/hover.wav");
    // hover_audio.preload = "auto";
    // hover_audio.currentTime = 0;
    // hover_audio.volume = 0.5;
    // hover_audio.play().catch((error) => {
    //   console.error("Error playing hover audio:", error);
    // });
  }

  const onClickPlayAudio = () => {
    const click_audio = new Audio("/audio/click.wav");
    click_audio.preload = "auto";
    click_audio.currentTime = 0;
    click_audio.volume = 0.5;
    click_audio.play().catch((error) => {
      console.error("Error playing click audio:", error);
    });
  }

  return (
    <button
      type={type || "button"}
      disabled={disabled}
      {...rest}
      className={`py-3 px-7 tracking-[0.2em] rounded-sm disabled:opacity-50 disabled:cursor-not-allowed ${css}`}
      style={{
        clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 50%, 100% 100%, 20px 100%, 0 50%)"
      }}
      onClick={(e) => {
        if (disabled) return;
        onClickPlayAudio();
        if (onClick) onClick(e);
      }}
      onMouseEnter={() => {
        if (disabled) return;
        const letters = 'ABCDEFGHIJKL3456@#$%^&*';
        const originalText = content;
        const substring = originalText.substring(1);
        let iterations = 0;
        const interval = setInterval(() => {
          setScrambleContent(originalText[0] + substring.split('').map((_, index) => {
            if (index < iterations) {
              return substring[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          }).join(''));
          if (iterations >= substring.length) {
            clearInterval(interval);
            setScrambleContent(null); // Reset back to original content prop
          }
          iterations += 1 / 3;
        }, 30);
        onHoverPlayAudio();
      }}
    >
      {scrambleContent ?? content}
    </button>
  )
}

export default Button