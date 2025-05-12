import { createSlice } from "@reduxjs/toolkit";

const calorieSlice = createSlice({
    name: "calories",
    initialState: 0,
    reducers: {
        addCalories: (state, action) => {
            return state + action.payload;
        },
        subtractCalories: (state, action) => {
            return state - action.payload;
        },
        resetCalories: () => {
            return 0;
        }
    }
});

export const { addCalories, subtractCalories, resetCalories } = calorieSlice.actions;
export default calorieSlice.reducer;