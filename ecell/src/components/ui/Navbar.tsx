'use client';
import Link from "next/link";
import Image from "next/image";
import {navbarDetails} from "@/constants/navbarDetails";
import gsap from "gsap/all";
import {useGSAP} from  "@gsap/react";
export function Navbar(){
    useGSAP(() => {

    }, []);
    return(
        <>
        <nav className="navbar max-md:hidden z-50 fixed top-5 left-1/2 transform -translate-x-1/2 lg:w-[90%] w-[95%] flex items-center justify-around px-6 bg-[#0F172A] rounded-xl">
            {
                navbarDetails.map((item,index)=>{
                    if(item.name === "Logo"){
                        return(
                            <Link key={index} href={item.href} className="text-lg font-bold font-clash">
                                <Image
                                    src="/images/logo.png"
                                    alt="Logo"
                                    width={100}
                                    height={100}
                                />
                            </Link>
                        );
                    }
                    return(
                        <Link key={index} href={item.href} className="text-white md:text-md font-bold font-clash ">
                            {item.name}
                        </Link>
                    );
                })
            }
        </nav>

        {/* Mobile Navigation */}
        {/* <nav className="navbar max-md:flex z-50 sticky top-5 mx-auto lg:w-[90%] w-[95%] items-center justify-around px-6 bg-[#0F172A] rounded-xl hidden">
            <h1>Hello</h1>
        </nav> */}
        </>
    );
}