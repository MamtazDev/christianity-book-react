import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import ResetPassword from "../pages/ResetPassword";
import ResetVerification from "../pages/ResetVerification";
import ChangePassword from "../pages/ChangePassword";
import CompleteProfile from "../pages/CompleteProfile";
import AccountSettings from "../pages/AccountSettings";
import AuthorChat from "../pages/AuthorChat";
import Bookmark from "../pages/Bookmark";
import Contact from "../pages/Contact";
import Layout from "../Layout/Layout";
import ReadBook from "../pages/ReadBook";
import Faq from "../pages/Faq";
import Notification from "../pages/Notification";
import HighLights from "../pages/HighLights";

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
  {
    path: "/complete-profile",
    element: <CompleteProfile />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/account-settings", element: <AccountSettings /> },
      { path: "/author-chat", element: <AuthorChat /> },
      { path: "/bookmark", element: <Bookmark /> },
      { path: "/read-book", element: <ReadBook /> },
      { path: "/faq", element: <Faq /> },
      { path: "/notification", element: <Notification /> },
      { path: "/highlights", element: <HighLights /> },
    ],
  },
]);
