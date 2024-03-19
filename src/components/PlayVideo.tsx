import React from "react";

interface IProps {
  videoId: string;
}

const PlayVideo = ({ videoId }: IProps) => {
  return (
    <div className="border border-red-500">
      <iframe
        key={videoId}
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default PlayVideo;
