import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        runtime: {},
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getRuntime: (state, action) => {
            state.runtime = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getRuntime } = homeSlice.actions;

export default homeSlice.reducer;
