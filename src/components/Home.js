import { useState, useEffect } from 'react';

const AboutMe = () => {
  const profilePic = process.env.PUBLIC_URL + '/profile-pic.jpg';
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Backend Developer";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { name: 'LinkedIn', emoji: '💼', url: 'https://www.linkedin.com/in/s-p-dinesh/', color: '#0077B5' },
    { name: 'GitHub', emoji: '💻', url: 'https://github.com/spdinesh37', color: '#333' },
    { name: 'Email', emoji: '✉️', url: 'mailto:spdinesh3737@gmail.com', color: '#EA4335' },

  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <style>{`
        @keyframes float { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 33% { transform: translate(30px, -30px) rotate(120deg); } 66% { transform: translate(-20px, 20px) rotate(240deg); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
        @keyframes gradientShift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .fade-in-up { animation: fadeInUp 0.8s ease forwards; }
        .scale-in { animation: scaleIn 0.8s ease forwards; }
        .typing-cursor::after { content: '|'; animation: blink 1s infinite; }
        .gradient-text { background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; background-size: 200% 200%; animation: gradientShift 3s ease infinite; }
        .profile-wrapper { position: relative; display: inline-block; }
        .profile-wrapper::before { content: ''; position: absolute; inset: -4px; background: linear-gradient(45deg, #6366f1, #a855f7, #ec4899, #ef4444); border-radius: 50%; z-index: -1; animation: rotate 3s linear infinite; }
        .profile-img { border: 4px solid white; transition: transform 0.3s ease; display: block; border-radius: 50%; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
        .profile-img:hover { transform: scale(1.05); }
        .social-link { position: relative; transition: all 0.3s ease; overflow: hidden; text-decoration: none; display: inline-flex; align-items: center; padding: 0.75rem 1.25rem; border-radius: 0.75rem; box-shadow: 0 10px 20px rgba(0,0,0,0.1); background: white; font-weight: 600; }
        .social-link::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); transition: left 0.5s ease; }
        .social-link:hover::before { left: 100%; }
        .social-link:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0,0,0,0.15); }
        @media (max-width: 768px) { .responsive-grid { display: block; } .profile-img { width: 16rem !important; height: 16rem !important; } }
        @media (min-width: 769px) { .responsive-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 2rem; align-items: center; } .col-4 { grid-column: span 4; } .col-8 { grid-column: span 8; } }
      `}</style>

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', borderRadius: '50%', width: '500px', height: '500px', top: '-10%', right: '-5%', opacity: 0.3, background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))', animation: 'float 20s infinite ease-in-out' }} />
        <div style={{ position: 'absolute', borderRadius: '50%', width: '400px', height: '400px', bottom: '-10%', left: '-5%', opacity: 0.3, background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(239, 68, 68, 0.2))', animation: 'float 25s infinite ease-in-out reverse' }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="responsive-grid">
          <div className="col-4" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div className={`profile-wrapper ${isVisible ? 'scale-in' : ''}`} style={{ animationDelay: '0.2s', opacity: isVisible ? 1 : 0 }}>
              <img src={profilePic} alt="Dinesh" className="profile-img" style={{ width: '18rem', height: '18rem', objectFit: 'cover' }} />
            </div>
          </div>

          <div className="col-8">
            <div className={isVisible ? 'fade-in-up' : ''} style={{ animationDelay: '0.4s', opacity: isVisible ? 1 : 0 }}>
              <h1 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 'bold', marginBottom: '1rem', lineHeight: '1.2' }}>
                Hi, I'm <span className="gradient-text">Dinesh Sripathi Panditharadhyula</span>
              </h1>
              
              <h3 className="typing-cursor" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', marginBottom: '1.5rem', fontWeight: '600', color: '#6366f1' }}>
                {typedText}
              </h3>

              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', marginBottom: '1rem', lineHeight: '1.8', color: '#374151' }}>
                I'm a dedicated software engineer with a strong focus on backend development, passionate about building <strong>efficient, scalable, and reliable applications</strong>. I specialize in Java, Spring Boot, Hibernate, and RESTful APIs, and I have solid experience working with MySQL databases and writing well-tested code using JUnit and Mockito.
              </p>

              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', marginBottom: '1rem', lineHeight: '1.8', color: '#374151' }}>
                Currently pursuing my <strong>Master of Science in Computer Science</strong> at the University of Alabama at Birmingham, I am driven by a love for solving complex problems and delivering clean, maintainable code. I enjoy tackling bugs, optimizing performance, and continuously learning to improve my craft.
              </p>

              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', marginBottom: '1.5rem', lineHeight: '1.8', color: '#374151' }}>
                My goal is to grow as a versatile backend developer and contribute to impactful, real-world projects that make a difference.
              </p>

              <p style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                💼 Let's connect for discussions, collaborations, or opportunities!
              </p>
              
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '3rem' }}>
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link" 
              style={{ color: social.color, border: `2px solid ${social.color}`, animationDelay: `${0.8 + index * 0.1}s`, opacity: isVisible ? 1 : 0 }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = social.color; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = social.color; }}>
              <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{social.emoji}</span>
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;