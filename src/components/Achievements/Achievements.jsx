import './Achievements.css';

const achievements = [
  {
    id: '01',
    tag: 'ACADEMIC',
    title: 'Dean’s List for Academic Excellence — 9.89 GPA',
    organization: 'Manipal University Jaipur · Department of Computer Science & Engineering (B.Tech CSE)',
    date: 'July 2026',
    description: 'Awarded the prestigious Dean’s List honor for achieving the highest grade point average (9.8948 GPA) in the first year of the B.Tech Computer Science & Engineering program.',
    highlights: [
      'Achieved a stellar 9.8948 Semester Grade Point Average (GPA) across rigorous foundational B.Tech Computer Science & Engineering courses.',
      'Honoured by Dean FoSTA (Faculty of Science, Technology & Architecture) and First Year B.Tech Coordinator for outstanding academic excellence.',
      'Successfully balanced top-tier academic performance with rigorous nationwide hackathon podium finishes and solo full-stack engineering.',
    ],
    certificate: '/deans-list-cert.jpg',
    linkedin:
      'https://www.linkedin.com/posts/activity-7448338774008446976-XD-C?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6B1lgBLs0M8HXew_JCb16LQOxhfGh-FcE',
  },
  {
    id: '02',
    tag: 'RESEARCH & AI',
    title: 'Rank 2 (Runner-Up) — AI for Public Good: Sustainable & Resilient Supply Chains Hackathon',
    organization: 'Indo-Swiss Research Grant · ETH Zurich × Univ. of Lausanne × IIIT Allahabad × Manipal University Jaipur',
    date: 'June 2026',
    description: 'Hackathon organized under the Indo-Swiss Research Grant in collaboration with researchers from ETH Zurich, University of Lausanne, IIIT Allahabad, Manipal University Jaipur, and WikiClub Tech.',
    highlights: [
      'Secured Rank 2 (National Runner-Up) for Problem Statement 2: Calibrated Uncertainty Quantification for Supply Chain Risk Triage.',
      'Architected SupplyShield AI, an Adaptive Conformal Risk Triage system (Gibbs & Candès ACI) designed to protect essential goods (food, medicine, emergency materials) during sudden demand shocks.',
      'Engineered calibrated confidence bounds and an automated Forecast Reliability Score (0–100) to replace static point predictions for downstream inventory directives.',
    ],
  },
  {
    id: '03',
    tag: 'CYBERSECURITY',
    title: 'Rank 42 — Confluence 2.0 International Innovation Hackathon',
    organization: 'SRMIST (The Helper) · Cybersecurity & Threat Intelligence',
    date: 'June 2026',
    description: 'International innovation hackathon sprint among 2,500+ participants and 500+ teams where we advanced to Round 3 out of 5 rounds.',
    highlights: [
      'Advanced to Round 3 out of 5 rigorous elimination rounds of prototype pitching and real-time leaderboard evaluation.',
      'Secured Rank 42 (Top 100 Participant) out of 500+ teams by building CyberSiksha, a cybersecurity awareness and education platform designed especially for children and the elderly.',
      'Engineered bite-sized cyber lessons, gamified quizzes, a family dashboard, and AI threat simulation features in an intense 81-hour sprint.',
    ],
    certificate: '/confluence-cert.jpg',
    linkedin: 'https://lnkd.in/p/dTc2tQJj',
    video: 'https://youtu.be/osFoCaGa9Wc',
  },
  {
    id: '04',
    tag: 'CYBERSECURITY',
    title: 'Finalist — National Secure AI Software & Systems Hackathon',
    organization: 'IIT Madras × BITS Goa (ISEA Phase-III) · Blue Team Challenge',
    date: 'July 2026',
    description: 'National-level Cybersecurity & AI Innovation Hackathon under the ISEA Phase-III initiative.',
    highlights: [
      'Selected as a Finalist among 300+ competing teams in the Blue Team Challenge (Document Forgery Detection).',
      'Engineered ForgeShield, a full-stack AI system featuring a 6-layer forensic analysis pipeline.',
      'Integrated Google Gemini Vision OCR, signature verification, and SHA-256 Merkle root blockchain audit trails.',
    ],
    certificate: '/iit-madras-cert.jpg',
    linkedin:
      'https://www.linkedin.com/posts/activity-7467806899111927808-Uv8v?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6B1lgBLs0M8HXew_JCb16LQOxhfGh-FcE',
  },
  {
    id: '05',
    tag: 'WEBATHON',
    title: 'Participant — WebForge Smart Campus Webathon',
    organization: 'IEEE CIS MUJ · Manipal University Jaipur',
    date: 'May 2026',
    description: 'Smart campus webathon organized by IEEE CIS MUJ at Manipal University Jaipur.',
    highlights: [
      'Architected and deployed DeskGuard, a smart library seat management system, solo in under 12 hours.',
      'Solved campus seat hoarding using real-time QR booking, automated occupancy tracking, and admin controls.',
      'Integrated a built-in Lo-Fi study music player and sleek neon UI to drive student retention.',
    ],
    certificate: '/webforge-cert.jpg',
    video: 'https://youtu.be/HmawrT7Bu8g?si=mJZCg-p-RpNxfjU6',
    linkedin:
      'https://www.linkedin.com/posts/activity-7477239105538584577-zt23?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6B1lgBLs0M8HXew_JCb16LQOxhfGh-FcE',
  },
  {
    id: '06',
    tag: 'AI CHALLENGE',
    title: 'Participant — Spooky AI (Real-Time Phishing Detection Agent)',
    organization: 'Google Gemini Live Agents Challenge · Google Cloud × Devpost',
    date: 'March 2026',
    description: 'Hackathon challenge on Devpost focused on building real-time multimodal AI agents using Gemini.',
    highlights: [
      'Architected and submitted Spooky AI, a real-time multimodal cybersecurity agent that continuously monitors screen activity to detect and intercept phishing threats.',
      'Integrated Gemini 2.5 Flash-Lite, automated PyAutoGUI screen capture, and Tesseract OCR to analyze visual context and trigger instant fullscreen alert overlays.',
      'Built interactive voice Q&A capabilities and cloud threat logging synced in real-time to a Firebase Firestore dashboard.',
    ],
    video: 'https://youtu.be/uWbJxuC943M',
    devpost: 'https://share.google/l6LNxiuy9AvKGZQrF',
  },
];

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements__content container">
        {/* Editorial Header */}
        <div className="achievements__header reveal">
          <span className="achievements__label">MILESTONES & HONORS</span>
          <h2 className="achievements__heading">Achievements</h2>
        </div>

        {/* Horizontal Timeline Rows */}
        <div className="achievements__list">
          {achievements.map((item) => (
            <div className="achievements__row reveal" key={item.id}>
              {/* 1. Left Index */}
              <div className="achievements__row-number">{item.id}</div>

              {/* 2. Main Editorial Content */}
              <div className="achievements__row-main">
                <div className="achievements__meta-row">
                  <span className="achievements__badge">{item.tag || 'HONOR'}</span>
                  <span className="achievements__row-date">{item.date}</span>
                </div>

                <h3 className="achievements__row-title">{item.title}</h3>

                {item.description && (
                  <p className="achievements__row-desc">{item.description}</p>
                )}

                {item.highlights && (
                  <ul className="achievements__row-highlights">
                    {item.highlights.map((point, idx) => (
                      <li key={idx} className="achievements__row-highlight-item">
                        <span className="achievements__dot">·</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Action Links */}
                <div className="achievements__row-links">
                  {item.certificate && (
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievements__link-btn"
                    >
                      VIEW CERTIFICATE <span>↗</span>
                    </a>
                  )}
                  {item.devpost && (
                    <a
                      href={item.devpost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievements__link-btn"
                    >
                      DEVPOST SUBMISSION <span>↗</span>
                    </a>
                  )}
                  {item.video && (
                    <a
                      href={item.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievements__link-btn"
                    >
                      WATCH DEMO <span>↗</span>
                    </a>
                  )}
                  {item.linkedin && (
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievements__link-btn"
                    >
                      LINKEDIN STORY <span>↗</span>
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

export default Achievements;
