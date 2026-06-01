'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(2026); // Default fallback

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 72; // Header height offset
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            EsmailAli<span className="accent">.dev</span>
          </div>
          <div className="footer-links">
            <a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')}>Home</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a>
            <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>Skills</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
          </div>
          <div className="copyright">
            &copy; {year} Esmail Ali. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
