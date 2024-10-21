import { configureStore } from '@reduxjs/toolkit';
import settingSlice from './Slice/settingSlice';
import divisionSlice from './Slice/divisionSlice';

const store = configureStore({
    reducer: {
        settingStore: settingSlice,
        divisionStore: divisionSlice,
    },
});

export default store;
