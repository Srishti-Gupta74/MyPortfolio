import './Achievements.css';

const achievements = [
  {
    id: '01',
    title: 'Rank 2 (Runner-Up) — AI for Public Good: Sustainable & Resilient Supply Chains Hackathon',
    organization: 'Indo-Swiss Research Grant · ETH Zurich × Univ. of Lausanne × IIIT Allahabad × Manipal University Jaipur',
    date: 'June 2026',
    description: 'Hackathon organized under the Indo-Swiss Research Grant in collaboration with researchers from ETH Zurich, University of Lausanne, IIIT Allahabad, Manipal University Jaipur, and WikiClub Tech.',
    highlights: [
      'Secured Rank 2 (National Runner-Up) for Problem Statement 2: Calibrated Uncertainty Quantification for Supply Chain Risk Triage.',
      'Architected SupplyShield AI, an Adaptive Conformal Risk Triage system (Gibbs & Candès ACI) designed to protect essential goods (food, medicine, emergency materials) during sudden demand shocks.',
      'Engineered calibrated confidence bounds and an automated Forecast Reliability Score (0–100) to replace static point predictions for downstream inventory directives.',
    ],
    architecture: '/supplyshield-architecture.png',
    unstop:
      'https://unstop.com/o/UNtyVfK?lb=vh1cghwj&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Srishtiz32356',
  },
  {
    id: '02',
    title: 'Rank 42 — Confluence 2.0 International Innovation Hackathon',
    organization: 'SRMIST (The Helper) · Cybersecurity & Threat Intelligence',
    date: 'June 2026',
    description: 'International innovation hackathon sprint among 2,500+ participants and 500+ teams.',
    highlights: [
      'Advanced through 3 rigorous elimination rounds of prototype pitching and real-time leaderboard evaluation.',
      'Secured Rank 42 (Top 100 Participant) out of 500+ teams by building CyberSiksha, a cybersecurity awareness and education platform designed especially for children and the elderly.',
      'Engineered bite-sized cyber lessons, gamified quizzes, a family dashboard, and AI threat simulation features in an intense 81-hour sprint.',
    ],
    certificate: '/confluence-cert.jpg',
    linkedin: 'https://lnkd.in/p/dTc2tQJj',
    video: 'https://youtu.be/osFoCaGa9Wc',
  },
  {
    id: '03',
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
    id: '04',
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
    linkedin:
      'https://www.linkedin.com/posts/activity-7477239105538584577-zt23?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6B1lgBLs0M8HXew_JCb16LQOxhfGh-FcE',
  },
];

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements__content container">
        {/* Header */}
        <div className="achievements__header reveal">
          <h2 className="achievements__heading">Achievements</h2>
          <p className="achievements__label">Milestones & Honors</p>
        </div>

        {/* List */}
        <div className="achievements__list">
          {achievements.map((item) => (
            <div className="achievements__card reveal" key={item.id}>
              {/* Giant Watermark */}
              <span className="achievements__watermark">{item.id}</span>

              <div className="achievements__top">
                <div className="achievements__meta">
                  <span className="achievements__org">{item.organization}</span>
                  <span className="achievements__date">{item.date}</span>
                </div>
                <h3 className="achievements__title">{item.title}</h3>
              </div>

              {item.description && (
                <p className="achievements__description">{item.description}</p>
              )}

              {item.highlights && (
                <ul className="achievements__highlights">
                  {item.highlights.map((point, idx) => (
                    <li key={idx} className="achievements__highlight-item">
                      <span className="achievements__bullet">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="achievements__divider"></div>

              <div className="achievements__bottom">
                <div className="achievements__links">
                  {item.certificate && (
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievements__link"
                    >
                      View Certificate <span>↗</span>
                    </a>
                  )}
                  {item.architecture && (
                    <a
                      href={item.architecture}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievements__link"
                    >
                      System Architecture <span>↗</span>
                    </a>
                  )}
                  {item.video && (
                    <a
                      href={item.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievements__link"
                    >
                      Watch Demo <span>↗</span>
                    </a>
                  )}
                  {item.unstop && (
                    <a
                      href={item.unstop}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievements__link"
                    >
                      Official Leaderboard <span>↗</span>
                    </a>
                  )}
                  {item.linkedin && (
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievements__link"
                    >
                      LinkedIn Story <span>↗</span>
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
