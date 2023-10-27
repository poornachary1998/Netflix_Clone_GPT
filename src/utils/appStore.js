import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import moviesReducer from "./moviesSlice.js";
import nowPlayingReducer from "./moviesSlice.js";
import popularMovieReducer from "./moviesSlice.js";
import topRatedMovieReducer from "./moviesSlice.js";
import upcomingMovieReducer from "./moviesSlice.js";
import GPTStateReducer from "./gptSlice.js";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: moviesReducer,
    nowPlaying: nowPlayingReducer,
    popularMovie: popularMovieReducer,
    topRatedMovie: topRatedMovieReducer,
    upcomingMovie: upcomingMovieReducer,
    GPT: GPTStateReducer,
  },
});

export default appStore;
