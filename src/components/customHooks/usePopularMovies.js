import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_Constants } from "../../utils/constants";
import { addPopularMovies } from "../../utils/moviesSlice";

const usePopularMovies = () => {
  // fetching the data and adding response to store.
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
        'https://api.themoviedb.org/3/movie/popular?&page=1',
      API_Constants,
    );
    const json = await data.json();
    console.log('json: ', json);

    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
