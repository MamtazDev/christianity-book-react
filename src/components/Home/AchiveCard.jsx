import React from "react";

const AchiveCard = ({ title, description, image }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="achiveBox">
        <img src={image} alt={`${title}`} />
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AchiveCard;
