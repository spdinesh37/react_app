import React from 'react';
import { FaEye, FaDownload } from 'react-icons/fa';

const Resume = () => {
  const resumePath = process.env.PUBLIC_URL + '/Dinesh-SP-Resume.pdf';

  return (
    <div className="text-center mt-5">
      <h2 className="mb-4">Resume</h2>
      <div className="d-flex justify-content-center gap-3">
        <a
          href={resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary"
        >
          <FaEye className="me-2" />
          View Resume
        </a>

        <a
          href={resumePath}
          download="Dinesh-SP-Resume.pdf"
          className="btn btn-outline-success"
        >
          <FaDownload className="me-2" />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;