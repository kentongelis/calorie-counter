import { createSlice } from "@reduxjs/toolkit";

const mealsSlice = createSlice({
    name: "meals",
    initialState: {
        breakfast: [],
        lunch: [],
        dinner: [],
    },
    reducers: {
        addMeal: (state, action) => {
            const { mealType, item } = action.payload;
            state[mealType].push(item)
        },
        clearMeals: (state, action) => {
            const { mealType } = action.payload;
            state[mealType] = [];
        }
    }
});

export const { addMeal } = mealsSlice.actions;
export default mealsSlice.reducer;