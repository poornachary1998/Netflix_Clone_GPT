import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_Constants } from "../../utils/constants";
import { addPopularMovies, addTopRatedMovies } from "../../utils/moviesSlice";

const useTopRatedMovies = () => {
  // fetching the data and adding response to store.
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      API_Constants,
    );
    const json = await data.json();
    console.log("json: ", json);

    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
