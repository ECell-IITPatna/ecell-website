import Image from "next/image";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";


export default function AluminiCard() {
    return (
        <>
            {/* Mobile Version */}
            <div className="flex items-center justify-center min-h-screen bg-black p-10 lg:hidden">

                <div className="group relative h-[500px] w-[360px] overflow-hidden rounded-[32px] bg-neutral-900 shadow-[0_25px_80px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2">

                    {/* Alumini Image */}
                    <Image
                        src="/images/alumini/alumini.png"
                        alt="Alumini"
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
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

                    {/* Social Icons */}
                    <div
                        className="
          absolute
          right-5
          top-5
          z-20
          flex
          translate-y-5
          flex-col
          gap-3
          opacity-0
          transition-all
          duration-500
          group-hover:translate-y-0
          group-hover:opacity-100
        "
                    >
                        <a
                            href="#"
                            className="rounded-full bg-black p-3 text-white transition hover:scale-110 hover:bg-violet-600"
                        >
                            <FaLinkedinIn size={18} />
                        </a>

                        <a
                            href="#"
                            className="rounded-full bg-black p-3 text-white transition hover:scale-110 hover:bg-violet-600"
                        >
                            <Mail size={18} />
                        </a>
                    </div>

                    {/* Circular Alumini Text */}
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
                                    ALUMINI • ALUMINI • ALUMINI •
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    {/* Alumini Info */}
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
                        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-violet-300">
                            Alumini
                        </p>

                        <h2 className="text-5xl font-black leading-none text-white">
                            John Doe
                        </h2>

                        <p className="mt-2 text-lg text-neutral-300">
                            CEO • OpenAI
                        </p>
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
            {/* Desktop Version */}
            <div className="hidden lg:flex justify-center items-center bg-black py-10">
                <div
                    className="
        group
        relative
        flex
        w-[980px]
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-[#111111]
        shadow-[0_40px_100px_rgba(0,0,0,0.55)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#C8A04D]/40
      "
                >
                    {/* Decorative Glow */}
                    <div className="absolute right-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-[#C8A04D]/10 blur-[140px]" />

                    {/* LEFT IMAGE */}
                    <div className="relative w-[42%] overflow-hidden">
                        <Image
                            src="/images/alumini/alumini.png"
                            alt="Speaker"
                            width={500}
                            height={700}
                            className="
            h-full
            w-full
            object-cover
            grayscale
            transition-transform
            duration-700
            group-hover:scale-105
          "
                        />

                        {/* Image Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative flex flex-1 flex-col justify-between p-12">
                        {/* Glass Panel */}
                        <div className="absolute inset-6 rounded-[28px] border border-white/5 bg-white/[0.03] backdrop-blur-xl" />

                        <div className="relative z-10">
                            <p className="mb-4 tracking-[0.45em] text-[#C8A04D] uppercase text-xs">
                                Alumni
                            </p>

                            <h1 className="text-6xl font-black text-white leading-none">
                                John Doe
                            </h1>

                            <p className="mt-4 text-xl text-neutral-300">
                                CEO • OpenAI
                            </p>

                            <div className="my-8 h-px w-24 bg-[#C8A04D]" />

                            <h3 className="mb-4 text-2xl font-semibold text-white">
                                About
                            </h3>

                            <p className="max-w-xl text-[16px] leading-8 text-neutral-400">
                                John Doe is an alumnus of IIT Patna and currently leads one of the
                                world's most innovative AI organizations. His work spans artificial
                                intelligence, large language models, and product innovation,
                                inspiring students to build technology that creates meaningful
                                impact.
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="relative z-10 mt-12 flex items-center justify-between">
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                text-white
                transition-all
                duration-300
                hover:border-[#C8A04D]
                hover:bg-[#C8A04D]
                hover:text-black
              "
                                >
                                    <FaLinkedinIn />
                                    LinkedIn
                                </a>

                                <a
                                    href="#"
                                    className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                text-white
                transition-all
                duration-300
                hover:border-[#C8A04D]
                hover:bg-[#C8A04D]
                hover:text-black
              "
                                >
                                    <HiOutlineMail />
                                    Mail
                                </a>
                            </div>

                            <div className="text-right">
                                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                                    E-Summit 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}