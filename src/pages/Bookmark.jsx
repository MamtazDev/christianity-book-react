import React from "react";
import PageHeading from "../components/Utils/PageHeading";
import Pagination from "../components/Utils/Pagination";
import BookMarkPoints from "../components/BookMark/BookMarkPoints";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Bookmark = () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};

export default Bookmark;
