import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Subscription.css";
import CompletePayment from "../components/Modals/CompletePayment";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";

import Payment from "../components/Payment/Payment";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PK } from "../config/confir";

// import SubscriptionForOthersModal from "./../components/Modals/SubscriptionForOthersModal";

const Subscription = () => {
  const [modalShow, setModalShow] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [codeApplied, setCodeApplied] = useState(null);
  const [wrongCouponCode, setWrongCouponCode] = useState(false);
  const [couponInfo, setCouponInfo] = useState({});
  const navigate = useNavigate();

  const stripePromise = loadStripe(STRIPE_PK);

  const handleCompletePayment = () => {
    alert("Data send");
    // setModalShow(true)
    // setTimeout(() => {
    //   navigate("/");
    //   window.location.reload();
    // }, 1000);
  };

  const handleCoupnChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleApplyCouponCode = () => {
    if (couponCode === couponInfo?.code) {
      setCodeApplied(couponInfo?.discount);
      setWrongCouponCode(false);
    } else {
      setWrongCouponCode(true);
    }
  };

  const getCouponCode = async () => {
    const response = await getCoupon();

    if (response.success) {
      setCouponInfo(response?.coupon[0]);
    }
  };

  useEffect(() => {
    getCouponCode();
  }, []);

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
            placeholder="Enter coupon code"
            onChange={handleCoupnChange}
          />
          <button
            className="apply_btn apply_coupon_button"
            disabled={!couponCode || codeApplied}
            onClick={handleApplyCouponCode}
            style={{
              cursor: `${
                !couponCode || codeApplied ? "not-allowed" : "pointer"
              }`,
            }}
          >
            Apply
          </button>
        </div>
        {codeApplied && (
          <p className="text-success" style={{ fontSize: "12px" }}>
            *Coupon Applied!
          </p>
        )}
        {wrongCouponCode && (
          <p className="text-danger" style={{ fontSize: "12px" }}>
            *Invalid Coupon!
          </p>
        )}
      </div>

      <div className="subv_body">
        <p>Payment Information</p>

        <Elements stripe={stripePromise}>
          <Payment codeApplied={codeApplied} />
        </Elements>

        {/* <Payment/> */}
      </div>
    </>
  );
};

export default Subscription;
