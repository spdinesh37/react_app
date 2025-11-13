import { useState, useEffect } from 'react';

const Education = () => {
  const [isVisible, setIsVisible] = useState({});
  const uablogo = process.env.PUBLIC_URL + '/uab.png';
  const vvitlogo = process.env.PUBLIC_URL + '/vvit_logo.svg';

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

    document.querySelectorAll('.education-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      id: 'uab',
      logo: uablogo,
      degree: "Master's in Computer Science",
      institution: 'University of Alabama, Birmingham',
      period: 'August 2024 – May 2025',
      link: 'https://www.uab.edu/home/',
      coursework: 'Advance Algorithms, Database Systems, Machine Learning, Deep Learning, Data Mining, Foundation of Data Science, Probability & Statistics',
      color: '#00703C',
    },
    {
      id: 'vvit',
      logo: vvitlogo,
      degree: "Bachelor's in Computer Science and Engineering",
      institution: 'Vasireddy Venkatadri Institute of Technology, Guntur',
      period: 'June 2018 – May 2022',
      link: 'https://www.vvitguntur.com/',
      coursework: 'C Programming, Data Structures, Object Oriented Programming, Database Management Systems, Unix & Shell Programming, Operating Systems, Probability & Statistics, Web Technologies, Data Warehousing & Data Mining, Software Engineering, Design Patterns, Data Science & Analytics, Python Programming',
      color: '#1e40af',
    },
  ];

  return (
    <div style={{ padding: '3rem 1rem', position: 'relative' }}>
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        .education-card {
          opacity: 0;
          transition: all 0.5s ease;
        }
        .education-card.visible {
          opacity: 1;
        }
        .education-card.visible.slide-left {
          animation: slideInLeft 0.8s ease forwards;
        }
        .education-card.visible.slide-right {
          animation: slideInRight 0.8s ease forwards;
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
        }
        .logo-wrapper {
          transition: all 0.3s ease;
        }
        .logo-wrapper:hover {
          transform: scale(1.1) rotate(5deg);
        }
        .timeline-dot {
          animation: pulse 2s ease-in-out infinite;
        }
        .coursework-tag {
          transition: all 0.2s ease;
        }
        .coursework-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
      `}</style>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 'bold',
          marginBottom: '3rem',
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          🎓 Education
        </h2>

        <div style={{ position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '4px',
            height: '100%',
            background: 'linear-gradient(180deg, #6366f1, #a855f7)',
            display: window.innerWidth >= 768 ? 'block' : 'none',
          }} />

          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              id={edu.id}
              className={`education-card ${isVisible[edu.id] ? `visible ${index % 2 === 0 ? 'slide-left' : 'slide-right'}` : ''}`}
              style={{
                marginBottom: '4rem',
                position: 'relative',
              }}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot" style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: edu.color,
                border: '4px solid white',
                boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.2)',
                zIndex: 2,
                display: window.innerWidth >= 768 ? 'block' : 'none',
              }} />

              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth >= 768 ? (index % 2 === 0 ? '1fr 60px 1fr' : '1fr 60px 1fr') : '1fr',
                gap: '2rem',
                alignItems: 'center',
              }}>
                {/* Card */}
                <div style={{
                  gridColumn: window.innerWidth >= 768 ? (index % 2 === 0 ? '1' : '3') : '1',
                }}>
                  <div className="card-hover" style={{
                    background: 'white',
                    borderRadius: '1rem',
                    padding: '2rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    border: `2px solid ${edu.color}20`,
                  }}>
                    {/* Logo and Header */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '1.5rem' }}>
                      <a href={edu.link} target="_blank" rel="noopener noreferrer" className="logo-wrapper" style={{ flexShrink: 0 }}>
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'contain',
                            borderRadius: '0.5rem',
                            padding: '0.5rem',
                            background: 'white',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          }}
                        />
                      </a>
                      <div style={{ flex: 1 }}>
                        <h5 style={{
                          fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                          fontWeight: 'bold',
                          color: edu.color,
                          marginBottom: '0.5rem',
                        }}>
                          {edu.degree}
                        </h5>
                        <h6 style={{
                          fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                          color: '#6b7280',
                          marginBottom: '0.5rem',
                          fontWeight: '600',
                        }}>
                          {edu.institution}
                        </h6>
                        <p style={{
                          fontSize: '0.95rem',
                          color: '#9ca3af',
                          margin: 0,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}>
                          📅 {edu.period}
                        </p>
                      </div>
                    </div>

                    {/* Coursework */}
                    <div>
                      <p style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#374151',
                        marginBottom: '0.75rem',
                      }}>
                        📚 Course Work:
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {edu.coursework.split(', ').map((course, idx) => (
                          <span
                            key={idx}
                            className="coursework-tag"
                            style={{
                              fontSize: '0.85rem',
                              padding: '0.4rem 0.8rem',
                              background: `${edu.color}15`,
                              color: edu.color,
                              borderRadius: '0.5rem',
                              border: `1px solid ${edu.color}30`,
                              fontWeight: '500',
                            }}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for timeline */}
                {window.innerWidth >= 768 && <div style={{ gridColumn: '2' }} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;