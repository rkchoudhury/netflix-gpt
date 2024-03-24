import React from "react";

import { USER_ICON } from "../asserts";
import { IChatMessage } from "../model/chat";

const ChatMessage = ({ name, message }: IChatMessage) => {
  return (
    <div className="flex items-center text-white bg-gray-800 p-2 rounded-2xl mb-2">
      <img alt="profile-icon" src={USER_ICON} className="w-8" />
      <span className="mx-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
