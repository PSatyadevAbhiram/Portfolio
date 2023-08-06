import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    provider: "Amazon Web Services",
    validationNumber: "SY531JS1XFQ41D3Q",
    certificateURL: "https://aws.amazon.com/verification",
    issueDate: "May 30, 2023",
    expiryDate: "May 30, 2026",
  },
  {
    provider: "Coursera",
    validationNumner: "",
    certificateURL:"https://coursera.org/share/23aeaa6d5eb7807ee84b24f4778d02af/",
    issueDate: "",
    expiryDate: ""
  }
];

const certificationsSlice = createSlice({
  name: "certifications",
  initialState,
});

export default certificationsSlice;
