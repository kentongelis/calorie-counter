import { createSlice } from "@reduxjs/toolkit";

const caloriesSlice = createSlice({
    name: "calories",
    initialState: 0,
    reducers: {
        addCalories: (state, action) => state += action.payload,
        resetCalories: () => 0
    }
});

export const { addCalories, resetCalories } = caloriesSlice.actions;
export default caloriesSlice.reducer;