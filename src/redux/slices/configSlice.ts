import { createSlice } from "@reduxjs/toolkit";

import { IConfigState } from "../../model/RootState";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  } as IConfigState,
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;
