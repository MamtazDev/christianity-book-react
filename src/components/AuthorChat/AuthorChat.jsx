import React, { useContext, useEffect, useState } from "react";
import ChatList from "./ChatList";
import Conversation from "./Conversation";
import PageHeading from "../Utils/PageHeading";
import { AuthContext } from "../../contexts/AuthProvider";
import {
  getConversationOfAnUser,
  getConversationOfTwoUsers,
  getMessageByConversationId,
} from "../../api/conversations";

const AuthorChat = () => {
  const { user } = useContext(AuthContext);

  const [allMessages, setAllMessages] = useState([]);
  const [conversationId, setConversationId] = useState(null);

  const [allAdminConversations, setAllAdminConversations] = useState([]);
  const [selectedUserInfo, setSelectedUserInfo] = useState(null);

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

  const getAdminConversations = async () => {
    const allConversations = await getConversationOfAnUser(user?.data?._id);
    const sortedConversations = allConversations?.filter((i) => i.userInfo);
    setAllAdminConversations(sortedConversations);

    if (sortedConversations?.length > 0) {
      if (!conversationId) {
        const userConversationId = sortedConversations[0]?.conversationId;
        setConversationId(userConversationId);
        setSelectedUserInfo(sortedConversations[0]);
        const getMessageRes = await getMessageByConversationId(
          userConversationId
        );
        setAllMessages(getMessageRes);
      } else {
        const getMessageRes = await getMessageByConversationId(conversationId);
        setAllMessages(getMessageRes);
      }
    }
  };

  const handleUserConversationInfo = async (info) => {
    setSelectedUserInfo(info);
    setConversationId(info?.conversationId);
    const getMessageRes = await getMessageByConversationId(
      info?.conversationId
    );
    setAllMessages(getMessageRes);
  };
  console.log(allMessages, "ffffall");

  useEffect(() => {
    if (user) {
      if (user?.data?.role === "admin") {
        getAdminConversations();
      } else {
        getConversationId();
      }
    }
  }, [user]);
  return (
    <>
      <div className="container">
        <PageHeading path="/author-chat"> Chat with Author</PageHeading>
        <div className="authorChatBox mb-5 d-flex gap-4">
          <ChatList
            selectedUserInfo={selectedUserInfo}
            setSelectedUserInfo={setSelectedUserInfo}
            allAdminConversations={allAdminConversations}
            handleUserConversationInfo={handleUserConversationInfo}
          />
          <Conversation
            allMessages={allMessages}
            user={user?.data}
            conversationId={conversationId}
            getConversation={
              user?.data?.role === "admin"
                ? getAdminConversations
                : getConversationId
            }
            selectedUserInfo={selectedUserInfo}
          />
        </div>
      </div>
    </>
  );
};

export default AuthorChat;
