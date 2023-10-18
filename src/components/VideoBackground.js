import { useSelector } from "react-redux";
import useMovieTrailer from "./customHooks/useMovieTrailer";

const VideoBackground = () => {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  console.log("trailerVideo: ", trailerVideo);

  useMovieTrailer();

  return (
    <>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key}
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};
export default VideoBackground;
