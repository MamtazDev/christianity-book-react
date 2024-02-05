import React, { useContext, useEffect, useRef, useState } from "react";
import profile from "../../assets/images/profile_pic.png";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

import cameraIcon from "../../assets/images/camera-icon.png";
import { AuthContext } from "../../contexts/AuthProvider";
import { updateUserInfo, uploadImageToImgBB } from "../../api/auth";
import axios from "axios";

const CompleteProfileForm = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthContext);
  const [countryNames, setCountryNames] = useState([]);

  const imageInput = useRef(null);

  const [updateUserData, setUpdateUserData] = useState({});

  const [isLoading, setIsloading] = useState(false);

  const handleInputValueChange = (e) => {
    if (e.target?.files) {
      setUpdateUserData({ ...updateUserData, image: e.target.files[0] });
    } else {
      setUpdateUserData({ ...updateUserData, [e.target.name]: e.target.value });
    }
  };

  const handleCreateProfile = async () => {
    setIsloading(true);
    const userData = {
      fullName: updateUserData?.fullName,
      phoneNumber: updateUserData?.phoneNumber,
      country: updateUserData?.country,
    };

    const fromData = new FormData();
    fromData.append("image", updateUserData?.image);

    const uploadImageData = await uploadImageToImgBB(fromData);

    if (uploadImageData?.success) {
      const newUserData = { ...userData, image: uploadImageData?.data?.url };

      const responseData = await updateUserInfo({
        userId: user?.data?._id,
        data: newUserData,
      });

      if (responseData?.status === 200) {
        const localUserData = JSON.parse(localStorage.getItem("loggedInUser"));
        const newLocalUserData = {
          ...localUserData,
          data: responseData?.data,
        };
        localStorage.setItem("loggedInUser", JSON.stringify(newLocalUserData));
        setUser(newLocalUserData);
        setIsloading(false);
        navigate("/account-settings");
      }
    }
  };

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
    <>
      <div className="profile_parent_container">
        <div className="complete_profile_header">
          <h4>Complete your Profile!</h4>
          <p>Kindly Enter your Credentials Below to Create Your Profile.</p>
        </div>
        <div className="profileSetting mt_30cp">
          <div
            className="profile_pic"
            // onDragOver={handleDragOver}
            // onDrop={handleDrop}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleInputValueChange}
                ref={imageInput}
                name="image"
                // onChange={handleInputChange}
                style={{
                  display: "none",
                }}
              />
            </div>

            <div className="image_upload position-relative" draggable="true">
              {updateUserData?.image ? (
                <img
                  width={"175px"}
                  height={"175px"}
                  style={{ borderRadius: "50%" }}
                  src={URL.createObjectURL(updateUserData?.image)}
                  alt=""
                />
              ) : (
                <img
                  width={"175px"}
                  height={"175px"}
                  style={{ borderRadius: "50%" }}
                  src={profile}
                  alt=""
                />
              )}

              <div className="camera-icon position-absolute">
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => imageInput.current.click()}
                  src={cameraIcon}
                  alt="camera"
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-start flex-wrap align-items-end complete_profile_gap mb-5">
            <div className="completeprofile_inputContainer">
              <label>Full Name</label>
              <input
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                onChange={handleInputValueChange}
              />
            </div>

            <div className="completeprofile_inputContainer">
              <label>Email Address</label>
              <input
                name="email"
                type="email"
                placeholder={user?.data?.email}
                readOnly
              />
            </div>
          </div>
          <div className="d-flex justify-content-start flex-wrap align-items-end complete_profile_gap mb-5">
            <div className="completeprofile_inputContainer">
              <label>Phone Number</label>
              <input
                name="phoneNumber"
                type="number"
                placeholder="Enter your phone number"
                onChange={handleInputValueChange}
              />
            </div>
            <div className="completeprofile_inputContainer">
              <label>Country</label>
              <select name="country" onChange={handleInputValueChange}>
                <option disabled>Select country</option>
                {countryNames?.length > 0 &&
                  countryNames.map((i, idx) => (
                    <option value={i?.name}>{i?.name}</option>
                  ))}
              </select>
            </div>
          </div>
          <div className="create_profile_button">
            <button
              onClick={handleCreateProfile}
              type="button"
              disabled={
                !updateUserData?.fullName ||
                !updateUserData?.phoneNumber ||
                !updateUserData?.country ||
                !updateUserData?.image
              }
              style={{
                cursor: `${
                  !updateUserData?.fullName ||
                  !updateUserData?.phoneNumber ||
                  !updateUserData?.country ||
                  !updateUserData?.image ||
                  isLoading
                    ? "not-allowed"
                    : "pointer"
                }`,
              }}
            >
              {isLoading ? "Creating Profile..." : "Create Profile"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteProfileForm;
