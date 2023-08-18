import React from "react";
import PageHeading from "../components/Utils/PageHeading";
import ReadBooks from "../components/ReadBook/ReadBooks";
import Pagination from "../components/Utils/Pagination";

const ReadBook = () => {
  return (
    <div className="mb_100">
      <div className="container mb_100">
        <PageHeading>Read Book</PageHeading>
        <h3 className="mb-5 bookName">
          Christianity is My Mental Disorder: A Client
          <br className="d-none d-lg-block" />
          Guide to Recovery.
        </h3>
      </div>

      <ReadBooks />
      <Pagination />
    </div>
  );
};

export default ReadBook;
