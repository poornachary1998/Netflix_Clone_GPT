import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./customHooks/usePopularMovies";
import useTopRatedMovies from "./customHooks/useTopRatedMovies";
import useUpcomingMovies from "./customHooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearchPage from "./GPTSearchPage";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store?.GPT?.showGPTSearch);
  console.log("showGPTSearch: ", showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />
      {showGPTSearch ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
