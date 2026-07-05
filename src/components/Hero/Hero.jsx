import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__content container">
        <div className="hero__grid">
          <div className="hero__main">
            <h1 className="hero__title" id="hero-title">
              Srishti Suman Gupta{' '}
              <span className="hero__title-accent">builds</span>{' '}
              digital craft.
            </h1>
          </div>

          <div className="hero__aside" id="about">
            <p className="hero__description" id="hero-description">
              BTech CSE '29 at Manipal University Jaipur. Passionate about
              Artificial Intelligence, Cybersecurity, Web Development, and Open
              Source — crafting secure, intelligent digital experiences that matter.
            </p>

            <div className="hero__actions" id="hero-actions">
              <a href="#projects" className="hero__btn hero__btn--primary">
                <span className="hero__btn-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
                View My Work
              </a>
              <a href="#contact" className="hero__btn hero__btn--secondary">
                <span className="hero__btn-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
