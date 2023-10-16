import React from 'react'
import Header from "./Header"
import useNowPlayingMovies from './customHooks/useNowPlayingMovies';

const Browse = () => {
useNowPlayingMovies();
  return <><Header/></>;
};

export default Browse;
