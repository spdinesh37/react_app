import React from 'react';

const Education = () => {
  return (
    <div className="mt-3">
      <h2 className="text-center mb-4">Education</h2>

      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Master of Science, Computer Science</h5>
          <h6 className="card-subtitle mb-2 text-muted">University of Alabama, Birmingham</h6>
          <p className="card-text">
            GPA: 3.7 / 4.0<br />
            Jan 2024 – Dec 2025<br />
            Course Work: Advance Algorithms, Database Systems, Machine Learning, Deep Learning, Data Mining, Foundation of Data Science, Probability & Statistics.
          </p>
        </div>
      </div>

      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Bachelor of Technology, Computer Engineering</h5>
          <h6 className="card-subtitle mb-2 text-muted">Jawaharlal Nehru Technological University, Kakinada</h6>
          <p className="card-text">
            GPA: 8.82 / 10.0<br />
            June 2018 – May 2022<br />
            Course Work: C Programming, Data Structures, Object Oriented Programming, Database Management Systems, Unix & Shell Programming, Operating Systems, 
            Probability & Statistics, Web Technologies, Data Warehousing & Data Mining, Software Engineering, Design Patterns, Data Science & Analytics, Python Programming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;