import React, { useContext, useEffect, useState } from "react";
import "./AcountSetting.css";
import { AuthContext } from "../../contexts/AuthProvider";
import { updateUserInfo } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProfileSetting = () => {
  const { user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [profileSettingsData, setProfileSettingsData] = useState({
    fullName: "",
    phoneNumber: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileSettingsData({ ...profileSettingsData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const responseData = await updateUserInfo({
      userId: user?.data?._id,
      data: profileSettingsData,
    });

    if (responseData?.status === 200) {
      const localUserData = JSON.parse(localStorage.getItem("loggedInUser"));
      const newLocalUserData = {
        ...localUserData,
        data: responseData?.data,
      };
      localStorage.setItem("loggedInUser", JSON.stringify(newLocalUserData));
      setUser(newLocalUserData);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Profile Update Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/account-settings");
    }
  };

  useEffect(() => {
    if (user) {
      setProfileSettingsData({
        ...profileSettingsData,
        fullName: user?.data?.fullName,
        phoneNumber: user?.data?.phoneNumber,
        country: user?.data?.country,
      });
    }
  }, [user]);
  return (
    <div>
      <div className="mb_40">
        <h3>Profile Settings</h3>
        <p>
          Here you can change your profile data you use on
          <span> Christianity Book</span>.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="profileSetting mb_40">
        <div className="d-flex justify-content-start flex-wrap align-items-end acount_gap mb-5">
          <div className="inputContainer1">
            <label>Full Name</label>
            <input
              name="fullName"
              type="text"
              placeholder="John Duo"
              onChange={handleInputChange}
              value={profileSettingsData?.fullName}
            />
          </div>
          <div className="inputContainer1">
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="johnduo@gmail.com"
              value={user?.data?.email}
              readOnly
            />
          </div>
        </div>
        <div className="d-flex justify-content-start flex-wrap align-items-end acount_gap mb-5">
          <div className="inputContainer1">
            <label>Phone Number</label>
            <input
              name="phoneNumber"
              type="text"
              placeholder="+1 123 456 789"
              onChange={handleInputChange}
              value={profileSettingsData?.phoneNumber}
            />
          </div>
          <div className="inputContainer1">
            <label>Country</label>
            <select
              name="country"
              onChange={handleInputChange}
              value={profileSettingsData?.country}
            >
              <option disabled>Select country</option>
              <option
                value="Bangladesh"
                selected={profileSettingsData?.country === "Bangladesh"}
              >
                Bangladesh
              </option>
              <option
                value="Nepal"
                selected={profileSettingsData?.country === "Nepal"}
              >
                Nepal
              </option>
              <option
                value="India"
                selected={profileSettingsData?.country === "India"}
              >
                India
              </option>
              <option
                value="Canada"
                selected={profileSettingsData?.country === "Canada"}
              >
                Canada
              </option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          disabled={
            !profileSettingsData?.phoneNumber ||
            !profileSettingsData?.country ||
            !profileSettingsData?.fullName
          }
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileSetting;
