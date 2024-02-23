import { createSlice } from "@reduxjs/toolkit";

import { IUserState } from "../../model/RootState";

const initialState: IUserState = {
  email: "",
  photoURL: "",
  uid: "",
  displayName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state: IUserState, { payload }) => {
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
    updateUserInfo: (state: IUserState, actions) => {
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
