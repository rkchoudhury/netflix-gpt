import { createSlice } from "@reduxjs/toolkit";

import { IGptState } from "../../model/RootState";

const initialState: IGptState = {
  showGptSearch: false,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

const { actions, reducer } = gptSlice;

export const { toggleGptSearchView } = actions;

export default reducer;
