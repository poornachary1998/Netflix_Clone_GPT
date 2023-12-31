const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-ratio-video pt-[15%] px-12 text-white absolute bg-gradient-to-right-from black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-3 text-lg w-1/2 mt-5">{overview}</p>
      <div className="p-2">
        <button className="bg-white text-black p-2 px-10 text-xl rounded-lg hover:bg-opacity-70">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-7 text-xl bg-opacity-50 rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
