import React from 'react'
import AlumniCard from '@/components/ui/AlumniCard';
import { alumniData } from '@/constants/alumini';
const Alumni = () => {
  return (
    <section className="flex flex-col items-center justify-center max-lg:w-screen max-lg:h-screen py-10 main-section bg-[url('/images/alumni/bg.png')] bg-cover bg-right bg-no-repeat">
        {/*Alumni Cards Desktop*/}
        <div className="h-[500px] max-w-screen lg:max-w-[1000px] max-lg:w-[360px] lg:min-w-[900px] relative alumni-cards-container flex flex-col items-center justify-center">
          <h1 className="text-6xl font-clash font-bold">Our Alumni</h1>
          {alumniData.map((alumni) => (
            <AlumniCard key={alumni.id} alumni={alumni} className="flex justify-center items-center alumni-cards invisible absolute inset-0" />
          ))}
        </div>
    </section>
  )
}

export default Alumni
