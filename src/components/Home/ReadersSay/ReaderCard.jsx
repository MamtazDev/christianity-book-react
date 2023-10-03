import React from "react";
import round1 from "../../../assets/images/round_pp1.png";
const ReaderCard = ({ img, name }) => {
  return (
    <div>
      <div className="aboutMeInner text-center">
        <img src={img} alt="Profile" />
        <span>{name}</span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
};

export default ReaderCard;
