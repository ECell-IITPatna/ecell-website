import React from 'react'

const StandoutCards = ({heading, description,css}:{heading:string,description:string,css:string}) => {
  return (
    <div className={`bg-gray-800 flex flex-col justify-center gap-4 p-2 m-1 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 standout-cards ${css}`}>
      <h1 className="font-inter font-bold text-2xl w-full h-full text-white">{heading}</h1>
      <div className="w-[50%] h-1 bg-blue-500 rounded-full"/>
      <p className="text-gray-600 font-mono text-lg w-full h-full">{description}</p>
    </div>
  )
}

export default StandoutCards
