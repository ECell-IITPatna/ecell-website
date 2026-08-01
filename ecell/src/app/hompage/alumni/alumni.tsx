import React from 'react'
import Link from 'next/link';
import AlumniCard from '@/components/ui/AlumniCard';
import { alumniData } from '@/constants/alumini';
import Button from '@/components/ui/Button';
const Alumni = () => {
  return (
    <div id="alumni">
      <section className="flex flex-col items-center justify-center h-screen w-full py-10 main-section bg-[url('/images/alumni/bg.png')] bg-cover bg-right bg-no-repeat overflow-hidden">
        <h1 className="text-5xl lg:text-7xl font-clash font-bold mb-10 text-white text-center">Our Alumni</h1>
        {/*Alumni Cards Container*/}
        <div className="h-[480px] sm:h-[500px] w-full max-w-[90vw] lg:max-w-[1000px] lg:min-w-[900px] relative alumni-cards-container flex items-center justify-center">
          {alumniData.map((alumni) => (
            <AlumniCard key={alumni.id} alumni={alumni} className="flex justify-center items-center alumni-cards invisible absolute" />
          ))}
        </div>
      </section>
      <div className="flex flex-col items-center justify-center py-10">
        <Link href="/alumni-registration">
          <Button 
            content="Join As Alumni" 
            css="bg-[white] text-black font-clash text-lg mt-10 hover:bg-opacity-90 transition-all cursor-pointer" 
          />
        </Link>
      </div>
    </div>
  )
}

export default Alumni
