import React from "react";
import messaging from "../../assets/images/message_txt.png";
import settings from "../../assets/images/message_settings.png";
import edit from "../../assets/images/message_edit.png";
import profile from "../../assets/images/chatProfile.png";
import "./AuthorChat.css";
const ChatList = ({
  selectedUserInfo,
  setSelectedUserInfo,
  allAdminConversations,
  handleUserConversationInfo,
}) => {
  console.log(allAdminConversations, "aaa");
  return (
    <div className="readerBox">
      <div className="msgSetting d-flex justify-content-between align-items-center mb-3">
        <div>
          <img src={messaging} alt="Message" />
        </div>
        <div className="d-flex align-items-center gap-3">
          <button className="button_click">
            <img src={settings} alt="Settings" />
          </button>
          <button className="button_click">
            <img src={edit} alt="Edit" />
          </button>
        </div>
      </div>
      {allAdminConversations &&
        allAdminConversations.length > 0 &&
        allAdminConversations.map((item, idx) => (
          <div
            className={`nameList d-flex align-items-center gap-2 mb-2  ${
              item?.conversationId === selectedUserInfo?.conversationId &&
              "bg-light"
            }`}
            key={idx}
            style={{ cursor: "pointer" }}
            onClick={() => handleUserConversationInfo(item)}
          >
            <div className="d-flex align-items-center profile_gap">
              <img
                src={item?.userInfo?.image ? item?.userInfo?.image : profile}
                style={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "100%",
                  objectFit: "cover",
                }}
                alt=""
              />
              <div>
                <a href="#">{item?.userInfo?.userName}</a>
                {/* <p>Hi,Mark Obama How Are You? </p> */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ChatList;
