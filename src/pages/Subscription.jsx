import React from "react";
import { Link } from "react-router-dom";
import "./Subscription.css";
import CompletePayment from "../components/Modals/CompletePayment";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import SubscriptionForOthersModal from "./../components/Modals/SubscriptionForOthersModal";
const Subscription = () => {
  const [modalShow, setModalShow] = React.useState(false);
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
            placeholder="Enter email address"
          />
          <button className="apply_btn">Apply</button>
        </div>
      </div>
      <div className="subv_body">
        <p>Payment Information</p>
        <form action="" className="subscription  mt_30cp">
          <div className="d-flex justify-content-start align-items-end flex-wrap flex-md-nowrap gap_5 mb-5">
            <div className="payment_parent">
              <input
                type="radio"
                id="flexRadioDefault1"
                name="flexRadioDefault"
                className=" payment_method_radio"
              />
              <div className="payment_div">
                <h4>Credit Card</h4>
                <small>Pay with credit card via Stripe</small>
                <div className="payment_method">
                  <img src={p1} alt="visa" />
                  <img src={p2} alt="payment-2" />
                  <img src={p3} alt="amex" />
                </div>
              </div>
            </div>

            <div className="payment_parent">
              <input
                type="radio"
                id="flexRadioDefault1"
                name="flexRadioDefault"
                className=" payment_method_radio"
              />
              <div className="payment_div">
                <h4>Paypal</h4>
                <small>Pay with your PayPal account</small>
                <div className="payment_method">
                  <img src={p4} alt="paypal" />
                </div>
              </div>
            </div>
          </div>

          <div className="profileSetting3 mb_40">
            <div className="d-flex justify-content-start flex-wrap flex-md-nowrap gap_4 mb-5">
              <div className="inputContainer2">
                <label>Full Name</label>
                <input name="fullName" type="text" placeholder="John Duo" />
              </div>
              <div className="inputContainer2">
                <label>Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="johnduo@gmail.com"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex gap_4 w-100">
              <div className="w-100">
                <label>Expiry Date</label>
                <div className="d-flex flex-wrap flex-md-nowrap gap_4 w-100">
                  <select className="w-100" name="" id="">
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="4">5</option>
                  </select>
                  <select className="w-100 pb-2" name="" id="">
                    <option value="0">2029</option>
                    <option value="1">2030</option>
                    <option value="2">2031</option>
                  </select>
                </div>
              </div>
              <div className="w-100">
                <label>CVV/CVC</label>
                <input
                  className="w-100"
                  type="text"
                  placeholder="Enter CVV/CVC Number"
                />
              </div>
            </div>
          </div>

          <div className="purchase_sub mt_30cp mt-4">
            <label className="checkbox">
              <input
                type="checkbox"
                onClick={() => setModalShow(true)}
                className="checkbox__input"
              />
              <span className="checkbox__inner"></span>
            </label>
            <SubscriptionForOthersModal
              show={modalShow}
              onHide={setModalShow}
            />

            <small> Purchase Subscription for Others!</small>
          </div>
          <div className="create_profile_button">
            <button
              href="#exampleModalToggle"
              type="button"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Complete Payment
            </button>

            <CompletePayment />
          </div>
        </form>
      </div>
    </>
  );
};

export default Subscription;
