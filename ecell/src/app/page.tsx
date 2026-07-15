import Hero from "./hompage/hero/hero";
import Achievements from "./hompage/achievement/achievements";
import About from "./hompage/about/about";

import HeroAnimation from "./hompage/hero/hero_animation";
import AboutAnimation from "./hompage/about/about_animation";
import AchievementsAnimation from "./hompage/achievement/achievements_animation";
import AluminiAnimation from "./hompage/alumini/alumini_animation";
import Alumini from "./hompage/alumini/alumini";

export default function Home() {
  return (
    <main>
      <HeroAnimation>
        <Hero />
      </HeroAnimation>

      <AboutAnimation>
        <About />
      </AboutAnimation>

      <AchievementsAnimation>
        <Achievements />
      </AchievementsAnimation>

      <AluminiAnimation>
        <Alumini />
      </AluminiAnimation>
    </main>
  );
} 