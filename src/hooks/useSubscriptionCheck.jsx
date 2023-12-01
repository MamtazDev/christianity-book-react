import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { getConversationOfTwoUsers } from "../api/conversations";
import { BASE_URL } from "../config/confir";

const useSubscriptionCheck = () => {
  const [isSubscribe, setIsSubscribe] = useState(false);

  useEffect(() => {
    const userEmail = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log(userEmail, "usss");
    if (userEmail?.data?.isSubscribed === true) {
      setIsSubscribe(true);
    }
  }, []);

  return isSubscribe;
};

export default useSubscriptionCheck;
