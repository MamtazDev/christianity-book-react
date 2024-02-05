import React, { useEffect, useState } from "react";
import banner from "../../../assets/images/banner.png";
import rightArrow from "../../../assets/images/right_arrow.png";
import { Link } from "react-router-dom";
import "./Banner.css";

import { BASE_URL, AWS_BUCKET_PATH } from "../../../config/confir";
import { getBookCouponInfo } from "../../../api/coupon";
const Banner = ({ book }) => {
  const [couponCode, setCouponCode] = useState(null);

  const getBookCoupon = async () => {
    const res = await getBookCouponInfo(book?._id);
    setCouponCode(res);
  };

  useEffect(() => {
    getBookCoupon();
  }, [book]);

  return (
    <section>
      <div className="banner mb_all">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6 ">
              {/* <span>Let’s make the best Investment!</span> */}
              {couponCode && (
                <span
                  className="bg-info badge "
                  style={{ fontSize: "16px", whiteSpace: "pre-wrap" }}
                >
                  Use this coupon at checkout:{" "}
                  {couponCode?.status && couponCode?.code}
                </span>
              )}
              <h1>{book?.title}</h1>
              <p
                className="mb-5"
                style={{ maxHeight: 500, overflowY: "scroll" }}
              >
                {book?.description}
              </p>

              {book?.price != 0 && (
                <Link to={`/read-book/${book._id}`}>
                  Read & Listen Now ${book?.price}{" "}
                  <img src={rightArrow} alt="" />
                </Link>
              )}
            </div>
            <div className="col-12 col-lg-6 mt-5">
              <div className="d-flex justify-content-start justify-content-lg-end">
                <img
                  className="img-fluid"
                  src={`${AWS_BUCKET_PATH}/${book.coverPic}`}
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
