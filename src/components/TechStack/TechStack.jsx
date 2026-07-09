import './TechStack.css';

const arsenal = [
  { name: 'Python', category: 'Language' },
  { name: 'C', category: 'Language' },
  { name: 'C++', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'Git', category: 'Version Control' },
  { name: 'Linux', category: 'OS / Environment' },
  { name: 'Firebase', category: 'Backend / Auth' },
  { name: 'Supabase', category: 'Database / Realtime' },
];

const levelingUp = [
  'Software Engineering',
  'Web Development',
  'Data Structures & Algorithms',
  'Artificial Intelligence',
  'Cybersecurity',
  'Open Source',
];

const TechStack = () => {
  return (
    <section className="techstack" id="stack">
      <div className="techstack__content container">
        {/* Header */}
        <div className="techstack__header reveal">
          <h2 className="techstack__heading">Tech Arsenal</h2>
          <p className="techstack__label">Tools & Capabilities</p>
        </div>

        <div className="techstack__grid reveal reveal--delay-1">
          {/* Tech Arsenal Grid */}
          <div className="techstack__group">
            <h3 className="techstack__subheading">Core Technologies</h3>
            <div className="techstack__list">
              {arsenal.map((tech) => (
                <div className="techstack__item" key={tech.name}>
                  <span className="techstack__name">{tech.name}</span>
                  <span className="techstack__category">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Leveling Up */}
          <div className="techstack__group techstack__group--aside">
            <h3 className="techstack__subheading">Currently Leveling Up</h3>
            <p className="techstack__intro">
              Active focus areas and continuous learning domains shaping my
              engineering journey.
            </p>
            <div className="techstack__tags">
              {levelingUp.map((item) => (
                <span className="techstack__tag" key={item}>
                  <span className="techstack__tag-dot"></span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
