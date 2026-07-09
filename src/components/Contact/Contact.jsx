import './Contact.css';

const Contact = () => {
  return (
    <footer className="contact" id="contact">
      <div className="contact__content container">
        {/* Dark Card */}
        <div className="contact__card reveal">
          <div className="contact__card-inner">
            <h2 className="contact__heading">
              Let&apos;s create something meaningful.
            </h2>
            <p className="contact__description">
              Open to opportunities where design excellence and technical
              rigor come together, always happy to collaborate.
            </p>
            <a
              href="mailto:srishti7341gupta.74sg@gmail.com"
              className="contact__email"
            >
              srishti7341gupta.74sg@gmail.com
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="contact__bottom reveal reveal--delay-1">
          <p className="contact__copyright">
            &copy; {new Date().getFullYear()} Srishti Suman Gupta
          </p>
          <div className="contact__links">
            <a
              href="https://www.linkedin.com/in/srishti-suman-g-820005383"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Srishti-Gupta74"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
