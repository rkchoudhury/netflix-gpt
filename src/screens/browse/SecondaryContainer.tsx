import React from "react";
import { useSelector } from "react-redux";

import MovieList from "../../components/MovieList";
import { IRootState } from "../../model/RootState";

const SecondaryContainer = () => {
  const { nowPlayingMovie, popularMovies, topRatedMovies, upcomingMovies } =
    useSelector((state: IRootState) => state.movies);

  return (
    <div className="bg-black">
      <div className="-mt-16 md:-mt-52 relative z-20">
        {nowPlayingMovie?.length && (
          <MovieList title={"Now Playing"} movies={nowPlayingMovie} />
        )}
        {popularMovies?.length && (
          <MovieList title={"Popular"} movies={popularMovies} />
        )}
        {topRatedMovies?.length && (
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
        )}
        {upcomingMovies?.length && (
          <MovieList title={"Upcoming"} movies={upcomingMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
