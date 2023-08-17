import React from "react";
import subscription from "../../assets/images/subcriptionPP_1.png";
import subscription2 from "../../assets/images/subcriptionPP_2.png";

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
            <div className="d-flex align-items-center gap-2">
              <button className="graybtn">Cancel Subscription</button>
              <button className="othersSub">Subscribe for Others</button>
            </div>
          </div>
          <div className="graySubLine  mt-3 mb-3"></div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <img src={subscription} alt="" />
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
              <button className="cancelSubBtn">Cancel Subscription</button>
            </div>
          </div>
          <div className="graySubLine mt-3 mb-3"></div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <img src={subscription2} alt="" />
              <p style={{ fontWeight: "600" }}>Siara James</p>
            </div>
            <div>
              <p className="text-center">johnduo@gmail.com</p>
            </div>
            <div>
              <button className="cancelSubBtn">Cancel Subscription</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
