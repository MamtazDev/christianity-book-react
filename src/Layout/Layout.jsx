import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import UserProfileMenu from "../components/Header/UserProfileMenu ";
import { useEffect, useState } from "react";

const Layout = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);
  return (
    <>
      {userData ? <UserProfileMenu /> : <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
