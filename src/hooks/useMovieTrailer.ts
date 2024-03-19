import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { movieVideoService } from "../services/movieService";
import { saveMovieTrailer } from "../redux/slices/moviesSlice";
import { IRootState } from "../model/RootState";
import { getMovieTrailer } from "../helpers/movieHelper";

export const useMovieTrailer = (movieId: number) => {
  const dispatch = useDispatch();
  const { movieTrailer } = useSelector((state: IRootState) => state.movies);

  const getMovieVideos = useCallback(async () => {
    const videos = await movieVideoService(movieId);
    const trailer = getMovieTrailer(videos.results);
    dispatch(saveMovieTrailer(trailer));
  }, [movieId, dispatch]);

  useEffect(() => {
    !movieTrailer.id && getMovieVideos();
  }, [getMovieVideos, movieTrailer]);
};
