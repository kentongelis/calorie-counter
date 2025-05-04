import { createSlice } from "@reduxjs/toolkit";

const mealsSlice = createSlice({
    name: "meals",
    initialState: {
        Breakfast: [],
        Lunch: [],
        Dinner: [],
    },
    reducers: {
        addMeal: (state, action) => {
            const { mealType, item } = action.payload;
            state[mealType].push(item);
        },
        clearMeals: (state) => {
            state["Breakfast"] = [];
            state["Lunch"] = [];
            state["Dinner"] = [];
        }
    }
});

export const { addMeal, clearMeals } = mealsSlice.actions;
export default mealsSlice.reducer;