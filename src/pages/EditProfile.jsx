import React from "react";
import { Link } from "react-router-dom";
import EditProfileForm from "../components/Login/EditProfileForm";
import logo from "../assets/images/logo.jpeg";

const EditProfile = () => {
  return (
    <>
      <div className="completeProfileContainer">
      <Link className="navbar-brand" to="/">
            <img style={{ maxHeight: 50 }} src={logo} alt="" />
          </Link>
        <EditProfileForm />
      </div>
    </>
  );
};

export default EditProfile;
