import React from "react";
import { BASE_URL } from "../../config/confir";

const AchiveCard = ({ title, description, image }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="achiveBox">
        <img width={200} src={`${BASE_URL}/files/${image}`} alt={`${title}`} />
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AchiveCard;
