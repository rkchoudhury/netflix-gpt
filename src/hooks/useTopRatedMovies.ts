import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { MOVIE_TYPE, movieService } from "../services/movieService";
import { saveTopRatedMovie } from "../redux/slices/moviesSlice";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const nowPlayingMovie = await movieService(MOVIE_TYPE.TOP_RATED);
    dispatch(saveTopRatedMovie(nowPlayingMovie?.results ?? []));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
