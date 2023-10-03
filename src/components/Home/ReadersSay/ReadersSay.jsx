import React from "react";
import "./ReadersSay.css";
import round1 from "../../../assets/images/round_pp1.png";
import round2 from "../../../assets/images/round_pp2.png";
import round3 from "../../../assets/images/round_pp3.png";
const ReadersSay = () => {
  return (
    <div>
      <div>
        <div class="mb_all">
          <div class="container">
            <h2>
              What My <span class="txt_curve">Readers</span> Say
              <br />
              About Me.
            </h2>
            <p class="mb_30 sub_header">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="aboutMeInner text-center">
                  <img src={round1} alt="Profile" />
                  <span>Indiana James</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="aboutMeInner text-center">
                  <img src={round2} alt="Profile" />
                  <span>John Wick</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="aboutMeInner text-center">
                  <img src={round3} alt="Profile" />
                  <span>Sara James</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadersSay;
