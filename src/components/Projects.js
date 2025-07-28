import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Attendance Management System using Computer Vision & RAG Chatbot",
      description: "Developed a Face recognition attendance management system using YOLOv7 with FastAPI, React and MongoDB.",
      tech: ["Python", "YOLO", "FastAPI", "React", "AWS"],
      github: "https://github.com/ssmaheswar2001/Attendance-Management-System.git"
    },
    {
      title: "SQL Query Assistant (In Progress)",
      description: "Designing a Text-to-SQL assistant that translates natural language questions into SQL queries using Transformer models. Trained on the WikiSQL and Spider datasets.",
      tech: ["Python", "Tensorflow", "React", "AWS"],
      github: ""
    },
    {
      title: "English-to-Indian Transliteration using RNNs",
      description: "Built a English language to Indian language Transliteration using RNNs, Bi-RNN + LSM and Transformer.",
      tech: ["Python", "Tensorflow", "GCP"],
      github: "https://github.com/ssmaheswar2001/Machine-Translation.git"
    },
    {
      title: "MLOps Hand Sign Detection System using YOLO",
      description: "Designed a Hand Sign Recognition system using YOLOv5 which detects 5 hand signs and displays the sign.",
      tech: ["Python", "TensorFlow", "Flask", "AWS"],
      github: "https://github.com/ssmaheswar2001/Sign-Language-Detection-using-YOLOv5.git"
    },
    {
      title: "Uber Trip Analysis using Power BI",
      description: "An Interactive Dashboard that analyzed uber trip data to provide insights into booking patterns, revenue trends, trip efficiency, and customer behavior.",
      tech: ["Power BI"],
      github: "https://github.com/ssmaheswar2001/Uber-Analysis.git"
    },
    {
      title: "Note Taker Application",
      description: "Developed a Note Taker application which performs CRUD operations using Java, MySQL, Hibernate, JSP, Servlets, HTML and Bootstrap.",
      tech: ["Java", "MySQL", "Hibernate", "Servlets", "JSP", "HTML", "CSS", "Bootstrap"],
      github: "https://github.com/ssmaheswar2001/NoteTaker/tree/master"
    }

  ];

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {projects.map((proj, idx) => (
        <div key={idx} className="col-md-6 mb-3">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{proj.title}</h5>
            <h6 className="card-subtitle text-muted mb-2">{proj.duration}</h6>
            <p className="card-text">{proj.description}</p>
            <div className="d-flex flex-wrap mb-2">
              {proj.tech.map((tech, i) => (
                <span key={i} className="badge bg-secondary me-2 mb-2">{tech}</span>
              ))}
            </div>
            {proj.github ? (
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark btn-sm"
              >
                <FaGithub className="me-1" /> View on GitHub
              </a>
            ) : (
              <span className="text-muted small">Coming Soon</span>
            )}
          </div>
        </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Projects;