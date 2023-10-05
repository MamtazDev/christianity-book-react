import React from "react";
import { Link } from "react-router-dom";
import "../components/Login/CompleteProfileForm.css";
import CompleteProfileForm from "../components/Login/CompleteProfileForm";

const CompleteProfile = () => {
  
  return (
    <>
      <div className="completeProfileContainer">
        <Link to="/">You Logo</Link>
        <CompleteProfileForm />
      </div>
    </>
  );
};

export default CompleteProfile;
