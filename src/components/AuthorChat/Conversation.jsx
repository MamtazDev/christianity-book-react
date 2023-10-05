import React from "react";
import profile from "../../assets/images/chatProfile.png";
import settings from "../../assets/images/message_settings.png";
import upload from "../../assets/images/imgUpload.png";
import attach from "../../assets/images/attachFile.png";
import submit from "../../assets/images/submit.png";
import "./AuthorChat.css";
const Conversation = () => {
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

      <div className="grayBox mb-3">
        <div className="whiteBox mb-3">
          <span className="d-block text-dark">you</span>
          <p>can I come over?</p>
        </div>
        <p className="mb-2">of course, let me know if you are on the way.</p>
        <span className="d-block time">16.00</span>
      </div>

      <div className="answerBox ml-auto mb-3">
        <p className="mb-2">K i am on my way </p>
        <span className="d-block time">16.00 .Read</span>
      </div>
      <div className="grayBox mb-5">
        <p className="mb-2">Good Morning did you sleep well ?</p>
        <span className="d-block time">9.45</span>
      </div>
      <div className="dayTime d-flex align-items-center gap-1">
        <div className="weekDayLine"></div>
        <p>Dec 7/10</p>
        <div className="weekDayLine"></div>
      </div>
      <div className="answerBox ml-auto mb-3">
        <p className="mb-2"> K i am on my way </p>
        <span className="d-block time">16.00 .Read</span>
      </div>
      <div className="grayBox mb-4">
        <div className="whiteBox text-center mb-3">
          <img src={upload} alt="" />
        </div>
        <p className="mb-2">of course, let me know if you are on the way.</p>
        <span className="d-block time">16.00</span>
      </div>
      <form action="">
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
          />
          <button type="button">
            <img className="img-fluid" src={submit} alt="Submit Button" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Conversation;
