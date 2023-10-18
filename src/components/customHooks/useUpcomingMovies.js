import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_Constants } from "../../utils/constants";
import { addUpcomingMovies } from "../../utils/moviesSlice";

const useUpcomingMovies = () => {
  // fetching the data and adding response to store.
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      API_Constants,
    );
    const json = await data.json();
    console.log("json: ", json);

    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
