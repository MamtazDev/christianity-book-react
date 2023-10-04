import React from 'react';

const AccountSetting = () => {
  return (
    <div>
        <div className="mb_40">
              <h3>Account Settings</h3>
              <p>
                Here you can Change the Email Address you use on{" "}
                <span>Christianity Book</span> and your password.
              </p>
            </div>

            {/* <!-- Email Settings Start --> */}
            <form action="" className="changeEmail">
              <div className="d-flex justify-content-start align-items-end gap-4 acount_gap">
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
              <div className="d-flex flex-wrap justify-content-start align-items-end gap-4 mb-3 mb-lg-5 acount_gap">
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
    </div>
  );
};

export default AccountSetting;