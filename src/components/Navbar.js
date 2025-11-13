import React, { useState, useEffect } from 'react';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
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

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#resume', label: 'Resume' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
            : 'bg-white/95 backdrop-blur-md shadow-lg'
          : darkMode
          ? 'bg-gray-900/80 backdrop-blur-sm'
          : 'bg-white/80 backdrop-blur-sm'
      } ${darkMode ? 'text-white' : 'text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <a
            href="#about"
            className="relative text-2xl sm:text-3xl font-bold group"
            onClick={handleLinkClick}
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              DSP
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                      isActive
                        ? 'text-blue-500'
                        : darkMode
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </a>
                </li>
              );
            })}
            
            {/* Theme Toggle Button */}
            <li className="ml-4">
              <button
                onClick={toggleTheme}
                className={`relative overflow-hidden px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  darkMode
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:shadow-lg hover:shadow-yellow-500/50'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/50'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {darkMode ? (
                    <>
                      <span className="text-lg">☀️</span>
                      <span className="hidden sm:inline">Light</span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg">🌙</span>
                      <span className="hidden sm:inline">Dark</span>
                    </>
                  )}
                </span>
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-all duration-300 hover:bg-gray-200/20 active:scale-95"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-4 space-y-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-500 border-l-4 border-blue-500'
                        : darkMode
                        ? 'hover:bg-gray-800 text-gray-300'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            
            {/* Mobile Theme Toggle */}
            <li className="px-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleTheme}
                className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                }`}
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