import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import moviesSlice from "./slices/moviesSlice";
import gptSlice from "./slices/gptSlice";
import configSlice from "./slices/configSlice";
import watchSlice from "./slices/watchSlice";
import errorSlice from "./slices/errorSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    gpt: gptSlice,
    config: configSlice,
    watch: watchSlice,
    error: errorSlice,
  },
});

export { store };
