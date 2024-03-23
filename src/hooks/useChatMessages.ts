import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { updateChatMessage } from "../redux/slices/chatSlice";
import {
  generateRandomName,
  generateRandomString,
} from "../helpers/chatHelper";
import { generateUniqueId } from "../helpers/uniqueIdHelper";
import { CHAT_POLLING_INTERVAL_TIME } from "../utils/constants";

export const useChatMessages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const pollingIntervalTimmer = setInterval(() => {
      dispatch(
        updateChatMessage({
          id: generateUniqueId(),
          name: generateRandomName(),
          message: generateRandomString(20),
        })
      );
    }, CHAT_POLLING_INTERVAL_TIME);

    return () => {
      clearInterval(pollingIntervalTimmer);
    };
  }, [dispatch]);
};
