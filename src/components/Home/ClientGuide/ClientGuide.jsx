import React from "react";
import rightArrow from "../../../assets/images/right_arrow.png";
import './ClientGuide.css'
const ClientGuide = () => {
  return (
    <div>
      <div>
        <div class="clientGuide mb_all">
          <div class="container">
            <div class="clientGuideInner d-flex justify-content-between align-items-center">
              <div>
                <h3>Christianity is My Mental Disorder:</h3>
                <h3> A Client Guide to Recovery.</h3>
              </div>
              <a href="#" class="d-flex align-items-center gap-1">
                Read Now <img src={rightArrow} alt="Arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientGuide;
