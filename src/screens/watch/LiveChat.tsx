import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatMessage from "../../components/ChatMessage";
import { IRootState } from "../../model/RootState";
import { IChatMessage } from "../../model/chat";
import { useChatMessages } from "../../hooks/useChatMessages";
import { updateChatMessage } from "../../redux/slices/chatSlice";
import { generateUniqueId } from "../../helpers/uniqueIdHelper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state: IRootState) => state.chat);

  const [liveMessage, setLiveMessage] = useState("");

  useChatMessages();

  const onPressSend = () => {
    dispatch(
      updateChatMessage({
        id: generateUniqueId(),
        name: "Rakesh",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <div className="bg-slate-900 p-2 w-96 h-[40rem] my-10">
      <h1 className="text-lg font-bold text-white mt-2 mb-4">Live Chat:</h1>
      <div className="overflow-y-scroll h-[32rem] flex flex-col-reverse">
        {messages.map((eachMessage: IChatMessage) => (
          <ChatMessage
            key={eachMessage.id}
            name={eachMessage.name}
            message={eachMessage.message}
          />
        ))}
      </div>
      <form
        className="flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          onPressSend();
        }}
      >
        <input
          className="flex-1 px-2 py-2 mx-2 my-2 rounded-sm"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          className="bg-green-400 px-4 h-10 rounded-full font-semibold"
          disabled={!liveMessage.length}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
