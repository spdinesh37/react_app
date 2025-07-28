import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
  const skillCategories = {
    "Languages": ["Python", "Java", "C", "SQL"],
    "Web Technologies": ["HTML", "CSS", "Bootstrap", "React", "Flask", "FastAPI"],
    "Big Data": ["ETL pipelines", "PySpark", "Kafka", "Hadoop", "Airflow"],
    "AI & ML": ["Numpy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "PyTorch"],
    "Cloud & DevOps": ["GCP", "AWS", "Git", "GitHub", "Linux", "Docker", "Kubernetes"],
    "Other Skills": ["Excel", "Spreadsheets", "Power BI", "Data Curation", "Data Ingestion"]
  };

  // Split the entries into two chunks
  const entries = Object.entries(skillCategories);
  const mid = Math.ceil(entries.length / 2);
  const leftColumn = entries.slice(0, mid);
  const rightColumn = entries.slice(mid);

  return (
    <Container className="mt-4 mb-4">
      <h2 className="text-center mb-4">Skill Set</h2>
      <Row>
        <Col md={6}>
          {leftColumn.map(([category, skills], index) => (
            <div key={index} className="mb-4">
              <h5>{category}</h5>
              <div className="d-flex flex-wrap">
                {skills.map((skill, i) => (
                  <span key={i} className="badge bg-primary me-2 mb-2 px-3 py-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Col>
        <Col md={6}>
          {rightColumn.map(([category, skills], index) => (
            <div key={index} className="mb-4">
              <h5>{category}</h5>
              <div className="d-flex flex-wrap">
                {skills.map((skill, i) => (
                  <span key={i} className="badge bg-primary me-2 mb-2 px-3 py-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;