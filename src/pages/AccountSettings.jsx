import React from "react";
import AccountSetting from "../components/AccountSettings/AccountSetting";
import ProfileSetting from "../components/AccountSettings/ProfileSetting";
import Subscription from "../components/AccountSettings/Subscription";
import Notification from "../components/AccountSettings/Notification";
import ActivityGraph from "../components/AccountSettings/ActivityGraph";
import PageHeading from "../components/Utils/PageHeading";

const AccountSettings = () => {
  return (
    <>
      <div className="container">
        <PageHeading> Account Settings</PageHeading>

        <div className="account">
          <AccountSetting />
          <ProfileSetting />
          <Subscription />
          <Notification />
        </div>

        <ActivityGraph />
      </div>
    </>
  );
};

export default AccountSettings;
