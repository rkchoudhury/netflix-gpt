import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { movieVideoService } from "../services/movieService";
import { IMovieVideo } from "../model/movieModel";
import { saveMovieTrailer } from "../redux/slices/moviesSlice";

export const useMovieTrailer = (movieId: number) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const videos = await movieVideoService(movieId);
    const trailer = getMovieTrailer(videos.results);
    dispatch(saveMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

const getMovieTrailer = (videos: IMovieVideo[]): IMovieVideo => {
  const filterData = videos?.filter(
    (eachVideo: IMovieVideo) => eachVideo.type === "Trailer" //TODO: Here if we use VIDEO_TYPE_ENUM then it is throwing error
  );
  return filterData?.[0] ?? videos?.[0];
};
