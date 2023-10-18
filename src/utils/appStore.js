import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import moviesReducer from "./moviesSlice.js";
import nowPlayingReducer from "./moviesSlice.js";
import { addNowPlayingMovies } from "./moviesSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: moviesReducer,
    nowPlaying: nowPlayingReducer,
  },
});

export default appStore;
