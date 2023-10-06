import React, { useState } from "react";
import "./AcountSetting.css";
import Swal from "sweetalert2";

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
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userToUpdate = userData.find(
      (user) => user.username === "Tonni Akter"
    );

    if (userToUpdate) {
      userToUpdate.email = emailFormData.newEmail;
      localStorage.setItem("userData", JSON.stringify(userData));
      setEmailFormData({
        newEmail: "",
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Email updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "User not found",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userToUpdate = userData.find(
      (user) => user.username === "Tonni Akter"
    );
    if (userToUpdate) {
      if (userToUpdate.password === passwordFormData.oldPassword) {
        userToUpdate.password = passwordFormData.newPassword;
        localStorage.setItem("userData", JSON.stringify(userData));
        setPasswordFormData({
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        });

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Password updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Old password is incorrect",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "User not found",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const userDataString = localStorage.getItem("loggedInUser");
  const userData = JSON.parse(userDataString);
  const email = userData.email;

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
          <div className="inputContainer1">
            <label>Change Email</label>
            <input
              type="email"
              name="newEmail"
              placeholder="Enter Email"
              onChange={handleEmailInputChange}
              defaultValue={email}
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
