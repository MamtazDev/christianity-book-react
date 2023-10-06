import React, { useRef, useState } from "react";
import profile from "../../assets/images/profile_pic.png";
const CompleteProfileForm = () => {
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
  const email = userData.email;
  const username = userData.username;
  return (
    <>
      <div className="profile_parent_container">
        <div className="complete_profile_header">
          <h4>Complete your Profile!</h4>
          <p>Kindly Enter your Credentials Below to Create Your Profile.</p>
        </div>
        <form onSubmit={handleSubmit} className="profileSetting mt_30cp">
          <div className="profile_pic">
            <img src={profile} alt="" />
          </div>
          <div className="d-flex justify-content-start flex-wrap align-items-end complete_profile_gap mb-5">
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
          <div className="d-flex justify-content-start flex-wrap align-items-end complete_profile_gap mb-5">
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
                <option value="country">Country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
          </div>
          <div className="create_profile_button">
            <button className="">Create Profile</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CompleteProfileForm;
/* import React, { useRef, useState } from "react";
import round from "../../assets/images/round_pp1.png";
const CompleteProfileForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  return (
    <div>
      <div className="complete_profile_header">
        <h4>Complete your Profile!</h4>
        <p>Kindly Enter your Credentials Below to Create Your Profile.</p>
      </div>
      <form>
        <div className="">
          <div className="">
            <img
              className="object-cover w-full h-full rounded-full"
              src={round}
              // src={
              //   selectedImage
              //     ? URL.createObjectURL(selectedImage)
              //     : userInfo?.image
              // }
              alt=""
            />
          </div>
          <img className="" src={camera.src} alt="" onClick={handleClick} />
          <input
            type="file"
            className={styles.imageInputField}
            accept="image/*"
            onChange={handleFileChange}
            ref={inputRef}
          />
        </div>
      </form>
    </div>
  );
};

export default CompleteProfileForm;
 */
