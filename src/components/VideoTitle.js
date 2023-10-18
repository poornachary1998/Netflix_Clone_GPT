const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="w-4/6 mt-5">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-2 px-10 text-xl bg-opacity-50 rounded-lg">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-7 text-xl bg-opacity-50 rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
