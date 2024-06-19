import { useState, useContext, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";
import { baseUrl, getRequest } from "../utils/service";

export const useFetchLatestMessage = (chat) => {
  const { newMessage, notifications } = useContext(ChatContext);
  const [latestMessage, setLatestMessage] = useState(null);

  useEffect(() => {
    const getMessages = async () => {
      const response = await getRequest(`${baseUrl}/messages/${chat?._id}`);

      if (response.error) {
        console.log("Error fetching messages", response.error);
        return;
      }

      const lastMessage = response[response.length - 1];
      setLatestMessage(lastMessage);
    };

    if (chat?._id) {
      getMessages();
    }
  }, [newMessage, notifications, chat]);

  return { latestMessage };
};
