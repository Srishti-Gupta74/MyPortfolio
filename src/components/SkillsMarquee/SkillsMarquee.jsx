import './SkillsMarquee.css';

const skills = [
  'Software Engineering',
  'Generative AI & LLMs',
  'Web Development',
  'Data Structures & Algorithms',
  'Artificial Intelligence',
  'Cybersecurity',
  'Prompt Engineering',
  'Open Source',
  'Python',
  'C',
  'C++',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Git',
  'Linux',
  'Firebase',
  'Supabase',
  'Coding',
];

const SkillsMarquee = () => {
  return (
    <section className="marquee" id="skills">
      <div className="marquee__track">
        <div className="marquee__content">
          {/* Render skills twice for seamless looping */}
          {[...skills, ...skills].map((skill, index) => (
            <span className="marquee__item" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
