import React, { useContext, useEffect, useState } from "react";
import "./AcountSetting.css";
import { AuthContext } from "../../contexts/AuthProvider";
import { updateUserInfo } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const ProfileSetting = () => {
  const { user, setUser } = useContext(AuthContext);

  const [countryNames, setCountryNames] = useState([]);

  console.log(countryNames, "ddd");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  // const []

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

    setLoading(true);
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
      setLoading(false);
      navigate("/account-settings");
    } else {
      setLoading(false);
    }
  };

  // console.log(profileSettingsData, "g");

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

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json",
      )
      .then(function (response) {
        setCountryNames(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
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
              <option disabled selected>
                Select country
              </option>
              {countryNames?.length > 0 &&
                countryNames.map((i, idx) => (
                  <option
                    value={i?.name}
                    selected={profileSettingsData?.country === i?.name}
                  >
                    {i?.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        {loading ? (
          <button type="button">Saving Changes...</button>
        ) : (
          <button
            type="submit"
            disabled={
              !profileSettingsData?.phoneNumber ||
              !profileSettingsData?.country ||
              !profileSettingsData?.fullName ||
              loading
            }
            style={{
              cursor: `${
                !profileSettingsData?.phoneNumber ||
                !profileSettingsData?.country ||
                !profileSettingsData?.fullName ||
                loading
                  ? "not-allowed"
                  : "pointer"
              }`,
            }}
          >
            Save Changes
          </button>
        )}
      </form>
    </div>
  );
};

export default ProfileSetting;
