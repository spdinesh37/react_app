import { useState, useEffect } from 'react';

const AboutMe = () => {
  const profilePic = process.env.PUBLIC_URL + '/profile-pic.jpg';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { name: 'LinkedIn', emoji: '💼', url: 'https://www.linkedin.com/in/s-p-dinesh/', color: '#0077B5' },
    { name: 'GitHub', emoji: '💻', url: 'https://github.com/spdinesh37', color: '#333' },
    { name: 'Email', emoji: '✉️', url: 'mailto:spdinesh3737@gmail.com', color: '#EA4335' },
  ];

  return (
    <div style={{ padding: '4rem 1rem 2rem', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <style>{`
        .social-link { 
          text-decoration: none; 
          display: inline-flex; 
          align-items: center; 
          padding: 0.75rem 1.5rem; 
          border-radius: 0.5rem; 
          background: white; 
          font-weight: 600; 
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .social-link:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 4px 12px rgba(0,0,0,0.15); 
        }
      `}</style>

      <div className="container">
        <div className="row align-items-center g-5">
          {/* Profile Image */}
          <div className="col-12 col-md-4 text-center">
            <img 
              src={profilePic} 
              alt="Dinesh Sripathi Panditharadhyula" 
              style={{ 
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '5px solid #6366f1',
                boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
              }} 
            />
          </div>

          {/* Content */}
          <div className="col-12 col-md-8">
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>
              Dinesh Sripathi Panditharadhyula
            </h1>
            
            <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginBottom: '1.5rem', fontWeight: '600', color: '#6366f1' }}>
              Backend Developer
            </h3>

            <p style={{ fontSize: '1rem', marginBottom: '1rem', lineHeight: '1.7', color: '#374151' }}>
              I'm a dedicated software engineer with a strong focus on backend development, passionate about building <strong>efficient, scalable, and reliable applications</strong>. I specialize in Java, Spring Boot, Hibernate, and RESTful APIs, and I have solid experience working with MySQL databases and writing well-tested code using JUnit and Mockito.
            </p>

            <p style={{ fontSize: '1rem', marginBottom: '1rem', lineHeight: '1.7', color: '#374151' }}>
              Currently pursuing my <strong>Master of Science in Computer Science</strong> at the University of Alabama at Birmingham, I am driven by a love for solving complex problems and delivering clean, maintainable code. I enjoy tackling bugs, optimizing performance, and continuously learning to improve my craft.
            </p>

            <p style={{ fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.7', color: '#374151' }}>
              My goal is to grow as a versatile backend developer and contribute to impactful, real-world projects that make a difference.
            </p>

            <p style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '1.5rem', color: '#111827' }}>
              💼 Let's connect for discussions, collaborations, or opportunities!
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link" 
                  style={{ 
                    color: social.color, 
                    border: `2px solid ${social.color}`,
                  }}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.backgroundColor = social.color; 
                    e.currentTarget.style.color = 'white'; 
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.backgroundColor = 'white'; 
                    e.currentTarget.style.color = social.color; 
                  }}
                >
                  <span style={{ fontSize: '1.3rem', marginRight: '0.5rem' }}>{social.emoji}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;