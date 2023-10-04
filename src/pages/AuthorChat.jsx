import React from "react";
import ChatList from "../components/AuthorChat/ChatList";
import Conversation from "../components/AuthorChat/Conversation";
import PageHeading from "../components/Utils/PageHeading";

const AuthorChat = () => {
  return (
    <div>
      <div className="container">
        <PageHeading path="/author-chat"> Chat with Author</PageHeading>

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
