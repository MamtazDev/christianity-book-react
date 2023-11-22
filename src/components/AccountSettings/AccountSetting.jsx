import React, { useEffect, useState } from "react";
import "./AcountSetting.css";
import Swal from "sweetalert2";
import { changeEmail } from "../../api/auth";
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
        `http://localhost:8000/api/users/changeEmail/${userId}`,
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

  /*   const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const userDataString = localStorage.getItem("loggedInUser");
    const userData = JSON.parse(userDataString);
    // const email = userData.email;
    console.log(userData)

    try {
      const response = await fetch(`http://localhost:8000/api/users/changeEmail/${userData.data._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailFormData),
      });
      setEmailFormData({
        email: ""
      })
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const loggedInUser = { ...data, data: data.data };
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    } catch (error) {
      console.log('accountsetting error found', error)
    }
  }; */
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
  console.log(user, "user");

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
