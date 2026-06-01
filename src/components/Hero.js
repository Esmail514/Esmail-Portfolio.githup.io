'use client';

import useInView from '@/hooks/useInView';

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true });

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 72; // Header offset
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="container">
        <div className={`hero-content reveal ${inView ? 'active' : ''}`}>
          <h2>
            Hello, I'm <span className="gradient-text">Esmail Ali</span>
          </h2>
          <p className="delay-1">
            IT Developer | Full Stack Developer | Mobile Application | Tech Enthusiast
          </p>
          <p className="delay-2">
            I build modern web applications and solve complex technical challenges
          </p>
          <div className="hero-buttons delay-3">
            <a 
              href="#projects" 
              className="btn btn-primary" 
              onClick={(e) => handleScrollTo(e, 'projects')}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline" 
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className={`hero-image reveal delay-4 animate-float ${inView ? 'active' : ''}`}>
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <path 
              fill="var(--secondary)"
              opacity="0.06"
              d="M38.4,-58.9C52.4,-52.9,67.8,-46.8,76.6,-35.1C85.4,-23.5,87.7,-6.3,86.7,11.5C85.7,29.3,81.5,47.6,70.7,57.5C59.9,67.3,42.5,68.7,26.5,69.9C10.5,71.1,-4.1,72.1,-18.3,70C-32.5,67.9,-46.4,62.7,-54.2,52.4C-62,42.1,-63.8,26.7,-66.3,10.4C-68.8,-5.9,-72,-22.9,-68.5,-37.7C-65,-52.5,-54.7,-65,-41.5,-71.4C-28.3,-77.8,-12.2,-78.1,1.3,-80.1C14.8,-82.1,29.5,-85.8,38.4,-58.9Z"
              transform="translate(250 250)" 
            />
            <circle cx="250" cy="250" r="130" fill="var(--primary)" opacity="0.15" />
            <image href="/imgs/Esmail.jpg" x="150" y="150" width="200" height="200" clipPath="circle(100px at 250 250)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
