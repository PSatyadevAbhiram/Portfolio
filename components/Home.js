import { Fragment } from "react";
import { useSelector } from "react-redux";

export default function HomePage() {
  const technicalSkills = useSelector(state => state.skills);

  return (
    <Fragment>
      <h1>Hello, I'm Abhiram.</h1>
      <h2>Full Stack developer | Cloud-native | MERN | JavaScript</h2>
      <div>
        Welcome to my portfolio! I am a passionate full-stack developer with
        experience in building web applications from front-end to back-end. I
        enjoy solving complex problems.
      </div>
      <h3>Technical Skills</h3>
      <table>
        <tbody>
          {technicalSkills.map((skill, index) => (
            <tr key={index}>
              <th>{skill.category}</th>
              <td>{skill.skills}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
