import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { getConversationOfTwoUsers } from "../api/conversations";

const useConversationIdCheck = () => {
  const { user } = useContext(AuthContext);

  const [conversationId, setConversationId] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:8000/api/conversations/users/${user?.data?._id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data._id) {
            setConversationId(true);
            setIsLoading(false);
          }
        });
    }
  }, [user]);

  return { conversationId, isLoading };
};

export default useConversationIdCheck;
