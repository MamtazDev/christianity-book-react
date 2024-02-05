import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Subscription.css";
import CompletePayment from "../components/Modals/CompletePayment";

import { AuthContext } from "../contexts/AuthProvider";

import Payment from "../components/Payment/Payment";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PK } from "../config/confir";
import { getBookCouponInfo, getCoupons } from "../api/coupon";
import { getBookInfo } from "../api/books";
import logo from "../assets/images/logo.jpeg";

// import SubscriptionForOthersModal from "./../components/Modals/SubscriptionForOthersModal";

const Subscription = () => {
  const [modalShow, setModalShow] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [codeApplied, setCodeApplied] = useState(null);
  const [wrongCouponCode, setWrongCouponCode] = useState(false);
  const [couponInfo, setCouponInfo] = useState({});
  const navigate = useNavigate();

  const stripePromise = loadStripe(STRIPE_PK);

  const { user, setUser, bookId, book } = useContext(AuthContext);

  const [bookInfo, setBookInfo] = useState(null);
  const [bookCouponInfo, setBookCouponInfo] = useState(null);
  const { id } = useParams();

  const handleCoupnChange = (e) => {
    setCouponCode(e.target.value);
  };

  // console.log(couponInfo, "dfjk");

  const handleApplyCouponCode = () => {
    if (couponCode === bookCouponInfo?.code) {
      setCodeApplied(bookCouponInfo?.discount);
      setWrongCouponCode(false);
    } else {
      setWrongCouponCode(true);
    }
  };

  const getCouponCode = async () => {
    const response = await getCoupons();

    if (response.success) {
      setCouponInfo(response?.coupon[0]);
    }
  };

  const getBook = async () => {
    const response = await getBookInfo(id);
    setBookInfo(response);
  };

  const getCouponInfo = async () => {
    const response = await getBookCouponInfo(id);
    setBookCouponInfo(response);
  };

  console.log(codeApplied, "codeApplied");

  useEffect(() => {
    // getCouponCode();
    getBook();
    getCouponInfo();
  }, [id]);

  return (
    <>
      <div className="completeProfileContainer">
        <Link to="/">
          <img style={{ maxHeight: 50 }} src={logo} alt="" />
        </Link>
      </div>
      <div className="sub_header1">
        <h3>Subscription!</h3>
        <p>
          Please consider subscribing to gain access to the online book reading
          and Q&A forum for just $
          {codeApplied
            ? bookInfo?.price - bookInfo?.price * codeApplied
            : bookInfo?.price}
          .
        </p>
        <small>Note: All subscriptions and fees are nonrefundable</small>
        <h4>
          <span>"Enter a Promo Code to get Free Access of </span> <br />
          reading online the book”
        </h4>
        {bookCouponInfo && (
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
        )}
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
          <Payment codeApplied={codeApplied} bookInfo={bookInfo} />
        </Elements>

        {/* <Payment/> */}
      </div>
    </>
  );
};

export default Subscription;
