import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import { movieService } from "../services/movieService";
import { saveUpcomingMovie } from "../redux/slices/moviesSlice";
import { MOVIE_TYPE } from "../enums/movieTypeEnum";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = useCallback(async () => {
    const upcomingMovie = await movieService(MOVIE_TYPE.UPCOMING);
    dispatch(saveUpcomingMovie(upcomingMovie?.results ?? []));
  }, [dispatch]);

  useEffect(() => {
    getUpcomingMovies();
  }, [getUpcomingMovies]);
};
