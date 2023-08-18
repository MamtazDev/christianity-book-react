import React from "react";
import Header from "../components/Header/Header";
import ChatList from "../components/AuthorChat/ChatList";
import Conversation from "../components/AuthorChat/Conversation";
import arrow from "../assets/images/next_arrow.png";
import PageHeading from "../components/Utils/PageHeading";

const AuthorChat = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <PageHeading> Chat with Author</PageHeading>

        <div className="authorChatBox mb-5 d-flex gap-4">
          {/* <!-- chat name List Start --> */}
          <ChatList />
          {/* <!-- chat name List End --> */}

          {/* <!-- Message Box Start --> */}
          <Conversation />
          {/* <!-- Message Box End --> */}
        </div>
      </div>
    </div>
  );
};

export default AuthorChat;
