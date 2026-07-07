import './Certifications.css';

const certifications = [
  {
    id: '01',
    title: 'Google AI Essentials Specialization',
    issuer: 'Google',
    date: 'Issued Aug 2025',
    credentialId: '8MBMWY1XTU3H',
    skills: ['Artificial Intelligence (AI)', 'Prompt Engineering', 'AI Productivity Tools', 'Engineering'],
    fileLink: '/google-ai-essentials.pdf',
  },
  {
    id: '02',
    title: 'Google Cybersecurity Specialization',
    issuer: 'Google',
    date: 'Issued Dec 2025',
    credentialId: 'TW4VLROALF6E',
    skills: ['Network Security', 'Linux & SQL', 'SIEM & IDS', 'Incident Response', 'Python'],
    fileLink: '/google-cybersecurity.pdf',
  },
  {
    id: '03',
    title: 'Generative AI Mastermind',
    issuer: 'Outskill',
    date: 'Issued Oct 2025',
    credentialId: 'OUTSKILL-GENAI',
    skills: ['Generative AI', 'LLM Applications', 'Time Management', 'AI Workflow Automation'],
    fileLink: '/outskill-genai.pdf',
  },
  {
    id: '04',
    title: 'Cyber Security 101 Certificate',
    issuer: 'TryHackMe',
    date: 'Issued Jul 2026 · Expires Jul 2029',
    credentialId: 'THM-X4JECDF4HW',
    skills: ['Offensive Security', 'Penetration Testing', 'Web Security', 'Network Protocols'],
    fileLink: '/tryhackme-cybersecurity101.pdf',
  },
];

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <div className="certifications__content container">
        {/* Header */}
        <div className="certifications__header reveal">
          <h2 className="certifications__heading">Certifications</h2>
          <p className="certifications__label">Professional Credentials & Specializations</p>
        </div>

        {/* Grid */}
        <div className="certifications__grid">
          {certifications.map((cert) => (
            <div className="certifications__card reveal" key={cert.id}>
              {/* Top Meta */}
              <div className="certifications__top">
                <span className="certifications__issuer">{cert.issuer}</span>
                <span className="certifications__date">{cert.date}</span>
              </div>

              {/* Title */}
              <h3 className="certifications__title">{cert.title}</h3>

              {/* Credential ID Pill */}
              {cert.credentialId && (
                <div className="certifications__id-wrapper">
                  <span className="certifications__id-label">ID:</span>
                  <code className="certifications__id-code">{cert.credentialId}</code>
                </div>
              )}

              {/* Skills Tags */}
              <div className="certifications__skills">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="certifications__skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <div className="certifications__footer">
                <a
                  href={cert.fileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certifications__link"
                >
                  View Credential PDF ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
