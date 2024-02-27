import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { movieService } from "../services/movieService";
import { saveUpcomingMovie } from "../redux/slices/moviesSlice";
import { MOVIE_TYPE } from "../enums/movieTypeEnum";
import { IRootState } from "../model/RootState";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const { upcomingMovies } = useSelector((state: IRootState) => state.movies);

  const getUpcomingMovies = useCallback(async () => {
    const upcomingMovie = await movieService(MOVIE_TYPE.UPCOMING);
    dispatch(saveUpcomingMovie(upcomingMovie?.results ?? []));
  }, [dispatch]);

  useEffect(() => {
    !upcomingMovies?.length && getUpcomingMovies();
  }, [getUpcomingMovies, upcomingMovies]);
};
