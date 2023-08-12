import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Home/Banner";
import AchiveSection from "../components/Home/AchiveSection";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Banner />
        <AchiveSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;
