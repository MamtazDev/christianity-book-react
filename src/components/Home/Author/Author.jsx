import React from "react";
import author from "../../../assets/images/author.png";
import "./Author.css";
const Author = () => {
  return (
    <>
      <div class="aboutAuthor mb_all">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-lg-5">
              <div class="authorImage">
                <img class="img-fluid" src={author} alt="" />
              </div>
              <div class="authorName text-center">
                <span>“David Lory”</span>
              </div>
            </div>
            <div class="col-12 col-lg-7">
              <div class="authorInner">
                <h2 class="mb_30">
                  Author <span class="txt_curve">Introduction</span>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised.
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
