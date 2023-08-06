import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <h1>Hello, I'm Abhiram.</h1>
      <h2>Full Stack developer | Cloud-native | MERN | JavaScript</h2>
      <div>
        Welcome to my portfolio! I am a passionate full-stack developer with
        experience in building web applications from front-end to back-end. I
        enjoy solving complex problems and creating user-friendly experiences.
      </div>
      <h3>Technical Skills</h3>
      <table>
        <tr>
          <th>Technical Skills</th>
          <td>Full stack development, ASP .NET, OOPS, Debugging</td>
        </tr>
        <tr>
          <th>Source Control</th>
          <td>Git, BitBucket, GitLab, GitHub</td>
        </tr>
        <tr>
          <th>Cloud Skills</th>
          <td>Google Cloud Platform, Certified AWS Cloud Practitioner</td>
        </tr>
        <tr>
          <th>Atlassian Tools</th>
          <td>Confluence, Jira</td>
        </tr>
        <tr>
          <th>Soft Skills</th>
          <td>
            Problem Solving, Team player, Technical documentation, Case
            Analysis, Organizer
          </td>
        </tr>
        <tr>
          <th>Operating Systems</th>
          <td>Windows, Linux</td>
        </tr>
        <tr>
          <th>Deployment</th>
          <td>Microsoft MSI, Docker, Terraform</td>
        </tr>
        <tr>
          <th>Frontend Frameworks</th>
          <td>Vue.js, React.js</td>
        </tr>
        <tr>
          <th>Programming Languages</th>
          <td>
            <em>Proficient:</em> JavaScript, TypeScript, Python, C#{" "}
            <em>Intermediate:</em> Java, C++ <em>Beginner:</em> R, Go
          </td>
        </tr>
      </table>
    </Fragment>
  );
}
