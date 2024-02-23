import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  photoURL: "",
  uid: "",
  displayName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
    removeUser: () => {
      return {
        ...initialState,
      };
    },
    updateUserInfo: (state, actions) => {
      return {
        ...state,
        displayName: actions.payload.name,
      };
    },
  },
});

const { actions, reducer } = userSlice;

export const { addUser, removeUser, updateUserInfo } = actions;

export default reducer;
