import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import ResetPassword from "../pages/ResetPassword";
import ResetVerification from "../pages/ResetVerification";
import ChangePassword from "../pages/ChangePassword";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
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
]);
