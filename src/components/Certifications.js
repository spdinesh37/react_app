import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const certs = [
    {
      name: "AWS Associate Machine Learning Engineer",
      issuer: "Amazon Web Services",
      link: "",
      date: ""
    },
    {
      name: "Deep Learning Specialization",
      issuer: "Deeplearning.AI",
      link: "https://www.coursera.org/account/accomplishments/specialization/C2SONKYK0F66",
      date: "Oct 2024"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      link: "https://www.credly.com/badges/cf570e08-9dd4-4044-981c-842d8d9aad71/linked_in_profile",
      date: "July 2024"
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Deeplearning.AI",
      link: "https://www.coursera.org/account/accomplishments/specialization/4E7T9GJ2DB38",
      date: "June 2024"
    },
    {
      name: "GCP Associate Cloud Engineer",
      issuer: "Google Cloud Platform",
      link: "",
      date: "June 2023"
    },
    {
      name: "PCEP - Entry level Python Programmer",
      issuer: "OpenEdge",
      link: "https://verify.openedg.org/?id=y3BS.iP1X.qgfU",
      date: "May 2023"
    }
  ];

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4">Certifications</h2>
      <div className="row">
        {certs.map((cert, index) => (
          <div key={index} className="col-md-6 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  <FaCertificate className="me-2 text-warning" />
                  {cert.name}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{cert.issuer}</h6>
                <p className="card-text"><strong>Year:</strong> {cert.date}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;