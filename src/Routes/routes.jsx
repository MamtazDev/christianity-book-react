import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import Loader from "../components/Utils/Loader";
const Home = lazy(() => import("../pages/Home"));
const LogIn = lazy(() => import("../pages/LogIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const ResetPassword = lazy(() => import("../pages/ResetPassword"));
const ResetVerification = lazy(() => import("../pages/ResetVerification"));
const ChangePassword = lazy(() => import("../pages/ChangePassword"));
const CompleteProfile = lazy(() => import("../pages/CompleteProfile"));
const AccountSettings = lazy(() => import("../pages/AccountSettings"));
const Bookmark = lazy(() => import("../pages/Bookmark"));
const Layout = lazy(() => import("../Layout/Layout"));
const ReadBook = lazy(() => import("../pages/ReadBook"));
const Faq = lazy(() => import("../pages/Faq"));
const Notification = lazy(() => import("../pages/Notification"));
const HighLights = lazy(() => import("../pages/HighLights"));
const MyNotes = lazy(() => import("../pages/MyNotes"));
const Subscription = lazy(() => import("../pages/Subscription"));
const AuthorChat = lazy(() => import("../components/AuthorChat/AuthorChat"));
const Contact = lazy(() => import("../pages/Contact"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loader />}>
        <LogIn />
      </Suspense>
    ),
  },

  {
    path: "/signUp",
    element: (
      <Suspense fallback={<Loader />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <Suspense fallback={<Loader />}>
        <ResetPassword />
      </Suspense>
    ),
  },

  {
    path: "/reset-verification",
    element: (
      <Suspense fallback={<Loader />}>
        <ResetVerification />
      </Suspense>
    ),
  },

  {
    path: "/change-password",
    element: (
      <Suspense fallback={<Loader />}>
        <ChangePassword />
      </Suspense>
    ),
  },

  {
    path: "/complete-profile",
    element: (
      <Suspense fallback={<Loader />}>
        <CompleteProfile />
      </Suspense>
    ),
  },

  {
    path: "/subscription",
    element: (

      <Suspense fallback={<Loader />}>
        <Subscription />
      </Suspense>

    ),
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/faq",
        element: (
          <Suspense fallback={<Loader />}>
            <Faq />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/account-settings",
        element: (

          <Suspense fallback={<Loader />}>
            <AccountSettings />
          </Suspense>

        ),
      },

      {
        path: "/author-chat",
        element: (

          <Suspense fallback={<Loader />}>
            <AuthorChat />
          </Suspense>

        ),
      },

      {
        path: "/bookmark",
        element: (

          <Suspense fallback={<Loader />}>
            <Bookmark />
          </Suspense>
        ),
      },
      {
        path: "/read-book",
        element: (

          <Suspense fallback={<Loader />}>
            <ReadBook />
          </Suspense>

        ),
      },
      {
        path: "/notification",
        element: (

          <Suspense fallback={<Loader />}>
            <Notification />
          </Suspense>

        ),
      },
      {
        path: "/highlights",
        element: (

          <Suspense fallback={<Loader />}>
            <HighLights />
          </Suspense>

        ),
      },
      {
        path: "/my-notes",
        element: (

          <Suspense fallback={<Loader />}>
            <MyNotes />
          </Suspense>

        ),
      },
    ],
  },
]);
