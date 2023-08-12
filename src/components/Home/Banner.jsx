import React from "react";
import banner from "../../assets/images/banner.png";
import rightArrow from "../../assets/images/right_arrow.png";

const Banner = () => {
  return (
    <section>
      <div className="banner mb_all">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <span>Let’s make the best Investment!</span>
              <h1>
                Christianity is My Mental Disorder: A Client Guide to Recovery.
              </h1>
              <p>
                "Obtain a Complimentary Copy Using a Free Promo Code: Freedom”
              </p>
              <a href="#">
                Read Now <img src={rightArrow} alt="" />
              </a>
            </div>
            <div className="col-12 col-lg-6">
              <div className="text-end">
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
