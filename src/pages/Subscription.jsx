import React from "react";
import { Link } from "react-router-dom";
import "./Subscription.css";

const Subscription = () => {
  return (
    <>
      <div className="completeProfileContainer">
        <Link to="/">You Logo</Link>
      </div>

      <div className="sub_header1">
        <h3>Subscription!</h3>
        <p>
          Please consider subscribing to gain access to the online book reading
          and Q&A forum for just $9.99.
        </p>
        <small>Note: All subscriptions and fees are nonrefundable</small>
        <h4>
          <span>"Enter a Promo Code to get Free Access of </span> <br />
          reading online the book”
        </h4>

        <div>
          <input
            type="text"
            className="promocode_input"
            placeholder="Enter promo code"
            name=""
            id=""
          />
          <button className="apply_btn">Apply</button>
        </div>
      </div>
      {/* subscription body */}
      <div className="subv_body">
        <p>Payment Information</p>

        <form action="" class="profileSetting1  mt_30cp">
          <div className="profile_pic">
            {/* <img src={profile} alt="" /> */}
          </div>
          <div class="d-flex justify-content-start align-items-end gap-4 mb-5">
            <div class="inputContainer">
              <label>Credit Card Number</label>
              <input type="text" placeholder="Enter Card Number" />
            </div>
            <div class="inputContainer">
              <label>Card Holder Name</label>
              <input type="text" placeholder="John Duo" />
            </div>
          </div>
          <div class="d-flex justify-content-start align-items-end gap-4 mb-5">
            <div class="inputContainer">
              <div class="d-flex justify-content-start align-items-end gap-4 ">
                <div class="inputContainer">
                  <label>Expiry Date</label>
                  <select class="" name="" id="">
                    <option selected>1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="4">5</option>
                  </select>
                </div>
                <div class="inputContainer">
                  <select class="" name="" id="">
                    <option selected>2029</option>
                    <option value="1">2030</option>
                    <option value="2">2031</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="inputContainer">
              <label>CVV/CVC</label>
              <input type="text" placeholder="Enter CVV/CVC Number" />
            </div>
          </div>

          <div className="purchase_sub">
            <input type="radio" />
           <small> Purchase Subscription for Others!</small>
          </div>

          <div className="create_profile_button">
            <button className="">Complete Payment</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Subscription;
