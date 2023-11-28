import React from "react";
import { Link } from "react-router-dom";
import EditProfileForm from "../components/Login/EditProfileForm";

const EditProfile = () => {
  return (
    <>
      <div className="completeProfileContainer">
        <Link to="/">You Logo</Link>
        <EditProfileForm />
      </div>
    </>
  );
};

export default EditProfile;
