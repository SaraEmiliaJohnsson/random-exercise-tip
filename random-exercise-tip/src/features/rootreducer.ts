import { combineReducers } from "@reduxjs/toolkit";
import { randomExerciseReducer } from "./randomExercise";



const rootReducer = combineReducers({
    RandomExercise: randomExerciseReducer,
});

export { rootReducer };