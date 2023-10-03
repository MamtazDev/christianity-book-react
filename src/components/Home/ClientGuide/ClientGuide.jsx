import React from "react";
import rightArrow from "../../../assets/images/right_arrow.png";
import './ClientGuide.css'
import { Link } from "react-router-dom";
const ClientGuide = () => {
  return (
    <div>
      <div>
        <div className="clientGuide mb_all">
          <div className="container">
            <div className="clientGuideInner d-flex justify-content-between align-items-center">
              <div>
                <h3>Christianity is My Mental Disorder:</h3>
                <h3> A Client Guide to Recovery.</h3>
              </div>
              <Link to="/read-book" className="d-flex align-items-center gap-1">
                Read Now <img src={rightArrow} alt="Arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientGuide;
