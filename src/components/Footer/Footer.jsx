import React from "react";
import facebook from "../../assets/images/fb.png";
import twitter from "../../assets/images/twitter.png";
import youtube from "../../assets/images/youtube.png";
import rightArrow from "../../assets/images/right_arrow.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container d-flex align-items-start flex-wrap footer_gap">
        <p style={{ fontSize: "40px" }} className="">
          Your Logo
        </p>
        <div className="d-flex justify-content-center  footerBox gap-2">
          <div></div>
          <div style={{ maxWidth: "700px" }}>
            <p className="mb_4">
              Do You Seek Answers? Reach Out to Me for a Question, at an
              Affordable Rate of $20.
            </p>
            <div className="footer_button">
              <Link to="/contact" className="send_msg_button">
                Send me a Message
                <img src={rightArrow} alt="" style={{ marginLeft: "10px" }} />
              </Link>
            </div>
            <div className="linkFooter d-flex justify-content-center align-items-center mb_4 gap-5">
              <a href="/">Home</a>
              <a href="/contact">Contact Me</a>
              <a href="/faq">Faq</a>
            </div>
            <div className="socialLink d-flex justify-content-center align-items-center mb_4">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
