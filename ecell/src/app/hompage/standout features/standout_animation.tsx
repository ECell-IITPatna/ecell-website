"use client"
import React from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const StandoutAnimation = ({ children }: { children: React.ReactNode }) => {
    useGSAP(() => {
        //Desktop Version
        const tl = gsap.timeline();

        tl.fromTo(".standout-cards-desktop",
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.5
            }
        );
        tl.fromTo(".standout-cards-desktop",
            {
                opacity: 1,
            },
            {
                opacity: 0,
                duration: 1,
                stagger: 0.2
            }
        );
        tl.to(".standout-heading",{
            opacity:0,
            duration:0.5,
        },"<-0.1");

        tl.to(".reactor",{
            scale:3,
            duration:1,
            opacity:0.4,
        });
        tl.to(".glow",{
            scale:7,
            opacity:1,
            duration:1,
            filter:"blur(140px)",
        },"<-0.1");
        tl.to(".overlay",{
            opacity:1,
            duration:1,
        },"<0.1");

        ScrollTrigger.create({
            trigger: ".standout-desktop-container",
            animation: tl,
            start: "top top",
            end: () => "+=" + tl.duration() * innerHeight,
            scrub: true,
            pin: true,
        });

        document.querySelectorAll(".standout-cards-desktop").forEach((card) => {
            card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                    scale: 2,
                    zIndex: 10,
                    duration: 0.3,
                });
            });
            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    scale: 1,
                    zIndex: 1,
                    duration: 0.3,
                });
            });
        });
        //Mobile Version
        const tlMobile = gsap.timeline({
            scrollTrigger: {
                trigger: ".standout-mobile-container",
                start: "top top",
            }
        });
        tlMobile.fromTo(".standout-cards-mobile",
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.5
            }
        );

    }, []);
    return (
        <div>
            {children}
        </div>
    )
}

export default StandoutAnimation