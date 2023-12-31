import React, { useEffect, useState } from "react";
import "./AcountSetting.css";
import Swal from "sweetalert2";
import { changeEmail, changePassword } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const AccountSetting = ({ user, setUser }) => {
  const [passwordFormData, setPasswordFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const navigate = useNavigate();

  const [newEmail, setNewEmail] = useState(null);

  const handleChangeEmail = async () => {
    const response = await changeEmail({
      userId: user?._id,
      data: {
        email: newEmail,
      },
    });

    if (response?.status === 200) {
      localStorage.removeItem("loggedInUser");
      setUser(null);
      navigate("/login");
    }
  };

  const handlePasswordInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordFormData({
      ...passwordFormData,
      [name]: value,
    });
  };

  const [emailFormData, setEmailFormData] = useState({
    email: "",
  });
  const handleEmailInputChange = (e) => {
    const { name, value } = e.target;
    setEmailFormData({
      ...emailFormData,
      [name]: value,
    });
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const userDataString = localStorage.getItem("loggedInUser");
    const userData = JSON.parse(userDataString);
    const userId = userData.data._id;

    try {
      const response = await fetch(
        `${BASE_URL}/api/users/changeEmail/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailFormData),
        }
      );

      setEmailFormData({
        email: "",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const updatedUserData = {
        ...userData,
        data: {
          ...userData.data,
          email: data.email, // Assuming the server returns the updated email
        },
      };
      localStorage.setItem("loggedInUser", JSON.stringify(updatedUserData));
    } catch (error) {
      console.log("account setting error found", error);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const newPassword = form.newPassword.value;
    const password = form.confirmNewPassword.value;

    if (newPassword === password) {
      const response = await changePassword({
        userEmail: user?.email,
        data: { password: password },
      });

      if (response?.status === 200) {
        localStorage.removeItem("loggedInUser");
        setUser(null);
        navigate("/login");
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password is not matched!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
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

      <div className="changeEmail">
        <div className="d-flex justify-content-start align-items-end gap-4 acount_gap">
          <div className="inputContainer">
            <label>Change Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={(e) => setNewEmail(e.target.value)}
              Value={user?.email}
              className="change_email_iunput"
            />
          </div>
          <button
            style={{ cursor: `${!newEmail ? "not-allowed" : "pointer"}` }}
            className="change_email_button"
            onClick={handleChangeEmail}
            disabled={!newEmail}
          >
            Change Email
          </button>
        </div>
      </div>

      <form onSubmit={handlePasswordSubmit} className="changePassword mb_40">
        <div className="d-flex flex-wrap justify-content-start align-items-end gap-4 mb-3 mb-lg-5 acount_gap">
          <div className="inputContainer">
            <label>Change Password</label>
            <input
              type="password"
              name="oldPassword"
              placeholder="Enter Old Password"
              required
            />
          </div>
          <div className="inputContainer">
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              placeholder="Enter New Password"
              required
            />
          </div>
          <div className="inputContainer">
            <label>Confirm New Password</label>
            <input
              type="password"
              name="confirmNewPassword"
              placeholder="Confirm New Password"
              required
            />
          </div>
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default AccountSetting;
