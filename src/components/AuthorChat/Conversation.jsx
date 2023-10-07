import React, { useEffect, useState } from "react";
import profile from "../../assets/images/chatProfile.png";
import settings from "../../assets/images/message_settings.png";
import upload from "../../assets/images/imgUpload.png";
import attach from "../../assets/images/attachFile.png";
import submit from "../../assets/images/submit.png";
import "./AuthorChat.css";
const Conversation = () => {
  const initialState = [
    { type: "sender", content: [] },
    { type: "receiver", content: ["i got your message"] },
  ];
  const [chatData, setChatData] = useState(initialState);
  const [message, setMessage] = useState("");
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = () => {
    if (message.trim() !== "") {
      const newMessage = { type: "sender", content: [message] };
      const newMessageForReceiver = { type: "receiver", content: [message] };
      setChatData([...chatData, newMessage]);
      setMessage("");

      setTimeout(() => {
        setChatData((prevChatData) => [...prevChatData, newMessageForReceiver]);
      }, 2000);
    }
  };
  return (
    <div className="chatList">
      <div className="chatOwner d-flex justify-content-between align-items-center mb-5">
        <div className="d-flex align-items-center gap-2 profile_gap">
          <img className="img-fluid" src={profile} alt="" />
          <div>
            <a href="#">Marvin Mckinney</a>
            <span className="d-block">Active Now</span>
          </div>
        </div>
        <button className="button_click">
          <img src={settings} alt="" />
        </button>
      </div>
      {/* receiver */}
      {chatData.map((data, index) =>
        data.type === "receiver" ? (
          <div className="grayBox mb-3">
            <div className="whiteBox mb-3">
              <span className="d-block text-dark">you</span>
              <p>{data.content}</p>
            </div>
            <span className="d-block time">16.00</span>
          </div>
        ) : (
          <div className="answerBox ml-auto mb-3">
            <p className="mb-2">{data.content} </p>
            <span className="d-block time">16.00 .Read</span>
          </div>
        )
      )}
      <div className="dayTime d-flex align-items-center gap-1">
        <div className="weekDayLine"></div>
        <p>Dec 7/10</p>
        <div className="weekDayLine"></div>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="sendForm d-flex align-items-center gap-4">
          <div className="file-upload">
            <label htmlFor="file-input">
              <button type="button" className="button_click">
                <img src={attach} alt="Attached File" />
              </button>
            </label>
            <input id="file-input" type="file" />
          </div>
          <input
            className="textField"
            type="text"
            name="message"
            placeholder="Type your message here.."
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleSubmit}>
            <img className="img-fluid" src={submit} alt="Submit Button" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Conversation;
