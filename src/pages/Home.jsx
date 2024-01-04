import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AchiveSection from "../components/Home/AchiveSection";
import ClientGuide from "../components/Home/ClientGuide/ClientGuide";
import ReadersSay from "../components/Home/ReadersSay/ReadersSay";
import LatestVideo from "../components/Home/LatestVideo/LatestVideo";
import PointsCovered from "../components/Home/PointsCovered/PointsCovered";
import Author from "../components/Home/Author/Author";

import Banner from "./../components/Home/Banner/Banner";
import BannerHero from "./../components/Home/Banner/BannerHero";
import ImagePopUp from "../components/Home/ImagePopUp/ImagePopUp";

import axios from "axios";
import { BASE_URL } from "../config/confir";

const Home = () => {
  const [allBooks, setAllBooks] = useState(null);
  const getPdf = async () => {
    const result = await axios.get(`${BASE_URL}/api/books/get-files`);
    setAllBooks(result.data.data);
  };

  useEffect(() => {
    getPdf();
  }, []);

  return (
    <>
      {/* {userData ? <UserProfileMenu /> : <Header />} */}
      <Header />
      {/* <UserProfileMenu /> */}

      <main>
        <BannerHero />
        <div>
          {allBooks?.map((item) => (
            <Banner book={item} />
          ))}
        </div>
        {/* <Banner /> */}
        {/* <AchiveSection /> */}
        <ClientGuide />
        {/* <ReadersSay /> */}
        <LatestVideo />
        {/* <PointsCovered /> */}
        <ImagePopUp />
        <Author />
      </main>
      <Footer />
    </>
  );
};

export default Home;
