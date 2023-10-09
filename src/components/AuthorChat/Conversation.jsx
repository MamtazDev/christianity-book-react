import React, { useEffect, useRef, useState } from "react";
import profile from "../../assets/images/chatProfile.png";
import settings from "../../assets/images/message_settings.png";
// import upload from "../../assets/images/imgUpload.png";
import attach from "../../assets/images/attachFile.png";
import submit from "../../assets/images/submit.png";
import "./AuthorChat.css";
const Conversation = () => {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes}${ampm}`;
  };
  const [chatData, setChatData] = useState([
    { type: "sender", content: "HI", timestamp: getCurrentTime() },
    {
      type: "receiver",
      content: "i got your message",
      timestamp: getCurrentTime(),
    },
  ]);
  const [message, setMessage] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const fileUploader = useRef(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [file, setFile] = useState(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };
 /*  const handleSubmit = () => {
    if (message.trim() !== "" || file) {
      const newMessage = {
        type: "sender",
        content: message,
        file: file ? URL.createObjectURL(file) : null,
        timestamp: getCurrentTime(),
      };
      const newMessageForReceiver = {
        type: "receiver",
        content: message,
        timestamp: getCurrentTime(),
      };
      setChatData([...chatData, newMessage]);
      setMessage("");
      setSelectedFileName("");
      setFile(null);

      setTimeout(() => {
        setChatData((prevChatData) => [...prevChatData, newMessageForReceiver]);
      }, 2000);
    }
  }; */
  const handleSubmit = () => {
    if (message.trim() !== "" || file) {
      const newMessage = {
        type: "sender",
        content: message,
        file: file ? URL.createObjectURL(file) : null,
        timestamp: getCurrentTime(),
      };
      const newMessageForReceiver = {
        type: "receiver",
        content: message,
        timestamp: getCurrentTime(),
      };

      // Add the message with file to chatData
      setChatData([...chatData, newMessage]);
      setMessage("");
      setSelectedFileName("");
      setFile(null);

      setTimeout(() => {
        setChatData((prevChatData) => [...prevChatData, newMessageForReceiver]);
      }, 2000);
    }
  };

  // file upload
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const openFileInput = () => {
    fileUploader.current.click();
  };
  // handleProfileSetting
  const handleProfileSetting = () => {
    setProfileOpen(!profileOpen);
  };
  useEffect(() => {}, [selectedFile]);

  return (
    <>
       {/* <p>Selected File: {selectedFile.name}</p> */}
      <div className="chatList">
        <div className="chatOwner d-flex justify-content-between align-items-center mb-5">
          <div className="d-flex align-items-center gap-2 profile_gap">
            <img className="img-fluid" src={profile} alt="" />
            <div>
              <a href="#">Marvin Mckinney</a>
              <span className="d-block">Active Now</span>
            </div>
          </div>
          <div className="profile_parent">
            <button onClick={handleProfileSetting} className="button_click">
              <img src={settings} alt="" />
            </button>
            {profileOpen && <div className="profile_setting">pppp</div>}
          </div>
        </div>
        {selectedFile && <img src={imageSrc} alt="Selected Image" />}
        {/* receiver */}
        {chatData.map((data, index) =>
          data.type === "receiver" ? (
            <div className="grayBox mb-3" key={index}>
              <div className="whiteBox mb-3">
                <span className="d-block text-dark">you</span>
                <p>{data.content}</p>
              </div>
              <span className="d-block">{data.timestamp}</span>
            </div>
          ) : (
            <div className="answerBox ml-auto mb-3" key={index}>
              {data.file ? (
                <div>
                  <p className="mb-2">{data.content}</p>
                  <img src={imageSrc} alt="Selected File" />
                </div>
              ) : (
                <p className="mb-2">{data.content} </p>
              )}
              <span className="d-block time">{data.timestamp} .Read</span>
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
                <button
                  type="button"
                  className="button_click"
                  onClick={openFileInput}
                >
                  <img src={attach} alt="Attached File" />
                </button>
              </label>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                ref={fileUploader}
              />
            </div>
            <input
              className="textField"
              type="text"
              name="message"
              placeholder="Type your message here.."
              onChange={handleInputChange}
              // {selectedFile.name}
              defaultValue={selectedFile ? selectedFile : ""}
            />
            <button type="button" onClick={handleSubmit}>
              <img className="img-fluid" src={submit} alt="Submit Button" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Conversation;
