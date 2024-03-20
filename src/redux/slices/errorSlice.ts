import { createSlice } from "@reduxjs/toolkit";

import { IErrorState } from "../../model/RootState";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    isError: false,
  } as IErrorState,
  reducers: {
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { setIsError } = errorSlice.actions;

export default errorSlice.reducer;
