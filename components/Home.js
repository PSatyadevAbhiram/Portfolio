import { Fragment } from "react";
import { useSelector } from "react-redux";
import globalStyles from "./Globals.module.css";
import homeStyles from "./Home.module.css";

export default function HomePage() {
  const technicalSkills = useSelector(state => state.skills);

  return (
    <Fragment>
      <h1 className={`${homeStyles.card} ${globalStyles.card}`}>Hello, I'm Abhiram.</h1>
      <h2 className={homeStyles.sectionTitle}>Full Stack developer | Cloud-native | MERN | JavaScript</h2>
      <div className={homeStyles.description}>
        Welcome to my portfolio! I am a passionate full-stack developer with
        experience in building web applications from front-end to back-end. I
        enjoy solving complex problems.
      </div>
      <h3 className={homeStyles.sectionTitle}>Technical Skills</h3>
      <table className={homeStyles.skillsTable}>
        <tbody>
          {technicalSkills.map((skill, index) => (
            <tr key={index}>
              <th className={homeStyles.tableRow}>{skill.category}</th>
              <td className={homeStyles.tableRow}>{skill.skills}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
