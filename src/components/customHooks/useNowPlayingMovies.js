import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
import { API_Constants } from "../../utils/constants";

const useNowPlayingMovies = () =>{
     // fetching the data and adding response to store.
  const dispatch = useDispatch();

  const getNowPlaying = async() =>{
    const data =  await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Constants);
    const json  = await data.json();
    console.log(json.results)

    dispatch(addNowPlayingMovies(json.results))
  }
  useEffect( ()=>{
    getNowPlaying()
  },[])
 
}

export default useNowPlayingMovies