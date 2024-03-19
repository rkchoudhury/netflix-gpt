import { createSlice } from "@reduxjs/toolkit";

import { IGptState } from "../../model/RootState";

const initialState: IGptState = {
  showGptSearch: false,
  searchedMovies: [],
  showNoResultsMessage: false,
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
      state.showNoResultsMessage = !action.payload.length;
    },
    clearSearchedMovies: (state: IGptState) => {
      state.searchedMovies = [];
      state.showNoResultsMessage = false;
    },
    displayNoResultsMessage: (state: IGptState, action) => {
      state.showNoResultsMessage = action.payload;
    },
  },
});

const { actions, reducer } = gptSlice;

export const {
  toggleGptSearchView,
  saveSearchedMovies,
  clearSearchedMovies,
  displayNoResultsMessage,
} = actions;

export default reducer;
