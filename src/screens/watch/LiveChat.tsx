import React from "react";
import { useSelector } from "react-redux";

import ChatMessage from "../../components/ChatMessage";
import { IRootState } from "../../model/RootState";
import { IChatMessage } from "../../model/chat";
import { useChatMessages } from "../../hooks/useChatMessages";

const LiveChat = () => {
  const { messages } = useSelector((state: IRootState) => state.chat);

  useChatMessages();

  return (
    <div className="bg-slate-900 p-2 w-96 h-[35rem] my-10">
      <h1 className="text-lg font-bold text-white mt-2 mb-4">Live Chat:</h1>
      <div className="overflow-y-scroll h-[30rem]">
        {messages.map((eachMessage: IChatMessage) => (
          <ChatMessage
            key={eachMessage.id}
            name={eachMessage.name}
            message={eachMessage.message}
          />
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
