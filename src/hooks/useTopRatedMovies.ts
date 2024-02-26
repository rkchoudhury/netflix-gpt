import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { movieService } from "../services/movieService";
import { saveTopRatedMovie } from "../redux/slices/moviesSlice";
import { MOVIE_TYPE } from "../enums/movieTypeEnum";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = useCallback(async () => {
    const nowPlayingMovie = await movieService(MOVIE_TYPE.TOP_RATED);
    dispatch(saveTopRatedMovie(nowPlayingMovie?.results ?? []));
  }, [dispatch]);

  useEffect(() => {
    getTopRatedMovies();
  }, [getTopRatedMovies]);
};
