import React from "react";
import ChatList from "./ChatList";
import Conversation from "./Conversation";
import PageHeading from "../Utils/PageHeading";

const AuthorChat = () => {
  return (
    <>
      <div className="container">
        <PageHeading path="/author-chat"> Chat with Author</PageHeading>
        <div className="authorChatBox mb-5 d-flex gap-4">
          <ChatList />
          <Conversation />
        </div>
      </div>
    </>
  );
};

export default AuthorChat;
