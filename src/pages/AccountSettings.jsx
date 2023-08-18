import React from "react";
import AccountSetting from "../components/AccountSettings/AccountSetting";
import nextArrow from "../assets/images/next_arrow.png";
import ProfileSetting from "../components/AccountSettings/ProfileSetting";
import Subscription from "../components/AccountSettings/Subscription";
import Notification from "../components/AccountSettings/Notification";
import ActivityGraph from "../components/AccountSettings/ActivityGraph";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import PageHeading from "../components/Utils/PageHeading";

const AccountSettings = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <PageHeading> Account Settings</PageHeading>

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

        <ActivityGraph />
      </div>
      <Footer />
    </div>
  );
};

export default AccountSettings;
