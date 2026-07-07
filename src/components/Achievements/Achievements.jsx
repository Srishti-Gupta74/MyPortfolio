import './Achievements.css';

const achievements = [
  {
    id: '01',
    title: 'Rank 42 — Confluence 2.0 International Innovation Hackathon',
    organization: 'SRMIST (The Helper) · Cybersecurity & Threat Intelligence',
    date: 'June 2026',
    description:
      'Competed among 2,500+ participants and 500+ teams in an intense 81-hour international hackathon sprint. Advanced through 3 highly competitive elimination rounds of prototype pitching and feedback, securing Rank 42 (Top 100 Participant) for building CyberSiksha.',
    certificate: '/confluence-cert.jpg',
    linkedin: 'https://lnkd.in/p/dTc2tQJj',
  },
  {
    id: '02',
    title: 'Finalist — National Secure AI Software & Systems Hackathon',
    organization: 'IIT Madras × BITS Goa (ISEA Phase-III) · Blue Team Challenge',
    date: 'July 2026',
    description:
      'Selected as a Finalist among 300+ teams at a National-level Cybersecurity & AI Innovation Hackathon. Engineered ForgeShield, an AI-powered document forgery detection system featuring a 6-layer forensic analysis pipeline with Gemini Vision and SHA-256 Merkle root audit trails.',
    certificate: '/iit-madras-cert.jpg',
    linkedin:
      'https://www.linkedin.com/posts/activity-7467806899111927808-Uv8v?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6B1lgBLs0M8HXew_JCb16LQOxhfGh-FcE',
  },
  {
    id: '03',
    title: 'Participant — WebForge Smart Campus Webathon',
    organization: 'IEEE CIS MUJ · Manipal University Jaipur (Unstop)',
    date: 'May 2026',
    description:
      'Competed solo to architect and deploy DeskGuard, a smart library seat management system, from scratch in under 12 hours. Focused on high user retention and solving campus seat hoarding with real-time QR booking and an integrated study companion.',
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

              <p className="achievements__description">{item.description}</p>

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
