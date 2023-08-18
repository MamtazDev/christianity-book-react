import React from "react";

const Pagination = () => {
  return (
    <div className="b-pagination-outer d-flex justify-content-between align-items-center w-100 ms-auto mb_100">
      <ul className="border-pagination d-flex justify-content-between align-items-center mx-end">
        <li>
          <a href="#">
            <i className="fa fa-angle-left"></i>
          </a>
        </li>
        <li>
          <a href="#" className="active">
            1
          </a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">...</a>
        </li>

        <li>
          <a href="#">10</a>
        </li>
        <li>
          <a href="#">11</a>
        </li>
        <li>
          <a className="activeNext" href="#">
            <i className="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
      <div className="showPage">
        <a href="#">Showing 1 - 2</a>
      </div>
    </div>
  );
};

export default Pagination;
