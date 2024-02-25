import React from "react";
import { useSelector } from "react-redux";

import MovieList from "../../components/MovieList";
import { IRootState } from "../../model/RootState";

const SecondaryContainer = () => {
  const { nowPlayingMovie } = useSelector((state: IRootState) => state.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20">
        {nowPlayingMovie?.length && (
          <MovieList title={"Now Playing"} movies={nowPlayingMovie} />
        )}
        {nowPlayingMovie?.length && (
          <MovieList title={"Now Playing"} movies={nowPlayingMovie} />
        )}
        {nowPlayingMovie?.length && (
          <MovieList title={"Now Playing"} movies={nowPlayingMovie} />
        )}
        {nowPlayingMovie?.length && (
          <MovieList title={"Now Playing"} movies={nowPlayingMovie} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
