import React, { useRef } from "react";
import openai from "../utils/OpenAI";
import { API_Constants } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {

  const dispatch  = useDispatch();
const searchText = useRef(null);

const tmdbMoviesSearch = async(movie)=>{
 const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_Constants)
 const json =  await data.json();
  return json.results;
}

  const handleGPTSearch = async () =>{
    const query =
    "Act as a Movie recomendation system and suggest some movies for query: " +
    searchText.current.value +
    "Only give me 5 Movies comma seperated like the example result given ahead. Example Result: Gadar, Sholy, Goalmall";
 
const gptResults =  await openai.chat.completions.create({
      messages: [{ role: 'user', content: query}],
      model: 'gpt-3.5-turbo',
    });
  // The Conjuring, The Exorcist, Halloween, A Nightmare on Elm Street, Insidious, The Shining, Psycho, It Follows, Sinister, Texas Chainsaw Massacre
    // console.log(gptResults?.choices[0]?.message?.content);

    const getMovies  = gptResults?.choices[0]?.message?.content.split(',')
    // console.log('getMovies: ', getMovies);
    // returns an array --> We need to search the same results in TMDB and show the movies which are available in tmdb


    // For each movie from GPT i need to search in TMDB;

    const movieResultsPromises = getMovies.map((movie)=> tmdbMoviesSearch(movie))
    // [promise,promise,promise,promise,promise]
    // The above api calls 5 time but not shows results directly because its an async function it returns 5 Promises.
  
    const commonMoviesInTMDB = await Promise.all(movieResultsPromises)
    console.log('commonMoviesInTMDB: ', commonMoviesInTMDB);
    // we are sending gpt movies and tmdb movies to slice to save the values in store as object. 
    dispatch(addGPTMovieResult({gptMovies: getMovies,tmdbMovies: commonMoviesInTMDB}))
  
  }
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=> e.preventDefault()}>
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder="Want to see better suggestions for search in netflix?"
        ></input>

        <button className="col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg" onClick={handleGPTSearch}>
          GPT Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
