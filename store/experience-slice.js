import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    company: "Stratosfy",
    role: "Fullstack Developer",
    details: `◦ Troubleshooting and Optimization: Resolved issues persistent in Marker and Tempgenie products by debugging,
      whilst enhancing existing features.;
      ◦ Microservices development and integration: Developed 2 individual microservices in Node.js environment using
      Typescript, which creates an API to connect to MongoDB using the mongoose package.;
      ◦ Customer needs&management: Developed features deployed to production within 2 days. Utilized Google cloud
      platform’s Kubernetes engines for deploymet, thus satisfying customer satisfaction.;
      ◦ Technical documentation and Jira management: Good with Atlassian tools like Confluence and Jira. Wrote 12
      pages relating to setting up the development environment and how the microservice architecture at Stratosfy works.;
      ◦ Frontend development: Tempgenie product development done in Vue.js. Marker product development done in React.js
      and used Flutter for mobile development.;
      ◦ Backend development: Responsible for polling data from Firebase and MongoDB using Python, to provide real
      time notifications and device monitoring respectively.;
      ◦ Application deployment: Responsible for writing 4 Docker files, maintaining Kubernetes engine on GCP and utilizing
      Terraform and BitBuckets’s pipelines for CI CD.",
    duration: "Sep 2021-Present`,
  },
  {
    company: "Ross Video",
    role: "Software Developer",
    details: `
    ◦ Data analysis: Performed analysis of TCP/IP packets using Wireshark to capture packet information in Go lang.;
    ◦ API Development: Responsible for development of gRPC API, managed in an Agile framework - Scrum.;
    ◦ Front-end web development: Developed React Redux project to utilize and integrate gRPC API.;
    ◦ Product Security: Used Keycloak (OAUTH 2.0 JWT) for Identity and access management and SSL certificates
    for gRPC APIs.;
    ◦ Deployment and Source: Containerized and deployed in team of 2, using Docker and GitLab.
    `,
    duration: "Sep 22' - Dec 22'",
  },
  {
    company: "Cerner Corporation (Now Oracle Cerner)",
    role: "Software Engineer",
    duration: "Jun 20' - Aug 21'",
    details:`◦ Streamlined: Exponentially simplified day-day Jira tasks by developing the tool ‘JFacsimile’ a desktop application built
    using ASP. NET and using the concepts of Object oriented programming (OOP).;
    ◦ API Integration: Developed JFacsimile by integrating the REST APIs and web services provided by Jira.;
    ◦ Unit Testing and code review: Unit testing using C# MSTest with 100% code coverage and reviews.;
    ◦ Deployment: Responsible for CI/CD of the product using th Microsoft’s MSI. Gained knowledge on how products at
    Cerner utilize Jenkins.`
  }
];

const experienceSlice = createSlice({
  name: "experiences",
  initialState,
});

export default experienceSlice;
