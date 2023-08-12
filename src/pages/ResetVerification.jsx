import React from "react";
import SideBanner from "../components/Login/SideBanner";
import image from "../assets/images/image4.png";
import ResetVerificationForm from "../components/Login/ResetVerificationForm";

const ResetVerification = () => {
  return (
    <div className="row m-0" style={{ height: "100vh" }}>
      <ResetVerificationForm />
      <SideBanner image={image} />
    </div>
  );
};

export default ResetVerification;
