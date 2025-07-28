import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEye } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const AboutMe = () => {
  const resumePath = process.env.PUBLIC_URL + '/SuryaSaiMaheswarB_SE.pdf';
  const profilePic = process.env.PUBLIC_URL + '/profile-pic.jpg'; // Add a profile.jpg in /public

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
          <h3>Backend Developer</h3>
          <p className="lead">
            I’m a dedicated software engineer with a strong focus on backend development, passionate about building efficient, scalable, and reliable applications. I specialize in Java, Spring Boot, Hibernate, and RESTful APIs, and I have solid experience working with MySQL databases and writing well-tested code using JUnit and Mockito.
            Currently pursuing my Master of Science in Computer Science at the University of Alabama at Birmingham, I am driven by a love for solving complex problems and delivering clean, maintainable code. I enjoy tackling bugs, optimizing performance, and continuously learning to improve my craft.
            My goal is to grow as a versatile backend developer and contribute to impactful, real-world projects that make a difference.
          </p>
          <p className="lead mb-1">
            Let’s connect for discussions, collaborations, or opportunities!
          </p>
          <p className="lead">
            Email: <a href="mailto:spdinesh3737@gmail.com">spdinesh3737@gmail.com</a>
          </p>
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