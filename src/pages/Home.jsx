import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AchiveSection from "../components/Home/AchiveSection";
import ClientGuide from "../components/Home/ClientGuide/ClientGuide";
import ReadersSay from "../components/Home/ReadersSay/ReadersSay";
import LatestVideo from "../components/Home/LatestVideo/LatestVideo";
import PointsCovered from "../components/Home/PointsCovered/PointsCovered";
import Author from "../components/Home/Author/Author";
// import UserProfileMenu from "../components/Header/UserProfileMenu ";
import Banner from "./../components/Home/Banner/Banner";
import ImagePopUp from "../components/Home/ImagePopUp/ImagePopUp";
import UserProfileMenu from "../components/Header/UserProfileMenu ";

const Home = () => {
  return (
    <>
      {/* {userData ? <UserProfileMenu /> : <Header />} */}
      <Header />
      {/* <UserProfileMenu /> */}
      <main>
        <Banner />
        <AchiveSection />
        <ClientGuide />
        <ReadersSay />
        <LatestVideo />
        <PointsCovered />
        <ImagePopUp />
        <Author />
      </main>
      <Footer />
    </>
  );
};

export default Home;
