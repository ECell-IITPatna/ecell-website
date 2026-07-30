'use client'
import React from 'react'

const ButtonDual = ({ content1, content2, css1, css2 }: { content1: string; content2: string; css1: string; css2: string }) => {

  const [buttonContent1, setButtonContent1] = React.useState(content1);
  const [buttonContent2, setButtonContent2] = React.useState(content2);
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
    <div className="flex">
      <button className={`py-3 px-5 tracking-[0.2em] rounded-tl-sm ${css1}`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 50%)"
        }}
        onClick={() => {
          onClickPlayAudio()
        }}
        onMouseEnter={() => {
          const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456@#$%^&*';
          const originalText = content1;
          const substring = originalText.substring(1);
          let iterations = 0;
          const interval = setInterval(() => {
            setButtonContent1(originalText[0] + substring.split('').map((_, index) => {
              if (index < iterations) {
                return substring[index];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            }).join(''));
            if (iterations >= substring.length) {
              clearInterval(interval);
              setButtonContent1(originalText);
            }
            iterations += 1 / 3;
          }, 30);
          onHoverPlayAudio();
        }}
      >
        {buttonContent1}
      </button>
      <button className={`py-3 px-5 tracking-[0.2em] rounded-br-sm ${css2}`}
        style={{
          clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 50%, 100% 100%,0 100%)"
        }}
        onClick={() => {
          onClickPlayAudio()
        }}
        onMouseEnter={() => {
          const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456@#$%^&*';
          const originalText = content2;
          const substring = originalText.substring(1);
          let iterations = 0;
          const interval = setInterval(() => {
            setButtonContent2(originalText[0] + substring.split('').map((_, index) => {
              if (index < iterations) {
                return substring[index];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            }).join(''));
            if (iterations >= substring.length) {
              clearInterval(interval);
              setButtonContent2(originalText);
            }
            iterations += 1 / 3;
          }, 30);
          onHoverPlayAudio();
        }}
      >
        {buttonContent2}
      </button>
    </div>
  )
}

export default ButtonDual
