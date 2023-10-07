import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import PrivateRoute from "./PrivateRoute";
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
      <Suspense fallback={<Loader/>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LogIn />
      </Suspense>
    ),
  },

  {
    path: "/signUp",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPassword />
      </Suspense>
    ),
  },

  {
    path: "/reset-verification",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ResetVerification />
      </Suspense>
    ),
  },

  {
    path: "/change-password",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ChangePassword />
      </Suspense>
    ),
  },

  {
    path: "/complete-profile",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CompleteProfile />
      </Suspense>
    ),
  },
  {
    path: "/subscription",
    element: (
      <PrivateRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <Subscription />
        </Suspense>
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
          <Suspense fallback={<div>Loading...</div>}>
            <Faq />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/account-settings",
        element: (
          <PrivateRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <AccountSettings />
            </Suspense>
          </PrivateRoute>
        ),
      },

      {
        path: "/author-chat",
        element: (
          <PrivateRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <AuthorChat />
            </Suspense>
          </PrivateRoute>
        ),
      },

      {
        path: "/bookmark",
        element: (
          <PrivateRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <Bookmark />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/read-book",
        element: (
          <PrivateRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <ReadBook />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/notification",
        element: (
          <PrivateRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <Notification />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/highlights",
        element: (
          <PrivateRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <HighLights />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-notes",
        element: (
          <PrivateRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <MyNotes />
            </Suspense>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
