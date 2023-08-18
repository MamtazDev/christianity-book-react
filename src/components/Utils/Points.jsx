import React from "react";

const Points = ({ options }) => {
  return (
    <div className="row">
      {options?.map((option, index) => (
        <div key={index} className="col-12 col-lg-4 p-1">
          <div className="bookmarkInner">
            <span className="mb-1">Point {index + 1}</span>
            <article>
              <span className="mb-1">{option.title}</span>
              <p>{option.description}</p>
            </article>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Points;
