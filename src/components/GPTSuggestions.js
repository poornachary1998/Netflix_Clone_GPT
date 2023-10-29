import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSuggestions = () => {
  const { gptMovies, tmdbMovies } = useSelector((store) => store.GPT);
  if (!tmdbMovies) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div>
        {gptMovies?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={tmdbMovies[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTSuggestions;
