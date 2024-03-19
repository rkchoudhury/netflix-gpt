import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { movieVideoService } from "../services/movieService";
import { saveMovieVideos } from "../redux/slices/watchSlice";

export const useMovieVideos = (movieId: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      const videos = await movieVideoService(movieId);
      dispatch(saveMovieVideos(videos?.results));
    };
    getMovieVideos();
  }, [movieId, dispatch]);
};
