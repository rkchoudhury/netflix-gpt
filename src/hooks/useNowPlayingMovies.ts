import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { movieService } from "../services/movieService";
import { saveNowPlayingMovie } from "../redux/slices/moviesSlice";
import { MOVIE_TYPE } from "../enums/movieTypeEnum";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const nowPlayingMovie = await movieService(MOVIE_TYPE.NOW_PLAYING);
    dispatch(saveNowPlayingMovie(nowPlayingMovie?.results ?? []));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
