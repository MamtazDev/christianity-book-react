import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { getConversationOfTwoUsers } from "../api/conversations";
import useConversationIdCheck from "../hooks/useConversationIdCheck";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { conversationId, isLoading } = useConversationIdCheck();

  if (user && !isLoading && conversationId) {
    return <Navigate to="/author-chat" replace></Navigate>;
  } else if (user) {
    return children;
  } else if (!user) {
    return <Navigate to="/login" replace></Navigate>;
  }
};

export default ProtectedRoute;
