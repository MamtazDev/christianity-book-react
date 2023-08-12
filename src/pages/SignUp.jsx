import React from "react";
import SideBanner from "../components/Login/SideBanner";
import SignUpForm from "../components/Login/SignUpForm";
import image from "../assets/images/image2.png";

const SignUp = () => {
  return (
    <div className="row m-0" style={{ height: "100vh" }}>
      <SignUpForm />
      <SideBanner image={image} />
    </div>
  );
};

export default SignUp;
