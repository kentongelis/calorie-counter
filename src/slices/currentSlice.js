import { createSlice } from "@reduxjs/toolkit";

const currentSlice = createSlice({
    name: "current",
    initialState: null,
    reducers: {
        selectCurrent: (state, action) =>  action.payload,
        resetCurrent: () => null,
    }
});

export const { selectCurrent, resetCurrent } = currentSlice.actions;
export default currentSlice.reducer;