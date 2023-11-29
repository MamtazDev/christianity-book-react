import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SubscriptionRoute({ children }) {
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("loggedInUser");
  useEffect(() => {
    if (userEmail?.data?.isSubscribed === false) {
      navigate("/subscription");
      return undefined;
    }
  });
  return children;
}

export default SubscriptionRoute;
