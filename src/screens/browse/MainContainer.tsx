import React from "react";
import { useSelector } from "react-redux";

import VideoBackground from "../../components/VideoBackground";
import VideoTitle from "../../components/VideoTitle";
import { IRootState } from "../../model/RootState";

const MainContainer = () => {
  const movies = useSelector(
    (state: IRootState) => state.movies?.nowPlayingMovie
  );

  if (movies?.length === 0) return null;

  const mainMovie = movies?.[0];
  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
