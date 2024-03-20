import React from "react";

import VideoCard from "../../components/VideoCard";
import { IMovieVideo } from "../../model/movieModel";

interface IProps {
  videos: IMovieVideo[];
  currentVideoKey: string;
}

const MoreVideoContainer = ({ videos, currentVideoKey }: IProps) => {
  return (
    <div className="">
      <div className="bg-slate-900 md:w-96 md:ml-4 p-2 md:p-4 md:h-full">
        <h2 className="text-white text-lg font-medium mb-4">All Videos</h2>
        <div className="overflow-y-scroll h-screen">
          {videos?.map((eachVideo: IMovieVideo) => (
            <VideoCard
              video={eachVideo}
              key={eachVideo.id}
              isSelctedVideo={eachVideo.key === currentVideoKey}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreVideoContainer;
