import React from 'react';

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} fixed-top`}>
      <div className="container">
        <a className="navbar-brand" href="#about">DSP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item"><a className="nav-link" href="#about">About Me</a></li> */}
            <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            {/* <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#certifications">Certifications</a></li> */}
            <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
            <li className="nav-item">
              <button
                className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'} ms-3`}
                onClick={toggleTheme}
              >
                {darkMode ? '🌞 Light' : '🌙 Dark'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;