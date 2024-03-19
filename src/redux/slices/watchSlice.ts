import { createSlice } from "@reduxjs/toolkit";

import { IWatchState } from "../../model/RootState";
import { IMovie } from "../../model/movieModel";
import { getMovieTrailer } from "../../helpers/movieHelper";

const initialState: IWatchState = {
  selectedMovie: {} as IMovie,
  movieVideos: [],
  nowPlayingVideoKey: "",
};

const watchSlice = createSlice({
  name: "watch",
  initialState,
  reducers: {
    saveSelectedMovie: (state, { payload }) => {
      state.selectedMovie = payload;
    },
    saveMovieVideos: (state, { payload }) => {
      state.movieVideos = payload;
      state.nowPlayingVideoKey = getMovieTrailer(payload)?.key ?? "";
    },
    updateNowPlayingVideoKey: (state, { payload }) => {
      state.nowPlayingVideoKey = payload;
    },
    clearWatchState: (state) => {
      return initialState;
    },
  },
});

const { actions, reducer } = watchSlice;

export const {
  saveSelectedMovie,
  saveMovieVideos,
  updateNowPlayingVideoKey,
  clearWatchState,
} = actions;

export default reducer;
