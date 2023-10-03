import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Home/Banner";
import AchiveSection from "../components/Home/AchiveSection";
import ClientGuide from "../components/Home/ClientGuide/ClientGuide";
import ReadersSay from "../components/Home/ReadersSay/ReadersSay";
import LatestVideo from "../components/Home/LatestVideo/LatestVideo";
import PointsCovered from "../components/Home/PointsCovered/PointsCovered";
import Author from "../components/Home/Author/Author";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <AchiveSection />
        <ClientGuide />
        <ReadersSay />
        <LatestVideo />
        <PointsCovered />
        <Author />
      </main>
      <Footer />
    </>
  );
};

export default Home;
