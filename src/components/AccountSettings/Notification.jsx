import React from "react";
import Deactivate from "../Modals/Deactivate";
import DeactivateConfirm from "../Modals/DeactivateConfirm";

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

      <div className="mb_30">
        <h3>Deactivate Account</h3>
        <p>
          If you no longer want to receive notifications then Deactivate your
          Account.
        </p>
      </div>

      <button
        className="deactiveBtn"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        Deactivate my Account!
      </button>

      {/* <!-- Modal Start --> */}
      <Deactivate />
      <DeactivateConfirm />
      {/* <!-- Modal End --> */}
    </div>
  );
};

export default Notification;
