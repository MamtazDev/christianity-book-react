import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import PrivateRoute from "./PrivateRoute";
import Loader from "../components/Utils/Loader";
// const Home = lazy(() => import("../pages/Home"));
// const LogIn = lazy(() => import("../pages/LogIn"));
// const SignUp = lazy(() => import("../pages/SignUp"));
// const ResetPassword = lazy(() => import("../pages/ResetPassword"));
// const ResetVerification = lazy(() => import("../pages/ResetVerification"));
// const ChangePassword = lazy(() => import("../pages/ChangePassword"));
// const CompleteProfile = lazy(() => import("../pages/CompleteProfile"));
// const AccountSettings = lazy(() => import("../pages/AccountSettings"));
// const Bookmark = lazy(() => import("../pages/Bookmark"));
// const Layout = lazy(() => import("../Layout/Layout"));
// const ReadBook = lazy(() => import("../pages/ReadBook"));
// const Faq = lazy(() => import("../pages/Faq"));
// const Notification = lazy(() => import("../pages/Notification"));
// const HighLights = lazy(() => import("../pages/HighLights"));
// const MyNotes = lazy(() => import("../pages/MyNotes"));
// const Subscription = lazy(() => import("../pages/Subscription"));
// const AuthorChat = lazy(() => import("../components/AuthorChat/AuthorChat"));
// const Contact = lazy(() => import("../pages/Contact"));
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
// import Notification from "../components/AccountSettings/Notification";
import HighLights from './../pages/HighLights';
import MyNotes from './../pages/MyNotes';
import Notification from './../pages/Notification';

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <Suspense fallback={<Loader />}>
      <Home />
      // </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      // <Suspense fallback={<Loader />}>
      <LogIn />
      // </Suspense>
    ),
  },

  {
    path: "/signUp",
    element: (
      // <Suspense fallback={<Loader />}>
      <SignUp />
      // </Suspense>
    ),
  },

  {
    path: "/reset-password",
    element: (
      // <Suspense fallback={<Loader />}>
      <ResetPassword />
      // </Suspense>
    ),
  },

  {
    path: "/reset-verification",
    element: (
      // <Suspense fallback={<Loader />}>
      <ResetVerification />
      // </Suspense>
    ),
  },

  {
    path: "/change-password",
    element: (
      // <Suspense fallback={<Loader />}>
      <ChangePassword />
      // </Suspense>
    ),
  },

  {
    path: "/complete-profile",
    element: (
      // <Suspense fallback={<Loader />}>
      <CompleteProfile />
      // </Suspense>
    ),
  },
  {
    path: "/subscription",
    element: (
      <PrivateRoute>
        {/* <Suspense fallback={<Loader />}> */}
        <Subscription />
        {/* </Suspense> */}
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
          // <Suspense fallback={<Loader />}>
          <Faq />
          // </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          // <Suspense fallback={<Loader />}>
          <Contact />
          // </Suspense>
        ),
      },
      {
        path: "/account-settings",
        element: (
          <PrivateRoute>
            {/* <Suspense fallback={<Loader />}> */}
            <AccountSettings />
            {/* </Suspense> */}
          </PrivateRoute>
        ),
      },

      {
        path: "/author-chat",
        element: (
          <PrivateRoute>
            {/* <Suspense fallback={<Loader />}> */}
            <AuthorChat />
            {/* </Suspense> */}
          </PrivateRoute>
        ),
      },

      {
        path: "/bookmark",
        element: (
          <PrivateRoute>
            {/* <Suspense fallback={<Loader />}> */}
            <Bookmark />
            {/* </Suspense> */}
          </PrivateRoute>
        ),
      },
      {
        path: "/read-book",
        element: (
          <PrivateRoute>
            {/* <Suspense fallback={<Loader />}> */}
            <ReadBook />
            {/* </Suspense> */}
          </PrivateRoute>
        ),
      },
      {
        path: "/notification",
        element: (
          <PrivateRoute>
            {/* <Suspense fallback={<Loader />}> */}
            <Notification  />
            {/* </Suspense> */}
          </PrivateRoute>
        ),
      },
      {
        path: "/highlights",
        element: (
          <PrivateRoute>
            {/* <Suspense fallback={<Loader />}> */}
            <HighLights />
            {/* </Suspense> */}
          </PrivateRoute>
        ),
      },
      {
        path: "/my-notes",
        element: (
          <PrivateRoute>
            {/* <Suspense fallback={<Loader />}> */}
            <MyNotes />
            {/* </Suspense> */}
          </PrivateRoute>
        ),
      },
    ],
  },
]);
