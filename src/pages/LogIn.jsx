import React from "react";
import LoginForm from "../components/Login/LoginForm";
import SideBanner from "../components/Login/SideBanner";
import image from "../assets/images/image1.png";

const LogIn = () => {
  return (
    <div className="row m-0" style={{ height: "100vh" }}>
      <LoginForm />
      <SideBanner image={image} />
    </div>
  );
};

export default LogIn;
