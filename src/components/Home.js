import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEye } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const AboutMe = () => {
  const resumePath = process.env.PUBLIC_URL + '/SuryaSaiMaheswarB_SE.pdf';
  const profilePic = process.env.PUBLIC_URL + '/profile.jpeg'; // Add a profile.jpg in /public

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <img
            src={profilePic}
            alt="Dinesh"
            className="img-fluid rounded-circle shadow"
            style={{ width: '350px', height: '350px', objectFit: 'cover' }}
          />
        </Col>

        <Col md={8}>
          <h1 className="fw-bold mb-3">I'm Dinesh Sripathi Panditharadhyula</h1>
          <p className="lead">
            A passionate Computer Science professional with a Master's degree from the University of Alabama at Birmingham and a Bachelor's degree from JNTU Kakinada.
            I have 3 years of experience in software engineering, data engineering, and AI/ML — specializing in building scalable data pipelines and AI-powered solutions.
            Outside of work, I contribute to open-source and explore innovations in AI & Cloud.
          </p>
          <p className="lead mb-1">
            Let’s connect for discussions, collaborations, or opportunities!
          </p>
          <p className="lead">
            Email: <a href="mailto:spdinesh3737@gmail.com">spdinesh3737@gmail.com</a>
          </p>

          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary me-3 mb-3"
          >
            <FaEye size={18} className="me-2" />
            View Resume
          </a>
        </Col>
      </Row>

      <Row className="justify-content-center mt-2 g-2">
        <Col xs="auto">
          <a
            href="https://www.linkedin.com/in/s-p-dinesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center text-decoration-none"
            style={{ color: '#0077B5' }}
          >
            <FaLinkedin size={28} className="me-2" />
            <span className="fw-bold">LinkedIn</span>
          </a>
        </Col>

        <Col xs="auto">
          <a
            href="https://github.com/spdinesh37"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center text-decoration-none"
            style={{ color: '#000' }}
          >
            <FaGithub size={28} className="me-2" />
            <span className="fw-bold">GitHub</span>
          </a>
        </Col>

        
      </Row>
    </Container>
  );
};

export default AboutMe;