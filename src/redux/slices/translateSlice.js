import { createSlice } from "@reduxjs/toolkit";
import { getLanguages, translateText } from "../actions/translateActions";

const initialState = {
    // diller icin
    isLoading: true,
    isError: false,
    languages: [],
    // cevrilen text icin
    isAnswerLoading: false,
    isAnswerError: false,
    answer: "",
}

export const translateSlice = createSlice({
    name:"translate",
    initialState,
    extraReducers: {
        [getLanguages.pending]: (state) => {
            state.isLoading = true;
        },

        [getLanguages.fulfilled] : (state, action) => {
            state.languages = action.payload; 
            state.isLoading = false;
            state.isError = false;
            
        },

        [getLanguages.rejected] : (state) => {
            state.isLoading = false;
            state.isError = true;
        },


        [translateText.pending] : (state) => {
            state.isAnswerLoading = false;
        },
        [translateText.fulfilled]: (state, action) => {
            state.isAnswerLoading = false;
            state.answer = action.payload; 
        },
        [translateText.rejected] : (state) => {
            state.isAnswerLoading = false;
            state.isAnswerError = true;
        },
    },
    reducers: {
        clearAnswer: (state) => {
            state.answer = '';
        },
    },
});

export default translateSlice.reducer;

export const clearAnswer = translateSlice.actions.clearAnswer;