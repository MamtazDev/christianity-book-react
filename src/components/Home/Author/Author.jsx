import React from "react";
import author from "../../../assets/images/author.png";
import "./Author.css";
const Author = () => {
  return (
    <>
      <div className="aboutAuthor mb_all">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5">
              <div className="authorImage">
                <img className="img-fluid" src={author} alt="" />
              </div>
              <div className="authorName text-center">
                <span style={{ marginBottom: "10px" }}>“David Lory”</span>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="authorInner">
                <h2 className="mb_30">
                  Author <span className="txt_curve">Introduction</span>
                </h2>
                <p>
                  David Lory is a therapist who specializes in healing trauma
                  and processing past-life recall. He lives with his family
                  between Las Vegas and Death Valley.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Author;
