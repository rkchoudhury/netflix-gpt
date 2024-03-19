import React from "react";
import { useSelector } from "react-redux";

import MainVideo from "./MainVideo";
import MoreVideoContainer from "./MoreVideoContainer";
import { useMovieVideos } from "../../hooks/useMovieVideos";
import { IRootState } from "../../model/RootState";

const VideoContainer = () => {
  const { movieVideos, selectedMovie, nowPlayingVideoKey } = useSelector(
    (state: IRootState) => state.watch
  );
  const { id } = selectedMovie;

  useMovieVideos(id);

  return (
    <div>
      <div className="mx-8 mt-4 flex">
        <MainVideo
          movieDetails={selectedMovie}
          playedVideoKey={nowPlayingVideoKey}
        />
        <MoreVideoContainer
          videos={movieVideos}
          currentVideoKey={nowPlayingVideoKey}
        />
      </div>
    </div>
  );
};

export default VideoContainer;
