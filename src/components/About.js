'use client';

import ShimmerImage from '@/components/ShimmerImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faUsers, faBook, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import useInView from '@/hooks/useInView';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className={`section-title-center reveal ${inView ? 'active' : ''}`}>
          <h3>About Me</h3>
        </div>
        <div className="about-content">
          <div className={`about-text reveal delay-1 ${inView ? 'active' : ''}`}>
            <p>
              I am a Software Engineer and Data Engineer dedicated to building high-performance backend platforms, distributed systems, and resilient data processing pipelines. With hands-on experience in software design patterns, ETL workflows, and database architecture, I bridge the gap between complex data and actionable applications.
            </p>
            <p>
              My expertise spans developing robust microservices, designing scalable SQL and NoSQL data models, and automating data pipelines with modern tools like Python, Docker, and cloud databases. I continuously learn and hold 15+ industry certifications to stay at the cutting edge of modern software and data infrastructure.
            </p>
            <div className="about-stats">
              <div className={`stat-box reveal delay-2 ${inView ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faCode} />
                <h4>3</h4>
                <p>Projects Completed</p>
              </div>
              <div className={`stat-box reveal delay-3 ${inView ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faUsers} />
                <h4>3</h4>
                <p>Happy Clients</p>
              </div>
              <div className={`stat-box reveal delay-4 ${inView ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faBook} />
                <h4>15+</h4>
                <p>Certifications</p>
              </div>
              <div className={`stat-box reveal delay-5 ${inView ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faHourglassHalf} />
                <h4>1000+</h4>
                <p>Hours Coding</p>
              </div>
            </div>
          </div>
          <div className={`about-image reveal delay-5 ${inView ? 'active' : ''}`}>
            <ShimmerImage 
              src="/imgs/Esmail.png" 
              alt="About Esmail Ali" 
              width={600} 
              height={600}
              priority={false}
              loading="lazy"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
