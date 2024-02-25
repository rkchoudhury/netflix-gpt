import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { MOVIE_TYPE, movieService } from "../services/movieService";
import { savePopularMovie } from "../redux/slices/moviesSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const nowPlayingMovie = await movieService(MOVIE_TYPE.POPULAR);
    dispatch(savePopularMovie(nowPlayingMovie?.results ?? []));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};
