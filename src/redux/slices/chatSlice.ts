import { createSlice } from "@reduxjs/toolkit";

import { IChatState } from "../../model/RootState";
import { IChatMessage } from "../../model/chat";
import { CHAT_THRESHOLD_LIMIT } from "../../utils/constants";

const initialState: IChatState = {
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateChatMessage: (state, { payload }: { payload: IChatMessage }) => {
      /**
       * Optimization
       * If number of chat message crosses the threshold limit then start removing the messages from the top
       * This will never freeze the browser and our state will never bolt
       */
      // if (state.messages.length > CHAT_THRESHOLD_LIMIT) {
      //   state.messages.pop();
      // }
      state.messages.splice(CHAT_THRESHOLD_LIMIT, 1); // splice(Postion from where the message will be deleted, number of messages to be deleted)

      state.messages.unshift(payload);
    },
    resetChat: () => {
      return initialState;
    },
  },
});

export const { updateChatMessage, resetChat } = chatSlice.actions;

export default chatSlice.reducer;
