import { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState({});
  const [hoveredSkill, setHoveredSkill] = useState(null);

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

    document.querySelectorAll('.skill-category').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skillCategories = {
    "Languages": {
      skills: ["Python", "Java", "C", "SQL"],
      icon: "💻",
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)"
    },
    "Web Technologies": {
      skills: ["HTML", "CSS", "Bootstrap", "React", "Flask", "FastAPI"],
      icon: "🌐",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #059669)"
    },
    "Big Data": {
      skills: ["ETL pipelines", "PySpark", "Kafka", "Hadoop", "Airflow"],
      icon: "📊",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)"
    },
    "AI & ML": {
      skills: ["Numpy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "PyTorch"],
      icon: "🤖",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)"
    },
    "Cloud & DevOps": {
      skills: ["GCP", "AWS", "Git", "GitHub", "Linux", "Docker", "Kubernetes"],
      icon: "☁️",
      color: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899, #db2777)"
    },
    "Other Skills": {
      skills: ["Excel", "Spreadsheets", "Power BI", "Data Curation", "Data Ingestion"],
      icon: "🛠️",
      color: "#06b6d4",
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)"
    }
  };

  return (
    <div style={{ padding: '3rem 1rem', background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.5); }
          50% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.5); }
          50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.8); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .skill-category {
          opacity: 0;
        }
        .skill-category.visible {
          animation: fadeInUp 0.6s ease forwards;
        }
        .skill-badge {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .skill-badge::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        .skill-badge:hover::before {
          width: 300px;
          height: 300px;
        }
        .skill-badge:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        .skill-badge:active {
          transform: translateY(-2px) scale(0.98);
        }
        .category-card {
          transition: all 0.3s ease;
        }
        .category-card:hover {
          transform: translateY(-8px);
        }
        .category-icon {
          transition: all 0.3s ease;
        }
        .category-card:hover .category-icon {
          animation: wiggle 0.5s ease;
        }
        .stat-number {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            🚀 Skill Set
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            A comprehensive collection of technologies and tools I work with
          </p>

          {/* Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem',
            flexWrap: 'wrap',
          }}>
            <div className="stat-number" style={{
              background: 'white',
              padding: '1rem 2rem',
              borderRadius: '1rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              border: '2px solid #6366f120',
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#6366f1' }}>
                {Object.keys(skillCategories).length}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Categories</div>
            </div>
            <div className="stat-number" style={{
              background: 'white',
              padding: '1rem 2rem',
              borderRadius: '1rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              border: '2px solid #a855f720',
              animationDelay: '0.2s',
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a855f7' }}>
                {Object.values(skillCategories).reduce((acc, cat) => acc + cat.skills.length, 0)}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Total Skills</div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {Object.entries(skillCategories).map(([category, data], index) => (
            <div
              key={category}
              id={`skill-${index}`}
              className={`skill-category category-card ${isVisible[`skill-${index}`] ? 'visible' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div style={{
                background: 'white',
                borderRadius: '1.5rem',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: `3px solid ${data.color}20`,
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  background: data.gradient,
                  opacity: 0.1,
                  borderRadius: '50%',
                }} />

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="category-icon" style={{
                    fontSize: '2.5rem',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: data.gradient,
                    borderRadius: '1rem',
                    boxShadow: `0 8px 20px ${data.color}40`,
                  }}>
                    {data.icon}
                  </div>
                  <div>
                    <h5 style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      color: data.color,
                      margin: 0,
                    }}>
                      {category}
                    </h5>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#9ca3af',
                      margin: 0,
                    }}>
                      {data.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {data.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="skill-badge"
                      style={{
                        fontSize: '0.9rem',
                        padding: '0.6rem 1.2rem',
                        background: hoveredSkill === `${category}-${skill}` ? data.gradient : `${data.color}15`,
                        color: hoveredSkill === `${category}-${skill}` ? 'white' : data.color,
                        borderRadius: '0.75rem',
                        border: `2px solid ${data.color}30`,
                        fontWeight: '600',
                        animationDelay: `${(index * 0.1) + (idx * 0.05)}s`,
                        position: 'relative',
                        zIndex: 1,
                      }}
                      onMouseEnter={() => setHoveredSkill(`${category}-${skill}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Progress Bar */}
                <div style={{
                  marginTop: '1.5rem',
                  height: '6px',
                  background: `${data.color}20`,
                  borderRadius: '3px',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <div style={{
                    height: '100%',
                    background: data.gradient,
                    width: `${isVisible[`skill-${index}`] ? '100%' : '0%'}`,
                    transition: 'width 1s ease',
                    transitionDelay: `${index * 0.1 + 0.3}s`,
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
          borderRadius: '1rem',
          color: 'white',
          boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
        }}>
          <p style={{
            fontSize: '1.1rem',
            margin: 0,
            fontWeight: '500',
          }}>
            💡 Continuously learning and expanding my skill set
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;