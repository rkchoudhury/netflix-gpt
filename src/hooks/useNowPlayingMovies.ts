import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { movieService } from "../services/movieService";
import { saveNowPlayingMovie } from "../redux/slices/moviesSlice";
import { MOVIE_TYPE } from "../enums/movieTypeEnum";
import { IRootState } from "../model/RootState";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const { nowPlayingMovie } = useSelector((state: IRootState) => state.movies);

  const getNowPlayingMovies = useCallback(async () => {
    const nowPlayingMovie = await movieService(MOVIE_TYPE.NOW_PLAYING);
    dispatch(saveNowPlayingMovie(nowPlayingMovie?.results ?? []));
  }, [dispatch]);

  useEffect(() => {
    !nowPlayingMovie?.length && getNowPlayingMovies();
  }, [getNowPlayingMovies, nowPlayingMovie]);
};
