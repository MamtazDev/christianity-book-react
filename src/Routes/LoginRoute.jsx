import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { isAuthenticated } from "./Auth";
import LogIn from "./../pages/LogIn";

function LoginRoute({ children }) {
  return isAuthenticated() ? <Navigate to="/" replace /> : children;
}

export default LoginRoute;
