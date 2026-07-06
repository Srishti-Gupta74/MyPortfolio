import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container">
        <div className="navbar__links" id="navbar-links">
          <a href="#home" className="navbar__link">Home</a>
          <a href="#about" className="navbar__link">About</a>
          <a href="#skills" className="navbar__link">Skills</a>
          <a href="#projects" className="navbar__link">Projects</a>
          <a href="#contact" className="navbar__cta" id="navbar-cta">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
