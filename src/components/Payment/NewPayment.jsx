import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";
import Stripe from "stripe";
import { STRIPE_SK } from "../../config/confir";
import { getCountryCode } from "../../utils/countryCodes";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";

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

const NewPayment = ({ handleAskForHardCopy, setModalShow }) => {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    setIsSubscribing(true);

    if (!stripe) {
      // Stripe.js has not loaded yet, so do nothing.
      setIsSubscribing(false);
      return;
    }

    const clientSecret = await createPaymentIntent(2000, "usd");

    const cardElement = elements.getElement(CardNumberElement);

    //   const clientSecret = await createPaymentIntent(
    //     duration === "monthly" ? 2000 : 20000,
    //     "usd"
    //   );

    console.log(clientSecret, "client secret");

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
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Payment successfull!`,
        showConfirmButton: false,
        timer: 1500,
      });
      await handleAskForHardCopy(paymentIntent?.id);
      setModalShow(false);

      //   const purchaseRes = await purchaseBook({
      //     user_id: user?.data?._id,
      //     book_id: bookId,
      //   });

      // if (response?.status === 200) {
      // completeSubButton?.current?.click();
      // }
    }
  };
  return (
    <>
      <div>
        <form action="" className="subscription  mt_30cp">
          <div
            action=""
            className="d-flex justify-content-start align-items-end flex-wrap flex-md-nowrap gap_5 mb-5"
          >
            <div className="payment_parent" style={{ cursor: "pointer" }}>
              <label
                htmlFor="creditCard"
                className="d-flex align-items-center"
                style={{ cursor: "pointer" }}
              >
                {/*  */}
                {/* <input
                    type="radio"
                    id="creditCard"
                    name="flexRadioDefault"
                    className=" payment_method_radio "
                    checked={paymentOption === "creditCard"}
                    onChange={() => handlePaymentOption("creditCard")}
                    style={{ cursor: "pointer" }}
                  /> */}
                <div className="payment_div">
                  <h4>Credit Card</h4>

                  <small>Pay with credit card via Stripe</small>
                  {/* <div className="payment_method">
                      <img src={p1} alt="visa" />
                      <img src={p2} alt="payment-2" />
                      <img src={p3} alt="amex" />
                    </div> */}
                </div>
              </label>
            </div>

            {/* <div className="payment_parent">
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
              </div> */}
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

          {/* {paymentOption === "creditCard" && ( */}
          <>
            <div
              className="d-flex w-100 flex-column flex-md-row"
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
              className="d-flex w-100 flex-column flex-md-row  mt-4"
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

            <div className="create_profile_button mt-4">
              {isSubscribing ? (
                <button
                  disabled
                  //   onClick={handleCompletePayment}
                  type="button"
                  className="px-5 py-2"
                >
                  Loading...
                </button>
              ) : (
                <button
                  onClick={handlePayment}
                  //   onClick={handleCompletePayment}
                  type="button"
                  className="px-5 py-2"
                >
                  Complete Payment $20
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

          {/* {paymentOption === "paypal" && (
              <PaypalButton codeApplied={codeApplied} />
            )} */}
        </form>
      </div>
    </>
  );
};

export default NewPayment;

const createPaymentIntent = async (amountInCents, currency) => {
  const stripe = Stripe(STRIPE_SK);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency,
    });

    return paymentIntent.client_secret;
  } catch (error) {
    console.error("Error on createPayment intent", error);
    throw new Error("Failed to create PaymentIntent");
  }
};
