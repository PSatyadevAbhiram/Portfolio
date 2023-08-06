import { createSlice } from '@reduxjs/toolkit'

const certificationsSlice = createSlice({
    name: 'certifications',
    initialState: {
        provider: 'Amazon Web Services',
        validationNumber: 'SY531JS1XFQ41D3Q',
        certificateURL: 'https://aws.amazon.com/verification',
        issueDate: 'May 30, 2023',
        expiryDate: 'May 30, 2026'
    }
});

export default certificationsSlice;