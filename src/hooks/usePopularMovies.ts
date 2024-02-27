import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { movieService } from "../services/movieService";
import { savePopularMovie } from "../redux/slices/moviesSlice";
import { MOVIE_TYPE } from "../enums/movieTypeEnum";
import { IRootState } from "../model/RootState";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const { popularMovies } = useSelector((state: IRootState) => state.movies);

  const getPopularMovies = useCallback(async () => {
    const popularMovies = await movieService(MOVIE_TYPE.POPULAR);
    dispatch(savePopularMovie(popularMovies?.results ?? []));
  }, [dispatch]);

  useEffect(() => {
    !popularMovies?.length && getPopularMovies();
  }, [getPopularMovies, popularMovies]);
};
