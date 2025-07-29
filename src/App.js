import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import AboutMe from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import SkillSet from './components/SkillSet';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Resume from './components/Resume';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);
  
  return (
    <>
     <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <div className="container mt-5">
        <section id="about" className="py-5"><AboutMe /></section>
        <section id="education" className="py-5"><Education /></section>
        <section id="experience" className="py-5"><Experience /></section>
        <section id="skills" className="py-5"><SkillSet /></section>
        {/* <section id="projects" className="py-5"><Projects /></section> */}
        {/* <section id="certifications" className="py-5"><Certifications /></section> */}
        <section id="resume" className="py-5"><Resume /></section>
        <footer className="text-center py-4 mt-5">
          <p className="mb-0">© 2025 Dinesh Sripathi Panditharadhyula. All rights reserved.</p>
        </footer>
      </div>
      </div>
    </>
  );
}

export default App;