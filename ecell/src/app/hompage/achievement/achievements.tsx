import React from 'react'
import AchievementCards from '@/components/ui/AchievementCards';
import AchievementDesktopContent from './achievement_desktop_content';
const Achievements = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 py-20 w-full h-full md:h-screen achievement-section-1">
                <h1 className="text-[10vw] md:text-6xl lg:text-8xl font-clash font-semibold header bg-clip-text text-transparent">Our Achievements</h1>
                <p className="text-[#94A3B8] text-[3vw] md:text-sm lg:text-lg font-inter para">Celebrating milestones that define our entrepreneurial journey</p>
            </section>

            {/*Desktop View*/}
            <AchievementDesktopContent/>

            {/*Mobile View*/}
            <section className="hidden max-md:block">

            </section>

            <section className="py-20 w-full h-full achievement-section-3 font-gugi bg-black text-white text-center text-md md:text-lg lg:text-xl achievement-section-3">
                Driven By Efforts . Fueled By Ambition . Defined By Impact
            </section>
        </>
    )
}

export default Achievements
