import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("loggedInUser");
  useEffect(() => {
    if (!userEmail) {
      navigate("/login");
      return undefined;
    }
  });
  return children;
}

export default PrivateRoute;
