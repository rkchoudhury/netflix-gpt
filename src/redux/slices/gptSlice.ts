import { createSlice } from "@reduxjs/toolkit";

import { IGptState } from "../../model/RootState";

const initialState: IGptState = {
  showGptSearch: false,
  searchedMovies: [],
};

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    saveSearchedMovies: (state: IGptState, action) => {
      state.searchedMovies = action.payload;
    },
    clearSearchedMovies: (state: IGptState) => {
      state.searchedMovies = [];
    },
  },
});

const { actions, reducer } = gptSlice;

export const { toggleGptSearchView, saveSearchedMovies, clearSearchedMovies } =
  actions;

export default reducer;
