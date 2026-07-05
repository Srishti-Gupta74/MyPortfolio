import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SkillsMarquee from './components/SkillsMarquee/SkillsMarquee';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
