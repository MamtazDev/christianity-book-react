import React from "react";
import PageHeading from "../components/Utils/PageHeading";
import Pagination from "../components/Utils/Pagination";
import BookMarkPoints from "../components/BookMark/BookMarkPoints";

const Bookmark = () => {
  return (
    <div>
      <div className="container">
        <PageHeading>Bookmarks</PageHeading>
        <h2 className="mb_40">
          You can check your <span className="txt_curve">Bookmarks</span>
          <br className="d-none d-lg-block" /> here!
        </h2>

        <BookMarkPoints />
        {/* <!-- Paginattion Start --> */}
        <Pagination />
        {/* <!-- Pagination End --> */}
      </div>
    </div>
  );
};

export default Bookmark;
