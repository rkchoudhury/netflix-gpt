import React from "react";

interface IProps {
  title: string;
  overview: string;
}

const VideoTitle = (props: IProps) => {
  const { title, overview } = props;

  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/3 text-lg py-6">{overview}</p>
      <div>
        <button className="bg-gray-500 px-12 py-4 rounded-lg text-lg text-white font-semibold opacity-50">
          ▷ Play
        </button>
        <button className="bg-gray-500 px-12 py-4 rounded-lg text-lg text-white font-semibold opacity-50 mx-4">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
