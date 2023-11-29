import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stripe from "stripe"


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



  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        borderStyle: "solid",
        borderWidth: "1px",
        background: "#121212",
        color: "#fff",
        border: "1px solid red",
        fontSize: "20px",
        "::placeholder": {
          color: "white",
        },
        width: "100%",
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee",
      },
    },
  };

  

function Payment() {

    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();




    const handleCompletePayment = () => {
  
      alert("Data send")
      setModalShow(true)
      // setTimeout(() => {
      //   navigate("/");
      //   window.location.reload();
      // }, 1000);
    };


    const handlePayment = async () => {
        // Get the PaymentIntent client secret from your server or set it on the client-side
        // const clientSecret = 'YOUR_CLIENT_SECRET';
        if (!stripe) {
          // Stripe.js has not loaded yet, so do nothing.
          return;
        }
    
        // setIsProcessing(true);
        const userData = {
          stripeCustomerId: "d5s4gf6s8fg456sa4g5dfg",
          subscriptionName: "Monthly",
        };
    
        console.log(userData, "usss");
    
        // const SubscriptionRes = await createSubscrption(userData);
    
        // console.log(SubscriptionRes, "sub");
    
        // const clientSecret = "";
        
        const clientSecret = await createPaymentIntent(
            2000 ,
            "usd"
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
                name: "firstName" + " " + "lastName",
                address: {
                  line1: "addressLine",
                  city: "address",
                  postal_code: 1206,
                  country: "BD",
                },
              },
            },
          }
        );
    
        console.log(paymentIntent, "pppp");
    
        if (error) {
        //   setError(error?.message);
          console.error("error", error);
        //   setIsProcessing(false);
          // Handle error: Show error to the user
        } else if (paymentIntent.status === "succeeded") {
        //   setIsProcessing(false);
        alert("Successfully paid!")
          // Payment succeeded, handle success
    
          // alert("Your payment done successfully");
    
        //   setPaymentModalShow(false);
        //   setPaymentSuccessFullModalShow(true);
    
        //   creditButtonRef.current.click();
    
        //   setError("");
        //   navigate("/");
        }
      };

      


  return (
    <div>
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

          <div className="card_info flex flex-col lg:flex-row gap-4 items-center w-full">
            <div className="w-full">
              {/* <label htmlFor="card_number">Card Number</label> */}
              {/* <input
                id="card_number"
                type="number"
                placeholder="1234 5678 9123 4567"
              /> */}
              <div className="card_input">
                <CardNumberElement options={CARD_OPTIONS} />
              </div>
            </div>
            <div className="flex gap-[15px] lg:gap-4 items-center w-full">
              <div className="w-full">
                {/* <label htmlFor="card_number">Expiration Date (MMYY)</label> */}
                {/* <input id="card_number" type="number" placeholder="1234" /> */}
                <div className="card_input">
                  <CardExpiryElement options={CARD_OPTIONS} />
                </div>
              </div>
              <div className="w-full">
                {/* <label htmlFor="card_number">CVV/ CVC</label> */}
                {/* <input id="card_number" type="number" placeholder="123" /> */}
                <div className="card_input">
                  <CardCvcElement options={CARD_OPTIONS} />
                </div>
              </div>
            </div>
          </div>

          <div className="create_profile_button">
            <button
              onClick={handlePayment}
            //   onClick={handleCompletePayment}
              href="#exampleModalToggle"
              type="button"
            //   data-toggle="modal"
            //   data-target="#exampleModalCenter"
            >
              Complete Payment
            </button>

            <CompletePayment />
          </div>
        </form>
    </div>
  )
}

export default Payment



//  const stripe = require("stripe")("sk_test_pggpOl1FECwCoLsgXDTQjtjF00An8mKwrj");



 const createPaymentIntent = async (amountInCents, currency) => {
  const stripe = Stripe("sk_test_51NOY81IxAutj9x1S8jD9AfAgqJYIctPkILZ3iggy1atSBdOSL3lhh2l693sPHcAoMkRJ9ivTW55zNape1xe8C4f9005uYWjXIx");
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency,
    });

    return paymentIntent.client_secret;
  } catch (error) {
    console.error("Error on createPayment intent",error);
    throw new Error("Failed to create PaymentIntent");
  }
};





