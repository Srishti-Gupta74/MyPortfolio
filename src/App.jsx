import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SkillsMarquee from './components/SkillsMarquee/SkillsMarquee';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <TechStack />
        <Projects />
      </main>
    </>
  );
}

export default App;
