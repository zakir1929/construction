
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching API data
export const divisionData = createAsyncThunk('api/divisionData', async () => {
    const response = await axios.get('divisions');
    return response.data;
});

const divisionSlice = createSlice({
    name: 'divisionSlice',
    initialState: {
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(divisionData.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(divisionData.fulfilled, (state, action) => {
            state.loading = false;
            state.divisions = action.payload; // Set the division directly
        })
        .addCase(divisionData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default divisionSlice.reducer;
