import { useEffect, useState } from "react";
import { getRequest } from "../utils/service";
import { baseUrl } from "../utils/service";

export const useFetchRecipiientUser = (chat, user) => {
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const recipientId = chat?.members.find((id) => id !== user._id);

  console.log("chat", chat);

  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return null;
      const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);

      if (response.error) {
        return setError(error);
      }

      setRecipientUser(response);
    };
    getUser();
  }, []);

  return { recipientUser, error };
};
