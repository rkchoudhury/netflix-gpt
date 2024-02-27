import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { movieService } from "../services/movieService";
import { saveTopRatedMovie } from "../redux/slices/moviesSlice";
import { MOVIE_TYPE } from "../enums/movieTypeEnum";
import { IRootState } from "../model/RootState";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const { topRatedMovies } = useSelector((state: IRootState) => state.movies);

  const getTopRatedMovies = useCallback(async () => {
    const topRatedMovies = await movieService(MOVIE_TYPE.TOP_RATED);
    dispatch(saveTopRatedMovie(topRatedMovies?.results ?? []));
  }, [dispatch]);

  useEffect(() => {
    topRatedMovies.length === 0 && getTopRatedMovies();
  }, [getTopRatedMovies, topRatedMovies]);
};
