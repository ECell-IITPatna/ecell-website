import Hero from "./hompage/hero/hero";
import Achievements from "./hompage/achievement/achievements";
import About from "./hompage/about/about";

import HeroAnimation from "./hompage/hero/hero_animation";
import AboutAnimation from "./hompage/about/about_animation";
import AchievementsAnimation from "./hompage/achievement/achievements_animation";
import AlumniAnimation from "./hompage/alumni/alumni_animation";
import Alumni from "./hompage/alumni/alumni";

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

      <AlumniAnimation>
        <Alumni />
      </AlumniAnimation>
    </main>
  );
} 