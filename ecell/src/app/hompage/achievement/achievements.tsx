import React from 'react'
//import achievements from "@/constants/achievements";
const Achievements = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 py-20 w-full h-full md:h-screen achievement-section-1">
                <h1 className="text-3xl md:text-6xl lg:text-8xl font-clash font-semibold header bg-clip-text text-transparent">Our Achievements</h1>
                <p className="text-[#94A3B8] text-[10px] md:text-sm lg:text-lg font-inter para">Celebrating milestones that define our entrepreneurial journey</p>
            </section>
            <section className="py-20 w-full h-screen achievement-section-2 bg-[url('/images/achievements/bg.png')] bg-cover bg-center bg-no-repeat">
                
            </section>
            <section className="py-20 w-full h-full achievement-section-3 font-gugi bg-black text-white text-center text-md md:text-lg lg:text-xl achievement-section-3">
                Driven By Efforts . Fueled By Ambition . Defined By Impact
            </section>
        </>
    )
}

export default Achievements
