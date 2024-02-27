import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { movieVideoService } from "../services/movieService";
import { IMovieVideo } from "../model/movieModel";
import { saveMovieTrailer } from "../redux/slices/moviesSlice";
import { VIDEO_TYPE_ENUM } from "../enums/videoTypeEnum";
import { IRootState } from "../model/RootState";

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

const getMovieTrailer = (videos: IMovieVideo[]): IMovieVideo => {
  const filterData = videos?.filter(
    (eachVideo: IMovieVideo) => eachVideo.type === VIDEO_TYPE_ENUM.TRAILER
  );
  return filterData?.[0] ?? videos?.[0];
};
