import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
    name: 'education',
    initialState: {
        bachelors: 'SRM Institute of Science and Technology',
        bachelors_duration: 'Jun 2017 - May 2021',
        bachelors_courses: 'Discrete Mathematics, Advanced Calculus and Complex Analysis, Transforms and Boundary Values, Advanced Probability and Queuing Theory,  Operating Systems, Data Structures, Analysis Of Algorithms, Computer Networks, Database management',
        masters: 'University of Ottawa',
        masters_duration: 'Sep 2021 - Dec 2022',
        masters_courses:'Introduction to Deep Learning and Reinforcement Learning, Wireless Adhoc Networks, Speech Recognition, Advanced Database Management, Algorithms for Data Science, Trends in Big Data Management, Multiagent Systems, Machine Learning',
        Major: 'Computer Science',
    }
});

export default educationSlice;