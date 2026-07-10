'use client';
import Link from "next/link";
import Image from "next/image";
import { navbarDetails, sidebarDetails } from "@/constants/navbarDetails";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Menu, X } from "lucide-react";
export function Navbar() {
    const logo1 = useRef<HTMLImageElement>(null);
    const logo2 = useRef<HTMLImageElement>(null);
    const timelineref = useRef<gsap.core.Timeline | null>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const timelineref2 = useRef<gsap.core.Timeline | null>(null);
    useGSAP(() => {
        const tl = gsap.timeline({ paused: true });
        const tl2 = gsap.timeline({ paused: true });
        tl.to(".navbar", {
            yPercent: -200,
            duration: 0.5,
            ease: "power2.inOut",

        })
        tl.to(logo1.current, {
            top: "20px",
            duration: 1,
            ease: "back.inOut",
        })
        tl.to(logo1.current, {
            rotation: 360,
            duration: 0.7,
        });

        tl2.to(sidebarRef.current, {
            right: 0,
            duration: 1,
            ease: "power3.inOut",
        });

        timelineref.current = tl;
        timelineref2.current = tl2;
    }, []);
    return (
        <div>
            <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="logo1 fixed top-[-150%] left-5 z-50 cursor-pointer"
                ref={logo1}
                onClick={() => {
                    if (timelineref.current?.progress() === 1) {
                        timelineref.current?.reverse();
                    } else {
                        timelineref.current?.play();
                    }
                }}

            />

            {/*Desktop Navigation*/}
            <nav className="navbar max-md:hidden z-50 fixed top-5 left-1/2 transform -translate-x-1/2 lg:w-[90%] w-[95%] flex items-center justify-around px-6 bg-[rgb(0,0,0)] backdrop-blur-md border border-white/10 rounded-xl">
                {
                    navbarDetails.map((item, index) => {
                        if (item.name === "Logo") {
                            return (
                                <Image
                                    src="/images/logo.png"
                                    alt="Logo"
                                    width={75}
                                    height={75}
                                    key={index}
                                    className="logo2"
                                    ref={logo2}
                                    onClick={() => {
                                        if (timelineref.current?.progress() === 1) {
                                            timelineref.current?.reverse();
                                        } else {
                                            timelineref.current?.play();
                                        }
                                    }}

                                />
                            );
                        }
                        return (
                            <Link key={index} href={item.href} className="text-white md:text-md font-bold font-clash links">
                                {item.name}
                            </Link>
                        );
                    })
                }
            </nav>

            {/* Mobile Navigation */}
            <nav className="navbar max-md:flex z-50 fixed top-5 left-1/2 transform -translate-x-1/2 lg:w-[90%] w-[95%] items-center justify-between px-6 bg-[rgb(0,0,0)] backdrop-blur-md border border-white/10 rounded-xl hidden">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    className="logo2"
                    ref={logo2}
                    onClick={() => {
                        if (timelineref.current?.progress() === 1) {
                            timelineref.current?.reverse();
                        } else {
                            timelineref.current?.play();
                        }
                    }}
                />
                <button><Menu onClick={() => {
                    if (timelineref2.current?.progress() === 0) {
                        timelineref2.current?.play();
                    }
                }} /></button>
            </nav>

            {/* Sidebar for Mobile Navigation */}
            <div className="z-50 max-md:flex flex-col gap-4 fixed h-screen top-0 -right-full w-screen bg-black p-4 hidden" ref={sidebarRef}>
                <div className="flex justify-end p-2">
                    <X className=" border border-white-40 rounded-full"
                        size={30}
                        onClick={() => {
                            if (timelineref2.current?.progress() === 1) {
                                timelineref2.current?.reverse();
                            }
                        }}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    {sidebarDetails.map((item, index) => {
                        return (
                            <div key={index}>
                                <span className="text-[#5f5f5fa2] text-lg font-extrabold">{index + 1 + "  "}</span>
                                <Link key={index} href={item.href}
                                    className="text-white text-2xl font-bold font-clash links border-t-2 border-b-2 border-transparent hover:border-white hover:text-3xl transition duration-300 px-2"
                                    onClick={() => {
                                        if (timelineref2.current?.progress() === 1) {
                                            timelineref2.current?.reverse();
                                        }
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}