import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
  },
  reducers: {
    saveNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
  },
});

const { actions, reducer } = moviesSlice;

export const { saveNowPlayingMovie } = actions;

export default reducer;
