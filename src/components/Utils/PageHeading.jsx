import React from "react";
import nextArrow from "../../assets/images/next_arrow.png";
import { Link } from "react-router-dom";

const PageHeading = ({ children,path }) => {
  return (
    <div className="forPosition ">
      <div className="d-flex justify-content-start align-items-center mb-4 mb-lg-5 gap-2">
        <Link to="/">Home</Link>
        <img src={nextArrow} alt="Arrow" />
        <Link to={`${path}`} className="activePage">
          {children}
        </Link>
      </div>
    </div>
  );
};

export default PageHeading;
