import React from 'react'
import Image from 'next/image'
const SpeakerMobileCard = ({ className , image , name }: { className?: string , image: string , name: string }) => {
  return (
    <div className={`lg:hidden ${className}`}>
                <div className="relative h-[50vh] max-md:w-[70vw] w-[40vw] overflow-hidden rounded-[32px] bg-neutral-900 shadow-[0_25px_80px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2">

                    {/* Speaker Image */}
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Purple Glow */}
                    <div
                        className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-violet-700/70
                        via-violet-500/10
                        to-transparent
                        transition-all
                        duration-500
                        group-hover:from-violet-500/80
                      "
                    />

                    {/* Bottom Dark Gradient */}
                    <div className="absolute bottom-0 left-0 h-52 w-full bg-gradient-to-t from-black via-black/70 to-transparent" />

                    {/* Hover Frosted Glass */}
                    <div
                        className="
                        absolute
                        inset-0
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:opacity-100
                      "
                    >
                        <div className="absolute inset-0 bg-white/20 backdrop-blur-md" />
                    </div>

                    {/* Animated Border */}
                    <div
                        className="
                        absolute
                        inset-0
                        rounded-[32px]
                        border
                        border-white/10
                        transition
                        duration-500
                        group-hover:border-violet-400/60
                      "
                    />


                    {/* Circular Alumni Text */}
                    <div
                        className="
                        absolute
                        -left-12
                        -top-12
                        h-36
                        w-36
                        rounded-full
                        border
                        border-white/20
                        opacity-0
                        transition-all
                        duration-700
                        group-hover:opacity-100
                        group-hover:rotate-180
                      "
                    >
                        <svg
                            viewBox="0 0 100 100"
                            className="h-full w-full"
                        >
                            <defs>
                                <path
                                    id="circle"
                                    d="
                                    M50,50
                                    m-35,0
                                    a35,35 0 1,1 70,0
                                    a35,35 0 1,1 -70,0
                                  "
                                />
                            </defs>

                            <text
                                fill="white"
                                fontSize="7"
                                letterSpacing="2"
                            >
                                <textPath href="#circle">
                                    Speaker • Speaker • Speaker
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    {/* Alumni Info */}
                    <div
                        className="
                        absolute
                        bottom-8
                        left-8
                        z-20
                        transition-all
                        duration-500
                        group-hover:-translate-y-3
                      "
                    >
                        <p className="mb-2 text-xs md:text-sm uppercase tracking-[0.3em] text-violet-300">
                            Speaker
                        </p>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-none text-white">
                            {name}
                        </h2>

                    </div>

                    {/* Decorative Glow */}
                    <div
                        className="
                        absolute
                        -bottom-24
                        left-1/2
                        h-44
                        w-44
                        -translate-x-1/2
                        rounded-full
                        bg-violet-500/40
                        blur-[100px]
                        transition
                        duration-700
                        group-hover:scale-125
                      "
                    />
                </div>
    </div>
  )
}

export default SpeakerMobileCard
