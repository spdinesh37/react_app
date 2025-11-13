import { useState, useEffect } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState({});
  const [expandedCard, setExpandedCard] = useState(null);
  const uablogo = process.env.PUBLIC_URL + '/uab.png';
  const epamlogo = process.env.PUBLIC_URL + '/epamlogo.png';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.experience-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 'exp-1',
      logo: uablogo,
      link: "https://www.uab.edu/home/",
      position: "Graduate Assistant (Digitalization Lab)",
      employer: "University of Alabama, Birmingham",
      duration: "Apr 2024 - Present",
      description: "Working on Digital Preservation of historical records using Python Scripts from different universities and facilitating those records for future research across USA.",
      tech: ["Python", "Tkinter", "Adobe", "AWS"],
      color: '#00703C',
      isPresent: true,
    },
    {
      id: 'exp-2',
      logo: epamlogo,
      link: "https://www.epam.com/",
      position: "Java Backend Developer",
      employer: "EPAM Systems",
      duration: "Jan 2022 – July 2024",
      description: "Led backend optimization initiatives that enhanced system performance and data accessibility across enterprise applications. Refined database queries and execution strategies, resulting in a 30% increase in API throughput and a 30% reduction in response times, significantly improving employee data retrieval efficiency. Diagnosed and resolved over 60 bugs across multiple projects, reducing critical issues by 25% and boosting overall system stability and user satisfaction. Automated CI/CD workflows to streamline deployment processes, achieving a 20% reduction in deployment times and enhancing delivery accuracy.",
      tech: ["Java", "Spring Boot", "MySQL", "REST APIs", "CI/CD"],
      color: '#0066CC',
    },
    {
      id: 'exp-3',
      logo: epamlogo,
      link: "https://www.epam.com/",
      position: "Software Engineer Intern",
      employer: "EPAM Systems",
      duration: "Jan 2022 - June 2022",
      description: "Developed secure RESTful web services using Spring Boot and Spring MVC, enhancing backend communication and data flow. Integrated Spring Security with advanced authentication techniques, ensuring zero security breaches during the internship period. Wrote unit tests using JUnit and Mockito, reducing code defects by 15% and improving API reliability. Gained hands-on experience in backend development by combining Spring frameworks with database tools for efficient data processing.",
      tech: ["Java", "Spring Boot", "JUnit", "Mockito", "Spring Security"],
      color: '#0066CC',
    }
  ];

  return (
    <div style={{ padding: '2rem 0' }}>
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .experience-card {
          opacity: 0;
        }
        .experience-card.visible {
          animation: slideInUp 0.6s ease forwards;
        }
        .exp-card-hover {
          transition: all 0.3s ease;
        }
        .exp-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15) !important;
        }
        .tech-badge {
          transition: all 0.2s ease;
        }
        .tech-badge:hover {
          transform: translateY(-2px);
        }
        .expand-btn {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .expand-btn:hover {
          background: rgba(0,0,0,0.05);
        }
      `}</style>

      <div className="container">
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(2rem, 5vw, 2.5rem)',
          fontWeight: 'bold',
          marginBottom: '2.5rem',
          background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          💼 Professional Experience
        </h2>

        <div className="row g-4">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="col-12" id={exp.id}>
              <div 
                className={`experience-card exp-card-hover ${isVisible[exp.id] ? 'visible' : ''}`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div style={{
                  background: 'white',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: `2px solid ${exp.color}20`,
                  borderLeft: `5px solid ${exp.color}`,
                }}>
                  {/* Header */}
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0 }}>
                      <img
                        src={exp.logo}
                        alt={exp.employer}
                        style={{
                          width: '70px',
                          height: '70px',
                          objectFit: 'contain',
                          borderRadius: '0.5rem',
                          padding: '0.5rem',
                          background: 'white',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        }}
                      />
                    </a>
                    <div style={{ flex: 1 }}>
                      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                        <div>
                          <h5 style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                            fontWeight: 'bold',
                            color: exp.color,
                            marginBottom: '0.3rem',
                          }}>
                            {exp.position}
                          </h5>
                          <h6 style={{
                            fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                            color: '#6b7280',
                            marginBottom: '0.3rem',
                            fontWeight: '600',
                          }}>
                            {exp.employer}
                          </h6>
                          <p style={{
                            fontSize: '0.9rem',
                            color: '#9ca3af',
                            margin: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                          }}>
                            {exp.isPresent && <span style={{
                              display: 'inline-block',
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: '#10b981',
                              animation: 'pulse 2s ease-in-out infinite',
                            }} />}
                            📅 {exp.duration}
                          </p>
                        </div>
                        {exp.isPresent && (
                          <span style={{
                            padding: '0.4rem 0.8rem',
                            borderRadius: '0.5rem',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            background: 'linear-gradient(135deg, #10b981, #34d399)',
                            color: 'white',
                            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)',
                          }}>
                            ⚡ CURRENT
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div style={{ 
                    maxHeight: expandedCard === exp.id ? '1000px' : '80px',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease',
                    marginBottom: '1rem',
                  }}>
                    <p style={{
                      fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                      lineHeight: '1.7',
                      color: '#4b5563',
                      margin: 0,
                    }}>
                      {exp.description}
                    </p>
                  </div>

                  {/* Expand/Collapse Button */}
                  {exp.description.length > 150 && (
                    <button
                      onClick={() => setExpandedCard(expandedCard === exp.id ? null : exp.id)}
                      className="expand-btn"
                      style={{
                        border: 'none',
                        background: 'none',
                        color: exp.color,
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      {expandedCard === exp.id ? '📖 Show Less' : '📖 Read More'}
                    </button>
                  )}

                  {/* Tech Stack */}
                  <div>
                    <p style={{
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#6b7280',
                      marginBottom: '0.5rem',
                    }}>
                      🛠️ Technologies:
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {exp.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="tech-badge"
                          style={{
                            fontSize: '0.85rem',
                            padding: '0.4rem 0.9rem',
                            background: `${exp.color}15`,
                            color: exp.color,
                            borderRadius: '0.5rem',
                            border: `1px solid ${exp.color}30`,
                            fontWeight: '600',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;