import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from './../pages/Home';
import LogIn from './../pages/LogIn';
import SignUp from './../pages/SignUp';
import ResetPassword from './../pages/ResetPassword';
import ResetVerification from './../pages/ResetVerification';
import ChangePassword from './../pages/ChangePassword';
import CompleteProfile from './../pages/CompleteProfile';
import Subscription from './../pages/Subscription';
import Layout from './../Layout/Layout';
import Faq from './../pages/Faq';
import Contact from './../pages/Contact';
import AccountSettings from './../pages/AccountSettings';
import AuthorChat from './../components/AuthorChat/AuthorChat';
import Bookmark from './../pages/Bookmark';
import ReadBook from './../pages/ReadBook';
import HighLights from './../pages/HighLights';
import MyNotes from './../pages/MyNotes';
import Notification from './../pages/Notification';

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "/login",
    element: (
      <LogIn />
    ),
  },

  {
    path: "/signUp",
    element: (
      <SignUp />
    ),
  },

  {
    path: "/reset-password",
    element: (
      <ResetPassword />
    ),
  },

  {
    path: "/reset-verification",
    element: (
      <ResetVerification />
    ),
  },

  {
    path: "/change-password",
    element: (
      <ChangePassword />
    ),
  },

  {
    path: "/complete-profile",
    element: (
      <CompleteProfile />
    ),
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
        path: "/faq",
        element: (
          <Faq />
        ),
      },
      {
        path: "/contact",
        element: (
          <Contact />
        ),
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
