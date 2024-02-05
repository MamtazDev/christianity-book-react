import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stripe from "stripe";

import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";

import SubscriptionForOthersModal from "../Modals/SubscriptionForOthersModal";
import CompletePayment from "../Modals/CompletePayment";

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  sendSubscriptionMessage,
  updateSubscriptionInfo,
} from "../../api/auth";
import { AuthContext } from "../../contexts/AuthProvider";
import { addNotifications } from "../../api/notifications";
import { getCountryCode } from "../../utils/countryCodes";
import Paypal from "./Paypal";
import PaypalButton from "./PaypalButton";
import { STRIPE_SK } from "../../config/confir";
import Swal from "sweetalert2";
import { purchaseBook } from "../../api/books";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      borderStyle: "solid",
      borderWidth: "2px",
      color: "#000",
      fontSize: "16px",
      fontWeight: 400,
      "::placeholder": {
        color: "#423C6A",
      },
      width: "100%",
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#f00101",
    },
  },
};

function Payment({ codeApplied, bookInfo }) {
  const [modalShow, setModalShow] = useState(false);
  const { user, setUser, bookId, book } = useContext(AuthContext);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const handleCompletePayment = () => {
    alert("Data send");
    setModalShow(true);
    // setTimeout(() => {
    //   navigate("/");
    //   window.location.reload();
    // }, 1000);
  };

  const completeSubButton = useRef(null);

  const handlePayment = async () => {
    // Get the PaymentIntent client secret from your server or set it on the client-side
    // const clientSecret = 'YOUR_CLIENT_SECRET';
    setIsSubscribing(true);
    if (!stripe) {
      // Stripe.js has not loaded yet, so do nothing.
      return;
    }

    // setIsProcessing(true);
    const userData = {
      stripeCustomerId: "d5s4gf6s8fg456sa4g5dfg",
      subscriptionName: "Monthly",
    };

    // console.log(userData, "usss");

    // const SubscriptionRes = await createSubscrption(userData);

    // console.log(SubscriptionRes, "sub");

    // const clientSecret = "";

    const clientSecret = await createPaymentIntent(
      (codeApplied
        ? bookInfo?.price - bookInfo?.price * codeApplied
        : bookInfo?.price) * 100,
      "usd",
    );

    const cardElement = elements.getElement(CardNumberElement);

    //   const clientSecret = await createPaymentIntent(
    //     duration === "monthly" ? 2000 : 20000,
    //     "usd"
    //   );

    console.log(clientSecret, "client secret");

    console.log(cardElement, "cardElement");

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          type: "card",
          card: cardElement, // Replace with the actual CardElement
          billing_details: {
            name: `${user?.data?.fullName}`,
            address: {
              country: getCountryCode(user?.data?.country),
            },
          },
        },
      },
    );

    // console.log(paymentIntent, "pppp");

    if (error) {
      //   setError(error?.message);
      console.error("error", error);

      Swal.fire({
        position: "center",
        icon: "error",
        title: `${error?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
      setIsSubscribing(false);
      //   setIsProcessing(false);
      // Handle error: Show error to the user
    } else if (paymentIntent.status === "succeeded") {
      //   setIsProcessing(false);
      // alert("Successfully paid!");
      // Payment succeeded, handle success

      // alert("Your payment done successfully");

      //   setPaymentModalShow(false);
      //   setPaymentSuccessFullModalShow(true);

      //   creditButtonRef.current.click();

      //   setError("");

      const purchaseRes = await purchaseBook({
        user_id: user?.data?._id,
        book_id: bookId,
      });

      // console.log(purchaseRes, "purchaseRes");

      const response = await updateSubscriptionInfo(user?.data?._id);
      const localUserData = JSON.parse(localStorage.getItem("loggedInUser"));
      const newData = {
        ...localUserData?.data,
        isSubscribed: true,
        purchased_books: purchaseRes?.data?.purchased_books,
      };
      const newLocalUserData = {
        ...localUserData,
        data: newData,
      };
      localStorage.setItem("loggedInUser", JSON.stringify(newLocalUserData));
      setUser(newLocalUserData);
      const notiRes = await addNotifications({
        title: "Subscription Done.",
        content: "subscription successfully",
        userId: user?.data?._id,
      });
      const messRes = await sendSubscriptionMessage(user?.data?.email);
      setIsSubscribing(false);

      navigate("/");

      // if (response?.status === 200) {
      // completeSubButton?.current?.click();
      // }
    }
  };

  const [paymentOption, setPaymentOption] = useState("creditCard");
  const handlePaymentOption = (option) => {
    console.log(option);
    setPaymentOption(option);
  };

  // console.log(import.meta.env.VITE_PAYPAL_CLIENT_ID, "jkkj");
  console.log(bookId, "bbbokid");

  useEffect(() => {
    if (!bookId) {
      navigate("/");
    }
  }, [bookId]);

  return (
    <>
      <div>
        <form action="" className="subscription  mt_30cp">
          <div
            action=""
            className="d-flex  justify-content-start align-items-end flex-wrap flex-md-nowrap gap_5 mb-5"
          >
            <div className="payment_parent" style={{ cursor: "pointer" }}>
              <label
                htmlFor="creditCard"
                className="d-flex align-items-center"
                style={{ cursor: "pointer" }}
              >
                {/*  */}
                <input
                  type="radio"
                  id="creditCard"
                  name="flexRadioDefault"
                  className=" payment_method_radio "
                  checked={paymentOption === "creditCard"}
                  onChange={() => handlePaymentOption("creditCard")}
                  style={{ cursor: "pointer" }}
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
              </label>
            </div>

            <div className="payment_parent">
              <label
                htmlFor="paypal"
                className="d-flex align-items-center"
                style={{ cursor: "pointer" }}
              >
                <input
                  type="radio"
                  id="paypal"
                  name="flexRadioDefault"
                  className=" payment_method_radio"
                  checked={paymentOption === "paypal"}
                  onChange={() => handlePaymentOption("paypal")}
                  style={{ cursor: "pointer" }}
                />
                <div className="payment_div">
                  <h4>Paypal</h4>
                  <small>Pay with your PayPal account</small>
                  <div className="payment_method">
                    <img src={p4} alt="paypal" />
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* <div className="profileSetting3 mb_40">
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
          </div> */}

          {/* <div>
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
          </div> */}
          {/*
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

          </div> */}

          {paymentOption === "creditCard" && (
            <>
              <div
                className="d-flex flex-column flex-md-row w-100 "
                style={{ gap: "30px" }}
              >
                <div className="w-100">
                  <label htmlFor="card_number">Card Number</label>
                  <div className="card_input">
                    <CardNumberElement
                      options={CARD_OPTIONS}
                      // options={{
                      //   ...CARD_OPTIONS,
                      //   placeholder: "Enter card number",
                      // }}
                    />
                  </div>
                </div>
                <div className="w-100">
                  <label className="mb-1">Full Name</label>
                  <input
                    name="fullName"
                    type="text"
                    // placeholder="Enter Card Holder Name"
                    className="w-100"
                  />
                </div>
              </div>
              <div
                className="d-flex flex-column flex-md-row w-100  mt-4"
                style={{ gap: "30px" }}
              >
                <div className="w-100">
                  <label htmlFor="card_number">Expiration Date (MMYY)</label>
                  <div className="card_input">
                    <CardExpiryElement options={CARD_OPTIONS} />
                  </div>
                </div>
                <div className="w-100">
                  <label htmlFor="card_number">CVV/ CVC</label>
                  {/* <input id="card_number" type="number" placeholder="123" /> */}
                  <div className="card_input">
                    <CardCvcElement options={CARD_OPTIONS} />
                  </div>
                </div>
              </div>

              {/* <div className="card_info flex  items-center w-full mt-4">
            <div className="flex gap-[15px] lg:gap-4 items-center w-full">
              <div className="w-full">
                <label htmlFor="card_number">CVV/ CVC</label>

                <div className="card_input">
                  <CardCvcElement options={CARD_OPTIONS} />
                </div>
              </div>
            </div>
          </div> */}

              <div className="create_profile_button mt-4 ">
                {isSubscribing ? (
                  <button
                    disabled
                    //   onClick={handleCompletePayment}
                    type="button"
                    className="px-5 py-2"
                  >
                    Subscribing...
                  </button>
                ) : (
                  <button
                    onClick={handlePayment}
                    //   onClick={handleCompletePayment}
                    type="button"
                    className="px-5 py-2"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    Complete Payment
                  </button>
                )}
              </div>
              {/* <div className="create_profile_button mt-4">
                <button
                  onClick={handlePayment}
                  //   onClick={handleCompletePayment}
                  type="button"
                >
                  Complete Payment
                </button>
              </div> */}
            </>
          )}

          {paymentOption === "paypal" && (
            <PaypalButton codeApplied={codeApplied} />
          )}
        </form>
      </div>

      <CompletePayment />

      <button
        style={{ display: "none" }}
        onClick={handlePayment}
        //   onClick={handleCompletePayment}
        ref={completeSubButton}
        href="#exampleModalToggle"
        type="button"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      ></button>
    </>
  );
}

export default Payment;

//  const stripe = require("stripe")("sk_test_pggpOl1FECwCoLsgXDTQjtjF00An8mKwrj");

const createPaymentIntent = async (amountInCents, currency) => {
  const stripe = Stripe(STRIPE_SK);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amountInCents),
      currency: currency,
    });

    return paymentIntent.client_secret;
  } catch (error) {
    console.error("Error on createPayment intent", error);
    throw new Error("Failed to create PaymentIntent");
  }
};
