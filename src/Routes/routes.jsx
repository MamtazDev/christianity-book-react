import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import ResetPassword from "../pages/ResetPassword";
import ResetVerification from "../pages/ResetVerification";
import ChangePassword from "../pages/ChangePassword";
import CompleteProfile from "../pages/CompleteProfile";
import AccountSettings from "../pages/AccountSettings";
import Bookmark from "../pages/Bookmark";
import Layout from "../Layout/Layout";
import ReadBook from "../pages/ReadBook";
import Faq from "../pages/Faq";
import Notification from "../pages/Notification";
import HighLights from "../pages/HighLights";
import MyNotes from "../pages/MyNotes";
import PrivateRoute from "./PrivateRoute";
import Subscription from "./../pages/Subscription";
import AuthorChat from "./../components/AuthorChat/AuthorChat";
import Contact from './../pages/Contact';

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },

  {
    path: "/login",
    element: <LogIn />,
  },

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
    path: "/subscription",
    element: (
      <PrivateRoute>
        <Subscription />
      </PrivateRoute>
    ),
  },

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      
      {
        path: "/account-settings",
        element: (
          <PrivateRoute>
            <AccountSettings />
          </PrivateRoute>
        ),
      },

      {
        path: "/author-chat",
        element: (
          <PrivateRoute>
            <AuthorChat />
          </PrivateRoute>
        ),
      },

      {
        path: "/bookmark",
        element: (
          <PrivateRoute>
            <Bookmark />
          </PrivateRoute>
        ),
      },

      {
        path: "/read-book",
        element: (
          <PrivateRoute>
            <ReadBook />
          </PrivateRoute>
        ),
      },

      { path: "/faq", element: <Faq /> },

      {
        path: "/notification",
        element: (
          <PrivateRoute>
            <Notification />
          </PrivateRoute>
        ),
      },

      {
        path: "/highlights",
        element: (
          <PrivateRoute>
            <HighLights />
          </PrivateRoute>
        ),
      },

      {
        path: "/my-notes",
        element: (
          <PrivateRoute>
            <MyNotes />
          </PrivateRoute>
        ),
      },
      
    ],
  },
]);
