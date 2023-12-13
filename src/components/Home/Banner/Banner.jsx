import React, { useEffect, useState } from "react";
import banner from "../../../assets/images/banner.png";
import rightArrow from "../../../assets/images/right_arrow.png";
import { Link } from "react-router-dom";
import "./Banner.css";
import { getCoupon } from "../../../api/coupon";
const Banner = () => {
  const [couponInfo, setCouponInfo] = useState(null);

  const getCouponCode = async () => {
    const response = await getCoupon();
    if (response.success) {
      setCouponInfo(response?.coupon[0]);
    }
  };
  useEffect(() => {
    getCouponCode();
  }, []);
  return (
    <section>
      <div className="banner mb_all">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 pt-5">
              <span>Let’s make the best Investment!</span>
              <h1>
                Christianity is My Mental Disorder: A Client Guide to Recovery.
              </h1>
              {couponInfo?.status ? (
                <p>
                  "Obtain a Complimentary Copy Using a Free Promo Code:{" "}
                  {couponInfo?.code}”
                </p>
              ) : (
                <p className="mt-5"></p>
              )}

              <Link to="/read-book">
                Read Now <img src={rightArrow} alt="" />
              </Link>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex justify-content-start justify-content-lg-end">
                <img className="img-fluid" src={banner} alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
