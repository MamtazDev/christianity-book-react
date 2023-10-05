import React from "react";
import messaging from "../../assets/images/message_txt.png";
import settings from "../../assets/images/message_settings.png";
import edit from "../../assets/images/message_edit.png";
import profile from "../../assets/images/chatProfile.png";
import "./AuthorChat.css";
const ChatList = () => {
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
      <div className="nameList d-flex align-items-center gap-2">
        <div className="d-flex align-items-center profile_gap">
          <img src={profile} alt="" />
          <div>
            <a href="#">Marvin Mckinney</a>
            <p>Lorem Ipsum is simply dummy text of</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
