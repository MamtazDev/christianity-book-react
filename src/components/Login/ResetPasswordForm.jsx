import React, { useState } from "react";
import message from "../../assets/icons/message.png";
import { Link } from "react-router-dom";

const ResetPasswordForm = () => {
  const [focusInput, setFocusInput] = useState(null);
  const handleFoucsInput = (value, action) => {
    if (action === "focus") {
      setFocusInput(value);
    } else if (action === "blur") {
      setFocusInput(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="col-6 logInContainer">
      <div className="logInBox" style={{ height: "80%" }}>
        <h5>
          <Link to="/">Your Logo</Link>
        </h5>

        <div className="h-100 w-100 d-flex  ">
          <div className=" w-100 my-auto">
            <h2>Reset Password</h2>
            <div className="headerText">
              <p>Please Enter you Email address to</p>
              <p>request a Password reset!</p>
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

              <div className="logInActionContainer">
                <button type="submit">Send OTP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
