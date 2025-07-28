import React from 'react';

const Experience = () => {
    const experiences = [
        {
            position: "Graduate Assistant (Digitalization Lab)",
            employer: "University of Alabama, Birmingham",
            duration: "Apr 2024 - Present",
            description: "Working on Digital Preservation of historical records using Python Scripts from different universities and facilitating those records for future research across USA.",
            tech: ["Python", "Tkinter", "Adobe", "AWS"]
        },
        {
            position: "Software Engineer (Verizon AI & Data)",
            employer: "HCLTech Limited",
            duration: "Aug 2022 - Dec 2023",
            description: "Worked on AI-driven solutions for Verizon Fixed Wireless Access project, contributing to $550M+ revenue and supporting 4.2M+ customer base. Built ETL pipelines from Teradata Enterprise Warehouse to GCP BigQuery or GCS using PySpark. Created data curation & data modeling for source-target mapping.",
            tech: ["Python", "SQL", "GCP", "PySpark"]
        },
        {
            position: "Software Engineer Intern",
            employer: "HCLTech Limited",
            duration: "Jan 2022 - June 2022",
            description: "Trained on Python, SQL, GCP, PySpark with 80+ hands-on assignments. Designed Hospital Management System capstone project using Python, Tkinter, and SQLite. Built ETL pipelines on GCP Dataproc, extracting data from GCS, and loading processed data into GCS and BigQuery for both batch & streaming data. ",
            tech: ["Python", "SQL", "Tkinter", "GCP", "Teradata", "PySpark"]
        }
    ]
  return (
    <div className="mt-5">
      <h2 className="text-center mb-4">Experience</h2>
        {experiences.map((exp, idx) => (
                <div key={idx} className="card mb-3 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{exp.position}</h5>
                    <h6 className="card-subtitle text-muted mb-2">{exp.employer}</h6>
                    <h6 className="card-subtitle text-muted mb-2">{exp.duration}</h6>
                    <p className="card-text">{exp.description}</p>
                    <div className="d-flex flex-wrap mb-2">
                      {exp.tech.map((tech, i) => (
                        <span key={i} className="badge bg-primary me-2 mb-2">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
        ))}
    </div>
  );
};

export default Experience;