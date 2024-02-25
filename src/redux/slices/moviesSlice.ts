import { createSlice } from "@reduxjs/toolkit";
import { IMoviesState } from "../../model/RootState";
import { IMovieVideo } from "../../model/movieModel";

const initialState: IMoviesState = {
  nowPlayingMovie: [],
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  movieTrailer: {} as IMovieVideo,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    saveNowPlayingMovie: (state: IMoviesState, action) => {
      state.nowPlayingMovie = action.payload;
    },
    saveMovieTrailer: (state: IMoviesState, action) => {
      state.movieTrailer = action.payload;
    },
    savePopularMovie: (state: IMoviesState, action) => {
      state.popularMovies = action.payload;
    },
    saveTopRatedMovie: (state: IMoviesState, action) => {
      state.topRatedMovies = action.payload;
    },
    saveUpcomingMovie: (state: IMoviesState, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

const { actions, reducer } = moviesSlice;

export const {
  saveNowPlayingMovie,
  saveMovieTrailer,
  savePopularMovie,
  saveTopRatedMovie,
  saveUpcomingMovie,
} = actions;

export default reducer;
