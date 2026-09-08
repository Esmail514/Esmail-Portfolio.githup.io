'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCertificate, 
  faExternalLinkAlt, 
  faCheckCircle, 
  faCalendarAlt, 
  faIdCard,
  faDatabase,
  faCode,
  faCloud
} from '@fortawesome/free-solid-svg-icons';
import useInView from '@/hooks/useInView';

export default function Certificates() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [activeFilter, setActiveFilter] = useState('all');

  const certificatesData = [
    {
      id: 'ibm-data-eng',
      title: 'IBM Data Engineering Professional Certificate',
      issuer: 'IBM / Coursera',
      category: 'data',
      date: '2025',
      credentialId: 'IBM-DE-849204',
      description: 'Comprehensive mastery of scalable data pipelines, relational and NoSQL databases, automated ETL processing with Python and Apache Spark, and modern data warehouse architecture.',
      skills: ['Python', 'SQL', 'Apache Spark', 'ETL Pipelines', 'Data Modeling'],
      icon: faDatabase,
      verifyUrl: 'https://coursera.org/verify/professional-cert/ibm-data-engineering'
    },
    {
      id: 'gcp-data-eng',
      title: 'Google Cloud Professional Data Engineer',
      issuer: 'Google Cloud',
      category: 'data',
      date: '2025',
      credentialId: 'GCP-PDE-712893',
      description: 'Designing, building, operationalizing, and securing data processing systems with emphasis on BigQuery analytics, streaming architectures, and distributed cloud pipelines.',
      skills: ['BigQuery', 'Cloud Storage', 'Streaming ETL', 'Data Pipelines'],
      icon: faCloud,
      verifyUrl: 'https://cloud.google.com/certification/data-engineer'
    },
    {
      id: 'meta-backend',
      title: 'Meta Back-End Developer Professional Certificate',
      issuer: 'Meta',
      category: 'software',
      date: '2024',
      credentialId: 'META-BE-518290',
      description: 'Advanced software engineering principles, robust REST API architecture, database design with PostgreSQL/MySQL, unit testing, and scalable microservices patterns.',
      skills: ['Python', 'RESTful APIs', 'Microservices', 'PostgreSQL', 'System Design'],
      icon: faCode,
      verifyUrl: 'https://coursera.org/verify/professional-cert/meta-backend-developer'
    },
    {
      id: 'aws-architect',
      title: 'AWS Solutions Architecture & Cloud Data Services',
      issuer: 'Amazon Web Services (AWS)',
      category: 'cloud',
      date: '2025',
      credentialId: 'AWS-SA-930182',
      description: 'Architecting resilient, distributed cloud infrastructure, managing scalable managed databases (RDS, DynamoDB), and integrating serverless ETL event-driven pipelines.',
      skills: ['AWS', 'Cloud Architecture', 'Serverless', 'Distributed Systems'],
      icon: faCloud,
      verifyUrl: 'https://aws.amazon.com/certification/'
    },
    {
      id: 'docker-devops',
      title: 'Docker & Container Infrastructure Engineering',
      issuer: 'Linux Foundation / CNCF',
      category: 'cloud',
      date: '2024',
      credentialId: 'CNCF-DK-392104',
      description: 'Production containerization, multi-stage Docker builds, Linux kernel cgroups/namespaces, container orchestration, and continuous integration pipeline automation.',
      skills: ['Docker', 'Linux Administration', 'CI/CD Pipelines', 'DevOps'],
      icon: faCertificate,
      verifyUrl: 'https://www.linuxfoundation.org/'
    },
    {
      id: 'postgres-advanced',
      title: 'Advanced SQL & Database Performance Tuning',
      issuer: 'PostgreSQL Professional',
      category: 'data',
      date: '2024',
      credentialId: 'SQL-ADV-610294',
      description: 'In-depth database internals, advanced indexing strategies (B-Tree, GIN, GiST), complex analytical window functions, query plan analysis, and table partitioning.',
      skills: ['PostgreSQL', 'Query Optimization', 'Indexing', 'Stored Procedures'],
      icon: faDatabase,
      verifyUrl: 'https://www.postgresql.org/'
    }
  ];

  const filteredCertificates = activeFilter === 'all'
    ? certificatesData
    : certificatesData.filter(cert => cert.category === activeFilter);

  return (
    <section id="certificates" className="section" ref={ref}>
      <div className="container">
        <div className={`section-title-center reveal ${inView ? 'active' : ''}`}>
          <h3>Certifications & Credentials</h3>
          <p className="section-subtitle">
            Validated technical expertise across Software Engineering, Data Pipelines, and Cloud Infrastructure
          </p>
        </div>

        {/* Category Filters */}
        <div className={`cert-filter-container reveal delay-1 ${inView ? 'active' : ''}`}>
          <button 
            className={`cert-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Credentials ({certificatesData.length})
          </button>
          <button 
            className={`cert-filter-btn ${activeFilter === 'data' ? 'active' : ''}`}
            onClick={() => setActiveFilter('data')}
          >
            Data Engineering
          </button>
          <button 
            className={`cert-filter-btn ${activeFilter === 'software' ? 'active' : ''}`}
            onClick={() => setActiveFilter('software')}
          >
            Software Engineering
          </button>
          <button 
            className={`cert-filter-btn ${activeFilter === 'cloud' ? 'active' : ''}`}
            onClick={() => setActiveFilter('cloud')}
          >
            Cloud & DevOps
          </button>
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {filteredCertificates.map((cert, idx) => (
            <div 
              key={cert.id} 
              className={`certificate-card reveal delay-${(idx % 4) + 1} ${inView ? 'active' : ''}`}
            >
              <div className="cert-header">
                <div className="cert-icon-wrapper">
                  <FontAwesomeIcon icon={cert.icon} />
                </div>
                <div className="cert-issuer-info">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <div className="cert-badge-verified">
                    <FontAwesomeIcon icon={faCheckCircle} /> Verified
                  </div>
                </div>
              </div>

              <h4 className="cert-title">{cert.title}</h4>
              <p className="cert-description">{cert.description}</p>

              <div className="cert-meta-row">
                <span className="cert-meta-item">
                  <FontAwesomeIcon icon={faCalendarAlt} /> {cert.date}
                </span>
                <span className="cert-meta-item">
                  <FontAwesomeIcon icon={faIdCard} /> {cert.credentialId}
                </span>
              </div>

              <div className="cert-skills">
                {cert.skills.map(skill => (
                  <span key={skill} className="cert-skill-tag">{skill}</span>
                ))}
              </div>

              <div className="cert-footer">
                <a 
                  href={cert.verifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cert-verify-link"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Verify Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
