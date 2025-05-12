import { createSlice } from "@reduxjs/toolkit";

const mealsSlice = createSlice({
    name: "meals",
    initialState: {
        Breakfast: [],
        Lunch: [],
        Dinner: [],
        Snacks: [],
    },
    reducers: {
        addMeal: (state, action) => {
            const { mealType, item } = action.payload;
            const itemWithId = {
                ...item,
                uniqueId: item.uniqueId || `${item.id}-${Date.now()}`
            };
            state[mealType].push(itemWithId);
        },
        removeMeal: (state, action) => {
            const { mealType, uniqueId } = action.payload;
            state[mealType] = state[mealType].filter(
                item => item.uniqueId !== uniqueId
            );
        },
        clearMeals: (state) => {
            state["Breakfast"] = [];
            state["Lunch"] = [];
            state["Dinner"] = [];
            state["Snacks"] = [];
        }
    }
});

export const { addMeal, removeMeal, clearMeals } = mealsSlice.actions;
export default mealsSlice.reducer;