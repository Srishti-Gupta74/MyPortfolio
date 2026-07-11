import './TechStack.css';

const arsenal = [
  { id: '01', name: 'Python', category: 'LANGUAGE' },
  { id: '02', name: 'C', category: 'LANGUAGE' },
  { id: '03', name: 'C++', category: 'LANGUAGE' },
  { id: '04', name: 'JavaScript', category: 'LANGUAGE' },
  { id: '05', name: 'HTML5 / CSS3', category: 'FRONTEND' },
  { id: '06', name: 'Git', category: 'VERSIONING' },
  { id: '07', name: 'Linux', category: 'ENVIRONMENT' },
  { id: '08', name: 'Firebase / Supabase', category: 'DATABASE' },
];

const aiCompetencies = [
  { name: 'Generative AI & LLMs', tag: 'COMPETENCY' },
  { name: 'Interactive 3D Simulations', tag: 'SIMULATION' },
  { name: 'Prompt Engineering', tag: 'WORKFLOW' },
  { name: 'Multimodal AI & OCR', tag: 'COMPUTER VISION' },
  { name: 'AI Agent Workflows', tag: 'AUTOMATION' },
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
        {/* Editorial Header */}
        <div className="techstack__header reveal">
          <span className="techstack__label">TOOLS & CAPABILITIES</span>
          <h2 className="techstack__heading">Tech Arsenal</h2>
        </div>

        {/* Stacked Horizontal Sections */}
        <div className="techstack__sections">
          {/* Row 1: Core Technologies */}
          <div className="techstack__row reveal">
            <div className="techstack__row-left">
              <h3 className="techstack__row-title">Core Technologies</h3>
              <p className="techstack__row-desc">
                Primary technical foundations refined through academic research and production-grade engineering projects.
              </p>
            </div>
            <div className="techstack__row-right">
              <div className="techstack__grid-items">
                {arsenal.map((tech) => (
                  <div className="techstack__card-item" key={tech.id}>
                    <span className="techstack__item-meta">
                      {tech.id} / {tech.category}
                    </span>
                    <span className="techstack__item-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="techstack__divider"></div>

          {/* Row 2: AI & Workflows */}
          <div className="techstack__row reveal">
            <div className="techstack__row-left">
              <h3 className="techstack__row-title">AI & Workflows</h3>
              <p className="techstack__row-desc">
                Leveraging intelligent applications through optimized prompt engineering and multi-agent systems.
              </p>
            </div>
            <div className="techstack__row-right">
              <div className="techstack__list-items">
                {aiCompetencies.map((item, idx) => (
                  <div className="techstack__list-row" key={idx}>
                    <span className="techstack__list-name">{item.name}</span>
                    <span className="techstack__list-tag">{item.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="techstack__divider"></div>

          {/* Row 3: Currently Leveling Up */}
          <div className="techstack__row reveal">
            <div className="techstack__row-left">
              <h3 className="techstack__row-title">Currently Leveling Up</h3>
              <p className="techstack__row-desc">
                Active focus areas shaping my future trajectory in engineering and software research.
              </p>
            </div>
            <div className="techstack__row-right">
              <div className="techstack__pills">
                {levelingUp.map((domain, idx) => (
                  <span className="techstack__pill" key={idx}>
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
