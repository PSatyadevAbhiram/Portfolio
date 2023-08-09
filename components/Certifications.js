import React, { useState } from "react";
import { useSelector } from "react-redux";
import globalStyles from "./Globals.module.css";

const Certifications = () => {
  const certifications = useSelector((state) => state.certifications);

  const groupCertificationsByProvider = (certifications) => {
    const groupedCertifications = {};
    certifications.forEach((certification) => {
      const { certName } = certification;
      if (!groupedCertifications[certName]) {
        groupedCertifications[certName] = [];
      }
      groupedCertifications[certName].push(certification);
    });
    return groupedCertifications;
  };

  const groupedCertifications = groupCertificationsByProvider(certifications);

  const [hoveredCertName, setCertName] = useState(null);

  return (
    <div>
      <h3 className={globalStyles.h3}>Certifications</h3>
      <ul className={globalStyles.ul}>
        {Object.entries(groupedCertifications).map(([certName, certifications]) => (
          <li
            key={certName}
            onMouseEnter={() => setCertName(certName)}
            onMouseLeave={() => setCertName(null)}
          >
            <div className={globalStyles.card}>
              <strong>{certName}</strong>
              {hoveredCertName === certName && (
                <ul>
                  {certifications.map((certification, index) => (
                    <li className={globalStyles.cert_details} key={index}>
                      Provider: {certification.provider} <br />
                      Validation Number: {certification.validationNumber} <br />
                      Verification URL: {certification.certificateURL} <br />
                      Issue Date: {certification.issueDate} <br />
                      Expiry Date: {certification.expiryDate}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
