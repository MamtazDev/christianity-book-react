import React, { useRef, useState } from "react";
import profile from "../../assets/images/profile_pic.png";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

import cameraIcon from '../../assets/images/camera-icon.png'

const CompleteProfileForm = () => {
  const [droppedImage, setDroppedImage] = useState(null);

  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNo: "",
    country: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.username);
    const userDataString = localStorage.getItem("loggedInUser");
    const userDatas = JSON.parse(userDataString);
    // userDatas.username = formData.username;
    // userDatas.email = formData.email;
    // userDatas.phoneNo = formData.phoneNo;
    // userDatas.country = formData.country;
    localStorage.setItem("loggedInUser", JSON.stringify(userDatas));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Update profile successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    setFormData({
      username: "",
      email: "",
      phoneNo: "",
      country: "",
    });
    navigate('/subscription');
  };

  // get item from
  const userDataString = localStorage.getItem("loggedInUser");
  const userData = JSON.parse(userDataString);
  const email = userData?.email ? userData.email : "test@gmail.com";
  const username = userData?.username;
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      setDroppedImage(null);
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const [file] = e.dataTransfer.files;
    if (file) {
      setDroppedImage(URL.createObjectURL(file));
    }
  };

  const handleNavigateSubscription = () => {
    if (formData?.username && formData?.email && formData?.phoneNo && formData?.country) {
      navigate('/subscription');
    } else {
      alert('Fill in all the information');
    }
  }



  return (
    <>
      <div className="profile_parent_container">
        <div className="complete_profile_header">
          <h4>Complete your Profile!</h4>
          <p>Kindly Enter your Credentials Below to Create Your Profile.</p>
        </div>
        <form onSubmit={handleSubmit} className="profileSetting mt_30cp">
          <div
            className="profile_pic"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
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
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                  display: "none",
                }}
              />
            </div>

            <div className="image_upload position-relative" draggable="true">
              {droppedImage ? (
                <img src={droppedImage} alt="" />
              ) : (
                <img
                  width={'175px'}
                    height={'175px'}
                    style={{borderRadius: '50%'}}
                  ref={uploadedImage}
                  src={profile}
                  alt=""
                />
              )}

              <div className="camera-icon position-absolute">
                <img onClick={() => imageUploader.current.click()}
                  src={cameraIcon} alt="camera" />
              </div>

            </div>
          </div>
          <div className="d-flex justify-content-start flex-wrap align-items-end complete_profile_gap mb-5">
            <div className="completeprofile_inputContainer">
              <label>Full Name</label>
              <input
                name="username"
                type="text"
                placeholder="John Duo"
                onChange={handleInputChange}
                defaultValue={username}
                required
              />
            </div>
            <div className="completeprofile_inputContainer">
              <label>Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="johnduo@gmail.com"
                onChange={handleInputChange}
                defaultValue={email}
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-start flex-wrap align-items-end complete_profile_gap mb-5">
            <div className="completeprofile_inputContainer">
              <label>Phone Number</label>
              <input
                name="phoneNo"
                type="number"
                placeholder="+1 123 456 789"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="completeprofile_inputContainer">
              <label>Country</label>
              <select
                name="country"
                onChange={handleInputChange}
                value={formData.country}
                required
              >
                <option value="country">Country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
          </div>
          <div className="create_profile_button">
            <button type="submit" >
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CompleteProfileForm;
