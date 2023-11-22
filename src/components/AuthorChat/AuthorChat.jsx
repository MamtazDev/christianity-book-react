import React, { useContext, useEffect, useState } from "react";
import ChatList from "./ChatList";
import Conversation from "./Conversation";
import PageHeading from "../Utils/PageHeading";
import { AuthContext } from "../../contexts/AuthProvider";
import {
  getConversationOfTwoUsers,
  getMessageByConversationId,
} from "../../api/conversations";

const AuthorChat = () => {
  const { user } = useContext(AuthContext);

  const [allMessages, setAllMessages] = useState([]);
  const [conversationId, setConversationId] = useState(null);

  const getConversationId = async () => {
    const conversationIdRes = await getConversationOfTwoUsers(user?.data?._id);

    if (conversationIdRes?._id) {
      setConversationId(conversationIdRes?._id);
      const getMessageRes = await getMessageByConversationId(
        conversationIdRes?._id
      );
      setAllMessages(getMessageRes);
    }
  };

  useEffect(() => {
    getConversationId();
  }, [user]);
  return (
    <>
      <div className="container">
        <PageHeading path="/author-chat"> Chat with Author</PageHeading>
        <div className="authorChatBox mb-5 d-flex gap-4">
          <ChatList />
          <Conversation
            allMessages={allMessages}
            user={user?.data}
            conversationId={conversationId}
            getConversationId={getConversationId}
          />
        </div>
      </div>
    </>
  );
};

export default AuthorChat;
