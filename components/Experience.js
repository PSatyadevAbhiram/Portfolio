// components/Experience.js
import { useSelector } from "react-redux"
import React from "react";

const Experience = () => {
  const experiences = useSelector((state) => state.experience);

  return (
    <React.Fragment>
      <h1>Work Experiences</h1>
      {experiences.map((experience, index) => 
        <div key={index}>
          <h2>{experience.company}</h2>
          <h3>{experience.role}</h3>
          <p>{experience.duration}</p>
          <ul>
            {experience.details.split(';').map((detail, idx) =>(
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
        )}
    </React.Fragment>
  );
};

export default Experience;
