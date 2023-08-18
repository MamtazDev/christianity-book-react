import React from "react";
import nextArrow from "../../assets/images/next_arrow.png";
import { Link } from "react-router-dom";

const PageHeading = ({ children }) => {
  return (
    <div className="forPosition ">
      <div className="d-flex justify-content-start align-items-center mb-4 mb-lg-5 gap-2">
        <Link href="/">Home</Link>
        <img src={nextArrow} alt="Arrow" />
        <a href="" className="activePage">
          {children}
        </a>
      </div>
    </div>
  );
};

export default PageHeading;
