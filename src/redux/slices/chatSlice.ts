import { createSlice } from "@reduxjs/toolkit";

import { IChatState } from "../../model/RootState";
import { IChatMessage } from "../../model/chat";

const initialState: IChatState = {
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateChatMessage: (state, { payload }: { payload: IChatMessage }) => {
      state.messages.push(payload);
    },
    resetChat: () => {
      return initialState;
    },
  },
});

export const { updateChatMessage, resetChat } = chatSlice.actions;

export default chatSlice.reducer;
