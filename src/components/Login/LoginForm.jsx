import React, { useState } from "react";
import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import message from "../../assets/icons/message.png";
import lock from "../../assets/icons/padlock.png";
import eye from "../../assets/icons/eye.png";
import yellowEye from "../../assets/icons/yellowEye.png";
import facebook from "../../assets/icons/facebook.png";
import google from "../../assets/icons/google.png";
import apple from "../../assets/icons/apple.png";

const LoginForm = () => {
  const [focusInput, setFocusInput] = useState(null);
  const [look, setLook] = useState(false);
  const navigate = useNavigate();

  const handleFoucsInput = (value, action) => {
    if (action === "focus") {
      setFocusInput(value);
    } else if (action === "blur") {
      setFocusInput(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <div className="col-12 col-lg-6 logInContainer">
      <div className="logInBox">
        <h5>
          <Link to="/">Your Logo</Link>
        </h5>

        <h2>Sign in</h2>
        <div className="headerText">
          <p>If you don't have an account register</p>
          <p>
            You can <Link to="/signup">Register here!</Link>
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
          <div>
            <label>Password</label>
            <div
              className={`inputContainer ${
                focusInput === "password" && "focusInput"
              }`}
            >
              <img src={lock} alt="" />
              <input
                type={look ? "text" : "password"}
                name="password"
                placeholder="Enter your Password"
                autoComplete="off"
                onFocus={() => handleFoucsInput("password", "focus")}
                onBlur={() => handleFoucsInput("password", "blur")}
              />
              <img
                style={{ cursor: "pointer" }}
                src={look ? yellowEye : eye}
                alt=""
                onClick={() => setLook(!look)}
              />
            </div>
          </div>

          <div className="checkBoxInputContainer">
            <div>
              <input type="checkbox" name="" id="" />
              <p>Remember me</p>
            </div>
            <Link to="/reset-password">Forgot Password?</Link>
          </div>

          <div className="logInActionContainer">
            <button type="submit">Sign In</button>

            <p>or continue with</p>

            <div>
              <img src={facebook} alt="" />
              <img src={apple} alt="" />
              <img src={google} alt="" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
