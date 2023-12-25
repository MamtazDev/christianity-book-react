import React, { useEffect, useState } from "react";
import banner from "../../../assets/images/banner.png";
import rightArrow from "../../../assets/images/right_arrow.png";
import { Link } from "react-router-dom";
import "./Banner.css";
import { getCoupon } from "../../../api/coupon";
import { BASE_URL } from "../../../config/confir";
import BannerHeroImg from "../../../assets/images/BannerHero.jpeg";
const Banner = () => {
  return (
    <section>
      <div
        className="bannerr  "
        style={{ marginTop: 80, marginBottom: 50, backgroundColor: "#0E0E0E" }}
      >
        <div className="container">
          <div className="text-center">
            <img className="img-fluid" src={BannerHeroImg} alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
