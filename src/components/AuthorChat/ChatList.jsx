import React from "react";
import messaging from "../../assets/images/message_txt.png";
import settings from "../../assets/images/message_settings.png";
import edit from "../../assets/images/message_edit.png";

const ChatList = () => {
  return (
   
      <div className="readerBox">
        <div className="msgSetting d-flex justify-content-between align-items-center mb-3">
          <div>
            <img src={messaging} alt="Message" />
          </div>
          <div className="d-flex align-items-center gap-3">
            <img src={settings} alt="Settings" />
            <img src={edit} alt="Edit" />
          </div>
        </div>
        <div className="nameList d-flex align-items-center gap-2">
          <img
            className="img-fluid"
            src="./assets/images/chatProfile.png"
            alt=""
          />
          <div>
            <a href="#">Marvin Mckinney</a>
            <p>Lorem Ipsum is simply dummy text of</p>
          </div>
        </div>
      </div>
  
  );
};

export default ChatList;
