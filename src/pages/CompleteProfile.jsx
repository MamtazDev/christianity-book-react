import React from "react";
import { Link } from "react-router-dom";
import "../components/Login/CompleteProfileForm.css";
import CompleteProfileForm from "../components/Login/CompleteProfileForm";
import logo from "../assets/images/logo.jpeg";

const CompleteProfile = () => {
  return (
    <>
      <div className="completeProfileContainer">
        <Link to="/">
          <img style={{ maxHeight: 50 }} src={logo} alt="" />
        </Link>
        <CompleteProfileForm />
      </div>
    </>
  );
};

export default CompleteProfile;
