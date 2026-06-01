'use client';

import Image from 'next/image';
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
              I am a passionate Information Technology student specializing in
              web development and system architecture. With 3 years of hands-on
              experience, I've developed a strong foundation in creating
              responsive, user-friendly applications.
            </p>
            <p>
              My approach combines technical expertise with creative
              problem-solving to deliver solutions that meet both business
              requirements and user needs. I'm constantly exploring new
              technologies to expand my skill set.
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
            <Image 
              src="/imgs/Esmail.jpg" 
              alt="About Esmail Ali" 
              width={600} 
              height={600}
              priority={false}
              loading="lazy"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
