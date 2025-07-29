import React from 'react';

const Education = () => {
  const uablogo = process.env.PUBLIC_URL + '/uab.png';
  const vvitlogo = process.env.PUBLIC_URL + '/vvit_logo.svg';

  return (
    <div className="mt-3">
      <h2 className="text-center mb-4">Education</h2>

      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <a href="https://www.uab.edu/home/" target="_blank" rel="noopener noreferrer">
            <img src={uablogo}  alt="Education Logo" className="card-logo" />
          </a>
          <h5 className="card-title"> Master’s in Computer Science</h5>
          <h6 className="card-subtitle mb-2 text-muted">University of Alabama, Birmingham</h6>
          <p className="card-text">
            August 2024 – May 2025<br />
            Course Work: Advance Algorithms, Database Systems, Machine Learning, Deep Learning, Data Mining, Foundation of Data Science, Probability & Statistics.
          </p>
        </div>
      </div>

      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <a href="https://www.vvitguntur.com/" target="_blank" rel="noopener noreferrer">
            <img src={vvitlogo}  alt="Education Logo" className="card-logo" />
          </a>
          <h5 className="card-title"> Bachelor’s in Computer Science and Engineering</h5>
          <h6 className="card-subtitle mb-2 text-muted"> Vasireddy Venkatadri Institute of Technology, Guntur</h6>
          <p className="card-text">
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