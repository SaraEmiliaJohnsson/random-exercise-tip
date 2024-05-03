import { createAction, createReducer } from "@reduxjs/toolkit";



export enum ExerciseStatus {
    NORMAL,
    FETCHING,
    SUCCESS,
    FAILURE
}

interface Exercise {
    fact: string | null;
    status: ExerciseStatus;
}

const initialState: Exercise = {
    fact: null,
    status: ExerciseStatus.NORMAL
}

const isfetching = createAction('is fetching exorcise');
const success = createAction<string>('success fetching exercise');
const failure = createAction('failure fetching exercise');

const fetchActions = { isfetching, success, failure }

const randomExerciseReducer = createReducer(initialState, builder => {
    builder
        .addCase(isfetching, (state, action) => ({
            status: ExerciseStatus.FETCHING,
            fact: state.fact
        }))
        .addCase(success, (state, action) => ({
            status: ExerciseStatus.SUCCESS,
            fact: action.payload
        }))
        .addCase(failure, (state) => ({
            status: ExerciseStatus.FAILURE,
            fact: state.fact
        }));
})

export { fetchActions, randomExerciseReducer }