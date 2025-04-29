import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "../slices/mealsSlice.js";
import { loadState, saveState } from "./localStorage.js"; 

const preloadedState = loadState();

export const store = configureStore({
    reducer: {
        meals: mealsReducer
    },
    preloadedState
});

store.subscribe(() => {
    const state = store.getState();
    saveState({ meals: state.meals })
})