'use client';

import Link from "next/link";
import Image from "next/image";
import { navbarDetails, sidebarDetails } from "@/constants/navbarDetails";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    const rocket_floating = useRef<HTMLImageElement>(null);
    const logo2 = useRef<HTMLImageElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const timelineref2 = useRef<gsap.core.Timeline | null>(null);
    const timelineref1 = useRef<gsap.core.Timeline | null>(null);
    const timelineref3 = useRef<gsap.core.Timeline | null>(null);
    const timelineref4 = useRef<gsap.core.Timeline | null>(null);
    const navbarScrollTriggerRef = useRef<any>(null);

    const handleClick = (id: string, url: string) => {
        const click_audio = new Audio("/audio/secondary-hover.wav");
        click_audio.preload = "auto";
        click_audio.volume = 0.5;
        click_audio.currentTime = 0;
        click_audio.play().catch((error) => {
            console.error("Error playing click audio:", error);
        });
        if (pathname === "/") {
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
            });

            window.history.replaceState(null, "", `#${id}`);
        } else {
            router.push(url);
        }
    };

    useGSAP(() => {
        const tl1 = gsap.timeline({ paused: true });
        const tl2 = gsap.timeline({ paused: true });
        const tl3 = gsap.timeline({ paused: true });
        const tl4 = gsap.timeline({ paused: true });

        tl2.to(sidebarRef.current, {
            right: 0,
            duration: 1,
            ease: "power3.inOut",
        });

        timelineref1.current = tl1;
        timelineref2.current = tl2;
        timelineref3.current = tl3;
        timelineref4.current = tl4;

        gsap.set(rocket_floating.current, { x: 0, y: 0 });
        tl1.to(rocket_floating.current, {
            x: 80,
            y: -80,
            duration: 0.5,
            ease: "power2.inOut",
        });
        tl1.set(rocket_floating.current, { x: -160, y: 160 });
        tl1.to(rocket_floating.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.inOut",
        });

        const floatingNavbar = document.querySelector(".floating-navbar-container");
        const enter = () => { tl1.play(0); };
        floatingNavbar?.addEventListener("mouseenter", enter);

        tl3.to(".floating-navbar-sidebar", {
            height: "85vh",
            duration: 0.4,
        });
        tl3.to(".floating-navbar-sidebar", {
            width: "20vw",
            minWidth: "200px",
            duration: 0.4,
        });
        tl3.to(".floating-sidebar-links", {
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
        });

        tl4.to(".navbar-overlay", {
            opacity: 1,
            duration: 0.4,
        });
        tl4.to(".floating-navbar-contact", {
            width: "40vw",
            duration: 0.5,
            height: "85vh",
            padding: "10px",
            minWidth: "250px",
        }, "-=0.2");
        tl4.to(".contact-element", {
            opacity: 1,
            duration: 0.3,
            stagger: 0.08,
        }, "-=0.5");

    }, []);

    useEffect(() => {
        if (pathname !== "/") {
            if (navbarScrollTriggerRef.current) {
                navbarScrollTriggerRef.current.kill();
                navbarScrollTriggerRef.current = null;
            }

            gsap.killTweensOf(".navbar");
            gsap.killTweensOf([".floating-navbar-container", ".floating-navbar-sidebar", ".floating-navbar-contact", ".navbar-overlay"]);

            if (timelineref1.current) timelineref1.current.progress(0).pause();
            if (timelineref2.current) timelineref2.current.progress(0).pause();
            if (timelineref3.current) timelineref3.current.progress(0).pause();
            if (timelineref4.current) timelineref4.current.progress(0).pause();

            gsap.set(".navbar", { y: 0, clearProps: "transform" });
            gsap.set([".floating-navbar-container", ".floating-navbar-sidebar"], { yPercent: 150 });
            gsap.set(".navbar-overlay", { opacity: 0 });
            gsap.set(".floating-navbar-contact", { width: 0, height: 0, padding: 0 });
            return;
        }

        const init = () => {
            const hero = document.querySelector(".hero");

            if (!hero) {
                return;
            }
            gsap.set([".floating-navbar-container", ".floating-navbar-sidebar"], { yPercent: 150 });
            navbarScrollTriggerRef.current = ScrollTrigger.create({
                trigger: hero,
                start: "bottom top",
                onLeave: () => {
                    gsap.to(".navbar", { y: -150 });
                    gsap.to([".floating-navbar-container", ".floating-navbar-sidebar"], { yPercent: 0 });
                },
                onEnterBack: () => {
                    gsap.to(".navbar", { y: 0 });
                    gsap.to([".floating-navbar-container", ".floating-navbar-sidebar"], { yPercent: 150 });
                },
            });

            ScrollTrigger.refresh();
        };

        requestAnimationFrame(init);

        return () => {
            if (navbarScrollTriggerRef.current) {
                navbarScrollTriggerRef.current.kill();
                navbarScrollTriggerRef.current = null;
            }
        };
    }, [pathname]);

    return (
        <div className="relative">
            {/* Background Overlay */}
            <div className="navbar-overlay fixed top-0 left-0 w-full h-full bg-[#000000a8] z-[65] opacity-0 pointer-events-none" />

            {/* Floating Navigation Elements */}
            <div className="floating-navbar-sidebar fixed bottom-5 right-5 bg-[#98d2feb4] z-[70] rounded-2xl overflow-hidden w-17 h-17 flex justify-between p-5">
                <div className="flex flex-col gap-4 w-full h-full">
                    {sidebarDetails.map((item, index) => {
                        return (
                            <div key={index}>
                                <Link key={index} href={item.href}
                                    className="text-white text-2xl font-bold font-clash floating-sidebar-links border-t-2 border-b-2 border-transparent hover:border-white hover:text-3xl transition duration-300 px-2 opacity-0"
                                    onClick={(e) => {
                                        if (timelineref3.current) {
                                            timelineref3.current.reverse();
                                        }

                                        if (item.name === "Contact") {
                                            e.preventDefault();
                                            if (timelineref4.current?.progress() === 0) {
                                                timelineref4.current?.play(0);
                                            }
                                            else {
                                                timelineref4.current?.reverse();
                                            }
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

            <div className="floating-navbar-container fixed bottom-5 right-5 bg-transparent z-[70] rounded-2xl overflow-hidden w-17 h-17 flex items-center justify-center">
                <Image
                    src="/images/navbar-floating-rocket.png"
                    alt="Floating Menu"
                    width={70}
                    height={70}
                    className="rocket-image cursor-pointer"
                    ref={rocket_floating}
                    onClick={() => {
                        if (timelineref3.current?.progress() === 0) {
                            timelineref3.current?.play(0);
                        }
                        else {
                            timelineref3.current?.reverse();
                        }
                    }}
                />
            </div>

            <div className="floating-navbar-contact fixed bottom-5 right-5 bg-[#98d2fe] z-[70] rounded-2xl overflow-hidden w-0 h-0 flex flex-col justify-start gap-2">
                <div className="flex justify-end contact-element opacity-0">
                    <div className="rounded-full p-3 bg-[#323232] w-fit cursor-pointer">
                        <X size={30}
                            role="button"
                            aria-label="Close contact menu"
                            onClick={() => {
                                if (timelineref4.current?.progress() === 1) {
                                    timelineref4.current?.reverse();
                                }
                            }}
                        />
                    </div>
                </div>
                <h1 className="contact-element text-black font-clash text-3xl md:text-[3.5vw] font-bold opacity-0">Get in touch</h1>
                <p className="text-black contact-element opacity-0">Whether you have a startup idea, a collaboration in mind, or simply want to learn more about entrepreneurship, we&apos;re always excited to connect with passionate innovators.</p>
                <div className="contact-element h-[1.5px] w-full bg-[#81818176] opacity-0"></div>
                <p className="contact-element text-black opacity-0">For all Enquiries</p>
                <h1 className="contact-element text-xl md:text-[2.5vw] hover:text-[#1050b0d3] transition-all duration-300 opacity-0">entrepreneurship@iitp.ac.in</h1>
                <p className="contact-element text-black opacity-0">Contact Number</p>
                <h1 className="contact-element text-xl md:text-[2.5vw] hover:text-[#1050b0d3] transition-all duration-300 opacity-0">+91 8920647827</h1>
                <h1 className="contact-element text-xl md:text-[2.5vw] hover:text-[#1050b0d3] transition-all duration-300 opacity-0">+91 8595771250</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="navbar max-md:hidden z-[80] fixed top-2 left-1/2 transform -translate-x-1/2 lg:w-[90%] w-[95%] flex items-center justify-around px-6 bg-[rgb(0,0,0)] backdrop-blur-md border border-white/10 rounded-xl">
                {
                    navbarDetails.map((item, index) => {
                        if (item.name === "Logo") {
                            return (
                                <Link href="/" key={index} className="cursor-pointer">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Logo"
                                        width={75}
                                        height={75}
                                        className="logo2"
                                        ref={logo2}
                                    />
                                </Link>
                            );
                        }
                        return (
                            <Link key={index} href={item.href} className="text-white md:text-md font-bold font-clash links"
                                onClick={() => { handleClick(item.id || "", item.href) }}
                            >
                                {item.name}
                            </Link>
                        );
                    })
                }
            </nav>

            {/* Mobile Navigation */}
            <nav className="navbar max-md:flex z-[80] fixed top-5 left-1/2 transform -translate-x-1/2 lg:w-[90%] w-[95%] items-center justify-between px-6 bg-[rgb(0,0,0)] backdrop-blur-md border border-white/10 rounded-xl hidden">
                <Link href="/" className="cursor-pointer">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={80}
                        height={80}
                        className="logo2"
                        ref={logo2}
                    />
                </Link>
                <button aria-label="Open mobile menu">
                    <Menu onClick={() => {
                        if (timelineref2.current?.progress() === 0) {
                            timelineref2.current?.play();
                        }
                    }} />
                </button>
            </nav>

            {/* Sidebar for Mobile Navigation */}
            <div className="z-[85] max-md:flex flex-col gap-4 fixed h-screen top-0 -right-full w-screen bg-black p-4 hidden" ref={sidebarRef}>
                <div className="flex justify-end p-2">
                    <X className="border border-white/40 rounded-full cursor-pointer"
                        size={30}
                        role="button"
                        aria-label="Close mobile menu"
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
                                        if (timelineref2.current) {
                                            timelineref2.current.reverse();
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