import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ChangePasswordForm = () => {
  const [focusInput, setFocusInput] = useState(null);
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
      <div className="logInBox" style={{ height: "80%" }}>
        <h5>
          <Link to="/">Your Logo</Link>
        </h5>

        <div className="h-100 w-100 d-flex  ">
          <div className=" w-100 my-auto">
            <h2>Reset Password</h2>
            <div className="headerText">
              <p>Please modify your password for security purposes!</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "30px" }}>
                <label>Enter New Password</label>
                <div
                  className={`inputContainer ${
                    focusInput === "new" && "focusInput"
                  }`}
                >
                  <input
                    type="text"
                    name="password"
                    placeholder="New Password"
                    autoComplete="off"
                    onFocus={() => handleFoucsInput("new", "focus")}
                    onBlur={() => handleFoucsInput("new", "blur")}
                  />
                </div>
              </div>
              <div style={{ marginBottom: "30px" }}>
                <label>Confirm New Password</label>
                <div
                  className={`inputContainer ${
                    focusInput === "confirm" && "focusInput"
                  }`}
                >
                  <input
                    type="text"
                    name="confirm"
                    placeholder="Confrim Password"
                    autoComplete="off"
                    onFocus={() => handleFoucsInput("confirm", "focus")}
                    onBlur={() => handleFoucsInput("confirm", "blur")}
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

export default ChangePasswordForm;
