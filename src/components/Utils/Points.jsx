import React from "react";
import "./Pagination.css";

const Points = ({ options, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleOptions = options.slice(startIndex, endIndex);

  return (
    <div className="row">
      {visibleOptions.map((option, index) => (
        <div key={index} className="col-12 col-lg-4 p-1">
          <div className="bookmarkInner">
            <span className="mb-1">Point {startIndex + index + 1}</span>
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
