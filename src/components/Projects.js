'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExternalLinkAlt, 
  faEye, 
  faLock, 
  faTimes, 
  faInfoCircle, 
  faCogs, 
  faCheck 
} from '@fortawesome/free-solid-svg-icons';
import useInView from '@/hooks/useInView';

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [activeModal, setActiveModal] = useState(null);

  const projectsData = [
    {
      id: 'alwahbani',
      title: 'Alwahbani.com - Arduino Store',
      shortDesc: 'Integrated e-commerce store for selling Arduino parts and electronics, equipped with a product management system, shopping cart, and secure payment processing.',
      desc: 'An integrated commercial website for Alwahbani Company specializing in selling Arduino parts and electronic components. The site contains a complete content management system, order system, and integration with payment systems.',
      tech: ['Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS'],
      techBadges: ['Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript', 'REST API'],
      image: '/imgs/AlwahbaniWebPhoto.png',
      url: 'https://alwahbani.com',
      published: true,
      previewUrl: 'https://alwahbani.com',
      features: [
        'Integrated product management system',
        'Shopping cart and easy payment',
        'Admin control panel',
        'Responsive design for all devices',
        'Customer rating and review system'
      ]
    },
    {
      id: 'nu3eed',
      title: 'Nu3eed Recycling app - IoT System',
      shortDesc: 'Recycling app combining technology and environment. Uses C++ and Arduino for smart recycling devices.',
      desc: 'Recycling app combining technology and environment. Uses C++ and Arduino for smart recycling devices. The system incentivizes users to recycle by offering rewards and tracking their environmental impact.',
      tech: ['Laravel', 'Tailwind CSS', 'SQL', 'JS', 'C++', 'Arduino'],
      techBadges: ['Laravel', 'Tailwind CSS', 'MySQL', 'JavaScript', 'C++', 'Arduino'],
      image: '/imgs/Nu3eedAppPhoto.png',
      url: null,
      published: false,
      previewUrl: 'app://nu3eed-recycling',
      features: [
        'IoT-enabled smart bins',
        'Real-time tracking of recyclable materials',
        'User reward system',
        'Environmental impact dashboard'
      ]
    },
    {
      id: 'media-composer',
      title: 'Media Composer App',
      shortDesc: 'A powerful media composition and editing application for creating professional-grade video and audio content.',
      desc: 'A feature-rich media composer application that enables users to edit, mix, and produce professional video and audio content directly from their device. Includes multi-track timeline editing, effects library, and seamless export options.',
      tech: ['Flutter', 'Dart', 'FFmpeg'],
      techBadges: ['Flutter', 'Dart', 'FFmpeg', 'Video Processing', 'Audio Mixing'],
      image: '/imgs/shrinkly.png',
      url: 'https://play.google.com/store/apps/details?id=com.somah.shrinkly.shrinkly',
      published: true,
      previewUrl: 'https://play.google.com/store/apps/details?id=com.somah.shrinkly.shrinkly',
      features: [
        'Multi-track timeline editing',
        'Video and audio effects library',
        'Real-time preview and playback',
        'Export in multiple formats and resolutions'
      ]
    }
  ];

  const openModal = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveModal(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeProject = projectsData.find(p => p.id === activeModal);

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div className={`section-title-center reveal ${inView ? 'active' : ''}`}>
          <h3>My Projects</h3>
        </div>
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div 
              key={project.id} 
              className={`project reveal delay-${idx + 1} ${inView ? 'active' : ''}`}
              onClick={(e) => openModal(e, project.id)}
            >
              <div className="project-image">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={400}
                  height={250}
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="project-content">
                <h4>{project.title}</h4>
                <p>{project.shortDesc}</p>
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.published ? (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="view-website"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> Visit
                    </a>
                  ) : (
                    <span 
                      className="view-website" 
                      style={{ background: 'var(--gray)', borderColor: 'var(--gray)', cursor: 'not-allowed', color: 'var(--dark)' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FontAwesomeIcon icon={faLock} /> Not Published
                    </span>
                  )}
                  <a 
                    href="#" 
                    className="preview-project"
                    onClick={(e) => openModal(e, project.id)}
                  >
                    <FontAwesomeIcon icon={faEye} /> Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessibile centered React Modal */}
      {activeModal && activeProject && (
        <div className="project-modal" role="dialog" aria-modal="true">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-container">
            <div className="modal-header">
              <h3>{activeProject.title} - Project Preview</h3>
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="modal-content">
              <div className="website-preview">
                <div className="preview-header">
                  <div className="browser-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="preview-url">{activeProject.previewUrl}</div>
                </div>
                <div className="preview-frame">
                  <Image 
                    src={activeProject.image} 
                    alt={activeProject.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="website-screenshot"
                  />
                  <div className="preview-overlay">
                    {activeProject.published ? (
                      <a 
                        href={activeProject.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} /> Visit Website Directly
                      </a>
                    ) : (
                      <span className="btn btn-primary" style={{ cursor: 'default' }}>
                        <FontAwesomeIcon icon={faLock} /> Not Published
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-details">
                <div className="detail-section">
                  <h4><FontAwesomeIcon icon={faInfoCircle} /> Project Description</h4>
                  <p>{activeProject.desc}</p>
                </div>
                <div className="detail-section">
                  <h4><FontAwesomeIcon icon={faCogs} /> Technologies Used</h4>
                  <div className="tech-stack">
                    {activeProject.techBadges.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="detail-section">
                  <h4><FontAwesomeIcon icon={faCheck} /> Features</h4>
                  <ul className="features-list">
                    {activeProject.features.map((feat, i) => (
                      <li key={i}>
                        <FontAwesomeIcon icon={faCheck} /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
