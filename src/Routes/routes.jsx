import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy, startTransition } from "react";
import PrivateRoute from "./PrivateRoute";

const importComponent = (path) =>
  lazy(() => import(path).then((module) => ({ default: module.default })));

const Home = importComponent("../pages/Home");
const LogIn = importComponent("../pages/LogIn");
const SignUp = importComponent("../pages/SignUp");
const ResetPassword = importComponent("../pages/ResetPassword");
const ResetVerification = importComponent("../pages/ResetVerification");
const ChangePassword = importComponent("../pages/ChangePassword");
const CompleteProfile = importComponent("../pages/CompleteProfile");
const AccountSettings = importComponent("../pages/AccountSettings");
const Bookmark = importComponent("../pages/Bookmark");
const Layout = importComponent("../Layout/Layout");
const ReadBook = importComponent("../pages/ReadBook");
const Faq = importComponent("../pages/Faq");
const Notification = importComponent("../pages/Notification");
const HighLights = importComponent("../pages/HighLights");
const MyNotes = importComponent("../pages/MyNotes");
const Subscription = importComponent("../pages/Subscription");
const AuthorChat = importComponent("../components/AuthorChat/AuthorChat");
const Contact = importComponent("../pages/Contact");

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
