import React from "react";
import SideBanner from "../components/Login/SideBanner";
import image from "../assets/images/image5.png";
import ChangePasswordForm from "../components/Login/ChangePasswordForm";

const ChangePassword = () => {
  return (
    <>
      <div className="row m-0" style={{ height: "100vh" }}>
        <ChangePasswordForm />
        <SideBanner image={image} />
      </div>
    </>
  );
};

export default ChangePassword;
