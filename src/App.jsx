import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SkillsMarquee from './components/SkillsMarquee/SkillsMarquee';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <TechStack />
        <Projects />
        <Achievements />
        <Education />
        <Certifications />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
