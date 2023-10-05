import React, { useState } from "react";
import "./AcountSetting.css";

const AccountSetting = () => {
  const [emailFormData, setEmailFormData] = useState({
    newEmail: "",
  });

  const [passwordFormData, setPasswordFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleEmailInputChange = (e) => {
    const { name, value } = e.target;
    setEmailFormData({
      ...emailFormData,
      [name]: value,
    });
  };

  const handlePasswordInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordFormData({
      ...passwordFormData,
      [name]: value,
    });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log(emailFormData);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log(passwordFormData);
  };

  return (
    <>
      <div className="mb_40">
        <h3>Account Settings</h3>
        <p>
          Here you can change the Email Address you use on{" "}
          <span>Christianity Book</span> and your password.
        </p>
      </div>

      <form onSubmit={handleEmailSubmit} className="changeEmail">
        <div className="d-flex justify-content-start align-items-end gap-4 acount_gap">
          <div className="inputContainer">
            <label>Change Email</label>
            <input
              type="email"
              name="newEmail"
              placeholder="Enter Email"
              onChange={handleEmailInputChange}
            />
          </div>
          <button type="submit">Change Email</button>
        </div>
      </form>

      <form onSubmit={handlePasswordSubmit} className="changePassword mb_40">
        <div className="d-flex flex-wrap justify-content-start align-items-end gap-4 mb-3 mb-lg-5 acount_gap">
          <div className="inputContainer">
            <label>Change Password</label>
            <input
              type="password"
              name="oldPassword"
              placeholder="Enter Old Password"
              onChange={handlePasswordInputChange}
            />
          </div>
          <div className="inputContainer">
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              placeholder="Enter New Password"
              onChange={handlePasswordInputChange}
            />
          </div>
          <div className="inputContainer">
            <label>Confirm New Password</label>
            <input
              type="password"
              name="confirmNewPassword"
              placeholder="Confirm New Password"
              onChange={handlePasswordInputChange}
            />
          </div>
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default AccountSetting;
