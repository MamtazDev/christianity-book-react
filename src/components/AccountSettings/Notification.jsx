import React from "react";

const Notification = () => {
  return (
    <div>
      <div className="mb_30">
        <h3>Notification Settings</h3>
        <p>
          <span>Christianity Book</span> will send you notifications
        </p>
      </div>
      <div className="notificationSetting mb_40">
        <form action="">
          <div className="mb-lg-3">
            <input
              type="checkbox"
              className="checkBox"
              name="weeklyMail"
              value="yes"
              checked
            />
            <label>Receive weekly mails</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="announcement"
              className="checkBox"
              value="yes"
              checked
            />
            <label htmlFor="">Receive new Product Announcements</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Notification;
