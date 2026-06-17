import Contact from "@/components/ui/Contact";
import Hero from "./hompage/hero/hero";
import Footer from "@/components/ui/Footer";
import HeroAnimation from "./hompage/hero/hero_animation";
export default function Home() {
  return (
    <main>
      <HeroAnimation>
        <Hero />
      </HeroAnimation>

      {/* <Contact/>
      <Footer/> */}
    </main>
  );
}