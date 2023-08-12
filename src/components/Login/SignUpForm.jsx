import React, { useState } from "react";
import message from "../../assets/icons/message.png";
import lock from "../../assets/icons/padlock.png";
import eye from "../../assets/icons/eye.png";
import yellowEye from "../../assets/icons/yellowEye.png";
import facebook from "../../assets/icons/facebook.png";
import google from "../../assets/icons/google.png";
import apple from "../../assets/icons/apple.png";
import user from "../../assets/icons/user.png";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [focusInput, setFocusInput] = useState(null);
  const [look, setLook] = useState(false);
  const [lookConfirm, setLookConfirm] = useState(false);

  const handleFoucsInput = (value, action) => {
    if (action === "focus") {
      setFocusInput(value);
    } else if (action === "blur") {
      setFocusInput(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="col-6 logInContainer">
      <div className="logInBox">
        <h5>
          <Link to="/">Your Logo</Link>
        </h5>

        <h2>Sign up</h2>
        <div className="headerText">
          <p>If you don't have an account register</p>
          <p>
            You can <Link to="/login">Login here!</Link>
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "49px" }}>
            <label>Email</label>
            <div
              className={`inputContainer ${
                focusInput === "email" && "focusInput"
              }`}
            >
              <img src={message} alt="" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                autoComplete="off"
                onFocus={() => handleFoucsInput("email", "focus")}
                onBlur={() => handleFoucsInput("email", "blur")}
              />
            </div>
          </div>
          <div style={{ marginBottom: "49px" }}>
            <label>Username</label>
            <div
              className={`inputContainer ${
                focusInput === "username" && "focusInput"
              }`}
            >
              <img src={user} alt="" />
              <input
                type="text"
                name="username"
                placeholder="Enter your User name"
                autoComplete="off"
                onFocus={() => handleFoucsInput("username", "focus")}
                onBlur={() => handleFoucsInput("username", "blur")}
              />
            </div>
          </div>
          <div style={{ marginBottom: "49px" }}>
            <label>Create Password</label>
            <div
              className={`inputContainer ${
                focusInput === "crPassword" && "focusInput"
              }`}
            >
              <img src={lock} alt="" />
              <input
                type={look ? "text" : "password"}
                name="password"
                placeholder="Enter your Password"
                autoComplete="off"
                onFocus={() => handleFoucsInput("crPassword", "focus")}
                onBlur={() => handleFoucsInput("crPassword", "blur")}
              />
              <img
                style={{ cursor: "pointer" }}
                src={look ? yellowEye : eye}
                alt=""
                onClick={() => setLook(!look)}
              />
            </div>
          </div>
          <div style={{ marginBottom: "58px" }}>
            <label>Confirm Password</label>
            <div
              className={`inputContainer ${
                focusInput === "cfPassword" && "focusInput"
              }`}
            >
              <img src={lock} alt="" />
              <input
                type={lookConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Enter your Password"
                autoComplete="off"
                onFocus={() => handleFoucsInput("cfPassword", "focus")}
                onBlur={() => handleFoucsInput("cfPassword", "blur")}
              />
              <img
                style={{ cursor: "pointer" }}
                src={lookConfirm ? yellowEye : eye}
                alt=""
                onClick={() => setLookConfirm(!lookConfirm)}
              />
            </div>
          </div>

          <div className="logInActionContainer">
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
