import { useEffect } from "react";

import { nowPlayingMovieService } from "../services/movieService";

export const useNowPlayingMovie = () => {
  const getNowPlayingMovie = async () => {
    const nowPlayingMovie = await nowPlayingMovieService();
    console.log(nowPlayingMovie);
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};
