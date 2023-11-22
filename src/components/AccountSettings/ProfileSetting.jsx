import React, { useState } from "react";
import "./AcountSetting.css";

const ProfileSetting = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const userDataString = localStorage.getItem("loggedInUser");
  const userData = JSON.parse(userDataString);
  const email = userData?.email;
  const username = userData?.username;
  return (
    <div>
      <div className="mb_40">
        <h3>Profile Settings</h3>
        <p>
          Here you can change your profile data you use on
          <span>Christianity Book</span>.
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
              value={username}
            />
          </div>
          <div className="inputContainer1">
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="johnduo@gmail.com"
              onChange={handleInputChange}
              value={email}
            />
          </div>
        </div>
        <div className="d-flex justify-content-start flex-wrap align-items-end acount_gap mb-5">
          <div className="inputContainer1">
            <label>Phone Number</label>
            <input
              name="phoneNo"
              type="text"
              placeholder="+1 123 456 789"
              onChange={handleInputChange}
            />
          </div>
          <div className="inputContainer1">
            <label>Country</label>
            <select
              name="country"
              onChange={handleInputChange}
              value={formData.country}
            >
              <option value="Country">Country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Nepal">Nepal</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileSetting;
