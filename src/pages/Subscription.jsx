import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Subscription.css";
import CompletePayment from "../components/Modals/CompletePayment";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";

import Payment from "../components/Payment/Payment"

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


// import SubscriptionForOthersModal from "./../components/Modals/SubscriptionForOthersModal";


const Subscription = () => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();


  const stripePromise = loadStripe(
    "pk_test_51NOY81IxAutj9x1S3U3aEuf8BlAgkDGUmMOdl4L1RD8C7x2GV0y2apW6rCvQtG6eZUatdreJJUbelnf2fQfbnFyu00I54cGbH5"
  );



  const handleCompletePayment = () => {

    alert("Data send")
    // setModalShow(true)
    // setTimeout(() => {
    //   navigate("/");
    //   window.location.reload();
    // }, 1000);
  };

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

        <Elements stripe={stripePromise}>
           <Payment/>
        </Elements>

        {/* <Payment/> */}
       
      </div>
    </>
  );
};

export default Subscription;
