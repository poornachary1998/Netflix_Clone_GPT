import { useDispatch } from "react-redux";
import { API_Constants } from "../../utils/constants";
import { addTrailerVideo } from "../../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = ({ id }) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_Constants,
    );
    const json = await data.json();
    console.log("json: ", json);

    // in json we get all the videos related to the ID's but we need to filter which has the type of trailer to show in the background.
    const filterTrailer = json.results.filter(
      (video) => video.type === "Teaser",
    );
    console.log("filterTrailer: ", filterTrailer);
    // if theere are no type of trailers then it will take the json results of any time and play any video.
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    console.log("trailer: ", trailer);

    // in trailer response we have trailer key for youtube. example: https://www.youtube.com/watch?v=83_7HQuIQfU after query is the key

    // click on share button and select embed code and select embed code.
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
