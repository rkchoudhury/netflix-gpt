import { createSlice } from "@reduxjs/toolkit";
import { IMoviesState } from "../../model/RootState";
import { IMovieVideo } from "../../model/movieModel";

const initialState: IMoviesState = {
  nowPlayingMovie: [],
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
  },
});

const { actions, reducer } = moviesSlice;

export const { saveNowPlayingMovie, saveMovieTrailer } = actions;

export default reducer;
