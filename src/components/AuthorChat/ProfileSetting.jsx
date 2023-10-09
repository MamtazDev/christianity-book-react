import React, { useState } from "react";
import settings from "../../assets/images/message_settings.png";

const ProfileSetting = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const handleProfileSetting = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <>
      <div className="profile_parent">
        <button onClick={handleProfileSetting} className="button_click">
          <img src={settings} alt="" />
        </button>
        {profileOpen && <div className="profile_setting">pppp</div>}
      </div>
    </>
  );
};

export default ProfileSetting;
