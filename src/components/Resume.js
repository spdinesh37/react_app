import { useState } from 'react';

const Resume = () => {
  const [isHovered, setIsHovered] = useState(null);
  const resumePath = process.env.PUBLIC_URL + '/Dinesh_Sripathi_Panditharadhyula_Resume.pdf';

  return (
    <div style={{ padding: '4rem 1rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .resume-btn {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .resume-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }
        .resume-btn:hover::before {
          left: 100%;
        }
        .resume-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .resume-btn:active {
          transform: translateY(-2px);
        }
        .floating-icon {
          animation: float 3s ease-in-out infinite;
        }
        .doc-preview {
          animation: fadeInScale 0.8s ease;
        }
      `}</style>

      {/* Background Circles */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        left: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.1)',
        animation: 'float 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.1)',
        animation: 'float 8s ease-in-out infinite reverse',
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Title */}
        <div className="doc-preview" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="floating-icon" style={{ fontSize: '4rem', marginBottom: '1rem' }}>
            📄
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1rem',
            textShadow: '0 4px 10px rgba(0,0,0,0.2)',
          }}>
            My Resume
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            View my professional experience, skills, and achievements
          </p>
        </div>

        {/* Document Preview Card */}
        <div className="doc-preview" style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '3rem 2rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          marginBottom: '2rem',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}>
            <div style={{
              width: '80px',
              height: '100px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              boxShadow: '0 10px 25px rgba(102, 126, 234, 0.4)',
            }}>
              📋
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                Dinesh Sripathi Panditharadhyula
              </h4>
              <p style={{ color: '#6b7280', margin: 0, fontSize: '0.95rem' }}>
                Backend Developer | Computer Science Graduate
              </p>
              <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.85rem', marginTop: '0.25rem' }}>
                📄 PDF Document
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <a
           
            
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              onMouseEnter={() => setIsHovered('view')}
              onMouseLeave={() => setIsHovered(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: isHovered === 'view' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white',
                color: isHovered === 'view' ? 'white' : '#667eea',
                border: '3px solid #667eea',
                borderRadius: '1rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>👁️</span>
              <span>View Resume</span>
            </a>
            <a
            
            
              href={resumePath}
              download="Dinesh-SP-Resume.pdf"
              className="resume-btn"
              onMouseEnter={() => setIsHovered('download')}
              onMouseLeave={() => setIsHovered(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: isHovered === 'download' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'white',
                color: isHovered === 'download' ? 'white' : '#10b981',
                border: '3px solid #10b981',
                borderRadius: '1rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>⬇️</span>
              <span>Download Resume</span>
            </a>
          </div>

          {/* Info Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
            marginTop: '2rem',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea20, #764ba220)',
              padding: '1rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              border: '2px solid #667eea30',
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✨</div>
              <div style={{ fontSize: '0.9rem', color: '#6b7280', fontWeight: '600' }}>
                Updated Recently
              </div>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #10b98120, #05966920)',
              padding: '1rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              border: '2px solid #10b98130',
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎯</div>
              <div style={{ fontSize: '0.9rem', color: '#6b7280', fontWeight: '600' }}>
                ATS Friendly
              </div>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #f59e0b20, #d9770620)',
              padding: '1rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              border: '2px solid #f59e0b30',
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📱</div>
              <div style={{ fontSize: '0.9rem', color: '#6b7280', fontWeight: '600' }}>
                Mobile Ready
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div style={{
          textAlign: 'center',
          color: 'white',
          fontSize: '0.95rem',
          opacity: 0.9,
        }}>
          <p style={{ margin: 0 }}>
            💡 Last updated: November 2024 | Format: PDF
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;