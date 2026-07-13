"use client";
import React from 'react'
import CornerBox from '@/components/ui/CornerBox';
import { achievements } from "@/constants/achievements";
import { useContext } from 'react';
import { UserContext, UserContextType } from './achievements_animation';

const AchievementDesktopContent = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("UserContext not found");
    }
    const { achievementDescription, achievementQuote, achievementQuoteAuthor } = context;
    
    return (
        <>
            <section className="relative grid grid-cols-2 px-10 w-full h-fit achievement-section-2 bg-[url('/images/achievements/bg.png')] bg-cover bg-center bg-no-repeat max-md:hidden">
                <div className="flex flex-col justify-center items-center gap-4 w-full h-fit achievement-title-container">
                    {achievements.map((achievement) => (
                        <h1 className={`text-6xl text-white h-screen w-full flex justify-center items-center achievement-title-${achievement.id}`} key={achievement.id}>
                            {achievement.title}
                        </h1>
                    ))}
                </div>
                <div className="flex flex-col justify-center items-center gap-4 w-full h-screen achievement-content-container">
                    <div className="flex flex-col gap-10 justify-center items-center md:px-10 lg:px-20 h-full w-full achievement-content">
                        <CornerBox className="flex flex-col justify-center w-[90%] md:w-full max-w-[420px] min-h-[170px] px-8 py-8 achievement-description">
                            <h2 className="text-lg md:text-3xl text-white" ref={achievementDescription}>
                                
                            </h2>
                        </CornerBox>
                        <CornerBox className="flex flex-col justify-center w-full max-w-[420px] min-h-[170px] px-8 py-8 max-md:hidden achievement-quote">
                            <p className="text-2xl leading-8 text-slate-300 " ref={achievementQuote}>
                              
                            </p>

                            <p className="mt-6 text-right text-white font-bold italic" ref={achievementQuoteAuthor}>
                                
                            </p>
                        </CornerBox>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AchievementDesktopContent
