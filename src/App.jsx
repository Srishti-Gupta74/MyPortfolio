import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SkillsMarquee from './components/SkillsMarquee/SkillsMarquee';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <Projects />
      </main>
    </>
  );
}

export default App;
