import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import ResetPassword from "../pages/ResetPassword";
import ResetVerification from "../pages/ResetVerification";
import ChangePassword from "../pages/ChangePassword";
import CompleteProfile from "../pages/CompleteProfile";
import AccountSettings from "../pages/AccountSettings";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/account-settings", element: <AccountSettings /> },
  { path: "/login", element: <LogIn /> },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/reset-verification",
    element: <ResetVerification />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
  {
    path: "/complete-profile",
    element: <CompleteProfile />,
  },
]);
