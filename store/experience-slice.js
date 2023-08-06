import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    company: "Stratosfy",
    role: "Fullstack Developer",
    details:
      "Troubleshooting and Optimization: Resolved issues persistent in Marker and Tempgenie products by debugging, whilst enhancing existing features. Responsible for setting up Linux and android development environments.;Product Development: Created microservices in Node.js to monitor device health by connecting to MongoDB using Python.Developed GCP Firebase functions for real-time data retrieval. Used Mongoose package from MongoDB to poll static data and process to the frontend.;Feature Development: Designed, implemented, and tested cron job feature that allows users to reschedule the jobs.;Documentation: Responsible for technical documentation in Confluence, regarding the microservices present in Tempgenie and dev environment setups of the products present at Stratosfy.;Application Analysis: Utilized Google Analytics in React JS Tempgenie product to highlight which microservice is most utilized by a customer and see areas of improvement.",
    duration: "Sep 2021-Present",
  },
  {
    company: "Ross Video",
    role: "Software Developer",
    details:
      "Troubleshooting and Optimization: Resolved issues persistent in Marker and Tempgenie products by debugging, whilst enhancing existing features. Responsible for setting up Linux and android development environments.;Product Development: Created microservices in Node.js to monitor device health by connecting to MongoDB using Python.Developed GCP Firebase functions for real-time data retrieval. Used Mongoose package from MongoDB to poll static data and process to the frontend.;Feature Development: Designed, implemented, and tested cron job feature that allows users to reschedule the jobs.;Documentation: Responsible for technical documentation in Confluence, regarding the microservices present in Tempgenie and dev environment setups of the products present at Stratosfy.;Application Analysis: Utilized Google Analytics in React JS Tempgenie product to highlight which microservice is most utilized by a customer and see areas of improvement.",
    duration: "Sep 22' - Dec 22'",
  },
];

const experienceSlice = createSlice({
  name: "experience",
  initialState
});

export default experienceSlice;
