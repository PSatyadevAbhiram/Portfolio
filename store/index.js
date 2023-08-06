import {configureStore} from '@reduxjs/toolkit';
import experienceSlice from './experience-slice';
import educationSlice from './education-slice';
import certificationsSlice from './certifications-slice';

const store = configureStore({
    reducer: {
        experience: experienceSlice.reducer,
        education: educationSlice.reducer,
        certifications: certificationsSlice.reducer
    }
});

export default store;