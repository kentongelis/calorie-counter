import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "../slices/mealsSlice.js";
import caloriesReducer from "../slices/calorieSlice.js";
import { loadState, saveState } from "./localStorage.js"; 

const preloadedState = loadState();

export const store = configureStore({
    reducer: {
        meals: mealsReducer,
        calories: caloriesReducer,
    },
    preloadedState
});

store.subscribe(() => {
    const state = store.getState();
    saveState({ 
        meals: state.meals,
        calories: state.calories
    });
});