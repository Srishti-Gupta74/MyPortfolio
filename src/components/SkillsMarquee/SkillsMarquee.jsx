import './SkillsMarquee.css';

const skills = [
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
  'Artificial Intelligence',
  'Data Structures & Algorithms',
  'Cybersecurity',
  'Web Development',
  'Software Engineering',
  'Open Source',
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
