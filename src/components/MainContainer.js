import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  console.log("movies: ", movies);
  if (movies === null) {
    return;
  }
  const mainMovie = movies[0];
  console.log("mainMovie: ", mainMovie);
  const { id, original_title, overview } = mainMovie;
  // console.log('title: ', title);

  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </>
  );
};
export default MainContainer;
