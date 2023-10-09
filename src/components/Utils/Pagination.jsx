import React from "react";
import "./Pagination.css";

const Pagination = ({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i}>
          <a
            href="#"
            className={currentPage === i ? "active" : ""}
            onClick={() => onPageChange(i)} // Add click event handler
          >
            {i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="b-pagination-outer d-flex justify-content-between align-items-center w-100 ml-auto mb_100">
      <ul className="border-pagination d-flex justify-content-between align-items-center ms-end">
        <li>
          <a href="#" onClick={onPrev}>
            <i className="fa fa-angle-left"></i>
          </a>
        </li>
        {renderPageNumbers()}
        <li>
          <a href="#" onClick={onNext}>
            <i className="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
      <div className="showPage">
        <a href="#">
          Showing {currentPage} - {currentPage * 3}{" "}
        </a>
      </div>
    </div>
  );
};

export default Pagination;
