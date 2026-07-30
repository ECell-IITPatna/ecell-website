'use client'
import React from 'react'

const Button = ({ content, css }: { content: string; css: string }) => {
  const [buttonContent, setButtonContent] = React.useState(content);
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
    <div className="p-[1px] rounded-sm">
      <button className={`py-3 px-7 tracking-[0.2em] rounded-sm ${css}`}
        style={{
          clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 50%, 100% 100%, 20px 100%, 0 50%)"
        }}
        onClick={() => {
          onClickPlayAudio();
        }}
        onMouseEnter={() => {
          const letters = 'ABCDEFGHIJKL3456@#$%^&*';
          const originalText = content;
          const substring = originalText.substring(1);
          let iterations = 0;
          const interval = setInterval(() => {
            setButtonContent(originalText[0] + substring.split('').map((_, index) => {
              if (index < iterations) {
                return substring[index];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            }).join(''));
            if (iterations >= substring.length) {
              clearInterval(interval);
              setButtonContent(originalText);
            }
            iterations += 1 / 3;
          }, 30);
          onHoverPlayAudio();
        }}
      >
        {buttonContent}
      </button>
    </div>
  )
}

export default Button
