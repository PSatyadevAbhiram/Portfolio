import {configureStore} from '@reduxjs/toolkit';
import experienceSlice from './experience-slice';
import educationSlice from './education-slice';
import certificationsSlice from './certifications-slice';
import skillsSlice from './skills-slice';

const store = configureStore({
    reducer: {
        experiences: experienceSlice.reducer,
        education: educationSlice.reducer,
        certifications: certificationsSlice.reducer,
        skills: skillsSlice.reducer
    }
});

export default store;