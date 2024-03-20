import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { IMovieVideo } from "../model/movieModel";
import { updateNowPlayingVideoKey } from "../redux/slices/watchSlice";

interface IProps {
  video: IMovieVideo;
  isSelctedVideo?: boolean;
}

const VideoCard = ({ video, isSelctedVideo }: IProps) => {
  const dispatch = useDispatch();
  const { id, name, key } = video;

  const onPressCard = useCallback(() => {
    dispatch(updateNowPlayingVideoKey(key));
  }, [key, dispatch]);

  const color = isSelctedVideo ? "bg-green-300" : "bg-slate-400";

  return (
    <div>
      <div
        className="shadow-lg rounded-lg bg-slate-500 cursor-pointer mb-2 md:mb-4"
        key={id}
        onClick={onPressCard}
      >
        <div
          className={`hover:bg-red-300 rounded-lg md:h-32 flex justify-center items-center ${color}`}
        >
          <img
            alt="play"
            className="h-24"
            src="https://static.thenounproject.com/png/2614130-200.png"
          />
        </div>
        <h1 className="p-1 md:p-2">{name}</h1>
      </div>
    </div>
  );
};

export default VideoCard;
