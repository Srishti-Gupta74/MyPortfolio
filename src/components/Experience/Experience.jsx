import './Experience.css';

const experiences = [
  {
    id: '01',
    role: 'Senior Coordinator of Community',
    organization: 'IEEE CS MUJ · Full-time',
    period: 'May 2026 — Present',
    type: 'Experience',
    description:
      'Primary team: Community. Secondary teams: Technical Projects and Curations.',
  },
  {
    id: '02',
    role: 'Student Office Bearer',
    organization: 'Directorate of Research-MUJ · Full-time',
    period: 'Mar 2026 — Present',
    type: 'Experience',
    description: 'Student Research Forum (Junior Board).',
  },
  {
    id: '03',
    role: 'Member',
    organization: 'Google Developer Groups - Manipal University Jaipur',
    period: 'Oct 2025 — Present',
    type: 'Experience',
    description:
      'Participating in developer sessions, technical workshops, and collaborative community builds.',
  },
  {
    id: '04',
    role: 'Contributor',
    organization: 'GirlScript Summer of Code · Full-time',
    period: 'May 2026 — Present',
    type: 'Experience',
    description:
      'Mastered core Git & GitHub workflows, version control commands, branching strategies, and collaborative open-source development through hands-on contributions and peer code reviews.',
  },
  {
    id: '05',
    role: 'Junior Working Team',
    organization: 'IEEE SB MUJ · Full-time',
    period: 'Dec 2025 — May 2026',
    type: 'Experience',
    description: 'Content Team.',
  },
  {
    id: '06',
    role: 'Junior Working Team',
    organization: 'IEEE GRSS MUJ · Full-time',
    period: 'Oct 2025 — May 2026',
    type: 'Experience',
    description: 'Editorial and Content Team.',
  },
  {
    id: '07',
    role: 'Junior Working Team',
    organization: 'Cyber Space Club · Full-time',
    period: 'Oct 2025 — May 2026',
    type: 'Experience',
    description: 'Research Team.',
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience__content container">
        {/* Header */}
        <div className="experience__header reveal">
          <h2 className="experience__heading">Experience</h2>
          <p className="experience__label">Positions & Roles</p>
        </div>

        {/* Timeline List */}
        <div className="experience__timeline reveal reveal--delay-1">
          {experiences.map((exp) => (
            <div className="experience__item" key={exp.id}>
              <div className="experience__dot"></div>
              
              <div className="experience__content-box">
                <div className="experience__meta">
                  <span className="experience__period">{exp.period}</span>
                </div>

                <h3 className="experience__role">{exp.role}</h3>
                <h4 className="experience__org">{exp.organization}</h4>
                {exp.description && (
                  <p className="experience__desc">{exp.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
