import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SmoothScroller from "./SmoothScroller";
import "lenis/dist/lenis.css";
import { PreloaderProvider } from "@/components/ui/PreloaderProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const clash = localFont({
  src: "../../public/fonts/ClashDisplayVariable.ttf",
  variable: "--font-clash",
  display: "swap",
});

const gugi = localFont({
  src: "../../public/fonts/Gugi-Regular.ttf",
  variable: "--font-gugi",
  display: "swap",
});

const micro = localFont({
  src: "../../public/fonts/Micro5-Regular.ttf",
  variable: "--font-micro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "E-Cell IIT Patna",
  description: "E-Cell IIT Patna is the Entrepreneurship Cell of the Indian Institute of Technology Patna, dedicated to fostering innovation and entrepreneurship among students. We organize various events, workshops, and competitions to encourage and support aspiring entrepreneurs in their journey towards building successful startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${clash.variable} ${gugi.variable} ${micro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PreloaderProvider>
          <SmoothScroller />
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </PreloaderProvider>
      </body>
    </html>
  );
}
