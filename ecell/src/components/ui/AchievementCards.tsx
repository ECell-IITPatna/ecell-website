import React from 'react'
import CornerBox from './CornerBox';
type AchievementCardsProps = {
  achievement: {
    title: string;
    description: string,
    quote: {
      text: string,
      author: string,
    }
  },
  className?: string,
};
const AchievementCards = ({ achievement, className = "" }: AchievementCardsProps) => {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col justify-center items-center w-full h-fit">
        <h1 className={`text-4xl md:text-6xl text-white w-full py-5`}>
          {achievement.title}
        </h1>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center h-full w-full py-5">
        <CornerBox className="flex flex-col max-sm:text-3xl justify-center w-full sm:min-h-[200px] px-8 py-8">
          <h2 className="text-2xl md:text-3xl text-white" >
            {achievement.description}
          </h2>
        </CornerBox>
        <CornerBox className="flex flex-col justify-center w-full sm:min-h-[200px] px-8 py-8">
          <p className="text-lg md:text-2xl leading-8 text-slate-300 " >
            {achievement.quote.text}
          </p>

          <p className="max-sm:text-sm mt-6 text-right text-white font-bold italic">
            ~ {achievement.quote.author}
          </p>
        </CornerBox>
      </div>
    </div>
  )
}

export default AchievementCards
