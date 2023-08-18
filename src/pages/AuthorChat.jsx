import React from "react";
import Header from "../components/Header/Header";
import ChatList from "../components/AuthorChat/ChatList";
import Conversation from "../components/AuthorChat/Conversation";
import arrow from "../assets/images/next_arrow.png";

const AuthorChat = () => {
  return (
    <div>
      <Header />

      <div className="container">
        <div className="forPosition">
          <div className="d-flex justify-content-start align-items-center mb-4 gap-2">
            <a href="index.html">Home</a>
            <img src={arrow} alt="Arrow" />
            <a href="" className="activePage">
              Chat with Author
            </a>
          </div>
        </div>
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
