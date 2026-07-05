import './Projects.css';

const projects = [
  {
    id: '01',
    title: 'CyberSiksha',
    description:
      'Gamified scam interception platform for Gen-Z with accessible AI protection for elders. Features interactive quiz arenas, family defense grids, and a Gemini-powered cyber companion.',
    tech: ['Next.js', 'React', 'Supabase', 'Gemini AI'],
    github: 'https://github.com/Srishti-Gupta74/CyberSiksha',
  },
  {
    id: '02',
    title: 'ForgeShield',
    description:
      'Forgery detection & document authentication tool. Uses image analysis techniques to identify inconsistencies and protect against digital forgery.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Srishti-Gupta74/ForgeShield',
  },
  {
    id: '03',
    title: 'InterviewSim',
    description:
      'AI-powered mock interview simulator that helps users prepare for technical and behavioral interviews with instant feedback and real scenarios.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Srishti-Gupta74/InterviewSim',
  },
  {
    id: '04',
    title: 'Spooky',
    description:
      'Multimodal AI cybersecurity guardian that monitors your screen in real time, runs OCR to detect suspicious keywords, and triggers fullscreen alerts for phishing.',
    tech: ['Python', 'Gemini AI'],
    github: 'https://github.com/Srishti-Gupta74/Spooky',
  },
  {
    id: '05',
    title: 'DeskGuard',
    description:
      'Smart library seat management system with QR-based seat booking, real-time occupancy tracking, and automated seat recovery to solve seat hoarding.',
    tech: ['TypeScript', 'React', 'CSS'],
    github: 'https://github.com/Srishti-Gupta74/deskguard',
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__content container">
        {/* Header */}
        <div className="projects__header">
          <h2 className="projects__heading">Selected projects</h2>
          <p className="projects__label">2024—2025 Archive</p>
        </div>

        {/* Project List */}
        <div className="projects__list">
          {projects.map((project) => (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="projects__card"
              key={project.id}
            >
              <div className="projects__card-top">
                <span className="projects__number">{project.id}</span>
                <h3 className="projects__title">{project.title}</h3>
              </div>
              <p className="projects__description">{project.description}</p>
              <div className="projects__card-bottom">
                <div className="projects__tech">
                  {project.tech.map((t) => (
                    <span className="projects__tag" key={t}>{t}</span>
                  ))}
                </div>
                <span className="projects__arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
