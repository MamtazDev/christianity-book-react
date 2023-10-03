import React from "react";
import facebook from "../../assets/images/fb.png";
import twitter from "../../assets/images/twitter.png";
import youtube from "../../assets/images/youtube.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="d-flex justify-content-between footerBox gap-2">
          <div>
            <p>Your Logo</p>
          </div>
          <div style={{ maxWidth: "700px" }}>
            <p className="mb-4">
              Do You Seek Answers? Reach Out to Me for a Question, at an
              Affordable Rate of $20.
            </p>
            <div className="linkFooter d-flex justify-content-center align-items-center mb-4 gap-5">
              <a href="/">Home</a>
              <a href="/contact">Contact Me</a>
              <a href="#">Cart</a>
            </div>
            <div className="socialLink d-flex justify-content-center align-items-center mb-4">
              <a href="#">
                <img src={facebook} alt="FaceBook" />
              </a>
              <a href="#">
                <img src={twitter} alt="FaceBook" />
              </a>
              <a href="#">
                <img src={youtube} alt="FaceBook" />
              </a>
            </div>
            <div className="lineBox mb-3"></div>
            <article>
              <p className="d-block">
                © 2023 Christianity Book. All Rights Reserved
              </p>
            </article>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
