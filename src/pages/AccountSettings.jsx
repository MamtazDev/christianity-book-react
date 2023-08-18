import React from "react";
import AccountSetting from "../components/AccountSettings/AccountSetting";
import nextArrow from "../assets/images/next_arrow.png";
import ProfileSetting from "../components/AccountSettings/ProfileSetting";
import Subscription from "../components/AccountSettings/Subscription";
import Notification from "../components/AccountSettings/Notification";
import ActivityGraph from "../components/AccountSettings/ActivityGraph";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const AccountSettings = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="forPosition mb_100">
          <div className="d-flex justify-content-start align-items-center mb-4 mb-lg-5 gap-2">
            <a href="index.html">Home</a>
            <img src={nextArrow} alt="Arrow" />
            <a href="" className="activePage">
              Account Settings
            </a>
          </div>

          <div className="account">
            <AccountSetting />

            {/* <!-- Profile Settings Start --> */}
            <ProfileSetting />
            {/* <!-- Profile Settings End --> */}

            {/* <!-- Subscription Settings Start --> */}
            <Subscription />
            {/* <!-- Subscription Settings End --> */}

            {/* <!-- Notification Seetings Start --> */}
            <Notification />
            {/* <!-- Notification Seetings End --> */}
          </div>
        </div>
        <ActivityGraph />
      </div>
      <Footer />
    </div>
  );
};

export default AccountSettings;
