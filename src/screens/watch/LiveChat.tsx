import React from "react";
import ChatMessage from "../../components/ChatMessage";

const LiveChat = () => {
  return (
    <div className="bg-slate-900 p-2 w-96 h-[35rem] my-10">
      <h1 className="text-lg font-bold text-white mt-2 mb-4">Live Chat:</h1>
      <div className="overflow-y-scroll h-[30rem]">
        <ChatMessage name="Rakesh Choudhury" message="Namaste React!!" />
      </div>
    </div>
  );
};

export default LiveChat;
