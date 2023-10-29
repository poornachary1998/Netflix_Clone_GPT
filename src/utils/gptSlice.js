import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPTState",
  initialState: {
    showGPTSearch: false,
    gptMovies: null,
    tmdbMovies:null,
  },
  reducers: {
    gptState: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResult :(state, action)=>{

const {gptMovies,tmdbMovies}  =    action.payload;
      state.gptMovies = gptMovies
      state.tmdbMovies = tmdbMovies
    }
  },
});
export const { gptState,addGPTMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
