import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { isAuthenticated } from "./Auth";
import LogIn from "./../pages/LogIn";

function LoginRoute() {
  return isAuthenticated() ? (
    <Navigate to="/" replace />
  ) : (
    <Routes>
      <Route element={<LogIn />} path="/login" />
    </Routes>
  );
}

export default LoginRoute;
