import React from "react";
import ResetPasswordForm from "../components/Login/ResetPasswordForm";
import SideBanner from "../components/Login/SideBanner";
import image from "../assets/images/image3.png";

const ResetPassword = () => {
  return (
    <div className="row m-0" style={{ height: "100vh" }}>
      <ResetPasswordForm />
      <SideBanner image={image} />
    </div>
  );
};

export default ResetPassword;

