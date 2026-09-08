'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDatabase, 
  faServer, 
  faCodeBranch, 
  faCogs 
} from '@fortawesome/free-solid-svg-icons';
import useInView from '@/hooks/useInView';

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true });

  const skillsData = [
    {
      category: 'Data Engineering',
      icon: faDatabase,
      skills: [
        { name: 'Python (Data & ETL)', level: 95 },
        { name: 'SQL & Advanced Data Modeling', level: 95 },
        { name: 'ETL Pipelines & Processing', level: 92 },
        { name: 'Data Warehousing & Analytics', level: 88 }
      ]
    },
    {
      category: 'Software & Backend',
      icon: faServer,
      skills: [
        { name: 'Python & FastAPI / REST APIs', level: 95 },
        { name: 'Laravel & PHP', level: 90 },
        { name: 'Microservices & Distributed Systems', level: 90 },
        { name: 'C++ & Low-Level Algorithms', level: 85 }
      ]
    },
    {
      category: 'Databases & Storage',
      icon: faCogs,
      skills: [
        { name: 'PostgreSQL & MySQL', level: 95 },
        { name: 'SQL Server', level: 90 },
        { name: 'Redis & In-Memory Caching', level: 88 },
        { name: 'Firebase & NoSQL', level: 88 }
      ]
    },
    {
      category: 'DevOps & Cloud',
      icon: faCodeBranch,
      skills: [
        { name: 'Docker & Containerization', level: 95 },
        { name: 'Linux Administration & Bash', level: 95 },
        { name: 'Git & Automated CI/CD', level: 95 },
        { name: 'Cloud Deployments & Infrastructure', level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <div className={`section-title-center reveal ${inView ? 'active' : ''}`}>
          <h3>Technical Skills</h3>
        </div>
        <div className="skills-container">
          {skillsData.map((cat, idx) => (
            <div 
              key={cat.category} 
              className={`skill-category reveal delay-${idx + 1} ${inView ? 'active' : ''}`}
            >
              <h4>
                <FontAwesomeIcon icon={cat.icon} /> {cat.category}
              </h4>
              <div className="skill-list">
                {cat.skills.map(skill => (
                  <div key={skill.name} className="skill-group">
                    <div className="skill-item">
                      <div className="skill-name">{skill.name}</div>
                      <div>{skill.level}%</div>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: inView ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
