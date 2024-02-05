import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResetVerificationForm.css";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import logo from "../../assets/images/logo.jpeg";

const ResetVerificationForm = () => {
  const { resetPasswordInfo, setResetPasswordInfo } = useContext(AuthContext);
  console.log(resetPasswordInfo, "fff");
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
  console.log(isFilled);

  const handleConfirmOTP = () => {
    const inputOTP = otp.join("");

    if (inputOTP === resetPasswordInfo?.OTP) {
      navigate("/change-password");
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "OTP is not matched!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
            <h2>Reset Verification</h2>
            <div className="headerText">
              <p>We've send you the verification code on</p>
              <p
                className="text_clr_primary"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                {resetPasswordInfo?.email}
              </p>
            </div>

            <div className="otpForm">
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
                <button
                  type="button"
                  className="sign-in-button"
                  disabled={!isFilled}
                  onClick={handleConfirmOTP}
                >
                  Confirm OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetVerificationForm;
