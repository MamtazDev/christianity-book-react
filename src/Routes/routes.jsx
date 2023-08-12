import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LogIn /> },
  {
    path: "signUp",
    element: <SignUp />,
  },
]);
