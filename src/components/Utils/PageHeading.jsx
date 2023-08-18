import React from "react";
import nextArrow from "../../assets/images/next_arrow.png";

const PageHeading = ({ children }) => {
  return (
    <div className="forPosition mb_100">
      <div className="d-flex justify-content-start align-items-center mb-4 mb-lg-5 gap-2">
        <a href="index.html">Home</a>
        <img src={nextArrow} alt="Arrow" />
        <a href="" className="activePage">
          {children}
        </a>
      </div>
    </div>
  );
};

export default PageHeading;
