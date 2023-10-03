import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResetVerificationForm.css";

const ResetVerificationForm = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const navigate = useNavigate();

  const inputRefs = useRef([]);
  const handleChange = async (index, value) => {
    if (value.length > 1) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const isFilled = otp.every((digit) => digit !== "");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/change-password");
  };
  return (
    <div className="col-12 col-lg-6 logInContainer">
      <div className="logInBox" style={{ height: "80%" }}>
        <h5>
          <Link to="/">Your Logo</Link>
        </h5>

        <div className="h-100 w-100 d-flex  ">
          <div className=" w-100 my-auto">
            <h2>Reset Verification</h2>
            <div className="headerText">
              <p>We've send you the verification code on</p>
              <p
                style={{ color: "#423C6A", fontSize: "18px", fontWeight: 700 }}
              >
                johnduo@gmail.com
              </p>
            </div>

            <form onSubmit={handleSubmit} className="otpForm">
              <div style={{ marginBottom: "49px" }}>
                <div className="d-flex gap_2 mb-5">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      // disabled={isOtpVerified}
                      placeholder="-"
                      type="number"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      ref={(ref) => (inputRefs.current[index] = ref)}
                      autoComplete="off"
                    />
                  ))}
                </div>
              </div>

              <div className="logInActionContainer">
                <button type="submit" className="sign-in-button">Confirm OTP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetVerificationForm;
