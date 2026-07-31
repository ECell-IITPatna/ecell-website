'use client';
import Link from "next/link";
import Image from "next/image";
import { navbarDetails, sidebarDetails } from "@/constants/navbarDetails";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef ,useEffect} from "react";
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

        tl2.to(sidebarRef.current, {
            right: 0,
            duration: 1,
            ease: "power3.inOut",
        });

        timelineref1.current = tl1;
        timelineref2.current = tl2;

        
        gsap.set(rocket_floating.current, { x: 0, y: 0 });
        tl1.to(rocket_floating.current, {
            x:80,
            y:-80,
            duration:0.8,
            ease:"power2.inOut",
        })
        tl1.set(rocket_floating.current, { x: -160, y: 160 });
        tl1.to(rocket_floating.current, {
            x:0,
            y:0,
            duration:0.8,
            ease:"power2.inOut",
        })
        
        const floatingNavbar = document.querySelector(".floating-navbar-container");
        const enter =()=>{tl1.play(0);}
        floatingNavbar?.addEventListener("mouseenter", enter);
    }, []);

    useEffect(() => {
        
        if (pathname !== "/") {
            ScrollTrigger.getAll().forEach(st => st.kill());
            return;
        }

        const init = () => {
            const hero = document.querySelector(".hero");

            if (!hero) {
                return;
            }
            gsap.set(".floating-navbar-container", { y: 150 });
            ScrollTrigger.create({
                trigger: hero,
                start: "bottom top",
                onLeave: () => {
                    gsap.to(".navbar", { y: -150 });
                    gsap.to(".floating-navbar-container", { y: 0 });
                },
                onEnterBack: () => {
                    gsap.to(".navbar", { y: 0 });
                    gsap.to(".floating-navbar-container", { y: 150 });
                },
            });

            ScrollTrigger.refresh();
        };

        requestAnimationFrame(init);

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, [pathname]);

    
    return (
        <div>
            <div className="floating-navbar-container fixed bottom-5 right-5 bg-[#eeeeee20] z-50 rounded-2xl overflow-hidden">
                <Image
                    src="/images/navbar-floating-rocket.png"
                    alt="Logo"
                    width={70}
                    height={70}
                    className="rocket-image"
                    ref={rocket_floating}
                />
            </div>

            {/*Desktop Navigation*/}
            <nav className="navbar max-md:hidden z-50 fixed top-2 left-1/2 transform -translate-x-1/2 lg:w-[90%] w-[95%] flex items-center justify-around px-6 bg-[rgb(0,0,0)] backdrop-blur-md border border-white/10 rounded-xl">
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
                                />
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
            <nav className="navbar max-md:flex z-50 fixed top-5 left-1/2 transform -translate-x-1/2 lg:w-[90%] w-[95%] items-center justify-between px-6 bg-[rgb(0,0,0)] backdrop-blur-md border border-white/10 rounded-xl hidden">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    className="logo2"
                    ref={logo2}
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