import React, { useRef, useState } from "react";
import round from "../../assets/images/round_pp1.png";
import profile from "../../assets/images/profile_pic.png";
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
      <form action="" className="profileSetting mt_30cp">
        <div className="profile_pic">
        <img src={profile} alt="" />
        </div>
        <div className="d-flex justify-content-start align-items-end gap-4 mb-5 complete_profile_gap">
          <div className="inputContainer">
            <label>Full Name</label>
            <input type="text" placeholder="John Duo" />
          </div>
          <div className="inputContainer">
            <label>Email Address</label>
            <input type="email" placeholder="johnduo@gmail.com" />
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-end gap-4 mb-5 complete_profile_gap">
          <div className="inputContainer">
            <label>Phone Number</label>
            <input type="text" placeholder="+1 123 456 789" />
          </div>
          <div className="inputContainer">
            <label>Country</label>
            <select className="" name="" id="">
              <option selected>Country</option>
              <option value="1">Bangladesh</option>
              <option value="2">Nepal</option>
              <option value="3">India</option>
              <option value="4">Canada</option>
            </select>
          </div>
        </div>
        <div className="create_profile_button">

        <button className="">Create Profile</button>
        </div>
      </form>
    </div>
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
