import React from "react";
import "./LatestVideo.css";
import { Link } from "react-router-dom";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";
import videoThumbnail from "../../../assets/images/videoThumbnail.png"


const LatestVideo = () => {
  return (
    <>
      <div className="latestVideo mb_all">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5">
              <div className="videoBox">
                <YoutubeVideo videoId="zrI3XRFSwY8" thumbnailUrl={videoThumbnail} />
                {/* https://www.youtube.com/embed/zrI3XRFSwY8 */}
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
                  <button className="watch_btn"><Link to="https://youtu.be/zrI3XRFSwY8?si=8F1tu4sLAzq_5jn7" target="_blank">Watch Video</Link></button>
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
