import React, { useEffect } from "react";

import ChatMessage from "../../components/ChatMessage";
import { useDispatch } from "react-redux";
import { updateChatMessage } from "../../redux/slices/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateChatMessage({
        name: "Rakesh",
        message: "Heyy",
      })
    );
  }, [dispatch]);

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
