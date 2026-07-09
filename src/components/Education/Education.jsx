import './Education.css';

const educationList = [
  {
    id: '01',
    tag: 'B.TECH CSE',
    title: 'Bachelor of Technology — Computer Science & Engineering',
    institution: 'Manipal University Jaipur',
    period: '2025 — 2029',
    grade: '9.89 GPA (Dean’s List)',
    highlights: [
      'Achieved the highest first-year Semester GPA (9.8948) in the B.Tech CSE program.',
      'Honoured on the prestigious Dean’s List for outstanding academic excellence.',
    ],
  },
  {
    id: '02',
    tag: 'ISC 12TH BOARDS',
    title: 'Class 12th — ISC Boards (PCMB)',
    institution: 'St. Francis School',
    period: '2025',
    grade: '93.5% Boards',
    highlights: [
      'Core Science Specialization: Physics, Chemistry, Mathematics, and Biology (PCMB).',
    ],
  },
  {
    id: '03',
    tag: 'ICSE 10TH BOARDS',
    title: 'Class 10th — ICSE Boards',
    institution: 'St. Charles School',
    period: '2023',
    grade: '94.4% Boards',
    highlights: [
      'Secured 94.4% in the ICSE Class 10th Board Examinations.',
    ],
  },
];

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education__content container">
        {/* Editorial Header */}
        <div className="education__header reveal">
          <span className="education__label">ACADEMIC BACKGROUND</span>
          <h2 className="education__heading">Education</h2>
        </div>

        {/* Horizontal Timeline Rows with Vertical Rail */}
        <div className="education__list">
          {educationList.map((item) => (
            <div className="education__row reveal" key={item.id}>
              {/* 1. Left Index */}
              <div className="education__row-number">{item.id}</div>

              {/* 2. Main Editorial Content */}
              <div className="education__row-main">
                <div className="education__meta-row">
                  <span className="education__badge">{item.tag}</span>
                  <span className="education__row-period">{item.period}</span>
                </div>

                <h3 className="education__row-title">{item.title}</h3>
                <h4 className="education__institution">{item.institution}</h4>

                <div className="education__grade-wrapper">
                  <span className="education__grade-pill">{item.grade}</span>
                </div>

                {item.highlights && (
                  <ul className="education__row-highlights">
                    {item.highlights.map((point, idx) => (
                      <li key={idx} className="education__row-highlight-item">
                        <span className="education__dot">·</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
