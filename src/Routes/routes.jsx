import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy, startTransition } from "react";
import PrivateRoute from "./PrivateRoute";

// const import = (path) =>
//   lazy(() => import(path).then((module) => ({ default: module.default })));

const Home = import("../pages/Home");
const LogIn = import("../pages/LogIn");
const SignUp = import("../pages/SignUp");
const ResetPassword = import("../pages/ResetPassword");
const ResetVerification = import("../pages/ResetVerification");
const ChangePassword = import("../pages/ChangePassword");
const CompleteProfile = import("../pages/CompleteProfile");
const AccountSettings = import("../pages/AccountSettings");
const Bookmark = import("../pages/Bookmark");
const Layout = import("../Layout/Layout");
const ReadBook = import("../pages/ReadBook");
const Faq = import("../pages/Faq");
const Notification = import("../pages/Notification");
const HighLights = import("../pages/HighLights");
const MyNotes = import("../pages/MyNotes");
const Subscription = import("../pages/Subscription");
const AuthorChat = import("../components/AuthorChat/AuthorChat");
const Contact = import("../pages/Contact");

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
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
