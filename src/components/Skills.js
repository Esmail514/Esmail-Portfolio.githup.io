'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptopCode, 
  faServer, 
  faDatabase, 
  faTools 
} from '@fortawesome/free-solid-svg-icons';
import useInView from '@/hooks/useInView';

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true });

  const skillsData = [
    {
      category: 'Frontend',
      icon: faLaptopCode,
      skills: [
        { name: 'Flutter', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 80 }
      ]
    },
    {
      category: 'Backend',
      icon: faServer,
      skills: [
        { name: 'Laravel', level: 90 },
        { name: 'Python', level: 95 }, // Fixed: Mismatch resolved to 95%
        { name: 'REST APIs', level: 90 }
      ]
    },
    {
      category: 'Database',
      icon: faDatabase,
      skills: [
        { name: 'SQL Server', level: 90 },
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 90 }, // Fixed: Typo 'PostegreSQL' fixed
        { name: 'Firebase', level: 90 }
      ]
    },
    {
      category: 'Other',
      icon: faTools,
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'Linux', level: 95 },
        { name: 'Docker', level: 95 }
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
