import React, { useContext, useState } from "react";
import message from "../../assets/icons/message.png";
import { Link, useNavigate } from "react-router-dom";
import { sendOtpToEmail } from "../../api/auth";
import { AuthContext } from "../../contexts/AuthProvider";
import logo from "../../assets/images/logo.jpeg";

const ResetPasswordForm = () => {
  const [focusInput, setFocusInput] = useState(null);
  const { resetPasswordInfo, setResetPasswordInfo } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleFoucsInput = (value, action) => {
    if (action === "focus") {
      setFocusInput(value);
    } else if (action === "blur") {
      setFocusInput(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    const email = e.target.email.value;

    const response = await sendOtpToEmail(email);
    if (response?.OTP) {
      setResetPasswordInfo({ email, OTP: response?.OTP });
      setLoading(false);
      navigate("/reset-verification");
    }
    if (response?.message === "User not exist!") {
      setErrorMessage(response?.message);
      setLoading(false);
    }

    console.log(response, "ggg");

    // navigate("/reset-verification");
  };
  return (
    <div className="col-12 col-lg-6 logInContainer">
      <div className="logInBox" style={{ height: "80%" }}>
        <h5>
          <Link to="/">
            <img style={{ maxHeight: 50 }} src={logo} alt="" />
          </Link>
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
                <button
                  type="submit"
                  className="sign-in-button"
                  disabled={loading}
                  style={{ cursor: `${loading ? "not-allowed" : "pointer"}` }}
                >
                  {loading ? "Sending OTP..." : "Send OTP"}
                </button>
              </div>
            </form>
            <p className="text-danger mt-2">{errorMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
