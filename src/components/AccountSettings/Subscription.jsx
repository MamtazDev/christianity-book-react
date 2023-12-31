import React from "react";
import subscription from "../../assets/images/subcriptionPP_1.png";
import subscription2 from "../../assets/images/subcriptionPP_2.png";
import './AcountSetting.css'

const Subscription = () => {
  return (
    <div>
      <div className="mb_30 mt-2">
        <h3>My Subscription</h3>
      </div>
      <div className="subOutter mb_40 ">
        <div className="subscriptionBox ">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span>Plan</span>
              <h5>My Subscription</h5>
            </div>
            <div>
              <span>Payment</span>
              <h5>
                $9.99 <span className="payment">per month</span>
              </h5>
            </div>
            <div className="d-flex align-items-center gap-2 cancel_sub_container">
              <div type="button" className="graybtn">Cancel Subscription</div>
              <div type="button" className="othersSub">Subscribe for Others</div>
            </div>
          </div>
          <div className="graySubLine  mt-3 mb-3"></div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <img src={subscription} alt="" />npm 
              <p style={{ fontWeight: "600" }}>John Duo</p>
            </div>
            <div>
              <span className="text-center">
                Subscription For Others{" "}
                <span style={{ fontSize: "20px" }}>(02 persons)</span>
              </span>
              <p className="text-center">johnduo@gmail.com</p>
            </div>
            <div>
              <div type="button" className="cancelSubBtn">Cancel Subscription</div>
            </div>
          </div>
          <div className="graySubLine mt-3 mb-3"></div>
          {/* <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <img src={subscription2} alt="" />
              <p style={{ fontWeight: "600" }}>Siara James</p>
            </div>
            <div>
              <p className="text-center">johnduo@gmail.com</p>
            </div>
            <div>
              <div type="button" className="cancelSubBtn">Cancel Subscription</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
