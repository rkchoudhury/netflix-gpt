import React from "react";

import { IMovie } from "../../model/movieModel";
import PlayVideo from "../../components/PlayVideo";

interface IProps {
  movieDetails: IMovie;
  playedVideoKey: string;
}

const MainVideo = ({ movieDetails, playedVideoKey }: IProps) => {
  const { title, overview, release_date, vote_average } = movieDetails;

  const RowText = ({
    label,
    text,
  }: {
    label: string;
    text: string | number;
  }) => {
    return (
      <div className="my-4">
        <span className="text-lg text-white font-semibold">{label}: </span>
        <span className="text-lg text-white">{text}</span>
      </div>
    );
  };

  return (
    <div>
      <div className="flex-1">
        {playedVideoKey?.length > 0 && <PlayVideo videoId={playedVideoKey} />}
        <h1 className="text-2xl md:text-2xl font-bold text-white my-4">
          {title}
        </h1>
        <h1 className="text-lg text-white my-4">{overview}</h1>
        <RowText label="Released on" text={release_date} />
        <RowText label="Average Rating" text={vote_average} />
      </div>
    </div>
  );
};

export default MainVideo;
