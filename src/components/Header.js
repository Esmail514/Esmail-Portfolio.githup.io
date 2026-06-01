'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
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
    <header>
      <div className="container">
        <h1>
          EsmailAli<span className="accent">.dev</span>
        </h1>
        <nav id="nav" className={isMenuOpen ? 'active' : ''}>
          <a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')}>Home</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a>
          <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>Skills</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
        </nav>
        <button className="menu-toggle" id="menuToggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>
    </header>
  );
}
