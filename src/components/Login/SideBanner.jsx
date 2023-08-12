import React from "react";
import "./SideBanner.css";

const SideBanner = ({ image }) => {
  return (
    <div className="col-6 p-0">
      <div className="h-100" style={{ padding: "20px" }}>
        <div
          className="bannerContainer"
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 27.38%, #000 100%), url(${image})`,
          }}
        >
          <h1>
            "Unleash the Power of Words with David Lory: Where Imagination Meets
            Pen."
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SideBanner;
