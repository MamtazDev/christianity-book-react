import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useContext } from "react";
import {
  sendSubscriptionMessage,
  updateSubscriptionInfo,
} from "../../api/auth";
import { addNotifications } from "../../api/notifications";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { PAYPAL_CLIENT_ID } from "../../config/confir";

const PaypalButton = () => {
  const { user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleCompletePayment = async () => {
    const response = await updateSubscriptionInfo(user?.data?._id);
    const localUserData = JSON.parse(localStorage.getItem("loggedInUser"));
    const newData = { ...localUserData?.data, isSubscribed: true };
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
    // setIsSubscribing(false);

    navigate("/");
  };

  return (
    <PayPalScriptProvider
      // deferLoading={true}
      options={{
        "client-id": PAYPAL_CLIENT_ID,
        components: "buttons",
        currency: "USD",
        intent: "capture",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "20.00",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(function (details) {
            // Handle successful payment

            if (details?.status === "COMPLETED") {
              handleCompletePayment();
            }
            console.log(details);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
