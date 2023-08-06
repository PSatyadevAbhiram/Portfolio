const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
    { category: "Technical Skills", skills: "Full stack development, ASP .NET, OOPS, Debugging" },
    { category: "Source Control", skills: "Git, BitBucket, GitLab, GitHub" },
    { category: "Cloud Skills", skills: "Google Cloud Platform, Certified AWS Cloud Practitioner" },
    { category: "Atlassian Tools", skills: "Confluence, Jira" },
    { category: "Soft Skills", skills: "Problem Solving, Team player, Technical documentation, Case Analysis, Organizer" },
    { category: "Operating Systems", skills: "Windows, Linux" },
    { category: "Deployment", skills: "Microsoft MSI, Docker, Terraform" },
    { category: "Frontend Frameworks", skills: "Vue.js, React.js" },
    { category: "Programming Languages", skills: "Proficient: JavaScript, TypeScript, Python, C# Intermediate: Java, C++ Beginner: R, Go" },
  ];

const skillsSlice = createSlice({
    name: 'skills',
    initialState
});

export default skillsSlice