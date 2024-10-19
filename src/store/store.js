import { configureStore } from '@reduxjs/toolkit';
import settingSlice from './Slice/settingSlice';

const store = configureStore({
    reducer: {
        settingStore: settingSlice,
    },
});

export default store;
