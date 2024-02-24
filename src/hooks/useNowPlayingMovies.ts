import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { nowPlayingMovieService } from "../services/movieService";
import { saveNowPlayingMovie } from "../redux/slices/moviesSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const nowPlayingMovie = await nowPlayingMovieService();
    dispatch(saveNowPlayingMovie(nowPlayingMovie?.results ?? []));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
