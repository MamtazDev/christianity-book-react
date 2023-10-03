import React from "react";
import "./LatestVideo.css";
const LatestVideo = () => {
  return (
    <>
      <div class="latestVideo mb_all">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-5">
              <div class="videoBox">
                <iframe
                  src="https://www.youtube.com/embed/zrI3XRFSwY8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="col-12 col-lg-7">
              <div class="latestVideoInner">
                <article>
                  <h2>
                    Checkout my Latest<span class="txt_curve">Video</span>!
                  </h2>
                  <div class="disorder">Christianity is My Mental Disorder</div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text.
                  </p>
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
