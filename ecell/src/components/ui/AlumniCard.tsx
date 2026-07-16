import Image from "next/image";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

type alumni_type = {
    id: number,
    name: string,
    designation: string,
    company: string,
    tag: string,
    image: string,
    linkedin: string,
    email: string,
    about: string,
}
export default function AlumniCard({ alumni, className=""}: { alumni: alumni_type, className?: string }) {
    return (
        <>
            {/* Mobile Version */}
            <div className={`lg:hidden ${className}`}>
                <div className="relative h-[500px] w-[360px] overflow-hidden rounded-[32px] bg-neutral-900 shadow-[0_25px_80px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2">

                    {/* Alumni Image */}
                    <Image
                        src={alumni.image}
                        alt={alumni.name}
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
                            href={alumni.linkedin}
                            className="rounded-full bg-black p-3 text-white transition hover:scale-110 hover:bg-violet-600"
                        >
                            <FaLinkedinIn size={18} />
                        </a>

                        <a
                            href={alumni.email}
                            className="rounded-full bg-black p-3 text-white transition hover:scale-110 hover:bg-violet-600"
                        >
                            <Mail size={18} />
                        </a>
                    </div>

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
                                    {alumni.tag} • {alumni.tag} • {alumni.tag}
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
                        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-violet-300">
                            {alumni.tag}
                        </p>

                        <h2 className="text-5xl font-black leading-none text-white">
                            {alumni.name}
                        </h2>

                        <p className="mt-2 text-lg text-neutral-300">
                            {alumni.designation} • {alumni.company}
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
            <div className={`${className} max-lg:hidden`}>
                <div className={`relative flex h-[500px] min-w-[900px] max-w-[1000px] w-[70%] overflow-hidden rounded-[36px] border border-white/10 bg-[#0A0E14] shadow-[0_40px_100px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-2 hover:border-[#3E7BFA]/40 hover:shadow-[0_50px_120px_rgba(62,123,250,0.15)] `}>
                    {/* Glow */}
                    <div className="absolute right-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-[#3E7BFA]/10 blur-[140px] transition-opacity duration-500 group-hover:opacity-70" />

                    {/* Image */}
                    <div className="relative w-[42%] overflow-hidden">
                        <Image
                            src={alumni.image}
                            alt={alumni.name}
                            fill
                            className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 gap-2 flex-col justify-between p-10">
                        
                        <div className="flex flex-col gap-2">
                            <p className="tracking-[0.45em] text-[#5B9CFF] uppercase text-xs">{alumni.tag}</p>
                            <h1 className="lg:3xl xl:text-4xl font-black text-white leading-none">{alumni.name}</h1>
                            <p className="lg:text-md xl:text-lg text-neutral-300">
                                {alumni.designation} • {alumni.company}
                            </p>
                            <div className="h-px w-24 bg-[#3E7BFA]" />
                            <h3 className="text-2xl font-semibold text-white">About</h3>
                            <p className="max-w-xl text-md leading-8 text-neutral-400">{alumni.about}</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex gap-4">
                                <a
                                    href={alumni.linkedin}
                                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white transition-all duration-300 hover:border-[#3E7BFA] hover:bg-[#3E7BFA] hover:text-black hover:scale-105"
                                >
                                    <FaLinkedinIn />
                                    LinkedIn
                                </a>
                                <a
                                    href={`mailto:${alumni.email}`}
                                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white transition-all duration-300 hover:border-[#3E7BFA] hover:bg-[#3E7BFA] hover:text-black hover:scale-105"
                                >
                                    <HiOutlineMail />
                                    Mail
                                </a>
                            </div>
                            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">E-Cell 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}