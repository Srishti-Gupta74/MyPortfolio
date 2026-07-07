import './Projects.css';

const projects = [
  {
    id: '01',
    title: 'CyberSiksha',
    description:
      'Gamified scam interception platform for Gen-Z with accessible AI protection for elders. Features interactive quiz arenas, family defense grids, and a Gemini-powered cyber companion.',
    tech: ['Next.js', 'React', 'Supabase', 'Gemini AI'],
    github: 'https://github.com/Srishti-Gupta74/CyberSiksha',
    live: 'https://cyber-siksha.vercel.app/',
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
    live: 'https://interview-sim-eta.vercel.app/',
    video: 'https://youtu.be/bBofdpzKsHk',
  },
  {
    id: '04',
    title: 'Spooky',
    description:
      'Multimodal AI cybersecurity guardian that monitors your screen in real time, runs OCR to detect suspicious keywords, and triggers fullscreen alerts for phishing.',
    tech: ['Python', 'Gemini AI'],
    github: 'https://github.com/Srishti-Gupta74/Spooky',
    live: 'https://spooky-blue.vercel.app/',
    video: 'https://youtu.be/uWbJxuC943M',
  },
  {
    id: '05',
    title: 'DeskGuard',
    description:
      'Smart library seat management system with QR-based seat booking, real-time occupancy tracking, and automated seat recovery to solve seat hoarding.',
    tech: ['TypeScript', 'React', 'CSS'],
    github: 'https://github.com/Srishti-Gupta74/deskguard',
    live: 'https://deskguard-lovat.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__content container">
        {/* Header */}
        <div className="projects__header reveal">
          <h2 className="projects__heading">Selected projects</h2>
        </div>

        {/* Project List */}
        <div className="projects__list">
          {projects.map((project) => (
            <div
              className="projects__card reveal"
              key={project.id}
            >
              {/* Giant Watermark Number */}
              <span className="projects__watermark">{project.id}</span>

              {/* Card Top */}
              <div className="projects__card-top">
                <span className="projects__label">PROJECT / {project.id}</span>
                <h3 className="projects__title">{project.title}</h3>
              </div>

              <p className="projects__description">{project.description}</p>

              {/* Divider */}
              <div className="projects__divider"></div>

              {/* Card Bottom */}
              <div className="projects__card-bottom">
                <div className="projects__tech">
                  {project.tech.map((t) => (
                    <span className="projects__tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="projects__links">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                    >
                      Visit Site <span>↗</span>
                    </a>
                  )}
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                    >
                      Watch Demo <span>↗</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                    >
                      GitHub <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
