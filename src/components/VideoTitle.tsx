import React from "react";

interface IProps {
  title: string;
  overview: string;
  onPressPlay: () => void;
}

const VideoTitle = (props: IProps) => {
  const { title, overview, onPressPlay } = props;

  return (
    <div className="pt-[20%] px-12 absolute bg-gradient-to-r from-black w-screen aspect-video text-white">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block w-1/3 text-lg py-6">{overview}</p>
      <div className="pt-2 md:pt-0">
        <button
          onClick={onPressPlay}
          className="bg-white px-2 py-1 md:px-12 md:py-4 rounded-lg text-sm md:text-lg text-black font-bold hover:opacity-80"
        >
          ▷ Play
        </button>
        <button
          onClick={onPressPlay}
          className="hidden md:inline-block bg-gray-800 px-12 py-4 rounded-lg text-lg text-white font-semibold opacity-80 mx-4 hover:opacity-90"
        >
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
