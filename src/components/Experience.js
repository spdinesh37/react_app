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
            position: "Java Backend Developer",
            employer: "EPAM Systems",
            duration: "Jan 2022 – July 2024",
            description: "Led backend optimization initiatives that enhanced system performance and data accessibility across enterprise applications. Refined database queries and execution strategies, resulting in a 30% increase in API throughput and a 30% reduction in response times, significantly improving employee data retrieval efficiency. Diagnosed and resolved over 60 bugs across multiple projects, reducing critical issues by 25% and boosting overall system stability and user satisfaction. Automated CI/CD workflows to streamline deployment processes, achieving a 20% reduction in deployment times and enhancing delivery accuracy.",
            tech: ["Python", "SQL", "GCP", "PySpark"]
        },
        {
            position: "Software Engineer Intern",
            employer: "EPAM Systems",
            duration: "Jan 2022 - June 2022",
            description: "Developed secure RESTful web services using Spring Boot and Spring MVC, enhancing backend communication and data flow. Integrated Spring Security with advanced authentication techniques, ensuring zero security breaches during the internship period. Wrote unit tests using JUnit and Mockito, reducing code defects by 15% and improving API reliability. Gained hands-on experience in backend development by combining Spring frameworks with database tools for efficient data processing.",
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