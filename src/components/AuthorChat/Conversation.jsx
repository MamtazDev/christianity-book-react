import React, { useRef, useState } from "react";
import profile from "../../assets/images/chatProfile.png";
import attach from "../../assets/images/attachFile.png";
import submit from "../../assets/images/submit.png";
import "./AuthorChat.css";
import ShowImage from "./ShowImage";
import ProfileSetting from "./ProfileSetting";
import { getCurrentTime } from "../Utils/CurrentTime";
import ChatDate from "./ChatDate";
import { addMessage } from "../../api/conversations";
import { convertTime } from "../Utils/convertTIme";

const Conversation = ({
  allMessages,
  user,
  conversationId,
  getConversation,
  selectedUserInfo,
}) => {
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

  const [sendingMessage, setSendingMessage] = useState("");
  const handleSendMessage = async () => {
    const sendMessageRes = await addMessage({
      conversationId,
      sender: user?._id,
      text: sendingMessage,
    });

    if (sendMessageRes) {
      getConversation();
      setSendingMessage("");
    }
  };

  return (
    <>
      <div className="chatList">
        <div className="chatOwner d-flex justify-content-between align-items-center mb-5">
          <div className="d-flex align-items-center gap-2 profile_gap">
            {selectedUserInfo?.userInfo?.image && (
              <img
                className="img-fluid"
                src={
                  selectedUserInfo?.userInfo?.image
                    ? selectedUserInfo?.userInfo?.image
                    : profile
                }
                alt=""
                style={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "100%",
                  objectFit: "cover",
                }}
              />
            )}

            {
              <img
                className="img-fluid"
                src={
                  selectedUserInfo?.userInfo?.image
                    ? selectedUserInfo?.userInfo?.image
                    : profile
                }
                alt=""
                style={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "100%",
                  objectFit: "cover",
                }}
              />
            }
            <div>
              <a href="#">
                {selectedUserInfo?.userInfo?.userName
                  ? selectedUserInfo?.userInfo?.userName
                  : "Author"}
              </a>
              {/* <span className="d-block">Active Now</span> */}
            </div>
          </div>
          {/* <ProfileSetting /> */}
        </div>
        {/* chat data */}
        <div className="chat_scrolled">
          {allMessages && allMessages.length > 0 ? (
            allMessages?.map((data, index) =>
              data?.sender !== user?._id ? (
                <div className="grayBox mb-3" key={index}>
                  <div className="whiteBox mb-3">
                    {/* <span className="d-block text-dark">you</span> */}
                    <p>{data.text}</p>
                  </div>
                  <span className="d-block">
                    {convertTime(data?.createdAt)}
                  </span>
                </div>
              ) : (
                <div className="answerBox ml-auto mb-3" key={index}>
                  <>
                    {data?.content === "" ? (
                      <>
                        {data?.file.map((single, index) => (
                          <ShowImage key={index} item={single} />
                        ))}
                      </>
                    ) : (
                      <p className="mb-2">{data?.text} </p>
                    )}
                  </>
                  {/* <span className="d-block time">{data?.timestamp} .Read</span> */}
                  <span className="d-block time">
                    {convertTime(data?.createdAt)}{" "}
                  </span>
                </div>
              )
            )
          ) : (
            <div className="grayBox mb-3">
              <div className="whiteBox mb-3">
                {/* <span className="d-block text-dark">you</span> */}
                <p>Hi There</p>
              </div>
              <span className="d-block">{convertTime(new Date())}</span>
            </div>
          )}
        </div>
        {/* <ChatDate /> */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="sendForm d-flex align-items-center gap-4">
            {/* <div className="file-upload">
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
            </div> */}
            <input
              className="textField"
              type="text"
              name="message"
              // Value={imageName}
              value={sendingMessage}
              placeholder="Type your message here.."
              onChange={(e) => setSendingMessage(e.target.value)}
            />

            <button type="button" onClick={handleSendMessage}>
              <img className="img-fluid" src={submit} alt="Submit Button" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Conversation;
