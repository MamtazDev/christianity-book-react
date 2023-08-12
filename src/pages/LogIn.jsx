import React from "react";
import LoginForm from "../components/Login/LoginForm";
import SideBanner from "../components/Login/SideBanner";

const LogIn = () => {
  return (
    <div className="row m-0" style={{ height: "100vh" }}>
      <LoginForm />
      <SideBanner />
    </div>
  );
};

export default LogIn;
