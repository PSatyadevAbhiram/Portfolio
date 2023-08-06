import React from "react";
import { useSelector } from "react-redux";

const Certifications = () => {
  const certifications = useSelector((state) => state.certifications);
  console.log(certifications);

  const groupCertificationsByProvider = (certifications) => {
    const groupedCertifications = {};
    certifications.forEach((certification) => {
      const { provider } = certification;
      if (!groupedCertifications[provider]) {
        groupedCertifications[provider] = [];
      }
      groupedCertifications[provider].push(certification);
    });
    return groupedCertifications;
  };

  const groupedCertifications = groupCertificationsByProvider(certifications);
  console.log(groupedCertifications);

  return (
    <div>
      <h3>Certifications</h3>
      <ul>
        {Object.entries(groupedCertifications).map(([provider, certifications]) => (
          <li key={provider}>
            <br/>
            <strong>{provider}:</strong>
            <ul>
              {certifications.map((certification, index) => (
                <li key={index}>
                  Validation Number:{certification.validationNumber} <br/>
                  Verification URL: {certification.certificateURL} <br/>
                  Issue Date: {certification.issueDate} <br/>
                  Expiry Date: {certification.expiryDate}
                </li>
              ))}
              <br/>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
