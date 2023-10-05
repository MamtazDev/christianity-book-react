import React from "react";
import "./LatestVideo.css";
import { Link } from "react-router-dom";
const LatestVideo = () => {
  return (
    <>
      <div className="latestVideo mb_all">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="videoBox">
                <iframe
                  src="https://www.youtube.com/embed/zrI3XRFSwY8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="latestVideoInner">
                <article>
                  <h2>
                    Checkout my Latest<span className="txt_curve">Video</span>!
                  </h2>
                  <div className="disorder">Christianity is My Mental Disorder</div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text.
                  </p>
                  <button className="watch_btn"><Link to="/">Watch Video</Link></button>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestVideo;
