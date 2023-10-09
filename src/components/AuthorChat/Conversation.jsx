import React, { useRef, useState } from "react";
import profile from "../../assets/images/chatProfile.png";
import attach from "../../assets/images/attachFile.png";
import submit from "../../assets/images/submit.png";
import "./AuthorChat.css";
import ShowImage from "./ShowImage";
import ProfileSetting from "./ProfileSetting";
import { getCurrentTime } from "../Utils/CurrentTime";
import ChatDate from "./ChatDate";

const Conversation = () => {
  const [chatData, setChatData] = useState([
    { type: "sender", content: "HI", timestamp: getCurrentTime(), file: [] },
    {
      type: "receiver",
      content: "i got your message",
      timestamp: getCurrentTime(),
      file: [],
    },
  ]);
  const [uploadedImageArray, setUploadedImageArray] = useState([]);
  const [message, setMessage] = useState("");
  const [imageName, setImageName] = useState(null);
  const fileUploader = useRef(null);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };
  // file upload
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setUploadedImageArray([...uploadedImageArray, file]);
    setImageName(file.name);
  };
  const openFileInput = () => {
    fileUploader.current.click();
  };
  // submit button
  const handleSubmit = () => {
    if (message.trim() !== "" || uploadedImageArray.length > 0) {
      const newMessage = {
        type: "sender",
        content: message,
        timestamp: getCurrentTime(),
        file: uploadedImageArray,
      };
      setChatData([...chatData, newMessage]);
      setUploadedImageArray([]);
      setImageName("");
      setTimeout(() => {
        const newMessageForReceiver = {
          type: "receiver",
          content: message,
          timestamp: getCurrentTime(),
          file: uploadedImageArray,
        };
        setChatData((prevChatData) => [...prevChatData, newMessageForReceiver]);
      }, 2000);
    }
  };

  return (
    <>
      <div className="chatList">
        <div className="chatOwner d-flex justify-content-between align-items-center mb-5">
          <div className="d-flex align-items-center gap-2 profile_gap">
            <img className="img-fluid" src={profile} alt="" />
            <div>
              <a href="#">Marvin Mckinney</a>
              <span className="d-block">Active Now</span>
            </div>
          </div>
          <ProfileSetting />
        </div>
        {/* chat data */}
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
              <>
                {data.content === "" ? (
                  <>
                    {data?.file.map((single, index) => (
                      <ShowImage key={index} item={single} />
                    ))}
                  </>
                ) : (
                  <p className="mb-2">{data.content} </p>
                )}
              </>
              <span className="d-block time">{data.timestamp} .Read</span>
            </div>
          )
        )}
        <ChatDate />
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
                onChange={handleFileInputChange}
                ref={fileUploader}
              />
            </div>
            <input
              className="textField"
              type="text"
              name="message"
              Value={imageName}
              placeholder="Type your message here.."
              onChange={handleInputChange}
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
