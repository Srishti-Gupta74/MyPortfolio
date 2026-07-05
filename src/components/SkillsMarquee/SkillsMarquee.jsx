import './SkillsMarquee.css';

const skills = [
  'C++',
  'Python',
  'Web Development',
  'UI / UX Design',
  'Data Structures',
  'React',
  'Problem Solving',
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
