import React from 'react';

const ProfileSetting = () => {
    return (
        <div>
             <div className="mb_40">
              <h3>Profile Settings</h3>
              <p>
                Here you can Change your profile data you use on{" "}
                <span>Christianity Book</span>.
              </p>
            </div>
            <form action="" className="profileSetting mb_40">
              <div className="d-flex justify-content-start align-items-end acount_gap mb-5">
                <div className="inputContainer">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Duo" />
                </div>
                <div className="inputContainer">
                  <label>Email Address</label>
                  <input type="email" placeholder="johnduo@gmail.com" />
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-end acount_gap mb-5">
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
              <button>Save Changings</button>
            </form>
        </div>
    );
};

export default ProfileSetting;