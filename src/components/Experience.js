import { useState, useEffect } from 'react';

const Experience = () => {
  const [flipped, setFlipped] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const uablogo = process.env.PUBLIC_URL + '/uab.png';
  const epamlogo = process.env.PUBLIC_URL + '/epamlogo.png';

  useEffect(() => {
    setIsVisible(true);
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
      gradient: 'linear-gradient(135deg, #00703C, #10b981)',
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
      gradient: 'linear-gradient(135deg, #0066CC, #0ea5e9)',
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
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    }
  ];

  const toggleFlip = (id) => {
    setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ padding: '3rem 1rem', background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)' }}>
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes rotateY {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        .exp-container {
          opacity: 0;
          animation: fadeInScale 0.8s ease forwards;
        }
        .flip-card {
          perspective: 1000px;
          height: 100%;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
        .exp-card {
          transition: all 0.3s ease;
          cursor: pointer;
          height: 100%;
          min-height: 400px;
        }
        .exp-card:hover {
          transform: translateY(-5px);
        }
        .badge-3d {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .badge-3d:hover {
          transform: scale(1.1) rotateZ(-5deg);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        .logo-rotate:hover {
          animation: rotateY 1s ease;
        }
        .floating-card {
          animation: float 3s ease-in-out infinite;
        }
        .present-badge {
          animation: shimmer 3s linear infinite;
          background: linear-gradient(90deg, #10b981 0%, #34d399 50%, #10b981 100%);
          background-size: 1000px 100%;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          💼 Professional Experience
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#6b7280',
          fontSize: '1.1rem',
          marginBottom: '3rem',
        }}>
          Click cards to see more details
        </p>

        <div className={isVisible ? 'exp-container' : ''} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          animationDelay: '0.2s',
        }}>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`flip-card ${flipped[exp.id] ? 'flipped' : ''} ${index === 0 ? 'floating-card' : ''}`}
              onClick={() => toggleFlip(exp.id)}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="flip-card-inner">
                {/* FRONT SIDE */}
                <div className="flip-card-front">
                  <div className="exp-card" style={{
                    background: 'white',
                    borderRadius: '1rem',
                    padding: '2rem',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                    border: `3px solid ${exp.color}20`,
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Background Pattern */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '150px',
                      height: '150px',
                      background: exp.gradient,
                      opacity: 0.1,
                      borderRadius: '0 1rem 0 100%',
                    }} />

                    {/* Present Badge */}
                    {exp.isPresent && (
                      <div className="present-badge" style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        color: 'white',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)',
                      }}>
                        ⚡ CURRENT
                      </div>
                    )}

                    {/* Logo */}
                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="logo-rotate" 
                        onClick={(e) => e.stopPropagation()}>
                        <div style={{
                          width: '100px',
                          height: '100px',
                          margin: '0 auto',
                          padding: '1rem',
                          background: 'white',
                          borderRadius: '1rem',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: `2px solid ${exp.color}30`,
                        }}>
                          <img src={exp.logo} alt={exp.employer} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                      </a>
                    </div>

                    {/* Content */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <h5 style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                        fontWeight: 'bold',
                        color: exp.color,
                        marginBottom: '0.5rem',
                        textAlign: 'center',
                      }}>
                        {exp.position}
                      </h5>
                      <h6 style={{
                        fontSize: '1rem',
                        color: '#6b7280',
                        marginBottom: '0.5rem',
                        textAlign: 'center',
                        fontWeight: '600',
                      }}>
                        {exp.employer}
                      </h6>
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#9ca3af',
                        textAlign: 'center',
                        marginBottom: '1.5rem',
                      }}>
                        📅 {exp.duration}
                      </p>

                      {/* Tech Preview */}
                      <div style={{
                        background: `${exp.color}08`,
                        borderRadius: '0.75rem',
                        padding: '1rem',
                        border: `1px solid ${exp.color}20`,
                      }}>
                        <p style={{
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          color: exp.color,
                          marginBottom: '0.5rem',
                          textAlign: 'center',
                        }}>
                          🛠️ Key Technologies
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center' }}>
                          {exp.tech.slice(0, 4).map((tech, idx) => (
                            <span key={idx} style={{
                              fontSize: '0.8rem',
                              padding: '0.3rem 0.7rem',
                              background: exp.gradient,
                              color: 'white',
                              borderRadius: '0.4rem',
                              fontWeight: '600',
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p style={{
                        marginTop: '1rem',
                        fontSize: '0.85rem',
                        color: '#9ca3af',
                        textAlign: 'center',
                        fontStyle: 'italic',
                      }}>
                        👆 Click to see full details
                      </p>
                    </div>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="flip-card-back">
                  <div style={{
                    background: exp.gradient,
                    borderRadius: '1rem',
                    padding: '2rem',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                    color: 'white',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <h5 style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      textAlign: 'center',
                    }}>
                      {exp.position}
                    </h5>

                    <div style={{
                      flex: 1,
                      overflowY: 'auto',
                      marginBottom: '1rem',
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '0.75rem',
                      padding: '1rem',
                      backdropFilter: 'blur(10px)',
                    }}>
                      <p style={{
                        fontSize: '0.95rem',
                        lineHeight: '1.7',
                      }}>
                        {exp.description}
                      </p>
                    </div>

                    <div>
                      <p style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                      }}>
                        🛠️ All Technologies:
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {exp.tech.map((tech, idx) => (
                          <span key={idx} className="badge-3d" style={{
                            fontSize: '0.8rem',
                            padding: '0.4rem 0.8rem',
                            background: 'rgba(755,255,255,0.2)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '0.5rem',
                            border: '1px solid rgba(255,255,255,0.3)',
                            fontWeight: '600',
                            
                          }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p style={{
                      marginTop: '1rem',
                      fontSize: '0.85rem',
                      textAlign: 'center',
                      opacity: 0.9,
                    }}>
                      👆 Click to flip back
                    </p>
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