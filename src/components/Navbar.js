import React, { useState, useEffect } from 'react';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['about', 'education', 'experience', 'skills', 'resume'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#resume', label: 'Resume' },
  ];

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1050,
    transition: 'all 0.3s ease',
    backgroundColor: scrolled 
      ? (darkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)')
      : (darkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)'),
    backdropFilter: 'blur(10px)',
    boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
    color: darkMode ? 'white' : '#111827',
  };

  return (
    <nav style={navStyle}>
      <style>{`
        .nav-brand-gradient {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-link-custom {
          position: relative;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .nav-link-custom::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transition: width 0.3s ease;
        }
        .nav-link-custom:hover::after,
        .nav-link-custom.active::after {
          width: 100%;
        }
        .theme-toggle-btn {
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .theme-toggle-btn:hover {
          transform: scale(1.05);
        }
        @media (max-width: 991px) {
          .mobile-menu {
            transition: max-height 0.3s ease;
            overflow: hidden;
          }
        }
      `}</style>

      <div className="container">
        <div className="d-flex align-items-center justify-content-between" style={{ height: '70px' }}>
          {/* Brand */}
          <a href="#about" className="nav-brand-gradient" onClick={handleLinkClick} style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}>
            DSP
          </a>

          {/* Desktop Navigation */}
          <ul className="d-none d-lg-flex align-items-center list-unstyled mb-0" style={{ gap: '0.5rem' }}>
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link-custom px-3 py-2 ${isActive ? 'active' : ''}`}
                    style={{
                      color: isActive ? '#3b82f6' : (darkMode ? '#d1d5db' : '#374151'),
                      fontWeight: '500',
                    }}>
                    {link.label}
                  </a>
                </li>
              );
            })}
            
            {/* Theme Toggle */}
            <li className="ms-3">
              <button
                onClick={toggleTheme}
                className="theme-toggle-btn"
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  background: darkMode 
                    ? 'linear-gradient(135deg, #fbbf24, #f59e0b)'
                    : 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  color: darkMode ? '#111827' : 'white',
                  boxShadow: darkMode 
                    ? '0 4px 15px rgba(251, 191, 36, 0.4)'
                    : '0 4px 15px rgba(124, 58, 237, 0.4)',
                }}
              >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              padding: '0.5rem',
              cursor: 'pointer',
              color: darkMode ? 'white' : '#111827',
            }}
          >
            <div style={{ width: '24px', height: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ 
                height: '3px', 
                background: 'currentColor', 
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
              }} />
              <span style={{ 
                height: '3px', 
                background: 'currentColor', 
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{ 
                height: '3px', 
                background: 'currentColor', 
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
              }} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className="d-lg-none mobile-menu"
          style={{
            maxHeight: menuOpen ? '400px' : '0',
            backgroundColor: darkMode ? '#1f2937' : 'white',
            borderRadius: '0 0 1rem 1rem',
            marginTop: menuOpen ? '0.5rem' : '0',
          }}
        >
          <ul className="list-unstyled mb-0 py-3">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    style={{
                      display: 'block',
                      padding: '0.75rem 1.5rem',
                      color: isActive ? '#3b82f6' : (darkMode ? '#d1d5db' : '#374151'),
                      textDecoration: 'none',
                      fontWeight: isActive ? '600' : '500',
                      backgroundColor: isActive ? (darkMode ? '#374151' : '#eff6ff') : 'transparent',
                      borderLeft: isActive ? '4px solid #3b82f6' : 'none',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            
            {/* Mobile Theme Toggle */}
            <li className="px-3 pt-3" style={{ borderTop: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}` }}>
              <button
                onClick={toggleTheme}
                className="theme-toggle-btn w-100"
                style={{
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  fontWeight: '600',
                  background: darkMode 
                    ? 'linear-gradient(135deg, #fbbf24, #f59e0b)'
                    : 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  color: darkMode ? '#111827' : 'white',
                }}
              >
                {darkMode ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;