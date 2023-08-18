import React from "react";
import cover from "../../assets/images/smCover.png";
import content from "../../assets/images/smSec.png";
import subcontent from "../../assets/images/smthree.png";
import bookCover from "../../assets/images/bookCover.png";

const ReadBooks = () => {
  return (
    <div className="previewBook mb-ebook">
      <div className="row bookHeight m-0 gap-5">
        <div className="col-12 col-lg-3 bookScroll">
          <div className="bookIndex d-flex flex-column">
            <img src={cover} alt="" />
            <img src={content} alt="" />
            <img src={subcontent} alt="" />
            <img src={subcontent} alt="" />
            <img src={subcontent} alt="" />
            <img src={subcontent} alt="" />
            <img src={subcontent} alt="" />
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <div className="detalisPage">
            <img
              className="img-fluid w-100 h-100"
              src={bookCover}
              alt="Book Cover"
            />
          </div>
        </div>
        <div className="col-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default ReadBooks;
