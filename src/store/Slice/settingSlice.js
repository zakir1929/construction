
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching API data
export const settingData = createAsyncThunk('api/fetchData', async () => {
    const response = await axios.get('setting');
    return response.data;
});

const settingSlice = createSlice({
    name: 'settingSlice',
    initialState: {
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(settingData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(settingData.fulfilled, (state, action) => {
                state.loading = false;
                state.setting = action.payload; // Set the setting directly
            })
            .addCase(settingData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default settingSlice.reducer;
