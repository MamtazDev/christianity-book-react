import React from "react";
import nextArrow from "../../assets/images/next_arrow.png";
import deactiveAccount from "../../assets/images/deactive_account.png";
import deactiveSuccess from "../../assets/images/deactive_success.png";
import ActivityGraph from "./ActivityGraph";
import Notification from "./Notification";
import Subscription from "./Subscription";
import ProfileSetting from "./ProfileSetting";

const AccountSetting = () => {
  return (
    <div>
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
            <div className="mb_40">
              <h3>Account Settings</h3>
              <p>
                Here you can Change the Email Address you use on{" "}
                <span>Christianity Book</span> and your password.
              </p>
            </div>

            {/* <!-- Email Settings Start --> */}
            <form action="" className="changeEmail">
              <div className="d-flex justify-content-start align-items-end gap-4 ">
                <div className="inputContainer">
                  <label>Change Email</label>
                  <input type="email" placeholder="Enter Email" />
                </div>
                <button>Change Email</button>
              </div>
            </form>
            {/* <!-- Email Settings End --> */}

            {/* <!-- Password Settings Start --> */}
            <form action="" className="changePassword mb_40">
              <div className="d-flex flex-wrap justify-content-start align-items-end gap-4 mb-3 mb-lg-5">
                <div className="inputContainer">
                  <label>Change Password</label>
                  <input type="password" placeholder="Enter Old Password" />
                </div>
                <div className="inputContainer">
                  <label>New Password</label>
                  <input type="password" placeholder="Enter New Password" />
                </div>
                <div className="inputContainer">
                  <label>New Password</label>
                  <input type="password" placeholder="Confirm New Password" />
                </div>
              </div>
              <button>Update</button>
            </form>
            {/* <!-- Password Settings End --> */}

            {/* <!-- Profile Settings Start --> */}
            <ProfileSetting />
            {/* <!-- Profile Settings End --> */}

            {/* <!-- Subscription Settings Start --> */}
            <Subscription />
            {/* <!-- Subscription Settings End --> */}

            {/* <!-- Notification Seetings Start --> */}
            <Notification />
            {/* <!-- Notification Seetings End --> */}

            <div className="mb_30">
              <h3>Deactivate Account</h3>
              <p>
                If you no longer want to receive notifications then Deactivate
                your Account.
              </p>
            </div>
            <form action="">
              <a
                className="deactiveBtn"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                role="button"
              >
                Deactivate my Account!
              </a>
            </form>

            {/* <!-- Modal Start --> */}
            <div
              className="modal fade"
              id="exampleModalToggle"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel"
              tabIndex="-1"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body deactiveAccModalOne text-center">
                    <img src={deactiveAccount} alt="Deactivate Account" />
                    <h6 className="mt-4 mb-3">Deactivate Account!</h6>
                    <p className="mb-5">
                      Are you sure you want to <span>Deactivate</span> your
                      Account?
                    </p>
                    <div className="modalBtn d-flex justify-content-center align-items-center gap-3 mb-5">
                      <button className="cancelAccBtn" data-bs-dismiss="modal">
                        Cancel
                      </button>
                      <button
                        className="confirmBtn"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModalToggle2"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel2"
              tabIndex="-1"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body deactiveAccModalOne text-center">
                    <img src={deactiveSuccess} alt="Deactivate Account" />
                    <h6 className="mt-4 mb-3 text-dark">Deactivate Account!</h6>
                    <p className="mb-5">
                      Your Account has been Deactivated, You are no longer exist
                      on Christianity Book’s Data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Modal End --> */}
          </div>
        </div>
        <ActivityGraph />
      </div>
    </div>
  );
};

export default AccountSetting;
