import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { MOVIE_TYPE, movieService } from "../services/movieService";
import { saveUpcomingMovie } from "../redux/slices/moviesSlice";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const upcomingMovie = await movieService(MOVIE_TYPE.UPCOMING);
    dispatch(saveUpcomingMovie(upcomingMovie?.results ?? []));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
