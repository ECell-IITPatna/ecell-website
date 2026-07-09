import Contact from "@/components/ui/Contact";
import Hero from "./hompage/hero/hero";
import Footer from "@/components/ui/Footer";
import HeroAnimation from "./hompage/hero/hero_animation";
import AboutAnimation from "./hompage/about/about_animation";
import About from "./hompage/about/about";
export default function Home() {
  return (
    <main>
      <HeroAnimation>
        <Hero />
      </HeroAnimation>

      <AboutAnimation>
        <About />
      </AboutAnimation>

      {/* <Contact/>
      <Footer/> */}
    </main>
  );
} 