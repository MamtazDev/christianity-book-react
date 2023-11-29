import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useSubscriptionCheck from "../hooks/useSubscriptionCheck";

function SubscriptionRoute({ children }) {
  const isSubscribe = useSubscriptionCheck();

  if (isSubscribe) {
    return children;
  } else if (!isSubscribe) {
    return <Navigate to="/subscription" replace></Navigate>;
  }
}

export default SubscriptionRoute;
